# Introduction/Notations

After treating the notion of measurable spaces and measures, we will now address integration. However this lecture is about stochastics and therefore, even if many notions extends to more general theory we will stick to probability spaces. To do so, let us first fix the probabilistic historical jargon and notations.

- \\((\\Omega, \\mathcal{F}, P)\\) is called a **probability space** if \\(\\mathcal{F}\\) is a \\(\\sigma\\)-algebra on \\(\\mathcal{F}\\) and \\(P\\) is a finite measure with \\(P\[\\Omega\] = 1\\);
- Elements of \\(\\Omega\\) are called **states** and usually denoted by \\(\\omega\\);
- Elements of \\(\\mathcal{F}\\) are called **events**;
- The measure \\(P\[A\]\\) of an event \\(A\\) is called the \*\*probability of \*\* \\(A\\).
- A **random variable** is a measurable function from \\(\\Omega\\) to \\(\\mathbb{R}\\) where \\(\\mathbb{R}\\) is endowed with the Borel \\(\\sigma\\)-algebra. Usually, random variables are denoted with capital letters \\(X, Y, Z, \\cdots\\)

As mentioned, the following does not change if you assume that \\(P\\) is a \\(\\sigma\\)-finite measure.

Throughout, we denote by \\(\\mathcal{L}^0:=\\mathcal{L}^0(\\Omega,\\mathcal{F})\\) the set of all random variables. Given a random variable \\(X\\), we also use the following shorthand notations for events:

\\\[ \\begin{align\*} \\{X \\in B\\} &amp; := \\{\\omega \\in \\Omega\\colon X(\\omega)\\in B\\}\\\\ \\{X \\leq t\\} &amp; := \\{\\omega \\in \\Omega\\colon X(\\omega)\\leq t\\} \\ldots \\end{align\*} \\\]

for \\(B \\in \\mathcal{F}\\) and \\(t\\in \\mathbb{R}\\).

As for the measure of these events, we adopt the notations:

\\\[ P\[X \\in B\] := P\[\\{X \\in B\\}\], \\quad P\[X\\leq t\]:= P\[\\{X \\leq t\\}\], \\dots \\\]

Given an event \\(A\\) we define the **indicator function** \\(1\_A\\) as the function:

\\\[ \\begin{equation} \\begin{split} 1\_A\\colon \\Omega &amp;\\longrightarrow \\mathbb{R}\\\\ \\omega &amp;\\longmapsto 1\_A(\\omega)= \\begin{cases} 1 &amp;\\text{if } \\omega \\in A\\\\ 0 &amp;\\text{otherwise} \\end{cases} \\end{split} \\end{equation} \\\]

![Indicator Function](<https://www.samuel-drapeau.info/SP_Lecture/images/indicator_dark.svg#only-dark>) ![Indicator Function](<https://www.samuel-drapeau.info/SP_Lecture/images/indicator_white.svg#only-light>)

Throughout, we will also deal with *extended real-valued* random variables, that is, functions \\(X:\\Omega \\to \[-\\infty,\\infty\]\\) which are measurable.  
We denote this set by \\(\\bar{\\mathcal{L}}^0\\).

Note that for \\(X \\in \\bar{\\mathcal{L}}^0\\), we can write:

\\\[ X=-\\infty 1\_A +Y1\_B+\\infty1\_C \\\]

where \\(A\\), \\(B\\), and \\(C\\) are pairwise disjoint and \\(Y\\in \\mathcal{L}^0\\).

Further, we denote by \\(\\mathcal{L}^0\_+\\) or \\(\\bar{\\mathcal{L}}^0\_+\\) the set of those random variables or extended real-valued random variables that are positive.

---

This chapter is divided as follows

- [Expectation, Lebesgue's Convergence](<https://www.samuel-drapeau.info/SP_Lecture/lecture/03-Integration/031-expectation/index.md>)
- [\\(L^p\\)-Spaces and Classical Inequalities](<https://www.samuel-drapeau.info/SP_Lecture/lecture/03-Integration/032-lp-spaces-inequalities/index.md>)
- [Radon-Nykodym and Conditional Expectation](<https://www.samuel-drapeau.info/SP_Lecture/lecture/03-Integration/033-radon-nikodym-cond-exp/index.md>)
- [Independence](<https://www.samuel-drapeau.info/SP_Lecture/lecture/03-Integration/034-independence/index.md>)
- [Funini-Tonelli](<https://www.samuel-drapeau.info/SP_Lecture/lecture/03-Integration/035-fubini-tonelli/index.md>)
- [Uniform Integrability](<https://www.samuel-drapeau.info/SP_Lecture/lecture/03-Integration/036-uniform-integrability/index.md>)
