# Expectation

# Integration, Lebesgue Convergence Theorem

> [!NOTE]
>
> **Definition: Simple Random Variables**
>
> A random variable \\(X\\) is said to be **simple** if there exists a finite family \\((A\_k)\_{1\\leq k\\leq n}\\) of pairwise disjoint events and real nonzero numbers \\((\\alpha\_k)\_{1\\leq k\\leq n}\\) such that:
>
> \\\[ X=\\sum\_{k=1}^n \\alpha\_k 1\_{A\_k} \\\]
>
> We denote by \\(\\mathcal{L}^{0,step}\\) the set of all simple random variables.

![Simple RV](<https://www.samuel-drapeau.info/SP_Lecture/images/simple_rv_dark.svg#only-dark>) ![Simple RV](<https://www.samuel-drapeau.info/SP_Lecture/images/simple_rv_white.svg#only-light>)

> [!WARNING]
>
> Clearly, \\(\\mathcal{L}^{0,step}\\) is a subset of \\(\\mathcal{L}^0\\). However, the decomposition of a simple random variable \\(X\\) into \\((A\_k)\_{1\\leq k\\leq n}\\) and \\((\\alpha\_k)\_{1\\leq k\\leq n}\\) is not unique. Indeed, let \\(A\\) and \\(B\\) be two elements of \\(\\mathcal{F}\\) such that \\(A\\subseteq B\\). It follows that \\(X=1\_B=1\_{B\\setminus A}+1\_A\\).

> [!NOTE]
>
> **Lemma**
>
> The spaces \\(\\mathcal{L}^0\\) as well as \\(\\mathcal{L}^{0,step}\\) are vector spaces.

> [!NOTE]
>
> **Proof**
>
> The proof is left as an exercise.

Let \\(X=\\sum\_{1\\leq k\\leq n}\\alpha\_k 1\_{A\_k}\\) and \\(Y=\\sum\_{1\\leq l\\leq m}\\beta\_l 1\_{B\_l}\\) be two simple random variables. It is possible to find a finite family \\((C\_r)\_{1\\leq j\\leq r}\\) of pairwise disjoint elements in \\(\\mathcal{F}\\) and two finite families \\((\\tilde{\\alpha\_j})\_{1\\leq j\\leq r}\\) and \\((\\tilde{\\beta}\_j)\_{1\\leq j\\leq r}\\) of nonzero numbers such that:

\\\[ \\begin{equation} X=\\sum\_{1\\leq j\\leq r} \\tilde{\\alpha}\_j 1\_{C\_j},\\quad Y=\\sum\_{1\\leq j\\leq r} \\tilde{\\beta}\_j 1\_{C\_j} \\end{equation} \\\]

Indeed, let \\(C\_{kl}=A\_k\\cap B\_l\\), which constitutes a finite family of pairwise disjoint elements in \\(\\mathcal{F}\\). It follows that:

\\\[ X=\\sum\_{1\\leq k\\leq n}\\sum\_{1\\leq l\\leq m} \\alpha\_k 1\_{C\_{kl}},\\quad Y=\\sum\_{1\\leq k\\leq n}\\sum\_{1\\leq l\\leq m} \\beta\_{l} 1\_{C\_{kl}} \\\]

In other words, any two simple random variables can be decomposed on the same common family of pairwise disjoint elements.

> [!NOTE]
>
> **Definition: Expectation 1.0**
>
> We define the **expectation** of a simple random variable \\(X=\\sum\_{1\\leq k\\leq n}\\alpha\_k 1\_{A\_k}\\) with respect to \\(P\\) as:
>
> \\\[ \\hat{E}\[X\]:=\\sum\_{k\\leq n} \\alpha\_k P\[A\_k\] \\\]

![Expectation Simple RV](<https://www.samuel-drapeau.info/SP_Lecture/images/expectation_dark.svg#only-dark>) ![Expecation Simple RV](<https://www.samuel-drapeau.info/SP_Lecture/images/expectation_white.svg#only-light>)

> [!NOTE]
>
> **Exercise**
>
> Show that the definition of expectation is a well-defined operator on \\(\\mathcal{L}^{0,step}\\). Indeed, the decomposition of \\(X\\) is not unique.

> [!NOTE]
>
> **Proposition**
>
> On \\(\\mathcal{L}^{0,step}\\), the following properties hold:
>
> - *Monotonicity:* \\(\\hat{E}\[X\]\\leq \\hat{E}\[Y\]\\) whenever \\(X\\leq Y\\).
> - *Linearity:* \\(\\hat{E}\\) is a linear operator on \\(\\mathcal{L}^{0,step}\\).

> [!NOTE]
>
> **Proof**
>
> Let \\(X\\) and \\(Y\\) be two simple random variables. Since those two simple random variables can be decomposed on a common set of events we can write:
>
> \\\[ X=\\sum\_{k\\leq n} \\alpha\_k 1\_{A\_k}, \\quad Y=\\sum\_{k\\leq m}\\beta\_k 1\_{A\_k} \\\]
>
> If \\(X\\leq Y\\), it follows that \\(\\alpha\_k=X(\\omega)\\leq Y(\\omega)=\\beta\_k\\) for every state \\(\\omega\\) in \\(A\_{k}\\). Hence:
>
> \\\[ \\hat{E}\[X\]=\\sum\_{k\\leq n}\\alpha\_k P\[A\_{k}\]\\leq \\sum\_{k\\leq n} \\beta\_k P\[A\_{k}\]=\\hat{E}\[Y\] \\\]
>
> For real numbers \\(a\\) and \\(b\\), it holds:
>
> \\\[ \\hat E\[a X+bY\]=\\sum\_{k\\leq n} (a\\alpha\_k+b\\beta\_k)P\[A\_k\]=a\\sum\_{k\\leq n} \\alpha\_k P\[A\_k\]+b\\sum\_{k\\leq n} \\beta\_k P\[A\_k\]=a\\hat E\[X\]+b\\hat E\[Y\] \\\]

This proposition is important in so far that ir shows that the expectation is a linear operator which is monotone. This monotonicity property allows to extends naturally from below the expectation to the class of positive random variables.

- **First Approximation**

  ---

  ![Expectation 1](<https://www.samuel-drapeau.info/SP_Lecture/images/expectation1_dark.svg#only-dark>) ![Expectation 1](<https://www.samuel-drapeau.info/SP_Lecture/images/expectation1_white.svg#only-light>)
- **Second Approximation**

  ---

  ![Expectation 2](<https://www.samuel-drapeau.info/SP_Lecture/images/expectation2_dark.svg#only-dark>) ![Expectation 2](<https://www.samuel-drapeau.info/SP_Lecture/images/expectation2_white.svg#only-light>)

> [!NOTE]
>
> **Definition: Expectation 2.0**
>
> For any positive extended random variable \\(X\\) in \\(\\bar{\\mathcal{L}}^0\_+\\), we define the **expectation** of which as
>
> \\\[ E\[X\]:=\\sup \\left\\{ \\hat E\[Y\]\\colon Y\\leq X,Y \\in \\mathcal{L}^{0,step}\_+ \\right\\} \\\]
>
> ---
>
> A random variable \\(X\\) is called **integrable** if \\(E\[X^+\]\<\\infty\\) and \\(E\[X^-\]\<\\infty\\). The set of integrable random variables is denoted by \\(\\mathcal{L}^1\\) and the expectation of which is defined as
>
> \\\[ E\[X\]:= E\[X^+\] - E\[X^-\] \\\]

> [!NOTE]
>
> **Remark**
>
> - Show as an exercise that for a positive extended random variable \\(X\\) where \\(P\[X=\\infty\]\>0\\), then it follows that \\(E\[X\]=\\infty\\);
> - Clearly \\(\\mathcal{L}^{0,step}\\subseteq \\mathcal{L}^1\\);
> - Also, by definition and monotonicity of \\(\\hat{E}\\), for every \\(X \\in \\mathcal{L}^{0,step}\\), it holds that \\(E\[X\]=\\hat{E}\[X\]\\). In other terms, \\(E\\) is an extension of \\(\\hat{E}\\) to the space \\(\\bar{\\mathcal{L}}^0\_+\\). We therefore remove the hat on the top of the expectation symbol everywhere.

> [!NOTE]
>
> **Lemma**
>
> For every \\(X\\) and \\(Y\\) in \\(\\bar{\\mathcal{L}}^0\_+\\) and \\(a,b\\) positive numbers, it holds:
>
> - \\(E\[X\]\\leq E\[Y\]\\) whenever \\(X\\leq Y\\).
> - \\(E\\left\[ aX+b Y \\right\]=a E\\left\[ X \\right\]+b E\\left\[ Y \\right\]\\).

> [!NOTE]
>
> **Proof**
>
> The proof is left as an exercise.

> [!NOTE]
>
> **Theorem: Lebegue's Monotone Convergence Theorem**
>
> Let \\((X\_n)\\) be an increasing sequence of positive random variables. Denote by \\(X = \\lim X\_n = \\sup X\_n\\) the resulting extended positive random variable limit of the sequence. Then it holds
>
> \\\[ E\[X\] = E\[\\lim X\_n\] = \\lim E\[X\_n\] \\\]

> [!NOTE]
>
> **Proof**
>
> By monotonicity, we clearly have \\(E\[X\_n\]\\leq E\[X\]\\) for every \\(n\\), therefore \\(\\sup E\[X\_n\]\\leq E\[X\]\\). Reciprocally, suppose that \\(E\[X\]\<\\infty\\) and pick \\(\\varepsilon\>0\\) and some simple positive random variable \\(Y\\) such that \\(Y\\leq X\\) and \\(E\[X\]-\\varepsilon\\leq E\[Y\]\\). For \\(0\<c\<1\\) define the sets \\(A\_n=\\{X\_n\\geq cY\\}\\). Since \\(X^n\\) is increasing to \\(X\\), it follows that \\(A\_n\\) is an increasing sequence of events. Furthermore, since \\(cY\\leq Y\\leq X\\) and \\(cY\<X\\) on \\(\\{X\>0\\}\\), it follows that \\(\\cup A\_n=\\Omega\\). By non-negativity of \\(X\_n\\) and monotonicity, it follows that
>
> \\\[ cE\[1\_{A\_n}Y\]\\leq E\[1\_{A\_n}X\_n\]\\leq E\[X\_n\] \\\]
>
> and so
>
> \\\[ c\\sup E\[1\_{A\_n}Y\]\\leq \\sup E\[X\_n\] \\\]
>
> Since \\(Y=\\sum\_{l\\leq k} \\alpha\_l 1\_{B\_l}\\) for \\(\\alpha\_1,\\ldots,\\alpha\_k \\in \\mathbb{R}\_+\\) and \\(B\_1,\\ldots, B\_k\\in \\mathcal{F}\\), it follows that
>
> \\\[ E\\left\[ 1\_{A\_n}Y \\right\]=\\sum\_{l\\leq k}\\alpha\_l P\[A\_n\\cap B\_l\]. \\\]
>
> However, since \\(P\\) is a probability measure, and \\(A\_n\\) is increasing to \\(\\Omega\\), it follows from the lower semi-continuity of probability measures that \\(P\[A\_n\\cap B\_l\]\\nearrow P\[\\Omega\\cap B\_l\]=P\[B\_l\]\\), and so
>
> \\\[ \\sup E\[1\_{A\_n}Y\]=\\sum\_{l\\leq k}\\alpha\_l \\sup P\[A\_n\\cap B\_l\]=\\sum \\alpha\_l P\[B\_l\]=E\[Y\]. \\\]
>
> Consequently
>
> \\\[ E\[X\]\\geq \\lim E\[X\_n\]=\\sup E\[X\_n\]\\geq cE\[Y\] \\geq cE\[X\]-c\\varepsilon \\\]
>
> which by letting \\(c\\) converging to \\(1\\) and \\(\\varepsilon\\) to \\(0\\) yields the result. The case where \\(E\[X\]=\\infty\\) is similar and left to the reader.

As the previous figure suggests, it is actually possible to construct by hand a sequential approximation of positive random variables by simple ones.

> [!NOTE]
>
> **Proposition: Approximation by Simple Random Variables**
>
> For any positive random variabel \\(X\\), there exists an increasing sequence of simple positive random variables \\((X\_n)\\) such that \\(X\_n(\\omega)\\nearrow X(\\omega)\\) and uniformly on each set \\(\\{X\\leq M\\}\\) where \\(M\\in \\mathbb{R}\\).

> [!NOTE]
>
> **Proof**
>
> Let \\(A\_k^n=\\{(k-1)/2^n\\leq X\<k/2^n\\}\\) for \\(k=1,\\ldots, n2^n\\) and define
>
> \\\[ X\_n:=\\sum\_{k=1}^{n2^n} \\frac{k-1}{2^n}1\_{A\_k^n}+n1\_{\\{X\>n\\}} \\\]
>
> From the definition, it follows that \\(X\_n\\leq X\\) for every \\(n\\) and \\(X(\\omega)-2^{-n}\\leq X\_n(\\omega)\\) for every \\(\\omega \\in \\{X\\leq n\\}\\). This, along with the monotonicity, concludes the proof.

> [!NOTE]
>
> **Proposition**
>
> For \\(X\\) and \\(Y\\) in \\(\\mathcal{L}^1\\), a real number \\(a\\) and two disjoint events \\(A,B\\) in \\(\\mathcal{F}\\). The following assertions hold:
>
> 1. \\(1\_A X\\), \\(X+Y\\), \\(aX\\) and \\(|X+Y|\\) are integrable.
> 2. \\(E\[(1\_A+1\_B)X\]=E\[1\_AX\]+E\[1\_B Y\]\\).
> 3. \\(E\[X+Y\]=E\[X\]+E\[Y\]\\) and \\(E\[aX\]=aE\[X\]\\).
> 4. \\(E\[X\]\\leq E\[Y\]\\) whenever \\(X\\leq Y\\).
> 5. If \\(X\\geq 0\\) and \\(E\[X\]=0\\), then \\(P\[X=0\]=1\\).
> 6. If \\(P\[X\\neq Y\]=0\\), then \\(E\[X\]=E\[Y\]\\).
> 7. If \\(Z\\) is a random variable such that \\(|Z|\\leq X\\), then \\(Z\\) is integrable.

> [!NOTE]
>
> **Remark**
>
> In particular, \\(\\mathcal{L}^1\\) is a vector space and the expectation operator \\(E:\\mathcal{L}^1\\to \\mathbb{R}\\) is a monotone, positive, and linear functional.

> [!NOTE]
>
> **Proof**
>
> 1. It holds \\(|X+Y|\\leq |X|+|Y|\\). According to Lemma \\ref{lem:linearityL0+}, it follows that \\(E\[|X+Y|\]\\leq E\[|X|+|Y|\]=E\[|X|\]+E\[|Y|\]\<\\infty\\), showing that \\(X+Y\\) and \\(|X+Y|\\) are integrable. The argumentation for \\(1\_AX\\) and \\(aX\\) follows the same line.
> 2. It holds \\(\\left( 1\_A+1\_B \\right)X=(1\_A+1\_B)X^+-(1\_A+1\_B)X^-\\). From the linearity on \\(\\mathcal{L}^0\_+\\), it follows that \\(E\[(1\_A+1\_B)X^\\pm\]=E\[1\_AX^\\pm\]+E\[1\_BX^\\pm\]\\), showing that \\(E\[(1\_A+1\_B)X\]=E\[1\_AX\]+E\[1\_BX\]\\).
> 3. Without loss of generality, assume that \\(a\\geq 0\\). Here again, it follows from \\(aX=aX^+-aX^-\\) and from the linearity on \\(\\mathcal{L}\_+^0\\) that \\(E\[aX^\\pm\]=aE\[X^{\\pm}\]\\). Also, since \\(X+Y=(X^++Y^+)-(X^-+Y^-)=(X+Y)^+-(X+Y)^-\\), it follows that \\((X^++Y^+)+(X+Y)^-=(X^-+Y^-)+(X+Y)^+\\). However, again from the linearity on \\(\\mathcal{L}\_0^+\\), it holds \\(E\[(X^++Y^+)+(X+Y)^-\]=E\[X^+\]+E\[Y^+\]+E\[(X+Y)^-\]\\) and \\(E\[(X^-+Y^-)+(X+Y)^+\]=E\[X^-\]+E\[Y^-\]+E\[(X+Y)^+\]\\), showing that \\(E\[X+Y\]=E\[(X+Y)^+\]-E\[(X+Y)^-\]=E\[X^+\]-E\[X^-\]+E\[Y^+\]-E\[Y^-\]=E\[X\]+E\[Y\]\\).
> 4. If \\(X\\leq Y\\), it follows that \\(0\\leq Y-X\\). According to the proposition stating the approximation from below, let \\((Z\_n)\\) be an increasing sequence of positive simple random variables such that \\(Z\_n\\nearrow Y-X\\). It follows from the monotone convergence Theorem that \\(0\\leq E\[Z^n\]\\leq \\sup E\[Z\_n\]=E\[Y-X\]\\). Applying the previous point, we get \\(E\[Y-X\]=E\[Y\]-E\[X\]\\), yielding the assertion.
> 5. Let \\(A\_n=\\{X\\geq 1/n\\}\\) which is an increasing sequence of events such that \\(\\cup A\_n=\\{X\>0\\}\\). It follows that \\(1\_{A\_n}1/n\\leq 1\_{A\_n}X\\leq X\\) since \\(X\\) is positive. Monotonicity from the previous point yields \\(P\[A\_n\]/n\\leq E\[1\_{A\_n}X\]\\leq E\[X\]=0\\), showing that \\(P\[A\_n\]=0\\) for every \\(n\\). By the lower semi-continuity property of measures, it follows that \\(P\[A\]=\\sup P\[A\_n\]=0\\), showing that \\(P\[X\>0\]=0\\).
> 6. Suppose that \\(P\[X\\neq 0\]=0\\) and define \\(X\_n=|X|1\_{\\{X=0\\}}+(|X|\\wedge n)1\_{A\_n}\\) where \\(A\_n=\\{|X|\\geq 1/n\\}\\). On the one hand, by definition, \\(A\_n\\) is an increasing sequence such that \\(\\cup A\_n=\\{|X|\\neq 0\\}\\). Hence, \\(0\\leq X\_n\\nearrow |X|\\), which by the monotone convergence Theorem implies that \\(E\[X\_n\]\\nearrow E\[|X|\]\\). On the other hand, \\(A\_n\\subseteq \\{X\\neq 0\\}\\), which by monotonicity of the measure implies that \\(P\[A\_n\]=0\\) for every \\(n\\). Hence, \\(E\[X\_n\]\\leq nP\[A\_n\]=0\\) for every \\(n\\). We conclude that \\(E\[|X|\]=0\\), which implies that \\(E\[X\]=0\\).
> 7. Follows directly from the linearity on \\(\\mathcal{L}\_+^0\\).

> [!NOTE]
>
> **Remark**
>
> Note that for \\(X \\in \\bar{\\mathcal{L}}^{0}\\) with \\(X^- \\in \\mathcal{L}^1\\), and \\(Y \\in \\mathcal{L}^1\\), the same argumentation as above yields that:
>
> \\\[ \\begin{equation} -\\infty\<E\[X-Y\]=E\[X^+-X^--Y\]=E\[X^+\]-E\[X^-\]-E\[Y\]=E\[X\]-E\[Y\] \\end{equation} \\\]

We finish this section with two of the most important assertions of integration theory.

> [!NOTE]
>
> **Theorem: Fatou's Lemma and Lebegue's Dominated Convergence**
>
> Let \\((X\_n)\\) be a sequence in \\(\\mathcal{L}^0\\).
>
> - **Fatou's Lemma:** Suppose that \\(X\_n\\geq Y\\) for some \\(Y \\in \\mathcal{L}^1\\). Then it holds
>
>   \\\[ \\begin{equation} E\\left\[ \\liminf X\_n \\right\]\\leq \\liminf E\\left\[ X\_n \\right\]. \\end{equation} \\\]
> - **Dominated Convergence Theorem:** Suppose that \\(|X\_n|\\leq Y\\) for some \\(Y \\in \\mathcal{L}^1\\) and \\(X\_n(\\omega)\\to X(\\omega)\\) for any state \\(\\omega\\). Then it holds
>
>   \\\[ \\begin{equation} E\\left\[ X \\right\]=\\lim E\\left\[ X\_n \\right\]. \\end{equation} \\\]

> [!NOTE]
>
> **Proof**
>
> By linearity, up to the variable change \\(X\_n-Y\\), we can assume that \\(X\_n\\) is positive since \\(E\[\\liminf X\_n-Y\]=E\[\\liminf X\_n\]-Y\\) and \\(E\[X\_n-Y\]=E\[X\_n\]-Y\\) for every \\(n\\). Let \\(Y\_n=\\inf\_{k\\geq n}X\_n\\), which is an increasing sequence of positive random variables that converges to \\(\\liminf X\_n=\\sup\_n \\inf\_{k\\geq n}X\_k\\). Notice also that \\(Y\_n\\leq X\_k\\) for every \\(k\\geq n\\), and therefore by monotonicity of the expectation \\(E\[Y\_n\]\\leq \\inf\_{k\\geq n}E\[X\_k\]\\). We conclude Fatou's lemma with the monotone convergence theorem as follows:
>
> \\\[ \\begin{equation} E\\left\[ \\liminf X\_n \\right\]=\\lim E\\left\[ Y\_n \\right\]=\\sup E\\left\[ Y\_n \\right\]\\leq \\sup\_n\\inf\_{k\\geq n}E\[X\_k\]=\\liminf E\[X\_n\]. \\end{equation} \\\]
>
> A simple sign change shows that Fatou's lemma holds in the other direction. That is, if \\(X\_n\\leq Y\\) for some \\(Y \\in \\mathcal{L}^1\\), then it holds
>
> \\\[ \\begin{equation} \\limsup E\\left\[ X\_n \\right\]\\leq E\\left\[ \\limsup X\_n \\right\]. \\end{equation} \\\]
>
> Now the dominated convergence theorem assumptions yield that \\(-Y\\leq X\_n\\leq Y\\) for some \\(Y \\in \\mathcal{L}^1\\). Hence, since \\(X=\\lim X\_n=\\liminf X\_n=\\limsup X\_n\\), it follows that
>
> \\\[ \\begin{equation} \\limsup E\\left\[ X\_n \\right\]\\leq E\\left\[ \\limsup X\_n \\right\]=E\\left\[ X \\right\]=E\\left\[ \\liminf X\_n \\right\]\\leq \\liminf E\\left\[ X\_n \\right\]. \\end{equation} \\\]
>
> However, \\(\\liminf E\\left\[ X\_n \\right\]\\leq \\limsup E\[X\_n\]\\), showing that \\(E\[X\_n\]\\) converges, and
>
> \\\[ \\begin{equation} E\[X\]=\\liminf E\[X\_n\]=\\limsup E\[X\_n\]=\\lim E\[X\_n\]. \\end{equation} \\\]
>
> which ends the proof.

> [!NOTE]
>
> **Example: Defining a Probability Measure from a Density**
>
> The concept of density is quite often used in statistics as it defines new measures. Let us formalize it using dominated convergence.
>
> On a probability space \\((\\Omega, \\mathcal{F}, P)\\), consider a positive integrable random variable \\(Z\\) such that \\(E\[Z\]=1\\). We define the set function
>
> \\\[ \\begin{split} Q\\colon \\mathcal{F} &amp; \\longmapsto \[0,1\]\\\\ A &amp; \\longmapsto Q\[A\] = E\[Z1\_A\] \\end{split} \\\]
>
> which is clearly well defined and mapping to \\(\[0,1\]\\) since \\(Z\\) is positive and \\(E\[Z 1\_A\]\\leq E\[Z\]=1\\).
>
> It follows that \\(Q\\) defined as such is a new probability measure. Indeed
>
> - \\(Q\[\\emptyset\] = E\[Z1\_{\\emptyset}\]=E\[0\] =0\\), \\(Q\[\\Omega\] = E\[Z1\_{\\Omega}\] = E\[Z\] = 1\\);
> - **\\(\\sigma\\)-additivity**: Let \\((A\_n)\\) be a sequence of disjoint events. It follows that
>
>   \\\[ 1\_{\\cup\_{k\\leq n}A\_k} = \\sum\_{k\\leq n} 1\_{A\_k} \\nearrow \\sum 1\_{A\_n} = 1\_{\\cup A\_n} \\\]
>
>   By monotone convergence
>
>   \\\[ \\begin{align\*} \\sum Q\[A\_n\] &amp; = \\lim \\sum\_{k\\leq n} Q\[A\_k\]\\\\ &amp; = \\lim \\sum\_{k\\leq n}E\[Z 1\_{A\_k}\]\\\\ &amp; = \\lim E\\left\[ Z \\sum\_{k\\leq n} 1\_{A\_k} \\right\]\\\\ &amp; = E\\left\[ Z \\sum 1\_{A\_n} \\right\]\\\\ &amp; = E\[Z 1\_{\\cup A\_n}\] = Q\[\\cup A\_n\] \\end{align\*} \\\]
>
> It can be shown using step functions that integration under \\(P\\) and \\(Q\\) are related through the formula
>
> \\\[ E^Q\[X\] = E^P\\left\[ Z X \\right\] \\\]
>
> for any bounded random variable \\(X\\) or any \\(X\\) with sufficient integrability under \\(Q\\).
>
> Another particular property of the probability measure \\(Q\\) so defined is that it is **absolutely continuous** with respect to \\(P\\) in the sense that
>
> \\\[ P\[A\] = 0 \\quad \\text{implies} \\quad Q\[A\] = 0 \\\]
