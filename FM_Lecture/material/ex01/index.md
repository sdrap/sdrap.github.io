# Exercise: One Period Financial Market

> [!NOTE]
>
> **Exercise**
>
> We consider the following two financial market models with state space \\( \\Omega=\\{\\omega\_1,\\omega\_2, \\omega\_3\\} \\) and a probability measure \\( P \\) with
>
> \\\[ P\\left\[ \\{\\omega\_i\\} \\right\] = p\_i \\quad \\text{for} \\quad \\begin{cases} p\_i \> 0 &amp; \\text{for every } i=1,2,3, \\\\ p\_1 + p\_2 + p\_3 = 1 \\end{cases} \\\]
>
> 1. **Financial Market I:** \\( B\_0 = 1 \\) and \\( B\_1 = 2 \\) as bank account and three stocks given by
>
>    \\\[ \\begin{align\*} \\boldsymbol{S}\_0 &amp; = (S\_0^1, S\_0^2, S\_0^3) = (7, 31, 62)\\\\ \\boldsymbol{S}\_1 &amp; = \\begin{bmatrix} S^1\_1(\\omega\_1) &amp; S^2\_1(\\omega\_1) &amp; S^3\_1(\\omega\_1) \\\\ S^1\_1(\\omega\_2) &amp; S^2\_1(\\omega\_2) &amp; S^3\_1(\\omega\_2) \\\\ S^1\_1(\\omega\_3) &amp; S^2\_1(\\omega\_3) &amp; S^3\_1(\\omega\_3) \\end{bmatrix} = \\begin{bmatrix} 40 &amp; 60 &amp; 120 \\\\ 0 &amp; 40 &amp; 80 \\\\ 20 &amp; 100 &amp; 200 \\end{bmatrix} \\end{align\*} \\\]
> 2. **Financial Market I:** \\( B\_0 = 1 \\) and \\( B\_1 = 1 \\) as bank account and two stocks given by
>
>    \\\[ \\begin{align\*} \\boldsymbol{S}\_0 &amp; = (S\_0^1, S\_0^2) = (8, 10)\\\\ \\boldsymbol{S}\_1 &amp;= \\begin{bmatrix} S^1\_1(\\omega\_1) &amp; S^2\_1(\\omega\_1) \\\\ S^1\_1(\\omega\_2) &amp; S^2\_1(\\omega\_2) \\\\ S^1\_1(\\omega\_3) &amp; S^2\_1(\\omega\_3) \\end{bmatrix} = \\begin{bmatrix} 6 &amp; 11 \\\\ 5 &amp; 11 \\\\ 12 &amp; 9 \\end{bmatrix} \\end{align\*} \\\]
>
> Are these models arbitrage-free? If yes, give all risk-neutral pricing measures. Otherwise, provide an arbitrage strategy.

> [!NOTE]
>
> **Exercise**
>
> Given a generic financial market as in the lecture on some probability space \\( (\\Omega, \\mathcal{F},P) \\). Recall that the vector of returns of the financial assets is the random variable given by
>
> \\\[ \\boldsymbol{R}\_1 = \\left( \\frac{S\_1^1-S\_0^1}{S\_0^1}, \\ldots, \\frac{S\_1^d-S\_0^d}{S\_0^d} \\right) \\\]
>
> Show that the following assertions are equivalent:
>
> 1. The financial market is arbitrage-free;
> 2. There exists no \\( \\boldsymbol{\\eta}\\) in \\(\\mathbb{R}^d \\) such that
>
>    \\\[ P\\left\[ \\boldsymbol{\\eta} \\cdot \\boldsymbol{R}\_1 \\geq r \\sum\_{k=1}^d \\eta^k \\right\]=1 \\quad \\text{and} \\quad P\\left\[ \\boldsymbol{\\eta} \\cdot \\boldsymbol{R}\_1 \> r \\sum\_{k=1}^d \\eta^k \\right\]\>0 \\\]
> 3. For any strategy \\( \\boldsymbol{\\eta}\\) in \\(\\mathbb{R}^d \\), it holds that
>
>    \\\[ P\\left\[ \\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \\geq 0 \\right\]=1 \\quad \\text{implies} \\quad P\\left\[ \\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 = 0 \\right\]=1 \\\]

> [!NOTE]
>
> **Exercise**
>
> We consider a binomial financial market model with interest rate \\( r \\geq 0 \\),
>
> \\\[ \\Omega=\\{\\omega^+,\\omega^-\\}, \\quad p:=P(\\{\\omega^+\\})=\\frac{1}{2} \\\]
>
> and one risky asset with initial value \\( S\_0=100 \\) and at time 1,
>
> \\\[ S\_1(\\omega) = \\begin{cases} 120 &amp; \\text{if } \\omega = \\omega^+ \\\\ 90 &amp; \\text{if } \\omega = \\omega^- \\end{cases} \\\]
>
> Let \\( C=(S\_1-K)^+ \\) be a call option on \\( S \\) with strike price \\( K=100 \\).
>
> 1. For which \\( r \\) is the model arbitrage-free? For those \\( r \\) for which the model is arbitrage-free, give the risk-neutral pricing measure \\( P^\* \\) by finding \\( p^\*=P^\*(\\{\\omega^+\\}) \\).
> 2. If you compute the call option's price as the expectation \\( E\\left\[\\frac{C}{1+r}\\right\] \\) under the objective measure \\( P \\), then there exists an arbitrage in the model. Show that the risk-free arbitrage gain equals the difference
>
>    \\\[ E\\left\[\\frac{C}{1+r}\\right\] - E^\*\\left\[\\frac{C}{1+r}\\right\]. \\\]
> 3. For the call option, find a portfolio with start value \\( V\_0 \\) and hedging strategy \\( \\eta \\) in \\(\\mathbb{R}\\) such that
>
>    \\\[ \\frac{C}{1+r}=V\_0 + \\eta \\Delta X\_1 \\\]
>
>    Show that the necessary amount of money to finance this strategy is the risk-neutral price \\( V\_0=E^\*\\left\[\\frac{C}{1+r}\\right\] \\).

> [!NOTE]
>
> **Exercise: Put/Call Parity**
>
> On an arbitrage-free financial market, we consider a call and a put
>
> \\\[ C^{call}=(S\_1-K)^+, \\quad \\text{and} \\quad C^{put}=(K-S\_1)^+ \\\]
>
> on the same financial asset \\( S^1 \\) and with the same strike \\( K \\). Show that if \\( \\pi(C^{call}) \\) and \\( \\pi(C^{put}) \\) are fair prices for the call and put respectively, then it has to hold
>
> \\\[ \\pi(C^{call})=\\pi(C^{put})+S\_0-\\frac{K}{1+r} \\\]

> [!NOTE]
>
> **Exercise**
>
> We consider a financial market with bank account \\( B\_0 = 1 \\) and \\( B\_1 = 1 + r \\) for some \\( r \> -1 \\). We have a single financial asset \\( S \\). We suppose that the financial market is arbitrage-free, and that on this market every call option \\( C(K) = (S\_1 - K)^+ \\) is traded for a fair price \\( \\pi(K) \\). Using the "law of one price," compute the prices of the following derivatives:
>
> 1. \\( \\min(S\_1, K) \\).
> 2. "Butterfly spread" with payoff \\( f(S\_1) \\), whereby \\( f \\) is given by
>
>    \\\[ f(x) = \\begin{cases} x-a &amp; \\text{if } a \\leq x \\leq \\frac{a+b}{2}, \\\\ b-x &amp; \\text{if } \\frac{a+b}{2} \\leq x \\leq b, \\\\ 0 &amp; \\text{otherwise} \\end{cases} \\\]
>
>    for some \\( 0 \\leq a \\leq b \\).

> [!NOTE]
>
> **Exercise**
>
> On an arbitrage-free market, we consider a financial asset \\( S \\). A \\( S^2 \\)MART certificate with loss barrier \\( 0 \< K\_1 \\), strike price \\( K \> K\_1 \\), and participation rate \\( \\alpha \\) is a certificate given by:
>
> - If the financial asset falls below the loss barrier \\( K\_1 \\), the certificate pays \\( \\frac{K}{K\_1} \\) times the price of the asset at this point.
> - If the financial asset falls between \\( K\_1 \\) and \\( K \\), the certificate pays \\( K \\).
> - If the financial asset is above \\( K \\), the certificate pays a portion \\( \\alpha \\) of the asset plus a portion \\( (1-\\alpha) \\) of the strike price.
>
> Given this certificate:
>
> 1. Write the index as a function of \\( S, K\_1, K, \\) and \\( \\alpha \\).
> 2. Show that this certificate can be written as a linear combination of the financial asset and adequate call options.
> 3. Given \\( K\_1, K \\), and the fair price of the call options, determine what should be the participation rate \\( \\alpha \\) such that the fair price of the certificate equals the price of the financial asset.
