# Markov Chains

In this subsection we treat discrete time Markov processes chains with a finite or eventually countable state space \\(S\\), also called **Markov Chains**. Recall that we only consider time homogenous Markov processes. Defining

\\\[ \\begin{align\*} \\mu\_x:=P\[X\_0=x\] \\quad p\_{xy}:=P\\left\[X\_{t+1}=y|X\_t=x\\right\]=P\[X\_1=y|X\_0=x\] \\end{align\*} \\\]

it follows that \\(0\\leq \\mu\_x, p\_{xy}\\leq 1\\) and \\(\\sum \\mu\_x=1\\), as well as \\(\\sum\_y p\_{xy}=1\\) for every \\(x\\). In other terms, the initial distribution \\(\\mu:=(\\mu\_x)\\) is a random vector and the one step transition probability can be represented by the stochastic matrix \\(P=(p\_{xy})\\). For \\(B\\subseteq S\\), it holds

\\\[ \\begin{equation\*} P\_1(x,B)=\\sum\_{y \\in B}p\_{xy} \\end{equation\*} \\\]

By Chapman Kolmogorov relation, we have \\(P\_t=P\_{t-1}P\_1\\), hence, defining recursively

\\\[ \\begin{equation} p^t\_{xy}=\\sum\_{z}p^{t-1}\_{xz}p\_{zy} \\end{equation} \\\]

we have

\\\[ \\begin{equation\*} P\_t(x,B)=\\sum\_{y \\in B}p^t(x,y) \\end{equation\*} \\\]

In the discrete case the following strong Markov property holds.

> [!NOTE]
>
> **Strong Markov Property**
>
> Let \\(Z\\) be a bounded random variable and \\(\\tau\\) a stopping time. Then it holds
>
> \\\[ \\begin{equation\*} 1\_{\\{\\tau\<\\infty\\}}E^{\\mu}\\left\[ Z\\circ\\theta\_{\\tau}|\\mathcal{F}\_\\tau \\right\]=1\_{\\{\\tau\<\\infty\\}} E^{X\_{\\tau}}\\left\[ Z \\right\]. \\end{equation\*} \\\]

> [!NOTE]
>
> **Proof**
>
> For every \\(A \\in \\mathcal{F}\_\\tau\\) we get by Theorem \\ref{thm:markov property} and the fact that \\(A\\cap \\{\\tau=t\\}\\in \\mathcal{F}\_t\\) for every \\(t\\),
>
> \\\[ \\begin{align\*} E^{\\mu}\\left\[1\_A1\_{\\{\\tau\<\\infty\\}} Z\\circ\\theta\_\\tau\\right\] &amp;=\\sum\_{t} E^\\mu \\left\[1\_A1\_{\\{\\tau=t\\}} Z\\circ\\theta\_t\\right\]\\\\ &amp;= \\sum\_{t} E^{\\mu}\\left\[1\_A1\_{\\{\\tau=t\\}} E^{X\_t}\\left\[Z\\right\]\\right\]\\\\ &amp;=E^\\mu\\left\[1\_A1\_{\\{\\tau\<\\infty\\}} E^{X\_\\tau}\\left\[Z\\right\]\\right\], \\end{align\*} \\\]
>
> from which the claim follows.

Markov chains are defined locally: The next step is entirely defined by the place where you are now and the transition probability. The natural question therefore is whether you will come back or not. Given a state \\(y\\) in \\(S\\), define recursively

\\\[ \\begin{align\*} \\tau^0\_y &amp; :=0\\\\ \\tau^1\_y &amp; := \\inf\\left\\{ t\> \\tau^0\_y\\colon X\_t=y \\right\\}\\\\ \\vdots\\\\ \\tau^k\_y &amp; := \\inf\\left\\{ t\>\\tau^{k-1}\_y\\colon X\_t=y \\right\\}\\\\ \\vdots \\end{align\*} \\\]

Here \\(\\tau^k\_y\\) denotes the \\(k\\)-th return time to the state \\(y\\). Let further

\\\[ \\begin{equation\*} \\rho\_{xy}:=P^{x}\\left\[ \\tau\_y\<\\infty \\right\] \\end{equation\*} \\\]

be the probability that starting from \\(x\\), the Markov chain visits the state \\(y\\) at least once, where we denote the first return time as \\(\\tau\_y = \\tau^1\_y\\).

> [!NOTE]
>
> **Definition**
>
> We say that a time homogeneous Markov chain is
>
> - **recurrent**: if \\(\\rho\_{xx}=1\\);
> - **transient**: if \\(\\rho\_{xx}\<1\\).

> [!NOTE]
>
> **Theorem**
>
> For any two states \\(x\\) and \\(y\\) in \\(S\\), it holds
>
> \\\[ \\begin{equation\*} P^x\[\\tau\_y^k \< \\infty\] = \\rho\_{xy}\\rho\_{yy}^{k-1}. \\end{equation\*} \\\]

> [!NOTE]
>
> **Proof**
>
> We show it per induction. Per definition, it holds \\(P^x\[\\tau\_y^1 \< \\infty\]= \\rho\_{xy}\\). Suppose therefore that the claim holds for every \\(l=1,\\ldots,k-1\\) and we show it for \\(k\\).
>
> Define \\(\\tau=\\tau\_y^{k-1}\\) and \\(Z:=1\_{\\{\\tau\_y \< \\infty \\}}\\). It follows that \\(\\{ \\tau\_y^k \< \\infty \\} = \\{ \\tau\_y \\circ \\theta\_\\tau \< \\infty \\}\\). Furthermore, from \\(1\_{\\{\\tau\<\\infty\\}}\\) bounded and \\(\\mathcal{F}\_{\\tau}\\)-measurable and \\(X\_{\\tau}=y\\) on \\(\\{\\tau\<\\infty\\}\\), using the strong Markov property it follows that
>
> \\\[ \\begin{align\*} P^{x}\[\\tau\_y^k \< \\infty \] &amp;= P^{x}\[\\tau\_y \\circ \\theta\_\\tau \< \\infty \]\\\\ &amp;= E^x\\left\[1\_{\\{\\tau \< \\infty\\}} (Z \\circ \\theta\_\\tau) \\right\]\\\\ &amp;= E^x\\left\[1\_{\\{\\tau \< \\infty\\}} E^x\\left\[Z \\circ \\theta\_\\tau| \\mathcal{F}\_\\tau\\right\]\\right\]\\\\ &amp;= E^x\\left\[1\_{\\{\\tau \< \\infty\\}} E^{X\_\\tau}\\left\[Z\\right\] \\right\]\\\\ &amp;= E^x\\left\[1\_{\\{\\tau \< \\infty\\}} P^y\[\\tau\_y\<\\infty\]\\right\]\\\\ &amp;= \\rho\_{yy} P^x\[\\tau\_y^{k-1} \< \\infty\]\\\\ &amp;= \\rho\_{yy} \\rho\_{xy} \\rho\_{yy}^{k-2}\\\\ &amp;= \\rho\_{xy} \\rho\_{yy}^{k-1}. \\end{align\*} \\\]

> [!NOTE]
>
> **Theorem**
>
> Let \\(x\\) and \\(y\\) be two states in \\(S\\), where \\(x\\) is recurrent and \\(\\rho\_{xy}\>0\\). Then \\(y\\) is recurrent and \\(\\rho\_{yx}=1\\).

> [!NOTE]
>
> **Proof**
>
> Let us first show that \\(\\rho\_{yx}=1\\). Since \\(x\\) is recurrent, it follows that \\(\\tau\_x(\\omega)\<\\infty\\) for almost all \\(\\omega \\in \\Omega\\). Hence, for almost all \\(\\omega \\in \\Omega\\) such that \\(\\tau\_y(\\omega)\<\\infty\\) we get \\(\\tau\_x \\circ \\theta\_{\\tau\_y}(\\omega) \<\\infty\\).
>
> Thus with \\(H:=1\_{\\{\\tau\_x=\\infty\\}}\\), the strong markov property, and the fact that \\(X\_{\\tau\_y}=y\\), we get
>
> \\\[ \\begin{align\*} 0 &amp; =P^x\[\\tau\_y \< \\infty, \\tau\_x \\circ \\theta\_{\\tau\_y} = \\infty\]\\\\ &amp; =E^x\\left\[1\_{\\{\\tau\_y\<\\infty\\}} 1\_{\\{\\tau\_x \\circ \\theta\_{\\tau\_y} = \\infty\\}} \\right\]\\\\ &amp; =E^x\\left\[1\_{\\{\\tau\_y\<\\infty\\}} E^{X\_{\\tau\_y}}\\left\[H\\right\] \\right\]\\\\ &amp; =E^x\\left\[1\_{\\{\\tau\_y\<\\infty\\}} P^y\[\\tau\_x=\\infty\]\\right\] \\\\ &amp; =\\rho\_{xy}(1-\\rho\_{yx}). \\end{align\*} \\\]
>
> Since \\(\\rho\_{xy} \> 0\\), it must be that \\(\\rho\_{yx}=1\\).
>
> Let us finally show that \\(y\\) is recurrent. Let \\(i\\) and \\(j\\) be two states in \\(S\\) and \\(k\\) in\\(\\mathbb{N}\\). Then by Chapman-Kolmogorov relation and an induction we get \\(P\_i\[X\_k=j\]=p^k\_{ij}\\). Since \\(\\rho\_{xy}\>0\\) and \\(\\rho\_{yx}\>0\\), there exist \\(k\_1\\) and \\(k\_2\\) in \\(\\mathbb{N}\\) with \\(p\_{xy}^{k\_1}\>0\\) and \\(p\_{yx}^{k\_2}\>0\\). By the Chapman-Kolmogorov relation we get
>
> \\\[ p\_{yy}^{k\_1+t+k\_2} \\geq p\_{yx}^{k\_2} p\_{xx}^t p\_{xy}^{k\_1} \\\]
>
> so that
>
> \\\[ E^y\\left\[N\_y\\right\] =p\_{yx}^{k\_2} E^x\\left\[N\_x\\right\]p\_{xy}^{k\_1} =\\infty. \\\]
>
> Recurrence/Transience Theorem implies that \\(y\\) is recurrent.

> [!NOTE]
>
> **Definition**
>
> A set \\(C \\subseteq S\\) is called
>
> - **closed**, if for \\(x\\in C\\), \\(y\\in S\\) and \\(\\rho\_{xy}\>0\\) it holds \\(y \\in C\\),
> - **irreducible**, if \\(\\rho\_{xy}\>0\\) for all \\(x,y\\in C\\).

> [!NOTE]
>
> **Theorem**
>
> Suppose \\(C \\subset S\\) is finite and closed.
>
> - There exists \\(x\\in C\\) such that \\(x\\) is recurrent.
> - If \\(C\\) is irreducible, then all its states are recurrent.

> [!NOTE]
>
> **Proof**
>
> - By contradiction, assume that all states are transient, that is \\(E^x\[N\_y\] \< \\infty\\) for all \\(x\\) and \\(y\\) in \\(C\\) by the recurrent/transient Theorem. But then, since \\(C\\) is finite we get with Tonelli's theorem
>
>   \\\[ \\sum\_{y\\in C} E^x\[N\_y\] =\\sum\_{y\\in C} \\sum\_{t} P^x \[X\_t=y\] =\\sum\_{t}\\sum\_{y\\in C} P^x\[X\_t=y\] =\\sum\_{t} P^x \[ X\_t\\in C\] =\\sum\_{t} 1=\\infty. \\\]
>
>   Indeed, if \\(P^x \[X\_t\\in C\] \< 1\\), then there is \\(y\\) in \\(C^c\\) with \\(P^x\[X\_t=y\] \>0\\), that is \\(\\rho\_{xy} \>0\\). Since \\(C\\) is closed, it follows \\(y \\in C\\), a contradiction.
> - If \\(x \\in C\\) is recurrent and \\(\\rho\_{xy}\>0\\), then \\(y\\) is recurrent by Theorem the previous theorem.

> [!NOTE]
>
> **Theorem**
>
> Let \\(R:=\\{ x \\in S \\colon \\rho\_{xx} =1 \\}\\) be the set of recurrent states. Then \\(R\\) is a disjoint union of closed and irreducible sets.

> [!NOTE]
>
> **Proof**
>
> Fix \\(x\\) in$ R$ and let $C\_x :={ y\\in R \\colon \\rho\_{xy} \>0 } $.
>
> - For \\(x\\), \\(y\\) and \\(z\\) in \\(R\\) it holds \\(\\rho\_{xy} \\geq \\rho\_{xz} \\rho\_{zy}\\). Indeed, with \\(H:=1\_{\\{\\tau\_y \< \\infty\\}}\\) and the strong Markov property using the same argument as in recurrence Theorem we obtain
>
>   \\\[ \\begin{align\*} \\rho\_{xy} &amp; =P^x\[\\tau\_y\<\\infty\]\\\\ &amp; \\geq P^x\[\\tau\_z\<\\infty, \\tau\_y \\circ \\theta\_{\\tau\_z} \< \\infty\]\\\\ &amp; =E^x\[1\_{\\{\\tau\_z \< \\infty\\}} E^x\[H \\circ \\theta\_{\\tau\_z} | \\mathcal{F}\_{\\tau\_z}\]\]\\\\ &amp; =E^x\[1\_{\\{\\tau\_z \< \\infty\\}}\] E^z\[1\_{\\{\\tau\_y \< \\infty\\}}\]\]\\\\ &amp; =\\rho\_{xz}\\rho\_{zy}. \\end{align\*} \\\]
> - \\(C\_x\\) is irreducible and closed. Indeed, for \\(y\\) in \\(C\_x\\) and \\(\\rho\_{yz} \>0\\), since \\(y\\) is in \\(C\_x\\) we have \\(\\rho\_{xy}\>0\\) and therefore by the previous step \\(\\rho\_{xz} \>0\\), that is \\(z\\) belongs to \\(C\_x\\). Furthermore, for \\(y\\) and \\(z\\) in \\(C\_x\\), it implies that \\(\\rho\_{xy} \>0\\), \\(\\rho\_{xz}\>0\\). Recurrence Theorem yields \\(\\rho\_{yx}\>0\\) and therefore \\(\\rho\_{yz}\>0\\).
> - We now show that \\(C\_x \\cap C\_y \\neq \\emptyset\\) implies \\(C\_x=C\_y\\). Let \\(z\\) be in \\(C\_x \\cap C\_y\\) and \\(y^\\prime\\) in \\(C\_y\\). Therefore \\(\\rho\_{xz}\>0\\), \\(\\rho\_{yz}\>0\\), \\(\\rho\_{yy^\\prime}\>0\\) and by recurrence Theorem \\(\\rho\_{zy}\>0\\). This means \\(\\rho\_{xy^\\prime} \>0\\) which yields \\(y^\\prime\\in C\_x\\), hence \\(C\_y \\subset C\_x\\). Analogously, \\(C\_x \\subset C\_y\\).

> [!NOTE]
>
> **Definition**
>
> A measure \\(\\mu\\) on is called **stationary**—or **invariant**—if
>
> - \\(\\mu(y)\< \\infty\\) for all \\(y \\in S\\),
> - \\(\\mu(y)=\\sum\_{x\\in S} \\mu(x)p\_{xy}\\).
>
> If \\(\\mu\\) is a probability measure, then \\(\\mu\\) is called a stationary distribution.

> [!NOTE]
>
> **Remark**
>
> Suppose that \\(\\mu\\) is a stationary distribution, and let \\(P^\\mu\\) the measure such that \\(X\\) is Markov with start distribution \\(\\mu\\). Then
>
> \\\[ \\begin{align\*} P^\\mu\[X\_1=y\] &amp; = \\sum\_{x\\in S}P^\\mu\[X\_1=y | X\_0=x\] P^\\mu\[X\_0=x\]\\\\ &amp; =\\sum\_{x\\in S} \\mu(x) p\_{xy}\\\\ &amp; =\\mu(y) \\end{align\*} \\\]
>
> By induction, we assume that \\(P^\\mu\[X\_t=y\]=\\mu(y)\\). Then
>
> \\\[ \\begin{align\*} P^\\mu\[X\_{t+1}=y\] &amp; =\\sum\_{z\\in S} P^\\mu\[X\_{t+1}=y|X\_t=z\]P^\\mu\[X\_t=z\]\\\\ &amp; =\\sum\_{z\\in S} \\mu(z) p\_{zy}\\\\ &amp; =\\mu(y) \\end{align\*} \\\]
>
> This shows \\(P^\\mu(X\_t=y) = \\mu(y)\\) for every \\(t\\).

> [!NOTE]
>
> **Example: Randomw Walk**
>
> Let \\(X\_t:=X\_0+\\sum\_{s=1}^{t} Y\_s\\) and \\(\\mathcal{F}\_t:=\\sigma(X\_0,\\dots,X\_t)\\). Then
>
> \\\[ \\begin{align\*} p\_{xy} &amp; = P\[X\_{t+1}=y | X\_t=x\]=P\[\\xi\_{t+1}=y-X\_t | X\_t=x\]\\\\ &amp; =P\[\\xi\_1=y-x\]\\\\ &amp; =f(y-x) \\end{align\*} \\\]
>
> where \\(f \\colon S \\to \[0,1\]\\) is such that \\(\\sum\_{y\\in S}f(y)=1\\), that is \\(f(y):=P\[\\xi\_1=y\]\\). In this case \\(\\mu \\equiv 1\\) is a stationary measure. Indeed,
>
> \\\[ \\begin{align\*} \\sum\_{x\\in S} \\mu(x)p\_{xy} &amp; = \\sum\_{x\\in S} p\_{xy}\\\\ &amp; = \\sum\_{x\\in S} f(y-x) \\\\ &amp; =\\sum\_{x^\\prime\\in S} f(x^\\prime) \\\\ &amp; =1\\\\ &amp; =\\mu(y) \\end{align\*} \\\]

> [!NOTE]
>
> **Remark**
>
> Let \\(x\\in S\\) be transient and \\(\\pi\\) a stationary distribution. Then \\(\\pi(x)=0\\).

> [!NOTE]
>
> **Proof**
>
> Exercise.

> [!NOTE]
>
> **Theorem**
>
> Suppose \\(x\\) is recurrent and \\(\\tau:=\\inf\\{ t\\colon X\_t = x \\}\\). Define
>
> \\\[ \\mu(y)=E^x\\left\[\\sum\_{t=0}^{\\tau-1}1\_{\\{X\_t=y\\}}\\right\]=\\sum\_{t} P^x\[X\_t=y, t\<\\tau\] \\\]
>
> for all \\(y\\in S\\). Then \\(\\mu\\) is a stationary measure.

> [!NOTE]
>
> **Proof**
>
> For \\(z\\) in \\(S\\) and \\(t\\) let \\(\\bar{p}\_t(x,z):=P^x\[X\_t=z,\\tau\>t\]\\). We claim that \\(\\sum\_{t} \\bar{p}\_t(x,\\cdot)\\) is a stationary measure.
>
> - For \\(z\\neq x\\) we have
>
>   \\\[ \\begin{align\*} \\sum\_{y\\in S} \\bar{p}\_t(x,y) p\_{yz} &amp; = \\sum\_{y\\in S} P^x\[X\_t=y, \\tau\>t\] p\_{yz} \\\\ &amp; = \\sum\_{y\\in S} P^x(X\_t=y,\\tau\>t,X\_{t+1}=z\]\\\\ &amp; = P^x\[\\tau\>t+1,X\_{t+1}=z\]\\\\ &amp; =\\bar{p}\_{t+1}(x,z) \\end{align\*} \\\]
>
>   Hence,
>
>   \\\[ \\begin{align\*} \\sum\_{y\\in S}\\sum\_{t} \\bar{p}\_t(x,y)p\_{yz} &amp; = \\sum\_{t}\\sum\_{y\\in S} \\bar{p}\_t(x,y)p\_{yz}\\\\ &amp; = \\sum\_{t} \\bar{p}\_{t+1}(x,z)\\\\ &amp; = \\mu(z) \\end{align\*} \\\]
>
>   since \\(\\bar{p}\_0(x,z)=0\\).
> - For \\(z=x\\) we have
>
>   \\\[ \\sum\_{y\\in S} \\bar{p}\_t(x,y) p\_{yx} = \\sum\_{y\\in S} P^x\[X\_t=y,\\tau\>t,X\_{t+1}=x\] = P^x\[\\tau=t+1\]. \\\]
>
>   Hence,
>
>   \\\[ \\sum\_{t}\\sum\_{y\\in S} \\bar{p}\_t(x,y)p\_{yz} = \\sum\_{t} P^x\[\\tau=t+1\] = 1 = \\mu(x). \\\]
> - Finally we show that \\(\\mu(y)\<\\infty\\) for any \\(y\\) in \\(S\\). We have \\(\\mu(x)=1\\), and \\(\\mu p^t=\\mu\\), showing that \\(\\mu(y)\<\\infty\\) if \\(p^t\_{xy}\>0\\) for some \\(t\\).
>
>   - If \\(P^x\[\\tau\_y\<\\infty\]=0\\), then \\(\\mu(y)=0\\).
>   - If \\(P^x\[\\tau\_y\<\\infty\]\>0\\), then by recurrence Theorem we have \\(P^y\[\\tau\_x\<\\infty\]\>0\\) so that \\(p\_{yx}^t\>0\\) for some \\(t\\), hence \\(\\mu(y)\<\\infty\\).
