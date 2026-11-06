// KaTeX rendering, integrated with Zensical's instant navigation.
// Math is pre-split by pymdownx.arithmatex (generic: true) into \(...\) / \[...\].
document$.subscribe(({ body }) => {
  renderMathInElement(body, {
    delimiters: [
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true }
    ],
    throwOnError: false
  })
})
