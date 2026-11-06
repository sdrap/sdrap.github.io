# Independence

Unlike the previous section that do hold in large part for measures without considering the special case of probability, independence is a concept that is genuinly cored into probability.

Throughout we fix a probability space \\((\\Omega, \\mathcal{F}, P)\\).

> [!NOTE]
>
> **Definition: Independence**
>
> - **Independence of families:** A family \\((\\mathcal{C}^i)\\) of collections of events is called **independent** if for every finite collection \\((A\_{i\_k})\_{k\\leq n}\\) with \\(A\_{i\_k}\\) event in \\(\\mathcal{C}^{i\_k}\\) for every \\(k=1,\\ldots, n\\), it holds
>
>   \\\[ P\\left\[ A\_{i\_1}\\cap \\cdots\\cap A\_{i\_n} \\right\]=\\prod\_{k\\leq n} P\\left\[ A\_{i\_k} \\right\]. \\\]
> - **Independence of events:** A family of events \\((A\_i)\\) is called independent if the family \\((\\{A\_i\\})\\) is independent.
> - **Independence of random variables:** A family of random variables \\((X\_i)\\) is called independent if \\((\\sigma(X\_i))\\) are independent.

> [!NOTE]
>
> **Remark**
>
> A family \\((\\mathcal{C}^i)\\) is called *pairwise independent* if
>
> \\\[ P\[A\_{i\_1}\\cap A\_{i\_2}\]=P\[A\_{i\_1}\]P\[A\_{i\_2}\] \\\]
>
> for every \\(A\_{i\_1}\\in \\mathcal{C}^{i\_1}\\), \\(A\_{i\_2}\\in \\mathcal{C}^{i\_2}\\), which is a weaker version of independence. As an exercise, find three sets \\(A,B\\) and \\(C\\) on some probability space which are pairwise independent but not independent.

> [!NOTE]
>
> **Proposition**
>
> The following assertions hold:
>
> 1. Let \\(\\mathcal{P}\_1, \\ldots, \\mathcal{P}\_n\\) be a finite family of independent \\(\\pi\\)-systems. Then \\(\\sigma(\\mathcal{P}\_1), \\ldots,\\sigma(\\mathcal{P}\_n)\\) are also independent.
> 2. Let \\(X,Y\\) be two independent random variables, either positive or such that \\(X,Y, XY \\in L^1\\), then it follows that
>
>    \\\[ E\[XY\]=E\[X\]E\[Y\] \\\]
> 3. Let \\(X\\) be a random variable independent of a sigma-algebra \\(\\mathcal{G}\\). Then it holds
>
>    \\\[ E\\left\[ X|\\mathcal{G} \\right\]=E\\left\[ X \\right\] \\\]

> [!NOTE]
>
> **Proof**
>
> 1. We show the case \\(n=2\\), the general one is done by induction. Let \\(\\mathcal{C}\_1\\) be the collection of elements \\(A\_1\\) in \\(\\sigma(\\mathcal{P}\_1)\\) for which it holds
>
>    \\\[ P\\left\[ A\_1\\cap A\_2 \\right\]=P\[A\_1\]P\[A\_2\] \\quad \\text{for every }A\_2 \\in \\mathcal{P}\_2. \\\]
>
>    Let us show that \\(\\mathcal{C}\_1\\) is a \\(\\lambda\\)-system. Clearly, \\(\\Omega \\in \\mathcal{C}\_1\\). Let \\(A\_1 \\in \\mathcal{C}\_1\\) and \\(A\_2\\in \\mathcal{P}\_2\\).
>
>    It follows that
>
>    \\\[ P\[A\_1^c\\cap A\_2\]=P\\left\[ A\_2\\right\]-P\[A\_1\\cap A\_2\]=P\[A\_2\]-P\[A\_1\]P\[A\_2\]=(1-P\[A\_1\])P\[A\_2\]=P\[A\_1^c\]P\[A\_2\], \\\]
>
>    showing that \\(A\_1^c\\in \\mathcal{C}\_1\\). Finally, let \\((A\_1^n)\\) be a sequence of pairwise disjoint elements in \\(\\mathcal{C}\_1\\) and \\(A\_2\\) in \\(\\mathcal{P}\_2\\). By \\(\\sigma\\)-additivity of probability measures, it holds
>
>    \\\[ P\\left\[ \\left( \\cup A\_1^n \\right)\\cap A\_2 \\right\]=\\sum P\\left\[ A\_1^n\\cap A\_2 \\right\]=\\sum P\[A\_1^n\]P\[A\_2\]=\\left(\\sum P\[A\_1^n\]\\right)P\[A\_2\]=P\\left\[ \\cup A\_1^n \\right\]P\[A\_2\], \\\]
>
>    showing that \\(\\cup A\_1^n\\in \\mathcal{C}\_1\\). We deduce that \\(\\mathcal{C}\_1\\) is a \\(\\lambda\\)-system containing the \\(\\pi\\)-system \\(\\mathcal{P}\_1\\). Since \\(\\sigma(\\mathcal{P}\_1)\\subseteq \\sigma(\\mathcal{C}\_1)=\\mathcal{C}\_1\\subseteq \\sigma(\\mathcal{P}\_1)\\), it follows that \\(\\mathcal{C}\_1=\\sigma(\\mathcal{P}\_1)\\). Now let \\(\\mathcal{C}\_2\\) be the set of those \\(A\_2\\) in \\(\\sigma(\\mathcal{P}\_2)\\) such that
>
>    \\\[ P\\left\[ A\_1\\cap A\_2 \\right\]=P\[A\_1\]P\[A\_2\] \\quad \\text{for every }A\_1 \\in \\sigma(\\mathcal{P}\_1). \\\]
>
>    Since \\(\\sigma(\\mathcal{P}\_1)\\) is independent of \\(\\mathcal{P}\_2\\), the same argumentation as above shows that \\(\\mathcal{C}\_2\\) is a \\(\\lambda\\)-system.
>
>    Therefore, \\(\\mathcal{C}\_2=\\sigma(\\mathcal{P}\_2)\\) showing that \\(\\sigma(\\mathcal{P}\_1)\\) is independent of \\(\\sigma(\\mathcal{P}\_2)\\).
> 2. By assumption, \\(\\sigma(X)\\) is independent of \\(\\sigma(Y)\\). Assume that \\(X\\) and \\(Y\\) are positive. Let \\(\\tilde{X}=\\sum\_{k\\leq n} \\alpha\_k 1\_{A\_k}\\) and \\(\\tilde{Y}=\\sum\_{l\\leq m}\\beta\_l 1\_{B\_l}\\) for \\(\\alpha\_k,\\beta\_l\\) positives and \\(A\_k\\in \\sigma(X)\\) and \\(B\_l\\in \\sigma(Y)\\). It follows that
>
>    \\\[ E\\left\[ \\tilde{X}\\tilde{Y} \\right\]=\\sum\_{k\\leq n,l\\leq m}\\alpha\_k \\beta\_l P\[A\_k\\cap B\_l\]=\\sum\_{k\\leq n,l\\leq m}\\alpha\_k\\beta\_l P\[A\_k\]P\[B\_l\]. \\\]
>
>    Since there exist sequences \\(\\tilde{X}\_n,\\tilde{Y}\_n\\) such that \\(\\tilde{X}\_n\\nearrow X\\) and \\(\\tilde{Y}\_n\\nearrow Y\\), it follows from Lebesgue's monotone convergence that
>
>    \\\[ E\\left\[ XY \\right\]=\\lim E\\left\[ \\tilde{X}\_n\\tilde{Y}\_n \\right\]=\\lim E\\left\[ \\tilde{X}\_n \\right\]E\\left\[ \\tilde{Y}\_n \\right\]=E\[X\]E\[Y\]. \\\]
>
>    The case where \\(X,Y,XY\\) are in \\(L^1\\) follows by separating positive and negative parts.
> 3. Let \\(X\\) be an integrable random variable independent of the \\(\\sigma\\)-algebra \\(\\mathcal{G}\\). For every \\(A\\in \\mathcal{G}\\), it follows that \\(1\_A\\) and \\(X\\) are independent, and therefore, from the previous point, it holds
>
>    \\\[ E\\left\[ X1\_{A} \\right\] = E\\left\[ X \\right\]E\\left\[ 1\_A \\right\]. \\\]
>
>    But on the other hand,
>
>    \\\[ E\\left\[ E\\left\[ X \\right\]1\_{A} \\right\]=E\\left\[ X \\right\]E\\left\[ 1\_A \\right\]. \\\]
>
>    Since \\(E\[X\]\\) is a constant and \\(\\mathcal{G}\\)-measurable, it follows from the uniqueness of the conditional expectation that
>
>    \\\[ E\[X|\\mathcal{G}\]=E\[X\]. \\\]
