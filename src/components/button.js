import { getIn } from '@thi.ng/paths'
import {
    at_media,
    css,
    injectStyleSheet,
    PRETTY,
    QUOTED_FNS
} from '@thi.ng/hiccup-css'
import { fireStyles, theme } from '../styles'

const default_cfg = {
    tag: 'button',
    tagDisabled: 'span'
}

const hash = 'button_xyz'

const att = {
    class: hash,
    onclick: () => console.warn("no handler assigned to button 'onclick' event")
}

// a HOF that takes a config and returns an HDOM node function
export const button_x = (thm, cfg) => {
    cfg = {
        ...default_cfg,
        ...cfg
    }
    fireStyles(thm)(
        {
            ...thm.buttons.simple,
            fontSize: ['100px', '2rem', '32px', '44px']
        },
        hash
    )
    // the returned node has some default styles and
    return (ctx, attrs, ...body) => [cfg.tag, { ...att, ...attrs }, ...body]
}

export const button = button_x(theme)
