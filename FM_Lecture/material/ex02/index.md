# Exercise: Risk Management

> [!NOTE]
>
> **Exercise**
>
> A random variable \\( L \\) is called normally distributed with mean \\( \\mu \\) in \\(\\mathbb{R} \\) and variance \\( \\sigma \> 0 \\) if it has a probability density given by
>
> \\\[ f\_{\\mu,\\sigma}(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} \\exp\\left( -\\frac{(x-\\mu)^2}{2\\sigma^2} \\right) \\\]
>
> and we use the notation \\( L \\sim \\mathcal{N}(\\mu, \\sigma^2) \\). We denote by
>
> \\\[ F\_{\\mu,\\sigma}(m) = P\[L \\leq m\] = \\int\_{-\\infty}^{m} f\_{\\mu,\\sigma}(y) \\, dy, \\quad x \\in \\mathbb{R} \\quad \\text{and} \\quad q\_{\\mu,\\sigma}(s) = F^{-1}\_{\\mu,\\sigma}(s), \\quad s \\in (0,1) \\\]
>
> the CDF and quantile of the normal distribution with mean \\( \\mu \\) and variance \\( \\sigma \\). We use the simplified notations for the standard normal:
>
> \\\[ f = f\_{0,1}, \\quad F = F\_{0,1}, \\quad q = q\_{0,1}. \\\]
>
> 1. Show that if \\( L \\sim \\mathcal{N}(0,1) \\), it holds \\( \\mu + \\sigma L \\sim \\mathcal{N}(\\mu, \\sigma^2) \\).
> 2. Show that if \\( L \\sim \\mathcal{N}(\\mu, \\sigma^2) \\), it holds \\( -L \\sim \\mathcal{N}(-\\mu, \\sigma^2) \\).
> 3. Show that
>
>    \\\[ f\_{\\mu,\\sigma}(x) = \\frac{1}{\\sigma} f\\left( \\frac{x-\\mu}{\\sigma} \\right), \\quad \\sigma^2 f^\\prime\_{\\mu,\\sigma} (x) = (\\mu-x)f\_{\\mu,\\sigma}(x) \\\]
>
>    \\\[ F\_{\\mu,\\sigma}(x) = F\\left( \\frac{x-\\mu}{\\sigma} \\right), \\quad q\_{\\mu,\\sigma}(s) = \\mu + \\sigma q(s). \\\]
>
> Recall that
>
> \\\[ \\begin{align\*} V@R\_{\\alpha}(L) &amp; = \\inf \\{m \\colon P\[L\>m\]\\geq \\alpha\\} = q\_L(1-\\alpha)\\\\ ES\_{\\alpha}(L) &amp; = \\frac{1}{\\alpha}\\int\_0^\\alpha V@R\_{\\alpha}(s) ds = \\frac{1}{\\alpha}\\int\_{1-\\alpha}^1 q\_L(s)ds \\end{align\*} \\\]
>
> and that both functionals are positive homogoneous.
>
> Show that for \\(L\\sim \\mathcal{N}(\\mu, \\sigma^2)\\)
>
> \\\[ V@R\_{\\alpha}(L) = \\mu + \\sigma V@R\_{\\alpha}(\\bar{L}) \\quad \\text{and} \\quad ES\_{\\alpha}(L) = \\mu + \\sigma ES\_{\\alpha}(\\bar{L}) \\\]
>
> where \\(\\bar{L} \\sim \\mathcal{N}(0, 1)\\) (in other terms, to compute the value at risk or expected shortfal of normal distribution, you just need the V@R and ES of the standard normal distribution).
>
> Deduce that for normally distributed random variable \\(L\\) with **zero mean**, \\(V@R\\) and \\(ES\\) are related through
>
> \\\[ ES\_{\\alpha}(L) = C V@R\_{\\alpha}(L) \\\]
>
> for some constant \\(C\\) which you provide explicitely.

> [!NOTE]
>
> **Dual Representation**
>
> We already know that the expected shortfall has two possible representations:
>
> \\\[ \\begin{align\*} ES\_\\alpha(L) &amp; = \\frac{1}{\\alpha} \\int\_{1-\\alpha}^{1} q\_L(s) ds\\\\ &amp; = \\inf\\left\\{ m + \\frac{1}{\\alpha} E\\left\[ (L-m)^+ \\right\] \\right\\}\\\\ &amp; = q\_L(1-\\alpha) + \\frac{1}{\\alpha} E\\left\[ \\left( L - q\_L(1-\\alpha) \\right)^+ \\right\] \\end{align\*} \\\]
>
> We derive an alternative formulation in terms of duality, namely:
>
> \\\[ ES\_{\\alpha}(L) = \\sup\\left\\{ E^Q\[L\] \\colon 0 \\leq \\frac{dQ}{dP} \\leq \\frac{1}{\\alpha} \\right\\} \\\]
>
> This general statement says that the expected shortfall accounts for computing the expected loss under any alternative probability model \\( Q \\) such that \\( Q \\) is not "too" far away from \\( P \\) in the sense that the density is bounded by \\( 1/\\alpha \\).
>
> 1. Show that for every \\( x \\) and every \\( y \\) with \\( 0 \\leq y \\leq 1/\\alpha \\) it holds:
>
>    \\\[ \\frac{1}{\\alpha} x^+ \\geq xy \\\]
>
>    In other terms, \\( x^+ / \\alpha = \\sup\\{ xy \\colon 0 \\leq y \\leq 1/\\alpha \\} \\), which is called Fenchel-Moreau duality.
> 2. Using the fact that \\( E\[dQ/dP\] = 1 \\), show that if \\( 0 \\leq dQ/dP \\leq 1/\\alpha \\), then it holds:
>
>    \\\[ m + \\frac{1}{\\alpha} E\\left\[ (L-m)^+ \\right\] \\geq E^Q\[L\] \\\]
>
>    and deduce that:
>
>    \\\[ ES\_{\\alpha}(L) \\geq \\sup\\left\\{ E^Q\[L\] \\colon 0 \\leq \\frac{dQ}{dP} \\leq \\frac{1}{\\alpha} \\right\\} \\\]
> 3. Assuming that \\( F\_L \\) is continuous and strictly increasing, show that if we define the random variable:
>
>    \\\[ \\frac{dQ^\\ast}{dP} = \\frac{1}{\\alpha} 1\_{\\{L \\geq q\_L(1-\\alpha)\\}} \\\]
>
>    then it defines a probability measure \\( Q^\\ast \\) such that \\( 0 \\leq dQ^\\ast/dP \\leq 1/\\alpha \\) and for which it holds:
>
>    \\\[ ES\_{\\alpha}(L) = E^{Q^\\ast}\[L\] \\\]
>
>    and deduce the duality formula — for which you now have an explicit \\( Q^\\ast \\) that depends on \\( L \\).
