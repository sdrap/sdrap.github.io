# Mathematical Model

In this section, we model a one-period financial market evolving between two points in time:

- **Today:** The current state of the world is known, including the prices of equities, commodities, and the overall economic condition.
- **Tomorrow:** Various possible states of the world may emerge, where changes in the economy or the prices of stocks and commodities occur based on these states.

In this financial market, we have \\(d\\) *risky assets* available for investment and a *bank account* to store or borrow liquidity.

- **At time \\(0\\):** The prices of these \\(d\\) financial assets and the amount in the bank account are known. Investors can decide on a *strategy*, specifying how much to invest in each asset by purchasing a certain number of *shares*. The bank account is used to *finance* these investments.
- **At time \\(1\\):** The portfolio's value is determined by:
- The remaining balance in the bank account after buying the shares at time \\(0\\), including interest earned.
- The *uncertain* value of the financial assets at time \\(1\\), multiplied by the number of shares held.

## Bank Account

The bank account is denoted by \\(B\\), where \\(B\_0 = 1\\) represents the price of one unit of currency at time \\(0\\). The bank offers an interest rate \\(r\\), announced at time \\(0\\) and applied at time \\(1\\). With one unit deposited at time \\(0\\), the amount in the account at time \\(1\\) becomes:

\\\[ \\begin{equation\*} B\_1 = B\_0(1 + r) = 1 + r \\end{equation\*} \\\]

We assume \\(r \> -1\\), meaning the bank does not default. The bank account evolution is summarized as:

\\\[ \\begin{equation\*} \\begin{cases} B\_0 = 1 \\\\ B\_1 = 1 + r \\end{cases} \\end{equation\*} \\\]

## Financial Assets

These assets are represented by the vector:

\\\[ \\begin{equation\*} \\boldsymbol{S} = (S^1, \\ldots, S^d) \\end{equation\*} \\\]

Each \\(S^k\\) for \\(k = 1, \\ldots, d\\) describes the price evolution of financial asset \\(k\\) between time \\(0\\) and \\(1\\).

- **At time \\(0\\):** The price of asset \\(k\\) is \\(S\_0^k\\), which is strictly positive and known:

  \\\[ \\begin{equation\*} \\boldsymbol{S}\_0 = (S\_0^1, \\ldots, S\_0^d) \\quad \\text{where} \\quad S\_0^k \> 0 \\; \\text{for all }k \\end{equation\*} \\\]
- **At time \\(1\\):** The price of asset \\(k\\) is \\(S\_1^k\\), which is uncertain but positive (if \\(S\_1^k = 0\\), the asset \\(k\\) has defaulted):

  \\\[ \\begin{equation\*} \\boldsymbol{S}\_1 = (S\_1^1, \\ldots, S\_1^d) \\quad \\text{where} \\quad S\_1^k \\geq 0 \\; \\text{for all }k \\end{equation\*} \\\]

## Self-Financing Portfolio

A *portfolio* consists of holdings in each financial asset and the balance in the bank account. The portfolio's total value is denoted by \\(\\bar{V}\\).

- **At time \\(0\\):** You observe the prices \\(S\_0^k\\) for \\(k = 1, \\ldots, d\\) and decide on a strategy, holding \\(\\eta^k\\) in \\(\\mathbb{R}\\) shares of each asset. The cost of purchasing these assets is:

  \\\[ \\begin{equation\*} \\sum\_{k=1}^d \\eta^k S\_0^k = \\boldsymbol{\\eta} \\cdot \\boldsymbol{S}\_0 \\end{equation\*} \\\]

  where \\(\\boldsymbol{\\eta} = (\\eta^1, \\ldots, \\eta^d)\\) represents your holdings. The *self-financing* condition requires that this cost is fully covered by the bank account. Thus:

  \\\[ \\begin{equation\*} \\bar{V}\_0 \\leadsto \\underbrace{\\bar{V}\_0 - \\sum\_{k=1}^d \\eta^k S^k\_0}\_{\\text{Bank account value}} + \\underbrace{\\sum\_{k=1}^d \\eta^k S^k\_0}\_{\\text{Asset holdings value}}= \\bar{V}\_0 - \\boldsymbol{\\eta}\\cdot \\boldsymbol{S}\_0 + \\boldsymbol{\\eta}\\cdot \\boldsymbol{S}\_0 = \\bar{V}\_0 \\end{equation\*} \\\]
- **At time \\(1\\):** The portfolio value evolves as asset prices change:

  \\\[ \\begin{align\*} \\bar{V}\_1 &amp; = \\left(\\bar{V}\_0 - \\sum\_{k=1}^d \\eta^k S^k\_0\\right)(1+r) + \\sum\_{k=1}^d \\eta^k S^k\_1 \\\\ &amp; = \\left( \\bar{V}\_0 - \\boldsymbol{\\eta} \\cdot \\boldsymbol{S}\_0 \\right)(1+r) +\\boldsymbol{\\eta} \\cdot \\boldsymbol{S}\_1 \\\\ &amp; = \\bar{V}\_0(1+r) +\\boldsymbol{\\eta} \\cdot \\left( \\boldsymbol{S}\_1 - \\boldsymbol{S}\_0(1+r) \\right) \\end{align\*} \\\]

Hence a portfolio over time is entirely determined by its start value \\(\\bar{V}\_0\\) as well as the strategy \\(\\boldsymbol{\\eta} = (\\eta^1, \\ldots, \\eta^d)\\).

**Remark: How realistic are those assumptions?**

In this setting, we make somewhat restrictive assumptions that are disputable namely:

- No dividends.
- No transaction costs when buying assets: fixed fees, taxes, transaction fees, liquidity.
- The amount of shares in a financial asset is a real number. Usually you are only allowed to buy/sell a round lot. Furthermore, you are allowed to hold a negative amount of shares. In other terms short selling is allowed and without particular transaction costs related to it.
- You can buy/sell unlimited amount of shares, in particular for very large amount you face no liquidity costs.
- The bank account provides the same rate \\(r\\) for deposit and lending which is very unlikely. And this rate is independent of the amount.
- You can lend infinite amount of money from the bank.

We consider the ideal scenario of a small investor operating in a frictionless financial market—an assumption that closely approximates modern realities. Some aspects, such as taxes, transaction fees, dividends, and round lot restrictions, are either negligible or can be incorporated with minimal adjustments. However, factors like differing lending and deposit rates, liquidity costs, short-selling constraints, and price impacts are more complex and can significantly influence the results.

## Discounting

It is often convenient to consider *discounted values* of financial assets and the portfolio to express their worth in terms of today's currency. Define the discounted prices \\(\\boldsymbol{X}=\\boldsymbol{S}/B\\) and portfolio value \\(V=\\bar{V}/B\\) as follows:

\\\[ \\begin{align\*} X\_0^k &amp; = \\frac{S^k\_0}{B\_0}=S^k\_0 &amp; \\text{and} &amp; &amp; X\_1^k &amp; = \\frac{S\_1^k}{B\_1}=\\frac{S\_1^k}{1+r} \\\\ V\_0 &amp; = \\frac{\\bar{V}\_0}{B\_0}=\\bar{V}\_0 &amp; \\text{and} &amp; &amp; V\_1 &amp; = \\frac{\\bar{V}\_1}{B\_1}=\\frac{\\bar{V}\_1}{1+r} \\end{align\*} \\\]

In particular, it follows that

\\\[ \\begin{align\*} V\_1 &amp; = \\frac{\\bar{V}\_1}{1+r}\\\\ &amp; = \\frac{1}{1+r}\\left(\\bar{V}\_0(1+r) +\\sum\_{k=1}^d \\eta^k\\left( S^k\_1 - (1+r)S\_0^k\\right)\\right)\\\\ &amp; = \\bar{V}\_0 +\\sum\_{k=1}^d \\eta^k\\left( \\frac{S^k\_1}{1+r} - S\_0^k\\right)\\\\ &amp; = V\_0 + \\sum\_{k=1}^n \\eta^k\\left( X^k\_1 - X^k\_0 \\right)\\\\ &amp; = V\_0 + \\boldsymbol{\\eta} \\cdot \\left( \\boldsymbol{X}\_1 - \\boldsymbol{X}\_0 \\right) = V\_0 + \\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \\end{align\*} \\\]

for which we get an interpretation of the evolution of the discounted value of the portfolio:

\\\[ \\begin{equation\*} V\_1 = \\underbrace{V\_0}\_{\\text{Initial Value}} + \\underbrace{\\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1}\_{\\text{Incremental gain/loss of discounted prices}} \\end{equation\*} \\\]

## Uncertainty

So far, we have described a simple financial market and how investments can be made while adhering to self-financing principles. However, while we acknowledged that the prices of assets at time \\(1\\) are subject to uncertainty, we have not detailed how this uncertainty is modeled. In other words, while we treated the financial assets at time \\(1\\) as a vector of prices, we have not specified how this vector reflects the uncertainty associated with its values.

The price evolution depends on the "state of the world" that will be realized. If we denote by \\(\\omega\\) one such possible state, then \\(S\_1^k(\\omega)\\) represents the price of asset \\(k\\) at time \\(1\\) in state \\(\\omega\\). If \\(\\Omega\\) denotes the collection of all possible states, the stock price \\(S\_1^k\\) is a function:

\\\[ \\begin{align\*} S\_1^k\\colon \\Omega &amp;\\longrightarrow \\mathbb{R}\_+\\\\ \\omega &amp; \\longmapsto \\underbrace{S\_1^k(\\omega)}\_{\\text{Price of financial asset $k$ at time $1$ in state $\\omega$}} \\end{align\*} \\\]

Combining all such functions, we obtain state-dependent price vectors:

\\\[ \\begin{align\*} \\boldsymbol{S}\_1\\colon \\Omega &amp; \\longrightarrow \\mathbb{R}\_+^d\\\\ \\omega &amp; \\longmapsto \\boldsymbol{S}\_1(\\omega) = (S\_1^1(\\omega), \\ldots, S\_1^d(\\omega)) \\end{align\*} \\\]

Similarly, the discounted self-financing portfolio value at time \\(1\\) and the discounted asset prices become state-dependent functions:

\\\[ \\begin{align\*} \\boldsymbol{X}\_1\\colon \\Omega &amp;\\longrightarrow \\mathbb{R}\_{+}^d &amp; V\_1 \\colon \\Omega &amp;\\longrightarrow \\mathbb{R} \\\\ \\omega &amp; \\longmapsto \\boldsymbol{X}\_1(\\omega) = \\left( \\frac{S\_1^1(\\omega)}{1+r}, \\ldots, \\frac{S\_1^d(\\omega)}{1+r} \\right) &amp; \\omega &amp;\\longmapsto V\_1(\\omega) = V\_0 + \\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1(\\omega) \\end{align\*} \\\]

The objective of financial mathematics is to estimate or price these state-dependent portfolios. To achieve this, we need further assessments of how likely each event is to occur. This is where stochastic theory plays a crucial role.

> [!NOTE]
>
> ****Definition:** One Period Financial Market**
>
> Given a probability space \\((\\Omega, \\mathcal{F}, P)\\), a **financial market** is defined as follows:
>
> - **A bank account** \\(B\\), where:
>
>   \\\[ B\_0 = 1 \\quad \\text{and} \\quad B\_1 = 1 + r \\\]
>
>   for \\(r\>-1\\)
> - **\\(d\\)-financial assets** \\(\\boldsymbol{S} = (S^1, \\ldots, S^d)\\), where:
>
>   \\\[ S\_0^k \> 0 \\quad \\text{and} \\quad S\_1^k : \\Omega \\to \\mathbb{R}\_+ \\\]
>
>   for \\(k = 1, \\ldots, d\\), with \\(S\_1^k\\) being a measurable random variable.
>
> A **Portfolio** \\(\\bar{V}\\) is given by a start value \\(\\bar{V}\_0 \\in \\mathbb{R}\\) and a holding **strategy** \\(\\boldsymbol{\\eta} \\in \\mathbb{R}^d\\). Self financing condition implies
>
> \\\[ \\bar{V}\_1 = \\bar{V}\_0(1+r) + \\sum \\eta^k \\left(S\_1^k - S\_0^k(1+r)\\right) = \\bar{V}\_0 + \\boldsymbol{\\eta}\\cdot \\left(\\boldsymbol{S}\_1 - \\boldsymbol{S}\_0(1+r)\\right) \\\]
>
> The discounded portfolio \\(V = \\bar{V}/B\\) and financial assets \\(\\boldsymbol{X} = \\boldsymbol{S}/B\\) allows to write
>
> \\\[ V\_1 = V\_0 + \\sum \\eta^k \\left(X\_1^k - X\_0^k\\right) = V\_0 + \\boldsymbol{\\eta}\\cdot \\Delta \\boldsymbol{X}\_1 \\\]

> [!WARNING]
>
> ****Warning:** What about returns, portfolio weights?**
>
> Very often in finance, the exposition is done in terms of returns and portfolio weights. Talking in terms of returns and weights requires some particular care.
>
> It is possible to speak of returns for the financial market as the prices at time \\(0\\) are strictly positive. In other terms, if we define the interest rate \\(r\\) as:
>
> \\\[ r = \\frac{B\_1 - B\_0}{B\_0}, \\quad \\text{then it holds} \\quad B\_1 = B\_0(1 + r) \\\]
>
> Similarly, for the return \\(R\_1^k\\) of a financial asset \\(k\\), we define:
>
> \\\[ R\_1^k = \\frac{S\_1^k - S\_0^k}{S\_0^k}, \\quad \\text{then it holds} \\quad S\_1^k = S\_0^k(1 + R\_1^k) \\\]
>
> Thus, the definition of a financial market as described earlier is equivalent to specifying:
>
> - A vector \\(\\boldsymbol{S}\_0\\) of strictly positive initial prices.
> - An interest rate \\(r \> -1\\), with \\(r \\in \\mathbb{R}\\).
> - A vector \\(\\boldsymbol{R}\_1 = (R\_1^1, \\ldots, R\_1^d)\\) of random returns, where:
>
>   \\\[ R\_1^k: \\Omega \\longrightarrow \[-1, \\infty), \\quad \\omega \\longmapsto R\_1^k(\\omega) \\\]
>
>   for each \\(k = 1, \\ldots, d\\).
>
> It is also possible for a portfolio to speak in terms of holding value rather than number of shares, that is \\(\\boldsymbol{h} = \\boldsymbol{\\eta}\\boldsymbol{S}\_0 = (\\eta^1 S\_0^1, \\ldots, \\eta^d S\_0^d)\\). In this case we can write the portfolio evolution as
>
> \\\[ \\begin{align\*} \\bar{V\_1} &amp; = \\bar{V}\_0(1+r) + \\sum \\eta^k\\left(S\_1^k - S\_0^k (1+r)\\right)\\\\ &amp; = \\bar{V}\_0(1+r) + \\sum \\eta^k S\_0^k \\left(\\frac{S\_1^k}{S\_0^k} - (1+r)\\right)\\\\ &amp; = \\bar{V}\_0(1+r) + \\sum h^k \\left(R\_1^k - r\\right)\\\\ &amp; = \\bar{V}\_0(1+r) + \\boldsymbol{h}\\cdot \\left(\\boldsymbol{R}\_1 - r\\right) \\end{align\*} \\\]
>
> Now we would like to consider the returns of the portfolio \\((\\bar{V}\_1 - \\bar{V}\_0)/\\bar{V}\_0\\) as well as the portfolio weight \\(\\boldsymbol{w} = \\boldsymbol{h}/\\bar{V\_0}\\). Indeed, the portfolio weight in asset \\(k\\) is equal to the asset value holding divided by the portfolio value at time \\(0\\). Following on the previous computation we have
>
> \\\[ \\begin{align\*} \\frac{\\bar{V}\_1 - \\bar{V}\_0}{\\bar{V}\_0} &amp; = r + \\sum \\frac{h^k}{\\bar{V}\_0}\\left(R^k\_1 - r\\right)\\\\ &amp; = r + \\boldsymbol{w}\\cdot \\left(\\boldsymbol{R}\_1 - r\\right) \\end{align\*} \\\]
>
> We get the classical interpretation that the portfolio returns is equal to the risk free rate plus the weighted excess returns in the financial assets. In particular if \\(\\sum w^k = 1\\), meaning that you hold your portfolio entirely in assets, the returns of the portfolio is equal to \\(\\boldsymbol{w}\\cdot \\boldsymbol{R}\_1\\).
>
> This looks familar and used widely, it is however  **mathematically not correct without further assumptions**. Consider the following situations where \\(\\bar{V}\_0 \<0\\) or \\(\\bar{V}\_0 = 0\\), returns and weights do not make much sense isn't it?
>
> Furthermore, even if you assume that \\(\\bar{V}\_0\>0\\) (usually \\(\\bar{V}\_0 = 1\\)), suppose that you can short, then you may well end-up with a strictly negative or zero portfolio value at time \\(1\\). How would you then compute the portfolio returns between time \\(1\\) and time \\(2\\)?
>
> Such a way to look at portfolio returns are consistent mathematically if some strong assumptions are made to garantee that \\(\\bar{V}\_0\\) and \\(\\bar{V}\_1\\) remain strictly positive (no shorting plus budget constraint for instance). This is the reason why we do not consider during this lecture this kind of approach (portfolio returns or portfolio weights).
