import css from '@styled-system/css'
import de from 'decamelize-keys-deep'
import * as C from '@thi.ng/checks'
import {
    at_media,
    injectStyleSheet,
    PRETTY,
    css as CSS
} from '@thi.ng/hiccup-css'

/**
 *@todo: Test with Router.. tomato
 **/
export const fireStyles = theme => (styles, hash) => {
    const entries = Object.entries(de(css(styles)(theme), '-'))
    console.log('entries:', entries)
    let first = []
    let last = []
    for (let [prop, spec] of entries) {
        // pseudo selector
        if (C.isObject(spec) && prop.slice(0, 1) === '&') {
            last.push([prop.slice(1), spec])
            // media query
        } else if (C.isObject(spec) && prop.slice(0, 6) === '@media') {
            let [key, val] = Object.entries(spec)[0]
            // console.log('entry of interest:', [key, val])
            let rgx = /(\()(.*)(?=\))/g
            let [media, query] = prop
                .match(rgx)[0]
                .slice(1)
                .split(': ')
            // console.log('match:', [media, query])
            last.push(
                at_media({ screen: true, [media]: query }, [
                    `.${hash}`,
                    { [key]: val }
                ])
            )
            // nested object
        } else if (C.isObject(spec)) {
            first.push(['', { [prop]: spec }])
        } else {
            first.push({ [prop]: spec })
        }
    }
    const low_style = CSS([`.${hash}`, ...first], {
        // format: PRETTY
    })
    const high_style = CSS([`.${hash}`, ...last], {
        // format: PRETTY
    })
    injectStyleSheet(low_style)
    injectStyleSheet(high_style)
}
