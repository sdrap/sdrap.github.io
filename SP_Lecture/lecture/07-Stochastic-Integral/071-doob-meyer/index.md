# Doob-Meyer Decomposition

We already saw in discrete time that any process can be decomposed into the sum of a martingale and a predictable process. In particular if \\(X\\) is a sub-martingale, the predictable process is increasing. The proof is relatively straightforward, and one wonders whether it still holds in continuous time. It turns out that this is way more involved. In this section, we do not assume continuity of processes.

> [!NOTE]
>
> **Definition: Natural Processes**
>
> An increasing process \\(A\\) is called **natural** if for every bounded right-continuous martingale \\(M\\) and any \\(t\\) it holds
>
> \\\[ E\\left\[\\int\_0^t M\_s \\, dA\_s\\right\] = E\\left\[ \\int\_0^t M\_{s-} \\, dA\_s \\right\] \\\]

> [!NOTE]
>
> **Remark**
>
> Note that every increasing and continuous process is automatically natural. Indeed
>
> \\\[ \\int\_0^t (M\_s - M\_{s-}) \\, dA\_s = 0 \\\]
>
> almost surely, since every path \\(s \\mapsto M\_s\\) has only countably many discontinuities and therefore is a set of \\(dA\\)-zero measure.

> [!NOTE]
>
> **Lemma**
>
> The condition for an increasing process to be natural is equivalent to
>
> \\\[ E\\left\[ M\_t A\_t \\right\] = E\\left\[ \\int\_0^t M\_{s-} \\, dA\_s \\right\] \\\]

> [!NOTE]
>
> **Proof**
>
> It suffices to show that
>
> \\\[ E\[M\_t A\_t\] = \\int\_0^t M\_s \\, dA\_s. \\\]
>
> Let \\(0 = t\_0 \< t\_1 \< \\cdots \< t\_n = t\\) and define
>
> \\\[ M^n = \\sum\_{k=1}^n M\_{t\_k} 1\_{(t\_{k-1}, t\_k\]}. \\\]
>
> By the martingale property, it follows that
>
> \\\[ \\begin{align} E\\left\[ \\int\_0^t M^n\_s \\, dA\_s \\right\] &amp; = \\sum\_{k=1}^n E\\left\[ M\_{t\_k} (A\_{t\_k} - A\_{t\_{k-1}}) \\right\] \\\\ &amp; = E\[M\_t A\_t\] - \\sum\_{k=1}^{n-1} E\\left\[ A\_{t\_k} (M\_{t\_{k+1}} - M\_{t\_k}) \\right\]\\\\ &amp; = E\[M\_t A\_t\]. \\end{align} \\\]
>
> letting the mesh of the subdivision to \\(0\\), yields \\(M^n \\to M\\) \\(P\\)-almost surely, and by dominated convergence, the claim follows.

Natural processes are the natural pendant to predictable processes in discrete time.

> [!NOTE]
>
> **Lemma**
>
> In the discrete time context, an increasing process is natural if and only if it is predictable and integrable.

> [!NOTE]
>
> **Proof**
>
> If an increasing process is predictable and integrable, then clearly it is natural. Reciprocally, define the bounded positive martingale \\(M\_s = E\[1\_B \\,|\\, \\mathcal{F}\_s\]\\) where
>
> \\\[ B = \\{ A\_t - E\[A\_t \\,|\\, \\mathcal{F}\_{t-1}\] \> \\varepsilon \\}. \\\]
>
> From \\(A\\) being natural, it holds
>
> \\\[ E\[M\_t A\_t\] = E\\left\[ \\int\_0^t M\_{s-} \\, dA\_s \\right\] = \\sum\_{1 \\leq s \\leq t} E\\left\[ M\_{s-1} (A\_s - A\_{s-1}) \\right\] \\\]
>
> for every \\(t = 1, \\ldots\\). Hence, per induction, it holds
>
> \\\[ \\begin{align} 0 &amp; = E\[(M\_t - M\_{t-1}) A\_t\] \\\\ &amp; = E\[1\_B A\_t\] - E\[E\[1\_B \\,|\\, \\mathcal{F}\_{t-1}\] A\_t\] \\\\ &amp; \\geq \\varepsilon P\[B\] + E\[1\_B E\[A\_t \\,|\\, \\mathcal{F}\_{t-1}\]\] - E\[1\_B E\[A\_t \\,|\\, \\mathcal{F}\_{t-1}\]\] \\\\ &amp; = \\varepsilon P\[B\]. \\end{align} \\\]
>
> showing that \\(P\[B\] = 0\\). The same holds for \\(B = \\{ A\_t - E\[A\_t \\,|\\, \\mathcal{F}\_{t-1}\] \< -\\varepsilon \\}\\), showing that
>
> \\\[ A\_t = E\[A\_t \\,|\\, \\mathcal{F}\_{t-1}\]. \\\]

As in the discrete time where a predictable martingale is uniformly constant, the same holds for natural martingales.

> [!NOTE]
>
> **Proposition**
>
> Let \\(M\\) be a càd martingale which can be written as the difference between two natural increasing processes. Then \\(M\\) is indistinguishable from \\(0\\).

> [!NOTE]
>
> **Proof**
>
> By the identity
>
> \\\[ E\[X\_t M\_t\] = E\\left\[ \\int\_0^t X\_{s-} \\, dM\_s \\right\] \\\]
>
> for every càdlàg bounded martingale \\(X\\), consider the approximation
>
> \\\[ X^n = \\sum\_{k=1}^n X\_{t\_{k-1}} 1\_{\[t\_{k-1}, t\_k)} + X\_t 1\_{\\{t\\}} \\\]
>
> over a subdivision \\(0 = t\_0 \< t\_1 \< \\cdots \< t\_n = t\\), which satisfies
>
> \\\[ X^n\_{-} = X\_0 1\_{\\{0\\}} + \\sum\_{k=1}^n X\_{t\_{k-1}} 1\_{(t\_{k-1}, t\_k\]}. \\\]
>
> Hence, by the martingale property of \\(M\\) it holds
>
> \\\[ E\\left\[ \\int\_0^t X^n\_{s-} \\, dM\_s \\right\] = E\\left\[ \\sum\_{k=1}^n X\_{t\_{k-1}} (M\_{t\_k} - M\_{t\_{k-1}}) \\right\] = 0. \\\]
>
> Letting the mesh of the subdivision to \\(0\\), dominated convergence yields
>
> \\\[ E\[X\_t M\_t\] = E\\left\[ \\int\_0^t X\_{s-} \\, dA\_s \\right\] = 0. \\\]
>
> Let \\(X = E\[1\_A \\,|\\, \\mathcal{F}\_\\cdot\]\\) where \\(A = \\{M\_t \> \\varepsilon\\}\\). Then \\(X\\) is a bounded martingale, and up to a modification, it is càdlàg. It follows that
>
> \\\[ 0 = E\[X\_t M\_t\] = E\[1\_A M\_t\] \\geq \\varepsilon P\[A\] \\\]
>
> so \\(P\[A\] = 0\\).  
> The same holds for \\(A = \\{M\_t \< -\\varepsilon\\}\\), showing that \\(M\_t = 0\\).  
> Since both \\(M\\) and \\(0\\) are càdlàg, this implies indistinguishability.

We can now address the Doob-Meyer decomposition.

> [!NOTE]
>
> **Definition**
>
> A càd process \\(X\\) is said to belong to class:
>
> - **(D)** if the collection \\(\\{X\_\\tau : \\tau \\text{ stopping time}, \\tau \< \\infty\\}\\) is uniformly integrable
> - **(DL)** if the collections \\(\\{X\_\\tau : \\tau \\text{ stopping time}, \\tau \< t\\}\\) are uniformly integrable for every \\(t\\)

> [!NOTE]
>
> **Doob-Meyer Decomposition**
>
> Let \\(X\\) be a càdlàg sub-martingale of class (DL). Then \\(X\\) can be decomposed uniquely — up to indistinguishability — into
>
> \\\[ X = M + A \\\]
>
> where \\(M\\) is a càdlàg martingale and \\(A\\) is a natural increasing process. If furthermore, \\(X\\) is of class (D), then \\(M\\) is uniformly integrable and \\(A\\) is integrable.

The proof relies on a deep functional analysis result describing the relatively compacts subsets of \\(L^1\\).

> [!NOTE]
>
> **Dunford-Pettis's Theorem**
>
> A subset of \\(L^1\\) is \\(\\sigma(L^1, L^\\infty)\\)-relatively compact if and only if it is uniformly integrable.

We do not address the proof of this theorem which involves functional analysis arguments.

Remember that we use the notation \\(E\[\\xi \\colon A\] := E\[X 1\_A\]\\).

> [!NOTE]
>
> **Proof of Doob-Meyer Decomposition**
>
> 1. **Uniqueness:** Set \\(X = M + A = M' + A'\\). It follows that \\(A - A' = M - M'\\) is a càdlàg martingale which is the difference of two increasing natural processes. From the previous proposition, \\(A - A' = M - M'\\) is indistinguishable from \\(0\\), hence the uniqueness.
> 2. **Decomposition along a discrete partition:** Fix \\(T\\) and consider the process on \\(\[0,T\]\\). Assume without loss of generality that \\(X\_0 = 0\\) and use the dyadic partitions \\(\\Pi^n = \\{t\_k^n = kT / 2^n : k = 0, \\ldots, 2^n\\}\\), and \\(\\Pi = \\cup \\Pi^n\\). Define
>
>    \\\[ A\_t^n = \\begin{cases} 0 &amp; \\text{if } t =0 \\\\ \\sum\_{j=0}^{k-1} E\[\\Delta\_j^n X \\,|\\, \\mathcal{F}\_{t\_j^n}\] &amp; \\text{if } t\_k^n \< t \\leq t\_{k+1}^n,\\; k=1,\\ldots,2^n-1 \\end{cases} \\\]
>
>    where we use the notation \\(\\Delta\_k^n Y = Y\_{t\_{k+1}^n} - Y\_{t\_k^n}\\). In other terms
>
>    \\\[ A^n = \\sum\_{k=0}^{2^n-2} E\[\\Delta\_k^n X \\,|\\, \\mathcal{F}\_{t\_k^n}\] 1\_{\[t\_k^n, t\_{k+1}^n)} + E\[\\Delta\_{2^{n-1}}^n X \\,|\\, \\mathcal{F}\_{t\_{2^n-1}^n}\] 1\_{\\{T\\}} \\\]
>
>    This defines a càg, piecewise constant, increasing process \\(A^n\\). Define \\(M^n = X - A^n\\), so that \\(X = M^n + A^n\\). Since \\(X\\) is a sub-martingale, \\(M^n\\) is a martingale on \\(\\Pi^n\\).
> 3. **Convergence of \\((A\_T^n)\\):** For \\(\\lambda \> 0\\), define the stopping time \\(\\tau\_\\lambda^n = \\inf\\{t \\colon A\_t^n \> \\lambda\\} \\wedge T\\). Since \\(A^n\\) is increasing, càg and piecewise constant over \\(\\Pi^n\\), it follows that \\(\\tau\_\\lambda^n\\) takes values in \\(\\Pi^n\\) and on \\(\\{\\tau^n\_{\\lambda}\<T\\}\\) it holds that \\(A\_{\\tau^n\_\\lambda}^n \\leq \\lambda\\). From optional sampling we have
>
>    \\\[ \\begin{align} E\[A\_T^n \\, \\colon \\, A\_T^n \> \\lambda\] &amp; = E\[A\_T^n - A\_{\\tau\_\\lambda^n} \\, \\colon \\, \\tau^n\_\\lambda \<T\] + E\[A\_{\\tau\_\\lambda^n}^n \\, \\colon \\, A\_T^n \>\\lambda \]\\\\ &amp; = E\[X\_T - X\_{\\tau\_\\lambda^n} \\, \\colon \\, \\tau^n\_\\lambda \<T\] - \\underbrace{E\[M^n\_T - M^n\_{\\tau^n\_\\lambda} \\, \\colon \\, \\tau^n\_\\lambda\<T\]}\_{=0 \\text{ Doob optional sampling}} + E\[A\_{\\tau\_\\lambda^n}^n \\, \\colon \\, A\_T^n \>\\lambda\]\\\\ &amp;\\leq E\[X\_T^n - X\_{\\tau\_\\lambda^n }^n \\, \\colon\\, \\tau\_\\lambda^n \< T\] + \\lambda P\[A\_T^n\>\\lambda\] \\end{align} \\\]
>
>    On the other hand, for \\(\\tau^n\_{\\lambda/2}\\) with the same doob's optional sampling arguments we get
>
>    \\\[ \\begin{align\*} 2E\[X\_T^n - X\_{\\tau\_{\\lambda/2}^n \\wedge T}^n \\, \\colon \\tau\_{\\lambda/2}^n \< T\] &amp; = 2 E\[A\_T^n -A\_{\\tau^n\_{\\lambda/2}} \\colon A\_T^n\\geq \\lambda/2\]\\\\ &amp; \\geq 2 E\[A\_T^n -A\_{\\tau^n\_{\\lambda/2}} \\colon A\_T^n\\geq \\lambda \]\\\\ &amp; \\geq \\lambda P\[A\_T^n \> \\lambda\]\\\\ \\end{align\*} \\\]
>
>    Combining both, we get:
>
>    \\\[ E\[A\_T^n \\, \\colon \\, A\_T^n \> \\lambda\] \\leq E\[X\_T - X\_{\\tau\_\\lambda^n} \\, \\colon\\, \\tau\_\\lambda^n \< T\] + 2 E\[X\_T - X\_{\\tau\_{\\lambda/2}^n} \\, \\colon\\, \\tau\_{\\lambda/2}^n \< T\] \\\]
>
>    Since \\(X\\) is of class (DL), the families \\((X\_T - X\_{\\tau^n\_\\lambda})\\) and \\((X\_T - X\_{\\tau^n\_\\lambda})\\) are uniformly integrable. We therefore just need to show that \\(\\{\\tau\_{\\lambda/2}^n\<T\\}\\supseteq \\{\\tau\_\\lambda^n\\}\\) can be made arbitrarily small in \\(\\lambda\\) uniformly in \\(n\\) to show that \\((A\_T^n)\\) is uniformly integrable. However, by Markov inequality, it holds that
>
>    \\\[ P\[\\tau\_{\\lambda/2}^n\<T\] = P\[A\_T^n \> \\lambda/2\] \\leq \\frac{2}{\\lambda}E\[A\_T^n\]= \\frac{2}{\\lambda} E\[X\_T\] \\\]
>
>    Thus, \\((A\_T^n)\\) is uniformly integrable. By Dunford-Pettis, up to a subsequence, \\(A\_T^n\\) converges weakly in \\(L^1\\) to some \\(A\_T\\) in \\(L^1\\), that is \\(E\[\\xi A\_T^n\] \\to E\[\\xi A\_T\]\\) for all \\(\\xi\\) in \\(L^\\infty\\).
> 4. **Definition of the limit decomposition:** Define \\(M = E\[X\_T - A\_T \\,|\\, \\mathcal{F}\_\\cdot\]\\), a càdlàg martingale, and \\(A = X^T - M\\). So \\(X = M + A\\) on \\(\[0,T\]\\). We just remained to show that \\(A\\) is natural. Fix \\(t \\in \\Pi\\), for \\(n\\) large enough such that \\(t\\) is in \\(\\Pi^n\\), it holds that for every \\(\\xi\\) in \\(L^\\infty\\):
>
>    \\\[ E\[\\xi(A\_t^n - A\_t)\] = E\[E\[\\xi \\,|\\, \\mathcal{F}\_t\](M\_t - M\_t^n)\] = E\[E\[\\xi \\,|\\, \\mathcal{F}\_t\](A\_T^n - A\_T)\] \\to 0 \\\]
>
>    Hence \\(A\_t^n \\to A\_t\\) in \\(\\sigma(L^1, L^\\infty)\\). For any \\(s\<t\\) with \\(s\\) and \\(t\\) in \\(\\Pi^n\\), since \\(1\_{\\{A\_t\<A\_s\\}}\\) is bounded, it holds
>
>    \\\[ 0\\geq E\[(A\_t-A\_s)1\_{\\{A\_t\<A\_s\\}}\] = \\lim E\[(A\_t^n - A\_s^n)1\_{\\{A\_t\<A\_s\\}}\] \\geq 0 \\\]
>
>    showing that \\(P\[A\_t\\geq A\_s\] = 1\\). Since \\(A\\) is càdlàg, we deduce that \\(A\\) is increasing.
>
>    We are left to show that \\(A\\) is natural. For a bounded càdlàg martingale \\(N\\)
>
>    \\\[ \\begin{align} E\[N\_T A\_T^n\] &amp;= E\\left\[ \\int\_0^T N\_{s-} \\, dA\_s^n \\right\] \\\\ &amp;= \\sum E\[N\_{t\_k^n} \\Delta\_k^n A\] + \\sum E\[N\_{t\_k^n} \\Delta\_k^n(M - M^n)\] \\\\ &amp;\\to E\\left\[ \\int\_0^T N\_{s-} \\, dA\_s \\right\] \\end{align} \\\]
>
>    so \\(E\[N\_T A\_T\] = E\\left\[ \\int\_0^T N\_{s-} \\, dA\_s \\right\]\\), hence \\(A\\) is natural on \\(\[0,T\]\\).
> 5. **Extension to \\(\[0,\\infty)\\) and case (D):** By uniqueness, decompositions on \\(\[0, T+n\]\\) for each \\(n\\) are consistent, extending the result to \\(\[0,\\infty)\\). If \\(X\\) is of class (D), then \\(A\_T^n\\) are uniformly integrable, hence \\(A\_T \\in L^1\\). Also, \\(\\sup\_t E\[|X\_t|\] \< \\infty\\) implies:
>
>    \\\[ E\[M\_t 1\_{\\{M\_t \> \\lambda\\}}\] \\leq E\[(X\_t - A\_T) 1\_{\\{X\_t - A\_T \> \\lambda\\}}\] \\\]
>
>    By Markov’s inequality and uniform integrability of \\(X\_t - A\_T\\), \\(M\\) is uniformly integrable.

In the following we will define the stochastic integral with respect to continuous martingale using the Doob-Meyer decomposition. So one may think that if \\(X\\) is continuous, then the Doob-Meyer decomposition is also continuous. This is not straightforward a-priori, and is the subject of the following theorem.

> [!NOTE]
>
> **Theorem**
>
> Let \\(X\\) be a càdlàg sub-martingale such that \\(E\[X\_{\\tau^n}\]\\to E\[X\_\\tau\]\\) for every increasing sequence of stopping times \\((\\tau^n)\\) with \\(\\sup \\tau^n=\\tau\<T\\) for some \\(T\>0\\). Then, the natural increasing process in the Doob-Meyer decomposition of \\(X\\) is continuous.

**Proof**

To be updated
