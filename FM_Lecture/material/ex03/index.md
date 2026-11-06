# Multiperiod Market

## Generic

> [!NOTE]
>
> **Exercise**
>
> We consider a multi-period financial market with a bank account \\(B\\) and one stock \\(S^1 = S\\).  
> Which of the following processes \\(\\eta = (\\eta\_t)\_{1 \\leq t \\leq T}\\), where \\(\\eta\_t : \\Omega \\to \\mathbb{R}\\), are predictable?
>
> 1. \\(\\eta\_t = 1\_{\\{S\_t \> S\_{t-1}\\}}\\) for \\(t = 1, \\ldots, T\\);
> 2. \\(\\eta\_1 = 1\\) and \\(\\eta\_t = 1\_{\\{S\_{t-1} \> S\_{t-2}\\}}\\) for \\(t = 2, \\ldots, T\\);
> 3. \\(\\eta\_t = 1\_A 1\_{\\{t \> t\_0\\}}\\) for some \\(A \\in \\mathcal{F}\_{t\_0}\\) and some \\(t\_0 \\in \\{0, \\ldots, T-1\\}\\);
> 4. \\(\\eta\_t = 1\_{\\{S\_t \> S\_{S\_0}\\}}\\);
> 5. \\(\\eta\_1 = 1\\) and \\(\\eta\_t = 2 \\eta\_{t-1} 1\_{\\{S\_t \< 1\\}}\\) for \\(t \\geq 2\\).

> [!NOTE]
>
> **Insider Problem**
>
> Let \\(Y\_1, \\ldots, Y\_T\\) be independent identically distributed random variables such that \\(E\[Y\_t\] = 0\\) for every \\(t\\) and not identically constant on some probability space \\((\\Omega, \\mathcal{F}, P)\\). We consider the filtration \\(\\mathcal{F}\_0 = \\{\\emptyset, \\Omega\\}\\) and \\(\\mathcal{F}\_t = \\sigma(Y\_1, \\ldots, Y\_t)\\) and the discounted price process:
>
> \\\[ X\_0 := 0, \\quad X\_t := X\_0 + \\sum\_{s=1}^t Y\_s. \\\]
>
> We extend the filtration with the information provided by \\(X\_T\\), that is:
>
> \\\[ \\tilde{\\mathcal{F}}\_t = \\sigma(\\mathcal{F}\_t, X\_T), \\quad t = 0, \\ldots, T \\\]
>
> This is the information that an insider knows, for whatever reason, about the terminal value of the discounted price at time \\(T\\). We denote the non-insider filtration \\(\\mathbb{F}\\) and the insider filtration \\(\\tilde{\\mathbb{F}}\\).
>
> Show that:
>
> 1. If \\(Z\_1\\) and \\(Z\_2\\) are identically distributed integrable random variables, then it holds
>
>    \\\[ E\[Z\_1 |\\sigma(Z\_1+Z\_2)\] = \\frac{Z\_1 + Z\_2}{2} \\\]
> 2. \\(X\\) is a martingale under the filtration \\(\\mathbb{F}\\). Show that \\(X\\) cannot be a martingale under the insider filtration \\(\\tilde{\\mathbb{F}}\\). However, the process:
>
>    \\\[ \\tilde{X}\_0 = X\_0, \\quad \\text{and} \\quad \\tilde{X}\_t = X\_t - \\sum\_{s=0}^{t-1} \\frac{X\_T - X\_s}{T - s}, \\quad t = 1, \\ldots, T \\\]
>
>    is a martingale under \\(\\tilde{\\mathbb{F}}\\).
> 3. With the information about the terminal discounted value \\(X\_T\\) of the stock, it is possible to realize arbitrage gains. Find a strategy \\(\\eta\\), predictable with respect to \\(\\tilde{\\mathbb{F}}\\), such that among all other strategies \\(\\mu\\), predictable with respect to \\(\\tilde{\\mathbb{F}}\\) with \\(|\\mu\_t| \\leq 1\\), the expected gain \\(E\[G\_T\]\\) is maximal, where:
>
>    \\\[ G\_T = \\sum\_{s=1}^T \\eta\_s \\Delta X\_s. \\\]

> [!NOTE]
>
> **Exercise**
>
> In an arbitrage-free market with a bank account:
>
> \\\[ B\_t = (1 + r)^t, \\quad r \> -1, \\, t = 0, \\ldots, T \\\]
>
> Let \\(C\_t^{call}\\) and \\(C\_t^{put}\\) be the price processes of a call and put on a self-financed portfolio \\(V\\) with strike \\(K\\), that is:
>
> \\\[ C^{call} = (V\_T - K)^+ \\quad \\text{and} \\quad C^{put} = (K - V\_T)^+. \\\]
>
> Show the put-call parity:
>
> \\\[ C\_t^{call} - C\_t^{put} = V\_t - K(1 + r)^{t-T}, \\quad t = 0, \\ldots, T. \\\]

## American Option

> [!NOTE]
>
> **Exercise**
>
> Let \\(H\\) be the discounted price of an American option in a complete financial market, and denote by \\(U\\) the Snell envelope. Denote by \\(\\tilde{H} := H\_T\\) the corresponding European option whose price process is given by:
>
> \\\[ V\_t = E\_{P^\\ast}\\left\[ H\_T \\mid \\mathcal{F}\_t \\right\], \\quad t = 0, \\ldots, T \\\]
>
> Show that:
>
> 1. \\(U\_t \\geq V\_t\\) for every \\(t\\).
> 2. If \\(V\_t \\geq H\_t\\) for all \\(t\\), then \\(U\_t = V\_t\\) for every \\(t\\).
> 3. If \\(H\\) is a \\(P^\\ast\\)-sub-martingale, then \\(U = V\\).
> 4. Show that if \\(H\_t = f(X\_t)\\) for some convex function \\(f\\) for every \\(t\\), for instance, an American call option, then \\(H\\) is a \\(P^\\ast\\)-sub-martingale.

> [!NOTE]
>
> **Exercise (Difficult)**
>
> In a multi-period arbitrage-free and complete financial market with one stock \\(S\\), consider the following American put option:
>
> \\\[ H\_t^K = \\frac{(K - S\_t)^+}{(1 + r)^t}, \\quad t = 0, 1, \\ldots, T \\\]
>
> where \\(r \> 0\\) and \\(K\\) is a positive strike. We denote by \\(\\tau^K\_{\\min}\\) the smallest optimal stopping time for the buyer, that is:
>
> \\\[ \\tau^K\_{\\min}(\\omega) = \\inf\\{t : U\_t^K(\\omega) = H\_t^K(\\omega)\\}, \\\]
>
> where \\(U^K\\) is the corresponding Snell envelope of \\(H^K\\).
>
> Show that:
>
> 1. \\(\\tau^K\_{\\min} \\geq \\tau^{K^\\prime}\_{\\min}\\) whenever \\(K \\leq K^\\prime\\).
> 2. For \\(K\\) large enough, show that ultimately \\(\\tau^K\_{\\min} = 0\\).

## Default Probability

> [!NOTE]
>
> **Exercise: First part is easy, second part less so**
>
> Let \\((\\Omega, \\mathcal{F}, P)\\) be a probability space, \\(Y\_1, Y\_2, \\ldots\\) a sequence of independent identically distributed random variables taking values \\(\\pm 1\\) and such that:
>
> \\\[ P\[Y\_t = 1\] = p, \\quad \\text{and} \\quad P\[Y\_t = -1\] = 1 - p = q \\\]
>
> for \\(1 \> p \\geq 1/2\\). Consider the filtration \\(\\mathcal{F}\_0 = \\{\\emptyset, \\Omega\\}\\) and \\(\\mathcal{F}\_t = \\sigma(Y\_1, \\ldots, Y\_t)\\), \\(t \\geq 1\\). The random walk \\(Z\\) is given by:
>
> \\\[ Z\_0 = 0 \\quad \\text{and} \\quad Z\_t = \\sum\_{s=1}^t Y\_s, \\quad t \\geq 1. \\\]
>
> Finally, for two integers \\(a\\) and \\(b\\), we define the stopping time:
>
> \\\[ \\tau\_a = \\inf\\{ t : Z\_t = a \\}, \\quad \\tau\_b = \\inf\\{ t : Z\_t = -b \\}, \\quad \\text{and} \\quad \\tau = \\tau\_a \\wedge \\tau\_b. \\\]
>
> You can assume that for any value of \\(a\\) and \\(b\\), it holds \\(\\tau(\\omega) \< \\infty\\) for almost all \\(\\omega\\).
>
> 1. Since \\(1 \> p \\geq 1/2\\), show that \\(Z\\) is a sub-martingale and a martingale if and only if \\(p = 1/2\\).
> 2. Suppose that \\(p = 1/2\\), and show that for every time horizon \\(T\\), it holds:
>
>    \\\[ E\\left\[ Z\_{T \\wedge \\tau} \\right\] = 0 \\\]
>
>    Deduce that:
>
>    \\\[ P\[Z\_\\tau = a\] = \\frac{b}{a + b}. \\\]
> 3. Always for \\(p = 1/2\\), show that the process \\(Z^2\_t - t\\) is a martingale. Show that \\(E\[Z\_\\tau^2 - \\tau\] = 0\\), and using the previous point, show that the expected time to reach \\(a\\) or \\(-b\\) for the first time is given by:
>
>    \\\[ E\\left\[ \\tau \\right\] = ab. \\\]
> 4. For \\(1 \> p \> 1/2\\), show that the process:
>
>    \\\[ M\_0 = 1, \\quad M\_t = \\left( \\frac{q}{p} \\right)^{Z\_t}, \\quad t = 1, 2, \\ldots \\\]
>
>    is a martingale.
> 5. For \\(1 \> p \> 1/2\\), show that:
>
>    \\\[ P\\left\[ Z\_\\tau = a \\right\] = \\frac{(q/p)^b - 1}{(q/p)^{a + b} - 1}. \\\]
>
> From now on, suppose that \\(p \> 1/2\\) and for \\(\\lambda \\in \\mathbb{R}\\), define:
>
> \\\[ \\phi(\\lambda) = \\ln(E\[\\exp(\\lambda Y\_t)\]) = \\ln(E\[\\exp(\\lambda Y\_1)\]) = \\ln(pe^{\\lambda} + qe^{-\\lambda}) \\\]
>
> as well as the process \\(L(\\lambda)\\) by:
>
> \\\[ L\_t(\\lambda) = \\exp\\left( \\lambda Z\_t - t \\phi(\\lambda) \\right), \\quad t = 0, 1, 2, \\ldots \\\]
>
> 1. Show that:
>
>    \\\[ \\phi^\\prime(0) = E\\left\[ Y\_1 \\right\] \\\]
>
>    and (with differentiation done with respect to \\(\\lambda\\)!)
>
>    \\\[ L^\\prime\_t := \\frac{d L\_t}{d\\lambda}(0) = Z\_t - t \\phi^\\prime(0). \\\]
> 2. Show that \\(L(\\lambda)\\) is a martingale. Sketch the reason why the process \\(L^\\prime\\) is then also a martingale.
> 3. From the two previous points, show that:
>
>    \\\[ E\\left\[ Z\_{t \\wedge \\tau} - t \\wedge \\tau \\phi^\\prime(0) \\right\] = 0, \\quad \\text{for every time } t. \\\]
> 4. From equation (4), deduce that the average time before reaching either \\(a\\) or \\(-b\\) is given by:
>
>    \\\[ E\[\\tau\] = \\frac{a + b}{p - q} \\frac{(q/p)^b - 1}{(q/p)^{a + b} - 1} - \\frac{b}{p - q}. \\\]
