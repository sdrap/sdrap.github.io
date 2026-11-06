# What is Risk

Even if the notion of risk is colloquial and everyone intuitively understands it, it is far from clear what it is the exact definition.

We saw in the previous chapter how to price contingent claims in a "risk-neutral way" ensured by an arbitrage-free financial market. However, such pricing does not tell us much about the amount of "risk" one undertakes when investing in one product or another.

Let us consider the following example.

> [!NOTE]
>
> **Example**
>
> Let \\(\\Omega=\\{\\omega\_1,\\omega\_2,\\omega\_3\\}\\), \\(\\mathcal{F}=2^\\Omega\\), and the "objective probability" measure \\(P\\) given by \\(P\[\\{\\omega\_1\\}\]=0.1\\), \\(P\[\\{\\omega\_2\\}\]=0.85\\), and \\(P\[\\{\\omega\_3\\}\]=0.05\\). Our bank account \\(B\_0=1\\) and \\(B\_1=(1+r)\\). We have two stocks with the same start price \\(S\_0^1=S\_0^2=100\\) and prices tomorrow:
>
> \\\[ S\_1^1(\\omega)= \\begin{cases} 110 &amp; \\text{if } \\omega = \\omega\_1 \\\\ 105 &amp; \\text{if } \\omega = \\omega\_2 \\\\ 100 &amp; \\text{if } \\omega = \\omega\_3 \\end{cases} \\quad \\text{and} \\quad S\_1^2(\\omega)= \\begin{cases} 160 &amp; \\text{if } \\omega = \\omega\_1 \\\\ 110 &amp; \\text{if } \\omega = \\omega\_2 \\\\ 0 &amp; \\text{if } \\omega = \\omega\_3 \\end{cases} \\\]
>
> Simple computation shows that for \\(r=\\frac{1}{15} \\approx 6.66\\%\\), there exists a unique risk-neutral pricing measure \\(P^\\ast\\) given by:
>
> \\\[ P^\\ast\[\\{\\omega\_1\\}\] = p\_1^\\ast = \\frac{2}{3}, \\quad P^\\ast\[\\{\\omega\_3\\}\] = p\_3^\\ast = \\frac{1}{3}, \\quad \\text{and} \\quad P^\\ast\[\\{\\omega\_2\\}\] = p\_2^\\ast = 0 \\\]
>
> Now, as a portfolio manager, you face the dilemma of which stock you would choose or what proportion you would allocate to one or the other. If the only rationale underlying your decision process is given in terms of the risk-neutral pricing, there is no difference between the two stocks, and you are indifferent.
>
> However, you intuitively see that the first stock is a blue chip, whereas the second one is rather the hot but "risky" kid on the playground—a startup or so. Your decision process would likely be driven by a "risk/reward" analysis in the face of "uncertainty," whatever that means.

We make the analysis even simpler with the following second example.

> [!NOTE]
>
> **Example**
>
> You own 1,000 RMB and have the choice between the following games:
>
> 1. Pay 1,000 and get immediately:
>
>    \\\[ \\begin{cases} 2,000 &amp; \\text{with probability } 50\\% \\\\ 0 &amp; \\text{otherwise} \\end{cases} \\\]
> 2. Pay 1,000 and get immediately:
>
>    \\\[ \\begin{cases} 1,200 &amp; \\text{with probability } \\frac{5}{6} \\approx 83.33\\% \\\\ 0 &amp; \\text{otherwise} \\end{cases} \\\]
> 3. Pay 1,000 and get immediately:
>
>    \\\[ \\begin{cases} 1,300 &amp; \\text{with probability } 25\\% \\\\ 900 &amp; \\text{otherwise} \\end{cases} \\\]
> 4. Pay 1,000 and get immediately:
>
>    \\\[ \\begin{cases} 1,100 &amp; \\text{with probability } 50\\% \\\\ 900 &amp; \\text{otherwise} \\end{cases} \\\]
> 5. Do nothing and keep your 1,000.
>
> All these games have an expected return of 0. However, you would likely have a preference regarding which one is the best. Considering their standard deviations—that is, \\(E\[(X - E\[X\])^2\]^{1/2}\\)—it holds:
>
> \\\[ \\begin{aligned} \\mathrm{STD}(\\text{game 1}) &amp; \\approx 1,000, \\\\ \\mathrm{STD}(\\text{game 2}) &amp; \\approx 447.21, \\\\ \\mathrm{STD}(\\text{game 3}) &amp; \\approx 173.21, \\\\ \\mathrm{STD}(\\text{game 4}) &amp; \\approx 100, \\\\ \\mathrm{STD}(\\text{game 5}) &amp; \\approx 0. \\end{aligned} \\\]

> [!NOTE]
>
> **Remark**
>
> Risk perception is a subjective view of how you assess uncertain prospective outcomes. This may differ from one person to another as well as from one context to another. How can we model this fact mathematically?

## Two Examples for Risk Assessment Instruments

### Markowitz Mean Variance

The deviation from the mean appears to be a good indicator of our aversion to uncertainty. This is why Markowitz introduced the following criterion to assess the trade-off between risk and rewards in terms of variance and means.

> [!NOTE]
>
> **Definition**
>
> Given a square integrable random variable \\( X \\)—modeling some payoff such as a portfolio strategy, industrial projects, or any management decision—the *Markowitz mean/variance* measure is defined as:
>
> \\\[ MV\_{\\alpha}(X) = E\[X\] - \\frac{\\alpha}{2} \\text{VAR}(X) \\\]
>
> where:
>
> \\\[ \\text{VAR}(X) = E\\left\[(X - E\[X\])^2\\right\] \\\]
>
> is the variance of the random variable, and \\( \\alpha \\) is a positive number.

For any value of \\( \\alpha \\), you can check that assessing previous games in terms of mean and variance will rank them, with the largest standard deviation corresponding to the worst game and the smallest standard deviation corresponding to the best game.

The Markowitz mean-variance approach was a highly successful instrument for finding optimal portfolio strategies. It can also be used as a risk assessment measure. However, since we are more interested in the downside risks, we consider risk measures defined for the random variable \\( L = -X \\), where \\( X \\) represents returns.

> [!NOTE]
>
> **Definition**
>
> The *Markowitz risk measure* is defined as:
>
> \\\[ RMV\_{\\alpha}(L) = E\[L\] + \\frac{\\alpha}{2} \\text{VAR}(L) \\\]
>
> where \\( L \\) is a square integrable loss profile.

> [!NOTE]
>
> **Proposition**
>
> The Markowitz risk measure satisfies the following properties:
>
> 1. **Cash-invariance**: For every loss profile \\( L \\) and \\( m \\in \\mathbb{R} \\),
>
>    \\\[ RMV\_{\\alpha}(L - m) = RMV\_{\\alpha}(L) - m. \\\]
> 2. **Convexity**: For any two loss profiles \\( L\_1, L\_2 \\) and \\( \\lambda \\in \[0, 1\] \\),
>
>    \\\[ RMV\_{\\alpha}(\\lambda L\_1 + (1 - \\lambda)L\_2) \\leq \\lambda RMV\_{\\alpha}(L\_1) + (1 - \\lambda)RMV\_{\\alpha}(L\_2) \\leq \\max \\left\\{ RMV\_{\\alpha}(L\_1), RMV\_{\\alpha}(L\_2)\\right\\}. \\\]
> 3. **Law Invariance**: If two loss profiles \\( L\_1 \\) and \\( L\_2 \\) have the same CDF, then:
>
>    \\\[ RMV\_{\\alpha}(L\_1) = RMV\_{\\alpha}(L\_2). \\\]

**Proof**

1. **Cash-invariance:** For every \\( m \\in \\mathbb{R} \\), and loss \\( L \\), it holds:

   \\\[ \\begin{align\*} RMV\_{\\alpha}(L-m) &amp; = E\[L-m\] + \\frac{\\alpha}{2} E\\left\[\\left(L-m-E\[L-m\]\\right)^2\\right\]\\\\ &amp; = E\[L\] + \\frac{\\alpha}{2} E\\left\[\\left(L - E\[L\]\\right)^2\\right\] - m = RMV\_{\\alpha}(L) - m \\end{align\*} \\\]
2. **Convexity:** Let \\( 0 \\leq \\lambda \\leq 1 \\) and \\( L\_1 \\) and \\( L\_2 \\) be two loss profiles.

   Since the function \\( x \\mapsto x^2 \\) is convex, it follows that:

   \\\[ \\begin{align\*} \\left(\\lambda L\_1 + (1-\\lambda)L\_2 - E\[\\lambda L\_1 + (1-\\lambda)L\_2\]\\right)^2 &amp;=\\left(\\lambda(L\_1 - E\[L\_1\]) + (1-\\lambda)(L\_2 - E\[L\_2\])\\right)^2\\\\ &amp;\\leq \\lambda \\left(L\_1 - E\[L\_1\]\\right)^2 + (1-\\lambda)\\left(L\_2 - E\[L\_2\]\\right)^2 \\end{align\*} \\\]

   Taking expectation, it follows that:

   \\\[ \\text{VAR}(\\lambda L\_1 + (1-\\lambda)L\_2) \\leq \\lambda \\text{VAR}(L\_1) + (1-\\lambda) \\text{VAR}(L\_2) \\\]

   showing that:

   \\\[ \\begin{align\*} RMV\_{\\alpha}(\\lambda L\_1 + (1-\\lambda)L\_2) &amp; = \\lambda E\[L\_1\] + (1-\\lambda)E\[L\_2\] + \\frac{\\alpha}{2} \\text{VAR}(\\lambda L\_1 + (1-\\lambda)L\_2)\\\\ &amp;\\leq \\lambda\\left(E\[L\_1\] + \\frac{\\alpha}{2} \\text{VAR}(L\_1)\\right) + (1-\\lambda)\\left(E\[L\_2\] + \\frac{\\alpha}{2} \\text{VAR}(L\_2)\\right)\\\\ &amp; = \\lambda RMV\_{\\alpha}(L\_1) + (1-\\lambda)RMV\_{\\alpha}(L\_2)\\\\ &amp; \\leq \\max \\left\\{ RMV\_{\\alpha}(L\_1), RMV\_{\\alpha}(L\_2) \\right\\} \\end{align\*} \\\]
3. **Law Invariance:** For the last assertion, let \\( L\_1 \\) and \\( L\_2 \\) be such that \\( F\_{L\_1} = F\_{L\_2} \\). It follows that:

   \\\[ \\begin{align\*} RMV\_{\\alpha}(L\_1) &amp; = \\int\_{\\mathbb{R}} x dF\_{L\_1}(x) + \\frac{\\alpha}{2}\\int\_{\\mathbb{R}} \\left\[x - \\int\_{\\mathbb{R}}x dF\_{L\_1}(x)\\right\]^2 dF\_{L\_1}(x) \\\\ &amp; = \\int\_{\\mathbb{R}} x dF\_{L\_2}(x) + \\frac{\\alpha}{2}\\int\_{\\mathbb{R}} \\left\[x - \\int\_{\\mathbb{R}}x dF\_{L\_2}(x)\\right\]^2 dF\_{L\_2}(x) \\\\ &amp; = RMV\_{\\alpha}(L\_2) \\end{align\*} \\\]

### Value at Risk (V@R)

The value at risk (V@R) is a widely used risk assessment measure introduced in the finance industry by JP Morgan around 1995. However as an instrument for measuring risk, it has been used for centuries in insurrance industry and turns out to be a very well known mathematical concept. It measures downside risk as follows:

> [!NOTE]
>
> **Definition**
>
> Let \\( L \\) be a loss profile. The value at risk (\\( V@R\_{\\alpha} \\)) with parameter \\( 0 \< \\alpha \< 1 \\) is defined as:
>
> \\\[ V@R\_{\\alpha}(L) = \\inf\\{m \\in \\mathbb{R} : P\[L \> m\] \\leq \\alpha\\}. \\\]

This can also be expressed as:

\\\[ \\begin{align\*} V@R\_{\\alpha}(L) &amp; = \\inf\\{m \\in \\mathbb{R} : P\[L \> m\] \\leq \\alpha\\}\\\\ &amp; = \\inf\\{m \\in \\mathbb{R} : 1-P\[L\\leq m\] \\leq \\alpha\\}\\\\ &amp; = \\inf\\{m \\in \\mathbb{R} : F\_L(m) \\geq 1-\\alpha\\} \\end{align\*} \\\]

where \\( F\_L(m):= P\[L\\leq m\] \\) is the cumulative distribution function (CDF) of \\( L \\).

![Value at Risk](<https://www.samuel-drapeau.info/FM_Lecture/images/var_dark.svg#only-dark>) ![Value at Risk](<https://www.samuel-drapeau.info/FM_Lecture/images/var_white.svg#only-light>)

> [!NOTE]
>
> **Note: Quantile Function**
>
> Note that the CDF \\(F\_L\\) is an increasing function from \\(0\\) to \\(1\\). Furthermore, it is right continuous meaning that \\(F\_L(m\_n)\\downarrow F\_L(m)\\) for any sequence \\(m\_n \\downarrow m\\). Indeed, let \\(A\_n = \\{L \\leq m\_n\\}\\) and \\(A =\\{L\\leq m\\}\\), it follows that \\(A\_1\\supseteq A\_2 \\ldots \\supseteq A\_n \\supseteq \\ldots\\) with \\(\\cap A\_n =A\\). As a consequence of the \\(\\sigma\\)-additivity of the probability measure, it follows that \\(P\[A\_n\]\\downarrow P\[A\]\\).
>
> Now, if \\(F\_L\\) is strictly increasing and continuous, it has an inverse \\(F\_L^{-1}\\colon (0, 1)\\to \\mathbb{R}\\) which is also strictly increasing and continuous. Such an inverse is called the quantile of \\(L\\) and denoted by \\(q\_L\\colon (0,1)\\to \\mathbb{R}\\). It follows that we can write the value at risk in terms of quantile:
>
> \\\[ \\begin{align\*} V@R\_{\\alpha}(L) &amp; = \\inf\\{m \\in \\mathbb{R} : F\_L(m) \\geq 1-\\alpha\\}\\\\ &amp; = \\inf\\{m \\in \\mathbb{R} : F^{-1}\_L(F\_L(m)) \\geq F^{-1}\_L(1-\\alpha)\\}\\\\ &amp; = \\inf\\{m \\in \\mathbb{R} : m \\geq F^{-1}\_L(1-\\alpha)\\}\\\\ &amp; = F^{-1}\_L(1-\\alpha) \\end{align\*} \\\]
>
> In other terms, \\(V@R\_{\\alpha}(L)=q\_L(1-\\alpha)\\) is the \\(1-\\alpha\\) quantile of the distribution.
>
> In the case where \\(F\_L\\) is not strictly increasing and continuous, we can still define the so called (left) pseudo-inverse or quantile as
>
> > **Definition: Quantile**
> >
> > The quantile of the random variable \\(L\\) is defined as
> >
> > \\\[ \\begin{equation\*} \\begin{split} q\_L \\colon (0,1) &amp; \\longrightarrow \\mathbb{R}\\\\ s &amp; \\longmapsto q\_L(\\alpha) = \\inf\\left\\{ m \\in \\mathbb{R}\\colon P\\left\[ L\\leq m \\right\] \\geq s\\right\\} \\end{split} \\end{equation\*} \\\]
>
> The quantile is an increasing and left continuous function for which holds
>
> \\\[ F\_L(q\_L(s)-) \\leq s\\leq F\_L(q\_L(s)) \\\]

The value at risk indicates the amount of cash or liquidity needed to reduce the loss size so that the probability of making losses exceeds \\( \\alpha \\) is small. Typical values for \\( \\alpha \\) are 5%, 1%, or 0.5%, depending on the horizon.

> [!NOTE]
>
> **Example**
>
> Let \\( \\Omega = \\{\\omega\_1, \\omega\_2, \\omega\_3, \\omega\_4\\} \\) with probabilities \\( p = (0.7\\%, 3.3\\%, 46\\%, 50\\%) \\), and let \\( L \\) be a loss profile defined as:
>
> \\\[ L(\\omega) = \\begin{cases} 10,000 &amp; \\text{if } \\omega = \\omega\_1, \\\\ -50 &amp; \\text{if } \\omega = \\omega\_2, \\\\ -200 &amp; \\text{if } \\omega = \\omega\_3, \\\\ -1,000 &amp; \\text{if } \\omega = \\omega\_4. \\end{cases} \\\]
>
> The corresponding CDF \\( F\_L(m) \\) is:
>
> \\\[ F\_L(m) = \\begin{cases} 0 &amp; \\text{if } m \< -1,000, \\\\ 50\\% &amp; \\text{if } -1,000 \\leq m \< -200, \\\\ 96\\% &amp; \\text{if } -200 \\leq m \< -50, \\\\ 99.3\\% &amp; \\text{if } -50 \\leq m \< 10,000, \\\\ 1 &amp; \\text{if } m \\geq 10,000. \\end{cases} \\\]
>
> From this, the quantile function is:
>
> \\\[ q\_L(x) = \\begin{cases} -1,000 &amp; \\text{if } 0 \< x \\leq 50\\%, \\\\ -200 &amp; \\text{if } 50\\% \< x \\leq 96\\%, \\\\ -50 &amp; \\text{if } 96\\% \< x \\leq 99.3\\%, \\\\ 10,000 &amp; \\text{if } 99.3\\% \< x \\leq 1. \\end{cases} \\\]
>
> Thus: \[ V@R\_{5\\%} = q\_L(95\\%) = -200, \\quad V@R\_{1\\%} = q\_L(99\\%) = -50, \\quad V@R\_{0.5\\%} = q\_L(99.5\\%) = 10,000. \]

> [!NOTE]
>
> **Note: Practical Computation of Value at Risk**
>
> Unlike mean-variance risk measures, which involve computing expectations (analytical or via Monte Carlo methods, for instance), the computation of Value at Risk (VaR) is slightly more complex. Even when a random variable has a probability density function, there is generally no analytical form for its quantile function. In cases where the cumulative distribution function (CDF) is strictly increasing and continuous, computing VaR requires inverting the function \\( m \\mapsto F\_L(m) \\). This involves solving the equation:
>
> \\\[ F\_L(m^\\ast) = s \\\]
>
> where \\( m^\\ast \\) is the quantile we are seeking. This is a classical root-finding problem.
>
> Most scientific libraries provide methods for root finding, such as Newton's method, the secant method, or more advanced mixed approaches like Brent's method. It is important to note, however, that VaR often focuses on high quantiles (e.g., 0.99 or 0.999) of the CDF, which lie near the boundary of the inverse. This makes the problem particularly challenging, as the derivative of the CDF approaches zero near these limits, testing the bounds of numerical precision. Fortunately, most scientific libraries with statistical functions provide predefined and highly optimized methods for quantile computation.
>
> Below, we illustrate this using Python, specifically with `scipy.optimize` and `scipy.stats`.
>
> Computation of value at risk
>
> ```python
> # import libraries
> import numpy as np
> from scipy.stats import norm, t             # Normal and Student distribution
> from scipy.optimize import root, brentq     # root->newton method, brentq->bissecant flavor
> import plotly.graph_objs as go              # professional but easy plotting
>
> # Straightforward quantile computation implementation
> def quantile(cdf, s):
>   # definition of the root function(1) 
>   def fun(m):
>     result = cdf(m) - s
>     return result
>
>   # return the root(2)
>   result = root(fun, 0)
>   return result.x[0]
>
> # Define two random variables
> X = norm()      # standard normal
> Y = t(df = 2)   # student with 2 as degree of freedom
>
> # plot the cdf of both
>
> x = np.linespace(-4, 4, 100)
> y1 = X.cdf(x)
> y2 = Y.cdf(x)
>
> fig = go.Figure()
> fig.add_scatter(x=x, y=y1, name="normal distribution")
> fig.add_scatter(x=x, y=y2, name="student distribution")
> fig.update_layout(title = 'CDF of normal and student')
> fig.show()
>
> # compute the var 0.01 and 0.01 for each
>
> print(f"""
> 1% V@R for Normal:\t{quantile(X.cdf, 0.99)}
> 0.01% V@R for Normal:\t{quantile(X.cdf, 0.999)}
> 1% V@R for Student:\t{quantile(Y.cdf, 0.99)}
> 0.01% V@R for Student:\t{quantile(Y.cdf, 0.999)}
> """)
>
>
> # using the pre programmed `ppf` functions
> print(f"""
> 1% V@R for Normal:\t{X.ppf(0.99)}
> 0.01% V@R for Normal:\t{X.ppf(0.999)}
> 1% V@R for Student:\t{Y.ppf(0.99)}
> 0.01% V@R for Student:\t{Y.ppf(0.999)}
> """)
>
> # You can compare the speed between your implementation and the pre programmed using %timeit
> ```
>
> 1. Find `m` such that `F(m) = s` is equivalent to finding `m` such that `F(m) - s = 0` which is the usual implementation.
> 2. We use here the Newton variant of root optimization problem. It only requires a start point and is usually fast. However it might not converge if the derivative is quite close to `0` so it might not always be adequate. Using `brentq`, as a bissecant type, requires to provide two bounds `a<b` within which that root shall be found. In particular it should hold that `fun(a)` has a different sign as `fun(b)`. Both have advantages and inconvenience.

As for mean-variance, value at risk also fulfills some properties

> [!NOTE]
>
> **Proposition**
>
> The Value at Risk V@R satisfies the following properties:
>
> 1. **Cash-invariance**: For every loss profile \\( L \\) and \\( m \\in \\mathbb{R} \\),
>
>    \\\[ V@R\_{\\alpha}(L - m) = V@R\_{\\alpha}(L) - m. \\\]
> 2. **Monotonicity**: For any two loss profiles \\( L\_1, L\_2 \\) with \\(L\_1(\\omega) \\leq L\_2(\\omega)\\) it holds,
>
>    \\\[ V@R\_{\\alpha}(L\_1) \\leq V@R\_{\\alpha}(L\_2). \\\]
> 3. **Law Invariance**: If two loss profiles \\( L\_1 \\) and \\( L\_2 \\) have the same CDF, then:
>
>    \\\[ V@R\_{\\alpha}(L\_1) = V@R\_{\\alpha}(L\_2). \\\]

**Proof**

1. **Cash-invariance:** For every \\( m \\in \\mathbb{R} \\), and loss \\( L \\), it holds with variable change \\(\\hat{m} = \\tilde{m} - m\\):

   \\\[ \\begin{align\*} V@R\_{\\alpha}(L-m) &amp; = \\inf\\left\\{ \\tilde{m} \\in \\mathbb{R} \\colon P\[L-m\>\\tilde{m}\] \\leq \\alpha \\right\\}\\\\ &amp; = \\inf \\left\\{ \\hat{m} - m \\colon P\[L\>\\hat{m}\] \\leq \\alpha \\right\\}\\\\ &amp; = \\inf \\left\\{ \\hat{m} \\colon P\[L\>\\hat{m}\] \\leq \\alpha \\right\\} - m = V@R\_{\\alpha}(L) - m \\end{align\*} \\\]
2. **Monotonicity:** Let \\( L\_1 \\leq L\_2 \\) be two loss profiles.

   For any \\(m\\), it holds

   \\\[ \\left\\{ \\omega \\colon L\_1(\\omega)\\leq m \\right\\} \\supseteq \\left\\{ \\omega \\colon L\_2(\\omega)\\leq m \\right\\} \\\]

   showing that for every \\(m\\) we have \\(P\[L\_1\\leq m\] \\geq P\[L\_2 \\leq m\]\\). Hence, we have

   \\\[ \\left\\{ m \\in \\mathbb{R} \\colon P\\left\[ L\_1\\leq m \\right\]\\geq 1-\\alpha \\right\\} \\subseteq \\left\\{ m \\in \\mathbb{R} \\colon P\\left\[ L\_2\\leq m \\right\]\\geq 1-\\alpha \\right\\} \\\]

   showing that the infimum of the the left handside is smaller than the infimum of the right hand side, that is \\(V@R\_{\\alpha}(L\_1)\\leq V@R\_{\\alpha}(L\_2)\\).
3. **Law Invariance:** This follows immediately since the value at risk depends only on the CDF.

## Sound Properties?

Both risk assessments make sense and have a certain appeal. Let us discuss some of the properties they fulfill:

- **Cash Invariance:** Given a risk assessment instrument \\( L \\mapsto R(L) \\), being cash invariant means that \\( R(L - m) = R(L) - m \\). This property is appreciated by economists and regulators as it confers a clear monetary interpretation to risk assessment. Regulators typically require financial institutions to maintain their total risk below zero. For a financial institution with a loss exposure \\( L \\), the question is how much liquidity (or cash) must be held to reduce the overall risk to below zero. With cash \\( m \\) and risky exposure \\( L \\), the resulting loss profile is \\( L - m \\), with a risk equal to \\( R(L - m) \\). A risk assessment below zero implies that \\( m \\geq R(L) \\). In other words, the minimal cash requirement to make the risky exposure acceptable is \\( m = R(L) \\).
- **Law Invariance:** Law invariance is important because, even though we work with random variables, in practice we observe only their realizations and approximate their CDF. Hence, a risk assessment instrument should depend solely on the CDF of the loss profile.
- **Monotonicity:** Monotonicity means that if the loss profile of one position is always greater than another, i.e., it results in higher losses in all scenarios, then its risk should also be higher.
- **Diversification (Convexity):** Diversification implies that combining two risky assets (a convex combination) should result in a risk lower than the worst of the two individual risks.

| Property | \\( MVR\_{\\alpha} \\) | \\( V@R\_{\\alpha} \\) |
| :--- | :---: | :---: |
| Cash Invariance |  |  |
| Law Invariance |  |  |
| Monotonicity |  |  |
| Diversification |  |  |

> [!WARNING]
>
> **Warning: Value at Risk might lead to Concentration**
>
> Value at Risk (VaR) can, in some cases, counteract diversification. The primary reason is that the quantile is just a single point on the CDF of the loss distribution and does not account for the full risk in the tail. The following example illustrates this concentration issue:
>
> In the first scenario, you lend \\( 1000 \\) RMB to a friend, expecting repayment in one year with \\( 4\\% \\) interest.  
> \- If the friend repays the loan, you gain \\( 40 \\) RMB.  
> \- If the friend defaults, you lose \\( 1000 \\) RMB.  
> \- Assume the probability of default is \\( 4\\% \\).
>
> The loss profile can be represented as:
>
> \\\[ L = \\begin{cases} -40 &amp; \\text{with probability } 96\\% \\\\ 1000 &amp; \\text{with probability } 4\\% \\end{cases} \\\]
>
> This results in the following CDF and quantile function:
>
> \\\[ \\begin{align\*} F\_L(m) &amp; = \\begin{cases} 0 &amp; \\text{for } m \< -40 \\\\ 96\\% &amp; \\text{for } -40 \\leq m \< 1000 \\\\ 100\\% &amp; \\text{for } m \\geq 1000 \\end{cases} \\\\ q\_L(s) &amp; = \\begin{cases} -40 &amp; \\text{for } 0 \< s \\leq 96\\% \\\\ 1000 &amp; \\text{for } s \> 96\\% \\end{cases} \\end{align\*} \\\]
>
> The Value at Risk at the \\( 5\\% \\) level is:
>
> \\\[ V@R\_{5\\%}(L) = q\_L(95\\%) = -40 \\\]
>
> Now, consider diversifying your exposure by lending \\( 500 \\) RMB to two independent friends:
>
> \\\[ L = \\begin{cases} -40 &amp; \\text{with probability } 92.16\\% \\\\ 480 &amp; \\text{with probability } 7.68\\% \\\\ 1000 &amp; \\text{with probability } 0.16\\% \\end{cases} \\\]
>
> This diversification reduces the probability of large losses to \\( 0.16\\% \\), but introduces a medium loss of \\( 480 \\) RMB with a \\( 7.68\\% \\) probability.
>
> The CDF and quantile function for this case are:
>
> \\\[ \\begin{align\*} F\_L(m) &amp; = \\begin{cases} 0 &amp; \\text{for } m \< -40 \\\\ 92.16\\% &amp; \\text{for } -40 \\leq m \< 480 \\\\ 99.84\\% &amp; \\text{for } 480 \\leq m \< 1000 \\\\ 100\\% &amp; \\text{for } m \\geq 1000 \\end{cases} \\\\ q\_L(s) &amp; = \\begin{cases} -40 &amp; \\text{for } 0 \< s \\leq 92.16\\% \\\\ 480 &amp; \\text{for } 92.16\\% \< s \\leq 99.84\\% \\\\ 1000 &amp; \\text{for } s \> 99.84\\% \\end{cases} \\end{align\*} \\\]
>
> The Value at Risk at the \\( 5\\% \\) level is:
>
> \\\[ V@R\_{5\\%}(L) = q\_L(95\\%) = 480 \\\]
>
> In this case, the Value at Risk increases from \\( -40 \\) to \\( 480 \\), contradicting the expectation that diversification reduces risk. The primary reason is that, in the non-diversified scenario, all potential losses are concentrated in the tail of the distribution beyond the chosen quantile. In other words, Value at Risk is *blind* to the magnitude of losses beyond the selected quantile level.

Even though both instruments (mean-variance risk and Value at Risk) have intuitive appeal and practical applications, closer scrutiny reveals that each violates one or more fundamental properties expected of a robust risk measure.
