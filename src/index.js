import { start } from "@thi.ng/hdom"
import { bus, state } from "./bus"
import { button } from "./components"
import { theme } from "./styles"
import fs from "fs"
import { test_blog_CRLF, test_blog_LF } from "./pages/blog"

// const data = fetch('../assets/blog.md').then(r => console.log(r))

// import md from '../assets/blog.md'
// const md = fs.readFileSync('./assets/blog.md', 'utf8')
// fetch(blog)
//   .then(r => r.text())
//   .then(t => console.log([...iterator(parse(), t)])) //?

start(
  ctx =>
    ctx.bus.processQueue()
      ? [
          "div",
          [button, null, "hello world"],
          [button, null, "hello -> ()"],
          test_blog_CRLF
        ]
      : null,
  {
    ctx: { state, bus, theme },
    span: false,
    root: document.getElementById("app")
  }
)
bus.dispatch(["init"])
