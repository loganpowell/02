import { timedResult } from "@thi.ng/bench"
import { stream, Stream } from "@thi.ng/rstream"
// import { updateDOM } from '@thi.ng/transducers-hdom'
import { readFileSync, readFile } from "fs"
import { parse } from "@thi.ng/hiccup-markdown"
import * as tx from "@thi.ng/transducers"
import { themedStyleFire } from "../styles"
import { CUSTOM_TAGS } from "../components"
import os from "os"

// os.platform() //?
// os.arch() //?

// Parcel loads fs calls and replaces them with contents
// see: https://github.com/parcel-bundler/parcel/issues/970
let blog_CRLF = readFileSync("./assets/blog_CRLF.md", "utf8")
let blog_LF = readFileSync("./assets/blog_LF.md", "utf8")
let short = readFileSync("./assets/short.md", "utf8")

export const test_blog_CRLF = [
  ...tx.iterator(
    tx.comp(tx.filter(x => x !== `\r`), parse(CUSTOM_TAGS)),
    blog_CRLF + "\n"
  )
] //?
export const test_blog_LF = [
  ...tx.iterator(
    tx.comp(tx.filter(x => x !== `\r`), parse(CUSTOM_TAGS)),
    blog_LF + "\n"
  )
] //?

// UI root component
// const test = [...iterator(parse(), MarkdownString)] //?
// test //?
// // seed temp input
// src.next(`# Loading readme...`)

// // load markdown & seed input
// fetch(readme)
//   .then(res => res.text())
//   .then(txt => src.next(txt))
//   .catch(e => src.next(`# Error loading file: ${e}`))
