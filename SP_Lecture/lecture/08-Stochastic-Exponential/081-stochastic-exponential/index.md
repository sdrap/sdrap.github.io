# Stochastic Exponential

> [!NOTE]
>
> **Definition**
>
> Let \\(M\\) be a continuous local martingale. We call
>
> \\\[ \\mathcal{E}(M)=\\exp\\left( M-\\frac{1}{2}\\langle M\\rangle \\right) \\\]
>
> the *stochastic exponential* of \\(M\\).

> [!NOTE]
>
> **Proposition**
>
> The stochastic exponential of a continuous local martingale is a super-martingale with \\(E\[\\mathcal{E}\_t(M)\]\\leq 1=\\mathcal{E}\_0(M)\\).

> [!NOTE]
>
> **Remark**
>
> Note that \\(\\mathcal{E}(M)\\) is a martingale if and only if \\(E\[\\mathcal{E}\_t(M)\]=1=E\[\\mathcal{E}\_0(M)\]\\).

> [!NOTE]
>
> **Proof**
>
> From Itô's formula it holds
>
> \\\[ \\begin{align} d\\mathcal{E}(M) &amp; =\\exp\\left( M-\\frac{1}{2}\\langle M\\rangle \\right)d\\left( M-\\frac{1}{2}\\langle M\\rangle \\right)+\\frac{1}{2}\\exp\\left( M-\\frac{1}{2}\\langle M\\rangle \\right)d\\langle M-\\frac{1}{2}\\langle M\\rangle \\rangle\\\\ &amp; = \\mathcal{E}(M)\\left( dM-\\frac{1}{2}d\\langle M\\rangle+\\frac{1}{2}d\\langle M\\rangle \\right)\\\\ &amp; =\\mathcal{E}(M)dM \\end{align} \\\]
>
> showing that \\(\\mathcal{E}(M)\\) is a local martingale. Furthermore since \\(\\mathcal{E}(M)\\geq 0\\) the second assertion follows from the following more general proposition.

> [!NOTE]
>
> **Proposition**
>
> Let \\(M\\) be a continuous local martingale such that \\(M\\geq N\\) where \\(N\\) is a continuous martingale of class (DL). Then it follows that \\(M\\) is a super-martingale.

> [!NOTE]
>
> **Remark**
>
> Note that the conditions of the proposition holds if \\(N\\) is constant or \\(N=E\[\\xi |\\mathcal{F}\_{\\cdot}\]\\) for some integrable random variable \\(\\xi\\), since \\(\\{E\[\\xi|\\mathcal{F}\_{\\tau}\]\\colon \\tau \\text{ is a bounded stopping time}\\}\\) is a uniformly integrable martingale.

> [!NOTE]
>
> **Proof**
>
> By definition \\(M\\) is adapted.
>
> Let \\(\\tau\\) be a uniformly bounded stopping time. By assumption \\(M\_\\tau\\geq N\_\\tau\\) the latter being integrable, hence \\(M^-\\) is integrable. Let now \\((\\tau^n)\\) be a sequence of localizing stopping times such that \\(M^{\\tau^n}\\) is a true martingale. It holds that
>
> - \\(M^{\\tau^n}\_\\tau\\to M\_{\\tau}\\) and \\(N\_{\\tau^n\\wedge \\tau}\\to N\_\\tau\\) both almost surely;
> - \\(N\_{\\tau^n\\wedge \\tau}\\to N\_{\\tau}\\) also in \\(L^1\\) since \\((N\_{\\tau^n\\wedge \\tau})\\) is uniformly integrable.
>
> Together with Fatou's lemma, \\(M^{\\tau^n}\\) being a martingale and \\(M^{\\tau^n}\_\\tau-N\_{\\tau^n\\wedge \\tau}\\geq 0\\), we get
>
> \\\[ \\begin{align} 0 &amp; \\leq E\\left\[ M\_\\tau- N\_\\tau\\right\]\\\\ &amp; =E\\left\[ \\liminf M\_\\tau^{\\tau^n} -N\_{\\tau^n\\wedge \\tau}\\right\]\\\\ &amp; \\leq \\liminf E\\left\[ M^{\\tau^n}\_\\tau \\right\]-\\limsup E\\left\[N\_{\\tau^n\\wedge \\tau} \\right\]\\\\ &amp; =\\liminf E\\left\[ M\_0^{\\tau^n} \\right\] - E\[N\_\\tau\]\\\\ &amp; =E\[M\_0\]-E\[N\_\\tau\] \\end{align} \\\]
>
> showing that \\(E\[M\_\\tau\]\\leq E\[M\_0\]\<\\infty\\) hence \\(M^+\\) and therefore \\(M\\) is integrable.
>
> Let us show that it is a super-martingale. Let \\((\\tau^n)\\) be a localizing sequence of stopping times. It follows that \\(M^{\\tau^n}\_t-N^{\\tau^n}\_t\\) is a positive sequence converging almost surely to \\(M\_t-N\_t\\), therefore we can apply conditional Fatou's lemma, (requires uniform integrability of the lower bound), for which follows
>
> \\\[ E\\left\[ M\_t |\\mathcal{F}\_s \\right\]-N\_s=E\\left\[ \\lim M\_t^{\\tau^n}-N^{\\tau^n}\_t |\\mathcal{F}\_s \\right\]\\leq \\liminf (M\_{\\tau^n\\wedge s}-N\_{\\tau^n\\wedge s})=M\_s-N\_s \\\]
>
> showing that \\(E\[M\_t|\\mathcal{F}\_s\]\\leq M\_s\\).

As a side remark, being a local martingale is far from being a true martingale, even a super-martingale without the conditions of the proposition. In an exercise, you will see that it is not enough to require that \\(M\\) is integrable. Even the condition \\(\\{M\_t:0\\leq t\<\\infty\\}\\) uniformly integrable is not sufficient. We need more as the following proposition shows.

> [!NOTE]
>
> **Proposition**
>
> Let \\(M\\) be a continuous local martingale. If \\(M\\) is of class (DL), then \\(M\\) is a martingale. If \\(M\\) is of class (D), then \\(M\_t \\to M\_\\infty\\) almost surely and in \\(L^1\\).

> [!NOTE]
>
> **Proof**
>
> By definition \\(M\\) is adapted and since \\(M\\) is of class (DL), it follows that \\(M\\) is in particular integrable. As for the martingale property, let \\((\\tau^n)\\) be a localizing sequence of stopping times and \\(\\tau\\) a uniformly bounded stopping time. It follows that \\(M^{\\tau^n}\_\\tau\\to M\_{\\tau}\\) almost surely and also in \\(L^1\\) since \\((M^{\\tau^n}\_\\tau)=(M\_{\\tau^n\\wedge \\tau})\\) is uniformly integrable. Therefore
>
> \\\[ E\[M\_{\\tau}\]=\\lim E\[M\_{\\tau}^{\\tau^n}\]=\\lim E\[M^{\\tau^n}\_0\]=E\[M\_0\] \\\]
>
> showing the martingale property. The last part of the assertion follows from martingale convergence theorem in the uniform integrable case.

As we study Girsanov transformation, exponential of martingales defines equivalent measure changes when \\(\\mathcal{E}(M)\\) is a true martingale. Criteria granting this is the case are not obvious, and closely related to the study of the duality between BMO spaces and \\(H^1\\). For those among you interested in that topic can find further results in the excellent book of Kazamaki (1994).

> [!NOTE]
>
> **Theorem**
>
> Let \\(M\\) be a continuous local martingale and let \\(1/q+1/p=1\\) for \\(1\<p\<\\infty\\). Suppose that
>
> \\\[ \\sup\_{\\tau}E\\left\[ \\exp\\left( \\frac{\\sqrt{p}}{2(\\sqrt{p}-1)}M\_{\\tau} \\right) \\right\]\<\\infty \\\]
>
> where the supremum is taken over all bounded stopping times. Then \\(\\mathcal{E}(M)\\) is an \\(L^q\\)-bounded martingale.

> [!NOTE]
>
> **Proof**
>
> For \\(1\<p\<\\infty\\), \\(q\\) such that \\(1/p+1/q=1\\), define \\(r=(\\sqrt{p}+1)/(\\sqrt{p}-1)\\) for which holds \\(1\<r\<\\infty\\). Denote by \\(s\\) the conjugate exponent of \\(r\\), that is \\(1/r+1/s=1\\). Simple check shows that \\((q-\\sqrt{q/r})s=\\sqrt{p}/(2(\\sqrt{p}-1))\\). Since we have
>
> \\\[ \\begin{align\*} \\mathcal{E}(M)^q &amp; = \\exp\\left( qM-\\frac{q}{2}\\langle M\\rangle \\right)\\\\ &amp; =\\exp\\left( \\sqrt{\\frac{q}{r}}M-\\frac{q}{2}\\langle M\\rangle\\right)\\exp\\left( \\left( q- \\sqrt{\\frac{q}{r}}\\right)M \\right) \\end{align\*} \\\]
>
> applying Hölder inequality, it follows that for every bounded stopping time \\(\\sigma\\), we have
>
> \\\[ \\begin{align} E\\left\[ \\mathcal{E}\_{\\sigma}(M)^q \\right\] &amp; \\leq E\\left\[ \\exp\\left( \\sqrt{qr}M\_{\\sigma}-\\frac{qr}{2}\\langle M\\rangle\_\\sigma \\right) \\right\]^{1/r}E\\left\[ \\exp\\left(s \\left( q- \\sqrt{\\frac{q}{r}}\\right)M\_\\sigma \\right) \\right\]^{1/s}\\\\ &amp; = E\\left\[ \\mathcal{E}\_{\\sigma}\\left(\\sqrt{qr}M\\right)\_{\\sigma}\\right\]^{1/r}E\\left\[ \\exp\\left(\\frac{\\sqrt{p}}{2(\\sqrt{p}-1)}M\_{\\sigma} \\right) \\right\]^{1/s}\\\\ &amp; \\leq \\sup\_{\\tau}E\\left\[ \\exp\\left(\\frac{\\sqrt{p}}{2(\\sqrt{p}-1)}M\_{\\tau} \\right) \\right\]^{1/s} \\end{align} \\\]
>
> where on the last line we take the supremum over all bounded stopping times. On the other hand from the second to the third line, by the first Proposition, \\(\\mathcal{E}(\\sqrt{qr}M)\\) is a super-martingale with \\(E\[\\mathcal{E}\_{\\sigma}(\\sqrt{qr}M)\]\\leq E\[\\mathcal{E}\_0(\\sqrt{qr}M)\]=1\\). It follows that \\(\\{\\mathcal{E}\_{\\sigma}(M)\\colon \\sigma \\text{ bounded stopping time}\\}\\) is uniformly bounded in \\(L^q\\) for \\(0\<q\<1\\). Since \\(\\varphi(x)=x^q\\) is an increasing convex function with \\(\\lim \\varphi(x)/x=\\infty\\), by de la Vallée Poussin criteria, it follows that \\(\\{\\mathcal{E}\_{\\sigma}(M)\\colon \\sigma \\text{ bounded stopping time}\\}\\) is uniformly integrable. Hence, by the previous Proposition, it follows that \\(\\mathcal{E}(M)\\) is a martingale.

We have now an easier way to check the martingale property of the stochastic exponential due to Novikov.

> [!NOTE]
>
> **Proposition: Novikov's Criteria**
>
> Let \\(M\\) be a local martingale. Suppose that
>
> \\\[ \\sup\_{\\tau}E\\left\[ \\exp\\left( \\frac{1}{2}M\_{\\tau} \\right) \\right\]\<\\infty \\\]
>
> where the supremum is taken over all bounded stopping times. Then \\(\\mathcal{E}(M)\\) is a uniformly integrable martingale.
>
> It is in particular the case if \\(\\langle M\\rangle\_{\\infty}:=\\lim\_{t\\to \\infty} \\langle M\\rangle\_t\\) satisfies
>
> \\\[ E\\left\[ \\exp\\left( \\frac{1}{2}\\langle M\\rangle\_{\\infty} \\right) \\right\] \<\\infty \\\]
>
> which is called the **Novikov criteria**.

> [!NOTE]
>
> **Proof**
>
> From de la Vallée Poussin criteria with \\(\\phi(x) = \\exp(x/2)\\), it follows that \\(M\\) is a local martingale with \\(\\{M\_\\tau \\colon \\tau\\text{ bounded stopping time}\\}\\) uniformly integrable. Hence, \\(M\\) is a uniformly integrable martingale with \\(M\_t \\to M\_\\infty\\) almost surely and in \\(L^1\\). Furthermore, from Fatou, we get
>
> \\\[ E\\left\[ \\exp\\left( \\frac{M\_\\infty}{2} \\right) \\right\]\\leq \\liminf E\\left\[ \\exp\\left( \\frac{M\_t}{2} \\right) \\right\] \<\\infty \\\]
>
> Let now \\(0\<a\<1\\) and choose \\(1\<p\<\\infty\\) such that $ \\sqrt{p}/(\\sqrt{p}-1)\<1/a$. By the assumption, and the choice of \\(a\\) and \\(p\\), it follows that \\(\\mathcal{E}(aM)\\) satisfies the assumptions of Theorem \\ref{thm:stochexpkasamaki}, hence \\(\\mathcal{E}(aM)\\) is an \\(L^q\\) bounded martingale and from the argumentation of the previous proof, uniformly integrable due to de la Vallée Poussin criteria. Hence, from martingale convergence theorem, it follows that \\(\\mathcal{E}\_t(aM)\\to \\mathcal{E}\_{\\infty}(aM)\\) almost surely and in \\(L^q\\) and \\(\\mathcal{E}\_t(aM)=E\[\\mathcal{E}\_{\\infty}(aM)|\\mathcal{F}\_t\]\\). Furthermore, by convergence of positive super-martingale, it holds that \\(\\mathcal{E}\_t(M)\\to \\mathcal{E}\_{\\infty}(M)\\in L^1\\) almost surely, and by Fatou's lemma it holds \\(E\[\\mathcal{E}\_{\\infty}(M)\]\\leq 1\\). Also, from \\(\\mathcal{E}(aM)=\\mathcal{E}(M)^{a^2}\\exp(a(1-a)M)\\), using Hölder inequality with conjugate exponent \\(1/a^2\\) and \\(1/(1-a^2)\\) and Jensen in the concave case for the exponent \\(2a/(1+a)\<1\\) it follows that
>
> \\\[ \\begin{align} 1 &amp; =E\\left\[ \\mathcal{E}\_{\\infty}(a M) \\right\]\\\\ &amp; \\leq E\\left\[ \\mathcal{E}\_{\\infty}(M) \\right\]^{a^2}E\\left\[ \\exp\\left( \\frac{a}{1+a}M\_\\infty \\right) \\right\]^{1-a^2}\\\\ &amp; = E\\left\[ \\mathcal{E}\_{\\infty}(M) \\right\]^{a^2}E\\left\[ \\exp\\left( \\frac{1}{2}M\_{\\infty} \\right)^{\\frac{2a}{1+a}} \\right\]^{1-a^2}\\\\ &amp; \\leq E\\left\[ \\mathcal{E}\_{\\infty}(M) \\right\]^{a^2}E\\left\[ \\exp\\left( \\frac{1}{2}M\_{\\infty} \\right) \\right\]^{2a(1-a)} \\end{align} \\\]
>
> Since \\(Z\_{\\infty} \\in L^1\\), for \\(a\\nearrow 1\\), it follows that \\(E\[ \\exp( M\_{\\infty}/2) \]^{2a(1-a)}\\to 1\\), showing that \\(E\[\\mathcal{E}\_\\infty(M\_{\\infty})\]\\geq 1\\). The statement holds for every time showing that \\(1=E\[\\mathcal{E}\_{t}(M)\]=E\\left\[ \\mathcal{E}\_\\infty(M) \\right\]\\). Hence \\(\\mathcal{E}(M)\\) is a true martingale and since \\(E\\left\[ \\mathcal{E}\_t(M) \\right\]\\to E\[\\mathcal{E}\_{\\infty}(M)\]\\) from the uniform integrability equivalence relation \\(\\mathcal{E}(M)\\) is uniformly integrable.
>
> Novikov criteria follows from the next Lemma.

> [!NOTE]
>
> **Lemma**
>
> Let \\(M\\) be a continuous local martingale. Then
>
> \\\[ E\\left\[ \\exp\\left( \\frac{1}{2}M\_t \\right) \\right\]\\leq E\\left\[ \\exp\\left(\\frac{1}{2}\\langle M\\rangle\_t\\right) \\right\]^{\\frac{1}{2}} \\\]

> [!NOTE]
>
> **Proof**
>
> Since \\(\\exp(M\_t/2)=\\mathcal{E}\_t(M)^{1/2}\\exp(\\langle M\\rangle\_t/2)^{1/2}\\), applying Cauchy-Schwarz inequality together with the fact that \\(E\[\\mathcal{E}(M)\_t\]\\leq 1\\) yields
>
> \\\[ \\begin{align} E\\left\[ \\exp\\left( \\frac{1}{2}M\_t \\right) \\right\] &amp; =E\\left\[ \\mathcal{E}\_t(M)^{1/2}\\exp\\left(\\frac{1}{2}\\langle M\\rangle\_t\\right)^{1/2} \\right\]\\\\ &amp; \\leq E\\left\[ \\mathcal{E}\_t(M) \\right\]^{\\frac{1}{2}}E\\left\[ \\exp\\left(\\frac{1}{2}\\langle M\\rangle\_t\\right) \\right\]^{\\frac{1}{2}}\\\\ &amp; \\leq E\\left\[ \\exp\\left(\\frac{1}{2}\\langle M\\rangle\_t\\right) \\right\]^{\\frac{1}{2}} \\end{align} \\\]

> [!NOTE]
>
> **Example**
>
> Let us come back to our financial example to motivate the subsequent study of Girsanov transformation. Recall that our financial market is given by a bank account \\(B\\) and a stock price \\(S\\) with stochastic evolution described by
>
> \\\[ dB=rBdt\\quad \\text{and} \\quad dS=S\\left( \\mu dt+\\sigma dW \\right) \\\]
>
> for some locally bounded and integrable processes \\(r\\), the interest rate of the bank, \\(\\mu\\), the drift or trend of the stock and \\(\\sigma\>0\\), the volatility of the stock.
>
> Now suppose that you have a portfolio value \\(\\tilde{V}\_t\\) at time \\(t\\), sum of the amount of money you have in the bank account as well as number of shares of \\(S\\) multiplied by the price of the stock. Under the assumption that you are not allowed to pour money from outside, you can decide to rebalance your portfolio by buying a number of shares \\(H\_t\\) of the stock \\(S\\). The cost for it is \\(-H\_t S\_t\\). The value of your portfolio at time \\(t+\\Delta\\) is then given by
>
> \\\[ \\begin{align} \\tilde{V}\_{t+\\Delta} &amp; = \\left(\\tilde{V}\_t - H\_t S\_t\\right)\\left( 1+r \\Delta \\right) + H\_t S\_{t+\\Delta} \\\\ &amp; = \\tilde{V}\_t\\left( 1+r \\Delta \\right) + H\_t S\_t \\left( \\frac{S\_{t+\\Delta}-S\_t}{S\_t} - r\\Delta \\right)\\\\ &amp; \\approx \\tilde{V}\_t + \\tilde{V}\_t r\\Delta + H\_tS\_t\\left( \\left( \\mu -r \\right)\\Delta + \\sigma \\left( W\_{t+\\Delta} - W\_t \\right) \\right) \\end{align} \\\]
>
> justifying the evolution of the portfolio value as
>
> \\\[ \\begin{equation\*} d\\tilde{V}=(\\tilde{V}-HS)rdt+HdS=\\tilde{V}rdt+HS\\left( (\\mu-r)dt+\\sigma dW \\right), \\quad V\_0\\in \\mathbb{R} \\end{equation\*} \\\]
>
> where \\(H\\) is a progressive process and \\(\\tilde{V}\_0\\) is the amount of money you start investing in the market.
>
> An important notion in mathematical finance for a market to be functioning is that it is **arbitrage free**. It means that you cannot invest in the stock market without taking some risk. In other terms,
>
> > **Definition**
> >
> > A portfolio strategy \\(H\\) is called an **arbitrage** if there exists \\(t\\) such that \\(\\tilde{V}\_t\\geq \\tilde{V}\_0B\_t\\) almost surely and \\(P\[\\tilde{V}\_t\>\\tilde{V}\_0B\_t\]\>0\\).
>
> It means that by investing on the market you are at time \\(t\\) better off almost surely than if you did nothing and let your money in your account, and you can even realize strictly positive gains with strictly positive probability. It is called making money without downside risk, or a free lunch. Note that this notion depends on the bank account. In order to express money at any time in a similar value, we discount all the objects by defining
>
> \\\[ D=\\frac{1}{B}, \\quad X=\\frac{S}{B}=DS,\\quad \\text{and} \\quad V=\\frac{\\tilde{V}}{B}=D\\tilde{V} \\\]
>
> Applying Itô's formula knowing that \\(D\\) is of bounded variations, we get
>
> \\\[ \\begin{aligned} dD &amp; =-Dr dt\\\\ dX &amp; = SdD+DdS+d\\langle S,D\\rangle\\\\ &amp; = SdD+DdS \\\\ &amp; =-DSrdt+DS(\\mu dt+\\sigma dW)\\\\ &amp; = DS\\left( \\left( \\mu-r \\right)dt+\\sigma dW \\right)\\\\ &amp; =X\\left( \\left( \\mu-r \\right)dt+\\sigma dW \\right)\\\\ dV &amp; = \\tilde{V}dD+Dd\\tilde{V}+d\\langle \\tilde{V},D\\rangle\\\\ &amp; = \\tilde{V}dD+Dd\\tilde{V}\\\\ &amp; =-D\\tilde{V}rdt+D\\tilde{V}r dt+DHS\\left( \\left( \\mu-r \\right)dt+\\sigma dW \\right)\\\\ &amp; =HX\\left( \\left( \\mu-r \\right)dt+\\sigma dW \\right)\\\\ &amp; = HdX \\end{aligned} \\\]
>
> Hence, in discounted terms,
>
> \\\[ V=V\_0+\\int H dX , \\quad\\text{and}\\quad X=X\_0\\exp\\left( \\int\\left( \\mu-r-\\frac{\\sigma^2}{2} \\right)dt+\\int \\sigma dW \\right) \\\]
>
> And the arbitrage condition reads equivalently as the existence of \\(H\\) such that either \\(P\[ V\_t\\geq V\_0 \]=1\\) and \\(P\[ V\_t\>V\_0 \]\>0\\) or
>
> \\\[ P\\left\[ \\int\_{0}^{t} H dX \\geq 0 \\right\]=1 \\quad \\text{and}\\quad P\\left\[ \\int\_{0}^{t} HdX\>0 \\right\]\>0 \\\]
>
> Since we are in continuous time setting, we need some constraints on the possible strategies, namely, we assume that strategies are **admissible** if
>
> \\\[ \\int H dX\\geq -a \\\]
>
> for some constant \\(a\\), meaning that you are bounded in terms of negative value of your portfolio.
>
> > **Definition**
> >
> > We say that the market is arbitrage free, if there exists no admissible arbitrage strategy.
>
> The following statement is central in mathematical finance, relating an economical notion to a stochastic notion. We loosely state it as a theorem since the technical assumptions are beyond the scope of this lecture.(1)
>
> 1. The statement in the discrete case and finite time horizon holds under this precise statement. This result is due to Kreps (1979) and extended by Harris et al. (1989). The continuous time setting is highly complex and even if we just sketch below the argument in one direction, the reciprocal is difficult and based on an Hahn-Banach separation Theorem. The proof in this general semi-martingale setting has been done by Delbaen and Schachermayer (1994).
>
> > **Fundamental Theorem of Asset Pricing (Loose Form)**
> >
> > The market is arbitrage free if and only if there exists a probability measure \\(Q\\) equivalent to \\(P\\) under which \\(X\\) is a local martingale.
>
> We just give the idea of the argumentation for one direction.
>
> Suppose that there exists an admissible arbitrage opportunity \\(H\\), that is \\(P\[\\int\_{0}^{t}HdX\\geq 0\]=1\\) and \\(P\[\\int\_{0}^{t}HdX\>0\]\>0\\) for some \\(t\\). Since \\(Q\\sim P\\), it is equivalent to \\(Q\\left\[ \\int\_{0}^{t}HdX\\geq 0 \\right\]=1\\) and \\(Q\[\\int\_{0}^{t}H dX\>0\]\>0\\). Since \\(X\\) is a continuous local martingale under \\(Q\\), so is \\(\\int HdX\\) under \\(Q\\). Furthermore, since \\(\\int HdX \\geq -a\\), according to Proposition \\ref{prop:unifintlocalmartingal}, it is in particular a super-martingale under \\(Q\\). Hence
>
> \\\[ E^Q\\left\[ \\int\_{0}^{t}H dX \\right\]\\leq E^Q\\left\[ \\int\_{0}^{0}HdX \\right\]=0 \\\]
>
> contradicting the fact that \\(\\int\_{0}^{t}HdX\\geq 0\\) \\(Q\\)-almost surely and \\(Q\[\\int\_{0}^{t}HdX\>0\]\>0\\).
>
> Note however that we face the following questions:
>
> - In this argumentation, we use \\(\\int HdX\\) apparently indifferently under \\(P\\) and \\(Q\\). However, the stochastic integral is an object defined in terms of isometry with respect to a given probability measure, so it is not totally obvious why \\(\\int HdX\\) under \\(P\\) coincides with \\(\\int HdX\\) under \\(Q\\). In particular, why a semi-martingale \\(X\\) under \\(P\\) remains a semi-martingale under \\(Q\\).
> - Given the fact that this argumentation holds, the other question remains though: how can we find this equivalent probability measure such that \\(X\\) is a local martingale? Note that according to Itô's formula, provided that \\(\\sigma\>0\\) we have
>
>   \\\[ dX = X\\left( (\\mu-r)dt+\\sigma dW \\right)=\\sigma X\\left( \\theta dt+dW \\right)=\\sigma Xd \\tilde{W} \\\]
>
>   where \\(\\theta = (\\mu-r)/\\sigma\\) is jargon called the *market price of risk* and \\(\\tilde{W} = W+\\int \\theta dt\\). If we can find a probability measure \\(Q\\sim P\\) under which \\(\\tilde{W}\\) is a local martingale, we would be done. And as we will see later on, this probability measure is given by
>
>   \\\[ \\frac{dQ}{dP} = \\mathcal{E}\_{\\infty}\\left( -\\int \\theta dW \\right)=\\exp\\left( -\\int\_{0}^{\\infty} \\theta dW-\\frac{1}{2}\\int\_{0}^{\\infty}\\theta^2 ds \\right) \\\]
> - Finally, this measure \\(Q\\) will be used to price contingent claims. Therefore, the last question is to know what is the distribution of \\(X\\) under this measure change.

## References

- Kazamaki, Norihiko (1994). *Continuous Exponential Martingales and BMO*. Springer.
- Kreps, David M. (1979). A Note on “Fulfilled Expectations” Equilibria. *Journal of Economic Theory* 20(3).
- Harris, Milton B. and Plaice, John M. (1989). The Existence of Equilibrium in Discontinuous Economic Models, I: Theory. *Review of Economic Studies* 56(1).
- Delbaen, Freddy and Schachermayer, Walter (1994). A General Version of the Fundamental Theorem of Asset Pricing. *Mathematische Annalen* 300.
