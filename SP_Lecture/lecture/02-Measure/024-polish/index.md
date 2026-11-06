# Measures On Polish Spaces

In this section we address how topological assumptions on the underlying state space interplay with the probability measure.

> [!WARNING]
>
> Throughout, \\(S\\) is a metric space[^/SP_Lecture/lecture/02-Measure/024-polish/#1] with distance \\(d\\) with corresponding Borel \\(\\sigma\\)-algebra \\(\\mathcal{S}=\\mathcal{B}(S)\\).
>
> With \\(B\_\\delta(x) = \\{y \\in S\\colon d(x,y)\<\\delta\\}\\) we denote the open ball of size \\(\\delta\\) centered at \\(x\\).
>
> For a set \\(A\\) we define \\(d(x,A) = \\inf \\{d(x,y)\\colon y \\in A\\}\\) wich is the distance of \\(x\\) to \\(a\\). By triangular inequality it holds that \\(d(x, A)\\leq d(x, z) + d(z, A)\\) for any \\(z\\) showing that \\(|d(x, A)- d(z,A)|\\leq d(x,z)|\\), that is \\(x \\mapsto d(x, A)\\) is Lipshitz continuous.

> [!NOTE]
>
> **Definition: Tightness and Regularity**
>
> A probability measure \\(P\\) on \\((S, \\mathcal{S})\\) is called
>
> - **tight** if for any \\(\\varepsilon\>0\\), there exists a compact \\(K\\) such that
>
>   \\\[ P\[S\\setminus K\] \\leq \\varepsilon \\\]
> - **regular:** if for every borel set \\(A\\) it holds
>
>   \\\[ P\[A\] = \\sup \\left\\{ P\[K\]\\colon K\\subseteq A\\text{ and } K \\text{ compact} \\right\\} \\\]

Tightness shows that the metric space can be modulo \\(\\varepsilon\\) reduced in probability to a compact subset, while regularity shows that the measure of any complex Borel set can be approximated from inside by compacts.

> [!NOTE]
>
> **Theorem**
>
> For a probability measure \\(P\\) on \\((S, \\mathcal{S})\\) the following are equivalent
>
> - \\(P\\) is tight;
> - \\(P\\) is regular;

**Proof**

Clearly, regularity implies tightness. Reciprocally, suppose that \\(P\\) is tight.

- **Step 1:** We show that for any Borel set \\(A\\) it holds

  \\\[ P\[A\] = \\sup\\{P\[F\]\\colon F\\subseteq A \\text{ where }F \\text{ is closed.}\\} \\\]

  - If \\(A\\) is an open set, define \\(F\_n = \\{x \\colon d(x, A^c)\\geq 1/n\\}\\subseteq A\\) which is a closed set. Indeed, \\(x \\mapsto d(x, A^c)\\) is Lipschitz continuous and \\(F\_n = d(\\cdot , A^c)^{-1}(\[1/n, \\infty))\\) is the reciprocal image of a closed set, hence closed. Furthermore \\(A = \\cup F\_n\\) since \\(A^c\\) is closed. Indeed, if there exists \\(x\\) in \\(A\\setminus \\cup F\_n\\), it follows that \\(d(x, y\_n)\<2/n\\) for some sequence \\((y\_n)\\) in \\(A^c\\) showing that \\(y\_n \\to x\\). Since \\(A^c\\) is closed it follows that \\(x\\) is in \\(A^c\\) which is a contradiction.

    Since the sequence of sets \\(F\_n\\) is increasing, by lower continuity of the probability measure it follows that

    \\\[ \\begin{align\*} \\sup\\left\\{ P\[F\]\\colon F\\subseteq A, F \\text{ closed} \\right\\} &amp; \\leq P\[A\]\\\\ &amp; = P\[\\cup F\_n \]\\\\ &amp; = \\sup P\[F\_n\]\\\\ &amp; \\leq \\sup\\left\\{ P\[F\]\\colon F\\subseteq A, F \\text{ closed} \\right\\} \\end{align\*} \\\]
  - Define the collection \\(\\mathcal{C}\\) of those borel sets \\(A\\) such that \\(P\[A\]\\) and \\(P\[A^c\]\\) can be approximated from inside by closed sets. Clearly any open set is member of \\(\\mathcal{C}\\), in particular \\(S\\) itself. It is by definition closed under complementation. Finally, it is closed under countable unions. Indeed, let \\((A\_n)\\) be a sequence in \\(\\mathcal{C}\\) and define \\(A = \\cup A\_n\\). Choose closed sets \\(F\_n\\) and \\(G\_n\\) such that \\(P\[A\_n\\setminus F\_n\]\\leq \\varepsilon/2^{n+1}\\) and \\(P\[A\_n^c \\setminus G\_n\]\\leq \\varepsilon/2^{n+1}\\). Fix \\(m\\) such that \\(P\[A\\setminus \\cup\_{n \\leq m}A\_n\] \\leq \\varepsilon/2\\) and define \\(F = \\cup\_{n\\leq m}F\_n \\subseteq \\cup\_{n\\leq m} A\_n \\subseteq A\\). It follows that

    \\\[ \\begin{align\*} P\[A\\setminus F\] &amp; = P\[A \\setminus \\cup\_{n\\leq m} A\_n\] + P\[\\cup\_{n\\leq m}A\_n \\setminus F\]\\\\ &amp; \\leq \\frac{\\varepsilon}{2} + P\\left\[ \\cup\_{n \\leq m} A\_n \\setminus F\_n \\right\]\\\\ &amp; \\leq \\frac{\\varepsilon}{2} + \\sum\_{n \\leq m} \\frac{\\varepsilon}{2^{n+1}} \\leq \\varepsilon \\end{align\*} \\\]

    Since \\(G = \\cap G\_n\\) is closed, it follows that

    \\\[ \\begin{align\*} P\\left\[ A\\setminus G \\right\] &amp; = P\[\\cap A\_n^c \\setminus \\cap G\_n\]\\\\ &amp; \\leq P\\left\[ \\cup A\_n^c \\setminus G\_n \\right\]\\\\ &amp; \\leq \\sum P\[A\_n^c \\setminus G\_n\] \\leq \\varepsilon \\end{align\*} \\\]

    showing that \\(\\mathcal{C}\\) is a \\(\\sigma\\)-algebra henceforth equal to \\(\\mathcal{S}\\) finishing the proof of the first step.
- **Step 2:** We show the inner approximation with compacts.

  For a Borel set \\(A\\) choose a closed set \\(F\\) such that \\(P\[A\\setminus F\] \\leq \\varepsilon/2\\). By tightness, choose a compact \\(K\\) such that \\(P\[S\\setminus K\]\\leq \\varepsilon/2\\). The set \\(F\\cap K\\) is itself compact, and it holds

  \\\[ P\[A \\setminus (F\\cap K)\] \\leq P\\left\[ A\\setminus F \\right\] + P\[A \\setminus K\] \\leq \\frac{\\varepsilon}{2} + P\[S\\setminus K\] \\leq \\varepsilon \\\]

A metric space is automatically first countable, that is, each point has a countable basis of neighborhoods namely \\(B\_{1/n}(x)\\). Most of the metric space we will encounter later have further properties that are useful from a measure viewpoint. Such metric spaces are called **Polish**.

> [!NOTE]
>
> **Definition: Polish Space**
>
> A metric space \\(S\\) is called **Polish** if it is
>
> - separable: there exists a countable dense subset \\((x\_n)\\);
> - complete: any Cauchy sequence is converging.

> [!NOTE]
>
> **Ulam's Theorem**
>
> Any probability measure \\(P\\) on a Polish space \\((S, \\mathcal{S})\\) is tight, in particular, regular.

> [!NOTE]
>
> **Proof**
>
> Recall that in a metric space a set \\(K\\) is compact if and only if it is closed, complete and totally bounded. Clearly if \\(K\\) is compact it is closed. Furthermore, as any sequence has a converging subsequence, if this sequence is Cauchy, it has a limit in \\(K\\), hence \\(K\\) is complete. Finally, for any \\(\\varepsilon\>0\\), \\(B\_{\\varepsilon}(x)\\) for \\(x\\) in \\(K\\) is an open covering which can be reduce to a finite one because of compactness. Reciprocally, let \\((x\_n)\\) be a sequence in the closed, complete and totally bounded set \\(K\\). For any integer \\(m\\) there exists a finite open covering of \\(K\\) by open balls of radius \\(1/m\\). Infinitely many elements of the sequence must belong to one of such ball. We can therefore construct a subsequence which is Cauchy which by completness will converge showing that \\(K\\) is compact.
>
> Let \\((x\_n)\\) be a countable dense subset of \\(S\\). For any \\(m\\), since \\(S = \\cup\_n \\bar{B}\_{1/m}(x\_n)\\) where \\(\\bar{B}\_{1/m}(x\_n)\\) is the closed ball of radius \\(1/m\\) centered in \\(x\_n\\), choose \\(N\_m\\) be such that \\(P\[S \\setminus K\_m\]\\leq \\varepsilon/2^m\\) where \\(K\_m = \\cup\_{n\\leq N\_m}\\bar{B}\_{1/m}(x\_n)\\). Clearly \\(K\_m\\) is closed as finite union of closed sets and also complete as closed subset of a complete space. So is \\(K := \\cap\_m K\_m\\). Let us show that \\(K\\) is totally bounded. For \\(\\delta\>0\\) choose \\(m\\) such that \\(1/m\<\\delta\\). It follows that \\(K \\subseteq K\_m =\\cup\_{n\\leq N\_m} \\bar{B}\_{1/m}(x\_n) \\subseteq \\cup\_{n\\leq N\_m}B\_{\\delta}(x\_n)\\) showing that \\(K\\) can be covered by finitely many balls of size \\(\\delta\\), hence is totally bounded. We deduce that \\(K\\) is compact. Finally it holds that
>
> \\\[ P\[S \\setminus K\] \\leq \\sum P\[S\\setminus K\_m\] \\leq \\sum \\frac{\\varepsilon}{2^m} = \\varepsilon \\\]

[^/SP_Lecture/lecture/02-Measure/024-polish/#1]: The definition of tightness and regularity only requires a topological space but most of the interesting results we will address are for Polish spaces.
