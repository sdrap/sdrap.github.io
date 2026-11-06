# Martingales and Doob's Optional Sampling

## Martingales

> [!NOTE]
>
> **Definition: Martingale (Sub/Super)**
>
> A stochastic process \\(X\\) is called a **martingale** if:
>
> 1. \\(X\\) is adapted;
> 2. \\(X\\) is integrable, that is, \\(X\_t\\) is integrable for every \\(t\\);
> 3. \\(X\_s=E\[X\_t\\,|\\, \\mathcal{F}\_s\]\\) whenever \\(s\\leq t\\).
>
> A process \\(X\\) is called a **super-martingale** if instead of (3) we require:
>
> 3'. \\(X\_s\\geq E\[X\_t\\,|\\, \\mathcal{F}\_s\]\\) whenever \\(s\\leq t\\).
>
> A process \\(X\\) is called a **sub-martingale** if instead of (3) we require:
>
> 3''. \\(X\_s\\leq E\[X\_t\\,|\\, \\mathcal{F}\_s\]\\) whenever \\(s\\leq t\\).

> [!NOTE]
>
> **Remark**
>
> Note that a martingale is, in particular, both a super-martingale and a sub-martingale at the same time.
>
> Note that since we are working in discrete time, the martingal (sub/super) property can be checked only on each increment, that is \\(E\[\\Delta X\_t |\\mathcal{F}\_{t-1}\]=E\[X\_t - X\_{t-1}|\\mathcal{F}\_{t-1}\] =0\\).

> [!NOTE]
>
> **Example**
>
> - Given and integrable random variable \\(\\xi\\), the process \\(X = (E\[\\xi|\\mathcal{F}\_t\])\\) defines a martingale.
> - Consider the random walk \\(S\\) from the example in the previous section. show that
>
>   - \\(p=1/2\\), then \\(S\\) is a martingale;
>   - \\(p\\geq 1/2\\), then \\(S\\) is a sub-martingale;
>   - \\(p\\leq 1/2\\), then \\(S\\) is a super-martingale.

> [!NOTE]
>
> **Proposition**
>
> Let \\(X\\) be an adapted process and \\(\\varphi:\\mathbb{R}\\to \\mathbb{R}\\) be a measurable function such that \\(\\varphi(X\_t)\\) is integrable for every \\(t\\).
>
> - If \\(X\\) is a martingale and \\(\\varphi\\) is convex, then \\(Y=(\\varphi(X\_t))\\) is a sub-martingale.
> - If \\(X\\) is a martingale and \\(\\varphi\\) is concave, then \\(Y=(\\varphi(X\_t))\\) is a super-martingale.
> - If \\(X\\) is a sub-martingale and \\(\\varphi\\) is convex and increasing, then \\(Y=(\\varphi(X\_t))\\) is a sub-martingale.

> [!NOTE]
>
> **Proof**
>
> Since a process \\(Y\\) is a sub-martingale if and only if \\(-Y\\) is a super-martingale, and \\(\\varphi\\) is convex if and only if \\(-\\varphi\\) is concave, we only need to prove the first point to get the second. Clearly, \\(Y\\) is adapted. By assumption, \\(Y\_t\\) is integrable for every \\(t\\). Finally, using Jensen's inequality for conditional expectation and the martingale property \\(X\_s=E\[X\_t|\\mathcal{F}\_s\]\\), it follows that:
>
> \\\[ E\[Y\_t|\\mathcal{F}\_s\]=E\[\\varphi(X\_t)|\\mathcal{F}\_s\]\\geq \\varphi(E\[X\_t|\\mathcal{F}\_s\])=\\varphi(X\_s)=Y\_s. \\\]
>
> If \\(X\\) is a sub-martingale and \\(\\varphi\\) is convex and increasing, then:
>
> \\\[ E\[Y\_t|\\mathcal{F}\_s\]=E\[\\varphi(X\_t)|\\mathcal{F}\_s\]\\geq \\varphi(E\[X\_t|\\mathcal{F}\_s\])\\geq \\varphi(X\_s)=Y\_s, \\\]
>
> showing the sub-martingale property and therefore proving the third point.

Clearly the notion of martingale is very minimal. A martingale can be seen as a *noise* process (in a vague sense) in so far that it moves in any possible direction but in average like now. Sup-martingale are trending downwards while sub-martingales are trending upwards. This intuitive notion and the centrality of this fact can be inspected in the following Doob Meyer Theorem.

> [!NOTE]
>
> **Theorem: Doob Meyer Decomposition**
>
> Let \\(X\\) be an adapted and integrable process. Then there exists a unique decomposition:
>
> \\\[ X=M+A, \\\]
>
> where \\(M\\) is a martingale and \\(A\\) is a predictable process with \\(A\_0=0\\). This decomposition is called the *Doob decomposition*.
>
> Furthermore, \\(X\\) is a sub-martingale or super-martingale if and only if \\(A\\) is increasing or decreasing respectively.

> [!NOTE]
>
> **Proof**
>
> Assume that we had such a decomposition, then it follows that \\(M = X - A\\) is a martingale. By the martingale property and predictability of \\(A\\) we get
>
> \\\[ 0= E\[\\Delta M\_{t+1}|\\mathcal{F}\_t\] = E\[\\Delta X\_{t+1}|\\mathcal{F}\_t\] - E\[\\Delta A\_{t+1}|\\mathcal{F}\_t\] = E\[\\Delta X\_{t+1}|\\mathcal{F}\_t\] -(A\_{t+1} - A\_t) \\\]
>
> This provides us a recursive way to define \\(A\\) as follows
>
> \\\[ \\begin{equation\*} \\begin{cases} A\_0 &amp;= 0\\\\ A\_t &amp;=A\_{t-1}+ E\[X\_t-X\_{t-1}|\\mathcal{F}\_{t-1}\] \\quad \\text{for}\\quad t\\geq 1 \\end{cases} \\end{equation\*} \\\]
>
> It is immediate to check by induction that \\(A\\) is predictable and by definition \\(M:=X - A\\) is a martingale providing the decomposition.
>
> As for the uniqueness, let \\(X = M+A = \\tilde{M}+\\tilde{A}\\) where \\(M\\) and \\(\\tilde{M}\\) are martingales and \\(A\\) and \\(\\tilde{A}\\) are predictable processes starting at \\(0\\). It follows that \\(M - \\tilde{M} = \\tilde{A}-A\\) is a predictable martingale. Hence by martingale property and then predictability it holds that \\(M\_{t\_1}-\\tilde{M}\_{t-1} = E\[M\_t - \\tilde{M}\_{t} |\\mathcal{F}\_{t-1}\] = M\_t - \\tilde{M}\_{t}\\) showing that
>
> \\\[ M\_t - \\tilde{M}\_{t} = M\_{t-1} - \\tilde{M}\_{t-1} = \\cdots = M\_0 - \\tilde{M}\_0 = \\tilde{A}\_0 - A\_0 = 0 \\\]
>
> We deduce that \\(M=\\tilde{M}\\) and \\(A = \\tilde{A}\\).
>
> The assertions about super and sub martingales are immediate to get.

## Stochastic integration with respect to a martingale

> [!NOTE]
>
> **Doob's Optional Sampling Theorem, Modern Version**
>
> Let \\(H\\) be a predictable process. The following holds true:
>
> 1. If \\(X\\) is a martingale and \\(H\\bullet X\_t\\) is integrable for every \\(t\\), then \\(H\\bullet X\\) is a martingale.
> 2. If \\(X\\) is a super-martingale or sub-martingale, \\(H\\geq 0\\), and \\(H\\bullet X\_t\\) is integrable for every \\(t\\), then \\(H\\bullet X\\) is a super-martingale or sub-martingale.

> [!NOTE]
>
> **Proof**
>
> Suppose that \\(X\\) is a martingale and \\(H\\) is such that \\(H\\bullet X\\) is integrable. Adaptiveness is immediate. From \\(H\\) being predictable, that is, \\(H\_{t+1}\\) is \\(\\mathcal{F}\_t\\)-measurable, and \\(X\\) being a martingale, that is, \\(E\[X\_{t+1}-X\_t|\\mathcal{F}\_t\]=E\[X\_{t+1}|\\mathcal{F}\_t\]-X\_t=0\\), it follows that:
>
> \\\[ E\\left\[ \\Delta H\\bullet X\_{t+1}|\\mathcal{F}\_t \\right\]=E\\left\[ H\_{t+1} \\Delta X\_{t+1}|\\mathcal{F}\_t \\right\]= H\_{t+1}E\\left\[ \\Delta X\_{t+1}|\\mathcal{F}\_t \\right\]= 0. \\\]
>
> The argument in the sub-martingale case is similar, using the fact that \\(H\_{t+1}\\geq 0\\) and \\(E\[X\_{t+1}-X\_t|\\mathcal{F}\_t\]=E\[X\_{t+1}|\\mathcal{F}\_t\]-X\_t\\geq 0\\) and similarly for the super-martingale case.

> [!NOTE]
>
> **Remark**
>
> Note that in this theorem, if there exists a constant \\(C\>0\\) such that \\(|H\_t|\<C\\) for every \\(t\\), then \\(H\\bullet X\_t\\) is integrable for every \\(t\\) as soon as \\(X\\) is integrable. Indeed,
>
> \\\[ E\\left\[ |H\\bullet X\_t| \\right\]\\leq E\\left\[ |H\_0 X\_0| \\right\]+\\sum\_{s=1}^tE\\left\[ |H\_t||X\_{t}-X\_{t-1}| \\right\]\\leq 2C\\sum\_{s=0}^t E\[|X\_t|\]\<\\infty. \\\]
>
> So the assumption that \\(|H\\bullet X\_t|\\) is integrable for every \\(t\\) can be replaced by \\(H\\) being uniformly bounded.

This remark allows us to formulate the original Doob's sampling theorem.

> [!NOTE]
>
> **Doob's Optional Sampling Theorem**
>
> Let \\(X\\) be a (super/sub-)martingale and \\(\\tau\\) a stopping time. Then \\(X^\\tau\\) is a (super/sub-)martingale.

> [!NOTE]
>
> **Proof**
>
> Let \\(\\tau\\) be a stopping time. It holds that \\(X^\\tau=H\\bullet X\\) for the process \\(H=1\_{\\{\\cdot \\leq \\tau\\}}\\).  
> However, \\(H\\) is predictable, uniformly bounded since \\(|H\_t|\\leq 1\\), and positive. By the property of the stochastic integral \\(1\_{\\{\\cdot \\leq \\tau\\}}\\bullet X = X^\\tau\\). Hence, according to Doob's optional sampling theorem (modern version), it follows that \\(X^\\tau\\) is a (super/sub-)martingale.

> [!NOTE]
>
> **Proposition**
>
> If \\(X\\) is a martingale or sub-martingale, then:
>
> \\\[ E\[X\_\\tau \\,|\\, \\mathcal{F}\_\\sigma\]=X\_{\\sigma} \\quad \\text{or} \\quad E\[X\_\\tau \\,|\\, \\mathcal{F}\_\\sigma\]\\geq X\_{\\sigma}, \\\]
>
> respectively, for every pair of bounded stopping times \\(\\sigma\\leq \\tau \\leq T\\) for some \\(T\\).

> [!NOTE]
>
> **Proof**
>
> Since \\(\\tau \\leq T\\) for some \\(T\\), it follows that:
>
> \\\[ \\left\\vert X\_\\tau \\right\\vert\\leq \\left\\vert X\_0\\right\\vert+\\cdots +\\left\\vert X\_t\\right\\vert. \\\]
>
> Thus, \\(X\_\\tau\\) is integrable. Furthermore, \\(X^\\tau\\) is a martingale from Doob's optional sampling theorem and \\(X^\\tau\_T = X\_\\tau\\). For \\(A \\in \\mathcal{F}\_{\\sigma}\\), it holds that \\(A\\cap \\{\\sigma=s\\}\\) is an event in \\(\\mathcal{F}\_s\\). Hence,
>
> \\\[ E\\left\[ (X\_{t}-X\_{\\sigma})1\_{A} \\right\] =\\sum\_{s\\leq k}E\\left\[ (X\_{t}-X\_{s})1\_{A\\cap \\{\\sigma =s\\}} \\right\]=\\sum\_{s\\leq k}E\\left\[ E\\left\[X\_{t}-X\_{s}\\,|\\, \\mathcal{F}\_{s}\\right\]1\_{A\\cap \\{\\sigma =s\\}} \\right\]=0, \\\]
>
> showing that \\(E\[X\_t\\,|\\, \\mathcal{F}\_{\\sigma}\]=X\_{\\sigma}\\). Applying this to the stopped process \\(X^\\tau\\) yields the result. The proof in the sub-martingale case follows the same argumentation.
