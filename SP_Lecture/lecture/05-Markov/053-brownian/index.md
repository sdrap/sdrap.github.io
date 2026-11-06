# Brownian Motion

> [!NOTE]
>
> **Note: Browninan Motion and Wiener Measure**
>
> The Brownian motion, named after the botanist Robert Brown, was first observed in 1827 when Brown noticed the erratic motion of pollen particles suspended in water. While Brown initially attributed this movement to some "life force," it was later understood as a physical phenomenon resulting from molecular collisions.
>
> At the end of the 19th and the beginning of the 20th century, physicists such as Albert Einstein and Marian Smoluchowski provided theoretical models that linked Brownian motion to the kinetic theory of gases, demonstrating the random behavior of particles in a fluid. This work provided critical evidence for the atomic theory of matter.
>
> In spite of its success and applications, it tooks a century until a rigorous mathematical formulation and proof of the existence of Brownian motion as a stochastic process was achieved by Norbert Wiener in the 1930 ies. This layed the foundation for modern probability theory and the study of continuous-time stochastic processes. The resulting process, is now often called the Wiener process.

The Brownian motion is one of the central objects of continuous time stochastic analysis. Though being classical and intuitive, it is not an easy object with fascinating mathematical properties.

> [!NOTE]
>
> **Definition: Brownian Motion**
>
> Let \\((\\Omega,\\mathcal{F},P)\\) be a probability space. A stochastic process \\(B\\) is called a **Brownian Motion** if
>
> - **Independence of Increments:** The increments \\(B\_{t\_n}-B\_{t\_{n-1}}\\), \\(B\_{t\_{n-1}}-B\_{t\_{n-2}}\\), \\(\\ldots\\), \\(B\_{t\_1}-B\_{t\_0}\\) are independent for every finite family \\(0\\leq t\_0\<t\_1\<\\ldots\<t\_n\\).
> - **Normal Behavior of Increments:** Increments are normally distributed \\(B\_{t}-B\_s\\sim \\mathcal{N}(0,t-s)\\).
> - **Continuity of paths:** (almost surely)
>
>   \\\[ P\\left\[ \\left\\{ \\omega \\colon t\\mapsto B\_t(\\omega) \\text{ is continuous} \\right\\} \\right\]=1 \\\]

Note that we do not require any filtration in the definition of the Brownian motion. As we will see later, we will often consider the filtration \\(\\mathcal{F}\_t=\\sigma(B\_s\\colon s\\leq t)\\) up to completion, and this filtration has particular properties.

It is intuitive to see the Brownian motion as a scaling limit of a symmetric random wall—and it actually is. However, one of the first questions to ask is whether such an object exists. Precisely, one asks if, for an adequate measurable space \\((\\Omega,\\mathcal{F})\\) and stochastic process \\(B\\), there exists a probability measure \\(P\\colon\\mathcal{F}\\to \[0,1\]\\) such that under \\(P\\), the stochastic process \\(B\\) is a Brownian motion. This measure is called the **Wiener measure**.

There are several ways to construct such a measure, including a wavelet construction, a Hilbert space approach, or an appropriate scaling of the symmetric random walk together with some weak convergence. Hereafter, we will present a pure stochastic construction based on the **Kolmogorov-Carathéodory extension theorem**. It may be a little technical, but it has the advantage of presenting several important aspects of measure theory without relying on any advanced functional analysis assumptions.

The construction will follow two important steps:

- **Construction of a measure \\(P\\) on the path space** such hat the canonical process \\(X\\) satisfies the two first properties. \\(\\leadsto\\) Kolmogorov extension Theorem.
- **Modification of the Canonical process** \\(X\\) to \\(B\\) such that \\(B\\) additionally satisfies the continuity property. \\(\\leadsto\\) Kolmogorov-Centov Theorem.

## Pre-Brownian Motion: Kolmogorov-Carathéodory extension Theorem

For a given index set \\(\\mathbf{T}\\), we consider \\((S,\\mathcal{S})\\) where \\(S\\) is a Polish space[^/SP_Lecture/lecture/05-Markov/053-brownian/#1] with Borel \\(\\sigma\\)-algebra \\(\\mathcal{S}\\). For ease, you may assume that \\(S \\subseteq \\mathbb{R}^d\\) is a closed or open subset. The product of countable Polish spaces is Polish, on which according to Ulam, probability measures are regular.

We recall the Ulam Theorem, see the [section on measures](<https://www.samuel-drapeau.info/SP_Lecture/lecture/02-Measure/024-polish/index.md>).

> [!NOTE]
>
> **Ulam**
>
> Let \\(P\\) be a probability measure on \\((S,\\mathcal{S})\\), then \\(P\\) is **regular**, that is
>
> \\\[ P\\left\[ A \\right\]=\\sup\\left\\{ P\[K\]\\colon K\\subseteq A, K\\text{ compact} \\right\\} \\\]
>
> for every Borel set \\(A\\subseteq S\\).

Recall standard notations for the path space:

- **Sample space** given by \\(\\Omega :=\\{\\omega=(\\omega\_t) :\\omega\_t \\in S \\text{ for all } t\\}=S^{\\mathbf{T}}\\).
- **Coordinate process** \\(X\\) given by \\(X\_t(\\omega)=\\omega\_t\\) for every \\(t\\) and \\(\\omega\\).
- **Projection** For \\(F\\) and \\(G\\) subsets of \\(\\mathbf{T}\\) with \\(F\\subseteq G\\), define the projections:

  \\\[ \\begin{equation\*} \\begin{split} \\pi\_F \\colon \\Omega &amp; \\longrightarrow S^{F}\\\\ \\omega &amp; \\longmapsto \\pi\_F(\\omega) = (\\omega\_t)\_{t\\in F} \\end{split} \\end{equation\*} \\\]

  and

  \\\[ \\begin{equation\*} \\begin{split} \\pi\_{GF} \\colon S^{G} &amp; \\longrightarrow S^{F}\\\\ (\\omega\_t)\_{t \\in G} &amp; \\longmapsto \\pi\_{GF}\\left((\\omega\_t)\_{t \\in G}\\right) = (\\omega\_t)\_{t\\in F} \\end{split} \\end{equation\*} \\\]

  Note that for \\(F\\subseteq G\\), it holds that \\(\\pi\_{GF}(\\pi\_G) = \\pi\_F\\) from which follows that the preimage satisfies \\(\\pi^{-1}\_G(\\pi^{-1}\_{GF}) = \\pi^{-1}\_F\\).
- **Algebra** \\(\\mathcal{C}\\) of those sets \\(C=\\pi^{-1}\_F(A)=\\{ \\omega \\in \\Omega\\colon (\\omega\_{t\_1},\\ldots,\\omega\_{t\_n})\\in A \\}=\\{(X\_{t\_1},\\ldots X\_{t\_n})\\in A\\}\\) where \\(A\\) is in the Borel \\(\\sigma\\)-algebra \\(\\mathcal{F}^F:=\\mathcal{B}(S^F)\\) and \\(F\\subseteq\\mathbf{T}\\) is finite.
- **Product \\(\\sigma\\)-Algebra** \\(\\mathcal{F}=\\sigma(\\mathcal{C}) =\\otimes\_{t \\in \\mathbf{T}}\\mathcal{S}\\)

> [!NOTE]
>
> **Consistent family**
>
> A family \\((P\_{F})\\) of probability measures \\(P\_F:\\mathcal{F}^F\\to \[0,1\]\\) for every finite subset \\(F\\) of \\(\\mathbf{T}\\) is called **consistent** if
>
> \\\[ P\_{F}(A)=P\_{G}\\left( B \\right) \\\]
>
> for every \\(F\\subseteq G\\) and \\(A\\in \\mathcal{F}^F\\) where \\(B=\\pi\_{GF}^{-1}(A)\\).

We can now formulate the Kolmogorov extension theorem, a consequence of Carathéodory's Theorem.

> [!NOTE]
>
> **Kolmogorov Extension Theorem**
>
> Let \\((P\_F)\\) be a consistent family of Borel probability measures. Then, there exists a unique probability measure \\(P\\) on \\(\\mathcal{F}\\) such that
>
> \\\[ \\begin{equation\*} P(C)=P\_F(A) \\end{equation\*} \\\]
>
> for every \\(A \\in \\mathcal{F}^F\\) where \\(C=\\pi^{-1}\_F(A)\\).

In other words, it is possible to construct a unique probability measure whose finite-dimensional restriction coincides exactly with each given finite-dimensional distribution \\(P\_F\\), provided they are consistent with each other.

> [!NOTE]
>
> **Proof**
>
> Note that for every finite family \\((C\_k)\_{k\\leq n}=(\\pi^{-1}\_{F\_k}(A\_k))\_{1\\leq k\\leq n}\\), if we define \\(F=\\cup\_{k\\leq n}F\_k\\) and \\(B\_k=\\pi^{-1}\_{FF\_k}(A\_k) \\in \\mathcal{F}^F\\), it follows that \\(C\_k=\\pi^{-1}\_{F}(B\_k)\\). In particular, up to enlargement, we can always assume that we take a common finite family to represent the \\((C\_k)\\). Furthermore, if the \\((C\_k)\\) are disjoint, then so are the \\((B\_k)\\).
>
> **Step 1:** Definition of \\(P\\) as a set function  
> Define \\(P:\\mathcal{C}\\to \[0,1\]\\) by setting \\(P\[C\]=P\_F(A)\\) where \\(C=\\pi^{-1}\_F(A)\\) for \\(A\\in \\mathcal{F}^F\\). This function is well-defined due to consistency. Suppose \\(C=\\pi^{-1}\_F(A)=\\pi^{-1}\_{G}(B)\\) for \\(A\\) in \\(\\mathcal{F}^F\\) and \\(B\\) in \\(\\mathcal{F}^G\\). Then \\(D := \\pi^{-1}\_{F\\cup G F}(A) = \\pi^{-1}\_{F\\cup G G}(B)\\) and \\(\\pi^{-1}\_{F\\cup G}(D)=C\\). By the consistency of the family, it follows that \\(P\_F(A)=P\_{F\\cup G}(D)=P\_{G}(B)\\), confirming that \\(P\\) is well-defined.
>
> **Step 2:** \\(P\\) as an additive measure  
> Clearly, \\(P\[\\emptyset\]=0\\) and \\(P\[\\Omega\]=1\\). As mentioned above, let \\((C\_k)\_{k\\leq n}=(\\pi^{-1}\_{F}(A\_k))\_{k\\leq n}\\) be a finite disjoint family of elements in the algebra \\(\\mathcal{C}\\) with common finite set \\(F\\). Since \\(P\_F\\) is a probability measure, it follows that
>
> \\\[ P\\left\[\\cup\_{k\\leq n} C\_k\\right\] = P\_F\\left\[\\cup\_{k\\leq n} A\_k\\right\] = \\sum\_{k\\leq n} P\_F\[A\_k\] = \\sum\_{k\\leq n} P\[C\_k\]. \\\]
>
> Therefore, \\(P\\) is an additive probability measure on the algebra \\(\\mathcal{C}\\).
>
> **Step 3:** \\(P\\) is \\(\\sigma\\)-additive  
> Using continuity at \\(\\emptyset\\), let \\((C\_n) = (\\pi^{-1}\_{F\_n}(A\_n))\\) be a decreasing sequence of elements in \\(\\mathcal{C}\\) such that \\(\\cap C\_n = \\emptyset\\) and suppose that \\(P\[C\_n\] \\geq \\varepsilon \> 0\\) for some \\(\\varepsilon \> 0\\). Up to redefining \\(\\tilde{F}\_n = \\cup\_{k\\leq n}F\_k\\) and \\(\\tilde{A}\_n = \\pi^{-1}\_{\\cup\_{k\\leq n}F\_k F\_n}(A\_n)\\), where \\(C\_n = \\pi\_{\\tilde{F}\_n}(\\tilde{A}\_n)\\) with \\(\\tilde{A}\_n\\) in \\(\\mathcal{F}^{\\tilde{F}\_n}\\), we may assume that \\((F\_n)\\) is an increasing sequence of finite subsets of \\(\\mathbf{T}\\). Since \\((F\_n)\\) is increasing and \\((C\_n)\\) decreasing, it follows that \\(A\_{n+1}\\subseteq \\pi\_{F\_{n+1}F\_n}^{-1}(A\_n)\\). By inner regularity of Borel probability measures on \\(\\mathbb{R}\\), we can find a sequence of compacts \\((\\tilde{K}\_n)\\) such that \\(\\tilde{K}\_n\\subseteq A\_n\\) and \\(P\_{F\_n}\[A\_n\\setminus \\tilde{K}\_n\]\\leq \\varepsilon/2^{n+1}\\). However, we do not know whether this sequence of compacts fulfills the same monotonicity condition as \\((A\_n)\\). We therefore shrink the compacts to
>
> \\\[ K\_n=\\cap\_{k\\leq n}\\pi^{-1}\_{F\_nF\_k}(\\tilde{K}\_k)\\subseteq \\tilde{K}\_n \\\]
>
> ensuring \\(K\_{n+1} \\subseteq \\pi^{-1}\_{F\_{n+1}F\_n}(K\_n)\\) for every \\(n\\). By construction,
>
> \\\[ \\begin{align\*} P\_{F\_n}\\left\[ K\_n \\right\] &amp; = P\_{F\_n}\[A\_n\]-P\_{F\_n}\[A\_n\\setminus K\_n\]\\\\ &amp; \\geq \\varepsilon -P\_{F\_n}\[A\_n\\setminus \\cap\_{k\\leq n}\\pi^{-1}\_{F\_nF\_k}(\\tilde{K}\_k)\]\\\\ &amp; =\\varepsilon -P\_{F\_n}\[\\cup\_{k\\leq n} A\_n\\setminus \\pi^{-1}\_{F\_nF\_k}(\\tilde{K}\_k)\]\\\\ &amp; \\geq \\varepsilon -P\_{F\_n}\[\\cup\_{k\\leq n} \\pi^{-1}\_{F\_nF\_k}(A\_k\\setminus \\tilde{K}\_k)\]\\\\ &amp; \\geq \\varepsilon -\\sum\_{k\\leq n}P\_{F\_n}\[\\pi^{-1}\_{F\_nF\_k}(A\_k\\setminus \\tilde{K}\_k)\]\\\\ &amp; =\\varepsilon -\\sum\_{k\\leq n}P\_{F\_k}\[A\_k\\setminus \\tilde{K}\_k\]\\\\ &amp; \\geq \\varepsilon -\\sum\_{k=1}^{n}\\frac{\\varepsilon}{2^{k+1}}\\\\ &amp; \\geq \\frac{\\varepsilon}{2} \\end{align\*} \\\]
>
> In particular, each compact is non empty, so let \\(\\omega\_n\\) be in \\(\\pi^{-1}\_{F\_n}(K\_n)\\), that is \\(\\pi\_{F\_n}(\\omega\_n)\\) is in \\(K\_n\\). It holds from \\(K\_n \\subseteq \\pi\_{F\_1}^{-1}(K\_1)\\) that \\(\\pi\_{F\_1}(\\omega\_n)\\in K\_1\\) for every \\(n\\). By compactness of \\(K\_1\\), we have for a subsequence, again denoted by \\((\\omega\_n)\\), that \\(\\pi\_{F\_1}(\\omega\_{n})\\to \\pi\_{F\_1}(\\bar{\\omega}\_1)\\) some \\(\\bar{\\omega}\_1\\) in \\(\\Omega\\). Further, from \\(K\_n\\subseteq \\pi\_{F\_2}^{-1}(K\_2)\\) we have for the same reason as before for a sub-subsequence also denoted by \\((\\omega\_n)\\), that \\(\\pi\_{F\_2}(\\omega\_n)\\to \\pi\_{F\_2}(\\bar{\\omega}\_2)\\). Since \\(\\pi\_{F\_1}(\\bar{\\omega}\_1)=\\pi\_{F\_1}(\\bar{\\omega}\_2)\\), we deduce that the coordinates of \\(\\bar{\\omega}\_2\\) and \\(\\bar{\\omega}\_1\\) coincide on \\(F\_1\\). Doing so forth, we can construct a point \\(\\bar{\\omega}\\) by setting arbitrarily points on \\((\\cup F\_n)^c\\) such that \\(\\pi\_{F\_n}(\\bar{\\omega})=\\pi\_{F\_n}(\\bar{\\omega}\_n)\\) for every \\(n\\). It follows in particular that \\(\\bar{\\omega}\\in \\pi^{-1}\_{F\_n}(K\_n)\\subseteq C\_n\\) for every \\(n\\) showing that \\(\\cap C\_n\\neq \\emptyset\\), contradicting our initial assumption that \\(\\cap C\_n = \\emptyset\\).
>
> **Step 4:** Carathéodory's Extension Theorem  
> Since \\(P\\) is a \\(\\sigma\\)-additive probability measure on the algebra \\(\\mathcal{C}\\), by Carathéodory's Theorem, it can be uniquely extended to \\(\\mathcal{F}=\\sigma(\\mathcal{C})\\), hence the theorem.

> [!NOTE]
>
> **Example: Existence of iid Sequences and Henceforth a Random Walk**
>
> We can apply Kolmogorov's extension theorem to show the existence of iid desquences and henceforth a Random Walk. Let \\(S = \\{-1, 1\\}\\), which is a closed subset of \\(\\mathbb{R}\\) with the Borel \\(\\sigma\\)-algebra \\(\\mathcal{S}\\), which reduces to \\(2^S\\). Let \\(\\mathbb{T} = \\mathbb{N}\_0\\) and \\(0\<p\<1\\). For every finite subset \\(F = \\{t\_0 \< t\_1 \\ldots \< t\_n\\} \\subset \\mathbb{N}\_0\\), define
>
> \\\[ P\_F\\left\[ (\\omega\_{t\_1},\\ldots, \\omega\_{t\_n})=(e\_1,\\ldots, e\_n) \\right\] = p^l(1-p)^{n-l}, \\\]
>
> where \\(e\_i \\in \\{-1, 1\\}\\) for every \\(i\\), and \\(l = \\\#\\{ i \\colon e\_i = 1, i = 1, \\ldots, n \\}\\), which defines a probability measure on \\(\\mathcal{F}^F = \\otimes\_F \\mathcal{S}\\).
>
> It is straightforward to check that the family \\((P\_F)\\) is a consistent family of probability measures. By Kolmogorov's extension theorem, there exists a unique probability measure on \\(S^{\\mathbf{T}} = \\{-1, 1\\}^{\\mathbb{N}\_0}\\) with the product \\(\\sigma\\)-algebra such that
>
> \\\[ P\[B\] = P\_F\[A\] \\\]
>
> where \\(B = \\pi^{-1}\_F(A)\\) for any \\(F \\subseteq \\mathbb{N}\_0\\) finite and \\(A\\) in \\(\\mathcal{F}^F\\). In particular,
>
> \\\[ P\[X\_t = 1\] = P\_{\\{t\\}}\[\\omega\_t = 1\] = p \\quad \\text{and} \\quad P\\left\[ X\_t = -1 \\right\] = 1 - p. \\\]
>
> A straightforward computation shows that the canonical process \\(X\\) is a sequence of i.i.d. random variables. As seen before, it is also a Markov process.
>
> Doing so, the random walk \\(S\_0 =0\\) and \\(S\_t = \\sum\_{s=1}^t X\_s\\) is well defined.

With this extension theorem at hand, we can therefore construct a *pre*-Brownian motion.

> [!NOTE]
>
> **Proposition: Existence of a Pre-Brownian Motion**
>
> Taking \\(S = \\mathbb{R}\\) and \\(\\mathbf{T} = \[0, \\infty)\\), with the notations of the sample space here above, there exists a probability measure on \\(\\mathcal{F}\\) such that \\(X\\) is, up to continuity of paths, a Brownian motion.

> [!NOTE]
>
> **Proof**
>
> For the sample space \\(\\Omega =\\mathbb{R}^{\[0,\\infty)}\\) with the \\(\\sigma\\)-algebra \\(\\mathcal{F}=\\sigma(\\mathcal{C})\\) where \\(\\mathcal{C}\\) is the collection of those \\(C=\\pi\_{F}^{-1}(A)\\) for \\(A\\) in \\(\\mathcal{B}(\\mathbb{R}^F)\\), \\(F=\\{t\_0, t\_1,\\ldots,t\_n\\}\\) for \\(0\< t\_0\<t\_1\< \\ldots\<t\_n\\), we define the conditional probability distribution
>
> \\\[ p(t,x,y)=\\frac{1}{\\sqrt{t2\\pi}}\\exp\\left( -\\frac{(x-y)^2}{2t} \\right) \\\]
>
> for \\(t\>0\\) and \\(x\\), \\(y\\) in \\(\\mathbb{R}\\). For \\(x=(x\_1,\\ldots,x\_n)\\) we set the cumulative distribution
>
> \\\[ P\_F\\left\[ X\_{t\_0}\\leq x\_0, \\ldots, X\_{t\_n}\\leq x\_n \\right\] =\\int\_{-\\infty}^{x\_0}\\int\_{-\\infty}^{x\_1}\\ldots \\int\_{-\\infty}^{x\_n}p(t\_0,0,y\_0)p(t\_1-t\_0,y\_0,y\_1)\\ldots p(t\_n-t\_{n-1},y\_{n-1},y\_n)dy\_0\\ldots dy\_{n} \\\]
>
> For \\(F\\subseteq G\\subseteq \\mathbf{T}\\) both finite set and \\(A \\in \\mathcal{B}(\\mathbb{R}^F)\\), it holds \\(D=\\pi\_{GF}^{-1}(A)\\approx \\mathbb{R}^{G\\setminus F}\\times A\\) where \\(\\approx\\) stands for reordering of the coordinates of \\(G\\) along those who belong to \\(F\\). It follows that
>
> \\\[ P\_{F}\\left\[ A \\right\]=\\int\_{A}^{}dP\_{F}=\\int\_{A}^{}\\int\_{\\mathbb{R}^{G\\setminus F}}^{}dP\_{F}dP\_{G\\setminus F}=\\int\_{D}^{}dP\_{G}=P\_{G}\[D\] \\\]
>
> showing that \\((P\_{F})\\) is a consistent family of probability measures. Hence, by Kolmogorov extension's theorem, it follows that it can uniquely be extended to \\(\\Omega\\) and it holds
>
> \\\[ P\\left\[ X \\in \\pi\_{F}^{-1}(A) \\right\]=P\_{F}\\left\[ A \\right\] \\\]
>
> for any \\(A\\) in \\(\\mathcal{F}^{F}\\) where $F={t\_0,t\_1,\\ldots, t\_n} with \\(0\< t\_0\< t\_1\<\\ldots\<t\_n\\).
>
> Let us show that \\(X\\) under \\(P\\) fulfills the first two properties of a Brownian motion. As for the first property, it holds that
>
> \\\[ \\begin{align\*} P\\left\[ X\_t-X\_s \\leq x \\right\] &amp; =P\_{\\{s,t\\}}\\left\[ \\{(x\_1,x\_2)\\in \\mathbb{R}^2 \\colon x\_2\\leq x+x\_1\\} \\right\]\\\\ &amp; =\\int\_{\\mathbb{R}}^{}\\int\_{-\\infty}^{x+y\_1}p(s,0,y\_1)p(t-s,y\_1,y\_2)dy\_1dy\_2\\\\ &amp; =\\int\_{\\mathbb{R}}^{}\\int\_{-\\infty}^{x}p(s,0,y\_1)p(t-s,y\_1,y\_2-y\_1)dy\_1dy\_2\\\\ &amp; =\\int\_{-\\infty}^{x}p(t-s,0,y\_2)dy\_2 \\end{align\*} \\\]
>
> showing that \\(X\_t-X\_s\\sim \\mathcal{N}(0,t-s)\\).
>
> As for the independence, \\((X\_{t\_n}-X\_{t\_{n-1}}, \\ldots, X\_{t\_1}-X\_{t\_0})\\) is a Gaussian vector for every finite \\(0\\leq t\_0\<\\ldots\< t\_n\\). Indeed, by the definition of \\(P\\), every linear combination of them yields a normal distribution -- check it as an exercise. Hence, being a Gaussian vector, it is enough to check that their covariance is equal to \\(0\\).
>
> We check it for \\(n=2\\), and the general case being left to you. By obvious variable change we have
>
> \\\[ \\begin{align\*} E\\left\[ (X\_{t\_{2}}-X\_{t\_1})(X\_{t\_1}-X\_{t\_0}) \\right\] &amp; = \\int\_{\\mathbb{R}^4} \\left( x\_3-x\_2 \\right)\\left( x\_1-x\_0 \\right)p(t\_0,0,x\_0)p(t\_0-t\_1,x\_0,x\_1)p(t\_1-t\_2,x\_1,x\_2)p(t\_3-t\_2,x\_2,x\_3)dx\_0dx\_1dx\_2dx\_3\\\\ &amp; =\\int\_{\\mathbb{R}^2} y\_1 y\_2 p(t\_1-t\_0,0,y\_1)p(t\_3-t\_2,0,y\_2)dy\_1dy\_2\\\\ &amp; =0 \\end{align\*} \\\]
>
> finishing the proof.

## Continuity of Paths: Kolmogorov-Čentov Theorem

As for the continuity, we should prove that

\\\[ P\[\\{\\omega \\colon t\\mapsto X\_t(\\omega)\\text{ is continuous}\\}\]=1 \\\]

to ensure that we have a Brownian motion. Since \\(X\\) is the canonical process, it follows that \\(\\{\\omega \\colon t\\mapsto X\_t(\\omega)\\text{ is continuous}\\}\\) is exactly the set \\(C\[0,t)\\subseteq \\mathbb{R}^{\[0,\\infty)}\\) of continuous functions. A naive way to show this would be to show that \\(P\\) assigns probability one to the subset \\(C\[0,t)\\subseteq \\mathbb{R}^{\[0,\\infty)}\\) of continuous functions. In that case, it would follow that almost all the paths of \\(X\\) are concentrated under \\(P\\) in the space of continuous functions. This strategy is hopeless as the following proposition shows.

> [!NOTE]
>
> **Proposition**
>
> The set of continuous functions is not a measurable set for the product \\(\\sigma\\)-algebra of \\(\\mathbb{R}^{\[0,\\infty)}\\).

**Proof**

Intuitively, it follows from the fact that measurable sets of \\(\\mathbb{R}^{\[0,\\infty)}\\) for the product \\(\\sigma\\)-algebra are generated by finite-dimensional ones of the form

\\\[ C=\\{\\omega \\colon \\omega\_{t\_0}\\in A\_0, \\ldots, \\omega\_{t\_n}\\in A\_n\\}, \\quad A\_k \\in \\mathcal{B}(\\mathbb{R}) \\\]

As an exercise, try to show why this proposition holds.

To overcome this difficulty, we will *modify* the canonical process \\(X\\) to another process \\(B\\) which has continuous paths with probability \\(1\\), that is construct a version of the Brownian motion that has continuous paths.

> [!NOTE]
>
> **Definition: Modification vs Indistinguishable**
>
> Let \\((\\Omega, \\mathcal{F}, P)\\) be a probability space and \\(X\\) and \\(Y\\) be two stochastic processes. We say that
>
> - \\(X\\) is a **modification** of \\(Y\\) if
>
>   \\\[ P\\left\[ X\_t = Y\_t \\right\] = 1 \\text{ for any }t \\text{ in }\\mathbf{T} \\\]
> - \\(X\\) is **indistinguishable** from \\(Y\\) if
>
>   \\\[ P\\left\[ \\{ \\omega\\colon X\_t(\\omega) = Y\_t(\\omega) \\text{ for all }t \\text{ in }\\mathbf{T}\\}\\right\] = 1 \\\]

> [!NOTE]
>
> **Remark**
>
> Clearly, indistinguishable implies modification. If \\(\\mathbf{T}\\) is countable, then the reciprocal is true as
>
> \\\[ P\[\\{ \\omega\\colon X\_t(\\omega) \\neq Y\_t(\\omega) \\text{ for some }t \\text{ in }\\mathbf{T}\\}\] = P\\left\[ \\cup\_{t \\in \\mathbf{T}} \\{X\_t \\neq Y\_t\\} \\right\] \\leq \\sum\_{t \\in \\mathbf{T}} P\[X\_t \\neq Y\_t\] = 0 \\\]
>
> If \\(\\mathbf{T}\\) is not countable, then \\(\\cup\_{t \\in \\mathbf{T}}\\{X\_t\\}\\) is not a countable union of measurable sets and we can not apply subadditivity. The following counter example illustrate this fact.
>
> Let \\(\\Omega = \[0,1\]^{\\mathbf{T}}\\) and \\(\\mathcal{F} = \\otimes\_{t \\in \\mathbf{T}} \\mathcal{B}(\[0,1\])\\) for \\(\\mathbf{T} = \[0,1\]\\). As for the measure we consider the product measure such that each marginal is equal to lebesgue. Define the two processes
>
> \\\[ X\_t \\equiv 0 \\quad \\text{and}\\quad Y\_t (\\omega) = \\begin{cases} 0 &amp; \\text{if }\\omega \\neq t\\\\ \\omega &amp; \\text{if }\\omega = t \\end{cases} \\\]
>
> This defines two stochastic processes. Clearly, for every \\(t\\), the two processes differes only on one point which is of lebesgue measure \\(0\\). Hence they are modifications of each others. However \\(\\{\\omega\\colon X\_t(\\omega) = Y\_t(\\omega)\\text{ for all }0\\leq t\\leq 1\\} = \\emptyset\\).

If \\(P\\) is a probability measure on the path space such that \\(X\\) is a pre-Brownian motion and \\(B\\) is a modification of \\(X\\), then \\(B\\) is a pre Brownian motion as well as it only involves finitely many marginals. The goal is therefore to find a modification \\(B\\) of \\(X\\) such that \\(P\[\\{\\omega\\colon t \\mapsto B\_t(\\omega) \\text{ is continuous }\\}\] = 1\\) which is a consequence of the following theorem

> [!NOTE]
>
> **Kolmogorov-Čentov**
>
> Let \\((\\Omega,\\mathcal{F},P)\\) be a probability space and \\(\\tilde{X}=(\\tilde{X}\_{t})\_{0\\leq t\\leq T}\\) be a stochastic process. Suppose that
>
> \\\[ E\\left\[ |\\tilde{X}\_t-\\tilde{X}\_s|^{\\alpha} \\right\]\\leq C|t-s|^{1+\\beta} \\\]
>
> for every \\(s\<t\\leq T\\) and some strictly positive constants \\(\\alpha,\\beta\\), and \\(C\\). Then \\(\\tilde{X}\\) admits a continuous modification \\(X\\) which is locally Hölder continuous for every exponent \\(0\<\\gamma\<\\beta/\\alpha\\), that is
>
> \\\[ P\\left\[ \\left\\{ \\omega \\colon \\sup\_{0\<t-s\<h(\\omega), t,s\\leq T}\\frac{|X\_t(\\omega)-X\_s(\\omega)|}{|t-s|^\\gamma}\\leq \\delta \\right\\} \\right\]=1 \\\]
>
> where \\(h\\) is an almost surely strictly positive random variable and \\(\\delta\>0\\).

> [!NOTE]
>
> **Proof**
>
> We show it for \\(T=1\\) and define \\(\\Pi^n=\\{k/2^n\\colon k=0,\\ldots,2^n\\}\\) as well as \\(\\Pi=\\cup \\Pi^n\\), the sequence of dyadic numbers in \\(\[0,1\]\\).
>
> - **Step 1: Hölder continuity restricted to \\(\\Pi^n\\)** Denote by
>
>   \\\[ A\_n = \\max\_{\\substack{s,t \\in \\Pi^n\\\\ |t-s|\\leq 2^{-n}}}|\\tilde{X}\_t-\\tilde{X}\_s|\\geq 2^{-n\\gamma} \\\]
>
>   By Markov's inequality,
>
>   \\\[ P\[|\\tilde{X}\_t-\\tilde{X}\_s|\\geq \\varepsilon\] \\leq \\frac{1}{\\varepsilon^\\alpha} E\[|\\tilde{X}\_t-\\tilde{X}\_s|^\\alpha\] \\leq C \\varepsilon^{-\\alpha}|t-s|^{1+\\beta}. \\\]
>
>   Hence for \\(0\<\\gamma \< \\beta/\\alpha\\) and \\(\\varepsilon=2^{-\\gamma n}\\), it holds
>
>   \\\[ \\begin{align\*} P\\left\[ A\_n \\right\] &amp; = P\\left\[ \\bigcup\_{k=1}^{2^n}\\left\\{ |\\tilde{X}\_{k/2^n}-\\tilde{X}\_{(k-1)/2^n}|\\geq 2^{-n\\gamma} \\right\\} \\right\]\\\\ &amp; \\leq \\sum\_{k=1}^{2^n}P\\left\[ |\\tilde{X}\_{k/2^n}-\\tilde{X}\_{(k-1)/2^n}|\\geq 2^{-n\\gamma} \\right\]\\\\ &amp; \\leq C\\sum\_{k=1}^{2^n} 2^{-n(1+\\beta-\\alpha\\gamma)}\\\\ &amp; =C2^{-n(\\beta-\\alpha \\gamma)} \\end{align\*} \\\]
>
>   Since \\(\\beta-\\alpha \\gamma \>0\\) by the very choice of \\(\\gamma\\), it follows from Borel-Cantelli that
>
>   \\\[ P\\left\[\\limsup A\_n \\right\] = P\\left\[ \\bigcap\_n \\bigcup\_{k\\geq n} A\_k \\right\]=0 \\\]
>
>   In other terms, for each \\(\\omega\\) out of a set \\(\\mathcal{N}\\) of zero measure, it holds that \\(1\_{\\cap\_{k \\geq n} }A\_k^c (\\omega) \\rightarrow 1\\). Denote by
>
>   \\\[ n\_0\\left( \\omega \\right) = \\inf\\left\\{ n \\in \\mathbb{N}\\colon 1\_{ \\cap\_{k\\geq n}A\_k^c}(\\omega)\\geq \\frac{1}{2}\\right\\} \\\]
>
>   it follows that \\(n\_0\\) is a random variable finite on \\(\\Omega \\setminus \\mathcal{N}\\). Hence
>
>   \\\[ \\max\_{\\substack{s,t \\in \\Pi^n\\\\ |t-s|\\leq 2^{-n}}}|\\tilde{X}\_t(\\omega)-\\tilde{X}\_s(\\omega)|\< 2^{-n\\gamma} \\\]
>
>   for all \\(n\\) greater than \\(n\_0(\\omega)\\).
> - **Step 2: Hölder continuity restricted to** \\(\\Pi\\).
>
>   Fixing \\(\\omega\\) outside of \\(\\mathcal{N}\\), some integer \\(n\\), we first show per induction that for every \\(m\\) greater than \\(n+1\\) it holds
>
>   \\\[ |\\tilde{X}\_t(\\omega)-\\tilde{X}\_s(\\omega)|\\leq 2 \\sum\_{k=n+1}^{m} 2^{-\\gamma k} \\\]
>
>   for every two \\(s\\) and \\(t\\) in \\(\\Pi^m\\) with \\(|t-s| \<2^{-n}\\).
>
>   - For \\(m=n+1\\), from \\(|t-s|\<2^n\\), we can only have \\(s=(k-1)/2^{n+1}\\) and \\(t=k/2^{n+1}\\) for some \\(k\\in \\{1,\\ldots, 2^{n+1}\\}\\). Applying the relations from the previous steps the recursion hypothesis follows immediately for \\(m=n+1\\).
>   - Suppose that the recursion assumption holds up to \\(m-1\\) for \\(m\\geq n+1\\), and let us show that it follows for \\(m\\). For \\(s\<t\\) with \\(s,t\\) in \\(\\Pi^m\\) and \\(|t-s|\<2^n\\), we define \\(s\_1=\\min\\{\\tilde{s}\\in \\Pi^{m-1}\\colon \\tilde{s}\\geq s\\}\\) and \\(t\_1=\\max\\{\\tilde{t}\\in \\Pi^{m-1}\\colon \\tilde{t}\\leq t\\}\\). It follows that \\(s\\leq s\_1\\leq t\_1\\leq t\\), \\(s\_1,t\_1\\) are in \\(\\Pi^{m-1}\\) with \\(|t\_1-s\_1|\\leq 2^n\\) and \\(|t-t\_1|\\leq 2^{m}\\) and \\(|s\_1-s|\\leq 2^{m}\\). From the previous step, it follows that \\(|\\tilde{X}\_t(\\omega)-\\tilde{X}\_{t\_1}(\\omega)| \\leq 2^{-\\gamma m}\\) and \\(|\\tilde{X}\_{s\_1}(\\omega)-\\tilde{X}\_s(\\omega)|\\leq 2^m\\). From the recursion hypothesis it also holds \\(|\\tilde{X}\_{t\_1}(\\omega)-\\tilde{X}\_{s\_1}(\\omega)|\\leq 2\\sum\_{k=n+1}^{m-1} 2^{-\\gamma k}\\). These three inequalities together with the triangular inequality yields
>
>     \\\[ \\begin{align\*} |\\tilde{X}\_t(\\omega)-\\tilde{X}\_s(\\omega)| &amp; \\leq |\\tilde{X}\_t(\\omega)-\\tilde{X}\_{t\_1}(\\omega)|+|\\tilde{X}\_{t\_1}(\\omega)-\\tilde{X}\_{s\_1}(\\omega)|+|\\tilde{X}\_{s\_1}(\\omega)-\\tilde{X}\_s(\\omega)|\\\\ &amp; \\leq 2^{-\\gamma m}+2\\sum\_{k=n+1}^{m-1} 2^{-\\gamma k}+2^{-\\gamma m}\\\\ &amp; =2\\sum\_{k=n+1}^{m} 2^{-\\gamma k} \\end{align\*} \\\]
>
>     ending the proof of the recursion.
>
>   Now for every \\(t\\) and \\(s\\) in \\(\\Pi\\) with \\(0\<|t-s|\< h(\\omega)\\) where \\(h(\\omega)=2^{-n\_0(\\omega)}\\), we pick \\(n\\geq n\_0(\\omega)\\) such that \\(2^{-(n+1)}\\leq |t-s|\< 2^{n}\\). From the result of the recursion, and \\(\\gamma\>0\\), we get
>
>   \\\[ \\begin{align\*} |\\tilde{X}\_t(\\omega)-\\tilde{X}\_s(\\omega)| &amp; \\leq 2\\sum\_{k=n+1}^{\\infty} 2^{-\\gamma k}\\\\ &amp; =\\frac{2}{1-2^{-\\gamma}}2^{-\\gamma (n+1)}\\\\ &amp; \\leq \\delta |t-s|^{\\gamma} \\end{align\*} \\\]
>
>   for every \\(t\\) and \\(s\\) in $\\Pi with \\(0\<|t-s|\<h(\\omega)\\) where \\(\\delta = 2/(1-2^{-\\gamma})\\), showing that \\(t \\mapsto \\tilde{X}\_t(\\omega)\\) is uniformly Hölder continuous of order \\(\\gamma\\) on \\(\\Pi\\).
> - **Step3: Definition of the continuous version** \\(X\\).
>
>   For \\(\\omega\\) in \\(\\mathcal{N}\\) we set \\(X(\\omega)=0\\). For \\(\\omega\\) outside of \\(\\mathcal{N}\\), and \\(t\\) we pick a sequence \\((s\_n)\\) of elements in \\(\\Pi\\) converging to \\(t\\) which by the uniform continuity of \\(\\tilde{X}(\\omega)\\) on \\(\\Pi\\) yields a limit \\(X\_t(\\omega)=\\lim \\tilde{X}\_{s\_n}(\\omega)\\) independent of the choice of the sequence \\((s\_n)\\) in \\(\\Pi\\) converging to \\(t\\). It follows that \\(X\\) has continuous paths. Defined as a limit of sequence of random variables, it follows also that \\(X\\) is a process. Given \\(\\delta\>0\\) and \\(t\\), for \\(|t-s|\\leq \\gamma\\) from triangular as well as Markov inequality, it holds
>
>   \\\[ \\begin{align\*} P\\left\[ |X\_t - \\tilde{X}\_t|\>\\delta \\right\] &amp; \\leq P\\left\[ |X\_t - X\_s|geq \\delta \\right\] + P\\left\[ |X\_s - \\tilde{X}\_s|\\geq \\delta \\right\] \\end{align\*} \\\]
>
>   Finally, \\(\\{X\_t=\\tilde{X}\_t\\}\\) is contained in the set of those \\(\\omega\\) such that \\(\\tilde{X}\_{s\_n}(\\omega)\\) has a limit for some sequence \\((s\_n)\\) in \\(\\Pi\\) converging to \\(t\\), it follows that \\(\\{X\_t = \\tilde{X}\_t\\}\\supseteq \\mathcal{N}^c\\). Hence \\(P\[X\_t=\\tilde{X}\_t\]\\geq P\[\\mathcal{N}^c\]=1\\) showing that \\(X\\) is a version of \\(\\tilde{X}\\) which ends the proof of the Theorem.

> [!NOTE]
>
> **Proposition**
>
> There exists a probability space \\((\\Omega,\\mathcal{F},P)\\) and a stochastic process \\(B\\) such that \\(B\\) is a Brownian motion.

> [!NOTE]
>
> **Proof**
>
> As seen is a proposition above consequence of Kolomogorov extension theorem, we can construct a probability measure \\(P\\) on the canonical space \\((\\Omega,\\mathcal{F})\\) such that the canonical process \\(X\\) is a pre-brownian motion. To verify the conditions of Kolmogorov- Čentov's Theorem, recall that if a random variable \\(Y \\sim \\mathcal{N}(0,\\sigma^2)\\), then it holds that \\(E\[Y^{2n}\] = \\sigma^n(2n-1)(2n-3)\\ldots\\). Since \\(X\_t-X\_s \\sim \\mathcal{N}(0,t-s)\\), it follows that
>
> \\\[ E\\left\[ \\left| X\_t-X\_s \\right|^{2n} \\right\]=C\_n|t-s|^{n} \\\]
>
> where \\(C\_n = (2n-1)(2n-3)\\ldots\\). Hence, for \\(\\beta\_n = n-1\\) and \\(\\alpha\_n = 2n\\), it follows that we can find a continuous version \\(B\\) of \\(X\\) locally Hölder continuous of order \\(0\<\\gamma \< \\beta\_n/\\alpha\_n=1/2-1/(2n)\\) for every \\(n\\). The continuous version \\(B\\) having the same finite dimensional distribution properties as \\(X\\) we deduce that \\(B\\) is a Brownian motion.

> [!NOTE]
>
> **Proposition**
>
> Almost all paths of the Brownian motion are nowhere locally Hölder continuous of order \\(\\gamma\>1/2\\). In particular, they are nowhere differentiable.

> [!NOTE]
>
> **Proof**
>
> Homework sheet.

Some properties of the Brownian motion.

> [!NOTE]
>
> **Proposition**
>
> Let \\(B\\) be a Brownian motion.  
> Then the following processes:
>
> 1. \\(B\_{s+\\cdot}-B\_s\\) is a Brownian motion independent of \\(\\sigma(B\_u\\colon u\\leq s)\\);
> 2. \\(-B\\) is a Brownian motion;
> 3. \\(\\sigma B\_{\\cdot / \\sigma^2}\\) is a Brownian motion for every \\(\\sigma \> 0\\);
> 4. \\(X\_0 = 0\\) and \\(X\_t = t B\_{1/t}\\) for \\(t \> 0\\) is a Brownian motion.

> [!NOTE]
>
> **Proof**
>
> Is left as an exercise of the homework sheet.

[^/SP_Lecture/lecture/05-Markov/053-brownian/#1]: A complete metric space which is separable.
