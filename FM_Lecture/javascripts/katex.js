// KaTeX: render only what Arithmatex marked as math, and only its delimiters (ported from the Exchange docs site).
document$.subscribe(() => {
  for (const element of document.querySelectorAll(".arithmatex")) {
    renderMathInElement(element, {
      delimiters: [
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true },
      ],
      throwOnError: false,
    })
  }
})
