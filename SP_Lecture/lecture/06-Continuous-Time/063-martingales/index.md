# Martingales

The definition of (Super-/Sub-)Martingales does not change in the continuous time. The martingale properties and theorems extend to the continuous time. However, some restrictions have to be made in terms of path regularity. Indeed, as mentioned earlier, the infinite amount of null sets that may add up has to be countably controlled.

> [!NOTE]
>
> **Definition: Simple Processes**
>
> We denote by \\(\\mathcal{S}\\) the set of **simple predictable** processes \\(H\\) of the form
>
> \\\[ H = H\_0 1\_{\\{0\\}} + \\sum\_{k=1}^n H\_k 1\_{(\\tau\_{k-1}, \\tau\_k\]} \\\]
>
> for a finite sequence \\(0 = \\tau\_0 \\leq \\tau\_1 \\leq \\ldots \\leq \\tau\_n\\) of stopping times where \\(\\tau\_n\<\\infty\\), and \\(H\_k\\) is bounded and \\(\\mathcal{F}\_{\\tau\_{k-1}}\\) measurable for \\(k = 0, \\dots, n\\).

For a progressive process \\(X\\) and \\(H \\in \\mathcal{S}\\), we denote by \\(\\int H d X\\) the process

\\\[ \\int H dX := H\_0 X\_0 + \\sum\_{k=1}^n H\_k \\left( X^{\\tau\_k} - X^{\\tau\_{k-1}} \\right) \\\]

which is the simple definition of a stochastic integral of \\(H\\) with respect to \\(X\\).

> [!NOTE]
>
> **Theorem**
>
> Let \\(X\\) be a càd stochastic process and \\(H\\) be a simple process. The following assertions hold true.
>
> 1. If \\(X\\) is a martingale and then \\(\\int H d X\\) is a martingale. If \\(X\\) is a super/sub-martingale, and \\(H\\) is positive then \\(\\int Hd X\\) is a super/sub-martingale.
>
>    In particular, if \\(\\tau\\) is a bounded stopping time then \\(X^\\tau\\) is a martingale or super/sub-martingale, respectively.
> 2. Let \\(X\\) be a submartingale. For any \\(\\lambda \> 0\\) it holds
>
>    \\\[ \\begin{align\*} \\lambda P\\left\[ \\overline{X}\_t \\geq \\lambda \\right\] &amp; \\leq E\\left\[ 1\_{\\{\\overline{X}\_t \< \\lambda\\}} X\_t \\right\] \\leq E\\left\[ X\_t^+ \\right\]\\\\ \\lambda P\\left\[ \\underline{X}\_t \\leq -\\lambda \\right\] &amp; \\leq E\\left\[ 1\_{\\{\\underline{X}\_t \> -\\lambda\\}} X\_t \\right\] - E\\left\[ X\_0 \\right\] \\leq E\\left\[ X\_t^+ \\right\] - E\\left\[ X\_0 \\right\] \\end{align\*} \\\]
> 3. Let \\(X\\) be a positive submartingale and \\(p \> 1\\), it holds
>
>    \\\[ \\left\\Vert \\sup\_{s \\leq t} X\_s \\right\\Vert\_p \\leq \\frac{p}{p-1} \\left\\Vert X\_t \\right\\Vert\_p \\\]
> 4. Let \\(X\\) be a submartingale. Then for every two reals \\(x \< y\\), the number of up-crossings of \\((x,y)\\) by \\(X\\) up to time \\(t\\), \\(U\_{\[0,t\]}(x,y,X)\\) is a random variable and it holds
>
>    \\\[ (y - x) E\\left\[ U\_{\[0,t\]}(x,y,X) \\right\] \\leq E\\left\[ \\left( X\_t - x \\right)^+ \\right\] - E\\left\[ \\left( X\_0 - x \\right)^+ \\right\] \\\]

In particular, if \\(X\\) is a càd martingale, and \\(p \> 1\\), then \\(|X|^p\\) is a positive càd submartingale and therefore

\\\[ \\left\\Vert X^\\ast\_t \\right\\Vert\_p \\leq \\left( \\frac{p}{p - 1} \\right) \\left\\Vert X\_t \\right\\Vert\_p \\\]

for every \\(p \> 1\\).

> [!NOTE]
>
> **Proof**
>
> The inequalities hold true if the process \\(X\\) is sampled on any finite discretization of \\(\[0,t\]\\) containing \\(0\\) and \\(t\\). Hence, passing to the limit, these inequalities hold for \\((\[0,t\] \\cap \\mathbb{Q}) \\cup \\{0,t\\}\\) and since the paths of \\(X\\) are càd, the inequalities follow.
>
> The single thing to check is whether \\(U\_{\[0,t\]}(x,y,X)\\) is a well-defined random variable. However, for any finite \\(F \\subseteq \[0,t\]\\), since \\(X\\) is right-continuous, the \\(\\tau^k\\) and \\(\\sigma^k\\) in the construction of \\(U\_F(x,y,X)\\) are stopping times according to the hitting times propositions for continuous processes. Therefore \\(U\_F(x,y,X)\\) is a random variable. It follows that \\(U\_{(\[0,t\] \\cap \\mathbb{Q}) \\cup \\{0,t\\}}(x,y,X)\\) is a random variable. Since \\(X\\) is càd, this set takes into account all the up-crossings on \\(\[0,t\]\\).

> [!NOTE]
>
> **Theorem**
>
> Any càd sub-martingale is càdlàg, and every sample path is almost surely bounded on any compact interval.
>
> Furthermore, \\(X\\) is a submartingale with respect to \\(\\mathbb{F}^+\\) as well as with respect to the augmentation of \\(\\mathbb{F}\\).

> [!NOTE]
>
> **Proof**
>
> Let \\(X\\) be a càd sub-martingale. The boundedness of the sample paths on any compact interval almost surely follows from the previous inequalities. As for the càdlàg property, define
>
> \\\[ A = \\bigcup\_{n \\in \\mathbb{N}} \\bigcup\_{p,q \\in \\mathbb{Q}, p \< q} \\left\\{U\_{\[0,n\]}(p,q,X) = \\infty \\right\\} \\\]
>
> By means of the up-crossing inequality, it follows that this countable union is of measure \\(0\\). However, \\(A\\) contains the set
>
> \\\[ \\left\\{ \\liminf\_{s \\nearrow t} X\_s \< \\limsup\_{s \\nearrow t} X\_s, \\, \\text{for some } \\right\\} \\\]
>
> Hence \\(X\\) is càdlàg. The fact that \\(X\\) is a supermartingale with respect to \\(\\mathbb{F}^+\\) is immediate. As for the augmentation, observe that null sets do not modify the supermartingale inequalities.

As noticed, the up-crossing inequality shows that sub-martingales have some nice regularity of paths. However, we assumed from the beginning that these sub-martingales were right-continuous, central to derive Doob's maximal inequalities. Let us show that up to modification, any sub-martingale has nice properties, however in the right-continuous filtration or in a filtration satisfying the usual conditions.

> [!NOTE]
>
> **Theorem**
>
> Let \\(X\\) be a sub-martingale, then the following holds true.
>
> 1. Almost surely, the limits
>
>    \\\[ X\_{t+} = \\lim\_{q \\searrow t} X\_q \\quad \\text{and} \\quad X\_{t-} = \\lim\_{q \\nearrow t} X\_q \\\]
>
>    exist for every \\(t\\) and thereby define two processes \\(X\_{+}\\) and \\(X\_{-}\\), respectively.
> 2. The process \\(X\_{+}\\) is a \\(\\mathbb{F}^+\\) sub-martingale and is a martingale if \\(X\\) is. Analogously, the process \\(X\_{-}\\) is a \\(\\mathbb{F}^-\\) submartingale and is a martingale if \\(X\\) is. Furthermore
>
>    \\\[ \\begin{align\*} X\_t &amp; \\leq E\\left\[ X\_{t+} \\,\\big|\\, \\mathcal{F}\_{t} \\right\]\\\\ X\_{t-} &amp; \\leq E\\left\[ X\_t \\,\\big|\\, \\mathcal{F}\_{t-} \\right\] \\end{align\*} \\\]
>
>    with equality in the first if \\(t \\mapsto E\[X\_t\]\\) is right-continuous, and equality in the second if \\(t \\mapsto E\[X\_t\]\\) is left-continuous. In particular, equality holds in both if \\(X\\) is a martingale.

> [!NOTE]
>
> **Proof**
>
> 1. Unlike in the previous proof we can only estimate the up-crossing of \\(X\\) over a countable bounded interval. Define
>
>    \\\[ A = \\bigcup\_{n \\in \\mathbb{N}} \\bigcup\_{p \< q,\\, p,q \\in \\mathbb{Q}} \\left\\{ \\omega \\in \\Omega : U\_{\[0,n\] \\cap \\mathbb{Q}}(p,q,X(\\omega)) = \\infty \\right\\} \\\]
>
>    This set is of measure \\(0\\). Hence, with the same argumentation as in the previous proof, it follows that
>
>    \\\[ \\begin{align\*} P\\left\[ \\liminf\_{q \\nearrow t, q \\in \\mathbb{Q}} X\_q \< \\limsup\_{q \\nearrow t, q \\in \\mathbb{Q}} X\_q \\text{ for some } t \\right\] &amp; = 0\\\\ P\\left\[ \\liminf\_{q \\searrow t, q \\in \\mathbb{Q}} X\_q \< \\limsup\_{q \\searrow t, q \\in \\mathbb{Q}} X\_q \\text{ for some } t \\right\] &amp; = 0 \\end{align\*} \\\]
>
>    We can then define the processes \\(X\_{-}\\) and \\(X\_{+}\\) by
>
>    \\\[ X\_{t+} = \\lim\_{q \\searrow t} X\_q, \\quad \\text{ and } \\quad X\_{t-} = \\lim\_{q \\nearrow t} X\_q \\\]
>
>    with the conventions that \\(X\_{0-} = X\_0\\).
> 2. Clearly \\(X\_{+}\\) and \\(X\_{-}\\) are \\(\\mathbb{F}^+\\)- and \\(\\mathbb{F}^-\\)-adapted processes, respectively. Let us show that they are integrable and satisfy the sub-martingale property. Let \\((q\_n) \\subseteq \\mathbb{Q}\\) be a sequence decreasing to \\(t\\). From the previous step, \\(X\_{q\_n}\\) converges \\(P\\)-almost surely to \\(X\_{t+}\\). Further, \\(E\[X\_t\] \\leq E\[X\_{q\_n}\] \\leq E\[X\_{q\_0}\]\\) for every \\(n\\), so \\((X\_{q\_n})\\) is uniformly bounded in \\(L^1\\), and \\(E\[X\_{q\_n}\]\\) is a decreasing sequence converging to \\(\\lim E\[X\_{q\_n}\] \> E\[X\_t\] \> -\\infty\\). Hence, for \\(\\lambda \> 0\\) and \\(\\varepsilon \> 0\\), let \\(n\_0\\) be such that \\(E\[X\_{q\_n}\] \\geq E\[X\_{q\_{n\_0}}\] - \\varepsilon\\) for every \\(n \\geq n\_0\\). As \\(X\\) is a submartingale, it follows that
>
>    \\\[ \\begin{align} E\\left\[ |X\_{q\_n}| 1\_{\\{ |X\_{q\_n}| \> \\lambda \\}} \\right\] &amp;= E\\left\[ X\_{q\_n} 1\_{\\{ X\_{q\_n} \> \\lambda \\}} \\right\] - E\\left\[ X\_{q\_n} 1\_{\\{ X\_{q\_n} \< -\\lambda \\}} \\right\] \\\\ &amp;= E\\left\[ X\_{q\_n} 1\_{\\{ X\_{q\_n} \> \\lambda \\}} \\right\] - E\[X\_{q\_n}\] + E\\left\[ X\_{q\_n} 1\_{\\{ X\_{q\_n} \\geq -\\lambda \\}} \\right\] \\\\ &amp;\\leq E\\left\[ X\_{q\_{n\_0}} 1\_{\\{ X\_{q\_n} \> \\lambda \\}} \\right\] + \\varepsilon - E\[X\_{q\_{n\_0}}\] + E\\left\[ X\_{q\_{n\_0}} 1\_{\\{ X\_{q\_n} \\geq -\\lambda \\}} \\right\] \\\\ &amp;= E\\left\[ X\_{q\_{n\_0}} 1\_{\\{ X\_{q\_n} \> \\lambda \\}} \\right\] - E\\left\[ X\_{q\_{n\_0}} 1\_{\\{ X\_{q\_n} \< -\\lambda \\}} \\right\] + \\varepsilon \\\\ &amp;\\leq E\\left\[ |X\_{q\_{n\_0}}| 1\_{\\{ |X\_{q\_n}| \> \\lambda \\}} \\right\] + \\varepsilon \\end{align} \\\]
>
>    By Markov's inequality, \\(P\[|X\_{q\_n}| \> \\lambda\] \\leq \\sup\_n E\[|X\_{q\_n}|\]/\\lambda = C/\\lambda\\) for some \\(C \< \\infty\\), showing that \\((X\_{q\_n})\\) is uniformly integrable. Together with \\(P\\)-almost sure convergence, it follows that \\(X\_{q\_n} \\to X\_{t+}\\) in \\(L^1\\). Thus \\(X\_{t+}\\) is integrable and it holds
>
>    \\\[ X\_t \\leq \\lim E\\left\[ X\_{q\_n} \\,\\big|\\, \\mathcal{F}\_t \\right\] = E\\left\[ X\_{t+} \\,\\big|\\, \\mathcal{F}\_t \\right\] \\\]
>
>    Further, for \\(s \< t\\) and \\(q\_n \\searrow s\\) with \\(q\_n \< t\\), it holds
>
>    \\\[ X\_{q\_n} \\leq E\\left\[ X\_t \\,\\big|\\, \\mathcal{F}\_{q\_n} \\right\] \\leq E\\left\[ E\\left\[ X\_{t+} \\,\\big|\\, \\mathcal{F}\_t \\right\] \\,\\big|\\, \\mathcal{F}\_{q\_n} \\right\] = E\\left\[ X\_{t+} \\,\\big|\\, \\mathcal{F}\_{q\_n} \\right\] \\\]
>
>    for every \\(n\\). The same arguments as above show that \\(E\\left\[ X\_{t+} \\,\\big|\\, \\mathcal{F}\_{q\_n} \\right\]\\) is uniformly integrable and converges \\(P\\)-almost surely and in \\(L^1\\), and that the limit is \\(E\\left\[ X\_{t+} \\,\\big|\\, \\mathcal{F}\_{s+} \\right\]\\). Thus \\(X\_{+}\\) is a \\(\\mathbb{F}^+\\)-submartingale.  
>    Finally, if \\(t \\mapsto E\[X\_t\]\\) is right-continuous, it follows that \\(E\[X\_{t+}\] = \\lim E\[X\_{q\_n}\] = E\[X\_t\]\\).  
>    Hence, the positive random variable \\(X\_t - E\[X\_{t+} \\,|\\, \\mathcal{F}\_t\]\\) has zero expectation and therefore is zero.
>
>    As for the case of \\(X\_{-}\\), a similar argumentation holds using the submartingale convergence theorem for the existence and integrability of \\(X\_{t-}\\) and inequality
>
>    \\\[ X\_{t-} \\leq E\[X\_t \\,|\\, \\mathcal{F}\_{t-}\] \\\]
>
>    Furthermore, by \\(X\_{s-} \\leq E\[X\_s \\,|\\, \\mathcal{F}\_{s-}\] \\leq E\[E\[X\_{t-} \\,|\\, \\mathcal{F}\_s\] \\,|\\, \\mathcal{F}\_{s-}\] = E\[X\_{t-} \\,|\\, \\mathcal{F}\_{s-}\]\\) it follows that \\(X\\) is a \\(\\mathbb{F}^-\\) submartingale.
>
>    The equality if \\(t \\mapsto E\[X\_t\]\\) is left-continuous follows by an analogous argumentation.

> [!NOTE]
>
> **Theorem**
>
> Let \\(X\\) be a supermartingale with respect to a filtration satisfying the usual assumptions. Suppose further that \\(t \\mapsto E\[X\_t\]\\) is càd. Then \\(X\\) has a càdlàg modification.

> [!NOTE]
>
> **Proof**
>
> According to the previous theorem, set \\(Y = X\_{+}\\) outside the negligible set \\(A\\) up to which \\(X\_{+}\\) and \\(X\_{-}\\) are defined, and \\(Y = 0\\) on \\(A\\). Since \\(A \\in \\mathcal{F}\_0\\), it follows that \\(Y\\) is càdlàg. Furthermore, from \\(t \\mapsto E\[X\_t\]\\) right-continuous, by the previous theorem it holds that
>
> \\\[ X\_t = E\[X\_{t+} \\,|\\, \\mathcal{F}\_t\] = E\[Y\_t \\,|\\, \\mathcal{F}\_t\] \\\]
>
> However, since \\(\\mathbb{F}\\) is right-continuous, it follows that \\(Y\_t\\) is \\(\\mathcal{F}\_t\\)-measurable and so \\(X\_t = Y\_t\\) almost surely for every \\(t\\).
