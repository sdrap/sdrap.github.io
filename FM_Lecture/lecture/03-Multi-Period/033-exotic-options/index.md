# Exotic Options

We saw in the previous simple binomial model that for options that depends on the path, the computational complexity increases exponentially when derivatives can depends on the path. This is for instance the case for exotic options such as asian options and barrer options:

\\\[ C^{call}\_{asian} = \\left( \\frac{1}{T}\\sum\_{t=1}^T S\_t - K \\right)^+ \\quad \\text{or}\\quad C^{call}\_{up\\&amp;out} = \\left( S\_T - K \\right)^+ 1\_{\\{S\_t \< B \\colon t=0, \\ldots, T\\}} \\\]

This usually would require Monte Carlo methods which are less accurate and slower to compute. However, in the case of barrer option, a mathematical result known as the relexion principle will reduce the dimension of the integration from \\(T+1\\) to \\(2\\) which does not depends in complexity on the number of steps and is easy to compute.

The key to price barrier options is to know the joint distribution of \\(S\_T\\) and the running maximum \\(\\overline{S}\_T\\). In order to keep the formulas easy, we make the following assumption:

\\\[ 1+u=\\frac{1}{1+d} \\\]

In this case, the price process takes the form:

\\\[ S\_t=S\_0\\left( 1+u \\right)^{Z\_t} \\\]

where the stochastic process \\(Z=(Z\_t)\_{0\\leq t\\leq T}\\) is given by:

\\\[ Z\_0=0, \\quad \\text{and} \\quad Z\_t=\\sum\_{s=1}^t Y\_s \\\]

which is the so-called random walk. We also consider that \\(P\\) is the uniform distribution, that is:

\\\[ P\\left\[ \\{\\omega\\} \\right\]=\\frac{1}{\\\# \\Omega} \\\]

Under this measure, the random variables \\(Y\_t\\) are independent, and therefore, it holds:

\\\[ P\[Z\_t=k\]= \\begin{cases} 2^{-t} C\_t^{(t+k)/2} &amp; \\text{if } t+k \\text{ is even}, \\\\\\\\ 0 &amp; \\text{otherwise}. \\end{cases} \\\]

Denoting by:

\\\[ \\overline{Z}\_t=\\sup\_{s\\leq t}Z\_s \\\]

the following reflection principle holds:

> [!NOTE]
>
> **Proposition: Reflexion Principle**
>
> For all \\(k\\geq 1\\) and \\(l\\geq 0\\), it holds:
>
> \\\[ P\\left\[ \\overline{Z}\_T \\geq k \\text{ and } Z\_T=k-l\\right\]=P\[Z\_T=k+l\] \\\]
>
> and
>
> \\\[ P\\left\[ \\overline{Z}\_T=k \\text{ and } Z\_T=k-l \\right\]=\\frac{k+l+1}{T+1}2P\[Z\_{T+1}=1+k+l\] \\\]

> [!NOTE]
>
> **Proof**
>
> Define \\(\\tau(\\omega)=\\inf\\{t\\colon Z\_t(\\omega)=k\\}\\wedge T\\) and define:
>
> \\\[ f(\\omega)=(\\omega\_1,\\ldots, \\omega\_{\\tau(\\omega)}, -\\omega\_{\\tau(\\omega)+1},\\ldots,-\\omega\_T) \\\]
>
> The trajectories of \\(Z(\\omega)\\) and \\(Z(f(\\omega))\\) coincide up to the moment where \\(Z(\\omega)\\) reaches for the first time the level \\(k\\). From there on, the trajectories are mirrored with respect to the level \\(k\\). Since the random variables \\(Y\_t\\) are independent of each other, it follows that \\(f\\) is a bijection between the set:
>
> \\\[ \\{\\omega \\in \\Omega\\colon \\overline{Z}\_T(\\omega)\\geq k \\text{ and } Z\_T(\\omega)=k-l\\} \\\]
>
> and the set:
>
> \\\[ \\{\\omega \\in \\Omega\\colon \\overline{Z}\_T(\\omega)\\geq k \\text{ and } Z\_T(\\omega)=k+l\\}=\\{\\omega \\in \\Omega \\colon Z\_T=k+l\\} \\\]
>
> Since \\(P\\) is uniformly distributed, it follows that the first relation of the proposition holds.
>
> As for the second relation, if \\(T+k+l\\) is not even, suppose therefore that \\(j=(T+k+l)/2\\) is an integer. Applying the first relation, it holds:
>
> \\\[ P\\left\[ \\overline{Z}\_T=k;Z\_T=k-l \\right\] = P\\left\[ Z\_T=k+l \\right\]-P\\left\[ Z\_T=k+l+2 \\right\] = 2^{-T}C\_T^j - 2^{-T} C\_{T}^{j+1} \\\]
>
> which simplifies to:
>
> \\\[ P\\left\[ \\overline{Z}\_T=k;Z\_T=k-l \\right\]=\\frac{k+l+1}{T+1}2P\[Z\_{T+1}=1+k+l\] \\\]
>
> The rest of the proof follows analogously.

We can derive the same kind of formulas if we replace \\(P\\) by the equivalent martingale measure \\(P^\\ast\\). In that case, it holds:

\\\[ P^\\ast\\left\[ Z\_t=k \\right\]= \\begin{cases} p^{(t+k)/2}(1-p)^{(t-k)/2} C\_{t}^{(t+k)/2} &amp; \\text{if } t+k \\text{ is even}, \\\\\\\\ 0 &amp; \\text{otherwise}. \\end{cases} \\\]

> [!NOTE]
>
> **Proposition**
>
> For all \\(k\\geq 1\\) and \\(l\\geq 0\\), it holds:
>
> \\\[ P^\\ast\\left\[ \\overline{Z}\_T \\geq k \\text{ and } Z\_T=k-l\\right\]=\\left( \\frac{1-p}{p} \\right)^lP^\\ast\[Z\_T=k+l\]=\\left( \\frac{p}{1-p} \\right)^kP^\\ast\[Z\_T=-k-l\] \\\]
>
> and
>
> \\\[ P^\\ast\\left\[ \\overline{Z}\_T=k \\text{ and } Z\_T=k-l \\right\]=\\frac{1}{p}\\left( \\frac{1-p}{p} \\right)^l\\frac{k+l+1}{T+1}P^\\ast\[Z\_{T+1}=1+k+l\] =\\frac{1}{1-p}\\left( \\frac{p}{1-p} \\right)^k\\frac{k+l+1}{T+1}P^\\ast\[Z\_{T+1}=-1-k-l\]. \\\]

**Proof**

First, inspection shows that:

\\\[ \\frac{dP^\\ast}{dP}=2^T p^{\\frac{Z\_T+T}{2}}(1-p)^{\\frac{T-Z\_T}{2}}. \\\]

From the density formula, we get:

\\\[ P^\\ast\\left\[ \\overline{S}\_T \\geq k \\text{ and } Z\_T=k-l\\right\]=2^T p^{(T+k-l)/2}(1-p)^{(T+l-k)/2}P\\left\[ \\overline{S}\_T \\geq k \\text{ and } Z\_T=k-l\\right\]. \\\]

As well as:

\\\[ P\\left\[ Z\_T=k+l\\right\]=2^T p^{-(T+l+k)/2}(1-p)^{-(T-k-l)/2}P^\\ast\[Z\_T=k+l\]. \\\]

Which combine with:

\\\[ P\\left\[ \\overline{S}\_T \\geq k \\text{ and } Z\_T=k-l\\right\]=P\[Z\_T=k+l\]. \\\]

This yields the first relation, the second one being analogous.

> [!NOTE]
>
> **Example: Up &amp; In Call Option**
>
> Let:
>
> \\\[ C^{call}\_{up\\&amp;in}= \\begin{cases} (S\_T-K)^+ &amp; \\text{if } \\max\_{0\\leq t\\leq T}S\_t=\\overline{S}\_T \\geq B, \\\\\\\\ 0 &amp; \\text{otherwise}. \\end{cases} \\\]
>
> Where \\(K\\) is the strike and \\(B\>S\_0\\vee K\\) is a barrier. Note that:
>
> \\\[ S\_t=S\_0(1+u)^{Z\_t}, \\quad \\text{and} \\quad \\overline{S}\_t=S\_0(1+u)^{\\overline{Z}\_t}. \\\]
>
> It holds:
>
> \\\[ \\pi(C)=\\frac{1}{(1+r)^T} E^\\ast\\left\[C^{call}\_{up\\&amp;in}\\right\]. \\\]
>
> However:
>
> \\\[ E^\\ast\\left\[C^{call}\_{up\\&amp;in}\\right\]= E^\\ast\\left\[ (S\_T-K)^+;\\overline{S}\_T\\geq B \\right\]= E^\\ast\\left\[ (S\_T-K)^+;S\_T\\geq B \\right\] + E^\\ast\\left\[ (S\_T-K)^+;\\overline{S}\_T\\geq B;S\_T\<B \\right\]. \\\]
>
> The first expectation can be entirely computed using the distribution of \\(P^\\ast\\) since it only depends on the distribution of \\(S\_T\\). As for the second expectation, without loss of generality, let \\(B=S\_0(1+u)^k\\) and using our reflection principle:
>
> \\\[ E^\\ast\\left\[ (S\_T-K)^+;\\overline{S}\_T\\geq B;S\_T\<B \\right\]= \\sum\_{l\\geq 1} E^\\ast\\left\[ (S\_T-K)^+;\\overline{S}\_T\\geq B;Z\_T=k-l \\right\]. \\\]
>
> This becomes:
>
> \\\[ \\begin{align\*} \\sum\_{l\\geq 1}\\left( S\_0(1+u)^{k-l}-K \\right)^+ P^\\ast\\left\[ \\overline{Z}\_T \\geq k \\text{ and } Z\_T=k-l\\right\] &amp;=\\sum\_{l\\geq 1}\\left( S\_0(1+u)^{k-l}-K \\right)^+\\left( \\frac{p}{1-p} \\right)^kP^\\ast\[Z\_T=-k-l\] \\\\ &amp; =\\left( \\frac{p}{1-p} \\right)^k(1+u)^{2k}\\sum\_{l\\geq 1}\\left( S\_0(1+u)^{-k-l}-\\tilde{K} \\right)^+P^\\ast\[Z\_T=-k-l\] \\end{align\*} \\\]
>
> where \\(\\tilde{K}=K(1+u)^{-2k}=K(S\_0/B)^2\\). Hence, it follows that:
>
> \\\[ \\pi(C)=\\frac{1}{(1+r)^T} \\left( E^\\ast\\left\[ (S\_T-K)^+;S\_T\\geq B \\right\] + \\left( \\frac{p}{1-p} \\right)^k\\left( \\frac{B}{S\_0} \\right)^2E^\\ast\\left\[ (S\_T-\\tilde{K})^+;S\_T\<B \\right\] \\right). \\\]
>
> Plugging in this distribution yields the explicit formula:
>
> \\\[ \\pi(C)=\\frac{1}{(1+r)^T} \\left\[ \\sum\_{n=0}^{n\_k}\\left( S\_0(1+u)^{T-2n}-K \\right)^+ p^{T-n}(1-p)^n C\_{T}^{T-n} + \\left( \\frac{p}{1-p} \\right)^k\\left( \\frac{B}{S\_0} \\right)^2 \\sum\_{n=n\_k+1}^T \\left( S\_0(1+u)^{T-2n}-\\tilde{K} \\right)^+p^{T-n}(1-p)^n C\_T^{T-n} \\right\]. \\\]
