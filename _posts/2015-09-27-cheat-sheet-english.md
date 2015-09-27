---
layout: post
title: Cheat Sheet to Write Mathematics in English for Chinese
categories:
  - math
---

## Logic:

* Assertion: 断言
* Hypothesis: 假设
* True, False: 真，假
* $$A\Rightarrow B$$: "$$A$$ implies $$B$$" or "From $$A$$ follows $$B$$", or "If $$A$$ (is true), then (so is) $$B$$." 
* $$A\Leftrightarrow B$$: "$$A$$ is equivalent to $$B$$" or "$$A$$ holds if, and only if, $$B$$ holds".
* Element: 
* Set: 集
* Collection:
* $$x\in A$$: "$$x$$ is in $$A$$".
* $$A\subseteq B $$: "$$A$$ is a subset of $$B$$".
* $$\forall x$$: "For all $$x$$" (or "For every $$x$$").
* $$\exists x$$: "For some $$x$$", or (there exists $$x$$).



## Basic math vocabulary:

* $$x\geq y$$: $$x$$ is greater than $$y$$, or $$y$$ is less than $$x$$.
* $$x\geq 0$$: $$x$$ is positive, and $$-x$$ is negative.
* $$x>y$$ or $$x>0$$: $$x$$ is strictly greater than $$y$$, or $$x$$ is strictly positive.
* $$\mathbb{N}$$: natural numbers (自然数) sometimes called integers (整数).
* $$\mathbb{Q}$$: rational numbers (有理数).
* $$\mathbb{R}$$: real numbers (实数).
* $$f:X\to Y$$: function $$f$$ from the domain $$X$$ to the codomain $$Y$$
* $$f(A)$$ and $$f^{-1}(B)$$: image of $$A\subseteq X$$ and preimage of $$B\subseteq Y$$ under $$f$$.
* $$f(x)\leq f(y)$$ for $$x\leq y$$: $$f$$ is increasing.
* $$f(x)\geq f(y)$$ for $$x\leq y$$: $$f$$ is decreasing.
* $$f$$ either increasing or decreasing: $$f$$ is monotone.
* Finite family
* Countable family

## Writing proofs:

* We show that $$A$$ and $$B$$ implies $$C$$.
* Under the assumption [of the theorem/proposition/exercise], it holds [this/that].
* Suppose/assume that [something] holds.
* By contradiction, suppose that [something] holds. (show that it can not be true).
* If [something] holds, then it follows that ...
* Since [something] holds, it follows that...
* Hence,...
* [something] yields [something]
* However, [something is true], therefore, [another thing] holds.
* Thus,...
* This ends the proof. (or CQFD.)

## Exemplary sentences of the lecture:

* Let $$x \in \mathbb{R}$$ be such that...
* Let $$(x_n)$$ be a sequence of elements in $$A$$ such that...
* Let $$f:X\to Y$$ be a function such that...
* Let $$(A_i)$$ be a family of subsets of $$\Omega$$ such that...
* Let $$(A_n)$$ be a countable family of subsets of $$\Omega$$ such that...
* Since $$\mathcal{F}$$ is a $\sigma$-algebra, it follows that $$\cup A_n \in \mathcal{F}$$ for every countable family $$(A_n)$$ of elements in $$\mathcal{F}$$.
* Let $$(A_k)_{k\leq n}$$ be a finite family of subsets of $$\Omega$$ such that...
* Suppose that $$(A_n)$$ is a countable family of subsets of $$\Omega$$ such that...
* Since the random variable $X$ is measurable, it follows that $$\{X\leq a\}$$ is measurable for every $$a \in \mathbb{R}$$.
* Suppose that the random variable $$X$$ is bounded, then it follows in particular that $$X$$ is integrable.


## Complete example

#### Proposition
Let $$n$$ and $$m$$ be two integers.
Suppose that $$n$$ and $$m$$ are odd.
Then, $$nm$$ is also odd.

#### Proof
An integer $$n$$ is odd if, and only if, it is divisible by two, that is, $$n=2p$$ for some integer $$p$$.
Under the assumptions of the proposition, it follows that $$n=2p$$ and $$m=2q$$ for some integers $$p$$ and $$q$$.
Hence, $$nm=2p2q=4pq=2(2pq)$$.
It follows that $$nm=2r$$ where $$r=2pq$$ is an integer.
Thus, $$nm$$ is odd.
This ends the proof.
