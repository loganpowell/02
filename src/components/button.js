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

const name = 'button'

const att = {
  onclick: () => console.warn("no handler assigned to button 'onclick' event")
}

// a HOF that takes a config and returns an HDOM node function
export const button_x = (thm, cfg) => {
  cfg = {
    ...default_cfg,
    ...cfg
  }
  const hash = fireStyles(thm)(
    {
      ...thm.buttons.simple,
      fontSize: ['23px', '29px', '52px', '14px'],
      m: ['18px', '24px', '48px']
    },
    name
  )
  // the returned node has some default styles and
  return (ctx, attrs, ...children) => [
    cfg.tag,
    { ...att, class: hash, ...attrs },
    ...children
  ]
}

export const button = button_x(theme)
