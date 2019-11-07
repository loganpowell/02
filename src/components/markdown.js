// prettier-ignore
export const CUSTOM_TAGS = {
  heading    : (level, xs)  => [level < 7 ? `h${level}` : "p", ...xs],
  list       : (type, xs)   => [type, ...xs],
  blockquote : (xs)         => ["blockquote", ...xs],
  code       : body         => ["code", body],
  codeblock  : (lang, body) => ["pre", { lang }, body],
  em         : body         => ["em", body],
  hr         : ()           => ["hr"],
  img        : (src, alt)   => ["img", { src, alt }],
  li         : xs           => ["li", ...xs],
  link       : (href, body) => ["a", { href }, body],
  paragraph  : xs           => ["p", ...xs],
  strong     : body         => ["strong", body],
  strike     : body         => ["del", body],
  table      : rows         => ["table", ["tbody", ...rows]],
  td         : (_, xs)      => ["td", ...xs],
  tr         : (_, xs)      => ["tr", ...xs]
}
