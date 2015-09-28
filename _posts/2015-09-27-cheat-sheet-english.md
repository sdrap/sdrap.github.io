---
layout: post
title: Cheat Sheet to Write Mathematics in English for Chinese
categories:
  - math
---

*Disclaimer: The following is by no mean 'the' introduction on how to write mathematical proofs in English -- English is my third tong, therefore I do not master it very well myself. Just take the following as building blocks so that I can follow your proofs. After a while, you may improve by looking at proof arguments in professional English textbooks -- I am not a reference on that topic. That's also why I recommend you to read only textbooks in English! At the beginning I accept -- even if I hate it -- the use of logical symbols such as $$\Rightarrow$$, $$\Leftrightarrow$$, $$\forall$$, $$\exists$$, etc. in text. Try however to replace them by their English counterparts, it is nicer to read.*



## Logic:

* Assertion: 断言
* Hypothesis: 假设
* True, False: 真，假
* $$A\Rightarrow B$$: "$$A$$ implies $$B$$" $$A$$ 推出 $$B$$ or "From $$A$$ follows $$B$$" 若 $$A$$ 则 $$B$$, or "If $$A$$ (is true), then (so is) $$B$$." 若 $$A$$ 为真则 $$B$$ 为真
* $$A\Leftrightarrow B$$: "$$A$$ is equivalent to $$B$$" $$A$$ 等价于 $$B$$ or "$$A$$ holds if, and only if, $$B$$ holds". $$A$$ 成立当且仅当 $$B$$ 成立
* Element: 元素
* Set: 集
* Collection: 类
* $$x\in A$$: "$$x$$ is in $$A$$". $$x$$ 属于 $$A$$
* $$A\subseteq B $$: "$$A$$ is a subset of $$B$$". $$A$$ 包含于 $$B$$
* $$\forall x$$: "For all $$x$$" (or "For every $$x$$"). 对任意 $$x$$    
* $$\exists x$$: "For some $$x$$", or (there exists $$x$$). 存在 $$x$$



## Basic math vocabulary:

* $$x\geq y$$: $$x$$ is greater than $$y$$, or $$y$$ is less than $$x$$. $$x$$ 不等于 $$y$$   
* $$x\geq 0$$: $$x$$ is positive, and $$-x$$ is negative. $$x$$不小于$$0$$    
* $$x>y$$ or $$x>0$$: $$x$$ is strictly greater than $$y$$, or $$x$$ is strictly positive. $$x$$严格大于$$y$$  $$x$$严格大于$$0$$
* $$\mathbb{N}$$: natural numbers (自然数) sometimes called strictly positive integers (正整数).
* $$\mathbb{Z}$$: integers 整数
* $$\mathbb{Q}$$: rational numbers 有理数
* $$\mathbb{R}$$: real numbers 实数
* $$f:X\to Y$$: function $$f$$ from the domain $$X$$ to the codomain $$Y$$. $$f$$ 是从定义域 $$X$$ 映射到值域 $$Y$$ 的函数
* $$f(A)$$ and $$f^{-1}(B)$$: image of $$A\subseteq X$$ and preimage of $$B\subseteq Y$$ under $$f$$. $$A$$ 在映射$$f$$下的像，$$B$$的原像
* $$f(x)\leq f(y)$$ for $$x\leq y$$: $$f$$ is increasing. 单调增的  
* $$f(x)\geq f(y)$$ for $$x\leq y$$: $$f$$ is decreasing. 单调减的
* $$f$$ either increasing or decreasing: $$f$$ is monotone. $$f$$ 是单调的
* Finite family 有限族
* Countable family 可数族

## Writing proofs:

* We show that $$A$$ and $$B$$ implies $$C$$. 我们说明A 和 B 推出C
* Under the assumption [of the theorem/proposition/exercise], it holds [this/that].根据定理的假设，我们可以得出
* Suppose/assume that [something] holds.假设...成立
* By contradiction, suppose that [something] holds. (show that it can not be true).由于矛盾，说明...成立
* If [something] holds, then it follows that ... 如果...成立则说明...   
* Since [something] holds, it follows that... 因为...成立，我们有...
* Hence,... 由于
* [something] yields [something]  ...表明...
* However, [something is true], therefore, [another thing] holds. ...成立，因此，...成立    
* Thus,... 那么
* This completes the proof. (or CQFD.) 证明完成

## Exemplary sentences of the lecture:

* Let $$x \in \mathbb{R}$$ be such that... 令x属于实数集则有
* Let $$(x_n)$$ be a sequence of elements in $$A$$ such that... 令$$(x_n)$$是A中的一列元素
* Let $$f:X\to Y$$ be a function such that... 令f是从X映射到Y的函数，那么
* Let $$(A_i)$$ be a family of subsets of $$\Omega$$ such that... 令$$(A_i)$$是$$(\Omega)$$中的子集族 
* Let $$(A_n)$$ be a countable family of subsets of $$\Omega$$ such that...令$$(A_i)$$是$$(\Omega)$$中的可数子集族
* Since $$\mathcal{F}$$ is a $\sigma$-algebra, it follows that $$\cup A_n \in \mathcal{F}$$ for every countable family $$(A_n)$$ of elements in $$\mathcal{F}$$.
因为 $$\mathcal{F}$$ 是一个 $\sigma$-代数, 对任意由 $$\mathcal{F}$$中的元素$$(A_n)$$组成的可数集族可以得到 $$\cup A_n \in \mathcal{F}$$
* Let $$(A_k)_{k\leq n}$$ be a finite family of subsets of $$\Omega$$ such that...令$$(A_k)_{k\leq n}$$是$$\Omega$$的可数子集族，那么
* Suppose that $$(A_n)$$ is a countable family of subsets of $$\Omega$$ such that...假设$$(A_n)$$是$$\Omega$$的一个可数子集族
* Since the random variable $X$ is measurable, it follows that $$\{X\leq a\}$$ is measurable for every $$a \in \mathbb{R}$$.由于随机变量X可测，可以得到$$\{X\leq a\}$$对任意$$a \in \mathbb{R}$$可测
* Suppose that the random variable $$X$$ is bounded, then it follows in particular that $$X$$ is integrable. 假设随机变量X有界，那么特别地，X是可积的


## Example

#### Proposition 推理
Let $$n$$ and $$m$$ be two integers.Suppose that $$n$$ is even and $$m$$ is even.
Then, $$nm$$ is also even.

令 $$n$$ 和 $$m$$ 是两个整数. 假设 $$n$$ 是偶数 $$m$$ 是偶数. 那么 $$nm$$ 也是偶数.

#### Proof (not nice but okay at the beginning) 证明（不完美的写法）

$$n,m \in \mathbb{Z}$$ are even $$\Rightarrow$$ $$\exists p,q \in \mathbb{Z}$$ such that $$n=2p$$ and $$m=2q$$ $$\Rightarrow nm=2p2q=2(2pq)=2r$$ where $$r:=2pq\in \mathbb{Z}$$ $$\Rightarrow$$ $$nm$$ is even. CQFD.

$$n,m \in \mathbb{Z}$$ 是偶数 $$\Rightarrow$$ $$\exists p,q \in \mathbb{Z}$$ 使得 n=2p 且 m=2q $$\Rightarrow nm=2p2q=2(2pq)=2r其中r=2pq\in \mathbb{Z}$$ $$\Rightarrow$$ $$mn$$ 也是偶数。证明完成

#### Proof 证明
Let $n$ and $m$ be two even integers. 
By definition, it follows that $n$ and $m$ are divisible by two, that is, $$n=2p$$ and $$m=2q$$ for some integers $$p$$ and $$q$$.
Hence, $$nm=2p2q=4pq=2(2pq)$$.
It follows that $$nm=2r$$ where $$r=2pq$$ is an integer. Thus, $$nm$$ is even, which completes the proof.

令 $$n$$ 和 $$m$$ 是两个偶数.
根据定义，$$m$$ 和 $$n$$ 可以被 $$2$$ 整除，这说明 $$n=2p$$ 且 $$m=2q$$ 对某些整数 $$p,q$$ 成立.
那么 $$mn=2r$$ 其中 $$r=2pq$$ 也是整数.
那么 $$nm$$ 是偶数，证明完成.


## Comments

* As French, I never use the US/UK terminology "non-decreasing", "non-increasing", "non-negative" and "non-positive" for "increasing", "decreasing", "positive" and "negative" as defined above. Indeed, I find this way of defining something by negation unnatural and actually only makes sense for total order. So it is a bad habit, and I want you to use the natural definitions as above. If, however, you decide to go for the Yankee way, then stick to it and do not mix.
* ...
