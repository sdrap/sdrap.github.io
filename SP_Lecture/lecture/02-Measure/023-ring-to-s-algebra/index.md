# From Ring to \\(\\sigma\\)-Algebra: Carathéodory's Theorem

As mentioned in the previous section, the question is whether a \\(\\sigma\\)-additive pre-measure on a ring \\(\\mathcal{R}\\) can be extended to the \\(\\sigma\\)-algebra it generates. In case such an extension exists, a further relevant question is whether such an extension is unique.

Before assessing the extension, we first address some central properties of the \\(\\sigma\\)-additivity in terms of continuity.

> [!NOTE]
>
> **Lemma**
>
> Let \\(\\mathcal{R}\\) be a ring and \\(\\mu:\\mathcal{R}\\to \[0,\\infty\]\\) a finite content, that is \\(\\mu\[A\]\<\\infty\\) for every \\(A \\in \\mathcal{R}\\). Then the following properties of \\(\\mu\\) hold:
>
> 1. **\\(\\sigma\\)-additivity**
> 2. **\\(\\sigma\\)-sub-additivity**
> 3. **Lower semi-continuity:** \\(\\sup\_n \\mu\[A\_n\]= \\mu\[\\cup A\_n\]\\) for every countable family \\((A\_n)\\) of increasing elements in \\(\\mathcal{R}\\) such that \\(\\cup A\_n\\) is in \\(\\mathcal{R}\\).
> 4. **Upper semi-continuity:** \\(\\inf\_n \\mu\[A\_n\]= \\mu\[\\cap A\_n\]\\) for every countable family \\((A\_n)\\) of decreasing elements in \\(\\mathcal{R}\\) such that \\(\\cap A\_n\\) is in \\(\\mathcal{R}\\).
> 5. **Continuous at \\(\\emptyset\\):** \\(\\inf\_n \\mu\[A\_n\]= 0\\) for every countable family \\((A\_n)\\) of decreasing elements in \\(\\mathcal{R}\\) such that \\(\\cap A\_n=\\emptyset\\).

> [!NOTE]
>
> **Proof**
>
> - The equivalence between **\\(\\sigma\\)-additivity** and **\\(\\sigma\\)-sub-additivity** is already shown in a previous [Lemma](<https://www.samuel-drapeau.info/SP_Lecture/lecture/02-Measure/022-semi-ring-to-ring/#lem-propcontentsemiring>) in the context of a semi-ring.
> - **\\(\\sigma\\)-additivity implies lower semi-continuity:** Let \\((A\_n)\\) be an increasing sequence of elements in \\(\\mathcal{R}\\) such that \\(A=\\cup A\_n\\) is in \\(\\mathcal{R}\\).  
>   Defining \\(B\_n=A\_n\\setminus \\cup\_{k\<n}A\_k=A\_n\\setminus B\_{n-1}\\) for \\(n\>1\\) and \\(B\_1=A\_1\\) provides a disjoint sequence of elements in \\(\\mathcal{R}\\).  
>   Since \\(A\_n=\\cup\_{1\\leq k\\leq n} B\_k\\) and \\(A=\\cup B\_n\\), it follows from \\(\\sigma\\)-additivity that
>
>   \\\[ \\mu\[A\]=\\sum \\mu\[B\_n\]=\\sup \\sum\_{1\\leq k\\leq n}\\mu\[B\_k\]=\\sup \\mu\[\\cup\_{1\\leq k\\leq n}B\_k\]=\\sup \\mu\[A\_n\] \\\]
> - **Lower semi-continuity implies upper semi-continuity:**  
>   Let \\((A\_n)\\) be a decreasing sequence of elements in \\(\\mathcal{R}\\) such that \\(A=\\cap A\_n\\) is in \\(\\mathcal{R}\\). It follows that \\(B\_n=A\_1\\setminus A\_n\\) defines an increasing sequence such that \\(B=\\cup B\_n=A\_1\\setminus \\cap A\_n=A\_1\\setminus A \\in \\mathcal{R}\\). Lower semi-continuity, additivity, and the properties of Lemma \[lem-propcontentsemiring\] imply that
>
>   \\\[ \\mu\[A\_1\]-\\inf \\mu\[A\_n\]=\\sup (\\mu\[A\_1\]-\\mu\[A\_n\])=\\sup \\mu\[A\_1\\setminus A\_n\]=\\mu\[\\cup A\_1\\setminus A\_n\]=\\mu\[A\_1\]-\\mu\[A\] \\\]
> - **Upper semi-continuity implies continuity at \\(\\emptyset\\)** (immediate).
> - **Continuity at \\(\\emptyset\\) implies \\(\\sigma\\)-additivity:** Let \\((A\_n)\\) be a sequence of mutually disjoint elements of \\(\\mathcal{R}\\) such that \\(A=\\cup A\_n\\) is in \\(\\mathcal{R}\\). By means of [Lemma](<https://www.samuel-drapeau.info/SP_Lecture/lecture/02-Measure/022-semi-ring-to-ring/#lem-propcontentsemiring>), it follows that
>
>   \\\[ \\sum \\mu\[A\_n\]\\leq \\mu\[A\] \\\]
>
>   It follows that \\(B\_n=A\\setminus (\\cup\_{1\\leq k\\leq n}A\_k)\\) is a decreasing family of elements of \\(\\mathcal{R}\\) such that \\(\\cap B\_n=\\emptyset\\). By additivity of \\(\\mu\\), we have
>
>   \\\[ \\mu\[A\]=\\mu\[B\_n\\cup (\\cup\_{1\\leq k\\leq n}A\_k)\]=\\mu\[B\_n\]+\\sum\_{1\\leq k\\leq n}\\mu\[A\_k\] \\\]
>
>   for every \\(n\\). Since \\(\\sum\_{q\\leq k\\leq n}\\mu\[A\_k\]\\to \\sum \\mu\[A\_n\]\\) and by continuity at \\(\\emptyset\\), \\(\\mu\[B\_n\]\\to 0\\), it follows that \\(\\mu\[A\]=\\sum \\mu\[A\_n\]\\), hence the \\(\\sigma\\)-additivity.

We are now in position to formulate the central extension theorem of Carathéodory.

> [!NOTE]
>
> **Theorem: Carathéodory's Extension Theorem**
>
> Let \\(X\\) be a non-empty set, \\(\\mathcal{S}\\) a semi-ring such that \\(X=\\cup A\_n\\) for some countable family \\((A\_n)\\) of elements in \\(\\mathcal{S}\\). Suppose that \\(\\mu:\\mathcal{R}\\to \[0,\\infty\]\\) is a pre-measure such that:
>
> 1. \\(\\mu\[A\_n\]\<\\infty\\) for every \\(n\\).
> 2. \\(\\mu\\) is \\(\\sigma\\)-sub-additive or equivalently \\(\\sigma\\)-additive.
>
> Then \\(\\mu\\) can be uniquely extended to a measure \\(\\nu\\) on \\(\\mathcal{F}=\\sigma(\\mathcal{S})\\).

> [!NOTE]
>
> **Remark**
>
> We already know from the assumption of this theorem that according to a previous [proposition](<https://www.samuel-drapeau.info/SP_Lecture/lecture/02-Measure/022-semi-ring-to-ring/#prop-pre-mes-semi-ring-to-ring>) there exists a unique extension \\(\\nu\\) to the ring \\(\\mathcal{R}\\) generated by \\(\\mathcal{S}\\) such that \\(\\nu\\) is a \\(\\sigma\\)-additive content. We can therefore assume for the proof of Carathéodory's theorem that \\(\\mu\\) is a \\(\\sigma\\)-additive content on a ring.

The existence is the complex and lengthy part of the proof. However uniqueness can be adressed through the following proposition.

> [!NOTE]
>
> **Proposition**
>
> Let \\((X,\\mathcal{F})\\) be a measurable space and \\(\\mathcal{P}\\) a \\(\\pi\\)-system on \\(X\\) that generates \\(\\mathcal{F}\\) and such that there exists a sequence \\((A\_n)\\) of elements of \\(\\mathcal{P}\\) with \\(\\cup A\_n=X\\). Let \\(\\mu\\) and \\(\\nu\\) be two measures on \\(\\mathcal{F}\\) that coincide on \\(\\mathcal{P}\\) and such that \\(\\mu(A\_n)=\\nu(A\_n)\<\\infty\\) for every \\(n\\). Then \\(\\mu=\\nu\\).

> [!NOTE]
>
> **Proof**
>
> Let \\(n\\) be an integer and consider the collection of sets \\(\\mathcal{C}^n=\\{A \\in \\mathcal{F}\\colon \\mu\[A\\cap A\_n\]=\\nu\[A\\cap A\_n\]\\}\\). Then \\(\\mathcal{C}^n\\) is a \\(\\lambda\\)-system. Indeed
>
> - **\\(X\\) is in \\(\\mathcal{C}^n\\)** since \\(\\mu\[X\\cap A\_n\]=\\mu\[A\_n\]=\\nu\[A\_n\]=\\nu\[A\_n\\cap X\]\\).
> - **Stability under relative complements:** For \\(A\\subseteq B\\) with \\(A\\) and \\(B\\) in \\(\\mathcal{C}^n\\), it holds that \\(\\mu\[(B\\setminus A)\\cap A\_n\]=\\mu\[B\\cap A\_n\]-\\mu\[A\\cap A\_n\]=\\nu\[B\\cap A\_n\]-\\nu\[A\\cap A\_n\]=\\nu\[(B\\setminus A)\\cap A\_n\]\\), showing that \\(B\\setminus A\\) belongs to \\(\\mathcal{C}^n\\).
> - **Stability under countable disjoint unions:** If \\((B\_m)\\) is a disjoint sequence in \\(\\mathcal{C}^n\\), then
>
>   \\\[ \\mu\[(\\cup B\_m) \\cap A\_n\]=\\sum\_m \\mu\[B\_m\\cap A\_n\]=\\sum\_m \\nu\[B\_m\\cap A\_n\]=\\nu\[(\\cup B\_m)\\cap A\_n\] \\\]
>
>   showing that \\(\\cup B\_m \\in \\mathcal{C}^n\\).
>
> Since \\(\\mathcal{P}\\subseteq \\mathcal{C}^n\\), and \\(\\mathcal{P}\\) is stable under intersection, by means of the Dynkin Lemma, it follows that \\(\\mathcal{F}=\\sigma(\\mathcal{P})\\subseteq \\mathcal{C}^n\\subseteq \\mathcal{F}\\). Thus, \\(\\mu=\\nu\\).

> [!NOTE]
>
> **Example: Lebesgue/Stieljes Measure**
>
> The conditions of [Carathéodory's Theorem](<#thm-caratheodory>) are fulfilled in the case of the Lebesgue/Stieltjes measure. Therefore, it defines a unique measure on the Borel \\(\\sigma\\)-algebra of \\(\\mathbb{R}\\).

We are left to show Carathéodory's extension theorem. The proof relies on the concept of outer measure. So far we tried to built measures from the bottom up, from simple class of sets and trying to reach \\(\\sigma\\)-algebra. The idea of outer measure is a top down approach hopping that both concepts would meet at the right place, that is, the \\(\\sigma\\)-algebra.

## Outer Measure

> [!NOTE]
>
> **Definition: Outer Measure**
>
> A set function \\(\\mu^\\ast \\colon 2^X \\to \[0, \\infty\]\\) is called an **outer measure** if
>
> - \\(\\mu^\\ast\[\\emptyset\] = 0\\);
> - **\\(\\sigma\\)-sub-additivity**: For any countable family \\((B\_n)\\) of subsets of \\(X\\) and \\(A \\subseteq \\cup B\_n\\) it holds
>
>   \\\[ \\mu^\\ast\[A\] \\leq \\sum \\mu^\\ast\[B\_n\] \\\]
>
> A set \\(A\\subseteq X\\) is called **\\(\\mu^\\ast\\)-measurable** if
>
> \\\[ \\mu^\\ast\[E\] = \\mu^\\ast\\left\[ E\\cap A \\right\] + \\mu^\\ast \\left\[ E\\cap A^c \\right\] \\\]
>
> for every \\(E\\subseteq X\\).

Note that the second condition implies that an outer measure is monotone, that is \\(\\mu\[A\] \\leq \\mu\[B\]\\) for any \\(A\\subseteq B\\). The notion of \\(\\mu^\\ast\\)-measurability of a set depends naturally of the outer measure. Clearly, due to subadditivity, for any subsets \\(E\\) and \\(A\\) of \\(X\\) it holds

\\\[ \\mu^\\ast\[E\] \\leq \\mu^\\ast\[E \\cap A\] + \\mu^\\ast\[E\\cap A^c\] \\\]

Hence, \\(A\\) is \\(\\mu^\\ast\\)-measurable if the reverse inequality holds for any set \\(E\\subseteq X\\). The denomination *measurable* is justified by the following theorem.

> [!NOTE]
>
> **Theorem**
>
> Let \\(\\mu^\\ast\\) be an outer measure on \\(X\\). Then, the collection \\(\\mathcal{M}\\) of all \\(\\mu^\\ast\\)-measurable is a \\(\\sigma\\)-algebra. Furthermore, the restriction of \\(\\mu^\\ast\\) on this collection is a measure.

> [!NOTE]
>
> **Proof**
>
> We show that \\(\\mathcal{M}\\) is a \\(\\sigma\\)-algebra.
>
> **Step 1 - \\(\\emptyset\\) belongs to \\(\\mathcal{M}\\)**: Clearly, \\(\\emptyset\\) is obviously \\(\\mu^\\ast\\) measurable.
>
> **Step 2 - Stability under complementation**: For \\(A\\) in \\(\\mathcal{M}\\), then for any \\(E \\subseteq X\\) it holds that
>
> \\\[ \\mu^\*(E) = \\mu^\*(E \\cap A) + \\mu^\*(E \\cap A^c). \\\]
>
> Interchanging \\(A\\) and \\(A^c\\) yields \\(A^c\\) belongs to \\(\\mathcal{M}\\).
>
> **Step 3 - Stability under union**: Let \\(A\\) and \\(B\\) be two \\(\\mu^\\ast\\)-measurable sets. For any set \\(E\\) it holds
>
> \\\[ \\mu^\\ast\[E\] = \\mu^\\ast\[E \\cap A\] + \\mu^\\ast\[E \\cap A^c\] \\\]
>
> In particular for \\(B\\) it holds
>
> \\\[ \\mu^\\ast\[E\\cap A^c\] = \\mu^\\ast\[(E\\cap A^c) \\cap B\] + \\mu^\\ast\[(E\\cap A^c) \\cap B^c\] \\\]
>
> Since by sub-additivity it holds that \\(\\mu^\\ast\[E\\cap(A\\cup B)\] \\leq \\mu^\\ast\[E \\cap A\] + \\mu^\\ast\[E\\cap(A^c \\cap B)\]\\). Hence, it holds that
>
> \\\[ \\begin{align\*} \\mu^\\ast\[E\] &amp; = \\mu^\*(E \\cap A) + \\mu^\\ast\[(E\\cap A^c) \\cap B\] + \\mu^\\ast\[(E\\cap A^c) \\cap B^c\]\\\\ &amp; = \\mu^\*(E \\cap A) + \\mu^\\ast\[(E\\cap A^c) \\cap B\] + \\mu^\\ast\[(E\\cap (A\\cup B)^c\]\\\\ &amp; \\geq \\mu^\\ast\[E\\cap (A\\cup B)\] + \\mu^\\ast\[E\\cap (A\\cup B)^c\] \\end{align\*} \\\]
>
> showing that \\(A\\cup B\\) is \\(\\mu^\\ast\\)-measurable.
>
> In particular \\(\\mathcal{M}\\) is a ring.
>
> **Step 4 - stability under countable union**: Since \\(\\mathcal{M}\\) is a ring, it is enough to show that \\(\\cup A\_n\\) is \\(\\mu^\\ast\\)-measurable for any countable family \\((A\_n)\\) of pairwise disjoints \\(\\mu^\\ast\\)-measurable sets. Let \\(B\_n =\\cup\_{k\\leq n} A\_k\\) which is measurable for each \\(n\\). By induction, it holds that \\(\\mu^\\ast\[E\\cap B\_n\] = \\sum\_{k\\leq n} \\mu^\\ast\[E\\cap A\_k\]\\) for any set \\(E\\subseteq X\\). Indeed \\(B\_n\\) is \\(\\mu^\\ast\\)-measurable and \\(\\mu^\\ast\[E \\cap B\_{n+1}\] = \\mu^\\ast\[E\\cap B\_{n+1}\\cap B\_n \] + \\mu^\\ast\[E \\cap B\_{n+1}\\cap B\_n^c\] = \\mu^\\ast\[E\\cap B\_n\] + \\mu^\\ast\[E\\cap A\_{n+1}\]\\). By monotonicity, it also holds that
>
> \\\[ \\mu^\\ast\[E \\cap A\] \\geq \\sup\_n \\mu^\\ast\[E \\cap B\_n\] = \\sum \\mu^\\ast\[E \\cap A\_k\] \\\]
>
> which together with sub-additivity yields \\(\\mu^\\ast\[E\\cap A\] = \\sum \\mu^\\ast\[E\\cap A\_n\]\\). Hence, for any \\(E\\) we get
>
> \\\[ \\mu^\\ast\[E\] = \\mu^\\ast\[E\\cap B\_n\] + \\mu^\\ast\[E\\cap B\_n^c\]\\geq \\sum\_{k\\leq n}\\mu^\\ast\[E\\cap B\_k\]+\\mu^\\ast\[E\\cap A^c\] \\\]
>
> from which follows that \\(\\mu^\\ast\[E\]\\geq \\mu^\\ast\[E\\cap A\] + \\mu^\\ast\[E\\cap A^c\]\\) showing that \\(A = \\cup A\_n\\) is \\(\\mu^\\ast\\)-measurable. Thus \\(\\mathcal{M}\\) is a \\(\\sigma\\)-Algebra.
>
> The fact that \\(\\mu^\\ast\\) restricted to \\(\\mathcal{M}\\) is immediate since it is \\(\\sigma\\)-sub-additive.

## Carathéodory's Extension Theorem Proof

We are now in position to show the proof of Carathéodory's extension theorem.

> [!NOTE]
>
> **Proof: Carathéodory's Extension Theorem**
>
> From the previous results, we know that we can extend uniquely \\(\\mu\\) to a \\(\\sigma\\)-additive and finite measure to the ring \\(\\mathcal{R}\\) generated by \\(\\mathcal{S}\\).
>
> We define the set function
>
> \\\[ \\mu^\\ast\[E\]:= \\inf \\left\\{ \\sum \\mu^\\ast\[A\_n\] \\colon E\\subseteq \\cup A\_n \\colon (A\_n) \\text{ is a countable family in }\\mathcal{R} \\right\\} \\\]
>
> By definition, \\(\\mu^\\ast\\) coincides with \\(\\mu\\) on \\(\\mathcal{R}\\). Let us show that \\(\\mu^\\ast\\) is an outer measure. Clearly, \\(\\mu^\\ast\[\\emptyset\] = 0\\). Let us show that \\(\\mu^\\ast\\) is \\(\\sigma\\)-sub-additive by taking a countable family \\((E\_n)\\) and \\(E\\) of sets such that \\(E\\subseteq \\cup E\_n\\). Since if \\(\\mu^\\ast\[E\_n\] = \\infty\\) for some \\(n\\), then trivialy it holds that \\(\\mu^\\ast\[E\]\\leq \\sum \\mu^\\ast\[E\_n\]\\), we can then assume that \\(\\mu^\\ast\[E\_n\]\<\\infty\\) for any \\(n\\). Choose families \\((A\_{nk})\\) in \\(\\mathcal{R}\\) such that \\(E\_n \\subseteq\_k A\_{nk}\\) and \\(\\sum\_k \\mu^\\ast\[A\_{nk}\] \\leq \\mu^\\ast\[E\_n\] + \\varepsilon 2^{-k}\\). It follows that \\(E\\subseteq \\cup\_{nk}A\_{nk}\\) and
>
> \\\[ \\mu^\\ast\[E\]\\leq \\sum\_{nk}\\mu^\\ast\[A\_{nk}\] \\leq \\sum \\mu^\\ast\[E\_n\] + \\varepsilon \\\]
>
> which by arbitrariness of \\(\\varepsilon\\) show \\(\\sigma\\)-subadditivity.
>
> From the previous Theorem on outer measure, it follows that the set \\(\\mathcal{M}\\) of \\(\\mu^\\ast\\)-measurable sets is a \\(\\sigma\\)-algebra on which \\(\\mu^\\ast\\) is a measure. Since any element of \\(\\mathcal{R}\\) is \\(\\mu^\\ast\\)-measurable, it follows that \\(\\sigma(\\mathcal{R})\\subseteq \\mathcal{M}\\).
>
> Hence \\(\\mu^\\ast\\) defines a measure on \\(\\sigma(\\mathcal{R})\\) coinciding with \\(\\mu\\) on \\(\\mathcal{R}\\) which ends the proof.

> [!NOTE]
>
> **Example: Lebesgue/Stieljes measure**
>
> From the previous derivation together with this extension theorem, we conclude that the Lebesgue/Stieljes measure is indeed a measure.
