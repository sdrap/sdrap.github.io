# Martingales \\(L^p\\)-Convergence

As astonishing and useful the martingales convergence in the \\(P\\)-almost sure case can be due to Doob's optional sampling and upcrossing lemma it is often limiting from a topological viewpoint. The \\(P\\)-almost sure convergence does not provides a satisfactory topology on spaces of random variable (in particular it is not a locally convex topology). We would prefer in most case to get stronger convergence in terms of norms.

It turns out that convergence in \\(L^p\\) for \\(p\>1\\) can be derived as shown in the subsequent section due to **Doob's maximal inequalities**. The case of \\(L^1\\) due to its topological particularity (is not a reflexive space) is not available without additional uniform integrability conditions.

## Doob's Maximal Inequalities and \\(L^p\\) Convergence

The building block for \\(L^p\\) convergence are the so-called Doob's maximal inequalities. In the following, given a process \\(X\\) we define the

- **Running supremum process** \\(\\overline{X}\\) by \\(\\overline{X}\_t=\\sup\_{s\\leq t}X\_s\\).
- **Running infimum process** \\(\\underline{X}\\) by \\(\\underline{X}\_t=\\inf\_{s\\leq t}X\_s\\).
- **Running absolute supremum process** \\(X^\\ast\\) by \\(X^\\ast\_t=\\sup\_{s\\leq t} |X\_s|\\).

> [!NOTE]
>
> **Proposition: Doob's Maximal Inequalities**
>
> The following assertions hold true.
>
> 1. Let \\(X\\) be a sub-martingale and \\(\\lambda\>0\\). Then it holds
>
>    \\\[ \\begin{align\*} \\lambda P\\left\[ \\overline{X}\_t\\geq \\lambda \\right\]&amp;\\leq E\\left\[ 1\_{\\{\\overline{X}\_t \\geq \\lambda\\}}X\_t \\right\]\\leq E\\left\[ X\_t^+ \\right\];\\\\ \\lambda P\\left\[ \\underline{X}\_t\\leq -\\lambda \\right\]&amp;\\leq E\\left\[ 1\_{\\{\\underline{X}\_t \>- \\lambda\\}} X\_t \\right\]-E\[X\_0\]\\leq E\\left\[ X\_t^+ \\right\]-E\\left\[ X\_0 \\right\]. \\end{align\*} \\\]
> 2. For \\(X\\) a positive sub-martingale and \\(p\>1\\), it holds
>
>    \\\[ \\begin{equation\*} \\left\\Vert\\sup\_{s \\leq t}X\_s\\right\\Vert\_p\\leq \\frac{p}{p-1}\\left\\Vert X\_t\\right\\Vert\_p. \\end{equation\*} \\\]

> [!NOTE]
>
> **Remark**
>
> Note that Doob's maximal inequalities are similar to Markov inequality. The fundamental difference though and powerfull fact is that the probability of the behavior of the whole path between \\(0\\) and \\(t\\) is controled by the expectation of the sub martingale at the begining and end.
>
> Note also that the second statement shows that the norm of the running maximum of the path between \\(0\\) and \\(t\\), which can be arbitrarily large, is controled by the norm at time \\(t\\). This however only holds for \\(p\>1\\).
>
> Those statements about the path being controled by the values at its boundary is certainly not trivial.

> [!NOTE]
>
> **Proof**
>
> 1. For the stopping time \\(\\tau=\\inf\\{s:X\_s\\geq \\lambda \\}\\), observe that \\(\\{\\tau\\leq t\\}=\\{\\overline{X}\_t\\geq \\lambda\\}\\). Also, on \\(\\{\\tau\\leq t\\}\\), it holds \\(X^\\tau\_{t}=X\_{\\tau\\wedge t}\\geq \\lambda\\). Hence,
>
>    \\\[ \\begin{equation\*} X\_{\\tau\\wedge t}=X\_{\\tau}1\_{\\{\\overline{X}\_t\\geq \\lambda\\}}+X\_t1\_{\\{\\tau\>t\\}}\\geq \\lambda 1\_{\\{\\overline{X}\_t\\geq \\lambda\\}}+X\_t1\_{\\{\\tau\>t\\}}. \\end{equation\*} \\\]
>
>    It also holds, \\(X\_t1\_{\\{\\tau\>t\\}}\\geq -X\_t^-\\). Altogether, with Doob's optional sampling theorem and \\(X\\) being a sub-martingale, we get
>
>    \\\[ \\begin{align\*} E\\left\[ X\_t \\right\] &amp; = E\\left\[ E\\left\[X\_t |\\mathcal{F}\_{t\\wedge \\tau} \\right\] \\right\]\\\\ &amp; \\geq E\\left\[ X\_{\\tau\\wedge t} \\right\]\\\\ &amp; \\geq \\lambda P\\left\[ \\overline{X}\_t\\geq \\lambda \\right\]+E\\left\[ 1\_{\\{\\tau\>t\\}} X\_t\\right\]\\\\ &amp; \\geq \\lambda P\\left\[ \\overline{X}\_t\\geq \\lambda \\right\]-E\\left\[ X\_t^- \\right\], \\end{align\*} \\\]
>
>    and conclude the first inequality by observing that, on the one hand, \\(E\[X\_t^+\]=E\[X\_t\]+E\[X\_t^-\]\\), and on the other hand,
>
>    \\\[ \\begin{equation\*} E\[X\_t\]-E\\left\[ 1\_{\\{\\tau\>t\\}} X\_t\\right\]=E\[(1- 1\_{\\{\\overline{X}\_t\<\\lambda\\}}) X\_t\]=E\[1\_{\\{\\overline{X}\_t\\geq \\lambda \\}}X\_t\]. \\end{equation\*} \\\]
>
>    As for the second inequality, for the stopping time \\(\\sigma=\\inf\\{s: X\_s\\leq -\\lambda\\}\\), observe that \\(\\{\\sigma\\leq t\\}=\\{\\underline{X}\_t\\leq -\\lambda\\}\\). Also, on \\(\\{\\sigma\\leq t\\}\\), it holds \\(X^\\sigma\_{t}=X\_{\\sigma\\wedge t}\\leq -\\lambda\\). Hence,
>
>    \\\[ \\begin{equation\*} X\_{\\sigma\\wedge t}=X\_{\\sigma}1\_{\\{\\underline{X}\_t\\leq -\\lambda\\}}+X\_t1\_{\\{\\sigma\>t\\}}\\leq -\\lambda 1\_{\\{\\underline{X}\_t\\leq -\\lambda\\}}+X\_t1\_{\\{\\sigma\>t\\}}. \\end{equation\*} \\\]
>
>    Altogether, with Doob's optional sampling theorem and \\(X\\) being a sub-martingale, we get
>
>    \\\[ \\begin{equation\*} E\\left\[ X\_0 \\right\]\\leq E\\left\[ X\_{\\sigma\\wedge t} \\right\]\\leq -\\lambda P\\left\[ \\underline{X}\_t \\leq -\\lambda\\right\]+E\\left\[ 1\_{\\{\\sigma\>t\\}} X\_t \\right\]\\leq -\\lambda P\\left\[ \\underline{X}\_t \\leq -\\lambda\\right\]+E\\left\[ X\_t^+ \\right\] \\end{equation\*} \\\]
>
>    showing the second inequality by observing that \\(E\[1\_{\\{\\sigma\>t\\}}X\_t\]=E\[1\_{\\{\\underline{X}\_t\>-\\lambda\\}}X\_t\]\\).
> 2. Define the random variables \\(Y=\\sup\_{s\\leq t}X\_s\\) and \\(Z=X\_t=X\_t^+\\) since \\(X\\) is positive. For \\(\\varphi\\) an increasing, right-continuous function with \\(\\varphi(0)=0\\), by Fubini's theorem and the previous inequalities, it holds
>
>    \\\[ \\begin{align\*} E\\left\[ \\varphi(Y) \\right\] &amp; = E\\left\[ \\int\_{0}^\\infty 1\_{\\{\\lambda \\leq Y\\}}d\\varphi(\\lambda) \\right\]\\\\ &amp; = \\int\_{0}^\\infty P\\left\[ Y\\geq \\lambda \\right\]d\\varphi(\\lambda)\\\\ &amp; \\leq \\int\_0^\\infty E\\left\[1\_{\\{Y\\geq \\lambda\\}}Z\\right\]\\frac{d\\varphi(\\lambda)}{\\lambda}\\\\ &amp; = E\\left\[ Z \\int\_0^\\infty 1\_{\\{Y\\geq \\lambda\\}}\\frac{d\\varphi(\\lambda)}{\\lambda} \\right\]. \\end{align\*} \\\]
>
>    If we consider \\(\\varphi(\\lambda)=\\lambda^p\\), \\(p\>1\\), and define \\(q=p/(p-1)\\) for which holds \\(1/p+1/q=1\\), it follows from Hölder's inequality that
>
>    \\\[ \\begin{equation\*} \\left\\Vert Y\\right\\Vert\_p^p\\leq pE\\left\[ Z \\int\_0^\\infty 1\_{\\{Y\\geq \\lambda\\}}\\lambda^{p-2}d\\lambda \\right\]=\\frac{p}{p-1}E\\left\[ Z Y^{p-1} \\right\]\\leq q \\left\\Vert Z\\right\\Vert\_p \\left\\Vert Y^{p-1}\\right\\Vert\_q=q \\left\\Vert Z\\right\\Vert\_p \\left\\Vert Y\\right\\Vert\_p^{p/q}. \\end{equation\*} \\\]
>
>    If \\(0\<\\left\\Vert Y\\right\\Vert^{p/q}\_p\<\\infty\\), dividing the inequality by \\(\\left\\Vert Y\\right\\Vert^{p/q}\_p\\), noting that \\(p-p/q =1\\), yields
>
>    \\\[ \\begin{equation\*} \\left\\Vert\\sup\_{s\\leq t}X\_s\\right\\Vert\_p=\\left\\Vert Y\\right\\Vert\_p\\leq q \\left\\Vert Z\\right\\Vert\_p=q \\left\\Vert X\_t\\right\\Vert\_p, \\end{equation\*} \\\]
>
>    as desired.

> [!NOTE]
>
> **Corollary**
>
> If \\(X\\) is a martingale, and \\(p\>1\\), it holds
>
> \\\[ \\begin{equation} \\left\\Vert X^\\ast\_t\\right\\Vert\_p=E\\left\[ \\left( \\sup\_{s\\leq t}\\left\\vert X\_s\\right\\vert \\right)^p \\right\]^{1/p}\\leq \\left(\\frac{p}{p-1}\\right) \\left\\Vert X\_t\\right\\Vert \\end{equation} \\\]

> [!NOTE]
>
> **Proof**
>
> Follows immediately that \\(|X|\\) is a sub-martingale and the doob's maximal inequalities.

> [!NOTE]
>
> **Martingale Convergence Theorem**
>
> Let \\(X\\) be a martingale such that \\(\\sup\_{t}E\[|X\_t|^p\]\<\\infty\\) for some \\(p\>1\\). Then, there exists a random variable \\(X\_{\\infty}\\) in \\(L^p\\) such that \\(X\_t \\to X\_{\\infty}\\) almost surely and in \\(L^p\\).

> [!NOTE]
>
> **Proof**
>
> Since Jensen's inequality yields \\(E\[X\_t^+\]\\leq E\[|X\_t|\]\\leq E\[|X\_t|^p\]^{\\frac{1}{p}}\\), it follows that \\(\\sup E\[X\_t^+\]\<\\infty\\). By the \\(P\\)-almost sure martingale convergence Theorem, there exists an integrable random variable \\(X\_{\\infty}\\) for which \\(X\_t\\to X\_{\\infty}\\) almost surely.
>
> We are left to show that the sequence \\(|X\_t-X\_\\infty|^p\\) satisfies the assumptions of Lebesgue's dominated convergence. It holds
>
> \\\[ \\begin{equation\*} |X\_t -X\_\\infty|^p\\leq c\\left(| X\_t|^p + |X\_\\infty|^p \\right)\\leq c\\left(\\sup |X\_t|^p+|X\_\\infty|^p\\right). \\end{equation\*} \\\]
>
> On the one hand, by Fatou's lemma we have \\(E\[|X\_\\infty|^p\]\\leq\\liminf E \[|X\_t|^p\]\<\\infty\\). On the other hand, by means of the previous corollary, it holds
>
> \\\[ \\begin{equation\*} E\[\\sup\_{s\\leq t}|X\_s|^p\]\\leq (p/(p-1))^p E\[|X\_t|^p\] \\end{equation\*} \\\]
>
> showing that
>
> \\\[ \\begin{equation\*} E\[\\sup|X\_t|^p\]=\\sup\_tE\[\\sup\_{s\\leq t}|X\_s|^p\]\\leq (p/(p-1))^p\\sup E\[|X\_t|^p\]\<\\infty. \\end{equation\*} \\\]
>
> Thus, the dominated convergence theorem yields \\(X\_t\\to X\_\\infty\\) in \\(L^p\\).

## Applications of \\(L^p\\) Convergence, Law of Large Numbers

We apply the \\(L^p\\)-convergence of martingales to show the law of large numbers that states that the sample average of independently distributed random variables with finite mean converges almost surely to its mean.

> [!NOTE]
>
> **Theorem**
>
> Let \\(X\\) be a square integrable martingale for which holds
>
> \\\[ \\begin{equation\*} \\sum E\\left\[ \\left( X\_t-X\_{t-1} \\right)^2 \\right\]\<\\infty. \\end{equation\*} \\\]
>
> Then, the sequence \\((X\_t)\\) converges almost surely and in \\(L^2\\).

> [!NOTE]
>
> **Proof**
>
> Beforehand, let us show the following lemma.
>
> > **Lemma**
> >
> > Let \\(X\\) be a martingale such that \\(X\_t\\) is square integrable for every \\(t\\). It follows that
> >
> > \\\[ \\begin{align\*} E\\left\[ \\left( X\_u-X\_t \\right)X\_s \\right\] &amp; =0,\\\\ E\\left\[ \\left( X\_t-X\_s \\right)^2|\\mathcal{F}\_s \\right\]&amp;=E\\left\[ X\_t^2|\\mathcal{F}\_s \\right\]-X\_s^2, \\end{align\*} \\\]
> >
> > for every \\(s\\leq t\\leq u\\).
>
> > **Proof**
> >
> > Since \\(s\\leq t\\leq u\\) and \\(X\\) is a square integrable martingale, it follows from the properties of the conditional expectation
> >
> > \\\[ \\begin{equation\*} E\\left\[ \\left( X\_u-X\_t \\right)X\_s \\right\]=E\\left\[ E\\left\[\\left( X\_u-X\_t \\right)X\_s |\\mathcal{F}\_t\\right\]\\right\]=E\\left\[ E\\left\[\\left( X\_u-X\_t \\right) |\\mathcal{F}\_t\\right\]X\_s\\right\]=0 \\end{equation\*} \\\]
> >
> > showing the first equality. The same reasoning yields
> >
> > \\\[ \\begin{align\*} E\\left\[ \\left( X\_t-X\_s \\right)^2 |\\mathcal{F}\_s\\right\] &amp; = E\\left\[ X\_t^2 |\\mathcal{F}\_s\\right\]-E\\left\[ X\_tX\_s|\\mathcal{F}\_s \\right\]-E\\left\[ (X\_t-X\_s)X\_s|\\mathcal{F}\_s \\right\]\\\\ &amp; = E\\left\[ X\_t^2 |\\mathcal{F}\_s\\right\]- X\_sE\\left\[ X\_t|\\mathcal{F}\_s \\right\]-X\_sE\\left\[ X\_t-X\_s|\\mathcal{F}\_s \\right\]\\\\ &amp; = E\\left\[ X\_t^2 |\\mathcal{F}\_s\\right\]- X\_s^2, \\end{align\*} \\\]
> >
> > showing the second equality.
>
> For every \\(t\\), by means of this lemma, it follows that
>
> \\\[ \\begin{align\*} E\\left\[ X\_t^2 \\right\] &amp; = E\\left\[X\_0^2\\right\]+\\sum\_{s=1}^tE\\left\[X\_{s}^2-X\_{s-1}^2\\right\]\\\\ &amp; = E\\left\[X\_0^2\\right\]+\\sum\_{s=1}^tE\\left\[E\\left\[X\_{s}^2-X\_{s-1}^2|\\mathcal{F}\_{s-1}\\right\]\\right\]\\\\ &amp; = E\\left\[X\_0^2\\right\]+\\sum\_{s=1}^tE\\left\[E\\left\[\\left(X\_{s}-X\_{s-1}\\right)^2|\\mathcal{F}\_{s-1}\\right\]\\right\]\\\\ &amp; = E\\left\[X\_0^2\\right\]+\\sum\_{s=1}^tE\\left\[\\left(X\_{s}-X\_{s-1}\\right)^2\\right\]\\\\ &amp; \\leq E\\left\[ X\_0^2 \\right\]+\\sum E\\left\[ \\left( X\_s-X\_{s-1} \\right)^2 \\right\]. \\end{align\*} \\\]
>
> It follows that \\(\\sup\_{t}E\\left\[ X\_t^2 \\right\]\<\\infty\\) and therefore, by means of martingale convergence theorem, it follows that \\(X\_t\\to X\_\\infty\\) almost surely and in \\(L^2\\).

> [!NOTE]
>
> **Theorem**
>
> Let \\(X\\) be a martingale and \\(a=(a\_t)\\) be an increasing sequence such that \\(a\_t\\to \\infty\\). If
>
> \\\[ \\begin{equation\*} \\sum E\[(X\_t-X\_{t-1})^2/a\_t^2\]\<\\infty, \\end{equation\*} \\\]
>
> then it follows that
>
> \\\[ \\begin{equation\*} \\frac{X\_t}{a\_t}\\longrightarrow 0 \\quad \\text{almost surely} \\end{equation\*} \\\]
>
> In particular, if \\(\\sup E\[(X\_t-X\_{t-1})^2\]\<\\infty\\), then it holds
>
> \\\[ \\begin{equation\*} \\frac{X\_t}{t}\\longrightarrow 0 \\quad \\text{almost surely} \\end{equation\*} \\\]

> [!NOTE]
>
> **Proof**
>
> Define the process \\(Y\\) by \\(Y\_0=0\\) and \\(Y\_t=\\sum\_{s=1}^t (X\_s-X\_{s-1})/a\_s\\) for \\(t\\geq 1\\). It follows that \\(Y\\) is a martingale. Indeed, adaptiveness and integrability are immediate since \\(X\\) is a martingale. As for the martingale property, it holds
>
> \\\[ \\begin{equation\*} E\\left\[ Y\_{t}-Y\_{t-1} |\\mathcal{F}\_t\\right\]=\\frac{1}{a\_t}E\\left\[ X\_t-X\_{t-1}|\\mathcal{F}\_t \\right\]=0. \\end{equation\*} \\\]
>
> Furthermore, it holds
>
> \\\[ \\begin{equation\*} \\sum E\\left\[ \\left( Y\_t-Y\_{t-1} \\right)^2 \\right\]=\\sum \\frac{1}{a\_t^2}E\\left\[ \\left( X\_t-X\_{t-1} \\right)^2 \\right\]\<\\infty \\end{equation\*} \\\]
>
> which by means of the previous Theorem implies that
>
> \\\[ \\begin{equation\*} Y\_t=\\sum\_{s=1}^t\\frac{X\_s-X\_{s-1}}{a\_s}\\longrightarrow Y\_T=\\sum \\frac{X\_t-X\_{t-1}}{a\_t} \\end{equation\*} \\\]
>
> almost surely and in \\(L^2\\). The Kronecker's lemma states that if \\(\\sum b\_t/a\_t\<\\infty\\) for two sequences \\((a\_t)\\) and \\((b\_t)\\) whereby \\((a\_t)\\) is an increasing sequence of strictly positive numbers, it follows that \\((\\sum b\_t)/a\_t=0\\). Hence, applying Kronecker's lemma, it follows that
>
> \\\[ \\begin{equation\*} \\frac{X\_t}{a\_t}=\\frac{1}{a\_t}\\sum\_{s=1}^t X\_s-X\_{s-1}\\to 0 \\end{equation\*} \\\]
>
> almost surely. In particular, if \\(\\sup E\[(X\_t-X\_{t-1})^2\]\<\\infty\\) it follows that
>
> \\\[ \\sum E\[(X\_t-X\_{t-1})^2/t^2\]\\leq \\sup E\[(X\_t-X\_{t-1})^2\]\\sum \\frac{1}{t^2}\<\\infty \\\]
>
> and the second assertion of the theorem follows.

> [!NOTE]
>
> **Corollary**
>
> Let \\((X\_t)\\) be a sequence of integrable independent random variables such that \\(E\[X\_t\]=0\\) for every \\(t\\) and such that \\(\\sum E\[X\_t^2\]/a\_t^2\<\\infty\\) for some increasing sequence \\((a\_t)\\) of strictly positive real numbers such that \\(a\_t\\to \\infty\\). Then it holds
>
> \\\[ \\begin{equation\*} \\frac{1}{a\_t}\\sum\_{s=1}^t X\_s\\longrightarrow 0 \\quad \\text{almost surely} \\end{equation\*} \\\]

> [!NOTE]
>
> **Proof**
>
> Define \\(\\mathcal{F}\_0=\\{\\emptyset,\\Omega\\}\\) and \\(\\mathcal{F}\_t=\\sigma(X\_s\\colon s\\leq t)\\) and the process \\(S\\) by \\(S\_0=0\\) and \\(S\_t=\\sum\_{s=1}^t X\_s\\). It follows that \\(S\\) is a martingale. Indeed, it is integrable by assumption. It is furthermore adapted since \\(\\mathbb{F}\\) is the filtration generated by \\(X\\). Finally due to the independence, it follows that
>
> \\\[ \\begin{equation\*} E\\left\[ S\_t-S\_{t-1} |\\mathcal{F}\_{t-1}\\right\]=E\\left\[ X\_t|\\mathcal{F}\_{t-1} \\right\]=E\\left\[ X\_t \\right\]=0. \\end{equation\*} \\\]
>
> Furthermore, since
>
> \\\[ \\begin{equation\*} \\sum \\frac{1}{a\_t^2}E\\left\[ \\left( S\_t-S\_{t-1} \\right)^2 \\right\]=\\sum \\frac{1}{a\_t^2}E\\left\[ X\_t^2 \\right\]\<\\infty, \\end{equation\*} \\\]
>
> Applying the previous theorem yields
>
> \\\[ \\begin{equation\*} \\frac{S\_t}{a\_t}=\\frac{1}{a\_t}\\sum\_{s=1}^t X\_s\\longrightarrow 0 \\quad \\text{almost surely} \\end{equation\*} \\\]

> [!NOTE]
>
> **Theorem: Strong Law of Large Numbers**
>
> Let \\((X\_t)\\) be a sequence of integrable, independent, and identically distributed random variables. Then it holds
>
> \\\[ \\begin{equation\*} \\frac{1}{t}\\sum\_{s=1}^t X\_s\\xrightarrow\[t \\to \\infty\]{\\text{almost surely}}E\\left\[ X\_1 \\right\]. \\end{equation\*} \\\]

> [!NOTE]
>
> Note that we do not make here the traditional assumption that the sequence shall be square integrable.

> [!NOTE]
>
> **Proof**
>
> **Step 1:** Define first the countable family \\((A\_t)\\) as \\(A\_t=\\{ |X\_t|\>t\\}\\) of events in \\(\\mathcal{F}\\). Using the fact that \\(X\_t\\sim X\_1\\) for every \\(t\\) and Fubini's Theorem, it holds
>
> \\\[ \\begin{equation\*} \\sum P\\left\[ A\_t \\right\]=\\sum P\\left\[ |X\_t|\>t \\right\]=\\sum P\\left\[ |X\_1|\>t \\right\]\\leq \\int\_{0}^\\infty P\\left\[ |X\_1|\>\\lambda \\right\]d\\lambda=E\\left\[ |X\_1| \\right\]\<\\infty. \\end{equation\*} \\\]
>
> By Borel-Cantelli, it follows that \\(P\[\\limsup A\_t\]=0\\) and therefore, for almost all \\(\\omega\\) in \\(\\Omega\\), there exists \\(t\_0(\\omega)\\) such that \\(\\omega\\) does not belong to \\(A\_t\\) for every \\(t\\geq t\_0\\). Hence, defining \\(Y\_t=X\_t1\_{A\_t^c}\\), it follows that
>
> \\\[ \\begin{equation\*} \\liminf \\frac{1}{t}\\sum\_{s\\leq t} X\_s=\\liminf \\frac{1}{t}\\sum\_{s\\leq t} Y\_s\\quad \\text{as well as}\\quad \\limsup \\frac{1}{t} \\sum\_{s\\leq t}X\_s=\\limsup \\frac{1}{t}\\sum\_{s\\leq t} Y\_s, \\end{equation\*} \\\]
>
> and so we just have to show that
>
> \\\[ \\begin{equation\*} \\frac{1}{t}\\sum\_{s\\leq t} Y\_s\\xrightarrow\[t \\to \\infty\]{\\text{almost surely}} E\\left\[ X\_1 \\right\]. \\end{equation\*} \\\]
>
> **Step 2:** Let \\(Z\_t=Y\_t-E\[Y\_t\]\\) for every \\(t\\) which is an independent sequence of random variables. Furthermore, note that
>
> \\\[ \\begin{equation\*} \\sum \\frac{E\[Z\_t^2\]}{t^2}=\\sum \\frac{E\\left\[ (Y\_t-E\[Y\_t\])^2 \\right\]}{t^2}=\\sum \\frac{E\\left\[ Y\_t^2 \\right\]-E\\left\[ Y\_t \\right\]^2}{t^2}\\leq \\sum \\frac{E\[Y\_t^2\]}{t^2}. \\end{equation\*} \\\]
>
> By Fubini's theorem, and the fact that \\(P\[|Y\_t|\>s\]=P\[|Y\_t|\>t\]=0\\) for every \\(s\\geq t\\) as well as \\(P\[Y\_t\>\\lambda \]\\leq P\[X\_t\>\\lambda\]=P\[X\_1\>\\lambda\]\\) for every \\(t\\), it holds
>
> \\\[ \\begin{equation\*} E\\left\[ Y\_t^2 \\right\]=E\\left\[ \\int\_{0}^\\infty 1\_{\\{|Y\_t|\>\\lambda\\}}2\\lambda d\\lambda \\right\]=\\int\_{0}^\\infty P\\left\[ |Y\_t|\>\\lambda \\right\]2\\lambda d\\lambda \\leq\\int\_{0}^t P\\left\[ |X\_1|\>\\lambda \\right\]2\\lambda d\\lambda. \\end{equation\*} \\\]
>
> The monotone convergence of Lebesgue yields
>
> \\\[ \\begin{equation\*} \\sum \\frac{1}{t^2}\\int\_{0}^t P\\left\[ |X\_1|\>\\lambda \\right\]2\\lambda d\\lambda=\\int\_{0}^\\infty \\sum \\frac{1\_{\\{t\\geq \\lambda\\}}}{t^2}P\\left\[ |X\_1|\>\\lambda \\right\]2\\lambda d\\lambda. \\end{equation\*} \\\]
>
> - For \\(\\lambda \<1\\), it holds
>
>   \\\[ \\begin{equation\*} 2 \\lambda \\sum \\frac{1}{t^2}=2\\lambda\\frac{\\pi^2}{6}\\leq 4\\lambda\\leq 4. \\end{equation\*} \\\]
> - For \\(\\lambda\\geq 1\\), it holds
>
>   \\\[ \\begin{equation\*} 2\\lambda \\sum\_{t\\geq \\lambda}\\frac{1}{t^2}\\leq \\frac{2}{\\lambda}+2\\lambda\\int\_{\\lambda}^\\infty \\frac{1}{x^2}dx\\leq 2+2\\lambda \\frac{1}{\\lambda}=4. \\end{equation\*} \\\]
>
> Hence,
>
> \\\[ \\begin{equation\*} \\sum \\frac{E\\left\[ Z\_t^2 \\right\]}{t^2}\\leq 4 \\int\_0^\\infty P\\left\[ |X\_1|\>\\lambda \\right\]d\\lambda=4E\\left\[ |X\_1| \\right\]\<\\infty. \\end{equation\*} \\\]
>
> According to the previous corollary, it follows that \\((\\sum\_{s\\leq t} Z\_s)/t\\to 0\\) almost surely.
>
> **Step 3:** We finally show that \\((\\sum\_{s\\leq t} Y\_s)/t\\to E\[X\_1\]\\) almost surely. It holds
>
> \\\[ \\begin{align\*} \\left| \\frac{1}{t}\\sum\_{s\\leq t}Y\_s-E\[X\_1\]\\right| &amp; \\leq \\left| \\frac{1}{t} \\sum\_{s\\leq t}Z\_s\\right|+\\frac{1}{t}\\sum\_{s\\leq t}\\left|E\\left\[Y\_s \\right\]-E\\left\[ X\_s \\right\]\\right|\\\\ &amp; = \\left| \\frac{1}{t} \\sum\_{s\\leq t}Z\_s\\right|+\\frac{1}{t}\\sum\_{s\\leq t}\\left|E\\left\[X\_s1\_{\\{|X\_s|\\leq s\\}} \\right\]-E\\left\[ X\_s \\right\]\\right|\\\\ &amp; \\leq \\left| \\frac{1}{t} \\sum\_{s\\leq t}Z\_s\\right|+\\frac{1}{t}\\sum\_{s\\leq t}E\\left\[|X\_s|1\_{\\{|X\_s|\> s\\}} \\right\]\\\\ &amp; = \\left| \\frac{1}{t} \\sum\_{s\\leq t}Z\_s\\right|+\\frac{1}{t}\\sum\_{s\\leq t}E\\left\[ |X\_1|1\_{|X\_1|\>s} \\right\]\\\\ &amp; =\\left| \\frac{1}{t} \\sum\_{s\\leq t}Z\_s\\right|+E\\left\[|X\_1|\\frac{1}{t}\\sum\_{s\\leq t} 1\_{\\{|X\_1|\>s\\}}\\right\]\\\\ &amp; =I\_t+E\[J\_t\]. \\end{align\*} \\\]
>
> We already shown in the previous step that \\(I\_t\\to 0\\) almost surely. On the other hand, it holds \\(J\_t\\leq |X\_1|\\) with \\(E\[|X\_1|\]\<\\infty\\) and since \\((\\sum\_{s\\leq t} 1\_{\\{|X\_1|\>s\\}})/t\\to 0\\) almost surely, it follows that \\(J\_t\\to 0\\) almost surely. Hence, by Lebesgue's dominated convergence theorem, it follows that \\(E\[J\_t\]\\to 0\\) which ends the proof.

## \\(L^1\\) Convergence

The \\(L^1\\)-case is more delicate. There we have to make use of uniform integrability in order to show similar results.

> [!NOTE]
>
> **Theorem: \\(L^1\\)-Martingale Convergence**
>
> Let \\(X\\) be a sub-martingale bounded in \\(L^1\\), that is, \\(\\sup E\[|X\_t|\]\<\\infty\\) or equivalently \\(\\lim E\[X\_t\]\>-\\infty\\). In particular, by almost sure martingale convergence Theorem, there exists \\(X\_\\infty \\in L^1\\) such that \\(X\_t\\to X\_\\infty\\) almost surely. Then the following two assertions are equivalent:
>
> 1. \\(X\\) is uniformly integrable;
> 2. \\(X\_t\\to X\_{\\infty}\\) in \\(L^1\\) and \\(E\[ X\_{\\infty}|\\mathcal{F}\_t \]\\geq X\_t\\) for every \\(t\\).

> [!NOTE]
>
> **Proof**
>
> If \\(X\_t\\to X\_\\infty\\) almost surely, uniform integrability of \\(X\\) and \\(L^1\\) convergence are equivalent by means of Uniform Integrability Theorem. In particular, by the sub-martingale property, for every event \\(A\\) in \\(\\mathcal{F}\_t\\), it holds that
>
> \\\[ \\begin{equation\*} E\[X\_{\\infty}1\_A\]=\\lim\_{s\\geq t}E\\left\[ X\_{s}1\_A \\right\]\\geq E\[X\_t1\_A\], \\end{equation\*} \\\]
>
> showing that (i) is equivalent to (ii).

The following corollaries are consequences of this theorem as well as uniform integrability properties.

> [!NOTE]
>
> **Corollary**
>
> Let \\(X\\) be a martingale. Then the following assertions are equivalent:
>
> - \\(X\_t=E\[\\xi|\\mathcal{F}\_t\]\\) for some \\(\\xi\\in L^1\\);
> - \\(X\\) is uniformly integrable;
> - \\(X\_{t}\\to X\_{\\infty}\\) in \\(L^1\\).
>
> ---
>
> Let \\(\\xi\\) be an integrable random variable and \\(\\mathcal{F}\_\\infty=\\sigma(\\cup \\mathcal{F}\_t)\\). Then it follows that
>
> \\\[ \\begin{equation\*} X\_t:=E\[\\xi|\\mathcal{F}\_t\]\\to X\_{\\infty}:=E\[\\xi|\\mathcal{F}\_{\\infty}\] \\end{equation\*} \\\]
>
> almost surely and in \\(L^1\\).

> [!NOTE]
>
> **Proof**
>
> The proof is left as an exercise for the first part of the corollary.
>
> We show the second part. Clearly, \\(X\\) is a martingale which is uniformly integrable. Hence, from the previous theorem, it converges to \\(X\_\\infty\\) almost surely and in \\(L^1\\). We are left to show that \\(X\_{\\infty}=E\\left\[ \\xi|\\mathcal{F}\_{\\infty} \\right\]\\). Let
>
> \\\[ \\mathcal{C}=\\{A \\in \\mathcal{F}\_{\\infty}\\colon E\[X\_{\\infty}1\_A\]=E\[\\xi1\_A\]\\}. \\\]
>
> For every \\(A \\in\\mathcal{F}\_t\\), it holds
>
> \\\[ \\begin{equation\*} E\[X\_{\\infty}1\_A\]=\\lim E\[X\_t1\_A\]=\\lim E\\left\[ E\[\\xi|\\mathcal{F}\_t\]1\_A \\right\]=E\[\\xi1\_A\], \\end{equation\*} \\\]
>
> showing that \\(\\cup \\mathcal{F}\_t\\) is in \\(\\mathcal{C}\\). Since \\(\\mathcal{C}\\) is clearly a \\(\\lambda\\)-system, by Dynkin's Lemma, it follows that \\(\\mathcal{C}\\) contains \\(\\mathcal{F}\_{\\infty}\\), ending the proof.
