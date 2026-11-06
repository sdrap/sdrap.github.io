# Uniform Integrability

In the integration section, we saw the dominated convergence theorem stating that for every sequence \\((X\_n)\\) such that \\(X\_n \\to X\\) in probability, if \\(|X\_n| \\leq Y\\) for \\(Y\\) in \\(L^1\\), then \\(X\_n \\to X\\) in \\(L^1\\). The reciprocal is however not true in the sence that under convergence in probability the convergence in \\(L^1\\) does not implies uniform boundedness by an element in \\(L^1\\).

This fact is related to a deeper issue with \\(L^1\\) that is not encountered for any other \\(L^p\\) spaces for \\(1\<p\<\\infty\\). The following concept of uniform integrability is the correct way to describe those sets that are stable under \\(L^1\\) convergence.

Note first that if \\(X\\) is in \\(L^1\\), then it holds that \\(E\[|X|1\_{X\>n}\] \\to 0\\) as \\(n\\) goes to \\(\\infty\\). Uniform integrability brings this concept to whole families.

> [!NOTE]
>
> **Definition: Uniformly Integrable Families**
>
> A subset \\(\\mathcal{H}\\) of \\(L^1\\) is called **uniformly integrable** if
>
> \\\[ \\sup\_{X \\in \\mathcal{H}}E\\left\[ \\left\\vert X\\right\\vert1\_{\\{\\left\\vert X\\right\\vert\\geq n \\}}\\right\]\\longrightarrow 0. \\\]

We first state two additional equivalent way to state that a family is uniformly integrable. The second one—Boundedness and Tightness—is sometimes refered to as the \\(\\varepsilon\\)-\\(\\delta\\)-criteria. The third one is refered to as the **De la Vallee-Poussin** criteria.

> [!NOTE]
>
> **Proposition**
>
> For a subsets \\(\\mathcal{H}\\) of \\(L^1\\), the following assertions are equivalent:
>
> 1. **Uniform Integrability:** \\(\\mathcal{H}\\) is uniformly integrable.
> 2. **Boundedness and Tightness:**
>
>    - \\(\\mathcal{H}\\) is bounded in \\(L^1\\), that is,
>
>      \\\[ \\sup\_{X \\in \\mathcal{H}}E\[\\left\\vert X\\right\\vert\]\<\\infty. \\\]
>    - For every \\(\\varepsilon\>0\\), there exists \\(\\delta\>0\\) such that
>
>      \\\[ E\\left\[ \\left\\vert X\\right\\vert1\_A \\right\]\\leq \\varepsilon \\\]
>
>      for all \\(X\\) in \\(\\mathcal{H}\\) and event \\(A\\) such that \\(P\[A\]\\leq \\delta\\).
> 3. **De la Vallee Poussin:**  
>    There exists a Borel measurable function \\(\\varphi\\colon \\mathbb{R}\_+\\to \\mathbb{R}\_+\\) such that \\(\\varphi(x)/x\\to \\infty\\) as \\(x \\to \\infty\\) for which
>
>    \\\[ \\sup\_{X \\in \\mathcal{H}}E\\left\[ \\varphi(\\left\\vert X\\right\\vert) \\right\]\<\\infty. \\\]
>
>    This function \\(\\varphi\\) can be chosen increasing and convex.

> [!NOTE]
>
> **Proof**
>
> **Step 1: Uniform integrability implies boundedness and tightness:**
>
> For sufficiently large \\(n\\), we have \\(E\[|X| 1\_{\\{|X|\\geq n\\}}\]\\leq 1\\) for all \\(X\\) in \\(\\mathcal{H}\\). Hence, \\(E\[|X|\]\\leq n+1\\) for all \\(X\\) in \\(\\mathcal{H}\\), showing that \\(\\mathcal{H}\\) is bounded in \\(L^1\\). Let further \\(\\varepsilon\>0\\) and choose \\(n\\) large enough such that \\(E\[| X|1\_{\\{|X|\\geq n\\}}\]\\leq \\varepsilon/2\\) for every \\(X\\) in \\(\\mathcal{H}\\). Setting \\(\\delta=\\varepsilon/(2n)\\), for every event \\(A\\) in \\(\\mathcal{F}\\) such that \\(P\[A\]\\leq \\delta\\), it follows that
>
> \\\[ \\begin{equation} E\\left\[ \\left\\vert X\\right\\vert1\_A \\right\] =E\\left\[ \\left\\vert X\\right\\vert1\_A1\_{\\{\\left\\vert X\\right\\vert\\geq n\\}} \\right\]+E\\left\[ \\left\\vert X\\right\\vert1\_A1\_{\\{\\left\\vert X\\right\\vert\< n\\}} \\right\] \\leq nP\[A\]+\\varepsilon/2\\leq \\varepsilon, \\end{equation} \\\]
>
> showing that uniform integrability implies boundedness and tightness.
>
> **Step 2: Boundedness and tightness implies uniform integrability:**
>
> Denote by \\(M=\\sup\_{X\\in \\mathcal{H}} E\[|X|\]\<\\infty\\) and let \\(\\varepsilon \>0\\). There exists \\(\\delta\>0\\) such that \\(E\[|X|1\_A\]\\leq \\varepsilon\\) for any event \\(A\\) in \\(\\mathcal{F}\\) with \\(P\[A\]\\leq \\delta\\) and every \\(X\\) in \\(\\mathcal{H}\\). Then for any \\(n\\) greater than \\(M/\\delta\\) and any \\(X\\) in \\(\\mathcal{H}\\), Markov's inequality yields
>
> \\\[ P\\left\[ \\left\\vert X\\right\\vert\\geq n \\right\]\\leq \\frac{E\[\\left\\vert X\\right\\vert\]}{n}\\leq \\frac{M}{n}\\leq \\delta. \\\]
>
> Hence, \\(\\sup\_{X\\in \\mathcal{H}}E\\left\[ \\left\\vert X\\right\\vert1\_{\\{\\left\\vert X\\right\\vert\\geq n\\}} \\right\]\\leq \\varepsilon\\) showing the uniform integrability of \\(\\mathcal{H}\\).
>
> **Step 3: De la Vallee-Poussin criteria implies uniform integrability:**
>
> Denote by \\(M=\\sup\_{X \\in \\mathcal{H}}E\[\\varphi(|X|)\]\\). For \\(\\varepsilon\>0\\), there exists \\(n\_\\varepsilon\\) such that \\(\\varphi(x)\\geq x M/\\varepsilon\\) for every \\(x\\geq n\_\\varepsilon\\). Hence,
>
> \\\[ \\begin{align} M &amp;\\geq \\sup\_{X \\in \\mathcal{H}}E\\left\[ \\varphi(|X|) \\right\] \\geq \\sup\_{X \\in \\mathcal{H}}E\\left\[ \\varphi(\\left\\vert X\\right\\vert)1\_{\\{\\left\\vert X\\right\\vert\\geq n\_\\varepsilon\\}} \\right\] \\geq \\frac{M}{\\varepsilon}\\sup\_{X \\in \\mathcal{H}}E \\left\[ \\left\\vert X\\right\\vert1\_{\\{\\left\\vert X\\right\\vert\\geq n\_\\varepsilon\\}} \\right\] \\end{align} \\\]
>
> showing that
>
> \\\[ \\sup\_n \\sup\_{X \\in \\mathcal{H}}E\\left\[ \\left\\vert X\\right\\vert1\_{\\{\\left\\vert X\\right\\vert \\geq n\\}} \\right\]\\leq \\sup\_{X \\in \\mathcal{H}}E\\left\[ \\left\\vert X\\right\\vert1\_{\\{\\left\\vert X\\right\\vert \\geq n\_\\varepsilon\\}} \\right\]\\leq \\varepsilon \\\]
>
> and so the uniform integrability of \\(\\mathcal{H}\\).
>
> **Step 4: Uniform integrability implies de la Valle-Poussin criteria:** Choose a sequence \\((c\_n)\\), which can always be chosen increasing, such that
>
> \\\[ \\sup\_{X \\in \\mathcal{H}}E\[\\left\\vert X\\right\\vert1\_{\\{\\left\\vert X\\right\\vert\\geq c\_n\\}}\]\\leq 1/n^3. \\\]
>
> Define the function \\(\\varphi:\\mathbb{R}\_+\\) as a piecewise linear function, equal to \\(0\\) on \\(\[0,c\_1\]\\) and with derivative equal to \\(n\\) on \\(\[c\_{n},c\_{n+1}\]\\), which implies that \\(\\varphi(x)/x \\to \\infty\\) as \\(x\\to \\infty\\). Note that this function is convex and increasing. It follows that
>
> \\\[ \\begin{equation} E\[\\varphi(\\left\\vert X\\right\\vert)\] =\\sum E\\left\[\\varphi(\\left\\vert X\\right\\vert)1\_{\\{c\_n\\leq \\left\\vert X\\right\\vert\\leq c\_{n+1}\\}}\\right\] =\\sum n\\left( E\\left\[\\left\\vert X\\right\\vert\\wedge c\_{n+1}\\right\]-E\\left\[\\left\\vert X\\right\\vert\\wedge c\_n\\right\] \\right). \\end{equation} \\\]
>
> However
>
> \\\[ \\begin{align} E\\left\[\\left\\vert X\\right\\vert\\wedge c\_{n+1}\\right\]-E\\left\[\\left\\vert X\\right\\vert\\wedge c\_n\\right\] &amp; =E\\left\[\\left\\vert X\\right\\vert1\_{\\{c\_{n}\\leq \\left\\vert X\\right\\vert\< c\_{n+1}\\}}\\right\]+E\\left\[c\_{n+1}1\_{\\{\\left\\vert X\\right\\vert\\geq c\_{n+1}\\}}\\right\] -E\\left\[c\_n1\_{\\{\\left\\vert X\\right\\vert\\geq c\_n\\}}\\right\]\\\\ &amp; \\leq E\\left\[\\left\\vert X\\right\\vert1\_{\\{\\left\\vert X\\right\\vert\\geq c\_n\\}}\\right\]+E\\left\[\\left\\vert X\\right\\vert1\_{\\{\\left\\vert X\\right\\vert\\geq c\_{n+1}\\}}\\right\]\\\\ &amp; \\leq 2/n^3 \\end{align} \\\]
>
> showing that \\(\\sup\_{X \\in \\mathcal{H}}E\[\\varphi(|X|)\]\\leq \\sum 2n/n^3\<\\infty\\).

> [!NOTE]
>
> **Theorem**
>
> Let \\((X\_n)\\) be a sequence of integrable random variables such that \\(X\_n\\to X\\) in probability.(1)
>
> 1. That is, \\(P\[\\left\\vert X\_n-X\\right\\vert\\geq \\varepsilon\]\\to 0\\) for every \\(\\varepsilon\\).
>
> Then, the following assertions are equivalent:
>
> 1. The sequence is uniformly integrable;
> 2. \\(X\_n\\to X\\) in \\(L^1\\);
> 3. \\(\\|X\_n\\|\_1\\to \\|X\\|\_1\\).

> [!NOTE]
>
> **Proof**
>
> **Step1: Uniform integrability implies \\(L^1\\) convergence:** We know that we can find a subsequence \\((Y\_n)\\) of \\((X\_n)\\) that converges \\(P\\)-almost surely to \\(X\\). In particular, \\((Y\_n)\\) is uniformly integrable. Using Fatou's lemma and the \\(L^1\\) boundedness of the family \\((X\_n)\\), it follows that
>
> \\\[ E\[\\left\\vert X\\right\\vert\]\\leq \\liminf E\[\\left\\vert Y\_n\\right\\vert\]\\leq \\sup\_n E\[\\left\\vert Y\_n\\right\\vert\]\<\\infty, \\\]
>
> showing that \\(X \\in L^1\\). It follows that the sequence \\((X\_n-X)\\) is uniformly integrable, and therefore, without loss of generality, we can assume that \\((X\_n)\\) is a uniformly integrable family converging in probability to \\(0\\). For \\(\\varepsilon\>0\\), it holds
>
> \\\[ E\\left\[\\left\\vert X\_n\\right\\vert\\right\]=E\\left\[\\left\\vert X\_n\\right\\vert1\_{\\{\\left\\vert X\_n\\right\\vert\\leq \\varepsilon/2\\}}\\right\]+E\\left\[\\left\\vert X\_n\\right\\vert1\_{\\{\\left\\vert X\_n\\right\\vert\> \\varepsilon/2\\}}\\right\]\\leq \\varepsilon/2+E\\left\[\\left\\vert X\_n\\right\\vert1\_{\\{\\left\\vert X\_n\\right\\vert\> \\varepsilon/2\\}}\\right\]. \\\]
>
> By uniform integrability of the family \\((X\_n)\\) and making use of the \\(\\varepsilon\\)-\\(\\delta\\) criteria, let \\(\\delta\>0\\) such that
>
> \\\[ \\sup\_n E\[\\left\\vert X\_n\\right\\vert1\_A\]\\leq \\varepsilon/2 \\\]
>
> for every \\(A\\in \\mathcal{F}\\) with \\(P\[A\]\\leq \\delta\\). Further, by the convergence of \\((X\_n)\\) in probability to \\(0\\), there exists \\(n\_0\\) such that
>
> \\\[ P\[\\left\\vert X\_n\\right\\vert\> \\varepsilon/2\]\\leq \\delta \\\]
>
> for every \\(n\\geq n\_0\\). Thus, for every \\(n\\geq n\_0\\), it holds
>
> \\\[ E\[\\left\\vert X\_n\\right\\vert\]\\leq \\varepsilon/2+\\sup\_{k\\geq n\_0} E\[\\left\\vert X\_n\\right\\vert1\_{\\{ \\left\\vert X\_n\\right\\vert\>\\varepsilon/2\\}}\]\\leq \\varepsilon, \\\]
>
> showing that \\(X\_n\\) converges to \\(0\\) in \\(L^1\\).
>
> **Step 2: Convergence in \\(L^1\\) implies the convergence of the norms:** This step is trivial from
>
> \\\[ \\left\\vert\\left\\vert x\\right\\vert-\\left\\vert y\\right\\vert\\right\\vert\\leq \\left\\vert x-y\\right\\vert. \\\]
>
> **Step 3: Convergence of the norms implies uniform integrability:** For \\(M\>0\\), define \\(\\varphi\_M\\) as the identity on \\(\[0,M-1\]\\), \\(0\\) on \\(\[M,\\infty)\\), and linearly interpolated elsewhere. Let \\(\\varepsilon\>0\\). Using the dominated convergence theorem, choose \\(M\\) such that
>
> \\\[ E\[\\left\\vert X\\right\\vert\]-E\[\\varphi\_M(\\left\\vert X\\right\\vert)\]\\leq \\varepsilon/2, \\\]
>
> since \\(\\varphi\_M(\\left\\vert X\\right\\vert)\\) converges to \\(|X|\\) and is dominated by \\(\\left\\vert X\\right\\vert \\in L^1\\). By continuity of \\(\\varphi\_M\\), it follows that
>
> \[ \\varphi\_M(\\left\\vert X\_n\\right\\vert)\\to \\varphi\_M(\\left\\vert X\\right\\vert) \] in probability. Since \\(\\varphi\_M(\\left\\vert X\_n\\right\\vert)\\leq M\\) for every \\(n\\), the dominated convergence theorem yields
>
> \\\[ E\[\\varphi\_M(\\left\\vert X\_n\\right\\vert)\]\\to E\[\\varphi\_M(\\left\\vert X\\right\\vert)\]. \\\]
>
> Hence, together with \\(E\[\\left\\vert X\_n\\right\\vert\]\\to E\[\\left\\vert X\\right\\vert\]\\), there exists some integer \\(n\_0\\) such that
>
> \\\[ E\[\\left\\vert X\_n\\right\\vert\]-E\[\\left\\vert X\\right\\vert\]\\leq \\varepsilon/4\\quad \\text{and}\\quad E\[\\varphi\_M(\\left\\vert X\\right\\vert)\]-E\[\\varphi\_M(\\left\\vert X\_n\\right\\vert)\]\\leq \\varepsilon/4 \\\]
>
> for every \\(n\\geq n\_0\\). Henceforth,
>
> \\\[ E\\left\[\\left\\vert X\_n\\right\\vert1\_{\\{\\left\\vert X\_n\\right\\vert\\geq M\\}}\\right\]\\leq E\[\\left\\vert X\_n\\right\\vert\]-E\[\\varphi\_M(\\left\\vert X\_n\\right\\vert)\]\\leq \\varepsilon/2+E\[\\left\\vert X\\right\\vert\]-E\[\\varphi\_M(\\left\\vert X\\right\\vert)\]\\leq \\varepsilon \\\]
>
> for every \\(n\\geq n\_0\\). Increasing the value of \\(M\\) ensures this inequality remains true for the remaining \\(n\\geq n\_0\\), concluding the uniform integrability of \\((X\_n)\\).

> [!NOTE]
>
> **Theorem**
>
> - Let \\(X\\) be an integrable random variable and \\((\\mathcal{F}\_i)\\) an arbitrary family of \\(\\sigma\\)-algebras \\(\\mathcal{F}\_i\\subseteq \\mathcal{F}\\). Then, \\((E\[X|\\mathcal{F}\_i\])\\) is uniformly integrable.
> - Let \\((X\_i)\\) be a family of random variables bounded in \\(L^p\\) for \\(1\<p\\leq \\infty\\). Then, \\((X\_i)\\) is uniformly integrable.

> [!NOTE]
>
> **Proof**
>
> Since \\(X\\) is integrable, it is in particular uniformly integrable. Therefore, there exists a convex function \\(\\varphi\\) with \\(\\varphi(x)/x\\to \\infty\\) such that \\(E\[\\varphi(|X|)\]\<\\infty\\). By the conditional version of Jensen's inequality and the tower property, it follows that
>
> \\\[ E\\left\[ \\varphi\\left( \\left| E\[X|\\mathcal{F}\_i\] \\right| \\right) \\right\]\\leq E\\left\[ \\varphi\\left( E\\left\[ |X||\\mathcal{F}\_i \\right\] \\right) \\right\]\\leq E\\left\[ E\\left\[ \\varphi(|X|)|\\mathcal{F}\_i \\right\] \\right\]=E\\left\[ \\varphi\\left( |X| \\right) \\right\], \\\]
>
> showing by de la Vallée Poussin's criterion that \\((E\[X|\\mathcal{F}\_i\])\\) is uniformly integrable.
>
> If \\((X\_i)\\) is bounded in \\(L^p\\), then \\(\\sup E\[|X\_i|^p\]\<\\infty\\) which, for \\(\\varphi(x)=x^p\\) satisfying \\(\\varphi(x)/x\\to \\infty\\), satisfies de la Vallée Poussin's criterion. Hence, \\((X\_i)\\) is uniformly integrable.

We finish this section with an extension of Fatou's lemma for conditional expectation. While in the classical case the sequence must be bounded from below by an integrable random variable, in the conditional case, the negative part of the sequence of conditional expectation must be uniformly integrable.

> [!NOTE]
>
> **Conditional Fatou's Lemma for Uniformly Integrable Lower Bound**
>
> Let \\((X\_n)\\) be a sequence of random variables and \\(\\mathcal{G}\\subseteq \\mathcal{F}\\) be a sub-\\(\\sigma\\)-algebra. Suppose that \\((X\_n^-)\\) is uniformly integrable conditionally with respect to \\(\\mathcal{G}\\), in the sense that for every \\(\\varepsilon\>0\\), there exists \\(M\>0\\) such that
>
> \\\[ E\\left\[ X\_n^- 1\_{\\{X\_n^-\>M\\}} \\big | \\mathcal{G}\\right\]\\leq \\varepsilon \\quad \\text{ for all }n. \\\]
>
> Then it holds
>
> \\\[ E\\left\[ \\liminf X\_n |\\mathcal{G} \\right\]\\leq \\liminf E\\left\[ X\_n |\\mathcal{G} \\right\]. \\\]

> [!NOTE]
>
> **Remark**
>
> Note that this is an extension of Fatou's Lemma for a uniformly integrable negative part of the sequence by taking \\(\\mathcal{G}\\) as the trivial \\(\\sigma\\)-algebra.
>
> Furthermore, note that the conditional expectation can be defined for every positive random variable by conditional monotone convergence. It can also be defined for any random variable bounded from below by some positive random variable.
>
> In this case, \\((X\_n^-)\\) is in particular uniformly integrable. It follows that \\(\\liminf X\_n^-\\) is integrable so that the inequality is well defined.

> [!NOTE]
>
> **Proof**
>
> Let \\(X = \\liminf X\_n\\) and \\(\\varepsilon \>0\\). By uniform conditional integrability of \\((X\_n^-)\\), let \\(M\>0\\) such that
>
> \\\[ E\\left\[ X\_n^- 1\_{\\{X\_n^-\>M\\}} \\big |\\mathcal{G}\\right\]\\leq \\varepsilon \\quad \\text{ for all }n. \\\]
>
> Using Fatou's Lemma for conditional expectation for positive random variables, and the fact that \\(X + M \\leq \\liminf (X\_n+M)^+\\), it follows that
>
> \\\[ E\\left\[ X+M\\big |\\mathcal{G} \\right\]\\leq E\\left\[ \\liminf (X\_n+M)^+ \\big |\\mathcal{G}\\right\]\\leq \\liminf E\\left\[ (X\_n+M)^+\\big |\\mathcal{G} \\right\]. \\\]
>
> Since \\((X\_n+M)^+=(X\_n+M)+(X\_n+M)^-\\leq X\_n+M+X\_n^-1\_{\\{X\_n^-\>M\\}}\\), it follows that
>
> \\\[ E\\left\[ X \\big|\\mathcal{G} \\right\]\\leq \\liminf E\\left\[ X\_n\\big |\\mathcal{G} \\right\]+\\varepsilon. \\\]
>
> This completes the proof.
