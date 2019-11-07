import { fireStyles, theme } from "../styles"

const default_cfg = { tag: "button", tagDisabled: "span" }

const name = "button"

const att = {
  onclick: () => console.warn("no handler assigned to button 'onclick' event")
}

// a HOF that takes a config and returns an HDOM node function
export const button_x = cfg => {
  cfg = {
    ...default_cfg,
    ...cfg
  }
  const hash = fireStyles(name, {
    ...theme.buttons.simple,
    fontSize: ["10px", "20px", "30px", "40px"],
    m: ["18px", "24px", "48px"]
  })
  // the returned node has some default styles and
  return (ctx, attrs, ...children) => [
    cfg.tag,
    { ...att, class: hash, ...attrs },
    ...children
  ]
}

export const button = button_x()
