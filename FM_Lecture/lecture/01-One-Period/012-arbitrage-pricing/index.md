# Arbitrage and Pricing

A fundamental concept in financial market is the notion of **Arbitrage**. Consider the following example

> [!NOTE]
>
> **Example: Arbitrage in a coint toss model**
>
> Consider the example of a simple coin toss model. Formally:
>
> - \\(\\Omega = \\{-1, 1\\}\\)
> - \\(\\mathcal{F} = \\{\\emptyset, \\{1\\}, \\{-1\\}, \\{-1, 1\\}\\}\\)
> - Given \\(0\<p\<1\\)
>
>   \\\[ P\[\\{\\omega\\}\] = \\begin{cases} p &amp; \\text{if } \\omega = 1, \\\\ 1-p &amp; \\text{if } \\omega = -1 \\end{cases} \\\]
>
> We define for our bank account \\(B\_0 = 1\\) and \\(B\_1 = 1 + r\\) where \\(r \> -1\\). We also consider a single stock with:
>
> \\\[ S\_0 \> 0, \\quad S\_1(\\omega) = S\_0(1 + R(\\omega)) \\\]
>
> where the return \\(R\\) is given by:
>
> \\\[ R(\\omega) = \\begin{cases} u &amp; \\text{if } \\omega = 1, \\\\ d &amp; \\text{if } \\omega = -1 \\end{cases} \\\]
>
> with \\(d \< u\\). We assume that \\(S\_1\\) is strictly positive, so \\(d \> -1\\).
>
> Suppose I enter the market with no money and observe that \\(r \\leq d\\). I borrow \\(\\eta S\_0\\) from the bank to buy \\(\\eta\>0\\) shares of the stock. At time \\(1\\), the value of my portfolio is:
>
> \\\[ \\bar{V}\_1(\\omega) = -\\eta S\_0(1 + r) + \\eta S\_1(\\omega) = \\begin{cases} \\eta S\_0(u - r) &amp; \\text{if } \\omega = 1, \\\\ \\eta S\_0(d - r) &amp; \\text{if } \\omega = -1 \\end{cases} \\\]
>
> Since \\(r \\leq d \< u\\), my strategy does not lose money in any cases and I always make a strictly positive gain with probability \\(p\>0\\). By scaling this strategy, I could generate unlimited wealth without risk. A similar scenario arises if \\(d \< u \\leq r\\), where I could short-sell the stock infinitely.

As this example shows, such a market would be dysfunctional. Economically, arbitrageurs would exploit this situation, driving the stock price back within boundaries to eliminate these opportunities. Hence, we require the concept of an **arbitrage-free market**.

## Arbitrage

> [!NOTE]
>
> ****Definition** Arbitrage and Arbitrage Free Market**
>
> A portfolio \\(\\bar{V}\\) with initial value \\(\\bar{V}\_0 \\in \\mathbb{R}\\) and strategy \\(\\boldsymbol{\\eta} \\in \\mathbb{R}^d\\) is called an **arbitrage** if
>
> \\\[ \\begin{equation\*} \\underbrace{P\\left\[\\bar{V}\_1(\\omega) \\geq \\bar{V}\_0(1 + r)\\right\] = 1}\_{\\text{No downside risk}}\\quad \\text{and}\\quad \\underbrace{P\\left\[\\bar{V}\_1(\\omega) \> \\bar{V}\_0(1 + r)\\right\] \>0}\_{\\text{Strict positive gains with strict positive probability}} \\end{equation\*} \\\]
>
> A financial market is call **arbitrage free**, if there exists no arbitrage.

In other words, a self-financing strategy is an arbitrage if it guarantees a net gain at time \\(1\\) in every possible state and a strictly positive gain with nonzero probability.

There exists several equivalent way to express arbitrage as the following proposition states

> [!NOTE]
>
> ****Proposition** Arbitrage Equivalence**
>
> The following statements are equivalent:
>
> 1. The financial market admits an arbitrage portfolio.
> 2. There exists a discounted portfolio \\(V\\) such that:
>
>    \\\[ P\\left\[V\_1 \\geq V\_0\\right\] = 1 \\quad \\text{and} \\quad P\\left\[V\_1 \> V\_0\\right\] \> 0 \\\]
> 3. There exists a strategy \\(\\boldsymbol{\\eta} \\in \\mathbb{R}^d\\) such that:
>
>    \\\[ P\\left\[\\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \\geq 0\\right\] = 1 \\quad \\text{and} \\quad P\\left\[\\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \> 0\\right\] \> 0 \\\]

**Proof**

1. **Equivalence of (i) and (ii):** For a portfolio \\(\\bar{V}\\), \\(\\bar{V}\_1 \\geq (1 + r)\\bar{V}\_0\\) is equivalent to \\(V\_1 \\geq V\_0\\) by dividing the inequality by \\(1 + r \> 0\\). The same holds for the strict inequality.
2. **Equivalence of (ii) and (iii):** For a discounted portfolio \\(V\\), \\(V\_1 = V\_0 + \\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \\geq V\_0\\) is equivalent to \\(\\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \\geq 0\\) by subtracting \\(V\_0\\).

**Exercise**

Recall that the returns vector \\(\\boldsymbol{R}\_1\\) are defined as

\\\[ R^k\_1 = \\frac{S\_1^k - S\_0^k}{S\_0^k}\\quad \\text{for }k=1, \\ldots, d \\\]

Show that the following assertions are equivalent:

1. **The financial market admits and arbitrage.**
2. **There exists \\(\\boldsymbol{h} \\in \\mathbb{R}^d\\) such that:**

   \\\[ P\\left\[ \\boldsymbol{h} \\cdot \\left(\\boldsymbol{R}\_1 - r\\right) \\geq 0 \\right\] = 1 \\quad \\text{and} \\quad P\\left\[ \\boldsymbol{h} \\cdot \\left(\\boldsymbol{R}\_1 - r\\right) \> 0 \\right\] = 1 \\\]

## Pricing Measure

As we will consequently see in the Fundamental Theorem of Asset Pricing, another central concept in financial market are **pricing measures**

> [!NOTE]
>
> **Definition: Pricing Measure**
>
> A probability measure \\(P^\\ast\\) is called a **pricing measure**(1) if:
>
> 1. 🙋‍♂️ Also known as a *pricing kernel* in financial engineering or *martingale measure* in mathematics.
>
> \\\[ E^{P^\\ast}\\left\[\\frac{S\_1^k}{1 + r}\\right\] = S\_0^k, \\quad \\text{for } k = 1, \\ldots, d \\\]

In other words, under a pricing measure the discounted expected value of each asset equals its present price.

> [!NOTE]
>
> **Remark: Vector notation and equivalent formulations**
>
> For a vector of random variables \\(\\boldsymbol{Z} = (Z^1, \\ldots, Z^d)\\) and a probability measure \\(Q\\), we denote:
>
> \\\[ E^Q\[\\boldsymbol{Z}\] := \\left(E^Q\[Z^1\], \\ldots, E^Q\[Z^d\]\\right) \\\]
>
> In particular, \\(P^\\ast\\) is a pricing measure if:
>
> \\\[ E^{P^\\ast}\\left\[\\frac{\\boldsymbol{S}\_1}{1 + r}\\right\] = \\boldsymbol{S}\_0, \\quad \\text{or equivalently}\\quad E^{P^\\ast}\[\\Delta \\boldsymbol{X}\_1\] = 0 \\\]
>
> This implies that under a pricing measure, the average return of each financial asset equals the bank's interest rate:
>
> \\\[ E^{P^\\ast}\[R\_1^k\] = r, \\quad \\text{for every } k = 1, \\ldots, d \\\]

> [!NOTE]
>
> **Lemma**
>
> Suppose that the financial market admits a pricing measure \\(P^\\ast\\). Then
>
> 1. for every portfolio \\(\\bar{V}\\), it holds
>
>    \\\[ \\bar{V}\_0 = E^{P^\\ast}\\left\[ \\frac{\\bar{V}\_1}{1+r} \\right\] \\\]
> 2. for every (discounted) portfolio \\(V\\), it holds
>
>    \\\[ V\_0 = E^{P^\\ast}\\left\[ V\_1 \\right\] \\\]
> 3. for every strategy \\(\\boldsymbol{\\eta} \\in \\mathbb{R}^d\\), it holds
>
>    \\\[ E^{P^\\ast}\\left\[ \\boldsymbol{\\eta}\\cdot \\Delta \\boldsymbol{X}\_1 \\right\] = 0 \\\]

**Proof**

We just show the last assertion, the other two follows directly. Let \\(\\boldsymbol{\\eta} \\in \\mathbb{R}^d\\) and \\(P^\\ast\\) be a pricing measure. By definition of \\(P^\\ast\\) and the properties of the expectation, it follows that

\\\[ \\begin{equation\*} E^{P^\\ast}\\left\[ \\boldsymbol{\\eta}\\cdot \\Delta \\boldsymbol{X}\_1 \\right\] = E^{P^\\ast}\\left\[ \\sum \\eta^k \\Delta X\_1^k \\right\]= \\sum \\eta^k E^{P^\\ast}\\left\[ \\Delta X\_1^k \\right\] = \\boldsymbol{\\eta}\\cdot E^{P^\\ast}\\left\[ \\Delta \\boldsymbol{X}\_1 \\right\] = 0 \\end{equation\*} \\\]

In the following, we will consider those pricing measures \\(P^\\ast\\) that are equivalent to \\(P\\)(1). By the very definition, it follows in particular that if \\(P^\\ast\\sim P\\) and \\(\\boldsymbol{\\eta}\\) is an arbitrage strategy, then

1. See appendix on probability theory for details and consequence in terms of Radon-Nykodym derivative.

   Just recalling the definition, a probability measure \\(Q\\) is equivalent to \\(P\\) and denoted by \\(Q\\sim P\\) if

   \\\[P\[A\] = 0 \\quad \\text{if and only if} \\quad Q\[A\]=0\\\]

   In other terms the two measures agrees on negligible events.

   This is however equivalent to

   \\\[P\[A\] = 1 \\quad \\text{if and only if} \\quad Q\[A\]=1\\\]

   or

   \\\[P\[A\] \> 0 \\quad \\text{if and only if} \\quad Q\[A\]\>0\\\]

\\\[ \\begin{equation\*} \\begin{cases} P\\left\[ \\boldsymbol{\\eta}\\cdot \\Delta\\boldsymbol{X}\_1 \\geq 0\\right\] &amp;= 1\\\\ P\\left\[ \\boldsymbol{\\eta}\\cdot \\Delta\\boldsymbol{X}\_1 \> 0\\right\] &amp;\>0 \\end{cases} \\quad \\text{is equivalent to } \\quad \\begin{cases} P^\\ast\\left\[ \\boldsymbol{\\eta}\\cdot \\Delta\\boldsymbol{X}\_1 \\geq 0\\right\] &amp;= 1\\\\ P^\\ast\\left\[ \\boldsymbol{\\eta}\\cdot \\Delta\\boldsymbol{X}\_1 \> 0\\right\] &amp;\>0 \\end{cases} \\end{equation\*} \\\]

## Fundamental Theorem of Asset Pricing

> [!NOTE]
>
> **Fundamental Theorem of Asset Pricing (FTAP)**
>
> In a financial market, the following conditions are equivalent:
>
> 1. The market is arbitrage-free.
> 2. There exists at least one pricing measure \\(P^\\ast \\sim P\\) with bounded density \\(dP^\\ast/dP\\).

**Proof: (sketch)**

1. **Step 1 (easy direction):** condition [2\.](<#cond:FTAP2>) implies [1\.](<#cond:FTAP1>).  
   By contradiction, assume that there exists a pricing measure \\(P^\\ast \\sim P\\) and an arbitrage strategy \\(\\boldsymbol{\\eta} \\in \\mathbb{R}^d\\). We show that this is not possible.

   On one hand, having a pricing measure \\(P^\\ast\\) implies that \\(E^{P^\\ast}\[\\Delta \\boldsymbol{X}\_1\] = 0\\). It follows that for the arbitrage strategy \\(\\boldsymbol{\\eta}\\), we have:

   \\\[ E^{P^\\ast}\\left\[ \\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \\right\] = E^{P^\\ast}\\left\[ \\sum \\eta^k \\Delta X\_1^k \\right\] = 0 \\\]

   On the other hand, since \\(\\boldsymbol{\\eta}\\) is an arbitrage strategy, it holds that:

   \\\[ \\begin{cases} P\\left\[ \\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \\geq 0 \\right\] = 1, \\\\ P\\left\[ \\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \> 0 \\right\] \> 0 \\end{cases} \\\]

   Since \\(P^\\ast \\sim P\\), this is equivalent to:

   \\\[ \\begin{cases} P^\\ast\\left\[ \\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \\geq 0 \\right\] = 1, \\\\ P^\\ast\\left\[ \\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \> 0 \\right\] \> 0 \\end{cases} \\\]

   The first line implies that the random variable \\(\\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1\\) is positive \\(P^\\ast\\)-almost surely. The second line indicates that this variable is strictly positive somewhere. Taking the expectation of this strictly positive random variable results in a strictly positive expectation:

   \\\[ E^{P^\\ast}\\left\[ \\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \\right\] \> 0 \\\]

   However, this contradicts the earlier result that \\(E^{P^\\ast}\\left\[ \\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \\right\] = 0\\). This shows that [2\.](<#cond:FTAP2>) implies [1\.](<#cond:FTAP1>).
2. **Step 2 (difficult direction):** condition [1\.](<#cond:FTAP1>) implies [2\.](<#cond:FTAP2>).

   Here, we show that if [1\.](<#cond:FTAP1>)$ does not hold (i.e., there exists no pricing measure \\(P^\\ast\\) with bounded density), then there exists an arbitrage.  
   To state that there exists no pricing measure \\(P^\\ast\\) with bounded density, consider the set:

   \\\[ \\mathcal{C} = \\left\\{ E^Q\[\\Delta \\boldsymbol{X}\_1\] : Q \\sim P \\text{ and } \\frac{dQ}{dP} \\text{ is bounded} \\right\\} \\\]

   This set includes all vectors of expectations of discounted gains under pricing measures with bounded density \\(Q\\). There exists a pricing measure \\(P^\\ast \\sim P\\) with bounded density if and only if the vector \\(0\\) is in \\(\\mathcal{C}\\).  
   Hence, the condition that [2\.](<#cond:FTAP2>) does not hold is equivalent to \\(0 \\notin \\mathcal{C}\\).

   We show that the set \\(\\mathcal{C} \\subseteq \\mathbb{R}^d\\) has the following properties:

   - **Non-emptiness:** \\(\\mathcal{C} \\neq \\emptyset\\). Since \\(P \\sim P\\) and \\(\\frac{dP}{dP} = 1\\), it follows that \\(E^P\[\\Delta \\boldsymbol{X}\_1\] \\in \\mathcal{C}\\)(1).
   - Note: We never assumed \\(\\boldsymbol{X}\_1\\) is integrable under \\(P\\). This can be addressed in the appendix.
   - **Convexity:** \\(\\mathcal{C}\\) is convex(1).

     1. That is, for any two points \\(\\boldsymbol{x}, \\boldsymbol{y} \\in \\mathcal{C}\\) and any \\(\\lambda \\in \[0, 1\]\\), the interval \\(\\lambda \\boldsymbol{x} + (1 - \\lambda) \\boldsymbol{y}\\) is also in \\(\\mathcal{C}\\).

     By definition, there exist \\(Q^{\\boldsymbol{x}}\\) and \\(Q^{\\boldsymbol{y}}\\) equivalent to \\(P\\) with bounded density such that \\(E^{Q^{\\boldsymbol{x}}}\[\\Delta \\boldsymbol{X}\_1\] = \\boldsymbol{x}\\) and \\(E^{Q^{\\boldsymbol{y}}}\[\\Delta \\boldsymbol{X}\_1\] = \\boldsymbol{y}\\).  
     By the Radon-Nikodym theorem, define:

     \\\[ \\frac{dQ}{dP} = \\lambda \\frac{dQ^{\\boldsymbol{x}}}{dP} + (1 - \\lambda) \\frac{dQ^{\\boldsymbol{y}}}{dP} \\\]

     This \\(dQ/dP\\) is a strictly positive bounded random variable (since \\(dQ^{\\boldsymbol{x}}/dP\\) and \\(dQ^{\\boldsymbol{y}}/dP\\) are) with expectation equal to \\(1\\):

     \\\[ E^P\\left\[ \\frac{dQ}{dP} \\right\] = \\lambda E^P\\left\[ \\frac{dQ^{\\boldsymbol{x}}}{dP} \\right\] + (1 - \\lambda) E^P\\left\[ \\frac{dQ^{\\boldsymbol{y}}}{dP} \\right\] = \\lambda + (1 - \\lambda) = 1 \\\]

     Hence, \\(dQ/dP\\) defines a probability measure \\(Q \\sim P\\) with bounded density, and:

     \\\[ \\boldsymbol{z} = E^Q\[\\Delta \\boldsymbol{X}\_1\] \\in \\mathcal{C} \\\]

     Moreover:

     \\\[ \\boldsymbol{z} = \\lambda \\boldsymbol{x} + (1 - \\lambda) \\boldsymbol{y} \\\]

     showing that \\(\\lambda \\boldsymbol{x} + (1 - \\lambda) \\boldsymbol{y} \\in \\mathcal{C}\\).

   The fact that \\(0 \\notin \\mathcal{C}\\), where \\(\\mathcal{C}\\) is not a convex set, the Hahn-Banach theorem allows to separate with a line (an hyperplane) the point from the convex set.

   ![Separation](<https://www.samuel-drapeau.info/FM_Lecture/images/separation_dark.svg#only-dark>) ![Separation](<https://www.samuel-drapeau.info/FM_Lecture/images/separation_white.svg#only-light>)

   It translates mathematicaly into the existence of a vector \\(\\boldsymbol{\\eta} \\in \\mathbb{R}^d\\) such that:

   \\\[ \\begin{cases} \\boldsymbol{\\eta} \\cdot \\boldsymbol{x} \\geq 0 &amp; \\text{for all } \\boldsymbol{x} \\in \\mathcal{C}, \\\\ \\boldsymbol{\\eta} \\cdot \\boldsymbol{x}\_0 \> 0 &amp; \\text{for some } \\boldsymbol{x}\_0 \\in \\mathcal{C}. \\end{cases} \\\]

   By definition of \\(\\mathcal{C}\\), this translates to:

   \\\[ \\begin{cases} E^Q\\left\[ \\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \\right\] \\geq 0 &amp; \\text{for all } Q \\sim P \\text{ with bounded } \\frac{dQ}{dP}, \\\\ E^{Q\_0}\\left\[ \\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \\right\] \> 0 &amp; \\text{for some } Q\_0 \\sim P \\text{ with bounded } \\frac{dQ\_0}{dP}. \\end{cases} \\\]

   The last condition implies that \\(Q\_0\[\\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \> 0\] \> 0\\), and since \\(Q\_0\\) is equivalent to \\(P\\), it also implies that

   \\\[P\[\\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \> 0\] \> 0\\\]

   As for the first condition, we claim that it implies

   \\\[P\[\\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \\geq 0\] = 1\\\]

   showing then that \\(\\boldsymbol{\\eta}\\) is an arbitrage.

   To this end, define \\(A = \\{\\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \< 0\\}\\) and consider the sequence of strict positive random variables:

   \\\[ Y\_n := \\left( 1 - \\frac{1}{n} \\right)1\_A + \\frac{1}{n}1\_{A^c} \\\]

   which is bounded by \\(1\\) and satisfies \\(Y\_n \\to 1\_A\\) \\(P\\)-almost surely.  
   Since \\(Y\_n \> 0\\), it generates a sequence of probability measures \\(Q\_n\\) equivalent to \\(P\\) with bounded densities:

   \\\[ \\frac{dQ\_n}{dP} = \\frac{Y\_n}{E\[Y\_n\]} \\\]

   Hence

   \\\[ 0 \\leq E^{Q\_n}\\left\[\\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1\\right\] = \\frac{1}{E\[Y\_n\]} E\\left\[\\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 Y\_n\\right\]. \\\]

   Taking the limit (1), it follows that:

   1. To be rigorous you invoke the dominated convergence theorem applied to \\(Y\_n\\).

   \\\[ 0 \\leq E\\left\[\\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 Y\_n\\right\] \\to E\\left\[\\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 1\_A\\right\] \\\]

   which, by the definition of \\(A\\), shows that \\(P\[A\] = 0\\). In other words, \\(P\[\\boldsymbol{\\eta} \\cdot \\Delta \\boldsymbol{X}\_1 \\geq 0\] = 1\\).  
   Hence, \\(\\boldsymbol{\\eta}\\) is an arbitrage strategy, contradicting the assumption of an arbitrage-free market.

   Thus, there exists a pricing measure equivalent to \\(P\\) with bounded density, which concludes the proof.

This Theorem is called a theorem and fundamental because it states an **if and only if** assertion between a somehow economical concept (no arbitrage) and a mathematical concept (the existence of a pricing measure). This statement will have many consequences that will unfold while studying derivative pricing.

However, an immediate consequence of which is the so called **Law of One Price**, often stated as given in finance, yet is a consequence of the FTAP.

> [!NOTE]
>
> **Theorem: Law of One Price**
>
> If the market is arbitrage free, then for any two portfolios \\(\\bar{V}\\) and \\(\\tilde{V}\\) with exact same outcome tomorrow, that is
>
> \\\[ P\\left\[ \\bar{V}\_1 = \\tilde{V}\_1\\right\] = 1 \\\]
>
> the value of each portfolio at time \\(0\\) is the same, that is \\(\\bar{V}\_0 = \\tilde{V}\_0\\)

**Proof**

By the fundamental theorem of asset pricing, no arbitrage is equivalent to the existence of a pricing measure \\(P^\\ast\\) equivalent to \\(P\\). Let further \\(\\bar{V}\\) and \\(\\tilde{V}\\) be two portfolio such that

\\\[ P\\left\[ \\bar{V}\_1 =\\tilde{V}\_1\\right\]=1 \\\]

Since \\(P^\\ast \\sim P\\), it follows that

\\\[ P^\\ast\\left\[ \\bar{V}\_1 =\\tilde{V}\_1\\right\]=1 \\\]

showing that \\(E^{P^\\ast}\\left\[ \\bar{V}\_1 \\right\] = E^{P^\\ast}\\left\[ \\tilde{V}\_1 \\right\]\\).

Furthermore, it holds that

\\\[ \\frac{\\bar{V}\_1}{1+r} = \\bar{V}\_0 + \\boldsymbol{\\eta}\\cdot \\Delta \\boldsymbol{X}\_1 \\quad \\text{and}\\quad \\frac{\\tilde{V}\_1}{1+r} = \\tilde{V}\_0 + \\tilde{\\boldsymbol{\\eta}}\\cdot \\Delta \\boldsymbol{X}\_1 \\\]

for some \\(\\boldsymbol{\\eta}\\) and \\(\\tilde{\\boldsymbol{\\eta}}\\) in \\(\\mathbb{R}^d\\).

Taking expectation under the pricing measure, it follows that

\\\[ \\begin{align\*} \\bar{V}\_0 &amp; = \\bar{V}\_0 + \\underbrace{\\boldsymbol{\\eta}\\cdot E^{P^\\ast}\\left\[ \\Delta \\boldsymbol{X}\_1 \\right\]}\_{=0\\text{ since }P^\\ast \\text{ is a pricing measure}}\\\\ &amp; = E^{P^\\ast}\\left\[ \\bar{V}\_0 + \\boldsymbol{\\eta}\\cdot \\Delta \\boldsymbol{X}\_1\\right\]\\\\ &amp; = E^{P^\\ast}\\left\[ \\frac{\\bar{V}\_1}{1+r} \\right\]\\\\ &amp; = E^{P^\\ast}\\left\[ \\frac{\\tilde{V}\_1}{1+r} \\right\]\\\\ &amp; = E^{P^\\ast}\\left\[ \\tilde{V}\_0 + \\tilde{\\boldsymbol{\\eta}}\\cdot \\Delta \\boldsymbol{X}\_1\\right\]\\\\ &amp; = \\tilde{V}\_0 \\end{align\*} \\\]

This statement stipulates that if a market is arbitrage free, regardless the portfolio you have in the market, if those deliver the same outcome, then their financing costs has to be the same.

The statement of the FTAP seems to be quite abstract, but is has a very easy interpretation in terms of linear algebra when the set of possible states is finite. Indeed, consider the following financial market where

- \\(\\Omega = \\{\\omega\_1, \\ldots, \\omega\_N\\}\\)
- \\(\\mathcal{F} = 2^\\Omega\\).
- \\(P\\) is a probability measure specified by the vector \\(\\boldsymbol{p}=(p\_1, \\ldots, p\_N)\\) where \\(p\_i = P\[\\{\\omega\_i\\}\] \>0\\) and \\(\\sum p\_i =1\\).

We have a bank account with:

\\\[ B\_0 = 1, \\quad B\_1 = 1 + r \\\]

for some \\(r\>-1\\).

As for the finanical asset, suppose that we have a single one:

\\\[ S\_0 \> 0 \\quad \\text{and} \\quad S\_1(\\omega\_i) = s\_i \> 0. \\\]

Up to reordering, we assume that \\(0 \< s\_1 \< s\_2 \< \\ldots \< s\_N\\), and denote \\(\\boldsymbol{s} = (s\_1, \\ldots, s\_N)\\) as the vector of payoffs for \\(S^1\\) at time \\(1\\).

Since the state space is finite, any expectation of the asset price can be written as

\\\[ \\begin{equation\*} E^{Q}\\left\[ S\_1 \\right\] = \\boldsymbol{s}\\cdot \\boldsymbol{q} \\end{equation\*} \\\]

where \\(\\boldsymbol{q} = (q\_1, \\ldots, q\_N)\\) represent a probability equivalent to \\(P\\) if and only if \\(q\_i\>0\\) for every \\(i\\).

Hence the market is arbitrage-free if and only if

\\\[ (1 + r)S\_0 \\in \\left\\{\\boldsymbol{s} \\cdot \\boldsymbol{q} \\colon \\boldsymbol{q} \\in \\mathbb{R}^d, \\sum q\_i =1 , \\; q\_i \> 0 \\text{ for every } i\\right\\} = (s\_1, s\_N) \\\]

This means the market is arbitrage-free if and only if the following system of equations:

\\\[ \\begin{cases} q\_1 s\_1 + \\cdots + q\_n s\_n = (1 + r)S\_0 \\\\ q\_1 + \\cdots + q\_n = 1 \\\\ q\_i \> 0 &amp; \\text{for all } i \\end{cases} \\\]

admits at least one solution.

If a solution exists, it is unique if and only if \\(N = 2\\).

If you extend to several assets \\(d\\), then you will end up with \\(d+1\\) equations in the system. If a solution exists then it is unique if and only if \\(N = d+1\\)
