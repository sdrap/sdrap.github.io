# Binomial Model aka Cox Ross Rubinstein Model

The Cox Ross Rubinstein model can litteraly be considered as the discrete time full analog to the Black-Scholes-Merton model. The dynamic is entirely determined by the result of a coin toss every day, hence the following model:

## Probability Model

The space of coint toss sequences is given by \\(\\Omega = \\{\\omega = (\\omega\_1, \\ldots, \\omega\_T) : \\omega\_t = \\pm 1\\}\\) where \\(\\omega=(\\omega\_1, \\ldots, \\omega\_T)\\) represents each sequence of \\(\\pm1\\) as result of the coin toss. As for the \\(\\sigma\\)-algebra of events we consider \\(\\mathcal{F}=2^\\Omega\\). We also consider a probability measure \\(P\\) such that \\(P\[\\{\\omega\\}\] \> 0\\) for every \\(\\omega\\).

As for the information we consider the stochastic process \\(Y=(Y\_t)\_{t=1, \\ldots T}\\) given by

\\\[ \\begin{equation\*} \\begin{split} Y\_t\\colon \\Omega &amp; \\longmapsto \\{-1, 1\\}\\\\ \\omega &amp; \\longrightarrow Y\_t(\\omega) = \\omega\_t = \\text{result of coin toss at time }t \\end{split} \\end{equation\*} \\\]

In other terms the stochastic process \\(Y\\) provides information about the result of the coin toss at each time. We therefore define the filtration

\\\[ \\mathcal{F}\_0 = \\{\\emptyset, \\Omega\\} \\quad \\text{and}\\quad \\mathcal{F}\_t = \\sigma\\left( Y\_s\\colon s\\leq t \\right) \\\]

In other terms, \\(\\mathcal{F}\_t\\) is the set of events which have been revealed by all coin tosses up to time \\(t\\). It can be shown that if \\(\\xi\\) is a \\(\\mathcal{F}\_t\\)-measurable random variable, then this random variable only depends on the coin tosses up to time \\(t\\), that is

\\\[ \\xi(\\omega) = \\xi( \\underbrace{\\omega\_1, \\ldots, \\omega\_t}\_{\\text{Information up to $t$}}, \\underbrace{\\omega\_{t+1}, \\ldots, \\omega\_T}\_{\\text{Information after $t$}} ) = \\xi( \\omega\_1, \\ldots, \\omega\_t ) \\\]

## Market Model

- **Bank account** \\(B=(B\_t)\_{t=0, \\ldots, T}\\) whith

  \\\[ B\_0 = 1, \\quad \\text{and}\\quad B\_t = B\_{t-1}(1+r) = (1+r)^t \\\]

  for a fixed interest rate \\(r\>-1\\). Clearly, the bank account is predictable since the interest rate is constant.
- **Single risky asset** \\(S = (S\_t)\_{t=0, \\ldots, T}\\) where

  \\\[ S\_0\>0 \\quad \\text{and}\\quad S\_t = S\_{t-1}\\left( 1+R\_t\\right) \\\]

  where the returns of the stock \\(R=(R\_t)\_{t=1, \\ldots, T}\\) is a stochastic process given by

  \\\[ \\begin{align\*} R\_t(\\omega) &amp; = \\begin{cases} u &amp; \\text{if }\\omega\_t = 1\\\\ d &amp; \\text{if }\\omega\_t = -1 \\end{cases} \\end{align\*} \\\]

  where \\(-1\<d\<u\\) are constants. Clearly, \\(R\_t\\) only depends on the result of the coin toss at time \\(t\\), which can also be seen from

  \\\[ R\_t = u 1\_{\\{Y\_t = 1\\}} + d 1\_{\\{Y\_t = -1\\}} = (u-d)1\_{\\{Y\_t = 1\\}} +d \\\]

  showing that \\(S\\) is an adapted process.

## No arbitrage and Pricing Measure

This financial model is called the binomial model or Cox, Ross, and Rubinstein model (CRR for short).

> [!NOTE]
>
> **Proposition**
>
> The CRR model is arbitrage-free if and only if \\(d \< r \< u\\). In this case, the CRR model is complete with unique pricing measure \\(P^\\ast\\) equivalent to \\(P\\). This risk pricing measure is characterized by the fact that the random variables \\(R\_1, \\ldots, R\_T\\) are iid with common distribution:
>
> \\\[ P^\\ast\[R\_t = u\] = p = \\frac{r - d}{u - d}, \\quad t = 1, \\ldots, T \\\]

> [!NOTE]
>
> **Proof**
>
> By the FTAP, arbitrage-free is equivalent to the existence of a pricing measure \\(P^\\ast\\) equivalent to \\(P\\). Under such \\(P^\\ast\\), the discounted price process is a martingale. In particular, it holds:
>
> \\\[ 0 = E^\\ast\\left\[ \\Delta X\_t \\mid \\mathcal{F}\_{t-1} \\right\] = E^\\ast\\left\[ X\_{t-1} \\left( \\frac{1 + R\_t}{1 + r} - 1 \\right) \\mid \\mathcal{F}\_{t-1} \\right\] = X\_{t-1} E^\\ast\\left\[ \\frac{R\_t - r}{1 + r} \\mid \\mathcal{F}\_{t-1} \\right\] \\\]
>
> Since \\(X\_{t-1} \> 0\\) and \\(R\_t = (u-d)1\_{\\{Y\_t = 1\\}} +d\\), it follows that
>
> \\\[ r = E^\\ast\[R\_t \\mid \\mathcal{F}\_{t-1}\] = (u - d) P^\\ast\\left\[ Y\_t = 1 \\mid \\mathcal{F}\_{t-1} \\right\] + d \\\]
>
> Showing that
>
> \\\[ P^\\ast\\left\[ Y\_t = 1 \\mid \\mathcal{F}\_t \\right\] = \\frac{r - d}{u - d} \\\]
>
> for every \\(t = 0, \\ldots, T\\).
>
> From this relation, we conclude three facts:
>
> - The conditional distribution of \\(P^\\ast\\) under \\(\\mathcal{F}\_{t-1}\\), that is, \\(P^\\ast\[\\cdot \\mid \\mathcal{F}\_{t-1}\]\\), is constant for every \\(t = 0, \\ldots, T-1\\). Hence, \[ P^\\ast\\left\[ Y\_t = 1 \\mid \\mathcal{F}\_t \\right\] = P^\\ast\\left\[ Y\_t = 1 \\right\] = P^\\ast\\left\[ Y\_1 = 1 \\right\] \]
> - Since \\(P^\\ast\\) is a probability measure equivalent to \\(P\\), it follows that
>
>   \\\[ 0 \< \\frac{r - d}{u - d} \< 1 \\\]
>
>   That is, \\(d \< r \< u\\).
> - The formula for the probability \\(P^\\ast\\) is uniquely determined, and therefore, if the market is arbitrage-free, it has to be complete.
>
> As for the independence of \\(R\\), it follows readily from the definition of \\(P^\\ast\\).

> [!NOTE]
>
> **Remark**
>
> Note that the distribution of the pricing measure \\(P^\\ast\\) is entirely given by \\(P^\\ast\[R\_t = u\] = p\\). Indeed, since \\(\\{Y\_t = 1\\} =\\{R\_t=u\\}\\) as well as \\(\\{Y\_t = -1\\} = \\{R\_t = d\\}\\) it follows that \\((Y\_1, \\ldots, Y\_T)\\) are iid. Hence, for \\(\\omega = (\\omega\_1, \\ldots, \\omega\_T)\\) it holds that
>
> \\\[ \\begin{align\*} P^\\ast\\left\[ \\{\\omega\\} \\right\] &amp; = P^\\ast\\left\[ Y\_1 = \\omega\_1, \\ldots, Y\_T = \\omega\_T \\right\]\\\\ &amp; = P^\\ast\\left\[ \\cap\_{t=1}^T \\{Y\_t = \\omega\_t\\} \\right\]\\\\ &amp; = \\prod\_{t=1}^T P^\\ast\[Y\_t = \\omega\_t\] &amp; &amp; \\text{Independence of }Y\_1, \\ldots, Y\_T\\\\ &amp; = \\prod\_{t=1}^T P^\\ast\[Y\_1 = \\omega\_t\] &amp; &amp; \\text{Identical distribution of }Y\_1, \\ldots, Y\_T\\\\ &amp; = p^l (1-p)^{T-l} \\end{align\*} \\\]
>
> where \\(l = \\\# \\{t \\colon \\omega\_t = 1\\}\\) is the number of \\(1\\) in the sequence of coin tosses \\(\\omega = (\\omega\_1, \\ldots, \\omega\_T)\\).

Since the market is complete, we can therefore:

- **Price** any European contingent claim \\(C\\) uniquely by means of

  \\\[ \\pi(C) = E^\\ast\\left\[ \\frac{C}{(1 + r)^T} \\right\] \\\]
- **Replicate** (or hedge) the claim by means of a strategy \\(\\eta\\) such that

  \\\[ \\pi(C) + \\sum\_{s=1}^T \\eta\_s \\Delta X\_s = \\frac{C}{(1 + r)^T} \\\]

In particular, given the replicating strategy \\(\\eta\\), we can even provide the (discounted) price at any time by means of

\\\[ V\_t = \\pi(C) + \\sum\_{s=1}^t \\eta\_s \\Delta X\_s = E^\\ast\\left\[ \\frac{C}{(1 + r)^T} \\mid \\mathcal{F}\_t \\right\] \\\]

**Pricing** (i.e., computing \\(\\pi(C)\\)) and **Hedging** (i.e., finding \\(\\eta\\)) are two of three (managing risk is a fundamental component) main activities of financial institutions engaging in derivative trading.

Before any further assumptions, as for the price, since we have an explicit expression for \\(P^\\ast\\), it holds that

\\\[ \\pi(C) = \\sum\_{\\omega \\in \\Omega} \\frac{C(\\omega)}{(1+r)^T} P^\\ast\[\\{\\omega\\}\] = \\sum\_{\\omega \\in \\Omega}\\frac{C(\\omega)}{(1+r)^T}p^{l(\\omega)}(1-p)^{T-l(\\omega)} \\\]

where \\(l(\\omega) = \\\# \\{t \\colon \\omega\_t = 1\\}\\).

> [!WARNING]
>
> This simple expression that can be implemented easily programatically hides however a very important fact. The sum is processed over all possible paths of coin tosses, and the cardinality of which is equal to \\(2^T\\). Even with such a very simple market, if we consider one year maturity by daily trading, it amounts for \\(2^{260}\\) paths which largely outmatch any computational power. Hence, it is not efficiently implementable, and without further assumptions, this curse of dimensionality can only be overcome through Monte-Carlo methods, sampling a large number, though less than \\(2^{260}\\) of paths and approximating the expectation.

## Reducing Complexity: Vanilla Derivatives

Many of the derivatives are plain vanilla European options, that is derivatives which discounted value only depends on the last value of the underlying:

\\\[ H = \\frac{C}{(1+r)^T} = h(S\_T) \\\]

where \\(h\\colon \\mathbb{R} \\to \\mathbb{R}\\). For instance \\(h(x) = (x-K)^+/(1+r)^T\\) the discounted profile of a call option. However this option can only take \\(T+1\\) values \\(S\_0(1+u)^l(1+d)^{T-l}\\) for \\(l = 0, \\ldots, T\\) with each values corresponding to \\(C\_T^l=T!/(l!(T-l)!)\\) different possible paths. The computation of the price at time \\(0\\) therefore simplifies to

\\\[ \\begin{align\*} \\pi(C) &amp; = \\sum\_{\\omega \\in \\Omega} H(\\omega)P^\\ast\[\\{\\omega\\}\]\\\\ &amp; = \\sum\_{l=0}^T h\\left(S\_0 (1+u)^l(1+d)^{T-l}\\right) C\_T^l p^l (1-p)^{T-l} \\end{align\*} \\\]

which turns the computation of the price from a \\(2^T\\) to a \\(T+1\\) sum.

### Dynamic Pricing

A further particularity of those options, is that the value of the discounted portfolio can also be computed explicitely through a simple backward technique. This relies on the following mathematical result

> [!NOTE]
>
> **Proposition**
>
> Let \\(X\\) and \\(Y\\) be two random variable where \\(X\\) is \\(\\mathcal{F}\_t\\)-measurable and \\(Y\\) is independent of \\(\\mathcal{F}\_t\\). Then for every function \\(h:\\colon \\mathbb{R} \\times \\mathbb{R} \\to \\mathbb{R}\\) it holds (modulo integrability)
>
> \\\[ E^{P^\\ast}\\left\[ h(X, Y) |\\mathcal{F}\_t \\right\](\\omega) = v(X(\\omega)) \\\]
>
> where \\(v\\colon \\mathbb{R} \\to \\mathbb{R}\\) is a function defined as
>
> \\\[ v(x) = E^{P^\\ast}\\left\[ h(x, Y) \\right\] \\\]

> [!NOTE]
>
> **Remark**
>
> This proposition basically says that since \\(Y\\) is independent of \\(\\mathcal{F}\_t\\) and \\(X\\) is \\(\\mathcal{F}\_t\\) measurable, then computing the conditional expectation corresponds to freezing \\(X(\\omega)\\) and computing the expectation. In not so adequate notations,
>
> \\\[ E^{P^\\ast}\\left\[ h(X, Y) | \\mathcal{F}\_t \\right\](\\omega) = E^{P^\\ast}\\left\[ h(x, Y) | x = X(\\omega) \\right\] \\\]

This allows us to state the discrete formulation of partial differential equation type for the portfolio value:

> [!NOTE]
>
> **Proposition**
>
> For a european vanilla option \\(H = h(S\_T)\\), it holds that that the discounted value of the hedging portfolio is equal to
>
> \\\[ V\_t = v\_t(S\_t) \\\]
>
> where \\(v\_t \\colon \\mathbb{R} \\to \\mathbb{R}\\) for \\(t=T, \\ldots, 0\\) is recursively defined as
>
> \\\[ \\begin{equation\*} \\begin{cases} v\_T(x) = h(S\_T)\\\\ \\\\ v\_t(x) = p v\_{t+1}(x(1+u)) + (1-p)v\_t(x(1+d)) &amp; \\text{for }t = T-1, \\ldots, 0 \\end{cases} \\end{equation\*} \\\]

> [!NOTE]
>
> **Proof**
>
> By finite inverse induction.
>
> - For \\(t=T\\) it holds that \\(V\_t = H = h(S\_T) = v\_T(S\_T)\\) by definition.
> - For \\(t=T-1\\), by the martingale property, it holds that \\(V\_{T-1} = E^{P^\\ast}\[V\_T |\\mathcal{F}\_{T-1}\] = E^{P^\\ast}\[v\_T(S\_T)|\\mathcal{F}\_{T-1}\]\\). Now using the proposition above, since \\(S\_{T-1}\\) is \\(\\mathcal{F}\_{T-1}\\)-measurable and \\(R\_T\\) is independent to \\(\\mathcal{F}\_{T-1}\\) we get
>
>   \\\[ \\begin{equation\*} V\_T = E^{P^\\ast}\\left\[ v\_T(S\_{T-1}(1+R\_T)) |\\mathcal{F}\_{T-1} \\right\] = v\_{T-1}(S\_{T-1}) \\end{equation\*} \\\]
>
>   for
>
>   \\\[ \\begin{align\*} v\_{T-1}(x) &amp; = E^{P^\\ast}\\left\[ v\_T(x (1+R\_T)) \\right\]\\\\ &amp; = E^{P^\\ast}\\left\[ v\_T(x(1+R\_1)) \\right\] &amp;&amp; R\_1, \\ldots, R\_T \\text{ are iid}\\\\ &amp; = pv\_T(x(1+u)) + (1-p)v\_T(x(1+d)) \\end{align\*} \\\]
>
> The next steps \\(T-2, \\ldots, 0\\) follows the same argumentation.

### Dynamic Hedging

As for the second part of the job, hedging, we know that there exists a predictable strategy \\(\\eta = (\\eta\_t)\_{t=1, \\ldots, T}\\) that will hedge the claim. Again, in the setting of plain vanilla european option, these ones can be computed backwardly as soon as you computed the sequence of functions \\(v\_0, \\ldots, v\_T\\).

> [!NOTE]
>
> **Proposition**
>
> For a european vanilla option \\(H= h(S\_T)\\) the hedging strategy \\(\\eta = (\\eta\_t)\_{t=1, T}\\) is given by
>
> \\\[ \\eta\_t = \\Delta\_t(S\_{t-1}) \\\]
>
> where \\(\\Delta\_t \\colon \\mathbb{R} \\to \\mathbb{R}\\) for \\(t=1, \\ldots, T\\) are functions recursively computed as follows
>
> \\\[ \\displaystyle \\Delta\_t(x) = (1+r)^t \\frac{v\_t(x(1+u)) - v\_t(x(1+d))}{x(1+u) - x(1+d)} \\\]

> [!NOTE]
>
> **Remark**
>
> The function \\(\\Delta\_t\\) is called the **delta** hedge in finance. The notation is a bit unfortunate in regards to our notation for difference, but is makes sense if you notice that this is the discrete version of the derivative of the portfolio value with respect to the underlying asset \\(\\partial v\_t/\\partial S\_t\\) coinciding with the Black and Sholes framework.

> [!NOTE]
>
> **Proof**
>
> Let us consider a given time \\(1\\leq t\\leq T\\). The hedging strategy \\(\\eta = (\\eta\_t)\_{t=1, \\ldots, T}\\) is such that
>
> \\\[ V\_{t} - V\_{t-1} = \\eta\_t (X\_t - X\_{t-1}) \\\]
>
> On the one hand, knowing \\(S\_0, \\ldots, S\_{t-1}\\), since \\(\\eta\_t\\) is predictable the right hand side can only take two values
>
> \\\[ \\begin{align\*} \\eta\_t (X\_t - X\_{t-1}) &amp; = \\displaystyle \\eta\_t \\frac{S\_{t-1}}{(1+r)^t}\\left( R\_t - r \\right) \\\\ &amp; =\\displaystyle \\eta\_t \\frac{S\_{t-1}}{(1+r)^t} \\begin{cases} u-r &amp; \\text{if } \\omega\_t = 1\\\\ \\\\ d-r &amp; \\text{if } \\omega\_{t} = -1 \\end{cases} \\end{align\*} \\\]
>
> On the other hand, since \\(V\_t = v\_t(S\_t) = v\_t(S\_{t-1}(1+R\_t))\\) as well as \\(V\_{t-1} = v\_{t-1}(S\_{t-1}) = p v\_t(S\_{t-1}(1+u)) + (1-p) v\_t(S\_{t-1}(1+d))\\), it follows that the left hand side can only take two values given \\(S\_0, \\ldots, S\_{t-1}\\).
>
> \\\[ \\begin{align\*} V\_t - V\_{t-1} &amp; = \\displaystyle v\_t(S\_{t-1}(1+R\_t)) - p v\_t(S\_{t-1}(1+u)) - (1-p) v\_t(S\_{t-1}(1+d))\\\\ \\\\ &amp; = \\displaystyle \\begin{cases} (1-p) \\left(v\_t(S\_{t-1}(1+u)) - v\_t(S\_{t-1}(1+d))\\right) &amp; \\text{if }\\omega\_t =1\\\\ \\\\ p \\left(v\_t(S\_{t-1}(1+u)) - v\_t(S\_{t-1}(1+d))\\right) &amp; \\text{if }\\omega\_t =-1\\\\ \\end{cases} \\end{align\*} \\\]
>
> Puting these two equation together and solving for \\(\\eta\_t\\), knowing that \\(p = (r-d)/(u-d)\\) yields that knowing \\(S\_0, \\ldots, S\_{t-1}\\) we have
>
> \\\[ \\eta\_t = (1+r)^t \\frac{v\_t(S\_{t-1}(1+u)) - v\_t(S\_{t-1}(1+d))}{S\_{t-1}(1+u) - S\_{t-1}(1+d)} = \\Delta\_t(S\_{t-1}) \\\]

> [!NOTE]
>
> **Remark**
>
> The derivation of the functions \\(v\_t\\) and \\(\\Delta\_t\\) for \\(t=0, \\ldots, T\\) can be extended to the general case of options depending on the full path, that is with discounted formulation \\(H = h(S\_0, \\ldots, S\_T)\\) for some function \\(h:\\mathbb{R}^{T+1} \\to \\mathbb{R}\\) following the same argumentation where
>
> \\\[ \\begin{equation\*} \\begin{cases} v\_T(x\_0, \\ldots, x\_{T}) &amp; = h(x\_0, \\ldots, x\_T)\\\\ \\\\ v\_t(x\_0, \\ldots, x\_t) &amp; = p v\_{t+1}(x\_0, \\ldots, x\_{t}, x\_t(1+u)) + (1-p)v\_{t+1}(x\_0, \\ldots, x\_{t}, x\_t(1+d)) \\end{cases} \\end{equation\*} \\\]
>
> as well as
>
> \\\[ \\Delta\_t(x\_0, \\ldots, x\_{t-1}) = (1+r)^t \\frac{v\_{t}(x\_0, \\ldots, x\_{t-1}, x\_{t-1}(1+u)) - v\_{t}(x\_0, \\ldots, x\_{t-1}, x\_{t-1}(1+d))}{x\_{t-1}(1+u) - x\_{t-1}(1+d)} \\\]
>
> Though those expression are valid and simple to write down mathematically, to solve those numerically hits the problem of the curse of dimensionality, since those depends on every possible combinations of paths for the price \\((x\_0, \\ldots, x\_t)\\) at each time \\(t\\), which amounts to \\(2^T\\).

### Implementation

The implementation in a binomial model(1) for plain vanilla options is classical and relatively straightforward after reformulating the problem in terms of matrices.

1. the BS model turns into resolving pde which unless you have an explicit expression turns into finite difference methods or alike kinds which are similar.

The main computational issue is to derive \\(v\_t(x)\\) for every attainable \\(x=S\_t\\) and every \\(t\\). To do so as in numerical methods for PDE we consider matrix/vector notations(1) of values

1. In terms of computer memory and efficiency, this certainly not the best approach. But in that case you don't use python but rather low level programming languages like rust or C and look at structures like Btreemaps and the likes. In python `numpy` does just fine and the dimension is no longer an issue for modern computers.

We will store the value of the portfolio and the delta hedging into a diagonal matrices \\((T+1)\\times (T+1)\\) and \\(T\\times T\\) with column vectors \\(\\boldsymbol{v}\_t\\) in \\(\\mathbb{R}^{T+1}\\) and \\(\\boldsymbol{\\Delta}\_t\\) as follows

\\\[ \\begin{equation\*} \\boldsymbol{v}\_t = \\begin{bmatrix} v\_t(S\_0(1+u)^t)\\\\ v\_t(S\_0(1+u)^{t-1}(1+d))\\\\ \\vdots \\\\ v\_t(S\_0(1+d)^t)\\\\ 0 \\\\ \\vdots \\\\ 0 \\end{bmatrix} \\quad \\text{and}\\quad \\boldsymbol{\\Delta}\_t = \\begin{bmatrix} \\Delta\_t(S\_0(1+u)^{t-1})\\\\ \\Delta\_t(S\_0(1+u)^{t-2}(1+d))\\\\ \\vdots \\\\ \\Delta\_t(S\_0(1+d)^{t-1}) \\\\ 0 \\\\ \\vdots 0 \\end{bmatrix} \\end{equation\*} \\\]

for \\(t=0, \\ldots, T\\). and we apply the recursion up to \\(0\\). Once \\(\\boldsymbol{v}\_t\\) are calculated, and stored, the heding strategy can be computed directly.

```python
import numpy as np

# Computation of the discounted portfolio value
# claim is the function C = f(S_T)
# not efficient in this form (python is bad with loops) but clear in terms of loops
# does not verify if -1 < d< r< u!!!
def portfolio_value(claim, S0, r, u, d, T):
    # value of the portfolio
    v = np.zeros((T+1, T+1))
    # stock prices tree
    s = np.zeros((T+1, T+1))
    # hedging strategy
    delta = np.zeros((T, T))

    # initialize the stock tree
    s[0, 0] = S0
    for t in range(1, T+1):
        for l in range(t+1):
            s[t, j] = S0 * (1+u)**(t-l) * (1+d)**l

    # risk neutral probability
    p = (r - d)/(u - d)

    # initialization of the portfolio value at time T
    v[T, :] = claim(s[T,:]) / (1+r) ** T

    # Compute backwardly the discounted portfolio value and the hedging
    for t in range(T-1, -1, -1):
        for l in range(t+1):
            vup = v[t+1, l]
            vdown = v[t+1, l+1]
            sup = s[t, l] * (1+u)
            sdown = s[t,l] * (1+d)
            # delta hedging
            delta[t, l] = (1+r) ** t * (vup - vdown) / (sup - sdown)
            # portfolio value
            v[t,j] = p * vup + (1-p) * vdown

    return {
        "Stock": s,
        "portfolio": v,
        "delta": delta
    }
```
