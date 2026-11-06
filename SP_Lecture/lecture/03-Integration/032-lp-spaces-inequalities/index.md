# \\(L^p\\)-Spaces and Classical Inequalities

## \\(L^p\\)-Spaces

One important property of the Lebesgue integral is that it is independent of the null sets on which functions may differ.

> [!NOTE]
>
> **Proposition**
>
> Let \\(X\\) and \\(Y\\) be two integrable random variables or two elements of \\(\\mathcal{L}\_+^0\\). Suppose that \\(X\\geq Y\\) \\(P\\)-almost surely, that is \\(P\[X\\geq Y\]=1\\), then it follows that \\(E\[X\]\\geq E\[Y\]\\).

In particular, if \\(X=Y\\) \\(P\\)-almost surely, then it holds \\(E\[X\]=E\[Y\]\\). Also, if \\(X\\geq 0\\) \\(P\\)-almost surely and \\(E\[X\]=0\\), then it follows that \\(X=0\\) \\(P\\)-almost surely.

> [!NOTE]
>
> **Proof**
>
> Suppose that \\(X\\geq Y\\) \\(P\\)-almost surely and define \\(A=\\{X\<Y\\}\\), which is a negligible set, that is, an event of \\(0\\) probability.  
> It follows that \\((X-Y)1\_{A^c} \\in \\mathcal{L}^0\_+\\), and so \\(E\[(X-Y)1\_{A^c}\]=E\[X1\_{A^c}\]-E\[Y1\_{A^c}\]\\geq 0\\) by monotonicity.
>
> On the other hand, \\((Y-X)1\_{A} \\in \\mathcal{L}^0\_+\\), and let \\(Z^n=\\sum \\alpha\_k 1\_{B\_k^n}\\) be an increasing sequence of step random variables that converges to \\((Y-X)1\_{A}\\). Since \\((Y-X)1\_{A}=0\\) on \\(A^c\\), it follows that \\(B\_k^n\\subseteq A\\) for every \\(k,n\\) and therefore \\(P\[B\_k^n\]\\leq P\[A\]=0\\) for every \\(k,n\\).  
> We deduce that \\(E\[Z^n\]=0\\) for every \\(n\\) and by Lebesgue monotone convergence, it follows that \\(E\[(Y-X)1\_{A}\]=0\\).
>
> We conclude by noticing that \\((X-Y)=(X-Y)1\_{A^c}-(Y-X)1\_{A}\\).

This proposition allows in the monotone convergence theorem, Fatou's lemma, as well as dominated convergence, to replace convergence of random variables and inequalities by \\(P\\)-almost sure convergence and \\(P\\)-almost sure inequalities.

On \\(\\mathcal{L}^1\\), we can define the operator \\(X\\mapsto \\|X\\|\_1=E\[|X|\]\\). Verify that:

- \\(X=0\\) implies \\(\\|X\\|\_1=0\\).
- \\(\\|X+Y\\|\_1\\leq \\|X\\|\_1+\\|Y|\_1\\).
- \\(\\|\\lambda X\\|\_1=|\\lambda|\\|X\\|\_1\\).

In other words, \\(\\|\\cdot\\|\\) is "almost" a norm if in the first point we had equivalence and not only implication. However, as the previous proposition shows, it actually holds:

- \\(\\|X\\|\_1=0\\) if and only if \\(X=0\\) \\(P\\)-almost surely.

We therefore proceed as in Algebra. Inspection shows that \\(X\\sim Y\\) on \\(\\mathcal{L}^0\\) if and only if \\(X=Y\\) \\(P\\)-almost surely is an equivalence relation.[^/SP_Lecture/lecture/03-Integration/032-lp-spaces-inequalities/#1] We can therefore define the quotient of equivalence classes \\(L^0=\\mathcal{L}^0/\\sim\\).  
We can work there just as in \\(\\mathcal{L}^0\\) in the \\(P\\)-almost sure sense, that is, \\(X=Y\\) means \\(X=Y\\) \\(P\\)-almost surely, even if \\(X\\) is actually just a representative of its equivalence class. Inequality is also compatible with the equivalence relation, and therefore \\(X\\geq Y\\) means \\(X\\geq Y\\) \\(P\\)-almost surely. Every operation that is blind with respect to null measure sets can be carried over to \\(L^0\\). This is the case for the expectation on \\(L^0\_+\\). Similarly, we can define \\(L^1\\) as the set of equivalence classes of integrable random variables that coincide \\(P\\)-almost surely.

Also, since the operator \\(\\left\\Vert\\cdot\\right\\Vert\_1\\) does not take into account objects defined on negligible sets, it carries over to \\(L^1\\) as a true norm, making \\((L^1,\\left\\| \\cdot \\right\\| )\\) a normed space. We can further define, for \\(1\\leq p\\leq \\infty\\), the following operators on \\(L^0\\):

\\\[ \\begin{equation} \\left\\Vert X\\right\\Vert\_p= \\begin{cases} E\\left\[ \\left\\vert X\\right\\vert^p \\right\]^{1/p}, &amp; \\text{if } p\<\\infty, \\\\ \\inf\\left\\{ m\\colon P\\left\[ \\left\\vert X\\right\\vert\\leq m \\right\] =1\\right\\}, &amp; \\text{if } p=\\infty. \\end{cases} \\end{equation} \\\]

that give rise to the spaces

\\\[ \\begin{equation} L^p :=\\left\\{ X \\in L^0\\colon \\left\\Vert X\\right\\Vert\_p\<\\infty \\right\\}. \\end{equation} \\\]

Even if \\(L^1\\) is a normed space for \\(\\|\\cdot \\|\\) it is not clear that \\(L^p\\) is a normed space for \\(\\|\\cdot \\|\_p\\) as we do not know if it is subadditive.

## Jensen, Hölder, Minkowsky and Markov Inequalities

Due to the linearity and monotonicity of the expectation several central inequalities can be derived.

> [!NOTE]
>
> **Theorem: Jensen's inequality**
>
> Let \\(\\varphi:\\mathbb{R}\\to \\mathbb{R}\\) be a convex function and \\(X\\) be an integrable random variable. It holds
>
> \\\[ \\begin{equation} \\varphi\\left( E\\left\[ X \\right\] \\right)\\leq E\\left\[ \\varphi(X) \\right\]. \\end{equation} \\\]

> [!NOTE]
>
> **Proof**
>
> Let \\(x\_0=E\[X\]\\). Since \\(\\varphi\\) is a convex real-valued function, the existence of a sub-derivative for convex functions implies the existence of \\(a\\) and \\(b\\) in \\(\\mathbb{R}\\) such that
>
> \\\[ \\begin{equation} \\varphi(x)\\geq ax +b, \\text{ for all any }x \\quad \\text{and} \\quad \\varphi(x\_0)=ax\_0+b \\end{equation} \\\]
>
> Hence,
>
> \\\[ \\begin{equation} E\\left\[ \\varphi(X) \\right\]\\geq aE\[X\]+b=ax\_0+b=\\varphi\\left( E\[X\] \\right). \\end{equation} \\\]
>
> which ends the proof.

> [!NOTE]
>
> **Exercise**
>
> Using Jensen's inequality, prove that \\((\\prod a\_i)^{1/n}\\leq \\frac{1}{n} \\sum a\_i\\) where \\(a\_1, \\dots, a\_n\>0\\).

> [!NOTE]
>
> **Theorem: Hölder and Minkowski Inequalities**
>
> Let \\(1\\leq p,q \\leq \\infty\\) be convex conjugate, that is, such that \\(1/p+1/q=1\\).
>
> ---
>
> For every \\(X\\) in \\(L^p\\) and \\(Y\\) in \\(L^q\\), the Hölder inequality reads as follows:
>
> \\\[ \\begin{equation} \\left\\Vert XY\\right\\Vert\_1=E\\left\[ \\left\\vert XY\\right\\vert \\right\]\\leq E\\left\[ \\left\\vert X\\right\\vert^p \\right\]^{1/p}E\\left\[ \\left\\vert Y\\right\\vert^q \\right\]^{1/q}=\\left\\Vert X\\right\\Vert\_p\\left\\Vert Y\\right\\Vert\_q. \\end{equation} \\\]
>
> ---
>
> For every \\(X\\) and \\(Y\\) in \\(L^p\\), the Minkowski inequality reads as follows:
>
> \\\[ \\begin{equation} \\left\\Vert X+Y\\right\\Vert\_p=E\\left\[ \\left\\vert X+Y\\right\\vert^p \\right\]^{1/p}\\leq E\\left\[ \\left\\vert X\\right\\vert^p \\right\]^{1/p}+E\\left\[ \\left\\vert Y\\right\\vert^p \\right\]^{1/p}=\\left\\Vert X\\right\\Vert\_p+\\left\\Vert Y\\right\\Vert\_p. \\end{equation} \\\]

> [!NOTE]
>
> **Proof**
>
> As for the Hölder inequality, in the case where \\(p=1\\) and \\(q=\\infty\\), the inequality follows from \\(\\left\\vert XY\\right\\vert\\leq \\left\\vert X\\right\\vert\\left\\Vert Y\\right\\Vert\_\\infty\\). Suppose therefore that \\(p,q\\) are conjugate with values in \\((1,\\infty)\\). Without loss of generality, we may assume that \\(X\\) and \\(Y\\) are positive. It holds
>
> \\\[ \\begin{equation} E\[XY\]=E\[Y^q\]\\int XY^{1-q}\\frac{Y^qdP}{E\[Y^q\]}=E\[Y^q\]E\_Q\\left\[XY^{1-q} \\right\] \\end{equation} \\\]
>
> where \\(E\_Q\\) is the expectation operator under the measure \\(Q\\) where the density is given by \\(dQ:=Y^qdP/E\[Y^q\]\\).[^/SP_Lecture/lecture/03-Integration/032-lp-spaces-inequalities/#2] Defining the convex function \\(x\\mapsto \\varphi(x)=x^p\\), Jensen's inequality together with the fact that \\(p(1-q)+q=0\\) and \\(1-1/p=1/q\\) yields
>
> \\\[ \\begin{align} E\[XY\]&amp;=E\[Y^q\]E\_Q\[X Y^{1-q}\] \\\\ &amp;=E\[Y^q\]\\varphi(E\_Q\[XY^{1-q}\])^{1/p} \\\\ &amp;\\leq E\[Y^q\]E\_Q\\left\[ \\varphi(XY^{1-q}) \\right\]^{1/p} \\\\ &amp;=E\[Y^q\]E\_Q\\left\[X^p Y^{p(1-q)}\\right\]^{1/p} \\\\ &amp;=E\[Y^q\]E\\left\[X^p Y^{p(1-q)}Y^q/E\[Y^q\] \\right\]^{1/p} \\\\ &amp;=E\[X^p\]^{1/p}E\[Y^q\]^{1-1/p} \\\\ &amp;=E\[X^p\]^{1/p}E\[Y^q\]^{1/q}. \\end{align} \\\]
>
> As for the Minkowski inequality, in the case where \\(p=1\\), it follows from \\(\\left\\vert x+y\\right\\vert\\leq \\left\\vert x\\right\\vert+\\left\\vert y\\right\\vert\\).  
> The case where \\(p=\\infty\\) is also easy. Suppose therefore that \\(1\<p\<\\infty\\). First, notice that by convexity it holds \\(\\left\\vert x+y\\right\\vert^p\\leq \\frac{1}{2} \\left\\vert2x\\right\\vert^p+\\frac{1}{2}\\left\\vert2y\\right\\vert^p=2^{p-1}\\left(\\left\\vert x\\right\\vert^p+\\left\\vert y\\right\\vert^p\\right)\\). This inequality ensures that \\(L^p\\) is a vector space. Now, using the triangle inequality and Hölder's inequality for \\(q=p/(p-1)\\), we get
>
> \\\[ \\begin{align} \\left\\Vert X+Y\\right\\Vert\_p^p &amp;=E\\left\[ \\left\\vert X+Y\\right\\vert^p \\right\] \\\\ &amp; \\leq E\\left\[ \\left\\vert X\\right\\vert\\left\\vert X+Y\\right\\vert^{p-1} \\right\]+E\\left\[ \\left\\vert Y\\right\\vert\\left\\vert X+Y\\right\\vert^{p-1} \\right\] \\\\ &amp;\\leq \\left(E\\left\[ \\left\\vert X\\right\\vert^p \\right\]^{1/p}+E\\left\[ \\left\\vert Y\\right\\vert^p \\right\]^{1/p}\\right)E\\left\[ \\left\\vert X+Y\\right\\vert^{p} \\right\]^{1-1/p} \\\\ &amp;= \\left( \\left\\Vert X\\right\\Vert\_p+\\left\\Vert Y\\right\\Vert\_p \\right)\\left\\Vert X+Y\\right\\Vert\_p^{p-1}. \\end{align} \\\]
>
> If \\(\\left\\Vert X+Y\\right\\Vert\_p=0\\), the inequality is trivial. Otherwise, divide both sides by \\(\\left\\Vert X+Y\\right\\Vert^{p-1}\\).

It follows in particular that \\(L^p\\) is a vector space and that \\(\\left\\Vert\\cdot\\right\\Vert\_p\\) is a norm on \\(L^p\\).  
We say that \\(X\_n \\to X\\) in \\(L^p\\) for \\((X\_n),X\\) in \\(L^p\\) if \\(\\left\\Vert X\_n-X\\right\\Vert\_p\\to 0\\). The \\(L^p\\) spaces are not only normed space but also Banach spaces (that is complete).

> [!NOTE]
>
> **Theorem: The \\(L^p\\) Spaces are Banach Spaces**
>
> Let \\(1\\leq p\\leq \\infty\\) and \\((X\_n)\\) be a Cauchy sequence in \\(L^p\\). Then it follows that \\(X\_n \\to X\\) in \\(L^p\\) for some \\(X\\) in \\(L^p\\).
>
> In particular \\((L^p, \\|\\cdot \\|\_p)\\) is a Banach space.

> [!NOTE]
>
> **Proof**
>
> We do the proof for \\(p\<\\infty\\). Let \\((X\_n)\\) be a Cauchy sequence. By Cauchy property, we can take a subsequence \\((Y\_n)\\) of \\((X\_n)\\) such that \\(\\left\\vert Y\_{n+1}-Y\_n\\right\\vert\\leq 2^{-n}\\) and define \\(Z\_n=\\left\\vert Y\_1\\right\\vert+\\sum\_{k\\leq n-1} \\left\\vert Y\_{k+1}-Y\_k\\right\\vert\\) which is an increasing sequence of positive random variables converging to \\(Z=\\sup Z\_n\\). Hence, the monotone convergence theorem shows that \\(E\[Z^p\]=\\lim E\[Z\_n^p\]\\). By Minkowski inequality it holds
>
> \\\[ \\begin{equation\*} E\\left\[ Z\_n^p \\right\]=\\left\\Vert Z\_n\\right\\Vert\_p^p\\leq \\left( \\left\\Vert Y\_1\\right\\Vert\_p+\\sum\_{k\\leq n-1}\\left\\Vert Y\_{k+1}-Y\_k\\right\\Vert\_p \\right)^p\\leq \\left( \\left\\Vert Y\_1\\right\\Vert\_p+1 \\right)^p \\end{equation\*} \\\]
>
> The right-hand side being independent of \\(n\\), it follows by passing to the limit that \\(Z \\in L^p\\) and therefore \\(Z\<\\infty\\) \\(P\\)-almost surely.
>
> On the other hand, since the absolute series, \\(\\sum \\left\\vert Z\_{k+1}-Z\_k\\right\\vert\\) converges, it follows that \\(Y\_n=Y-1+\\sum\_{k\\leq n-1}Y\_{k+1}-Y\_k\\) converges \\(P\\)-almost surely to some \\(Y\\). Hence, \\(Y=\\lim Y\_n\\) is in \\(L^p\\) since \\(\\left\\vert Y\\right\\vert=\\lim \\left\\vert Y\_n\\right\\vert\\leq Z \\in L^p\\). We make use of dominated convergence on \\((Y\_n)\\) since \\(Y\_n^p\\to Y^p\\) \\(P\\)-almost surely and \\(\\left\\vert Y\_n\\right\\vert^p\\leq Z^p\\in L^p\\), which implies that \\(E\[\\left\\vert Y\_n-Y\\right\\vert^p\]\\to 0\\). It shows that a subsequence \\((Y\_n)\\) of \\((X\_n)\\) converges in \\(L^p\\) to some \\(Y\\).
>
> As an exercise, using the Cauchy property, show that \\(X\_n\\to Y\\) in \\(L^p\\).

> [!NOTE]
>
> **Definition**
>
> Let \\((X\_n)\\) be a sequence of random variables and \\(X\\) a random variable.
>
> We say that
>
> - \\(X\_n\\to X\\) **\\(P\\)-almost surely** if \\(P\[\\limsup X\_n=\\liminf X\_n\]=1\\).
> - \\(X\_n\\to X\\) **in probability** if \\(\\lim P\[\\left\\vert X\_n-X\\right\\vert\>\\varepsilon\]=0\\) for every \\(\\varepsilon\>0\\).
> - \\(X\_n\\to X\\) **in \\(L^p\\)** if \\(\\left\\Vert X\_n-X\\right\\Vert\_p\\to 0\\).

> [!NOTE]
>
> **Proposition**
>
> Let \\((X\_n)\\) be a sequence of random variables and \\(X\\) a random variable.  
> The following assertions hold:
>
> 1. \\(X\_n\\to X\\) \\(P\\)-almost surely implies \\(X\_n\\to X\\) in probability.
> 2. \\(X\_n\\to X\\) in probability implies that \\(Y\_n\\to X\\) \\(P\\)-almost surely for some subsequence \\((Y\_n)\\) of \\((X\_n)\\).
> 3. \\(X\_n\\to X\\) in \\(L^p\\) implies that \\(Y\_n\\to X\\) \\(P\\)-almost surely for some subsequence \\((Y\_n)\\) of \\((X\_n)\\).
> 4. \\(X\_n\\to X\\) in probability and \\(\\left\\vert X\_n\\right\\vert\\leq Y\\) for some \\(Y \\in L^1\\) implies \\(X\_n\\to X\\) in \\(L^1\\).

> [!NOTE]
>
> **Proof**
>
> Homework sheet.

> [!NOTE]
>
> **Theorem: Chebyshev/Markov Inequality**
>
> Let \\(X\\) be a random variable and \\(\\varepsilon\>0\\). For every \\(0\<p\<\\infty\\), the Chebyshev inequality reads
>
> \\\[ \\begin{equation\*} P\\left\[ \\left\\vert X\\right\\vert\\geq \\varepsilon \\right\]\\leq \\frac{1}{\\varepsilon^p}E\\left\[ \\left\\vert X\\right\\vert^p \\right\]. \\end{equation\*} \\\]
>
> In the case where \\(p=1\\), the inequality is due to Markov.

> [!NOTE]
>
> **Proof**
>
> Define \\(A\_{t}=\\{\\left\\vert X\\right\\vert\\geq t\\}\\) and \\(g(x)=x^p\\) which is an increasing function, so that consequently yields \\(0\\leq g(\\varepsilon)1\_{A\_\\varepsilon}\\leq g(\\left\\vert X\\right\\vert)1\_{A\_\\varepsilon}\\).
>
> Thus, \\(0\\leq g(\\varepsilon)P\[A\_\\varepsilon\]=E\[g(\\varepsilon)1\_{A\_\\varepsilon}\]\\leq E\[g(\\left\\vert X\\right\\vert)1\_{A\_\\varepsilon}\]\\leq E\[g(\\left\\vert X\\right\\vert)\]\\) which ends the proof.

> [!NOTE]
>
> **Remark**
>
> Note the proof of Markov's inequality shows that the following inequality holds
>
> \\\[ \\begin{equation\*} P\\left\[ \\left\\vert X\\right\\vert\\geq \\varepsilon \\right\]\\leq \\frac{1}{g(\\varepsilon)}E\\left\[g\\left( \\left\\vert X\\right\\vert \\right) \\right\] \\end{equation\*} \\\]
>
> for every increasing and measurable function \\(g:\\mathbb{R}\\to \\mathbb{R}\\) such that \\(g(\\varepsilon)\>0\\).

[^/SP_Lecture/lecture/03-Integration/032-lp-spaces-inequalities/#1]: An equivalence relation \\(\\sim\\) is a binary relation that is symmetric, that is, \\(x\\sim y\\) if and only if \\(y\\sim x\\), reflexive, that is, \\(x\\sim x\\), and transitive, that is, \\(x\\sim y\\) and \\(y\\sim z\\) implies \\(x\\sim z\\).

[^/SP_Lecture/lecture/03-Integration/032-lp-spaces-inequalities/#2]: Verify that defined as such, \\(Q\\) is a probability measure, that is, \\(Q(A)=\\int\_A dQ=\\int\_A Y^q/E\[Y^q\]dP=E\[1\_A Y^q/E\[Y^q\]\]\\) is a \\(\\sigma\\)-additive measure and it holds \\(E\_Q\[Z\]=E\[Z Y^q/E\[Y^q\]\]\\). See las exercise of the previous section.
