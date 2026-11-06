# Stochastic Integral

> [!NOTE]
>
> **Remark**
>
> Note that if \\(X\\) is a càdlàg sub-martingale such that \\(\\sup\_{s\\leq t} X\_s\\) is integrable for each \\(t\\), then \\(X\\) is of class (DL). Indeed, for any stopping time it holds
>
> \\\[ |X\_{\\tau \\wedge t}|\\leq \\sup\_{s \\leq t}|X\_s| \\\]
>
> showing that the family is uniformly bounded by an integrable random variable, hence, is uniformly integrable.
>
> In particular, if \\(M\\) is a càdlàg martingale which is \\(p\\)-integrable for \\(p\>1\\), then \\(|M|^p\\) is a positive sub-martingale and from from Doob's maximal inequality it follows that
>
> \\\[ E\\left\[ \\sup\_{s\\leq t} |M\_s|^p \\right\]^{1/p} \\leq \\frac{p}{p-1}\\left\\| M\_t \\right\\|\_{p} \<\\infty \\\]
>
> For \\(p=2\\), it follows that \\(M^2\\) is a sub-martingale of class (DL), hence, admits a Doob-Meyer decomposition. In particular, if \\(M\\) is continuous, it follows that the natural process in the decomposition is continuous too.

Let us fix some notations.

- By \\(\\mathcal{M}^2\_c\\) we denote the space of square integrable continuous martingales \\(M\\) such that \\(M\_0=0\\).
- For \\(M\\) in \\(\\mathcal{M}\_c^2\\), we denote by \\(\\langle M\\rangle\\) the continuous natural process of bounded variation in the Doob-Meyer decomposition of the sub-martingale \\(M^2\\). That is, \\(M^2=\\text{martingale}+\\langle M\\rangle\\). We call \\(\\langle M\\rangle\\) the **quadratic variations** of \\(M\\).
- Such a continuous quadratic variation process \\(\\langle M\\rangle\\) defines a product measure \\(P\\otimes d\\langle M\\rangle\\) on \\(\\Omega\\otimes \[0,\\infty)\\) with \\(\\sigma\\)-algebra \\(\\mathcal{F}\\otimes \\mathcal{B}(\[0, \\infty))\\).
- For every locally bounded and progressive measurable process \\(H\\) we can define the continuous and adapted process \\(\\int H d\\langle M\\rangle\\), and we denote by \\(\\mathcal{L}^2(M)\\) the space of progressively measurable processes \\(H\\) such that

  \\\[ E\\left\[ \\int\_{0}^{t}H^2 d\\langle M\\rangle \\right\]\<\\infty \\\]

  for every \\(t\\). If there is no risk of confusion, we often drop the reference to \\(M\\) and use the notation \\(\\mathcal{L}^2:=\\mathcal{L}^2(M)\\).
- We generically denote by \\(\\Pi=\\{0=\\tau\_0\<\\tau\_1\<\\ldots\<\\tau\_n\<T\\}\\) a stochastic partition where \\(\\tau\_k\\) are stopping times and \\(T\>0\\). We call it a deterministic partition if each \\(\\tau\_k=t\_k \\in \[0,\\infty)\\). Further, we adopt the handy notation \\(\\Delta\_k Y=Y^{\\tau\_k}-Y^{\\tau\_{k-1}}\\) for an increment of a progressive stochastic process \\(Y\\). That is, \\(\\Delta\_kY\_t=Y\_t^{\\tau\_k}-Y\_{t}^{\\tau\_{k-1}}=Y\_{t\\wedge \\tau\_k}-Y\_{t\\wedge \\tau\_{k-1}}\\) for every \\(t\\).
- We denote by \\(\\mathcal{S}\\) the set of simple predictable integrands

  \\\[ H=H\_0+\\sum\_{k=1}^n H\_k 1\_{(\\tau\_{k-1},\\tau\_k\]} \\\]

  where along a stochastic partition \\(\\Pi\\), \\(H\_k\\) is \\(\\mathcal{F}\_{\\tau\_{k-1}}\\)-measurable and \\(|H\_k|\\leq C\\) for every \\(k\\) and some constant \\(C\\).
- Finally for \\(H\\) in \\(\\mathcal{S}\\) and \\(M\\) in \\(\\mathcal{M}\_c^2\\), we define the discrete stochastic integral

  \\\[ \\int H dM:=M\_0H\_0+\\sum\_{k=1}^nH\_k(M^{\\tau\_k}-M^{\\tau\_{k-1}})=\\sum\_{k=1}^nH\_k\\Delta\_k M \\\]

> [!NOTE]
>
> **Remark**
>
> The stochastic integral \\(\\int H dM\\) for simple \\(H\\) follows the same definition as for the integral in the Lebesgue-Stieljes integral if we replace \\(M\\) by some BV process \\(A\\). Both are clearly linear operators, however, a fundamental difference between both, is the lack of monotonicity for the \\(\\int \\cdot dM\\), which is a corner stone of the definition of the Lebesgue-Stieljes integral that yields monotone convergence and then dominated convergence.
>
> In other terms, defining the stochastic integral \\(\\int \\cdot dM\\) beyond the class of simple processes can not involve the same arguments as the classical Lebesgue-Stieljes approach. The key answer to this problem is the so called Ito-Isometry.

According to what has been done so far, we have from Doob's optional sampling theorem and the fact that \\(M\\) is a square integrable the following proposition easily follows

> [!NOTE]
>
> **Proposition**
>
> Let \\(M\\) in \\(\\mathcal{M}\_c^2\\). It follows that \\(\\int \\cdot\\, dM\\) is an operator from \\(\\mathcal{S}\\) to \\(\\mathcal{M}\_c^2\\). It satisfies the following properties:
>
> 1. **Linearity:** \\(\\int (\\alpha H+\\beta G) dM=\\alpha\\int HdM+\\beta \\int GdM\\) for \\(\\alpha\\) and \\(\\beta\\) constants.
> 2. **Stopping property:** \\(\\int 1\_{\\{\\cdot \\leq \\tau\\}} H dM=\\int H dM^\\tau=\\int\_0^{\\cdot \\wedge\\tau} H dM\\).
> 3. **Ito-Isometry:** for every \\(t\\)
>
>    \\\[ E\\left\[ \\left( \\int\_{0}^{t}H dM \\right)^2 \\right\]= E\\left\[ \\int\_{0}^{t} H^2 d\\langle M \\rangle \\right\] \\\]

> [!NOTE]
>
> **Proof**
>
> Since \\(H\\) is uniformly bounded, we know from Doob's optional sampling theorem that \\(\\int HdM\\) is a martingale which is continuous since \\(M\\) is continuous. Linearity is immediate and the stopping property is a simple adaptation of the discrete time version.
>
> We show the Ito-Isometry which as a consequence will show that \\(\\int HdM\\) is square integrable since \\(H\\) is bounded and \\(\\langle M\\rangle\\) is integrable, hence an element of \\(\\mathcal{M}\_c^2\\). We denote by \\(N\\) the martingale in the Doob-Meyer decomposition \\(M^2=N+\\langle M\\rangle\\). Since \\(H\\) is uniformly bounded and \\(M\\) is square integrable, the following expectations and conditional expectations are well defined.
>
> \\\[ E\\left\[ \\left( \\int\_{0}^{t}H dM \\right)^2 \\right\]=\\sum\_{k=1}^n E\\left\[H\_k^2\\left(\\Delta\_kM\_t\\right)^2 \\right\] +2\\sum\_{k\<j} E\\left\[ H\_kH\_j\\Delta\_k M\_t \\Delta\_j M\_t \\right\] \\\]
>
> Note that for every martingale, \\(E\[M\_{t\\wedge \\tau\_j}|\\mathcal{F}\_{\\tau\_{j-1}}\]=M\_{t\\wedge \\tau\_{j-1}}\\), and therefore \\(E\[\\Delta\_kM\_t|\\mathcal{F}\_{\\tau\_{k-1}}\]=0\\). Since \\(j\>k\\) and \\(H\\) is predictable, for the second term it holds
>
> \\\[ E\\left\[ H\_kH\_j\\Delta\_kM\_t \\Delta\_j M\_t \\right\] =E\\left\[ H\_kH\_j\\Delta\_k M\_tE\\left\[\\Delta\_j M\_t|\\mathcal{F}\_{\\tau\_{j-1}}\\right\]\\right\]=0 \\\]
>
> As for the first term, for the same reasons, one has
>
> \\\[ \\begin{align\*} E\\left\[ H\_k^2\\left(\\Delta\_k M\_{t} \\right)^2\\right\] &amp; = E\\left\[ H\_k^2\\left(\\left(M\_{t\\wedge \\tau\_k}^2 - M\_{t\\wedge \\tau\_{k-1}}^2\\right) -2 M\_{t\\wedge \\tau\_{k-1}}\\left(M\_{t\\wedge \\tau\_k} - M\_{t\\wedge \\tau\_{k-1}}\\right)\\right) \\right\]\\\\ &amp; = E\\left\[ H\_k^2 \\Delta\_k M^2\_t \\right\] -2 E\\left\[ H\_k^2 M\_{t\\wedge \\tau\_{k-1}}\\underbrace{E\\left\[\\Delta\_k M\_t | \\mathcal{F}\_{\\tau\_{k-1}}\\right\]}\_{=0} \\right\]\\\\ &amp; = E\\left\[ H\_k^2 \\left( \\Delta\_k N\_t + \\Delta\_k \\langle M\\rangle\_t \\right) \\right\]\\\\ &amp; = E\\left\[ H\_k^2 \\underbrace{E\\left\[ \\Delta\_k N\_t|\\mathcal{F}\_{\\tau\_{k-1}} \\right\]}\_{=0}\\right\] + E\\left\[H\_k^2\\Delta\_k \\langle M\\rangle\_{t} \\right\]\\\\ &amp; =E\\left\[H\_k^2\\Delta\_k \\langle M\\rangle\_{t} \\right\] \\end{align\*} \\\]
>
> Summing up yields
>
> \\\[ E\\left\[ \\left(\\int\_{0}^{t}H dM\\right)^2 \\right\]=E\\left\[\\sum\_{k=1}^n H\_k^2 \\Delta\_k\\langle M\\rangle\_t\\right\] =E\\left\[ \\int\_{0}^{t}H^2 d\\langle M\\rangle \\right\] \\\]
>
> Showing the Ito-Isometry and finishes the proof.

So far we constructed a stochastic integral operator from \\(\\mathcal{S}\\) to \\(\\mathcal{M}\_{c}^2\\).  
The question is whether we can extend it to some closure to \\(\\mathcal{S}\\subseteq \\mathcal{L}^2(M)\\) and in which form.

Let us state first a classical topological result.

> [!NOTE]
>
> **Definition**
>
> A metric vector space \\((E,d)\\) is called a Fréchet space if
>
> - Addition and multiplication by a scalar are continuous operations with respect to \\(d\\).
> - \\(d\\) is translation invariant, that is, \\(d(x,y)=d(x+z,y+z)\\).
> - \\((E,d)\\) is complete.

> [!NOTE]
>
> **Proposition**
>
> Let \\((E,d)\\) and \\((E^\\prime,d^\\prime)\\) be two Fréchet spaces and \\(F\\subseteq E\\) a linear subspace. Any linear function \\(f:F\\to E^\\prime\\) which is an isometry, that is, \\(d\\left( f(x),f(y) \\right)=d(x,y)\\), can be extended uniquely to a linear function \\(f:\\bar{F}\\to E^\\prime\\) which is also an isometry where \\(\\bar{F}\\) is the closure of \\(F\\) in \\(E\\). In particular, the extension is continuous.

> [!NOTE]
>
> **Proof**
>
> For \\(x \\in \\bar{F}\\), let \\((x\_n)\\) be a sequence of elements in \\(F\\) converging to \\(x\\). It follows that \\((x\_n)\\) is in particular Cauchy. By the isometric property, so is the sequence \\((f(x\_n))\\), which, by completeness of \\(E^\\prime\\), converges to some \\(y \\in E^\\prime\\). For another sequence \\((\\tilde{x}\_n)\\) converging to \\(x\\), it also follows that \\((f(\\tilde{x}\_n))\\) converges to some \\(\\tilde{y} \\in E^\\prime\\). By isometry and triangular inequality
>
> \\\[ \\begin{align\*} d^\\prime(y,\\tilde{y}) &amp; \\leq d^\\prime(y,f(x\_n))+d^\\prime(f(x\_n),f(\\tilde{x}\_n))+d^\\prime(f(\\tilde{x}\_n),\\tilde{y}) \\\\ &amp; = d^\\prime(y,f(x\_n))+d(x\_n,\\tilde{x}\_n)+d^\\prime(f(\\tilde{x}\_n),\\tilde{y}) \\\\ &amp; \\leq d^\\prime(y,f(x\_n))+d^\\prime(f(\\tilde{x}\_n),\\tilde{y})+d(x\_n,x)+d(x,\\tilde{x}\_n) \\xrightarrow\[n\\to \\infty\]{} 0 \\end{align\*} \\\]
>
> showing that \\(y = \\tilde{y}\\). Hence, the limit does not depend on the choice of the sequence \\((x\_n)\\) converging to \\(x\\), so that we can extend \\(f\\) to \\(\\bar{F}\\). It is straightforward to check that the extension is once again an isometry and also linear since both metrics are translation invariant distances and addition as well as multiplication are continuous. As for the uniqueness of this isometric extension, it is also straightforward.

Since \\(\\int \\cdot \\, dM\\) is a linear operator which is an isometry, we will apply this classical result of functional analysis to define the stochastic integral on the closure of \\(\\mathcal{S}\\). Two main questions now:

- **Question 1:** What are the metrics \\(d\\) and \\(d^\\prime\\) we consider on \\(\\mathcal{L}^2(M)\\) and \\(\\mathcal{M}\_c^2\\) making them into Fréchet spaces?
- **Question 2:** What is the closure of \\(\\mathcal{S}\\)?

As for the first question, the answer comes from a general fact that Fréchet distances are generated by countable families of semi-norms. For every \\(n\\), with some abuse of notations, let

\\\[ \\begin{align\*} \\left\\Vert H1\_{\[0,n\]}\\right\\Vert\_{2} &amp; : =E\\left\[ \\int H^21\_{\[0,n\]} d\\langle M\\rangle \\right\]^{1/2}\\\\ &amp; =E\\left\[ \\int\_{0}^{n}H^2 d\\langle M\\rangle \\right\]^{1/2} \\\\ \\left\\Vert N\_n\\right\\Vert\_{2} &amp; :=E\\left\[ N\_n^2 \\right\]^{1/2} \\end{align\*} \\\]

for \\(H\\) in \\(\\mathcal{L}^2(M)\\) and \\(N \\in \\mathcal{M}\_c^2\\). On the one hand \\(\\left\\Vert\\cdot 1\_{\[0,n\]}\\right\\Vert\_{2}\\) is the standard \\(L^2\\) norm on the product space of \\(\\Omega\\times \[0,n\]\\) with the measure \\(P\\otimes d\\langle M\\rangle\\), and therefore a semi-norm on \\(\\mathcal{L}^2(M)\\). On the other hand, by Doob's maximal inequality \\(E\[\\sup\_{s\\leq n}N\_s^2\]\\leq C E\[N\_n^2\]\\), and therefore \\(\\left\\Vert\\cdot\_n\\right\\Vert\_{2}\\) is a norm on the space of continuous square integrable martingales restricted to \\(\[0,n\]\\), hence a semi-norm on \\(\\mathcal{M}^2\_c\\).

We can define

\\\[ \\begin{align\*} d(H,H^\\prime) &amp;= \\sum \\frac{1}{2^n}\\frac{\\left\\Vert(H-H^\\prime)1\_{\[0,n\]}\\right\\Vert\_{2}}{1+\\left\\Vert(H-H^\\prime)1\_{\[0,n\]}\\right\\Vert\_{2}}, \\\\ d^\\prime(N,N^\\prime) &amp;= \\sum \\frac{1}{2^n}\\frac{\\left\\Vert N\_n-N^\\prime\_n\\right\\Vert\_{2}}{1+\\left\\Vert N^\\prime\_n-N^\\prime\_n\\right\\Vert\_{2}} \\end{align\*} \\\]

for \\(H,H^\\prime\\) in \\(\\mathcal{L}^2(M)\\) and \\(N,N^\\prime\\) in \\(\\mathcal{M}^2\_c\\).

> [!NOTE]
>
> **Lemma**
>
> Both \\((\\mathcal{L}^2(M),d)\\) and \\((\\mathcal{M}\_c^2,d^\\prime)\\) are Fréchet spaces.

> [!NOTE]
>
> **Proof**
>
> It is quite standard to check that both functions define distances which are translation invariant and for which addition and multiplication by scalar in both vector spaces are continuous. Furthermore, it is also clear that \\(\\mathcal{L}^2(M)\\) is complete since the \\(\\left\\Vert\\cdot\\right\\Vert\_2\\) norm on any compact \\(\[0,n\]\\) makes \\(L^2(P\\otimes d\\langle M\\rangle)\\) into a complete normed space. We just check that \\(\\mathcal{M}\_c^2\\) is complete for the distance \\(d^\\prime\\).
>
> Let \\((M^n)\\) be a Cauchy sequence in \\(\\mathcal{M}^2\_c\\). It follows that \\((M\_t^n)\\) is Cauchy in \\(L^2\_t\\) for any \\(t\\), hence converges in \\(L^2\\) to \\(M\_t\\). Let further \\(A\\) be an event in \\(\\mathcal{F}\_s\\). It follows from the martingale property of \\(M^n\\) that \\(E\[M\_t1\_{A}\]=\\lim\_n E\[M\_t^n1\_{A}\]=\\lim\_n E\[M\_s^n 1\_{A}\]=E\[M\_s1\_{A}\]\\). Choosing the càdlàg version of \\(M\\) shows that \\(M\\) is a càdlàg martingale with \\(M\_t\\) in \\(L^2\_t\\) for every \\(t\\). Let us prove that \\(M\\) is actually continuous. By Doob's maximal inequality one has
>
> \\\[ P\\left\[ \\sup\_{s\\leq t} \\left\\vert M\_s^n-M\_s\\right\\vert\>\\lambda \\right\]\\leq \\frac{1}{\\lambda} \\left\\Vert M\_t^n-M\_t\\right\\Vert\_2^2 \\xrightarrow\[n\\to \\infty\]{} 0. \\\]
>
> Hence \\(P\[\\sup\_{s\\leq t}\\left\\vert M\_s^{n\_k}-M\_s\\right\\vert\>\\lambda\]\\leq 1/2^{k}\\) for some \\(n\_k\\) and every \\(k\\). Applying Borel-Cantelli, it follows that \\(P\[\\liminf \\{\\sup\_{s\\leq t}\\left\\vert M\_s^n-M\_s\\right\\vert\\leq \\lambda\\}\]=1\\) for every \\(\\lambda\\), showing that for \\(P\\)-almost all \\(\\omega\\in \\Omega\\) the continuous path \\(M^n(\\omega)\\) converges uniformly on \\(\[0,t\]\\) to \\(M(\\omega)\\), that is \\(M\\) is continuous.

As for the second question about the closure of \\(\\mathcal{S}\\), we have

> [!NOTE]
>
> **Lemma**
>
> The space \\(\\mathcal{S}\\) is dense in \\(\\mathcal{L}^2(M)\\). In particular, for each \\(H\\in\\mathcal{L}^2(M)\\) there exists a sequence \\((H^n)\\subseteq\\mathcal{S}\\) satisfying \\(\\left\\Vert(H-H^n)1\_{\[0,t\]}\\right\\Vert\_{2}\\to 0\\) for all \\(t\\).

> [!NOTE]
>
> **Remark**
>
> The “size” of the closure of \\(\\mathcal{S}\\) depends on the “regularity” of \\(\\langle M\\rangle\\), allowing for more or fewer integrands for the stochastic integral with respect to \\(M\\). On the one hand, if \\(\\langle M\\rangle\\) is absolutely continuous — for instance in the case of the Brownian motion — then it is even possible to define a stochastic integral with respect to integrands in \\(L^2(P\\otimes d\\langle M\\rangle)\\) which are “only” measurable and adapted and not necessarily progressive. On the other hand, if \\(M\\) were an element of \\(\\mathcal{M}^2\\) — those càdlàg martingales such that \\(E\[M\_t^2\]\<\\infty\\) for all \\(t\\), such as some class of Lévy Processes — then it is also possible to define a stochastic integral but with respect to a smaller set of integrands, namely those predictable processes in \\(\\mathcal{L}^2(M)\\).

> [!NOTE]
>
> **Proof**
>
> **Step 1:** Assume first that the paths of \\(\\langle M\\rangle\\) are absolutely continuous almost surely. In particular, \\(P\\otimes d\\langle M\\rangle \\ll P\\otimes dt\\). Fix \\(t\\).
>
> - If \\(H\\) is continuous, adapted and bounded, hence, by a proposition in the previous chapter, progressive, it holds that \\(H^n\\) were
>
>   \\\[ H^n\_s = H\_{\\frac{kt}{2^n}}, \\\]
>
>   for \\(kt/2^n \< s \\leq (k+1)t/2^n\\) converges \\(P\\otimes dt\\) to \\(H\\) on \\(\\Omega \\times \[0,t\]\\), and by Lebesgue's dominated convergence, it follows that \\(\\left\\Vert(H^n-H)1\_{\[0,t\]}\\right\\Vert\_{2}\\to 0\\), showing that continuous adapted and bounded processes are included in \\(\\bar{\\mathcal{S}}\\).
> - If \\(H\\) is progressively measurable and bounded. For every \\(n\\), define
>
>   \\\[ G\_s^n(\\omega) = n \\int\_{(s - 1/n) \\vee 0}^s H\_u(\\omega) \\, du. \\\]
>
>   It follows that \\(G^n\\) is a bounded, adapted and continuous process on \\(\[0,t\]\\). By the fundamental theorem of calculus, it follows that for almost all \\(\\omega \\in \\Omega\\), \\(G\_s^n(\\omega) \\to H\_s(\\omega)\\) for \\(dt\\)-almost all \\(s \\in \[0,t\]\\). Hence, by Fubini, \\(\\{\\lim G^n \\neq H\\}\\) is a \\(P \\otimes dt\\)-null measure set. Indeed,
>
>   \\\[ P\\otimes dt\\left\[ \\lim G\_n \\neq H \\right\] = \\int\_{\\Omega}\\left( \\int\_{0}^{t} 1\_{\\left\\{ (\\omega,u): \\lim G\_u^n(\\omega) \\neq H\_u(\\omega) \\right\\}}(s) \\, ds \\right) P(d\\omega) = 0. \\\]
>
>   And since \\(P \\otimes d\\langle M\\rangle \\ll P \\otimes dt\\), it follows that \\(\\{\\lim G^n \\neq H\\}\\) is a \\(P \\otimes d\\langle M\\rangle\\)-null set. In other terms, \\(G^n \\to H\\) \\(P \\otimes d\\langle M\\rangle\\)-almost surely. By Lebesgue's dominated convergence, it follows that \\(\\left\\Vert(G^n - H)1\_{\[0,t\]}\\right\\Vert\_{2} \\to 0\\).
>
>   Hence, bounded progressively measurable processes are included in the closure of continuous adapted and bounded processes, themselves included in \\(\\bar{\\mathcal{S}}\\).
> - If \\(H\\) is a progressive process, define \\(G^n\_t = H\_t 1\_{\\{|H\_t| \\leq n\\}}\\), which is progressive and bounded. It follows that \\(G^n \\to H\\) \\(P \\otimes d\\langle M\\rangle\\)-almost surely and is dominated by \\(H\\), which is integrable. Hence, by dominated convergence we have \\(\\left\\Vert(H^n - H)1\_{\[0,t\]}\\right\\Vert\_{2} \\to 0\\), showing that \\(\\mathcal{L}^2(M)\\) is included in the closure of bounded progressively measurable processes, themselves included in \\(\\bar{\\mathcal{S}}\\).
>
> **Step 2:** Let us now address the case where \\(d\\langle M\\rangle\\) is not absolutely continuous with respect to \\(dt\\). Just as previously, it is enough to show that every \\(H\\) progressive, uniformly bounded by a constant \\(C\\), and nonzero only on \\(\[0,m\]\\) can be approximated by elements of \\(\\mathcal{S}\\) in the \\(\\left\\Vert\\cdot\\right\\Vert\_{2}\\)-norm. The idea is to “tweak” \\(d\\langle M\\rangle\\) into a measure absolutely continuous with respect to \\(dt\\) by means of a time change. Since \\(\\langle M \\rangle\_s + s\\) is strictly increasing and continuous, there exists a strictly increasing and continuous inverse \\(T:\\Omega \\times \\mathbf{T} \\to \\mathbf{T}\\) such that \\(\\langle M\\rangle\_{T\_s(\\omega)}(\\omega) + T\_s(\\omega) = s\\) for all \\(s \\in \\mathbf{T}\\). In particular,(1) \\(T\_s \\leq s\\) since \\(A\_t + t \\geq t\\) and \\(\\{T\_s \\leq t\\} = \\{A\_t + t \\geq s\\} \\in \\mathcal{F}\_t\\) for all \\(t\\). It follows that \\(T\_s\\) is a bounded stopping time for every \\(s\\).
>
> 1. Recall that the general right-continuous inverse of an increasing function \\(f\\) is given by \\(f^{-1}(s)=\\sup\\{t: f(t)\\leq s\\}\\). However, if \\(f\\) is strictly increasing and continuous, it follows that \\(f^{-1}(s)=\\inf\\{t: s\\leq f(t)\\}\\). Furthermore, if \\(f(t)\\geq t\\), then \\(f^{-1}(s)\\leq s\\).
>
> We then define the new filtration \\(\\mathcal{G}\_s := \\mathcal{F}\_{T\_s}\\) for \\(s \\in \\mathbf{T}\\) and the process \\(G\_s = H\_{T\_s}\\), which is \\(\\mathbb{G}\\)-adapted and measurable since \\(H\\) is \\(\\mathbb{F}\\)-progressive. However, we do not know whether \\(G\\) is progressive. We can however modify it and assume that it is progressive and adapted. From the previous argumentation, there exists a simple process \\(G^\\varepsilon\\) of the form
>
> \\\[ H^n\_s = H\_{\\frac{kt}{2^n}}, \\quad \\text{for } \\frac{kt}{2^n} \< s \\leq \\frac{(k+1)t}{2^n} \\\]
>
> such that \\(E\[\\int\_0^\\lambda |G - G^\\varepsilon|^2 ds\] \\leq \\varepsilon/2\\) for a given \\(\\lambda\\). However, since
>
> \\\[ E\\left\[\\int G\_s^2 \\, ds\\right\] \\leq E\\left\[\\int 1\_{\\{T\_s \\leq m\\}} H\_{T\_s}^2 \\, ds\\right\] \\leq C E\[\\langle M\\rangle\_m + m\] \< \\infty, \\\]
>
> we may choose \\(\\lambda\\) large enough and \\(G^\\varepsilon\\) zero outside \\(\[0,\\lambda\]\\) to get
>
> \\\[ E\\left\[\\int |G^\\varepsilon\_s - G\_s|^2 \\, ds\\right\] \< \\varepsilon. \\\]
>
> Reversing the time clock, it follows that
>
> \\\[ H^\\varepsilon\_t = H\_0 1\_{\\{0\\}}(t) + \\sum G^\\varepsilon\_{s\_k} 1\_{\]T\_{s\_k}, T\_{s\_{k+1}}\]}(t) \\\]
>
> which is a simple process since \\(T\_{s\_k}\\) is a bounded stopping time and \\(G^\\varepsilon\_{s\_k}\\) is \\(\\mathcal{F}\_{T\_{s\_k}}\\)-measurable. Hence, by definition
>
> \\\[ E\\left\[ \\int\_0^m |H\_t^\\varepsilon - H\_t|^2 d\\langle M\\rangle\_t \\right\] \\leq E\\left\[ \\int\_0^m |H\_t^\\varepsilon - H\_t|^2 (d\\langle M\\rangle\_t + dt) \\right\] \\leq E\\left\[ \\int |G^\\varepsilon\_s - G\_s|^2 ds \\right\] \\leq \\varepsilon, \\\]
>
> which ends the proof.

We have now all the ingredients to define the stochastic integral.

> [!NOTE]
>
> **Theorem**
>
> Let \\(M \\in \\mathcal{M}\_c^2\\). There exists a unique continuous linear functional
>
> \\\[ \\begin{equation\*} \\begin{split} \\int \\cdot \\, dM \\colon \\mathcal{L}^2(M) &amp; \\longrightarrow \\mathcal{M}\_2^c\\\\ H &amp; \\longmapsto \\int H dM \\end{split} \\end{equation\*} \\\]
>
> coinciding with the elementary stochastic integral on \\(\\mathcal{S}\\). Furthermore, the following properties hold:
>
> 1. **Linearity:** \\(\\int (\\alpha H + \\beta G) \\, dM = \\alpha \\int H \\, dM + \\beta \\int G \\, dM\\) for constants \\(\\alpha\\) and \\(\\beta\\).
> 2. **Stopping property:** \\(\\int 1\_{\\{\\cdot \\leq \\tau\\}} H \\, dM = \\int H \\, dM^\\tau = \\int\_0^{\\cdot \\wedge \\tau} H \\, dM\\).
> 3. **Itô-Isometry:** For every \\(t\\)
>
>    \\\[ E\\left\[ \\left( \\int\_{0}^{t}H \\, dM \\right)^2 \\right\] = E\\left\[ \\int\_{0}^{t} H^2 \\, d\\langle M \\rangle \\right\] \\\]
>
> And the quadratic variations of the square integrable continuous martingale \\(\\int H \\, dM\\) are given by
>
> \\\[ \\left\\langle \\int H \\, dM \\right\\rangle = \\int H^2 \\, d\\langle M \\rangle \\\]

> [!NOTE]
>
> **Proof**
>
> We already handled here all the elements of the proof which are consequences of the previous results, up to the stopping property and the quadratic variations of \\(\\int H \\, dM\\). As for the stopping property, it follows directly by approximating \\(H \\in \\mathcal{L}^2\\) by elements in \\(\\mathcal{S}\\).
>
> As for the quadratic variations of \\(\\int H \\, dM\\), note that \\(\\int H\_s^2 \\, d\\langle M\\rangle\\) is a continuous process of bounded variation, hence normal. From the uniqueness of the Doob-Meyer decomposition, we just have to show that
>
> \\\[ \\left( \\int H \\, dM \\right)^2 - \\int H^2 \\, d\\langle M\\rangle \\\]
>
> is a martingale. Clearly it is integrable and adapted. For \\(s \\leq t\\) and any event \\(A\\) in %\\mathcal{F}\_s$, by Itô-isometry and \\(\\int H \\, dM\\) being a square integrable martingale, it holds
>
> \[ \\begin{aligned}

&amp; E\\left\[ 1\_A \\left( \\left( \\int\_{0}^{t} H \\, dM \\right)^2 - \\int\_{0}^{t} H^2 \\, d\\langle M\\rangle - \\left( \\int\_{0}^{s} H \\, dM \\right)^2 + \\int\_{0}^{s} H^2 \\, d\\langle M\\rangle \\right) \\right\] \\ &amp;= E\\left\[ 1\_A \\left( \\int\_{s}^{t} H \\, dM \\right)^2 \\right\] - E\\left\[ 1\_A \\int\_{s}^{t} H^2 \\, d\\langle M\\rangle \\right\] + E\\left\[ 1\_A \\left( \\int\_{0}^{s} H \\, dM \\right) \\left( \\int\_{s}^{t} H \\, dM \\right) \\right\] \\ &amp;= E\\left\[ 1\_A E\\left\[ \\left( \\int\_{s}^{t} H \\, dM \\right)^2 \\big| \\mathcal{F}*s \\right\] \\right\] - E\\left\[ 1\_A \\int*}^{t} H^2 \\, d\\langle M\\rangle \\right\] + E\\left\[ 1\_A \\left( \\int\_{0}^{s} H \\, dM \\right) E\\left\[ \\int\_{s}^{t} H \\, dM \\big| \\mathcal{F*s \\right\] \\right\] \\ &amp;= E\\left\[ 1\_A \\int* H^2 \\, d\\langle M\\rangle \\right\] = 0 \\end{aligned} \]}^{t} H^2 \\, d\\langle M\\rangle \\right\] - E\\left\[ 1\_A \\int\_{s}^{t

```text
finishing the proof.
```

We call this operator the **stochastic integral** of \\(H\\) with respect to \\(M\\). For square integrable continuous martingales \\(M\\) and \\(N\\), the covariation of \\(M,N\\) is given by the polar formula

\\\[ \\langle M, N\\rangle = \\frac{1}{4} \\left( \\langle M + N \\rangle - \\langle M - N \\rangle \\right) \\\]

The following relation holds

> [!NOTE]
>
> **Proposition**
>
> Let \\(M, N \\in \\mathcal{M}\_c^2\\) and \\(G \\in \\mathcal{L}^2(M)\\), \\(H \\in \\mathcal{L}^2(N)\\). Then it holds
>
> \\\[ \\langle \\int G \\, dM, \\int H \\, dN \\rangle = \\int G \\, d\\langle M, \\int H \\, dN \\rangle = \\int GH \\, d\\langle M, N \\rangle \\\]
>
> In particular, for \\(G \\in \\mathcal{L}^2(M)\\) and \\(H \\in \\mathcal{L}^2\\left( \\int G \\, dM \\right)\\), it holds that \\(GH \\in \\mathcal{L}^2(M)\\) and the chain rule
>
> \\\[ \\int H \\, d \\int G \\, dM = \\int GH \\, dM \\\]

This relation is straightforward for \\(G, H \\in \\mathcal{S}\\). The passage to the limit is left as an exercise by using the following proposition known as the Kunita-Watanabe inequality, a stochastic version of Hölder.

> [!NOTE]
>
> **Proposition**
>
> Let \\(M, N \\in \\mathcal{M}\_{c}^2\\) and \\(G \\in \\mathcal{L}^2(M)\\), \\(H \\in \\mathcal{L}^2(N)\\). Then it holds
>
> \\\[ \\begin{align\*} \\left\\vert\\int GH \\, d\\langle M,N\\rangle \\right\\vert &amp; \\leq \\int \\left\\vert GH \\right\\vert \\, d\\left\\vert \\langle M,N \\rangle \\right\\vert \\\\ &amp; \\leq \\left( \\int \\left\\vert G \\right\\vert^2 \\, d\\langle M \\rangle \\right)^{1/2} \\left( \\int \\left\\vert H \\right\\vert^2 \\, d\\langle N \\rangle \\right)^{1/2} \\end{align\*} \\\]

> [!NOTE]
>
> **Proof**
>
> Recall that
>
> \\\[ \\langle M, N \\rangle = \\frac{1}{4}(\\langle M + N \\rangle - \\langle M - N \\rangle) \\\]
>
> and therefore
>
> \\\[ |\\langle M, N \\rangle| = \\frac{1}{4}(\\langle M + N \\rangle + \\langle M - N \\rangle). \\\]
>
> Furthermore, for two simple processes \\(G, H \\in \\mathcal{S}\\), a painful but easy inspection shows that \\(GH \\in \\mathcal{S}\\). Hence,
>
> \\\[ \\begin{align\*} \\left\\vert \\int GH \\, d\\langle M,N\\rangle \\right\\vert &amp; = \\left\\vert \\sum G\_k H\_k \\Delta\_k \\langle M, N \\rangle \\right\\vert \\\\ &amp; \\leq \\sum \\left\\vert G\_k H\_k \\right\\vert \\left\\vert \\Delta\_k \\langle M, N \\rangle \\right\\vert\\\\ &amp; = \\int \\left\\vert GH \\right\\vert \\, d|\\langle M, N \\rangle| \\end{align\*} \\\]
>
> showing, by passing to the limit on the simple processes, the first inequality. Furthermore, by the Cauchy-Schwarz inequality, it holds
>
> \\\[ |\\Delta\_k \\langle M, N \\rangle| \\leq (\\Delta\_k \\langle M \\rangle)^{1/2} (\\Delta\_k \\langle N \\rangle)^{1/2}. \\\]
>
> Hence, for simple integrands, using Hölder's inequality, it holds
>
> \\\[ \\begin{align\*} \\int \\left\\vert GH \\right\\vert \\, d|\\langle M,N \\rangle| &amp; = \\sum \\left\\vert G\_k H\_k \\right\\vert \\left\\vert \\Delta\_k \\langle M, N \\rangle \\right\\vert \\\\ &amp; \\leq \\sum \\left\\vert G\_k \\right\\vert \\left\\vert H\_k \\right\\vert (\\Delta\_k \\langle M \\rangle )^{1/2} (\\Delta\_k \\langle N \\rangle )^{1/2} \\\\ &amp; \\leq \\left( \\sum \\left\\vert H\_k \\right\\vert^2 \\Delta\_k \\langle M \\rangle \\right)^{1/2} \\left( \\sum \\left\\vert G\_k \\right\\vert^2 \\Delta\_k \\langle N \\rangle \\right)^{1/2} \\\\ &amp; = \\left( \\int \\left\\vert G \\right\\vert^2 \\, d\\langle M \\rangle \\right)^{1/2} \\left( \\int \\left\\vert H \\right\\vert^2 \\, d\\langle N \\rangle \\right)^{1/2} \\end{align\*} \\\]
>
> The case of general integrands follows by passing to the limit with simple integrands in this inequality.
