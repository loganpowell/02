import { peek } from "@thi.ng/arrays"
import {
    alts,
    fsm,
    not,
    repeat,
    seq,
    str,
    untilStr,
    whitespace
} from "@thi.ng/fsm"
/**
 * Parser state IDs
 */
var State
;(function(State) {
    State[(State["BLOCKQUOTE"] = 0)] = "BLOCKQUOTE"
    State[(State["CODE"] = 1)] = "CODE"
    State[(State["CODEBLOCK"] = 2)] = "CODEBLOCK"
    State[(State["EMPHASIS"] = 3)] = "EMPHASIS"
    State[(State["END_BLOCKQUOTE"] = 4)] = "END_BLOCKQUOTE"
    State[(State["END_LI"] = 5)] = "END_LI"
    State[(State["END_PARA"] = 6)] = "END_PARA"
    State[(State["END_HEADING"] = 7)] = "END_HEADING"
    State[(State["END_TABLE"] = 8)] = "END_TABLE"
    State[(State["HEADING"] = 9)] = "HEADING"
    State[(State["IMG"] = 10)] = "IMG"
    State[(State["LINK"] = 11)] = "LINK"
    State[(State["LI"] = 12)] = "LI"
    State[(State["PARA"] = 13)] = "PARA"
    State[(State["START"] = 14)] = "START"
    State[(State["START_CODEBLOCK"] = 15)] = "START_CODEBLOCK"
    State[(State["STRIKE"] = 16)] = "STRIKE"
    State[(State["STRONG"] = 17)] = "STRONG"
    State[(State["TABLE"] = 18)] = "TABLE"
})(State || (State = {}))
/**
 * Default hiccup element factories
 */
const DEFAULT_TAGS = {
    blockquote: (...xs) => ["blockquote", ...xs],
    code: body => ["code", body],
    codeblock: (lang, body) => ["pre", { lang }, body],
    em: body => ["em", body],
    heading: (level, xs) => [level < 7 ? `h${level}` : "p", ...xs],
    hr: () => ["hr"],
    img: (src, alt) => ["img", { src, alt }],
    li: xs => ["li", ...xs],
    link: (href, body) => ["a", { href }, body],
    list: (type, xs) => [type, ...xs],
    paragraph: xs => ["p", ...xs],
    strong: body => ["strong", body],
    strike: body => ["del", body],
    table: rows => ["table", ["tbody", ...rows]],
    td: (_, xs) => ["td", ...xs],
    tr: (_, xs) => ["tr", ...xs]
}
const BQUOTE = ">"
const CODE = "`"
const CODEBLOCK = "```"
const CODEBLOCK_END = "\n```\n"
const EM = "_"
const HD = "#"
const HR = "-"
const IMG = "!["
const LI = "- "
const LINK_LABEL = "["
const LINK_LABEL_END = "]"
const LINK_HREF = "("
const LINK_HREF_END = ")"
const NL = "\n"
const CRLF = "\r\n"
const STRIKE = "~~"
const STRONG = "**"
const TD = "|"
// state / context handling helpers
const transition = (ctx, id) => ((ctx.children = []), (ctx.body = ""), [id])
const push = (id, next) => ctx => (
    ctx.stack.push({ id, children: ctx.children.concat(ctx.body) }),
    transition(ctx, next)
)
const pop = result => (ctx, body) => {
    const { id, children } = ctx.stack.pop()
    children.push(result(ctx, body))
    ctx.children = children
    ctx.body = ""
    return [id]
}
const collectChildren = ctx => (ctx.children.push(ctx.body), ctx.children)
const collect = id => (ctx, buf) => ((ctx.body += buf.join("")), [id])
const collectHeading = tag => ctx => [
    14 /* START */,
    [tag(ctx.hd, collectChildren(ctx))]
]
const collectAndRestart = tag => ctx => [
    14 /* START */,
    [tag(collectChildren(ctx))]
]
const collectBlockQuote = ctx => (
    ctx.children.push(ctx.body, ["br"]), (ctx.body = ""), [0 /* BLOCKQUOTE */]
)
const collectCodeBlock = tag => (ctx, body) => [
    14 /* START */,
    [tag(ctx.lang, body)]
]
const collectLi = (ctx, tag) => ctx.container.push(tag(collectChildren(ctx)))
const collectList = (type, list, item) => ctx => (
    collectLi(ctx, item), [14 /* START */, [list(type, ctx.container)]]
)
const collectTD = tag => ctx => (
    ctx.children.push(ctx.body),
    ctx.container.push(tag(peek(ctx.stack).container.length, ctx.children)),
    transition(ctx, 18 /* TABLE */)
)
const collectTR = tag => ctx => {
    const rows = peek(ctx.stack).container
    rows.push(tag(rows.length, ctx.container))
    ctx.container = []
    return transition(ctx, 8 /* END_TABLE */)
}
const collectTable = tag => ctx => {
    const rows = ctx.stack.pop().container
    rows.splice(1, 1)
    return [14 /* START */, [tag(rows)]]
}
const collectInline = fn => pop((ctx, body) => fn(ctx.body + body.trim()))
const heading = (ctx, body) => (
    (ctx.hd = body.length), transition(ctx, 9 /* HEADING */)
)
const matchInline = id => [
    str("![", push(id, 10 /* IMG */)),
    str(LINK_LABEL, push(id, 11 /* LINK */)),
    str(STRIKE, push(id, 16 /* STRIKE */)),
    str(STRONG, push(id, 17 /* STRONG */)),
    str(EM, push(id, 3 /* EMPHASIS */)),
    str(CODE, push(id, 1 /* CODE */))
]
const matchLink = result =>
    seq(
        [
            untilStr(
                LINK_LABEL_END,
                (ctx, body) => ((ctx.title = body), undefined)
            ),
            str(LINK_HREF),
            untilStr(
                LINK_HREF_END,
                (ctx, body) => ((ctx.href = body), undefined)
            )
        ],
        pop(ctx => result(ctx.href, ctx.title))
    )
const matchPara = (id, next) =>
    alts(
        [
            ...matchInline(id),
            str(CRLF, ctx => ((ctx.body += " "), [next])),
            str(NL, ctx => ((ctx.body += " "), [next]))
        ],
        collect(id)
    )
const newPara = (ctx, buf) => (
    (ctx.body = buf.join("")), (ctx.children = []), [13 /* PARA */]
)
const newParaInline = next => ctx => (
    ctx.stack.push({ id: 13 /* PARA */, children: [] }), transition(ctx, next)
)
const newParaCode = (ctx, x) => (
    (ctx.body = x[1]),
    ctx.stack.push({ id: 13 /* PARA */, children: [] }),
    [1 /* CODE */]
)
const newList = ctx => ((ctx.container = []), transition(ctx, 12 /* LI */))
const newTable = ctx => (
    ctx.stack.push({ id: 18 /* TABLE */, container: [] }),
    (ctx.container = []),
    transition(ctx, 18 /* TABLE */)
)
/**
 * Main parser / transducer. Defines state map with the various Markdown
 * syntax matchers and state transition handlers. The returned parser
 * itself is only used in `index.ts`.
 */
export const parse = _tags => {
    const tags = Object.assign({}, DEFAULT_TAGS, _tags)
    return fsm(
        {
            [14 /* START */]: alts(
                [
                    whitespace(() => [14 /* START */]),
                    repeat(str(HD), 1, Infinity, heading),
                    str(BQUOTE, ctx => transition(ctx, 0 /* BLOCKQUOTE */)),
                    str(LI, newList),
                    alts(
                        [
                            seq([str(CODE), not(str(CODE))], newParaCode),
                            str(CODEBLOCK, () => [15 /* START_CODEBLOCK */])
                        ],
                        undefined,
                        (_, next) => next
                    ),
                    seq([repeat(str(HR), 3, Infinity), str(NL)], () => [
                        14 /* START */,
                        [tags.hr()]
                    ]),
                    str(IMG, newParaInline(10 /* IMG */)),
                    str(LINK_LABEL, newParaInline(11 /* LINK */)),
                    str(STRONG, newParaInline(17 /* STRONG */)),
                    str(STRIKE, newParaInline(16 /* STRIKE */)),
                    str(EM, newParaInline(3 /* EMPHASIS */)),
                    str(TD, newTable)
                ],
                newPara
            ),
            [13 /* PARA */]: matchPara(13 /* PARA */, 6 /* END_PARA */),
            [6 /* END_PARA */]: alts(
                [
                    ...matchInline(13 /* PARA */),
                    str(CRLF, collectAndRestart(tags.paragraph)),
                    str(NL, collectAndRestart(tags.paragraph))
                ],
                collect(13 /* PARA */)
            ),
            [0 /* BLOCKQUOTE */]: matchPara(
                0 /* BLOCKQUOTE */,
                4 /* END_BLOCKQUOTE */
            ),
            [4 /* END_BLOCKQUOTE */]: alts(
                [
                    ...matchInline(0 /* BLOCKQUOTE */),
                    str(BQUOTE, collectBlockQuote),
                    str(CRLF, collectAndRestart(tags.blockquote)),
                    str(NL, collectAndRestart(tags.blockquote))
                ],
                collect(0 /* BLOCKQUOTE */)
            ),
            [9 /* HEADING */]: matchPara(9 /* HEADING */, 7 /* END_HEADING */),
            [7 /* END_HEADING */]: alts(
                [
                    ...matchInline(9 /* HEADING */),
                    str(CRLF, collectHeading(tags.heading)),
                    str(NL, collectHeading(tags.heading))
                ],
                collect(9 /* HEADING */)
            ),
            [15 /* START_CODEBLOCK */]: untilStr(
                NL,
                (ctx, lang) => ((ctx.lang = lang), [2 /* CODEBLOCK */])
            ),
            [2 /* CODEBLOCK */]: untilStr(
                CODEBLOCK_END,
                collectCodeBlock(tags.codeblock)
            ),
            [12 /* LI */]: matchPara(12 /* LI */, 5 /* END_LI */),
            [5 /* END_LI */]: alts(
                [
                    str(CRLF, collectList("ul", tags.list, tags.li)),
                    str(NL, collectList("ul", tags.list, tags.li)),
                    str(
                        LI,
                        ctx => (
                            collectLi(ctx, tags.li),
                            transition(ctx, 12 /* LI */)
                        )
                    )
                ],
                collect(12 /* LI */)
            ),
            [11 /* LINK */]: matchLink(tags.link),
            [10 /* IMG */]: matchLink(tags.img),
            [17 /* STRONG */]: untilStr(STRONG, collectInline(tags.strong)),
            [16 /* STRIKE */]: untilStr(STRIKE, collectInline(tags.strike)),
            [3 /* EMPHASIS */]: untilStr(EM, collectInline(tags.em)),
            [1 /* CODE */]: untilStr(CODE, collectInline(tags.code)),
            [18 /* TABLE */]: alts(
                [
                    ...matchInline(18 /* TABLE */),
                    str(TD, collectTD(tags.td)),
                    str(CRLF, collectTR(tags.tr)),
                    str(NL, collectTR(tags.tr))
                ],
                collect(18 /* TABLE */)
            ),
            [8 /* END_TABLE */]: alts([
                str(CRLF, collectTable(tags.table)),
                str(NL, collectTable(tags.table)),
                str(TD, () => [18 /* TABLE */])
            ])
        },
        { stack: [] },
        14 /* START */
    )
}
