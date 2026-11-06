# Fubini-Tonelli, Stochastic Kernel

The theorem of Fubini-Tonelli is concerned with the definition of sound product measures on finite product spaces and their properties. To do so, we will make use of Carathéodory's extension Theorem. In the following, we consider the two-dimensional case.

Let \\((\\Omega\_1,\\mathcal{F}\_1)\\) and \\((\\Omega\_2, \\mathcal{F}\_2)\\) be two measurable spaces and define \\(\\Omega =\\Omega\_1 \\times \\Omega\_2\\) endowed with the product \\(\\sigma\\)-algebra \\(\\mathcal{F}=\\mathcal{F}\_1\\otimes \\mathcal{F}\_2\\).

> [!NOTE]
>
> **Proposition**
>
> Let \\(A\\) be an event in the product \\(\\sigma\\)-algebra \\(\\mathcal{F}=\\mathcal{F}\_1\\otimes \\mathcal{F}\_2\\) and \\(X\\colon \\Omega \\to \\mathbb{R}\\) be a measurable function. Define
>
> \\\[ \\begin{align} A\_{\\omega\_1} &amp; :=\\{\\omega\_2\\in \\Omega\_2\\colon (\\omega\_1,\\omega\_2)\\in A\\}\\subseteq \\Omega\_2, &amp;\\quad A\_{\\omega\_2} &amp; :=\\{\\omega\_1\\in \\Omega\_1\\colon (\\omega\_1,\\omega\_2)\\in A\\}\\subseteq \\Omega\_1,\\\\ X\_{\\omega\_1} &amp; :=X(\\omega\_1,\\cdot):\\Omega\_2\\to \\mathbb{R}, &amp;\\quad X\_{\\omega\_2} &amp; :=X(\\cdot,\\omega\_2):\\Omega\_1\\to \\mathbb{R}. \\end{align} \\\]
>
> Then it holds that \\(A\_{\\omega\_1}\\) and \\(A\_{\\omega\_2}\\) are events in \\(\\mathcal{F}\_2\\) and \\(\\mathcal{F}\_1\\) respectively. Furthermore, \\(X\_{\\omega\_1}\\) is \\(\\mathcal{F}\_2\\)-measurable, and \\(X\_{\\omega\_2}\\) is \\(\\mathcal{F}\_1\\)-measurable.

> [!NOTE]
>
> **Proof**
>
> Let \\(\\mathcal{C}\\) be the collection of those \\(A\\in\\mathcal{F}\\) such that \\(A\_{\\omega\_2}\\times A\_{\\omega\_1}\\) is in \\(\\mathcal{F}\_1\\times \\mathcal{F}\_2\\). It clearly holds that \\(\\mathcal{F}\_1\\times \\mathcal{F}\_2\\subseteq \\mathcal{C}\\). Direct inspection shows that \\(\\mathcal{C}\\) is a \\(\\sigma\\)-algebra, and therefore
>
> \\\[ \\mathcal{F}=\\sigma(\\mathcal{F}\_1\\times \\mathcal{F}\_2)\\subseteq \\mathcal{C}\\subseteq \\mathcal{F}, \\\]
>
> showing the first assertion.
>
> As for the second point, let \\(B\\) be a Borel set in \\(\\mathbb{R}\\). It follows that \\(\\{X\_{\\omega\_1}\\in B\\}=\\{X\\in B\\}\_{\\omega\_1}\\), which is an element of \\(\\mathcal{F}\_2\\) by what has just been shown. Hence, \\(X\_{\\omega\_1}\\) is \\(\\mathcal{F}\_2\\)-measurable. The same argumentation holds for \\(X\_{\\omega\_2}\\).

> [!NOTE]
>
> **Definition: Stochastic Kernel**
>
> A *stochastic kernel* on \\(\\Omega\_1\\times \\mathcal{F}\_2\\) is a function \\(K\\colon \\Omega\_1\\times \\mathcal{F}\_2\\to \[0,1\]\\) such that
>
> 1. \\(\\omega\_1\\mapsto K(\\omega\_1,A\_2)\\) is \\(\\mathcal{F}\_1\\)-measurable for every event \\(A\_2\\) in \\(\\mathcal{F}\_2\\).
> 2. \\(A\_2\\mapsto K(\\omega\_1,A\_2)\\) is a probability measure on \\(\\mathcal{F}\_2\\) for every \\(\\omega\_1 \\in \\Omega\_1\\).

A stochastic kernel is, in some sense, a measurable family of probability measures on \\(\\mathcal{F}\_1\\), one for each state \\(\\omega\_1\\) in \\(\\Omega\_1\\). A special case of a stochastic kernel is the constant one \\(K(\\omega\_1,\\cdot)=P\_2\\) for all states \\(\\omega\_1\\) in \\(\\Omega\_1\\), where \\(P\_2\\) is a probability measure on \\(\\mathcal{F}\_2\\).

Given a probability measure \\(P\_1\\) on \\(\\mathcal{F}\_1\\), we want to define a probability measure \\(P\\) on the product \\(\\sigma\\)-algebra \\(\\mathcal{F}\\) such that

\\\[ P\[A\]=\\int\_{\\Omega\_1}\\left( \\int\_{\\Omega\_2}1\_A(\\omega\_1,\\omega\_2)K(\\omega\_1,d\\omega\_2) \\right)P\_1(d\\omega\_1). \\\]

This is the subject of the following theorem.

> [!NOTE]
>
> **Stochastic variant of Tonelli's Theorem**
>
> Let \\(P\_1\\) be a measure on \\(\\mathcal{F}\_1\\) and \\(K\\) a stochastic kernel on \\(\\Omega\_1\\times \\mathcal{F}\_2\\). Then there exists a unique probability measure \\(P\\) on \\(\\mathcal{F}\\) such that for every positive random variable \\(X\\colon \\Omega \\to \\mathbb{R}\\), it holds
>
> \\\[ E\_P\\left\[ X \\right\]=\\int\_{\\Omega\_1}\\left( \\int\_{\\Omega\_2} X(\\omega\_1,\\omega\_2)K(\\omega\_1,d\\omega\_2) \\right)P\_1(d\\omega\_1) \\\]
>
> In particular,
>
> \\\[ P\[A\]=\\int\_{\\Omega\_1}K(\\omega\_1, A\_{\\omega\_1})P\_1(d\\omega\_1) \\\]
>
> for any event \\(A\\) in \\(\\mathcal{F}\\).

> [!NOTE]
>
> **Proof**
>
> Define \\(\\mathcal{R}=\\mathcal{F}\_1\\times \\mathcal{F}\_2\\) and the set function \\(P\\colon \\mathcal{R}\\to \[0,1\]\\) given by
>
> \\\[ P\[A\]=\\int\_{A\_1}K(\\omega\_1,A\_2)P\_1(d\\omega\_1) \\\]
>
> For any element \\(A\_1 \\times A\_2\\) in $\\mathcal{R}. Inspection shows that \\(\\mathcal{R}\\) is a semi-ring that contains \\(\\Omega\\). To apply Carathéodory’s extension Theorem, we must show that \\(P\\) is a \\(\\sigma\\)-additive pre-measure.
>
> It clearly holds that \\(P\[\\emptyset\]=0\\) and
>
> \\\[ P\[\\Omega\]=\\int\_{\\Omega\_1}K(\\omega\_1,\\Omega\_2)P\_1\[d\\omega\_1\]=\\int\_{\\Omega\_1}P\_1\[d\\omega\_1\]=1. \\\]
>
> Let \\((A\_1^n\\times A\_2^n)\\) be a sequence of pairwise disjoint elements of \\(\\mathcal{R}\\) such that \\(\\cup A\_1^n\\times A\_2^n=A\_1\\times A\_2\\) in \\(\\mathcal{R}\\) for some \\(A\_1\\in \\mathcal{F}\_1\\) and \\(A\_2 \\in \\mathcal{F}\_2\\) and define the functions
>
> \\\[ \\begin{aligned} X\_n(\\omega\_1)&amp;:=1\_{A\_1^n}(\\omega\_1)K(\\omega\_1,A\_2^n)=\\int\_{\\Omega\_2}1\_{A\_1^n\\times A\_2^n}(\\omega\_1,\\omega\_2)K(\\omega\_1,d\\omega\_2),\\\\ X(\\omega\_1)&amp;:=1\_{A\_1}(\\omega\_1)K(\\omega\_1,A\_2)=\\int\_{\\Omega\_2}1\_{A\_1\\times A\_{2}}(\\omega\_1,\\omega\_2)K(\\omega\_1,d\\omega\_2). \\end{aligned} \\\]
>
> Furthermore, due to the pairwise disjointness of \\((A\_1^n\\times A\_2^n)\\), as well as monotone convergence, it follows that
>
> \\\[ \\sum X\_n(\\omega\_1)=\\int\_{\\Omega\_1}\\sum 1\_{A\_1^n\\times A\_2^n}(\\omega\_1,\\omega\_2)K(\\omega\_1,d\\omega\_2)=\\int\_{\\Omega\_2}1\_{\\cup A\_1^n\\times A\_2^n}K(\\omega\_1,d\\omega\_2)=X(\\omega\_1) \\\]
>
> for any state \\(\\omega\_1\\) in \\(\\Omega\_1\\).  
> Hence, once again, monotone convergence yields
>
> \\\[ P\[A\_1\\times A\_2\]=\\int\_{\\Omega\_1}X(\\omega\_1)P\_1(d\\omega\_1)=\\sum\\int\_{\\Omega\_1}X\_n(\\omega\_1)P\_1(d\\omega\_1)=\\sum P\[A\_1^n\\times A\_2^n\]. \\\]
>
> showing the \\(\\sigma\\)-additivity.
>
> It follows that we can apply Carathéodory's extension Theorem, ensuring the existence of a unique measure \\(P\\) on \\(\\mathcal{F}\\) satisfying
>
> \\\[ P\[A\_1\\times A\_2\]=\\int\_{A\_1}K(\\omega\_1,A\_2)P\_{1}(d\\omega\_1), \\quad A\_1 \\times A\_2 \\in \\mathcal{F}\_1\\times \\mathcal{F}\_2. \\\]
>
> Let us now show that
>
> \\\[ P\[A\]=\\int\_{\\Omega\_1}K(\\omega\_1, A\_{\\omega\_1})P\_1(d\\omega\_1) \\\]
>
> holds. Define the collection \\(\\mathcal{C}\\) of those events \\(A\\) in \\(\\mathcal{F}\\) such that this relation holds.  
> For \\(A=A\_1\\times A\_2\\), it follows that \\(A\_{\\omega\_1}=A\_2\\) if \\(\\omega\_1 \\in A\_1\\) and \\(\\emptyset\\) otherwise. It follows that
>
> \\\[ K(\\omega\_1,A\_{\\omega\_1})=1\_{A\_1}(\\omega\_1)K(\\omega\_1,A\_2), \\\]
>
> showing that \\(\\mathcal{F}\_1\\times \\mathcal{F}\_2\\subseteq \\mathcal{C}\\).  
> In particular, \\(\\Omega \\in \\mathcal{C}\\). Furthermore, for every pairwise disjoint sequence \\((A^n)\\) of elements in \\(\\mathcal{C}\\), denoting \\(A=\\cup A^n\\), it follows from monotone convergence that
>
> \\\[ \\begin{align} P\\left\[ A\\right\]&amp;=\\sum P\[A^n\] =\\int\_{\\Omega\_1}\\sum K(\\omega\_1,A\_{\\omega\_1}^n)P\_1(d\\omega\_1)\\\\ &amp;=\\int\_{\\Omega\_1}K(\\omega\_1,\\cup A\_{\\omega\_1}^n)P(d\\omega\_1) =\\int\_{\\Omega\_1}K(\\omega\_1,A\_{\\omega\_1})P(d\\omega\_1) \\end{align} \\\]
>
> showing that \\(A \\in \\mathcal{C}\\). Finally, for \\(A \\in \\mathcal{C}\\), it follows that
>
> \\\[ P\[A^c\]=1-P\[A\] =\\int\_{\\Omega\_1} \\left( 1-K(\\omega\_1,A\_{\\omega\_1}) \\right)P(d\\omega\_1) =\\int\_{\\Omega\_1} K(\\omega\_1,A\_{\\omega\_1}^c)P(d\\omega\_1) \\\]
>
> showing that \\(A^c \\in \\mathcal{C}\\). Hence, \\(\\mathcal{C}\\) is a \\(\\lambda\\)-system that contains the \\(\\pi\\)-system \\(\\mathcal{F}\_1\\times \\mathcal{F}\_2\\). Hence, by Dynkin's \\(\\pi\\)-\\(\\lambda\\) lemma, it follows that
>
> \\\[ \\sigma(\\mathcal{F}\_1\\times \\mathcal{F}\_2)\\subseteq \\mathcal{C}\\subseteq \\mathcal{F}=\\sigma(\\mathcal{F}\_1\\times \\mathcal{F}\_2) \\\]
>
> showing that \\(\\mathcal{C}=\\mathcal{F}\\), that is, showing that the second equation of the Theorem holds for any event \\(A\\) in \\(\\mathcal{F}\\).
>
> As for expectation equality from the theorem, it follows from the fact that every positive random variable \\(X\\colon\\Omega \\to \\mathbb{R}\\) can be approximated by step functions, ending the proof.

> [!NOTE]
>
> **Definition: Product Measure**
>
> With the notations of Theorem the previous theorem, we denote this unique measure by \\(P=P\_1\\otimes K\\).
>
> In the case where \\(K(\\omega\_1,\\cdot)=P\_2\\) for all \\(\\omega\_1 \\in \\Omega\_1\\) for some measure \\(P\_2\\) on \\(\\mathcal{F}\_2\\), then \\(P\\) is called the **product measure** of \\(P\_1\\) and \\(P\_2\\) on the product space and is denoted by \\(P=P\_1\\otimes P\_2\\).

In the case of a product measure, due to symmetry, it holds in particular

\\\[ \\int\_{\\Omega}X(\\omega)P(d\\omega)=\\int\_{\\Omega\_1}\\left( \\int\_{\\Omega\_2}X(\\omega\_1,\\omega\_2) P\_2(d\\omega\_2)\\right)P\_1(d\\omega\_1)=\\int\_{\\Omega\_2}\\left( \\int\_{\\Omega\_1}X(\\omega\_1,\\omega\_2) P\_1(d\\omega\_1)\\right)P\_2(d\\omega\_2). \\\]

> [!NOTE]
>
> **Corollary**
>
> Let \\(X\\) be a positive random variable on some probability space \\((\\Omega,\\mathcal{F},P)\\). Then it holds
>
> \\\[ E\[X\]=\\int\_{0}^\\infty P\\left\[ X\>x \\right\]\\lambda(dx), \\\]
>
> where \\(\\lambda\\) is the Lebesgue measure on \\(\\mathbb{R}\\).

> [!NOTE]
>
> **Proof**
>
> For almost all state \\(\\omega\\) in \\(\\Omega\\), we have \\(X(\\omega)\\geq 0\\), and therefore
>
> \\\[ X(\\omega)=\\int\_{0}^{X(\\omega)}\\lambda(dx)=\\int\_{0}^{\\infty}1\_{\\{X(\\omega)\>x\\}}\\lambda(dx), \\\]
>
> where \\(\\lambda\\) is the Lebesgue measure on \\(\\mathbb{R}\\). Since \\((\\omega,x)\\mapsto 1\_{\\{X(\\omega)\>x\\}}\\) is a \\(\\mathcal{F}\\otimes \\mathcal{B}(\\mathbb{R}\_+)\\)-measurable function, by Fubini-Tonelli for the product measure \\(P\\otimes \\lambda\\), it holds
>
> \\\[ \\begin{align} E\\left\[ X \\right\] &amp;=\\int\_{\\Omega} \\left(\\int\_{0}^{\\infty} 1\_{\\{X(\\omega)\>x\\}}\\lambda(dx)\\right)P(d\\omega) \\\\ &amp;=\\int\_{\\Omega\\times \\mathbb{R}\_+} 1\_{\\{X(\\omega)\>x\\}}P\\otimes \\lambda(d\\omega dx) \\\\ &amp;=\\int\_{0}^{\\infty} \\left(\\int\_{\\Omega} 1\_{\\{X(\\omega)\>x\\}}P(d\\omega)\\right)\\lambda(dx) \\\\ &amp;=\\int\_{0}^{\\infty} E\\left\[ 1\_{\\{X\>x\\}} \\right\]\\lambda(dx) \\\\ &amp;=\\int\_{0}^{\\infty} P\\left\[ X\>x \\right\]\\lambda(dx). \\end{align} \\\]

We now address the stochastic variant of Fubini's theorem since we considered a stochastic kernel instead of a simple probability measure. Let \\(X\\) and \\(Y\\) be two random variables on some probability space \\((\\Omega,\\mathcal{F},P)\\). We consider the probability measure \\(P\_{(X,Y)}\\) on the product Borel \\(\\sigma\\)-algebra of \\(\\mathbb{R}^2\\) given by

\\\[ P\_{(X,Y)}\[B\]=P\\left\[ (X,Y)\\in B \\right\] \\\]

for any Borel set \\(B\\) on \\(\\mathbb{R}^2\\). We suppose that this joint distribution \\(P\_{(X,Y)}\\) can be decomposed into \\(P\_1\\otimes K\\) for some probability measure \\(P\_1\\) on \\(\\mathcal{B}(\\mathbb{R})\\) and a stochastic kernel \\(K\\) on \\(\\mathbb{R}\\times \\mathcal{B}(\\mathbb{R})\\). We will see later that this is always the case. Note that by Tonelli's Theorem, it holds

\\\[ \\begin{align} P\_X\[B\_1\]&amp;=P\[X\\in B\_1\]=P\\left\[ (X,Y)\\in B\_1\\times \\mathbb{R} \\right\]=P\_{(X,Y)}\[B\_1\\times \\mathbb{R}\]\\\\ &amp;=\\int\_{\\mathbb{R}}1\_{B\_1}(x)K(x,\\mathbb{R})P\_1(dx)=\\int\_{\\mathbb{R}}1\_{B\_1}(x)P\_1(dx)=P\_1\[B\_1\] \\end{align} \\\]

showing that \\(P\_X=P\_1\\), justifying therefore the notation \\(P\_{(X,Y)}=P\_X\\otimes K\_{Y|X}\\).

> [!NOTE]
>
> **Theorem**
>
> Let \\(X\\) and \\(Y\\) be two random variables whose joint distribution is given by \\(P\_X\\otimes K\_{Y|X}\\), where \\(P\_X\\) is the distribution of \\(X\\) and \\(K\_{Y|X}\\) is a stochastic kernel on \\(\\mathbb{R}\\times \\mathcal{B}(\\mathbb{R})\\).
>
> For every positive random variable \\(g\\colon \\mathbb{R}^2\\to \\mathbb{R}\_+\\) such that \\(g(X,Y)\\) is integrable, it holds
>
> \\\[ E\\left\[ g(X,Y)|\\sigma(X) \\right\]=\\int\_{\\mathbb{R}}g(X,y)K\_{Y|X}(X,dy) \\\]
>
> \\(P\\)-almost surely.

This relation means that for \\(P\\)-almost all \\(\\omega \\in \\Omega\\), it holds

\\\[ E\\left\[ g(X,Y)|\\sigma(X) \\right\](\\omega)=\\int\_{\\mathbb{R}}g(X(\\omega),y)K\_{Y|X}(X(\\omega),dy). \\\]

> [!NOTE]
>
> **Proof**
>
> From Tonelli's Theorem's proof, the function \\(x\\mapsto h(x):=\\int\_{\\mathbb{R}}g(x,y)K\_{Y|X}(x,dy)\\) for \\(x\\) in \\(\\mathbb{R}\\), is measurable, and therefore
>
> \\\[ h(X)=\\int\_{\\mathbb{R}}g(X,y)K\_{Y|X}(X,dy) \\\]
>
> is a positive random variable. Let \\(A\\) be an event in \\(\\sigma(X)\\). It follows that \\(A=X^{-1}(B)\\) for some Borel set \\(B \\in \\mathbb{R}\\). Therefore,
>
> \\\[ \\begin{align} E\\left\[ 1\_{A}g(X,Y) \\right\] &amp;= E\\left\[ 1\_{B}(X)g(X,Y) \\right\] \\\\ &amp;=\\int\_{\\mathbb{R}^2} 1\_{B}(x)g(x,y)P\_X\\otimes K\_{Y|X}(dx,dy) \\\\ &amp;=\\int\_{\\mathbb{R}}\\left( \\int\_{\\mathbb{R}}1\_B(x)g(x,y) K\_{Y|X}(x,dy)\\right)P\_X(dx) \\\\ &amp;=\\int\_{\\mathbb{R}}1\_{B}(x)\\left( \\int\_{\\mathbb{R}}g(x,y) K\_{Y|X}(x,dy)\\right)P\_X(dx) \\\\ &amp;=\\int\_{\\mathbb{R}}1\_B(x)h(x)P\_{X}(dx) \\\\ &amp;=E\\left\[ 1\_A h(X) \\right\]. \\end{align} \\\]
>
> This concludes the proof.

> [!NOTE]
>
> **Remark**
>
> As in the previous theorem, let \\(X\\) and \\(Y\\) be two random variables whose joint distribution is given by \\(P\_{(X,Y)}\\). Suppose that \\(P\_{(X,Y)}\\) is absolutely continuous with respect to the Lebesgue measure on \\(\\mathbb{R}^2\\). It follows that there exists a Lebesgue-almost surely unique positive function \\(f\_{(X,Y)}\\colon \\mathbb{R}^2\\to \\mathbb{R}\\) with expectation \\(1\\) such that
>
> \\\[ E\\left\[ g(X,Y) \\right\]=\\int\_{\\mathbb{R}^2} g(x,y)f\_{(X,Y)}(x,y)dxdy. \\\]
>
> It follows that the density of \\(X\\) and \\(Y\\) are respectively given by
>
> \\\[ f\_X(x)=\\int\_{\\mathbb{R}} f\_{(X,Y)}(x,y)dy\\quad \\text{and}\\quad f\_{Y}(y)=\\int\_{\\mathbb{R}} f\_{(X,Y)}(x,y)dx. \\\]
>
> By defining
>
> \\\[ f\_{Y|X}(x,y)=\\frac{f\_{(X,Y)}(x,y)}{f\_{X}(x)}1\_{\\{f\_X(x)\>0\\}}+f\_{Y}(y)1\_{\\{f\_X(x)=0\\}}, \\\]
>
> inspection shows that
>
> \\\[ K\_{Y|X}(x,A):=\\int\_{A} f\_{Y|X}(x,y)dy \\\]
>
> defines a kernel. It holds
>
> \\\[ \\begin{align} P\_X\\otimes K\_{Y|X}\[A\\times B\]&amp;=\\int\_{\\mathbb{A}} \\left(\\int\_{B} \\frac{f\_{(X,Y)}(x,y)}{f\_{X}(x)}1\_{\\{f\_X(x)\>0\\}}+f\_{Y}(y)1\_{\\{f\_X(x)=0\\}} dy\\right)f\_{X}(x)dx\\\\ &amp;=\\int\_{\\mathbb{A}} \\int\_{B} f\_{(X,Y)}(x,y) dydx=P\_{(X,Y)}\[A\\times B\] \\end{align} \\\]
>
> for every \\(A\\) and \\(B\\) in \\(\\mathcal{B}(\\mathbb{R})\\). From the uniqueness assumption of Fubini-Tonelli's theorem, it follows that
>
> \\\[ P\_{(X,Y)}=P\_X\\otimes K\_{Y|X}. \\\]
>
> And following the theorem, it follows that
>
> \\\[ E\\left\[ g(X,Y) \\right\]=\\int\_{\\mathbb{R}^2} g(x,y)f\_{(X,Y)}(x,y)dxdy=\\int\_{\\mathbb{R}} \\left(\\int\_{\\mathbb{R}} g(x,y)f\_{Y|X}(x,y)dy\\right)f\_{X}(x)dx. \\\]
