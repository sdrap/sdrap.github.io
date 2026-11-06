# Default (Ruin) Probability

We saw that the random walk often generates the evolution of the stock prices in the CRR model. In this section, we are interested in finding the probability of the ruin event. During the study of American Options, we introduced the concept of stopping times. Stopping times are also used to define ruin events, and the martingales with the help of Doob's Optional Sampling Theorem will provide a very elegant way to study the properties of this ruin event.

We consider the following random walk of the CRR model starting at \\(0\\):

\\\[ Z\_0=0\\quad \\text{and}\\quad Z\_t=\\sum\_{s=1}^t Y\_s,\\quad t\\geq 1 \\\]

where \\(Y\\) are i.i.d. with \\(P\[Y\_t = 1\] = p\\) and \\(P\[Y\_t = -1\] = 1 - p = q\\).

As for the filtration, we take

\\\[ \\mathcal{F}\_0=\\{\\emptyset,\\Omega\\}\\quad \\text{and}\\quad \\mathcal{F}\_t=\\sigma(Z\_s\\colon 1\\leq s\\leq t),\\quad t\\geq 1 \\\]

We define \\(\\tau\_{a}=\\inf\\left\\{ t\\colon Z\_t=a \\right\\}\\), \\(\\tau\_{b}=\\inf\\left\\{ t\\colon Z\_t =-b \\right\\}\\), and \\(\\tau=\\tau\_a\\wedge \\tau\_b =\\inf\\{t\\colon Z\_t=a\\text{ or }Z\_t=-b\\}\\) for two integers \\(a,b\\).

> [!NOTE]
>
> **Remark**
>
> As we saw in the CRR model, we often describe the stock price as:
>
> \\\[ S\_t=S\_0(1+u)^{Z\_t} \\\]
>
> so that the stopping time \\(\\tau\\) can be interpreted as the first time that the stock price reaches the level \\(S\_0(1+u)^a\\) or drops to the level \\(S\_0/(1+u)^{b}\\).

We are interested in the following probabilities:

\\\[ P\\left\[ Z\_{\\tau}=a \\right\], \\quad \\text{and}\\quad P \\left\[ Z\_{\\tau}=-b \\right\] \\\]

which are, respectively, the probability that \\(Z\\) reaches the level \\(a\\) before running bankrupt at level \\(-b\\), and the probability of running bankrupt at level \\(-b\\) before reaching level \\(a\\).

### Symmetric Random Walk

Suppose first that \\(p=q=1/2\\), the case of the symmetric random walk. It follows that \\(Z\\) is a martingale. Hence, due to the Optional Sampling Theorem, the stopped process \\(Z^\\tau\\) is a martingale, showing that:

\\\[ 0=Z\_0=E\\left\[ Z\_t^\\tau \\right\]=E\\left\[ Z\_{t\\wedge \\tau} \\right\] \\\]

for every \\(t\\). An intuitive inspection shows that for almost all \\(\\omega\\), the hitting time of one of the barriers will occur in a finite amount of time almost surely, that is \\(P\[\\tau \<\\infty\]=1\\). Hence,

\\\[ \\lim\_{t\\to \\infty}Z\_{t\\wedge \\tau}=Z\_\\tau \\\]

\\(P\\)-almost surely. Furthermore, \\(|Z^\\tau\_t|\\leq a\\wedge b\\) for every \\(t\\), and therefore, by Lebesgue's Dominated Convergence Theorem, it follows that:

\\\[ 0=\\lim\_{t\\to \\infty}E\\left\[ Z\_t^\\tau \\right\]=E\\left\[ \\lim\_{t\\to \\infty} Z\_{t\\wedge \\tau} \\right\]=E\[Z\_{\\tau}\] \\\]

On the other hand, it holds:

\\\[ Z\_{\\tau}=a1\_{\\{Z\_\\tau =a\\}}-b1\_{\\{Z\_\\tau=-b\\}}=a1\_{\\{Z\_\\tau=a\\}}-b(1-1\_{\\{Z\_\\tau=a\\}}) \\\]

showing that:

\\\[ E\\left\[ Z\_\\tau \\right\]=(a+b)P\\left\[ Z\_\\tau=a \\right\]-b \\\]

Together with the fact that \\(E\[Z\_\\tau\]=0\\), it follows that:

\\\[ P\\left\[ Z\_\\tau=a \\right\]=\\frac{b}{a+b}, \\quad \\text{and}\\quad P\\left\[ Z\_\\tau=-b \\right\]=\\frac{a}{a+b} \\\]

### Asymmetric Random Walk

Suppose now that \\(1\>p\>1/2\\). Then, \\(Z\\) is no longer a martingale, but a sub-martingale. Indeed, \\(Y\\) being independent and identically distributed, it follows that:

\\\[ E\\left\[ Z\_{t+1}-Z\_t|\\mathcal{F}\_t \\right\]=E\\left\[ Y\_{t+1}|\\mathcal{F}\_t \\right\]=E\\left\[ Y\_{1} \\right\]= P\\left\[ Y\_1=1 \\right\]-P\\left\[ Y\_1=-1 \\right\]=2p-1\>0 \\\]

We can therefore no longer apply the same strategy as before. However, a similar inspection as in the previous case shows that \\(\\tau(\\omega)\<\\infty\\) for \\(P\\)-almost all \\(\\omega \\in \\Omega\\). Despite the fact that \\(Z\\) is no longer a martingale, the process:

\\\[ M\_t=\\left(\\frac{q}{p}\\right)^{Z\_t}, \\quad t=0,1,\\ldots \\\]

is a martingale where \\(q = 1-p\\). Indeed, it is clearly adapted and integrable. Furthermore, using the independent and identically distributed assumption for \\(Y\\), it holds:

\\\[ E\\left\[ M\_{t+1}-M\_t|\\mathcal{F}\_t \\right\] =M\_tE\\left\[ \\left( \\frac{q}{p} \\right)^{Y\_{t+1}}-1|\\mathcal{F}\_t \\right\] =M\_tE\\left\[ \\left( \\frac{q}{p} \\right)^{Y\_{1}}-1 \\right\] =M\_t\\left( p\\frac{q}{p}+q\\frac{p}{q}-1 \\right)=0 \\\]

Considering the stopped process \\(M^\\tau\\), it follows from Doob's Optional Sampling Theorem that:

\\\[ 1=M\_0=E\\left\[M\_{t}^\\tau \\right\]=E\\left\[ M\_{t\\wedge \\tau} \\right\] \\\]

for every \\(t\\). However, since \\(\\tau(\\omega)\<\\infty\\) for every \\(\\omega\\), it follows that \\(\\lim\_{t\\to \\infty}M\_{t\\wedge \\tau}=M\_{\\tau}\\) \\(P\\)-almost surely. Furthermore \\(|M\_{t\\wedge \\tau}|\\leq 1\\), allowing us to apply Lebesgue's Dominated Convergence:

\\\[ 1=\\lim\_{t\\to \\infty}E\\left\[ M\_{t\\wedge \\tau} \\right\]=E\\left\[ \\lim\_{t\\to \\infty}M\_{t\\wedge \\tau} \\right\]=E\\left\[ M\_\\tau \\right\] \\\]

On the other hand, it holds:

\\\[ E\\left\[ M\_\\tau \\right\] =\\left(\\frac{q}{p}\\right)^aP\\left\[ Z\_\\tau=a \\right\]+\\left( \\frac{q}{p} \\right)^{-b} P\\left\[ Z\_\\tau=-b \\right\] =\\left(\\frac{q}{p}\\right)^{-b}\\left(\\left(\\frac{q}{p}\\right)^{a+b}P\[Z\_\\tau=a\]+(1-P\[ Z\_\\tau=a\]) \\right) \\\]

Combined with \\(E\[M\_\\tau\]=1\\), it yields:

\\\[ P\\left\[ Z\_\\tau=a \\right\]=\\frac{(q/p)^b-1}{(q/p)^{a+b}-1}, \\quad \\text{and}\\quad P\\left\[ Z\_{\\tau}=-b \\right\]=\\frac{(q/p)^{a}-1}{(q/p)^{a}-(q/p)^{-b}} \\\]

### Application to Credit Rating

Given a company, we want to estimate its probability to default at some point. In our simple framework, we define:

\\\[ \\inf\\left\\{ t: b+Z\_t =0 \\right\\}=\\inf\\left\\{ t \\colon Z\_t = -b \\right\\}=\\tau\_b \\\]

which is the first time that a firm with cumulative returns \\(Z\\) and start capital \\(b\\) reaches bankruptcy. We also assume here that \\(1/2 \<p\<1\\). We want to estimate:

\\\[ P\\left\[ \\tau\_b \<\\infty \\right\] \\\]

which is the probability that the firm goes bankrupt at some point in time. Since \\(\\tau\_a \\to \\infty\\) as \\(a\\to \\infty\\), it follows that:

\\\[ P\\left\[ \\tau\_b\<\\infty \\right\]=\\lim\_{a \\to \\infty}P\\left\[ Z\_{\\tau}=-b \\right\]=\\lim\_{a\\to \\infty}\\frac{(q/p)^{a}-1}{(q/p)^{a}-(q/p)^{-b}}=\\left( \\frac{q}{p} \\right)^b \\\]

We see therefore two factors impacting the probability of default of the company:

- **The returns of the company** (\\(p\\)): Since \\(E\[Z\_{t+1}-Z\_t|\\mathcal{F}\_t\]=2p-1\>0\\), if \\(p\\) is very close to \\(1\\), that is strong returns, then \\(q/p\\) is very small and so is the probability of default \\((q/p)^b\\).
- **The present capital of the company** (\\(b\\)): Since \\(0\<q/p\<1\\), it follows that the higher \\(b\\), the smaller \\((q/p)^b\\) in an exponential way.
