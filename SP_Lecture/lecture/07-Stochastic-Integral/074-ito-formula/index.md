# Itô's Formula

This Section is dedicated to the celebrated Itô's Formula. To begin with, let us state a result about an analogue to Lebesgue's dominated convergence for stochastic integral.

> [!NOTE]
>
> **Proposition: Lebegue's Stochastic Dominated Convergence**
>
> Let \\(X\\) be a semi-martingale. For \\((H^n)\\) sequence in \\(\\mathcal{L}^{loc}(X)\\) converging point-wise to \\(0\\), if \\(\\left\\vert H^n\\right\\vert\\leq H\\) for \\(H \\in \\mathcal{L}^{loc}(X)\\), then it follows that \\(\\int\_{}^{} H^n d X \\to 0\\) in ucp.
>
> In particular, if \\(H\\) is a continuous adapted process, then, \\(\\int\_{}^{} H^n d X\\) converges uniformly in probability on \\(\[0,t\]\\) to \\(\\int\_{}^{} HdX\\) for \\(H^n=H\_0+\\sum H\_{t^n\_{k-1}}1\_{(t\_{k-1}^n,t^n\_{k}\]}\\) and for a subdivision \\(\\Pi^n=\\{0=t\_0^n\< \\cdots\< t\_{k\_n}^n\\nearrow \\infty\\}\\) whose mesh is converging to \\(0\\).

> [!NOTE]
>
> **Proof**
>
> Let \\(X=M+A\\). It is enough to show the convergence to zero uniformly on compact in probability for both \\(\\int\_{}^{} H^n dM\\) and \\(\\int\_{}^{} H^ndA\\). Defining \\(\\tau^m = \\inf\\{t \\colon |M\_t|\>m \\text{ or }\\int\_{0}^{t} |H| d|A| \>m \\text{ or } \\int\_{0}^{t} H^2 d\\langle M\\rangle \>m\\}\\) provides a localizing sequence of stopping times. Hence according to the localization's Lemma, we may show the theorem by assuming that \\(M\\), \\(\\int |H| d|A|\\) and \\(\\int H^2 d\\langle M\\rangle\\) are all uniformly bounded. By the fact that \\(|H^n|\\leq H\\), the same holds uniformly for \\(\\int\_{}^{} |H^n| d|A|\\) and \\(\\int\_{}^{} (H^n)^2 d\\langle M\\rangle\\). By Lebesgue's dominated convergence and Itô's isometry, it follows that
>
> \\\[ \\begin{equation\*} \\int\_{0}^{t}H^n dM \\xrightarrow\[ n\\to \\infty\]{L^2}0 \\quad \\text{and} \\quad \\int\_{0}^{t}H^n dA \\xrightarrow\[ \\to \\infty\]{L^1} 0 \\end{equation\*} \\\]
>
> From Doob's maximal inequalities, follows that \\(\\sup\_{s\\leq t}(\\int\_{0}^{s}H^n dM)^2 \\to 0\\) in \\(L^1\\) and therefore \\(P\\)-almost surely. Since \\(|\\int\_{0}^{s}H^n dA|\\leq \\int\_{0}^{s}|H^n|d|A|\\leq \\int\_{0}^{t}|H^n|d|A|\\to 0\\) in \\(L^1\\), it follows that \\(\\sup\_{s\\leq t}\\int\_{0}^{s}H^n dA\\to 0\\) \\(P\\)-almost surely, hence in probability for every \\(t\\), ending the proof.

> [!NOTE]
>
> **Theorem: Product Rule**
>
> Let \\(X\\) and \\(Y\\) be semi-martingales, then it holds
>
> \\\[ \\begin{equation} \\begin{split} XY&amp;=X\_0Y\_0+\\int XdY+\\int YdX+\\int d\\langle X,Y\\rangle\\\\ &amp;=X\_0Y\_0+\\int XdY+\\int YdX+\\langle X,Y\\rangle \\end{split} \\end{equation} \\\]
>
> In particular
>
> \\\[ \\begin{equation}\\tag{\*} \\begin{split} X^2&amp;=X\_0+2\\int X dX+\\int d\\langle X\\rangle=X\_0+2\\int X dX+\\langle X\\rangle \\end{split} \\end{equation} \\\]
>
> Furthermore, for any \\(n\\geq 2\\) it holds
>
> \\\[ X^n = X\_0^n + \\int n X^{n-1}dX + \\frac{1}{2}\\int n(n-1)X^{n-2}d\\langle X \\rangle \\\]

> [!NOTE]
>
> **Proof**
>
> Note that from the polar relation \\(XY=((X+Y)^2-(X-Y)^2)/4\\) and the linearity of the relation (*), it is enough to show (*). Let \\((\\Pi^n)\\) be a sequence of subdivisions whose mesh is converging to \\(0\\). It follows that
>
> \\\[ \\begin{equation\*} \\begin{split} X^2-X\_0^2 &amp; = 2\\sum X\_{t\_{k-1}}\\left( X\_{t\_k\\wedge t}-X\_{t\_{k-1}\\wedge t} \\right)+ \\sum \\left( X\_{t\_{k}\\wedge t}-X\_{t\_{k-1}\\wedge t} \\right)^2\\\\ &amp; = 2\\int\_{}^{} X^n dX+\\left\[ X \\right\]^{\\Pi^n} \\end{split} \\end{equation\*} \\\]
>
> where \\(X^n=X\_0+\\sum X\_{t\_{k-1}}1\_{(t\_{k-1},t\_k\]}\\). Since \\(X\\) is continuous, according to Lebesgue's stochastic dominated convergence, it follows that \\(2\\int X^n dX\\to 2\\int\_{}^{}X dX\\) in ucp. On the other hand, according to the quadratic variation proposition, it holds that \\(\[X\]^{\\Pi^n}\\to \\langle X\\rangle\\) in ucp. Hence, up to a rapid subsequence, we get the result point-wise.
>
> We show per induction on \\(n\\geq 2\\) the product formula. For \\(n=2\\), this is the previous result. Assume that it holds for any \\(m \\leq n\\) and we show it for \\(n\\geq 3\\). Define \\(Y = X^{n-1}\\). According to the product rule it holds
>
> \\\[ X^n = XY = X\_0^n + \\int X dX^{n-1} + \\int X^{n-1}dX + \\langle X, Y\\rangle \\\]
>
> However by induction assumption it holds
>
> \\\[ \\begin{align\*} \\int XdX^{n-1} &amp; = \\int Xd\\left( X\_0+(n-1)\\int X^{n-2}dX+\\frac{(n-1)(n-2)}{2}\\int X^{n-3}d\\langle X\\rangle \\right)\\\\ &amp; = (n-1)\\int X^{n-1}dX+\\frac{(n-1)(n-2)}{2}\\int X^{n-2}d\\langle X\\rangle \\end{align\*} \\\]
>
> and since the covariation where one of the process is of bounded variation is \\(0\\), for the covariation we get
>
> \\\[ \\begin{align\*} \\langle X,X^{n-1}\\rangle&amp;=\\left\\langle X,X\_0+(n-1)\\int X^{n-2}dX+\\frac{(n-1)(n-2)}{2}\\int X^{n-3}d\\langle X\\rangle\\right\\rangle\\\\ &amp; = (n-1)\\langle \\int dX, \\int X^{n-2}dX \\rangle\\\\ &amp;=(n-1)\\int\_{}^{}X^{n-2}d\\langle X\\rangle. \\end{align\*} \\\]
>
> Substituting these two relations in the product formula yields the result.

> [!NOTE]
>
> **Remark**
>
> Note that a similar proof also shows
>
> \\\[ \\begin{align} X^nY^m &amp; = X\_0^nY\_0^m+n\\int\_{}^{}X^{n-1}Y^m dX+m\\int X^nY^{m-1}dY\\\\ &amp; \\quad \\quad \\quad +\\frac{n(n-1)}{2}\\int\_{}^{} X^{n-2}Y^m d\\langle X\\rangle+nm\\int\_{}^{} X^{n-1}Y^{m-1}d\\langle X,Y\\rangle+\\frac{m(m-1)}{2}\\int\_{}^{} X^{n}Y^{m-2}d\\langle Y\\rangle \\end{align} \\\]

The product rule formula can immediately be reformulated into Ito's formula.

> [!NOTE]
>
> **Theorem**
>
> Let \\(X\\) and \\(Y\\) be semi-martingale, and \\(f:\\mathbb{R}^2\\to \\mathbb{R}\\) be a twice continuously differentiable function.
>
> Then it holds
>
> \\\[ \\begin{align} f(X,Y) &amp; = f(X\_0,Y\_0)+\\int\_{}^{}\\partial\_x f(X,Y)dX+\\int\_{}^{} \\partial\_y f(X,Y) dY \\\\ &amp; \\quad \\quad \\quad +\\frac{1}{2}\\int\_{}^{} \\partial\_{xx} f(X,Y)d\\langle X\\rangle +\\int\_{}^{} \\partial\_{xy}f(X,Y)\\langle X,Y\\rangle+\\frac{1}{2}\\int\_{}^{} \\partial\_{yy}f(X,Y) d\\langle Y\\rangle \\end{align} \\\]
>
> In particular, if \\(f\\) only depends on \\(x\\), we get the more classical version
>
> \\\[ \\begin{equation} f(X)=f(X\_0)+\\int\_{}^{} f^\\prime (X)dX+\\frac{1}{2}\\int\_{}^{} f^{\\prime\\prime}(X)d\\langle X\\rangle \\end{equation} \\\]

> [!NOTE]
>
> **Proof**
>
> Obviously, Itô's formula holds in the case where \\(f(x,y) = x^n y^m\\) and by linearity for any multivariate polynomials \\(f(x,y) = \\sum\_{0\\leq n\\leq N, 0\\leq m\\leq M} a\_{n,m} x^n y^m\\). We will show the unidimensional case, the argumentation for the two or \\(n\\)-dimensional case is just a simple adaptation of the argumentation. Note that by localization, we can show the statement for \\(X\\) uniformly bounded by \\(K\\). We denote by \\(\\|\\cdot \\|\_{K}\\) the supremum norm on \\(\[-K, K\]\\). By density of polynomials in the set of \\(C^2\\) functions on compact, for any \\(n\\) we can find a polynomial \\(P\_n\\) such that
>
> \\\[ \\left\\Vert P\_n-f\\right\\Vert\_K+\\left\\Vert P^\\prime -f^\\prime\\right\\Vert\_K+\\left\\Vert P^{\\prime\\prime}-f^{\\prime \\prime}\\right\\Vert\_K\<1/n \\\]
>
> It follows that
>
> \[ \\begin{aligned}

&amp; \\left|f(X) - f(X\_0) - \\int f^\\prime(X)dx - \\frac{1}{2}\\int f^{\\prime\\prime}(X) d\\langle X\\rangle\\right| \\ &amp; \\leq \\left| f(X) - P\_n(X)\\right| + \\left|f(X\_0) - P\_n(X\_0)\\right| + \\left|\\int \\left( f^\\prime(X) - P\_n^\\prime(X) \\right)dX\\right| + \\int \\left| f^{\\prime\\prime}(X) - P\_n^{\\prime\\prime}(X)\\right| d\\langle X\\rangle \\end{aligned} \]

```text
The first two differences can be made arbitrarily small.
As for the stochastic integral difference, the uniform convergence on compact in probability follows from Lebesgue's stochastic dominated convergence.
Hence, up to a rapid subsequence, we have almost sure convergence.
Finally the Lebesgues-Stieltjes integral converges to $0$ due to Lebesgues' dominated convergence.
```

Ito's formula as we will see later is the door to stochastic differential equations as well as the link between stochastic analysis and partial differential equations. Note that we often use the differential notation

\\\[ \\begin{align\*} df(X) &amp; = f^\\prime(X) dX + \\frac{1}{2}f^\\prime\\prime(X) d \\langle X \\rangle\\\\ &amp; = f^\\prime dX + \\frac{1}{2}f^{\\prime\\prime}d\\langle X\\rangle\\\\ df(X,Y) &amp; = \\partial\_x f(X,Y)dX + \\partial\_y f(X,Y) dY \\\\ &amp; \\quad \\quad \\quad + \\frac{1}{2}\\partial\_{xx}f(X,Y)d \\langle X \\rangle + \\partial\_{xy}f(X,Y)d \\langle X,Y \\rangle + \\frac{1}{2}\\partial\_{yy}f(X,Y)d \\langle Y\\rangle\\\\ &amp; = \\partial\_x f dX + \\partial\_y fdY + \\frac{1}{2}\\partial\_{xx} f d\\langle X\\rangle +\\partial\_{xy}f d\\langle X,Y\\rangle + \\frac{1}{2}\\partial\_{yy}f d\\langle Y \\rangle \\end{align\*} \\\]

Note also that by taking \\(Y\_t = t\\) which is a semi-martingale without local martingale term where \\(dY = dt\\) and \\(d\\langle Y\\rangle = d\\langle X, Y\\rangle =0\\) we obtain a very common version of Itô's formula for \\(f:\[0, \\infty)\\times \\mathbb{R} \\to \\mathbb{R}\\) which is \\(C^{1,2}\\) as follows

\\\[ df(t, X) = \\partial\_t f dt + \\partial\_x f dX + \\frac{1}{2}\\partial\_{xx} f d\\langle X\\rangle \\\]

> [!NOTE]
>
> **Example**
>
> Let us have a look at a classical situation that provides a hint as to the relation between PDEs and Stochastics. Let \\(\\mu, \\sigma \\colon \\mathbb{R}\\to \\mathbb{R}\\) be two smooth functions and suppose that there exists a semi martingale \\(X\\) such that
>
> \\\[ X = X\_0 + \\int \\mu(X) dt + \\int \\sigma(X) dW \\\]
>
> where \\(W\\) is the Brownian motion. In other terms, \\(X\\) solves the stochastic differential equation
>
> \\\[ dX = \\mu(X) dt +\\sigma(X) dW \\\]
>
> Note that
>
> \\\[ d\\langle X\\rangle = \\sigma^2(X)d\\langle W\\rangle = \\sigma^2(X)dt \\\]
>
> Given a \\(C^{1,2}\\) function \\(u \\colon \[0, \\infty) \\times \\mathbb{R}\\), using Itô's formula we get
>
> \\\[ \\begin{align\*} du(t, X\_t) &amp; = \\partial\_t u(t, X\_t)dt + \\partial\_x u(t, X\_t)dX\_t + \\frac{1}{2}\\partial\_{xx}u(t, X\_t)d\\langle X\\rangle\_t\\\\ &amp; = \\partial\_t u(t, X\_t)dt +\\partial\_x u(t, X\_t)\\left(\\mu(X\_t)dt + \\sigma(X\_t)dW\_t\\right) + \\frac{\\sigma^2(X\_t)}{2}\\partial\_{xx}u(t, X\_t) dt\\\\ &amp; = \\left(\\partial\_t +\\underbrace{\\mu(X\_t)\\partial\_x +\\frac{\\sigma^2(X\_t)}{2}\\partial\_{xx}}\_{=: \\mathcal{L}^X(X\_t)}\\right)u(t, X\_t)dt + \\sigma(X\_t)\\partial\_x u(t, X\_t)dW \\end{align\*} \\\]
>
> Defining the differential operator \\(\\mathcal{L}^X(x)\\) — also called **infinitesimal generator** of \\(X\\) — on \\(C^{1,2}\\) functions \\(f\\):
>
> \\\[ \\mathcal{L}^X(x) f(t, x) := \\mu(x)\\partial\_x f(t,x) + \\frac{\\sigma^2(x)}{2}\\partial\_{xx}f(t,x) \\\]
>
> We can rewrite the result of the Itô's formula as follows
>
> \\\[ du = \\underbrace{\\left(\\partial\_t + \\mathcal{L}^X\\right) u dt}\_{\\text{Bounded variations}} + \\underbrace{\\sigma \\partial\_x u dW}\_{\\text{Local martingale}} \\\]
>
> Suppose that \\(u\\) is in particular a solution of the following PDE
>
> \\\[ \\begin{equation\*} \\begin{cases} \\begin{aligned} \\partial\_t u(t, x) + \\mathcal{L}^X(x) u(t, x) &amp; = 0\\\\ \\\\ u(0, x) &amp; = X\_0 \\end{aligned} \\end{cases} \\end{equation\*} \\\]
>
> then it follows that
>
> \\\[ du = \\left(\\partial\_t + \\mathcal{L}^X\\right) u dt +\\sigma \\partial\_x u dW = \\sigma \\partial\_x dW \\\]
>
> and therefore \\(u(t, X\_t)\\) is a local martingale.

> [!NOTE]
>
> **Example: Financial Market**
>
> The financial market is modeled by a bank account \\(B\\) and stock prices \\(S\\). To simplify, we consider that we only have one stock price. Hereby \\(B\_t\\) represents the value at time \\(t\\) of one RMB at time \\(t\\) after interest rate and \\(S\_t\\) represents the value of the stock price at time \\(t\\). The most simple model of dynamic evolution of the bank account and the stock price are given by the stochastic differential equations
>
> \\\[ \\begin{equation} dB=r B dt\\text{, with }B\_0=1 \\quad \\text{and}\\quad dS=S(\\mu dt+\\sigma dW)\\text{, with }S\_0\>0 \\end{equation} \\\]
>
> where \\(r\\) represents the evolution of the interest rate in the bank and \\(\\mu\\) and \\(\\sigma\>0\\) represent the drift and volatility of the stock price respectively. The basic intuition behind these stochastic evolutions is that over a small interval \\(\[t,t+\\Delta\]\\) for a value \\(B\_t\\) on the bank account, the bank will pay out an interest \\(r\_t\\) so that after \\(\\Delta\\) amount of time you will own \\(B\_t(1+r\_t \\Delta)\\). In other terms, the value of the bank account evolves like
>
> \\\[ B\_{t+\\Delta}=B\_t(1+r\_t \\Delta) \\quad \\text{that is}\\quad B\_{t+\\Delta}-B\_t=r\_t B\_t \\Delta \\\]
>
> As for the stock price, if we denote \\(R\_{t+\\Delta}=(S\_{t+\\Delta}-S\_t)/S\_t\\) the returns of the stock over a small interval, it holds \\(S\_{t+\\Delta}=S\_{t}(1+R\_{t+\\Delta})\\) or \\((S\_{t+\\Delta}-S\_t)=S\_tR\_{t+\\Delta}\\). So the idea is to model the returns by assuming that they are iid and such that
>
> \\\[ R\_{t+\\Delta}=\\mu\_t \\Delta +\\sigma\_t\\sqrt{\\Delta} Z, \\quad \\text{where}\\quad Z\\sim \\mathcal{N}(0,1) \\\]
>
> In other terms the stock price, as the bank account, has a predictable evolution or drift given by \\(\\mu\_t\\) over the interval. However, it is also subject to random movement around this mean given by a normal distribution scaled by the volatility of the market \\(\\sigma\_t\\) as well as the time interval considered. Recasting, it follows that
>
> \\\[ S\_{t+\\Delta}-S\_t=S\_t(\\mu\_t \\Delta+\\sigma\_t \\Delta Z)=S\_t\\left( \\mu\_t\\Delta+\\sigma\_t\\left(W\_{t+\\Delta}-W\_t \\right)\\right) \\\]
>
> The main question though, is whether the stochastic differential equations describing the financial market do have a solution.
>
> > **Proposition**
> >
> > Suppose that \\(r\\), \\(\\mu\\) and \\(\\sigma\\) are locally bounded processes with \\(\\sigma\>0\\). Then, the stochastic differential equations
> >
> > \\\[ \\begin{align\*} dB &amp; = B rdt\\\\ dS &amp; = S(\\mu dt + \\sigma dW) \\end{align\*} \\\]
> >
> > have solutions explicitly given by
> >
> > \\\[ \\begin{align} B &amp; = \\exp\\left( \\int r dt \\right) \\\\ S &amp; = S\_0\\exp\\left( \\int \\left( \\mu-\\frac{\\sigma^2}{2} \\right)dt+\\int \\sigma dW \\right) \\end{align} \\\]
>
> > **Proof**
> >
> > We just have to check that the process
> >
> > \\\[ \\begin{align} B &amp; = \\exp\\left( \\int r dt \\right) \\\\ S &amp; = S\_0\\exp\\left( \\int \\left( \\mu-\\frac{\\sigma^2}{2} \\right)dt+\\int \\sigma dW \\right) \\end{align} \\\]
> >
> > satisfy the corresponding stochastic differential equations.
> >
> > Define \\(Y=\\int r dt\\) and \\(X=\\int (\\mu-\\sigma^2/2)dt+\\int \\sigma dW\\) which are well defined semi-martingales by the assumptions on \\(r\\), \\(\\mu\\) and \\(\\sigma\\). For \\(f(x)=\\exp(x)\\), since \\(f=f^\\prime=f^{\\prime\\prime}\\), it follows that \\(B=f(X)=f^\\prime(X)=f^{\\prime\\prime}(X)\\) and \\(S=S\_0f(Y)=S\_0f^{\\prime}(Y)=f^{\\prime\\prime}(Y)\\). Furthermore \\(dX=rdt\\) and \\(d\\langle X\\rangle =0\\), as well as \\(dY=(\\mu-\\sigma^2/2) dt+\\sigma dW\\) and \\(d\\langle Y\\rangle=d\\langle \\sigma W\\rangle=\\sigma^2 d\\langle W\\rangle=\\sigma^2 dt\\). Applying Itô's formula yields
> >
> > \\\[ \\begin{aligned} dB = df(X) &amp; = f^\\prime(X)dX+\\frac{1}{2} f^{\\prime\\prime}(X)d\\langle X\\rangle\\\\ &amp; = f(X)rdt\\\\ &amp; = B r dt\\\\ dS = S\_0df(Y) &amp; = S\_0f^{\\prime}(Y)dY+\\frac{1}{2}S\_0 f^{\\prime\\prime}(Y)d\\langle Y\\rangle\\\\ &amp; = S\_0f(Y)\\left(\\left( \\mu-\\frac{\\sigma^2}{2} \\right)dt+\\sigma dW\\right)+\\frac{1}{2}S\_0f(Y)\\sigma^2 dt\\\\ &amp; = S\_0f(Y)\\left( \\mu dt+\\sigma dW \\right)\\\\ &amp; = S\\left( \\mu dt+\\sigma dW \\right) \\end{aligned} \\\]
> >
> > which ends the proof.
>
> In particular, if \\(\\mu=0\\), it follows that \\(dS = \\sigma S dW\\) showing that
>
> \\\[ \\exp \\left( \\int \\sigma dW - \\frac{1}{2}\\int \\sigma^2 dt\\right) \\\]
>
> is a local martingale.
