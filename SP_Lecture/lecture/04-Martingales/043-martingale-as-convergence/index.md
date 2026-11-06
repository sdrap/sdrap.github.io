# Martingale: Almost Sure Convergence

Given a martingale \\(X\\), this section treats the questions whether there exists \\(X\_\\infty\\) such that \\(X\_t\\to X\_\\infty\\) in the almost sure sense. In other terms we want to study the asymptotic behavior of a stochastic process \\(X\\).

Given a stochastic process \\(X\\), we can classify the different behaviors of the paths \\(t \\mapsto X\_t(\\omega)\\) as follows

- **Convergence to \\(\\pm \\infty\\)**: the path converges to either \\(\\infty\\) or \\(-\\infty\\). The corresponding event of those states where it happens is given by

  \\\[C = \\{\\limsup X\_t = -\\infty \\text{ or }\\liminf X\_t = \\infty\\}\\\]
- **Convergence in \\(\\mathbb{R}\\)**: the path converges to a real limit, that is, \\(\\lim X\_t(\\omega)\\) exists in \\(\\mathbb{R}\\). The corresponding event of those states where it happens is given by

  \\\[B = \\{-\\infty \< \\liminf X\_t = \\limsup X\_t\<\\infty\\}\\\]
- **Oscillatory behavior**: In the case of non convergence, the path will oscillate infinitely. The corresponding event of those states where it happens is given by

  \\\[A = \\{\\liminf X\_t \< \\limsup X\_t\\}\\\]

Clearly each of these sets are events and build a partition of \\(\\Omega\\). The seminal idea of Doob was to recognize that sub-martingales have properties helping to estimate the probability of the latter set. The building bloc for which is the Doob's upcrossing lemma.

## Doob's Upcrossing Lemma and Martingale Convergence

Let \\(X\\) be a process, \\(x\<y\\) be real numbers and \\(F\\) be a finite subset of \\(\\mathbb{N}\_0\\). Usually we take \\(F = \[\\!\[0, T \]\\!\] :=\\{0, 1, \\cdots, T\\}\\). We wish to count the number of upcrossings of the path \\(t \\mapsto X\_t(\\omega)\\) on the set \\(F\\). We proceed as follows by defining the stopping times

\\\[ \\begin{equation\*} \\tau\_0=0 \\end{equation\*} \\\]

and recursively

\\\[ \\begin{align\*} \\tau\_1 &amp; = \\inf\\left\\{t \\in F: t\\geq \\tau\_0 \\text{ and } X\_t \\leq x\\right\\}\\\\ \\tau\_2 &amp; = \\inf\\left\\{t \\in F: t\\geq \\tau\_1 \\text{ and } X\_t \\geq y\\right\\}\\\\ &amp; \\vdots\\\\ \\tau\_{2k-1} &amp; = \\inf\\left\\{t \\in F: t\\geq \\tau\_{2k-2}, X\_t \\leq x\\right\\}\\\\ \\tau\_{2k} &amp; = \\inf\\left\\{t \\in F: t\\geq \\tau\_{2k-1}, X\_t \\geq y\\right\\} \\end{align\*} \\\]

with the convention that the infimum over the empty set is infinite.

![Upcrossings](<https://www.samuel-drapeau.info/SP_Lecture/images/upcrossing_dark.svg#only-dark>) ![Upcrossings](<https://www.samuel-drapeau.info/SP_Lecture/images/upcrossing_white.svg#only-light>)

We define the random quantity

\\\[ \\begin{equation\*} U\_F\\left( x,y,X(\\omega) \\right)=\\sup\\left\\{k:\\tau\_{2k}(\\omega)\<\\infty\\right\\}. \\end{equation\*} \\\]

This corresponds to the strict positive number of up-crossing of \\(\[x,y\]\\) by \\(t\\mapsto X\_t(\\omega)\\) on \\(F\\).

Finally, we adopt the notation \\(\[\\!\[s, t \]\\!\]:=\\{s,s+1,\\ldots,t\\}\\) for every integers \\(s\\leq t\\).

> [!NOTE]
>
> **Doob's Upcrossing Lemma**
>
> Let \\(X\\) be a sub-martingale. Then for every two reals \\(x\<y\\), the number \\(U\_{\[\\!\[0, T \]\\!\]}(x,y,X)\\) of up-crossing of \\(\[x,y\]\\) by \\(t\\mapsto X\_t\\) up to time \\(T\\), is a positive random variable and it holds
>
> \\\[ \\begin{equation} (y-x)E\\left\[ U\_{\[\\!\[0, T \]\\!\] }\\left( x,y,X \\right) \\right\]\\leq E\\left\[ \\left(X\_T-x\\right)^+ \\right\]-E\\left\[ \\left( X\_0-x \\right)^+ \\right\]. \\end{equation} \\\]

> [!NOTE]
>
> **Proof**
>
> First of all, the random times \\(\\tau\_k\\), \\(k=0,1,\\ldots\\) defining the up-crossing function are all stopping times. Since \\(\[\\!\[0, T \]\\!\]\\) is a discrete interval here, it follows that \\(U:=U\_{\[\\!\[0, T \]\\!\]}(x,y,X)\\) is a positive random variable. Define now the predictable gamble strategy, that is, the predictable process
>
> \\\[ \\begin{equation\*} H\_t=\\sum\_{k\\geq 1} 1\_{\]\\tau\_{2k-1},\\tau\_{2k}\]}(t) = \\begin{cases} 1 &amp; \\text{if } \\tau\_{2k-1}\< t\\leq \\tau\_{2k} \\text{ for some }k\\\\ 0 &amp; \\text{otherwize} \\end{cases} \\end{equation\*} \\\]
>
> for which holds \\(H\_0=0\\). It is predictable since it takes only values \\(0\\) and \\(1\\) and it holds
>
> \\\[ \\begin{equation\*} \\{H\_t=1\\}=\\cup \\left\\{ \\tau\_{2k-1}\<t \\right\\}\\cap\\left\\{ \\tau\_{2k}\<t \\right\\}^c \\in \\mathcal{F}\_{t-1} \\end{equation\*} \\\]
>
> This gamble strategy \\(H\\) is a bet on upcrossings. Note that by the definition of \\(\\tau\_{2k}\\) it follows that for every \\(\\omega \\in \\Omega\\), either \\(\\tau\_{2k}(\\omega)\\leq t\\) or \\(\\tau\_{2k}(\\omega)=\\infty\\). Further, by the definition of \\(U\\) it holds that \\(U(\\omega)\\leq t\\), and therefore \\(\\tau\_{2U(\\omega)}\\leq t\\) as well as \\(\\tau\_{2U(\\omega)+2}=\\infty\\) for every \\(\\omega\\). Finally, since \\(U\\) is a random variable, it follows that \\(\\tau\_{2U}\\) is a random time.
>
> We translate our problem at \\(0\\) by defining the process \\(Y=(X-x)^+\\). Since \\(\\varphi(z)= (z-x)^+\\) is increasing and convex function, it follows that \\(Y\\) is a sub-martingale too. It clearly holds that \\(U\\) also counts the number of up-crossings of \\(\[0,y-x\]\\) up to time \\(T\\) by \\(t\\mapsto Y\_t\\) and therefore since \\(\\tau\_{2U}\\leq T\\) and \\(\\tau\_{2U+2} = \\infty\\), it holds
>
> \\\[ \\begin{align\*} H\\bullet Y\_T &amp;=\\sum\_{t=1}^T H\_t\\left( Y\_{t}-Y\_{t-1} \\right)\\\\ &amp;=\\sum\_{t=1}^T\\sum\_{k\\geq 1} 1\_{\]\\tau\_{2k-1},\\tau\_{2k}\]}(t)\\left( Y\_{t}-Y\_{t-1} \\right)\\\\ &amp;=\\sum\_{k\\geq 1}\\sum\_{t=(\\tau\_{2k-1}+1)\\wedge T}^{\\tau\_{2k}\\wedge T}\\left( Y\_t-Y\_{t-1} \\right)\\\\ &amp; = \\sum\_{k=1}^{U}\\left( Y\_{\\tau\_2k} - Y\_{\\tau\_{2k-1}}\\right) + (Y\_T - Y\_{\\tau\_{2U+1}\\wedge T})\\\\ &amp; = \\sum\_{k=1}^{U}\\left( Y\_{\\tau\_2k} - Y\_{\\tau\_{2k-1}}\\right) + (Y\_T - Y\_{\\tau\_{2U+1}})1\_{\\{\\tau\_{2U+1}\<T\\}}\\\\ \\end{align\*} \\\]
>
> On the one hand, we know that if \\(k\\leq U\\), then \\(Y\_{\\tau\_{2k}}-Y\_{\\tau\_{2k-1}}\\geq y-x\\). On the other hand, since \\(Y\_{\\tau\_{2U+1}}\\) is equal to \\(0\\) on \\(\\{\\tau\_{2U+1}\<T\\}\\), it follows that \\((Y\_T - Y\_{\\tau\_{2U+1}})1\_{\\{\\tau\_{2U+1}\<T\\}}\\geq 0\\). Hence it holds
>
> \\\[ \\begin{align\*} E\[H\\bullet Y\_T\] &amp; =E\\left\[\\sum\_{k=1}^U (Y\_{\\tau\_{2k}}-Y\_{\\tau\_{2k-1}})\\right\]+E\\left\[(Y\_{T}-Y\_{\\tau\_{2U+1}})1\_{\\{T\> \\tau\_{2U+1}\\}}\\right\]\\\\ &amp; \\geq E\\left\[\\sum\_{k=1}^U (y-x)\\right\]=(y-x)E\[U\] \\end{align\*} \\\]
>
> Defining \\(K\_t=1-H\_t\\) for every \\(t\\geq 1\\) and \\(K\_0=0\\) which is a positive predictable process, hence by means of Doob's optional sampling theorem, it follows that \\(K\\bullet Y\\) is a sub-martingale and therefore \\(E\[K\\bullet Y\_T\]\\geq E\[K\\bullet Y\_0\]= 0\\). Since \\(K+H=1\_{\\{1\\leq \\cdot\\} }\\), it follows that
>
> \\\[ \\begin{align\*} (y-x)E\\left\[ U \\right\] &amp; \\leq E\\left\[ H\\bullet Y\_T \\right\]\\\\ &amp; \\leq E\\left\[ H\\bullet Y\_T \\right\]+E\[K\\bullet Y\_T\] \\\\ &amp; = E\\left\[ \\sum\_{t=1}^T Y\_{t}-Y\_{t-1} \\right\]\\\\ &amp; = E\\left\[ Y\_T-Y\_0 \\right\]\\\\ &amp; =E\\left\[ \\left( X\_T-x \\right)^+ \\right\]-E\\left\[ \\left( X\_0-x \\right)^+ \\right\] \\end{align\*} \\\]
>
> which ends the proof.

> [!NOTE]
>
> **Theorem: Martingale Convergence \\(P\\)-Almost Sure**
>
> Let \\(X\\) be a sub-martingale such that \\(\\sup E\[X\_t^+\]\<\\infty\\). Then \\(X\_t \\to X\_\\infty\\) almost surely for some integrable random variable \\(X\_\\infty\\).

> [!NOTE]
>
> **Proof**
>
> Note that if \\(X\\) is a sub-martingale, then \\(\\sup E\[\\left\\vert X\\right\\vert\_t\]\<\\infty\\) is equivalent to \\(\\sup E\[X^+\_t\]\<\\infty\\). Indeed, it follows from \\(\\left\\vert X\\right\\vert\_t= 2X\_t^+-X\_t\\) and the sub-martingale property, that \\(E\[X\_t\]\\geq E\[X\_0\]\>-\\infty\\).
>
> Let
>
> - \\(A\\) be the event of those states \\(\\omega\\) such that \\(t\\mapsto X\_t(\\omega)\\) is oscillatory discontinuous. In other terms, the path will cross infinitely many times some interval \\(\[q, r\]\\) for \\(q\<r\\) rationals. According to the definition in Doob's Upcrossing lemma, it follows that \\(U\_{\\mathbb{N}\_0}(q, r, X)(\\omega) = \\lim\_{T\\to \\infty} U\_{\[\\!\[0, T \]\\!\]} (q, r, X)(\\omega) = \\infty\\). Hence we can write
>
>   \\\[ \\begin{equation\*} A= \\bigcup\_{q\<r \\text{ and }q,r \\in \\mathbb{Q}}\\left\\{ U\_{\\mathbb{N}\_0}\\left( q,r,X\\right)=\\infty\\right\\}=\\bigcup\_{q\<r\\text{ and } q,r \\in \\mathbb{Q}}\\left\\{ \\sup\_{T \\in \\mathbb{N}\_0}U\_{\[\\!\[0, T \]\\!\]}(q,r,X)=\\infty\\right\\} \\end{equation\*} \\\]
> - \\(B\\) be the event of those states \\(\\omega\\) such that \\(t \\mapsto X\_t(\\omega)\\) has a real valued limit, that is
>
>   \\\[ \\begin{equation\*} B=\\left\\{ \\infty \<\\liminf X\_t=\\limsup X\_t \<\\infty \\right\\} \\end{equation\*} \\\]
> - \\(C\\) be the event of those states \\(\\omega\\) such that \\(t \\mapsto X\_t(\\omega)\\) diverges to either \\(\\infty\\) or \\(-\\infty\\), that is
>
>   \\\[ C = \\left\\{ \\limsup X\_t = -\\infty \\text{ or }\\liminf X\_t = \\infty \\right\\} \\\]
>
> In other terms \\(t\\mapsto X\_t\\) converges to some extended random variable \\(X\_\\infty\\) on \\(B\\cup C\\). As for \\(A\\), it is a measurable set as a countable union of measurable sets. Furthermore, by means of Doob's up-crossing's Lemma, as well as monotone convergence, the assumptions of the theorem yield
>
> \\\[ \\begin{equation\*} E\\left\[ \\sup\_{t \\in \\mathbb{N}\_0}U\_{\[\\!\[0, T \]\\!\]}(q,r,X) \\right\]=\\sup\_{t \\in \\mathbb{N}\_0}E\\left\[ U\_{\[\\!\[0, T \]\\!\] }(q,r,X) \\right\]\\leq \\frac{1}{q-r}\\sup\_{t}\\left\\{ E\\left\[ \\left( X\_t-q \\right)^+ \\right\] -E\\left\[ \\left( X\_0-q \\right)^+ \\right\]\\right\\}\<\\infty \\end{equation\*} \\\]
>
> It follows that \\(P\[\\sup\_{t \\in \\mathbb{N}\_0}U\_{\[\\!\[0, T \]\\!\] }(q,r,X)=\\infty\]=0\\) from which follows
>
> \\\[ \\begin{equation\*} P\[A\]\\leq \\sum\_{q\<r\\text{ and }q,r \\in \\mathbb{Q}}P\\left\[ \\sup\_{t \\in \\mathbb{N}\_0}U\_{\[\\!\[0, T \]\\!\]}(q,r,X)=\\infty \\right\]=0. \\end{equation\*} \\\]
>
> Hence, \\(P\[B\\cup C\]=1\\), showing that \\(t\\mapsto X\_t\\) converges almost surely to the extended real valued random variable \\(X\_\\infty\\). Finally, by Fatou's Lemma,
>
> \\\[ \\begin{equation\*} E\[|X\_\\infty|\]\\leq \\liminf E\[|X\_t|\]\\leq \\sup E\[|X|\_t\]\<\\infty \\end{equation\*} \\\]
>
> showing integrability of \\(X\_\\infty\\) and also that \\(P\[X\_\\infty=\\infty\\text{ or }X\_\\infty=-\\infty\]=P\[C\]=0\\).

> [!NOTE]
>
> **Corollary**
>
> Let \\(X\\) be a super-martingale such that \\(\\sup\_t E\[X\_t^-\]\<\\infty\\). Then \\(X\_t\\to X\_\\infty\\) almost surely for some integrable random variable \\(X\_\\infty\\).

## Applications of \\(P\\)-almost Sure Convergence

This almost sure convergence results has numerous applications. We present in the following several of them that as a consequence recovers the Borel-Cantelli lemma.

> [!NOTE]
>
> **Theorem**
>
> Let \\(X\\) be a martingale with \\(X\_0=0\\). Suppose that \\(|X\_{t+1}-X\_t|\\leq c\\) for every \\(t\\) and some constant \\(c\>0\\). Then it holds
>
> \\\[ \\begin{equation\*} P\\left\[ B\\cup D \\right\]=1, \\end{equation\*} \\\]
>
> where
>
> \\\[ \\begin{equation\*} B =\\left\\{ -\\infty\<\\liminf X\_t=\\limsup X\_t\<\\infty\\right\\} \\text{ and } D =\\left\\{ \\liminf X\_t=-\\infty \\text{ and } \\limsup X\_t=\\infty \\right\\}. \\end{equation\*} \\\]

This theorem states that martingales with uniformly bounded increments either converge to a real value or oscilate infinitely between \\(-\\infty\\) and \\(\\infty\\).

> [!NOTE]
>
> **Proof**
>
> Define the stopping time \\(\\tau\_k=\\inf\\{t\\colon X\_t \> k\\}\\). According to Doob's sampling theorem, it follows that \\(X^{\\tau\_k}\\) is a martingale such that \\(\\sup\_tE\[(X^{\\tau\_k}\_t)^+\]\\leq k+c\<\\infty\\). Indeed, on \\(\\{t \< \\tau\_k\\}\\), it holds \\(X\_t^{\\tau\_k}\\leq k\\) and on \\(\\{\\tau\_k\\leq t\\}\\), it holds \\(X\_t^{\\tau\_{k}}=X\_{\\tau\_k}\\leq X\_{\\tau\_k-1}+(X\_{\\tau\_k}-X\_{\\tau\_k-1})\\leq k+c\\). By the martingale convergence theorem, \\(\\lim\_{t\\to \\infty} X\_t^{\\tau\_k}\\) exists almost surely. On \\(\\{\\tau\_k=\\infty\\}\\) the processes \\(X\\) and \\(X^{\\tau\_k}\\) coincide, so that \\(\\lim X\_t\\) exists almost surely on \\(\\{\\tau\_k=\\infty\\}\\). In particular \\(\\lim X\_t\\) exists almost surely on
>
> \\\[ \\begin{equation\*} \\bigcup\\{\\tau\_k=\\infty\\}=\\left\\{\\limsup X\_t\<\\infty\\right\\}. \\end{equation\*} \\\]
>
> A similar argumentation for \\(-X\\) shows that \\(\\lim X\_t\\) exists almost surely on \\(\\{\\liminf X\_t\>-\\infty\\}\\). That is \\(\\lim X\_t\\) exists almost surely on \\(\\{\\liminf X\_t\>-\\infty \\}\\cup\\{\\limsup X\_t\<\\infty\\}=D^c\\). It means that \\(P\[D^c\\setminus B\]=P\[D^c\\cap B^c\]=0\\). Hence, taking complementation, it follows that \\(P\[B\\cup D\]=P\[(D^c\\cap B^c)\]=1\\) which ends the proof.

> [!NOTE]
>
> **Corollary: Pre Borel-Cantelli**
>
> We suppose that \\(\\mathcal{F}\_0=\\{\\emptyset,\\Omega\\}\\). Let \\((A\_t)\\) be a sequence of events in \\(\\mathcal{F}\\) such that \\(A\_t\\) is in \\(\\mathcal{F}\_t\\) for every \\(t\\). Then
>
> \\\[ \\begin{align\*} \\limsup A\_t&amp;=\\bigcap\_{t}\\bigcup\_{s\\geq t}A\_s=\\left\\{\\omega:\\omega\\in A\_t\\text{ for infinitely many }t\\right\\}=\\left\\{\\sum P(A\_t|\\mathcal{F}\_{t-1}) =\\infty\\right\\} \\end{align\*} \\\]
>
> holds almost surely, whereby \\(P\[A\_t|\\mathcal{F}\_{t-1}\]=E\[1\_{A\_t}|\\mathcal{F}\_{t-1}\]\\).

> [!NOTE]
>
> **Proof**
>
> We define the process \\(X\\) as follows
>
> \\\[ \\begin{equation\*} X\_0=0\\quad \\text{ and }\\quad X\_t=\\sum\_{s=1}^t1\_{A\_s}-P\\left\[ A\_s|\\mathcal{F}\_{s-1} \\right\], \\quad \\text{ for }t\\geq 1 \\end{equation\*} \\\]
>
> Since \\(\\mathcal{F}\_0=\\{\\emptyset,\\Omega\\}\\), it follows that \\(X\\) is a martingale. Indeed, \\(X\\) is clearly adapted by definition, and \\(|X\_t|\\leq 2t\\) so that \\(X\\) is integrable. Furthermore, \\(E\[X\_1-X\_{0}|\\mathcal{F}\_{0}\]=E\[X\_1-X\_0\]=P\[A\_1\]-P\[A\_1\]=0\\) and
>
> \\\[ \\begin{equation\*} E\[X\_t-X\_{t-1}|\\mathcal{F}\_{t-1}\]=E\[1\_{A\_t}-E\[1\_{A\_t}|\\mathcal{F}\_{t-1}\]|\\mathcal{F}\_{t-1}\]=E\[E\[1\_{A\_t}-1\_{A\_t}|\\mathcal{F}\_{t-1}|\\mathcal{F}\_{t-1}\]=0 \\end{equation\*} \\\]
>
> for every \\(t\\geq 2\\). Since \\(|X\_{t+1}-X\_t|\\leq 2\\) holds for every \\(t\\), we may apply the previous theorem of convergence for martingales with bounded bounded increments. On \\(B=\\{\\liminf X\_t=\\limsup X\_t \\in\\mathbb{R}\\}\\), it holds
>
> \\\[ \\begin{equation\*} \\sum 1\_{A\_t}=\\infty\\quad \\text{if, and only if,}\\quad\\sum P\\left\[A\_n | \\mathcal{F}\_{t-1}\\right\]=\\infty. \\end{equation\*} \\\]
>
> On \\(D=\\{\\liminf X\_t=-\\infty\\text{ and }\\limsup X\_t=\\infty\\}\\) it holds
>
> \\\[ \\begin{equation\*} \\sum 1\_{A\_t}=\\infty\\quad \\text{and}\\quad \\sum P\\left\[A\_t| \\mathcal{F}\_{t-1}\\right\]=\\infty. \\end{equation\*} \\\]
>
> Since \\(P\[B\\cup D\]=1\\) we deduce
>
> \\\[ \\begin{equation\*} \\sum 1\_{A\_t}=\\infty\\quad \\text{if, and only if,}\\quad \\sum P\[A\_t|\\mathcal{F}\_{t-1}\]=\\infty \\end{equation\*} \\\]
>
> almost surely. Moreover, \\(\\limsup A\_t=\\{\\sum 1\_{A\_t}=\\infty\\}\\), hence the claim follows.

We close these application with Borel-Cantelli's lemma.

> [!NOTE]
>
> **Borel-Cantelli's Lemma**
>
> - If \\((A\_t)\\) is a sequence of events in \\(\\mathcal{F}\\) and \\(\\sum P\[A\_t\]\<\\infty\\), then it holds \\(P\[\\limsup A\_t\]=0\\).
> - If \\((A\_t)\\) is an independent sequence of events in \\(\\mathcal{F}\\) and \\(\\sum P(A\_t)=\\infty\\), then it holds \\(P\[\\limsup A\_t\]=1\\).

> [!NOTE]
>
> **Proof**
>
> We consider the filtration \\(\\mathbb{F}=(\\mathcal{F}\_t)\_{t \\in \\mathbb{N}\_0}\\) given by \\(\\mathcal{F}\_0=\\{\\emptyset, \\Omega\\}\\) and \\(\\mathcal{F}\_t:=\\sigma(A\_s\\colon s\\leq t)\\) for \\(t\\geq 1\\). Define \\(\\xi:=\\sum P\[A\_t|\\mathcal{F}\_{t-1}\]\\). The monotone convergence theorem as well as the tower property shows that
>
> \\\[ \\begin{equation\*} E\[\\xi\]=E\\left\[\\sum E\[1\_{A\_t}|\\mathcal{F}\_{t-1}\]\\right\]=\\sum E\[E\[1\_{A\_t}|\\mathcal{F}\_{t-1}\]\]=\\sum P\[A\_t\]. \\end{equation\*} \\\]
>
> 1. If \\(\\sum P\[A\_t\]\<\\infty\\), then it holds \\(P\[\\xi=\\infty\]=0\\). The previous corollary yields \\(P\[\\limsup A\_t\]=0\\).
> 2. Suppose that \\((A\_t)\\) is an independent sequence of events, therefore \\(A\_t\\) is independent of \\(\\mathcal{F}\_{t-1}\\) which implies \\(P\[A\_t| \\mathcal{F}\_{t-1}\]=P\[A\_t\]\\) for all \\(t\\). Hence \\(\\sum P\[A\_t|\\mathcal{F}\_{t-1}\]=\\sum P\[A\_t\]=\\infty\\) almost surely and by the previous corollary it follows that \\(P\[\\limsup A\_t\]=1\\).
