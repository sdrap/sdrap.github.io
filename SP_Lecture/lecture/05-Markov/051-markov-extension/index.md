# Markov Chain and Extension

In this section we will study a special class of stochastic processes namely those which immediate next evolution only depends on the current state. In other terms they are memory less. We will first introduce them in general framework and dive down into the more intuitive markov chain framework.

In this section we consider a time index \\(\\mathbf{T}\\) which can be either \\(\\mathbb{N}\_0\\) or \\(\[0,\\infty)\\). The Markov process will take value in a measurable state space \\((S, \\mathcal{S})\\) where \\(S\\) is a closed or open subset of \\(\\mathbb{R}^d\\) and \\(\\mathcal{S}\\) is the Borel \\(\\sigma\\)-Algebra—in particular \\(S\\) is a Polish space. Though we can always consider processes from any abstract probability space, it is always possible to map it on the canonical space of paths with the product \\(\\sigma\\)-algebra.

> [!NOTE]
>
> **Definition: Path Space (or Canonical Space)**
>
> The canonical space with values in \\((S, \\mathcal{S})\\) is given by the triplet
>
> \\\[ (\\Omega, \\mathcal{F}, \\mathbb{F}) \\\]
>
> together with the canonical process \\(X = (X\_t)\_{t \\in \\mathbf{T}}\\) where
>
> - **State Space**:
>
>   \\\[ \\Omega = \\left\\{ \\omega = (\\omega\_t)\_{t \\in \\mathbf{T}}\\colon \\omega\_t \\in S \\right\\} = S^{\\mathbf{T}} \\\]
> - **\\(\\sigma\\)-Algebra**: is the resulting product \\(\\sigma\\)-algebra
>
>   \\\[ \\mathcal{F} = \\otimes\_{t \\in \\mathbf{T}} \\mathcal{S} \\\]
> - **Canonical Process**: \\(X = (X\_t)\_{t \\in \\mathbf{T}}\\) where
>
>   \\\[ \\begin{equation\*} \\begin{split} X\_t \\colon \\Omega &amp;\\longrightarrow S \\\\ \\omega = (\\omega\_s)\_{s \\in \\mathbf{T}} &amp; \\longmapsto X\_t(\\omega) = \\omega\_t \\end{split} \\end{equation\*} \\\]
>
>   which is basically the projection process. By definition of the product \\(\\sigma\\)-algebra \\(X\\) is a stochastic process.
> - **Filtration**: \\(\\mathbb{F}=(\\mathcal{F}\_t)\_{t \\in \\mathbf{T}}\\) where
>
>   \\\[ \\mathcal{F}\_t = \\sigma\\left( X\_s \\colon s\\leq t \\right) \\\]
>
>   turning \\(X\\) into an adapted process, its own filtration.

> [!NOTE]
>
> **Definition: Markov Process on Canonical Space**
>
> The canonical process \\(X\\) under a given probability measure \\(P\\) is called a **Markov process** if it satisfies the **Markov property**:
>
> \\\[ \\begin{equation} P\\left\[ X\_{t} \\in B |\\mathcal{F}\_s \\right\]=P\\left\[ X\_{t} \\in B |X\_s \\right\] \\end{equation} \\\]
>
> for every \\(s\\leq t\\) and Borel set \\(B \\in \\mathcal{S}\\).
>
> The probability distribution \\(B\\mapsto \\mu\[B\]:=P\[X\_0 \\in B\]\\) is called the **start distribution** of the Markov process.

Note that the Markov property is equivalent to \\(E\[ f(X\_t)|\\mathcal{F}\_s \]=E\[ f(X\_t)| X\_s \]\\) for every bounded measurable function \\(f:S \\to \\mathbb{R}\\).

> [!NOTE]
>
> **Remark**
>
> In this definition, a Markov process is in fact the specification of a probability measure on the path space such that the canonical process satisfies the **Markov property**.
>
> Note that we can alternatively give ourselves any abstract filtrated probability space \\((\\tilde{\\Omega}, \\tilde{\\mathcal{F}}, \\tilde{\\mathbb{F}},\\tilde{P})\\) and define Markov processes as adapted processes \\(\\tilde{X}\\) satisfying the markov property.
>
> However the mapping \\(\\omega \\mapsto (t\\mapsto \\tilde{X}\_t(\\omega))\\) from \\(\\tilde{\\Omega}\\) to \\(\\Omega\\) with the pullback measure \\(P:=\\tilde{P}\\circ\\tilde{X}^{-1}\\) specifies the probability measure \\(P\\) under which the canonical process \\(X\\) is a Markov process with the same start distribution and same law.

From this remark, we see that defining a Markov process corresponds precisely to specifying the probability on the canonical space \\(\\Omega = S^{\\mathbf{T}}\\). In other terms, providing the structure of the mappings

\\\[ \\begin{equation\*} P\_{s,t}(B):=P\\left\[ X\_t \\in B |X\_s \\right\] \\quad \\text{and}\\quad \\mu(B)=P\[X\_0 \\in B\] \\end{equation\*} \\\]

for every \\(B \\in \\mathcal{S}\\) and \\(s\\leq t\\).

> [!NOTE]
>
> **Example**
>
> A typical way to see a discrete time finite state Markov process is as follows.  
> We set \\(S=\\{1,2,3\\}\\) and \\(\\mu:=\\delta\_1\\). We further assume that the Markov process \\(X\\) is time homogeneous, that is \\(P\[X\_{t+1}\\in B|X\_s\]=P\[X\_1 \\in B|X\_0\]\\) providing the following evolution starting from \\(1\\).
>
> \\\[ \\begin{equation\*} p=\\begin{pmatrix} 0 &amp; 1/2 &amp; 1/2 \\\\ 1/2 &amp; 1/4 &amp; 1/4\\\\ 2/3 &amp; 1/3 &amp; 0 \\end{pmatrix}. \\end{equation\*} \\\]
>
> ```
> flowchart LR
>   s2((State 2)) -->|1/4| s2
>   s2 -->|1/2| s1((State 1))
>   s1 -->|1/2| s2
>   s1 -->|1/2| s3
>   s3 -->|2/3| s1
>   s3 -->|1/3| s2
>   s2 -->|1/4| s3((State 3))
> ```

> [!NOTE]
>
> **Random walk**
>
> Let \\(Y\\) be a discrete stochastic process of independent random variables with values in \\(S=\\mathbb{Z}^d\\). Define \\(X\_t:=\\sum\_{s=0}^{t} Y\_s\\) and \\(\\mathcal{F}\_t:=\\sigma(X\_s\\colon s\\leq t)\\). For \\(y\\in\\mathbb{Z}^d\\), it holds
>
> \\\[ \\begin{align\*} P\[X\_{t+1}=y | \\mathcal{F}\_t\] &amp; =P\[Y\_{t+1} =y-X\_t | \\mathcal{F}\_t\] \\\\ &amp;=\\sum\_{x\\in\\mathbb{Z}^d} P\[Y\_{t+1}=y-x | \\mathcal{F}\_t\] 1\_{\\{X\_t=x\\}} \\\\ &amp; = \\sum\_{x\\in\\mathbb{Z}^d} P\[Y\_{t+1}=y-x \] 1\_{\\{X\_t=x\\}} \\\\ &amp; = \\sum\_{x\\in\\mathbb{Z}^d} P\[Y\_{t+1}=y-x | X\_t\] 1\_{\\{X\_t=x\\}} \\\\ &amp; = P\[Y\_{t+1}=y-X\_t | X\_t\] \\\\ &amp; = P\[X\_{t+1}=y | X\_t\]. \\end{align\*} \\\]

In both examples, we are either providing the transition probabilities or assuming a probability measure on the full space without checking whether such a probability measure can be constructed.

Hence

- A Markov process defines a start measure \\(\\mu\_0\\) and family of transition probabilities \\(P\_{st}(\\cdot, \\cdot)\\). What are these transition probabilities? What are their properties?
- Is it possible to construct a markov process (or in other terms a probability measure \\(P\\) on the path space) from families of transition probabilities? If so, under which conditions?

This is the content of the following section

## From Markov Process to Transition probability

Every \\(\\sigma(X\_s)\\)-measurable random variable \\(Y\\) can be written as \\(Y = f(X\_s)\\) for some measurable function \\(f:S\\to \\mathbb{R}\\). Hence, there exist measurable functions \\(x\\mapsto P\_{st}(x,B)\\) such that

\\\[ \\begin{equation\*} P\_{st}(X\_s,B)=P\\left\[ X\_t\\in B|X\_s \\right\] \\end{equation\*} \\\]

for every \\(s\<t\\) and \\(B\\in \\mathcal{S}\\). Furthermore, it seems very natural that \\(B\\mapsto P\_{st}(x,B)\\) should be a probability measure. This leads us to the notion of stochastic kernel and transition probability which is an alternative way to see Markov processes.

> [!NOTE]
>
> **Definition: Stochastic Kernel (see Fubini-Tonelli in Chapter 3)**
>
> A *stochastic kernel* on \\((S, \\mathcal{S})\\) is a function \\(K:S\\times \\mathcal{S}\\to \[0,\\infty)\\) such that
>
> - \\(x \\mapsto K(x,B)\\) is measurable for every event \\(B\\) in \\(\\mathcal{S}\\).
> - \\(B \\mapsto K(x,B)\\) is a measure for every \\(x\\) in \\(S\\).
>
> If \\(K(x,\\cdot)\\) is a probability measure, then we call it sometimes refered to as a **transition probability**.

For a measurable function \\(f:S\\to \\mathbb{R}\\) and two kernels \\(K\\) and \\(L\\), we define

\\\[ \\begin{equation\*} Kf(x)=\\int\_{}^{} f(y)K(x,dy) \\quad \\text{and}\\quad KL(x,A)=\\int\_{}^{}L(y,A) K(x,dy) \\end{equation\*} \\\]

An easy exercise shows that \\(Kf\\) is a measurable function and that \\(KL\\) is once again a stochastic kernel. The question of whether the mapping \\(B\\mapsto P\_{st}(x,B)\\) is a probability measure for every \\(x\\) is in general not true. However, it holds on Borel spaces as the following proposition shows.

> [!NOTE]
>
> **Regular conditional distribution**
>
> Let \\(X\\) and \\(Y\\) be two \\(S\\) valued random variables. Then, there exists a stochastic kernel \\(K:S\\times \\mathcal{S}\\to \[0,1\]\\) such that
>
> \\\[ K\\left( X,B \\right)= P\\left\[ Y \\in B | X \\right\] \\\]
>
> almost surely for every Borel set \\(B\\) and this stochastic kernel is unique almost surely.

> [!NOTE]
>
> **Proof**
>
> Without loss of generality, we may assume that \\(S=\\mathbb{R}\\). For every rational \\(r\\), there exists a measurable function \\(f(\\cdot,r): S\\to \[0,1\]\\) such that \\(f(X,r)=P\[ Y\\leq r |X \]\\) almost surely. Since \\(f(X,r)\\leq f(X,q)\\) almost surely for every \\(r\\leq q\\) and \\(\\lim\_{r \\to \\infty} f(X,r) =1\\) and \\(\\lim\_{r\\to -\\infty}f(X,r)=0\\) almost surely, and these conditions are countable and only depending on \\(X\\), there exists a set \\(A\\in \\sigma(X)\\) of measure one such that \\(f(x,r)\\) is increasing with limit at \\(\\pm \\infty\\) being \\(0\\) or \\(1\\).
>
> Hence, defining
>
> \\\[ F(x,t)=1\_A(x)\\inf\_{r\>t, r\\in \\mathbb{Q}}f(x,r)+1\_{A^c}(x)1\_{\[0,\\infty)}(t) \\\]
>
> we get that \\(F(x,\\cdot)\\) is a cumulative distribution function for every \\(x\\in \\mathbb{R}\\). In particular, there exists probability measures \\(K(x, \\cdot)\\) such that
>
> \\\[ K(x,B)=\\int\_{B}^{} F(x,dt) \\\]
>
> and by construction \\(x\\mapsto K(x,B)\\) is measurable for every \\(x\\). A monotone class argument together with monotone convergence for conditional expectation shows that
>
> \\\[ K(X,B)=P\\left\[ Y \\in B|X \\right\] \\\]
>
> and uniqueness almost surely follows from the uniqueness almost surely of the conditional expectation.

> [!NOTE]
>
> **Remark**
>
> In particular for any bounded measurable function \\(f:\\mathbb{R}^2\\to \\mathbb{R}\\), it holds
>
> \\\[ E\\left\[ f(X,Y)| X \\right\]=\\int\_{}^{} f(X,y)K(X,dy) = g(X) \\\]
>
> where
>
> \\\[ g(x) = \\int\_{}^{} f(x,y)K(x,dy) \\\]

This statement leads to the following proposition.

> [!NOTE]
>
> **Markov process transition probabilities**
>
> If \\(X\\) is a Markov process under \\(P\\) with start distribution \\(\\mu\\), there exists a family \\((P\_{st})\_{s\<t}\\) of transition probabilities such that
>
> \\\[ P\\left\[ X\_t \\in B |\\mathcal{F}\_s \\right\]=P\_{st}(X\_s,B) \\\]
>
> for every \\(s\<t\\). Furthermore, \\((P\_{st})\_{s\<t}\\) satisfies the semi-group property
>
> \\\[ P\_{st}P\_{tu}=P\_{su} \\\]
>
> for every \\(s\<t\<u\\).

> [!NOTE]
>
> **Proof**
>
> Suppose that \\(X\\) is a Markov process. According to Proposition "Regular conditional distribution", it follows that there exists a family of stochastic kernels \\(P\_{st}\\) such that \\(P\[ X\_t \\in B|X\_s \]=P\_{st}(X\_s, B)\\), hence Property.
>
> As for the semi-group property, it follows from the tower property of conditional expectation. Indeed, it holds \\(P\_{st}(x,B)=P\[X\_t\\in B|X\_s=x\]\\) almost surely for every \\(x\\), \\(B\\in \\mathcal{S}\\) and \\(s\<t\\) as well as \\(E\[f(X\_t)|\\mathcal{F}\_s\]=E\[f(X\_t)|X\_s\]=\\int\_{}^{} f(y)P\_{st}(X\_s,dy)\\). Hence, using the Markov property,
>
> \\\[ P\_{st}P\_{tu}(X\_s,B)=\\int\_{S}^{} P\_{tu}(y,B)P\_{st}(X\_s,dy)=E\\left\[ P\_{tu}(X\_t,B)|\\mathcal{F}\_s \\right\] = E\\left\[ E\\left\[ 1\_{\\{X\_u \\in B\\}}|X\_t \\right\]|\\mathcal{F}\_s \\right\] \\\]
>
> \\\[ E\\left\[ E\\left\[ 1\_{\\{X\_u \\in B\\}} |\\mathcal{F}\_t\\right\] |\\mathcal{F}\_s\\right\]=E\\left\[ 1\_{\\{X\_u \\in B\\}} |\\mathcal{F}\_s\\right\]=E\\left\[ 1\_{\\{X\_u \\in B\\}} | X\_s\\right\]=P\_{su}(X\_s,B) \\\]
>
> By the uniqueness of the stochastic kernel, we deduce that \\(P\_{st}P\_{tu}=P\_{su}\\).

## From Transition Probabilities to Markov

The most interesting, and involving question though is the reciprocal. In other terms, given a start distribution \\(\\mu\\) and a family of transition probabilities, does there exists a probability measure \\(P\\) on the path space such that the canonical process is a Markov process with the given transition probabilities? Is this process unique? It is indeed true and based on the fondamental Kolmogorov extension Theorem that we will treat in a separate subsection during the construction of the Brownian motion.

> [!NOTE]
>
> **Existence of Markov process**
>
> Given a probability distribution \\(\\mu\\) and a family of transition probabilities \\((P\_{st})\_{s\<t}\\) satisfying the semi-group property, then there exists a probability measure \\(P^\\mu\\) such that \\(X\\) is a Markov process with start distribution \\(\\mu\\) and such that the transition probability holds.

> [!NOTE]
>
> **Proof**
>
> We define the family of probability measures \\((P^\\mu\_I)\\) for every finite family \\(I=\\{0\<t\_1\<\\ldots\<t\_n\\}\\subseteq \\mathbf{T}\\) by setting for every \\(n+1\\)-dimensional Borel set \\(A\_0\\times A\_1\\times \\cdots A\_n\\)
>
> \\\[ P^\\mu\_I(A\_0\\times \\ldots \\times A\_n )=\\int\_{A\_0}^{}\\mu(dx\_0)\\int\_{A\_1}^{}P\_{0t\_1}(x\_0,dx\_1)\\int\_{A\_2}^{}P\_{t\_1t\_2}(x\_1,dx\_2)\\cdots \\int\_{A\_n}^{} P\_{t\_{n-1}t\_n}(x\_{n-1},dx\_n) \\\]
>
> Due to the semi-group property, it defines a consistent family of probability measures. Hence, by means of the Kolmogorov extension theorem, we can extend this projective family to a unique probability measure \\(P^\\mu\\) such that \\(X\\) by definition fulfills the transition probability property. Hence, \\(X\\) is a Markov process under \\(P^\\mu\\) with start distribution \\(\\mu\\) and transition probability \\((P\_{st})\_{s\<t}\\).

> [!NOTE]
>
> **Remark**
>
> Note that given a family of transition probabilities \\((P\_{st})\\) we can define a probability measure \\(P^\\mu\\) on the path space such that \\(X\\) is a Markov process with start distribution \\(\\mu\\). We denote in that case \\(E^\\mu\\) the expectation under this probability measure. This is in particular the case for all the Dirac measures \\(\\delta\_{x}\\) for \\(x\\) in \\(S\\), that is, for Markov processes starting at \\(x\\). We denote \\(P^x\\) instead of \\(P^{\\delta\_x}\\) and \\(E^x\\) instead of \\(E^{\\delta\_x}\\). Given \\(P^x\\) for every \\(x\\) and a distribution \\(\\mu\\), we can recover any \\(P^\\mu\\) as follows.
>
> \\\[ P^{\\mu}\[A\]=\\int\_{}^{} P^{x}\[A\] \\mu(dx) \\\]
>
> In fact, \\((x,A)\\mapsto P^{x}\[A\]\\) is a stochastic kernel on \\(S\\times \\mathcal{F}\\) and therefore the relation
>
> \\\[ P^{\\mu}\[A\]=\\int\_{}^{} P^{x}\[A\] \\mu(dx) \\\]

## Markov Property

**From now on, we will only consider time homogeneous Markov processes:**

> [!NOTE]
>
> **Time homogeneous Markov process**
>
> A Markov process is called **time homogeneous** if and only if \\(P\_{st}=P\_{0t-s}\\), or in other terms, \\(P\[X\_t\\in B|X\_s\]=P\[X\_{t-s}\\in B|X\_0\]\\).

In that case, we only have to specify the start distribution \\(\\mu\\) and a family of transition probabilities \\(P\_t\\).

Let \\(Z\\) be a random variable on \\(\\Omega\\), that is, \\(\\mathcal{F}=\\mathcal{F}\_{\\infty}=\\sigma(X\_t\\colon t \\in \\mathbf{T})\\)-measurable. It is, in particular, a function \\(\\omega=(\\omega\_t)\\mapsto Z(X(\\omega))=Z((\\omega)\_{t \\in \\mathbf{T}})\\).

However:

- If \\(Z\\) is \\(\\mathcal{F}\_{t}=\\sigma(X\_s\\colon s\\leq t)\\)-measurable, then \\(Z\\) can actually be seen as a measurable function that only depends on the paths up to time \\(t\\), that is, \\(\\omega \\mapsto Z((X\_s(\\omega))\_{s\\leq t})=Z((\\omega)\_{s\\leq t})\\).
- If \\(Z\\) is \\(\\sigma(X\_t)\\)-measurable, then it can be seen as a measurable function that only depends on the value of the path at time \\(t\\), that is, \\(\\omega \\mapsto Z(X\_t(\\omega))=Z(\\omega\_t)\\).

In particular, for the shift operator of a path by \\(t\\):

\\\[ \\begin{aligned} \\theta\_t :\\Omega &amp; \\longrightarrow \\Omega\\\\ \\omega =(\\omega\_s)\_{s \\in \\mathbf{T}} &amp; \\longmapsto \\theta\_t(\\omega)=(\\omega\_{s+t})\_{s\\in \\mathbf{T}} \\end{aligned} \\\]

we have that \\(Z\\circ \\theta\_t(\\omega)=Z\\left( (\\omega\_{s+t})\_{s\\in \\mathbf{T}} \\right)\\) is the evaluation of the random variable \\(Z\\) on the shifted path space by \\(t\\). In particular, if \\(Z\\) is \\(\\sigma(X\_s)\\)-measurable, then it holds that \\(Z\\circ \\theta\_t(\\omega)=Z(\\omega\_{t+s})\\) is \\(\\sigma(X\_{t+s})\\)-measurable.

> [!NOTE]
>
> ****Markov Property****
>
> Let \\((P\_{t})\\) be a family of transition probabilities and \\(\\mu\\) be a probability distribution. For every bounded or positive measurable random variable \\(Z\\), it holds that \\(x \\mapsto E^x\[Z\]\\) is measurable. In particular, for every \\(t\\), the function \\(E^{X\_t}\[Z\]\\) defined as
>
> \\\[ \\omega \\mapsto E^{X\_t(\\omega)}\[Z\] \\\]
>
> is \\(\\sigma(X\_t)\\)-measurable, and the Markov property holds
>
> \\\[ E^\\mu\\left\[ Z\\circ \\theta\_t |\\mathcal{F}\_t \\right\]=E^{X\_t}\\left\[ Z \\right\] \\\]

> [!NOTE]
>
> **Proof**
>
> By monotony and approximation arguments, it is enough to show the proposition for the function \\(Z = 1\_{A\_0\\times A\_1\\times \\ldots \\times A\_n}(X\_0,X\_{t\_{1}},\\ldots, X\_{t\_n})\\) where \\(A\_k\\) are Borel sets. By definition of \\(P^x\\) and the previous remarks, it follows that
>
> \\\[ \\begin{align\*} E^x\[Z\] &amp; = \\int\_{A\_0}^{}\\delta\_x(dx\_0)\\int\_{A\_1}^{}P\_{t\_1}(x\_0,dx\_1)\\ldots \\int\_{A\_n}^{}P\_{t\_n-t\_{n-1}}(x\_{n-1},dx\_n)\\\\ &amp; = 1\_{A\_0}(x)\\int\_{A\_1}^{}P\_{t\_1}(x,dx\_1)\\ldots \\int\_{A\_n}^{}P\_{t\_n - t\_{n-1}}(x\_{n-1},dx\_n) \\end{align\*} \\\]
>
> Since \\(x \\mapsto 1\_{A\_0}(x)\\) is measurable, and the \\((P\_{st})\\) are stochastic kernels, the first assertion follows. In particular, for this specific form of \\(Z\\), it holds
>
> \\\[ E^{X\_t}\[Z\]=1\_{A\_0}(X\_t)\\int\_{A\_1}^{}P\_{t\_1}(X\_t,dx\_1)\\ldots \\int\_{A\_n}^{}P\_{t\_n-t\_{n-1}}(x\_{n-1},dx\_n) \\\]
>
> As for the second assertion, once again with a monotone class argument, it is enough to show that
>
> \\\[ E^\\mu\[ Z\\circ \\theta\_t Y \]=E^\\mu\[ E^{X\_t}\[ Z \]Y\] \\\]
>
> for \\(Y = 1\_{B\_0\\times B\_1\\times \\ldots \\times B\_m}(X\_0,X\_{s\_{1}},\\ldots, X\_{s\_m})\\) where \\(A\_k\\) are Borel sets and \\(s\_m= t\\). By definition of \\(P^\\mu\\), the shift operator, and the expression of \\(E^{X\_t}\[Z\]\\) above we get
>
> \\\[ \\begin{align\*} E^\\mu\[ Z\\circ \\theta\_t Y \] &amp; = E^\\mu\\left\[ 1\_{A}(X\_{t}, X\_{t+t\_1}, \\ldots, X\_{t+t\_n}) 1\_B(X\_{0}, \\ldots, X\_{s\_m}) \\right\]\\\\ &amp; = \\int\_{B\_0}^{}\\mu(dx\_0)\\int\_{B\_1}^{}P\_{s\_1}(x\_0,dx\_1)\\ldots\\\\ &amp; \\qquad \\qquad \\qquad\\ldots \\int\_{B\_m\\cap A\_0}^{}P\_{t-s\_{m-1}}(x\_{m-1},dx\_m)\\int\_{A\_1}^{} P\_{t+t\_1-t}(x\_{m},dy\_1)\\cdots \\int\_{A\_n}^{} P\_{t+t\_{n} -t-t\_{n-1}}(y\_{n-1},dy\_n)\\\\ &amp; = \\int\_{B\_0}^{}\\mu(dx\_0)\\int\_{B\_1}^{}P\_{s\_1}(x\_0,dx\_1)\\ldots \\int\_{B\_m\\cap A\_0}^{}P\_{t-s\_{m-1}}(x\_{m-1},dx\_m)\\int\_{A\_1}^{} P\_{t\_1}(x\_{m},dy\_1)\\cdots\\\\ &amp; \\qquad \\qquad \\qquad \\cdots \\int\_{A\_n}^{} P\_{t\_{n}-t\_{n-1}}(y\_{n-1},dy\_n)\\\\ &amp; = E^\\mu\[ E^{X\_t}\[ Z \]Y\] \\end{align\*} \\\]
