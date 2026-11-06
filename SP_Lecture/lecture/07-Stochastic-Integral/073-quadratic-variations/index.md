# Semi-Martingales - Quadratic Variations

## Localization, Semi-Martingales, Quadratic and Co-Variations

Up to now we defined the stochastic integral with respect to continuous square integrable martingale. However, we saw that we may localise the construction by stopping the processes, so that we can define a stochastic integral by localizing. We call an increasing sequence of stopping times \\((\\tau^n)\\) such that \\(\\tau^n \\nearrow \\infty\\) a **localizing sequence of stopping times**. Let \\(\\mathcal{M}^{loc}\_c\\) be the set of adapted continuous processes such that there exists a localizing sequence of stopping times \\((\\tau^n)\\) with \\(M^{\\tau^n}\\in \\mathcal{M}\_c^2\\) for every \\(n\\). Given such a process \\(M\\in \\mathcal{M}^{loc}\_c\\), with corresponding localizing sequence of stopping times, we can define \\(\\langle M^{\\tau^n}\\rangle\\) for every \\(n\\) and it holds \\(\\langle M^{\\tau^{n}}\\rangle =\\langle M^{\\tau^{n+1}}\\rangle\\) on \\(\[0,\\tau^n\]\\). Hence we can define \\(\\langle M\\rangle\\). Following the same idea, we define \\(\\mathcal{L}^{loc}(M)\\) for \\(M \\in \\mathcal{L}^{loc}\\) as the set of progressive measurable processes such that \\(\\int\_0^t Hd \\langle M\\rangle \<\\infty\\) \\(P\\)-almost surely for every \\(t\\) that allows to define locally the stochastic integral.

> [!NOTE]
>
> **Proposition**
>
> Let \\(M \\in \\mathcal{M}^{loc}\_c\\) and \\(H \\in \\mathcal{L}^{loc}(M)\\), then there exists a unique continuous local martingale \\(\\int\_{}^{} H d M\\) in \\(\\mathcal{M}\_c^{loc}\\) such that \\(\\int\_{}^{} H d M=\\int\_{}^{} Hd M^{\\tau^n}\\) on \\(\[0,\\tau^n\]\\) for every \\(n\\).

> [!NOTE]
>
> **Proof**
>
> We define \\(\\tau^n=\\inf\\{t\\colon |M\_t|\>n \\text{ or }\\int\_{0}^{t}|H|^2d\\langle M\\rangle \>n\\}\\). It follows that \\((\\tau^n)\\) is a localizing sequence of stopping time and \\(H^n=H1\_{\\cdot \\leq \\tau^n}\\) is in \\(\\mathcal{L}^2(M^{\\tau^n})\\). Therefore \\(\\int\_{}^{} H^n dM^{\\tau^n}\\) is well defined in \\(\\mathcal{M}\_2^c\\). Furthermore \\(\\int\_{}^{} H^n dM^{\\tau^n}=\\int\_{}^{} H^{n+1} dM^{\\tau^{n+1}}\\) on the stochastic interval \\(\[0, \\tau^n\]\\). Since \\(\\tau^n \\nearrow \\infty\\), the assertion follows by defining \\(\\int\_{0}^{t} H dM(\\omega)=\\int\_{0}^{t}H^n dM^{\\tau^n}(\\omega)\\) for \\(n\\) such that \\(\\tau^n(\\omega)\>t\\).

All the properties of the stochastic integral also holds by localising. We can therefore define a stochastic integral with respect to continuous local martingales as well as a Lebesgue-Stieljes integral with respect to processes of bounded variations. This motivates the following definition:

> [!NOTE]
>
> **Definition**
>
> A semi-martingale is a process \\(X\\) with decomposition \\(X=X\_0+M+A\\) where \\(A\\) is the difference of two increasing continuous processes and \\(M\\) is a continuous local martingale.
>
> For two semi-martingales[^/SP_Lecture/lecture/07-Stochastic-Integral/073-quadratic-variations/#1] \\(X=X\_0+M+A\\) and \\(Y=Y\_0+N+B\\), we define
>
> - the quadratic variations: \\(\\langle X\\rangle:=\\langle M\\rangle\\);
> - the co-variations: \\(\\langle X,Y\\rangle:=(\\langle X+Y\\rangle -\\langle X-Y\\rangle)/4=(\\langle M+N\\rangle-\\langle M-N\\rangle)/4=\\langle M,N\\rangle\\).

For every progressive process \\(H\\) such that \\(\\int\_{0}^{t}|H|d|A|\<\\infty\\) and \\(\\int\_{0}^{t} |H|^2d\\langle M\\rangle\<\\infty\\) almost surely for every \\(t\\), we can therefore define

\\\[ \\int\_{}^{} H dX:= \\int\_{}^{} H dM+\\int\_{}^{} HdA \\\]

We denote by \\(\\mathcal{L}^{loc}(X)\\) the set of these processes. The definition of quadratic and co-variations of a semi-martingale may seem a little bit arbitrary, all derived from the increasing process in the Doob-Meyer decomposition. However, we have an alternative way — in the pathwise sense — to interpret the quadratic and co-variations. In order to do so, let us first provide a new notion of convergence.

> [!NOTE]
>
> **Definition**
>
> We say that a sequence of càdlàg processes \\((X^n)\\) converges *uniformly on compacts in probability* to a càdlàg process \\(X\\) if it holds
>
> \\\[ P\\left\[ \\sup\_{s\\leq t}\\left| X^n\_s-X\_s \\right|\>\\varepsilon \\right\]\\xrightarrow\[n\\to \\infty\]{}0 \\\]
>
> for every \\(t\\). In that case we use the shorthand notation \\(X^n \\rightarrow X\\) in ucp.

The following lemma will be quite useful in the following propositions.

> [!NOTE]
>
> **Lemma**
>
> Let \\((\\tau^m)\\) be a localizing sequence of stopping times and \\((X^n)\\) a sequence of càdlàg adapted processes. It follows that \\(X^n \\to X\\) ucp if and only if \\(X^{n, \\tau^m}\\to X^{\\tau^m}\\) ucp for every \\(m\\).

> [!NOTE]
>
> **Proof**
>
> The implication is obvious. As for the reciprocal, it holds
>
> \\\[ \\left\\{ \\sup\_{s\\leq t}|X^n\_s - X\_s|\\geq \\varepsilon \\right\\}\\subseteq \\left\\{ \\tau^m \\leq t \\right\\}\\cup \\left\\{ \\sup\_{s\\leq t}\\left| X\_s^{n,\\tau^m}-X^{\\tau\_m}\_s \\right|\>\\varepsilon \\right\\} \\\]
>
> Let \\(\\delta \>0\\), there exists \\(m\\) such that \\(P\[\\tau^m\\leq t\]\<\\delta /2\\). By ucp convergence of \\((X^{n,\\tau^m})\\) to \\(X^{\\tau^m}\\), it follows that for any \\(n\\) large enough, \\(P\[\\sup\_{s\\leq t}|X\_s^{n,\\tau^m}-X\_s^{\\tau^m}|\>\\varepsilon\]\\leq \\delta /2\\). All together it follows that for all \\(n\\) large enough, we have
>
> \\\[ P\\left\[ \\sup\_{s\\leq t}\\left| X^n\_s-X\_s \\right|\>\\varepsilon \\right\]\\leq P\\left\[\\tau^m\\leq t \\right\]+P\\left\[\\sup\_{s\\leq t}|X\_s^{n,\\tau^m}-X\_s^{\\tau^m}|\>\\varepsilon\\right\]\\leq \\delta \\\]
>
> ending the proof.

This lemma shows that ucp convergence is a very local property, so that we just have to check it for every stopping time of a localizing sequence of stopping times.

Given stochastic processes \\(X\\) and \\(Y\\) and a partition \\(\\Pi=\\{0=t\_0\<t\_1\<\\cdots\<t\_n \\ldots \\nearrow \\infty\\}\\), we define

\\\[ \\begin{split} \[X,Y\]\_t^{\\Pi}&amp; =\\sum \\left( X\_{t\_{k}\\wedge t}-X\_{t\_{k-1}\\wedge t} \\right)\\left( Y\_{t\_k\\wedge t}-Y\_{t\_{k-1}\\wedge t} \\right)\\\\ &amp; =\\sum\_{k=1}^n \\left( X\_{t\_k}-X\_{t\_{k-1}} \\right)\\left( Y\_{t\_k}-Y\_{t\_{k-1}} \\right)+(X\_{t}-X\_{t\_n})(Y\_t-Y\_{t\_{n}})\\\\ \[X\]\_t^{\\Pi} :=\[X,X\]\_t^{\\Pi} &amp; =\\sum \\left( X\_{t\_{k}\\wedge t}-X\_{t\_{k-1}\\wedge t} \\right)^2=\\sum\_{k=1}^n \\left( X\_{t\_k}-X\_{t\_{k-1}} \\right)^2+(X\_{t}-X\_{t\_n})^2 \\end{split} \\\]

where \\(n\\) is such that \\(t\_n \\leq t\<t\_{n+1}\\), the quadratic variations process of \\(X\\) along \\(\\Pi\\). Note that \\(\[X,Y\]^{\\Pi}=(\[X+Y\]^{\\Pi}-\[X-Y\]^\\Pi)/4\\), so that we can as well define the co-variations from the quadratic variations. By \\(|\\Pi|=\\sup |t\_k-t\_{k-1}|\\) we denote the mesh of the subdivision.

> [!NOTE]
>
> **Definition**
>
> Let \\(X\\) and \\(Y\\) be two càdlàg processes. We say that
>
> - \\(X\\) has quadratic variations if there exists a càdlàg process \\(\[X\]\\) such that
>
>   \\\[ \[X\]^{\\Pi^n}\\xrightarrow\[n\\to \\infty\]{ucp} \[X\] \\\]
>
>   for every sequence of partitions \\((\\Pi^n)\\) with mesh converging to \\(0\\).
> - \\(X\\) and \\(Y\\) have co-variations if there exists a càdlàg process \\(\[X,Y\]\\) such that
>
>   \\\[ \[X,Y\]^{\\Pi^n}\\xrightarrow\[n\\to \\infty\]{ucp} \[X,Y\] \\\]
>
>   for every sequence of partitions \\((\\Pi^n)\\) with mesh converging to \\(0\\).

This may seem to be an overload of definition, but the following proposition shows that the two concepts coincide in the case of continuous semi-martingales.

> [!NOTE]
>
> **Proposition**
>
> Any continuous semi-martingales \\(X\\) and \\(Y\\) have quadratic variations \\(\[X\]=\\langle X\\rangle=\\langle M\\rangle\\) and co-variations \\(\[X,Y\]=\\langle X,Y\\rangle=\\langle M,N\\rangle\\).

> [!NOTE]
>
> **Proof**
>
> Without loss of generality, \\(X\_0=0\\). Since \\(\\tau^m =\\sup\\left\\{ t\\colon |M\_t|\>m \\text{ or }\\langle M\\rangle\_t\>m \\right\\}\\) defines a localizing sequence of stopping times, according to localizing lemma, we just have to show the theorem with the assumption that \\(M\\) as well as \\(\\langle M\\rangle\\) are uniformly bounded by some constant \\(K\\). Fix a generic partition \\(\\Pi\\). Note that we have
>
> \\\[ \[X\]^{\\Pi}=\[M\]^{\\Pi}+\[A, X+M\]^{\\Pi} \\\]
>
> Let us first show that \\(\[M\]^{\\Pi^n}\\to \\langle M\\rangle\\) in ucp for every sequence \\((\\Pi^n)\\) of subdivision of \\(\[0,t\]\\) converging to \\(0\\). For generic partition \\(\\Pi\\) of \\(\[0,t\]\\), we denote by \\(\\sum \\Delta\_k Y=\\sum\_{k=1}^n (Y\_{t\_k}-Y\_{t\_{k-1}})\\) for a process \\(Y\\). For a function \\(f\\), we denote by \\(m(f,\\Pi)=\\sup\\{\\left\\vert f(s)-f(u)\\right\\vert: \\left\\vert s-u\\right\\vert\<\\left\\vert\\Pi\\right\\vert, s,u \\in \[0,t\]\\}\\). By uniform continuity of continuous functions on compact intervals, if \\(f\\) is continuous then \\(m(f,\\Pi)\\to 0\\) as \\(|\\Pi|\\to 0\\). Also, if \\(f\\) is bounded by \\(K\\), it follows that \\(m(f,\\Pi)\\leq 2K\\). Straightforward inspection with \\(M\\) martingale and the Doob-Meyer decomposition shows
>
> \\\[ E\\left\[ \\left( M\_t-M\_s \\right)^2\\,|\\, \\mathcal{F}\_s \\right\]=E\\left\[ M\_t^2-M\_s^2 \\,|\\, \\mathcal{F}\_s \\right\]=E\\left\[ \\langle M\\rangle\_t-\\langle M\\rangle\_s \\,|\\, \\mathcal{F}\_s \\right\] \\\]
>
> where \\(s\\leq t\\). In particular
>
> \\\[ E\\left\[ \\sum \\left( \\Delta\_k M \\right)^2 \\right\]=E\\left\[ \\sum \\Delta\_k \\langle M \\rangle \\right\]=E\\left\[ \\langle M \\rangle\_t \\right\]\\leq K \\\]
>
> Using the inequalities \\(2a^2+2b^2-(a-b)^2=(a+b)^2\\geq 0\\), and the fact that \\(M^2-\\langle M\\rangle\\) is a martingale, it holds
>
> \\\[ \\begin{aligned} E\\left\[ \\left( \[M\]^{\\Pi}\_t-\\langle M\\rangle\_t \\right)^2 \\right\] &amp; =E\\left\[ \\left( \\sum \\left(\\Delta\_k M \\right)^2-\\Delta\_k \\langle M\\rangle \\right)^2 \\right\]\\\\ &amp; \\leq E\\left\[ \\sum \\left(\\left( \\Delta\_k M \\right)^2 - \\Delta\_k \\langle M\\rangle \\right)^2\\right\]\\\\ &amp; \\leq 2\\sum E\\left\[ \\left( \\Delta\_k M \\right)^4 \\right\]+2\\sum E\\left\[ \\left(\\Delta\_k \\langle M\\rangle \\right)^2 \\right\]\\\\ &amp; \\leq 2\\sum E\\left\[m\\left( M,\\Pi \\right)^2 \\left( \\Delta\_k M \\right)^2 \\right\]+2\\sum E\\left\[ m\\left( \\langle M\\rangle,\\Pi \\right)\\Delta\_k \\langle M\\rangle \\right\]\\\\ &amp; \\leq 2\\sum E\\left\[m\\left( M,\\Pi \\right)^2 \\left( \\Delta\_k M \\right)^2 \\right\]+2 K E\\left\[ m\\left( \\langle M\\rangle,\\Pi \\right) \\right\] \\end{aligned} \\\]
>
> Since \\(m(\\langle M\\rangle ,\\Pi^n)\\to 0\\) almost surely as \\(|\\Pi^n|\\to 0\\), the uniform boundedness of \\(m(\\langle M\\rangle, \\Pi^n)\\leq 2K\\) in combination with dominated convergence yields that the second term on the right-hand side converges to \\(0\\) as \\(|\\Pi^n|\\to 0\\). As for the first term, applying Cauchy-Schwartz yields
>
> \\\[ E\\left\[ m\\left( M,\\Pi \\right)^2\\sum \\left( \\Delta\_k M \\right)^2 \\right\]\\leq E\\left\[ m\\left( M,\\Pi \\right)^4 \\right\]^{1/2} E\\left\[ \\left(\\sum \\left(\\Delta\_k M \\right)^2 \\right)^2\\right\]^{1/2}. \\\]
>
> On one hand, dominated convergence yields that \\(E\[m(M,\\Pi^n)^4\]\\) converges to \\(0\\) as \\(|\\Pi^n|\\to 0\\). On the other hand, the fact that \\(|\\Delta\_k M| \\leq 2K\\) yields
>
> \\\[ \\begin{aligned} &amp; E\\left\[ \\left(\\sum \\left( \\Delta\_kM \\right)^2 \\right)^2\\right\]\\\\ &amp; =E\\left\[ \\sum \\left( \\Delta\_k M \\right)^4 \\right\]+2E\\left\[ \\sum\_k (\\Delta\_k M)^2\\sum\_{l\>k}E\\left\[\\left( \\Delta\_l M \\right)^2 \\:\\big | \\: \\mathcal{F}\_{t\_{l-1}}\\right\]\\right\]\\\\ &amp; \\leq 4K^2 E\\left\[ \\sum \\left( \\Delta\_k M \\right)^2 \\right\]+2E\\left\[ \\sum\_k (\\Delta\_k M)^2\\left(\\langle M \\rangle\_t - \\langle M \\rangle\_{t\_{k-1}}\\right)\\right\]\\\\ &amp; \\leq 4K^2 E\\left\[ \\langle M \\rangle\_t \\right\]+4KE\\left\[ \\sum \\left( \\Delta\_k M \\right)^2 \\right\]\\\\ &amp; \\leq 4K^3+4KE\\left\[ \\langle M \\rangle\_t \\right\]\\\\ &amp; \\leq 4K^2(K+1), \\end{aligned} \\\]
>
> We deduce that
>
> \\\[ E\\left\[ \\left( \[M\]^{\\Pi^n}\_t-\\langle M\\rangle\_t \\right)^2 \\right\]\\leq 2 KE\\left\[ m\\left( \\langle M\\rangle,\\Pi^n \\right) \\right\] + 4K^2(K+1)E\\left\[ m\\left( M,\\Pi^n \\right)^4 \\right\]^{1/2}\\xrightarrow\[|\\Pi^n|\\to 0\]{} 0 \\\]
>
> showing convergence in \\(L^2\\). Using Doob's maximal inequality for square integrable martingales shows that \\(\\sup\_{s\\leq t}|\[M\]^{\\Pi^n}\_s-\\langle M\\rangle\_s| \\to 0\\) in \\(L^2\\), in particular in probability. Hence, according to the localization lemma, \\(\[M\]^{\\Pi^n}\\to \\langle M\\rangle\\) in ucp for every sequence \\((\\Pi^n)\\) of partitions whose mesh converges to \\(0\\).
>
> We are left to show that \\(\[X+M,A\]^{\\Pi^n}\\to 0\\) in ucp for every sequence of partitions whose mesh converges to \\(0\\). Again, we fix \\(t\\) and without loss of generality, we may assume that \\(\\Pi\\) is a partition of \\(\[0,t\]\\). Since \\(A\\) is of bounded variations, it follows that \\(\\sum |\\Delta\_k A|\\leq K\_t\<\\infty\\). It follows that \\(| \[X+M,A\]^{\\Pi} |\\leq m( M+A, \\Pi )K\_t\\). Since \\(X+M\\) is a continuous process, it follows that \\(m(X+M, \\Pi^n)\\to 0\\) on every finite interval \\(\[0,t\]\\) as \\(|\\Pi^n|\\to 0\\). Hence \\(\[X+M,A\]^{\\Pi^n}\_t\\to 0\\) almost surely for every \\(t\\) as \\(|\\Pi^n|\\to 0\\).

[^/SP_Lecture/lecture/07-Stochastic-Integral/073-quadratic-variations/#1]: Note that the space of semi-martingales is clearly a vector space.
