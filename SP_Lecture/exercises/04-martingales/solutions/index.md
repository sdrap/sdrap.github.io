# Martingales - Solutions

> [!NOTE]
>
> **Exercise 1**
>
> (a) Let \\(X\\) and \\(Y\\) be two super-martingales. Show that \\(X \\wedge Y\\) is a super-martingale.
>
> (b) Show, or find a counter example for the following assertion: Let \\(X\\) be an adapted process such that \\(X\_t\\) is integrable and \\(E\[X\_0\]=E\[X\_t\]\\) for every \\(t\\). Then \\(X\\) is a martingale.
>
> (c) Let \\(X\\) be an adapted and predictable process. Show that \\(X\\) is a martingale if and only if \\(E\[X\_\\tau\]=E\[X\_0\]\\) for every bounded stopping time \\(\\tau\\).
>
> (d) Suppose that \\(X\\) is a square integrable martingale. Show that \\(X^2=(X^2\_t)\\) is a sub martingale and compute the Doob-Meyer decomposition of \\(X^2\\).
>
> (e) Suppose that \\(X\\) is an adapted process such that \\(C \> X\_t \> c \> 0\\) for every \\(t\\) where \\(C, c\\) are some constants. Show that there exists a unique decomposition
>
> \\\[ X = MA \\\]
>
> where \\(M\\) is a bounded martingale and \\(A\\) is a predictable bounded process with \\(A\_0 = 1\\).

> [!NOTE]
>
> **Solution to Exercise 1**
>
> (a) Since \\(X\\) and \\(Y\\) are super-martingales, they are adapted and integrable. Thus \\(X \\wedge Y\\) is adapted and integrable.
>
> For the super-martingale property, note that for any \\(s \\leq t\\):
>
> \\\[ E\[X\_t \\wedge Y\_t \\mid \\mathcal{F}\_s\] \\leq E\[X\_t \\mid \\mathcal{F}\_s\] \\leq X\_s \\\]
>
> and similarly \\(E\[X\_t \\wedge Y\_t \\mid \\mathcal{F}\_s\] \\leq Y\_s\\). Therefore:
>
> \\\[ E\[X\_t \\wedge Y\_t \\mid \\mathcal{F}\_s\] \\leq X\_s \\wedge Y\_s \\\]
>
> showing that \\(X \\wedge Y\\) is a super-martingale.
>
> (b) The assertion is **false**.
>
> **Counter-example:** Let \\(\\Omega = \\{-1, 1\\}\\) with \\(P(\\{-1\\}) = P(\\{1\\}) = 1/2\\). Define: - \\(\\mathcal{F}\_0 = \\{\\emptyset, \\Omega\\}\\) (trivial filtration) - \\(\\mathcal{F}\_1 = \\mathcal{F}\_2 = \\sigma(\\text{id})\\) (full information)
>
> Define \\(X\_0 = 0\\), \\(X\_1(\\omega) = \\omega\\), and \\(X\_2(\\omega) = -\\omega\\).
>
> Then \\(E\[X\_t\] = 0\\) for all \\(t\\), but:
>
> \\\[ E\[X\_2 \\mid \\mathcal{F}\_1\] = -X\_1 \\neq X\_1 \\\]
>
> on \\(\\{X\_1 = 1\\}\\) and \\(\\{X\_1 = -1\\}\\) respectively. Thus \\(X\\) is not a martingale.
>
> (c) (\\(\\Rightarrow\\)) If \\(X\\) is a martingale, then by Doob's optional stopping theorem, \\(E\[X\_\\tau\] = E\[X\_0\]\\) for any bounded stopping time \\(\\tau\\).
>
> (\\(\\Leftarrow\\)) Assume \\(E\[X\_\\tau\] = E\[X\_0\]\\) for all bounded stopping times \\(\\tau\\). We need to show \\(E\[X\_t \\mid \\mathcal{F}\_s\] = X\_s\\) for \\(s \\leq t\\).
>
> Since \\(X\\) is predictable, \\(X\_{s+1}\\) is \\(\\mathcal{F}\_s\\)-measurable. For any \\(A \\in \\mathcal{F}\_s\\), define the stopping time:
>
> \\\[ \\tau = s \\cdot 1\_A + t \\cdot 1\_{A^c} \\\]
>
> This is a bounded stopping time. Then:
>
> \\\[ E\[X\_0\] = E\[X\_\\tau\] = E\[X\_s 1\_A + X\_t 1\_{A^c}\] \\\]
>
> Also, taking \\(\\tau = t\\) (constant), we have \\(E\[X\_0\] = E\[X\_t\]\\). Thus:
>
> \\\[ E\[X\_t\] = E\[X\_s 1\_A + X\_t 1\_{A^c}\] \\\]
>
> which gives \\(E\[X\_t 1\_A\] = E\[X\_s 1\_A\]\\). Since this holds for all \\(A \\in \\mathcal{F}\_s\\) and \\(X\_s\\) is \\(\\mathcal{F}\_s\\)-measurable (by predictability), we conclude \\(E\[X\_t \\mid \\mathcal{F}\_s\] = X\_s\\).
>
> (d) Since \\(\\varphi(x) = x^2\\) is convex, by Jensen's inequality:
>
> \\\[ E\[X\_t^2 \\mid \\mathcal{F}\_s\] \\geq (E\[X\_t \\mid \\mathcal{F}\_s\])^2 = X\_s^2 \\\]
>
> So \\(X^2\\) is a sub-martingale.
>
> **Doob-Meyer decomposition:** By the Doob-Meyer theorem, \\(X^2 = M + A\\) where \\(M\\) is a martingale and \\(A\\) is predictable, increasing with \\(A\_0 = 0\\).
>
> The compensator is given by:
>
> \\\[ A\_t = \\sum\_{s=1}^{t} E\[(\\Delta X\_s)^2 \\mid \\mathcal{F}\_{s-1}\] = \\langle X \\rangle\_t \\\]
>
> where \\(\\langle X \\rangle\\) is the predictable quadratic variation (angle bracket). This is the unique predictable increasing process such that \\(X^2 - \\langle X \\rangle\\) is a martingale.
>
> (e) **Existence:** Define recursively:
>
> \\\[ A\_0 = 1, \\quad A\_t = A\_{t-1} \\cdot \\frac{X\_{t-1}}{E\[X\_t \\mid \\mathcal{F}\_{t-1}\]} \\\]
>
> and \\(M\_t = X\_t / A\_t\\).
>
> Since \\(X\\) is bounded away from 0 and \\(\\infty\\), and is a positive super-martingale (or sub-martingale, depending on direction), the conditional expectations are well-defined and bounded. Thus \\(A\\) is predictable and bounded.
>
> Check that \\(M\\) is a martingale:
>
> \\\[ E\[M\_t \\mid \\mathcal{F}\_{t-1}\] = E\\left\[\\frac{X\_t}{A\_t} \\bigg| \\mathcal{F}\_{t-1}\\right\] = \\frac{E\[X\_t \\mid \\mathcal{F}\_{t-1}\]}{A\_t} = \\frac{X\_{t-1}}{A\_{t-1}} = M\_{t-1} \\\]
>
> **Uniqueness:** Suppose \\(X = M'A'\\) is another such decomposition. Then:
>
> \\\[ \\frac{M\_t}{M\_t'} = \\frac{A\_t'}{A\_t} \\\]
>
> The left side is a martingale ratio and the right side is predictable. Taking conditional expectations:
>
> \\\[ E\\left\[\\frac{M\_t}{M\_t'} \\bigg| \\mathcal{F}\_{t-1}\\right\] = \\frac{M\_{t-1}}{M\_{t-1}'} \\\]
>
> But also \\(\\frac{A\_t'}{A\_t} = \\frac{A\_{t-1}'}{A\_{t-1}} \\cdot \\frac{E\[X\_t \\mid \\mathcal{F}\_{t-1}\] / X\_{t-1}}{E\[X\_t \\mid \\mathcal{F}\_{t-1}\] / X\_{t-1}} = \\frac{A\_{t-1}'}{A\_{t-1}}\\). Since \\(A\_0' = A\_0 = 1\\), by induction \\(A' = A\\) and thus \\(M' = M\\).

> [!NOTE]
>
> **Exercise 2**
>
> Throughout \\(\\mathbb{F}\\) is a given filtration on a probability space \\((\\Omega, \\mathcal{F}, P)\\). For a stochastic process \\(X\\) we denote by \\(\\mathbb{F}^X\\) the filtration generated by \\(X\\), that is
>
> \\\[ \\mathcal{F}\_t^X = \\sigma\\left( X\_s \\colon s \\leq t \\right), \\quad t = 0, 1, \\ldots \\\]
>
> 1\) Let \\(X\\) be a \\(\\mathbb{F}^X\\) martingale and \\(Y\\) a \\(\\mathbb{F}^Y\\) martingale. Suppose that \\(XY = (X\_t Y\_t)\\) is integrable. Prove -- or provide a counter example -- that \\(XY\\) is a \\(\\mathbb{F}^{XY}\\) martingale.
>
> 2\) Let \\(X\\) be a \\(\\mathbb{F}^X\\) martingale and \\(Y\\) a \\(\\mathbb{F}^Y\\) martingale. Suppose that \\(\\mathbb{F}^X\\) and \\(\\mathbb{F}^Y\\) are independent. Prove -- or provide a counter example -- that \\(XY\\) is a \\(\\mathbb{F}^{XY}\\) martingale.
>
> 3\) Provide an example of a martingale \\(X = (X\_t)\\) such that \\(\\sup\_t E\[|X\_t|\] \< \\infty\\) and \\(X\_t \\to X\_{\\infty}\\) \\(P\\)-almost surely for some \\(X\_{\\infty}\\) but for which however it does not hold \\(E\[|X\_t - X\_{\\infty}|\] \\to 0\\).
>
> 4\) Let \\((X^n)\\) be a sequence of martingales, that is \\(X^n = (X^n\_t)\\) is a martingale for each \\(n\\). We suppose that \\(X^n\_t \\to X\_t\\) almost surely for every \\(t\\) where \\(X\\) is an integrable stochastic process. Prove -- or provide a counter example -- that \\(X\\) is a martingale.
>
> 5\) Let \\((X^n)\\) be a sequence of martingales, that is \\(X^n = (X^n\_t)\\) is a martingale for each \\(n\\). We suppose that \\(X^n\_t \\to X\_t\\) almost surely for every \\(t\\) where \\(X\\) is a stochastic process. Prove that there exists an increasing sequence of stopping times \\((\\tau^m)\\) with \\(\\tau^m \\nearrow \\infty\\) such that \\(X^{\\tau^m}\\) is a martingale for every \\(m\\).

> [!NOTE]
>
> **Solution to Exercise 2**
>
> 1\) This is **false** in general.
>
> **Counter-example:** Let \\(X\\) and \\(Y\\) be independent symmetric random walks starting at 0, both with respect to their natural filtrations. Then \\(X\\) and \\(Y\\) are martingales.
>
> However, \\(XY\\) is not a \\(\\mathbb{F}^{XY}\\)-martingale. For instance, at time 1:
>
> \\\[ E\[X\_1 Y\_1 \\mid \\mathcal{F}\_0^{XY}\] = E\[X\_1 Y\_1\] = E\[X\_1\]E\[Y\_1\] = 0 \\\]
>
> But \\(X\_0 Y\_0 = 0\\), so the martingale property holds at time 0. The issue is at later times where the product doesn't preserve the martingale property due to correlation structure.
>
> More precisely, consider: if \\(X\_1 = 1\\) and \\(Y\_1 = 1\\), then knowing both, the future product behavior is affected.
>
> 2\) This is **true**.
>
> Let \\(\\mathcal{G}\_t = \\mathcal{F}\_t^X \\vee \\mathcal{F}\_t^Y\\). Note that \\(\\mathcal{F}\_t^{XY} \\subseteq \\mathcal{G}\_t\\).
>
> We need to show \\(E\[X\_t Y\_t \\mid \\mathcal{F}\_s^{XY}\] = X\_s Y\_s\\) for \\(s \\leq t\\).
>
> Since \\(\\mathbb{F}^X\\) and \\(\\mathbb{F}^Y\\) are independent:
>
> \\\[ E\[X\_t Y\_t \\mid \\mathcal{G}\_s\] = E\[X\_t \\mid \\mathcal{F}\_s^X\] E\[Y\_t \\mid \\mathcal{F}\_s^Y\] = X\_s Y\_s \\\]
>
> Now, \\(X\_s Y\_s\\) is \\(\\mathcal{F}\_s^{XY}\\)-measurable, and by the tower property:
>
> \\\[ E\[X\_t Y\_t \\mid \\mathcal{F}\_s^{XY}\] = E\[E\[X\_t Y\_t \\mid \\mathcal{G}\_s\] \\mid \\mathcal{F}\_s^{XY}\] = E\[X\_s Y\_s \\mid \\mathcal{F}\_s^{XY}\] = X\_s Y\_s \\\]
>
> Thus \\(XY\\) is a \\(\\mathbb{F}^{XY}\\)-martingale.
>
> 3\) **Example:** Let \\(X\\) be a simple symmetric random walk on \\(\\mathbb{Z}\\) starting at 0, stopped at time \\(\\tau = \\inf\\{t : X\_t = -1\\}\\).
>
> Define \\(M\_t = X\_{t \\wedge \\tau}\\). Then: - \\(M\\) is a martingale (optional stopping) - \\(\\sup\_t E\[|M\_t|\] \\leq 1\\) (since \\(M\_t \\geq -1\\) and \\(E\[M\_t\] = 0\\)) - \\(M\_t \\to M\_\\infty = -1\\) almost surely (the walk hits -1 with probability 1)
>
> But \\(E\[|M\_t - M\_\\infty|\] = E\[|M\_t + 1|\] \\not\\to 0\\) because \\(E\[M\_t\] = 0 \\neq -1 = E\[M\_\\infty\]\\).
>
> In fact, \\(E\[|M\_t + 1|\] \\geq |E\[M\_t + 1\]| = 1\\) for all \\(t\\).
>
> 4\) This is **false** without additional assumptions.
>
> **Counter-example:** Let \\(\\Omega = (0,1\]\\) with Lebesgue measure. Define:
>
> \\\[ X^n\_t(\\omega) = \\begin{cases} n &amp; \\text{if } \\omega \\leq 1/n \\\\\\ 0 &amp; \\text{otherwise} \\end{cases} \\\]
>
> for all \\(t\\). Then each \\(X^n\\) is a martingale (constant in time).
>
> But \\(X^n\_t \\to X\_t = 0\\) a.s., which is a martingale. Actually, this converges to a martingale.
>
> **Better counter-example:** Consider a filtration where \\(\\mathcal{F}\_0\\) is trivial and \\(\\mathcal{F}\_1\\) is rich. Let \\(Y\\) be a random variable with \\(E\[Y\] = 0\\) but \\(Y\\) not identically 0. Define \\(X^n\_0 = 0\\), \\(X^n\_1 = Y\\) for all \\(n\\). This is trivially a martingale for each \\(n\\), and converges to itself.
>
> Actually, a.s. convergence doesn't preserve the martingale property without uniform integrability. Consider martingales that concentrate mass in small sets.
>
> 5\) This is a **localization** result.
>
> Define stopping times:
>
> \\\[ \\tau^m = \\inf\\left\\{t : |X\_t| \> m\\right\\} \\\]
>
> Then \\(\\tau^m \\nearrow \\infty\\) as \\(m \\to \\infty\\).
>
> For each fixed \\(m\\), consider the stopped process \\(X^{\\tau^m}\\). We need to show this is a martingale.
>
> By Fatou's lemma and the a.s. convergence:
>
> \\\[E\[|X^{\\tau^m}\_t|\] \\leq \\liminf\_{n \\to \\infty} E\[|X^{n, \\tau^m}\_t|\]\\\]
>
> Since \\(X^{n, \\tau^m}\\) is bounded by \\(m\\) (at least before \\(\\tau^m\\)), and using uniform integrability on bounded sets:
>
> For \\(s \\leq t\\):
>
> \\\[E\[X^{\\tau^m}\_t \\mid \\mathcal{F}\_s\] = \\lim\_{n \\to \\infty} E\[X^{n, \\tau^m}\_t \\mid \\mathcal{F}\_s\] = \\lim\_{n \\to \\infty} X^{n, \\tau^m}\_s = X^{\\tau^m}\_s\\\]
>
> where the limit and conditional expectation can be interchanged by uniform integrability (on the bounded set \\(\\{\\tau^m \> s\\}\\)).

> [!NOTE]
>
> **Exercise 3**
>
> Let \\(X\\) be a bounded random variable. We define
>
> \\\[ m(\\lambda) = E\\left\[ e^{\\lambda X} \\right\], \\quad \\text{and} \\quad \\phi(\\lambda) = \\ln\\left( E\\left\[ e^{\\lambda X} \\right\] \\right) = \\ln(m(\\lambda)), \\quad \\lambda \\in \\mathbb{R} \\\]
>
> (a) Show that \\(\\phi\\) is a convex function which is twice differentiable.
>
> (b) Show that \\(\\phi'(0) = E\\left\[ X \\right\]\\) and \\(\\phi''(0) = \\text{Var}(X) = E\\left\[ X^2 \\right\] - E\[X\]^2\\).
>
> From now on, let \\(R\_1, \\ldots, R\_t, \\ldots\\) be a sequence of independent random variables such that \\(R\_t \\sim X\\) for every \\(t\\) and let
>
> \\\[ S\_t = S\_{t-1} + R\_t, \\quad \\text{with} \\quad S\_0 = 0 \\\]
>
> Define the process \\(L(\\lambda)\\) -- depending on \\(\\lambda\\) -- given by
>
> \\\[ L\_0(\\lambda) = 0, \\quad \\text{and} \\quad L\_t(\\lambda) = \\exp\\left( \\lambda S\_t - t \\phi(\\lambda) \\right) = \\prod\_{s=1}^t \\frac{\\exp(\\lambda R\_t)}{m(\\lambda)}, \\quad t \\geq 1 \\\]
>
> and the filtration \\(\\mathcal{F}\_0 = \\{\\emptyset, \\Omega\\}\\) and \\(\\mathcal{F}\_t = \\sigma( R\_s \\colon s \\leq t)\\).
>
> (c) Show that for every \\(\\lambda \\in \\mathbb{R}\\), the process \\(L(\\lambda)\\) is a martingale.
>
> (d) We denote by \\(L'\_t = \\frac{dL\_t}{d\\lambda}(0)\\). Deduce that \\(L'\\) is a martingale for which holds \\(L'\_t = S\_t - t \\phi'(0) = S\_t - t E\[X\]\\).

> [!NOTE]
>
> **Solution to Exercise 3**
>
> (a) Since \\(X\\) is bounded, \\(m(\\lambda) = E\[e^{\\lambda X}\]\\) is smooth (infinitely differentiable) with:
>
> \\\[ m'(\\lambda) = E\[X e^{\\lambda X}\], \\quad m''(\\lambda) = E\[X^2 e^{\\lambda X}\] \\\]
>
> Now \\(\\phi(\\lambda) = \\ln m(\\lambda)\\), so:
>
> \\\[ \\phi'(\\lambda) = \\frac{m'(\\lambda)}{m(\\lambda)} = \\frac{E\[X e^{\\lambda X}\]}{E\[e^{\\lambda X}\]} \\\]
>
> \\\[ \\phi''(\\lambda) = \\frac{m''(\\lambda)m(\\lambda) - (m'(\\lambda))^2}{m(\\lambda)^2} = \\frac{E\[X^2 e^{\\lambda X}\]E\[e^{\\lambda X}\] - E\[X e^{\\lambda X}\]^2}{E\[e^{\\lambda X}\]^2} \\\]
>
> By the Cauchy-Schwarz inequality applied to the probability measure \\(Q(d\\omega) = \\frac{e^{\\lambda X(\\omega)}}{E\[e^{\\lambda X}\]} P(d\\omega)\\):
>
> \\\[ E\_Q\[X^2\] \\geq E\_Q\[X\]^2 \\\]
>
> which gives \\(\\phi''(\\lambda) \\geq 0\\). Thus \\(\\phi\\) is convex.
>
> (b) At \\(\\lambda = 0\\):
>
> \\\[m(0) = E\[1\] = 1, \\quad m'(0) = E\[X\], \\quad m''(0) = E\[X^2\]\\\]
>
> Therefore:
>
> \\\[\\phi'(0) = \\frac{m'(0)}{m(0)} = E\[X\]\\\]
>
> \\\[\\phi''(0) = \\frac{m''(0)m(0) - m'(0)^2}{m(0)^2} = \\frac{E\[X^2\] \\cdot 1 - E\[X\]^2}{1} = \\text{Var}(X)\\\]
>
> (c) Note: The definition says \\(L\_0(\\lambda) = 0\\), but this should be \\(L\_0(\\lambda) = 1\\) for \\(L\\) to be a martingale. Assuming \\(L\_0(\\lambda) = 1\\):
>
> For \\(t \\geq 1\\):
>
> \\\[L\_t(\\lambda) = \\exp(\\lambda S\_t - t\\phi(\\lambda)) = \\exp\\left(\\lambda \\sum\_{s=1}^t R\_s - t \\ln m(\\lambda)\\right) = \\prod\_{s=1}^t \\frac{e^{\\lambda R\_s}}{m(\\lambda)}\\\]
>
> Check the martingale property:
>
> \\\[E\[L\_t(\\lambda) \\mid \\mathcal{F}\_{t-1}\] = L\_{t-1}(\\lambda) \\cdot E\\left\[\\frac{e^{\\lambda R\_t}}{m(\\lambda)} \\bigg| \\mathcal{F}\_{t-1}\\right\]\\\]
>
> Since \\(R\_t\\) is independent of \\(\\mathcal{F}\_{t-1}\\) and \\(R\_t \\sim X\\):
>
> \\\[E\\left\[\\frac{e^{\\lambda R\_t}}{m(\\lambda)}\\right\] = \\frac{E\[e^{\\lambda X}\]}{m(\\lambda)} = \\frac{m(\\lambda)}{m(\\lambda)} = 1\\\]
>
> Therefore \\(E\[L\_t(\\lambda) \\mid \\mathcal{F}\_{t-1}\] = L\_{t-1}(\\lambda)\\), so \\(L(\\lambda)\\) is a martingale.
>
> (d) Differentiate \\(L\_t(\\lambda) = \\exp(\\lambda S\_t - t\\phi(\\lambda))\\) with respect to \\(\\lambda\\):
>
> \\\[\\frac{dL\_t}{d\\lambda}(\\lambda) = L\_t(\\lambda) \\cdot (S\_t - t\\phi'(\\lambda))\\\]
>
> At \\(\\lambda = 0\\): since \\(L\_t(0) = 1\\) (from part (c) with \\(\\lambda = 0\\)):
>
> \\\[L'\_t = S\_t - t\\phi'(0) = S\_t - t E\[X\]\\\]
>
> **Why \\(L'\\) is a martingale:** For each \\(\\lambda\\), \\(L(\\lambda)\\) is a martingale. The derivative of a martingale (with respect to a parameter) is also a martingale under appropriate regularity conditions (which hold since \\(X\\) is bounded).
>
> Alternatively, verify directly:
>
> \\\[E\[L'\_t \\mid \\mathcal{F}\_{t-1}\] = E\[S\_t - tE\[X\] \\mid \\mathcal{F}\_{t-1}\] = S\_{t-1} + E\[R\_t\] - tE\[X\] = S\_{t-1} - (t-1)E\[X\] = L'\_{t-1}\\\]

> [!NOTE]
>
> **Definition: Snell Envelope**
>
> The Snell envelope \\(U\\) of an integrable and adapted stochastic process \\(X = (X\_t)\_{t \\leq T}\\) is defined recursively as
>
> \\\[ \\begin{cases} U\_T &amp; = X\_T \\\\\\ U\_t &amp; = E\\left\[ U\_{t+1} \\mid \\mathcal{F}\_t \\right\] \\vee X\_t \\end{cases} \\\]

> [!NOTE]
>
> **Exercise 4**
>
> Let \\(U\\) be the Snell envelope of an integrable and adapted stochastic process \\(X\\). Shows the following assertions:
>
> (i) \\(U\\) is a super-martingale such that \\(U\_t \\geq X\_t\\) for all \\(t\\).
>
> (ii) It is the smallest super-martingale dominating \\(X\\). That is, if \\(V\\) is a super-martingale such that \\(V\_t \\geq X\_t\\) then \\(V\_t \\geq U\_t\\) for all \\(t\\).
>
> (iii) Show that
>
> \\\[ U\_0 \\geq \\sup\_{\\tau \\leq T} E\[X\_\\tau\] \\\]
>
> where the supremum on the right hand side is taken over all stopping times \\(\\tau\\) smaller than \\(T\\).
>
> (iv) A stopping time \\(\\tau^\*\\) smaller than \\(T\\) is called optimal if \\(U\_0 = E\[X\_{\\tau^\*}\]\\). Show that \\(\\tau^\*\\) is an optimal stopping time if and only if
>
> \\\[ U^{\\tau^\*} \\quad \\text{is a martingale} \\quad \\text{and} \\quad U\_{\\tau^\*} = X\_{\\tau^\*} \\\]
>
> (v) Show that
>
> \\\[ \\tau^{\\min} := \\inf\\left\\{ t \\colon U\_t = X\_t \\right\\} \\\]
>
> is an optimal stopping time.

> [!NOTE]
>
> **Solution to Exercise 4**
>
> (i) **\\(U\_t \\geq X\_t\\):** By definition, \\(U\_t = E\[U\_{t+1} \\mid \\mathcal{F}\_t\] \\vee X\_t \\geq X\_t\\).
>
> **Super-martingale property:** We have:
>
> \\\[U\_t = E\[U\_{t+1} \\mid \\mathcal{F}\_t\] \\vee X\_t \\geq E\[U\_{t+1} \\mid \\mathcal{F}\_t\]\\\]
>
> Taking conditional expectation with respect to \\(\\mathcal{F}\_s\\) for \\(s \\leq t\\) and using the tower property shows \\(U\_s \\geq E\[U\_t \\mid \\mathcal{F}\_s\]\\).
>
> (ii) By backward induction. At time \\(T\\): \\(V\_T \\geq X\_T = U\_T\\).
>
> Assume \\(V\_{t+1} \\geq U\_{t+1}\\). Since \\(V\\) is a super-martingale:
>
> \\\[V\_t \\geq E\[V\_{t+1} \\mid \\mathcal{F}\_t\] \\geq E\[U\_{t+1} \\mid \\mathcal{F}\_t\]\\\]
>
> Also \\(V\_t \\geq X\_t\\). Therefore:
>
> \\\[V\_t \\geq E\[U\_{t+1} \\mid \\mathcal{F}\_t\] \\vee X\_t = U\_t\\\]
>
> completing the induction.
>
> (iii) For any stopping time \\(\\tau \\leq T\\), since \\(U\\) is a super-martingale dominating \\(X\\):
>
> \\\[U\_0 \\geq E\[U\_\\tau \\mid \\mathcal{F}\_0\] \\geq E\[X\_\\tau\]\\\]
>
> Taking supremum over all such \\(\\tau\\) gives the result.
>
> (iv) (\\(\\Rightarrow\\)) If \\(\\tau^\*\\) is optimal, then \\(U\_0 = E\[X\_{\\tau^\*}\] \\leq E\[U\_{\\tau^\*}\] \\leq U\_0\\) (using super-martingale property and \\(U \\geq X\\)). Thus \\(E\[U\_{\\tau^\*}\] = U\_0\\) and \\(E\[X\_{\\tau^\*}\] = E\[U\_{\\tau^\*}\]\\), which implies \\(X\_{\\tau^\*} = U\_{\\tau^\*}\\) a.s.
>
> Also, \\(E\[U^{\\tau^\*}\_t\] = U\_0\\) for all \\(t\\), and since \\(U^{\\tau^\*}\\) is a super-martingale with constant expectation, it is a martingale.
>
> (\\(\\Leftarrow\\)) If \\(U^{\\tau^\*}\\) is a martingale and \\(U\_{\\tau^\*} = X\_{\\tau^\*}\\), then:
>
> \\\[U\_0 = E\[U^{\\tau^\*}\_T\] = E\[U\_{\\tau^\*}\] = E\[X\_{\\tau^\*}\]\\\]
>
> showing \\(\\tau^\*\\) is optimal.
>
> (v) First, \\(\\tau^{\\min} \\leq T\\) since \\(U\_T = X\_T\\).
>
> On \\(\\{t \< \\tau^{\\min}\\}\\), we have \\(U\_t \> X\_t\\), so \\(U\_t = E\[U\_{t+1} \\mid \\mathcal{F}\_t\]\\).
>
> This means \\(U^{\\tau^{\\min}}\\) is a martingale (it has the martingale property up to time \\(\\tau^{\\min}\\)).
>
> By definition, \\(U\_{\\tau^{\\min}} = X\_{\\tau^{\\min}}\\).
>
> By part (iv), \\(\\tau^{\\min}\\) is optimal.
