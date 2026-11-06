# Stochastic Processes

Stochastic processes mean that you want to carry over *time* the idea that outcomes will be revealed as time goes by. Considering for instance your view of the evolution of a financial asset. At the very begining your decisions towards it relies only on what you can forsee in the future about its evolution however as times goes buy you learn more and more infromation about the nature of this financial asset.

> [!NOTE]
>
> **Example**
>
> We consider a probability space \\((\\Omega, \\mathcal{F}, P)\\) and a sequence \\((Y\_t)\\) of independent identically distributed (iid) random variables such that
>
> \\\[ P\[Y\_t = 1\] = P\[Y\_1 = 1\] = \\frac{1}{2} = P\[Y\_1 = -1\] = P\[Y\_t = -1\] \\\]
>
> In other terms, \\(Y\_n\\) represent the result of tossing a fair coin at time \\(t\\) with \\(1\\) if tail and \\(-1\\) if head.
>
> We define the (symetric) random walk as
>
> \\\[ S\_0 = 100 \\quad \\text{and} \\quad S\_t = S\_{t-1} + Y\_t = 100 + \\sum\_{s=1}^t Y\_s \\\]
>
> this produces the following possible paths
>
> ![Random Walk](<https://www.samuel-drapeau.info/FM_Lecture/images/rw_dark.svg#only-dark>) ![Random Walk](<https://www.samuel-drapeau.info/FM_Lecture/images/rw_white.svg#only-light>)
>
> Now for a price of \\(100\\) RMB you have the choice between the different games.
>
> 1. **All In:** Receive the value of the random walk after 100 coin tosses, that is \\(S\_{100}\\).
> 2. **Stop Gain:** If the random walk reaches \\(120\\), you stop the game and cash \\(120\\), otherwize you get \\(S\_{100}\\)
> 3. **Stop Loss:** If the random walk falls to \\(90\\), you stop the game and cash \\(90\\), otherwize you get \\(S\_{100}\\).
> 4. **Stop Gain/Loss:** If the random walk reaches \\(120\\) or \\(90\\) you stop the gain an cash \\(120\\) or \\(90\\) respectively, otherwize you get \\(S\_{100}\\).
> 5. **Not a gambler:** I don't play and keep my \\(100\\) RMB
>
> Now which game would you venture in and why? Which game would bring you in expectation the best outcome?

## Information, Conditional Expectation

Information is considered as a \\(\\sigma\\)-algebra of events. Now information means that we have an increasing sequence of events that we are aware of, called a filtration.

> [!NOTE]
>
> **Definition: Filtration**
>
> A **filtration** \\(\\mathbb{F} = (\\mathcal{F}\_t)\_{t=0, \\ldots, T}\\) is a collection of \\(\\sigma\\)-algebra of events such that
>
> \\\[ \\mathcal{F}\_0 \\subseteq \\mathcal{F}\_1 \\subseteq \\cdots \\subseteq \\mathcal{F}\_T\\\]

In other terms, the collection of events known at time \\(s\\) is included in the set of events known at time \\(t\\geq s\\).

> [!WARNING]
>
> It is not necessary but throughout we make the assumption that
>
> \\\[\\mathcal{F}\_0 = \\{\\emptyset, \\Omega\\} \\quad \\text{and}\\quad \\mathcal{F}\_T = \\mathcal{F}\\\]
>
> In other terms, we assume that at time zero we know nothing and at time \\(T\\) we know everything.
>
> > **Lemma**
> >
> > If a random variable \\(\\xi\\) is \\(\\mathcal{F}\_0=\\{\\emptyset, \\Omega\\}\\)-measurable, then it must be constant.
>
> **Proof**
>
> It is a basic exercise to check. Suppose that a random variable \\(\\xi\\) is \\(\\mathcal{F}\_0=\\{\\emptyset, \\Omega\\}\\)-measurable then it constant. Indeed, if it where not, let \\(\\omega\_1\\) and \\(\\omega\_2\\) be two states on which \\(\\xi(\\omega\_1) \< \\xi(\\omega\_2)\\), let \\(x\\) be such that \\(\\xi(\\omega\_1)\<x\<\\xi(\\omega\_2)\\). It follows that \\(\\omega\_1 \\in A=\\{\\xi\\leq x\\}\\) while \\(\\omega\_2 \\not \\in A\\). This is however not possible since the event \\(A\\) is either \\(\\Omega\\) or \\(\\emptyset\\).
>
> In this case, it follows that any random variable \\(\\xi\\) which is \\(\\mathcal{F}\_0\\) measurable must be constant.

> [!NOTE]
>
> **Definition**
>
> A family \\(X = (X\_t)\\) of random variable indexed by time is called a **stochastic process**.
>
> A stochastic process \\(X\\) is called
>
> - **Adapted:** if \\(X\_t\\) is \\(\\mathcal{F}\_t\\)-measurable for every \\(t\\);
> - **Predictable:** if \\(X\_t\\) is \\(\\mathcal{F}\_{t-1}\\)-measurable for every \\(t\\)

**Remark**

For predictability, one needs to specify a convention for \\(X\_0\\). either we say that predictable processes starts at time \\(1\\) or we say that \\(\\mathcal{F}\_{-1} = \\mathcal{F}\_0 = \\{\\emptyset, \\Omega\\}\\).

## Martingales

Martingales are the most important object to study the properties of stochastic processes.

> [!NOTE]
>
> **Definition**
>
> A stochastic process \\(X = (X\_t)\_{t=0, \\ldots, T}\\) is called a **martingale** if
>
> 1. \\(X\\) is adapted
> 2. \\(X\\) is integrable
> 3. \\(X\\) satisfies the martingale property
>
>    \\\[ E\[X\_{t+1}|\\mathcal{F}\_t\] = X\_t \\\]
>
> It is a **super-martingale** if
>
> 1. \\(X\\) is adapted
> 2. \\(X\\) is integrable
> 3. \\(X\\) satisfies the super martingale property
>
>    \\\[ E\[X\_{t+1}|\\mathcal{F}\_t\] \\leq X\_t \\\]
>
> It is a **sub-martingale** if
>
> 1. \\(X\\) is adapted
> 2. \\(X\\) is integrable
> 3. \\(X\\) satisfies the super martingale property
>
>    \\\[ E\[X\_{t+1}|\\mathcal{F}\_t\] \\geq X\_t \\\]

Clearly, \\(X\\) is a sub-martingale if and only if \\(-X\\) is a super-martingale and \\(X\\) is a martingale if and only if it is a super and sub martingale at the same time.

> [!WARNING]
>
> Note that the notion of martingale (sup or super) depends on the measure considered. A martingale under a probability measure \\(P\\) might no longer be a martingale under another probability measure.

> [!NOTE]
>
> **Doob-Meyer Decomposition**
>
> Let \\(X\\) be an integrable and adapted process. It can be uniquely decomposed into:
>
> \\\[ X=M+A, \\\]
>
> where \\(A\\) is a predictable process with \\(A\_0=0\\) and \\(M\\) is a martingale.
>
> The process \\(X\\) is a super-martingale if and only if \\(A\\) is decreasing and a sub-martingale if and only if \\(A\\) is increasing.

**Proof**

**Existence:** Suppose that we have a decomposition \\(X = M+A\\) with \\(M\\) martingale and \\(A\\) predictable, then it must hold that

\\\[ \\begin{align\*} 0 &amp; = E\[M\_{t+1} - M\_t|\\mathcal{F}\_t\]\\\\ &amp; = E\[X\_{t+1} - X\_t - A\_{t+1} + A\_t | \\mathcal{F}\_t\]\\\\ &amp; = E\[X\_{t+1} - X\_t | \\mathcal{F}\_t\] - A\_{t+1} + A\_t &amp;&amp;A \\text{ is predictable} \\end{align\*} \\\]

showing that \\(A\_{t+1} = E\[X\_{t+1} - X\_t |\\mathcal{F}\_t\] - A\_t\\).

We therefore define recursively

\\\[ \\begin{equation\*} \\begin{cases} A\_0 &amp; = 0\\\\ A\_{t+1} &amp; = E\[X\_{t+1} - X\_{t}|\\mathcal{F}\_t\] - A\_t \\end{cases} \\end{equation\*} \\\]

which by induction can be shown to be predictable and starting at \\(0\\). Then \\(M = X+A\\) by the previous computations is a martingale defining the decomposition.

**Uniqueness:** Suppose that \\(X = M+A = \\tilde{M} + \\tilde{A}\\) be two decompositions. It follows that \\(M - \\tilde{M}\\) is a martingale and predictable. It follows that for every \\(t\\) it must hold

\\\[ \\begin{align\*} 0 &amp;= E\\left\[ (M\_{t+1} - M\_t) - (\\tilde{M}\_{t+1} - \\tilde{M}\_t) |\\mathcal{F}\_t \\right\] &amp;&amp; \\text{Martingale property}\\\\ &amp; = (M\_{t+1} - M\_t) - (\\tilde{M}\_{t+1} - \\tilde{M}\_t) &amp;&amp; M-\\tilde{M}\\text{ is predictable} \\end{align\*} \\\]

We therefore get that

\\\[ M\_{t+1} - \\tilde{M}\_{t+1} = M\_{t} - \\tilde{M}\_{t} = \\cdots = M\_0 - \\tilde{M}\_0 = \\tilde{A}\_0 - A\_0 = 0-0 = 0 \\\]

showing that \\(M=\\tilde{M}\\) and therefore \\(A=\\tilde{A}\\).

> [!NOTE]
>
> **Proposition**
>
> Let \\(M\\) be an adapted and integrable process. The two following assertions are equivalent:
>
> 1. \\(M\\) is a martingale
> 2. for any bounded predictable process \\(\\eta = (\\eta\_t)\\), the process \\(V= (V\_t)\\)
>
>    \\\[ V\_t = V\_0 + \\sum\_{s=1}^t \\eta\_s (M\_s - M\_{s-1}) \\\]
>
>    is a martingale.

**Proof**

Suppose that \\(M\\) is a martingale and let \\(\\eta\\) be a bounded predictable process. By definition \\(V\\) is adapted. Furthermore, denoting by \\(c\\) the constant bounding \\(\\eta\\), it holds that

\\\[ |V\_t| \\leq |V\_0| + c \\sum\_{s=1}^t (|M\_s| + |M\_{s-1}|) \\\]

which is a a sum of integrable random variables hence integrable. As for the martingale property

\\\[ \\begin{align\*} E\[V\_{t+1} - V\_t|\\mathcal{F}\_t\] &amp; = E\[\\eta\_{t+1} (M\_{t+1} - M\_t) | \\mathcal{F}\_t\]\\\\ &amp; = \\eta\_{t+1} E\[M\_{t+1}- M\_t |\\mathcal{F}\_t\] &amp;&amp; \\eta\\text{ is predictable}\\\\ &amp; = 0 &amp;&amp; M\\text{ is a martingale}\\\\ \\end{align\*} \\\]

Reciprocally, for \\(V\_0 = M\_0\\) and \\(\\eta\_t = 1\\) for every \\(t\\) by hypotheses, \\(V\\) is a martingale. However \\(V\_t = M\_t\\) for every \\(t\\).

## Stopping times

> [!NOTE]
>
> **Definition**
>
> A *stopping time* is a random variable \\(\\tau:\\Omega \\to \\{0,1,\\ldots, T\\}\\cup\\{\\infty\\}\\) such that \\(\\{\\tau =t\\} = \\{\\omega \\in \\Omega\\colon \\tau(\\omega)=t\\}\\) is in \\(\\mathcal{F}\_t\\) for every \\(0\\leq t\\leq T\\).

In other terms, \\(\\{ \\tau=t\\}\\) represents the event on which the buyer will decide to exercise its American contingent claim. The event \\(\\{\\tau=\\infty\\}\\) represents the event where the triggering conditions have not been met before the time horizon, and therefore the buyer will exercise it at time \\(T\\).

> [!NOTE]
>
> **Remark**
>
> Also (and this is specific to discrete time), the condition \\(\\{\\tau = t\\}\\) in \\(\\mathcal{F}\_t\\) for every \\(t\\) is equivalent to the condition \\(\\{\\tau \\leq t\\}\\) in \\(\\mathcal{F}\_t\\) for every \\(t\\). This comes from the fact that \\(\\{\\tau \\leq t\\} = \\cup\_{s=0}^t \\{\\tau = s\\}\\) and \\(\\{\\tau = t\\} = \\{\\tau\\leq t\\} \\setminus \\{\\tau \\leq t-1\\}\\).

> [!NOTE]
>
> **Lemma**
>
> The following statments hold true
>
> 1. Deterministic times are stopping times, i.e. \\(\\tau \\equiv t\\) for some \\(t\\) is a stopping time.
> 2. If \\(\\sigma\\) and \\(\\tau\\) are stopping times then so is \\(\\sigma\\vee \\tau\\), \\(\\sigma \\wedge \\tau\\) and \\(\\sigma + \\tau\\).
> 3. If \\(X\\) is an adapted stochastic process and \\(I\\) is an interval then the entry time
>
>    \\\[ \\tau(\\omega) = \\inf \\left\\{ t\\colon X\_t(\\omega) \\in I \\right\\} \\\]
>
>    is a stopping time.

**Proof**

As for 1., defining \\(\\tau \\equiv t\\) as a stopping time follows from \\(\\{\\tau = s\\}\\) is equal to \\(\\emptyset\\) if \\(s\\neq t\\) and \\(\\Omega\\) is \\(s=t\\) both of which are in \\(\\mathcal{F}\_s\\).

As for 2., we just show \\(\\sigma \\wedge \\tau\\) is a stopping time. It follows from \\(\\{\\sigma\\wedge \\tau = t\\} = (\\{\\sigma = t\\}\\cap \\{\\tau \\leq t\\}^c) \\cup \\{\\tau = t\\}\\cap \\{\\sigma \\leq t\\}^c\\). The other cases follow from similar arguments and are left as an exercise.

As for 3., it holds

\\\[ \\{\\tau \\leq t\\} = \\{X\_s \\in I \\text{ for some }s\\leq t\\} = \\cup\_{s=0}^t \\{X\_s \\in I\\} \\\]

however, \\(\\{X\_s \\in I\\}\\) is in \\(\\mathcal{F}\_s\\subseteq \\mathcal{F}\_t\\) since \\(X\\) is adapted.

> [!NOTE]
>
> **Remark**
>
> As a particular case, given a stopping time \\(\\tau\\), then \\(\\tau \\wedge t\\) is a stopping time smaller than \\(t\\). It follows that \\(t \\mapsto t\\wedge \\tau\\) is a stopped clock where it runs time until it hits \\(\\tau\\) and then stay at \\(\\tau\\). This motivates the following concept of a stopped process.

> [!NOTE]
>
> **Definition: Stopped Process**
>
> Let \\(X\\) be a stochastic process and \\(\\tau\\) a stopping time. We denote by \\(X^\\tau = (X\_t^\\tau) = (X\_{t \\wedge \\tau})\\) the stopped process
>
> \\\[ \\begin{equation\*} X\_t^\\tau(\\omega)=X\_{t\\wedge \\tau(\\omega)}(\\omega) = \\begin{cases} X\_t(\\omega) &amp;\\text{if }t\< \\tau(\\omega)\\\\ X\_{\\tau(\\omega)}(\\omega) &amp; \\text{if }\\tau(\\omega)\\leq t \\end{cases} \\end{equation\*} \\\]
>
> ![Stopped](<https://www.samuel-drapeau.info/FM_Lecture/images/stopping_dark.svg#only-dark>) ![Stopped](<https://www.samuel-drapeau.info/FM_Lecture/images/stopping_white.svg#only-light>)

Stopping an adapted process, then it remains an adapted process.

> [!NOTE]
>
> **Lemma**
>
> If \\(X\\) is adapted then so is \\(X^\\tau\\).

**Proof**

Let \\(x\\) be in \\(\\mathbb{R}\\), given a time \\(t\\), we have

\\\[ \\begin{align\*} \\{X\_t^\\tau \\leq x\\} &amp; = \\{X\_{t\\wedge \\tau} \\leq x\\}\\\\ &amp; = (\\{X\_t \\leq x\\} \\cap \\{\\tau \> t\\}) \\cup\_{s=0}^t (\\{X\_s \\leq x\\}\\cap \\{\\tau = s\\})\\\\ &amp; = \\underbrace{(\\underbrace{\\{X\_t \\leq x\\}}\_{\\in \\mathcal{F}\_t} \\cap \\underbrace{\\{\\tau \\leq t\\}^c}\_{\\in \\mathcal{F}\_t}) \\cup\_{s=0}^t (\\underbrace{\\{X\_s \\leq x\\}}\_{\\in \\mathcal{F}\_s \\subseteq \\mathcal{F}\_t}\\cap \\underbrace{\\{\\tau = s\\}}\_{\\in \\mathcal{F}\_s \\subseteq \\mathcal{F}\_t})}\_{\\in \\mathcal{F}\_t} \\end{align\*} \\\]

## Doob's Optional Sampling Theorem

> [!NOTE]
>
> **Theorem: Doob's Optional Sampling**
>
> Let \\(X\\) be an adapted and integrable process. The following assertions are equivalent:
>
> 1. \\(X\\) is a martingale;
> 2. For every stopping time \\(\\tau\\), the stopped process \\(X^\\tau\\) is a martingale;

**Proof**

As for 1. implies 2, we already know that if \\(X\\) is a martingale and \\(\\eta = (\\eta\_t)\_{t=1, \\ldots, T}\\) is a predictable process, then the portfolio

\\\[ V\_t = V\_0 + \\sum\_{s=1}^t \\eta\_s (X\_s - X\_{s-1}) \\\]

is a martingale. Taking the portfolio \\(V\_0 = X\_0\\) and the strategy

\\\[ \\begin{equation\*} \\eta\_t = 1\_{\\{t\\leq \\tau\\}} = \\begin{cases} 1 &amp; \\text{if }t\\leq \\tau\\\\ 0 &amp; \\text{if }t\>\\tau \\end{cases} \\end{equation\*} \\\]

where you buy and hold \\(X\\) until time \\(\\tau\\), it follows that \\(\\eta\\) is predictable since \\(\\{t\\leq \\tau\\}=\\{\\tau \\leq t-1\\}^c\\) is in \\(\\mathcal{F}\_{t-1}\\). Furthermore, by definition

\\\[ \\begin{equation\*} V\_t = \\begin{cases} X\_t &amp; \\text{if }t\< \\tau\\\\ X\_\\tau &amp; \\text{if }\\tau \\leq t \\end{cases} = M\_{t\\wedge \\tau} = M^\\tau\_t \\end{equation\*} \\\]

showing that \\(M^\\tau\\) is a martingale.

As for 2. implies 1., it is immediate by considering the stopping time \\(\\tau = T\\).

> [!NOTE]
>
> **Remark**
>
> Note that if \\(\\eta\\) is a **positive** predictable process and \\(X\\) is a super-/sub-martingale, then it is easy to show that the portfolio \\(V\_t = V\_0 + \\sum\_{s=1}^t\\eta\_s (X\_s - X\_{s-1})\\) is a super-/sub-martingale. It follows from the proof that Doob's optional sampling theorem also holds for super-/sub-martingales.

> [!NOTE]
>
> **Original version of Doob Meyer's Optional Sampling Theorem**
>
> Let \\(X\\) be a martingale and \\(\\tau\\) be a stopping time with \\(\\tau \\leq T\\), then it follows that
>
> \\\[ X\_0 = E\[X\_{\\tau}\] \\\]

**Proof**

Let \\(\\tau\\) be a stopping time bounded by \\(T\\) for which clearly holds \\(0\\wedge \\tau = 0\\) and \\(T\\wedge \\tau =T\\), since \\(X\\) is a martingale, it follows that \\(X^\\tau\\) is a martingale. By the tower property we get

\\\[ X\_0 = X\_{0\\wedge \\tau} = E\[X\_0^\\tau\] = E\[X\_T^\\tau\] = E\[\\underbrace{X\_{T\\wedge \\tau}}\_{=X\_\\tau}\] \\\]

> [!NOTE]
>
> **Remark**
>
> The same argumentation with inequality holds if \\(X\\) is a super-/sub-martingale.
