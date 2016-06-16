---
layout: post
title: Family vs Collection
categories:
  - math
---

Some of you questioned the difference between "collection" and/or "family" concepts, terms that appeared at different places in the lecture.
Even in the math community -- myself included -- there is often confusion between these two concepts, and both are used with some inconsistencies.
However, as long as it is clear what is meant for the writer and the reader, there is actually no real problem.
Let me stress the difference between both

<div class="definition" markdown="1">

Family
:   Given two sets $$X$$ and $$I$$, a *family of elements in $$X$$ indexed by $$I$$* is a function $$f:I\to X$$.
    Such a family is often denoted by $$(x_i)_{i \in I}$$ where $$x_i:=f(i)$$ for every $$i\in I$$.

Collection
:   Given a set $$X$$, a *collection $$A$$ of elements in $$X$$* is a subset of $$X$$.

</div>

Typical examples of families are sequences $$(x_n)_{n\in \mathbb{N}}$$ of elements in $$X$$ indexed by $$\mathbb{N}$$.
A collection is a set, which, as a consequence, implies that repetition of elements is not possible.
For instance, if $$X=\mathbb{N}$$, we can not have a collection of elements in $$\mathbb{N}$$ that contains ten times the number $$1$$.

The small confusion comes from the fact that

* every family $$(x_i)_{i \in I}$$ of elements in $$X$$ indexed by $$I$$ defines 
    * a collection $$\{(i,x_i)\colon i \in I\}$$ of elements in $$I\times X$$;
    * a collection $$\{x_i\colon i \in I\}$$ of elements in $$X$$.

    The first one is the graph of the function defining the family and by definition corresponds exactly to the family itself.
    The second one is the image of the function defining the family.
    Since collections do not allow for repetition of terms, the collection $$\{x_i\colon i\in I\}$$ is in general smaller in terms of cardinality than the family, see examples after.
    Both collections are in bijection if, and only if, the function defining the family is injective.
* every collection $$A$$ of subsets of $$X$$ defines 
    * a family of elements in $$X$$ indexed by itself.
    
    Indeed, define $$f:A\to X$$, $$x\mapsto f(x)=x\in A\subseteq X$$ which defines a family of elements in $$X$$ indexed by $$A$$ which as family is denoted by $$(x_x)_{x \in A}$$.
    The graph of this family is given by $$\{(x,f(x))\colon x\in A\}=\{(x,x)\colon x \in A\}\subseteq A\times X$$.
    However, since the identity is injective, it follows that the family $$(x_x)_{x \in A}$$ is in bijection with the set $$A=\{x\colon x \in A\}$$.

Just to illustrate the difference, consider the sequence $$(x_n)_{n \in \mathbb{N}}$$ of elements in $$\mathbb{R}$$ given by $$x_n =0$$ if $$n$$ is even and $$x_n=1$$ if $$n$$ is odd.
It follows that

* the collection $$\{x_n\colon n \in \mathbb{N}\}$$ is the set $$\{0,1\}$$
* the family $$(x_n)_{n \in \mathbb{N}}$$ is the binary sequence $$(1,0,1,0,\ldots)$$

### Some -- abuse of -- notations
I often -- just like many mathematicians -- misuse the notations to ease the text flow.
A short list of these misuses that are, however, not really confusing when you think a little bit about it.

* *"Let $$(x_i)_{i \in I}$$ be a family of elements in $$X$$,..."*

    When the notation is clear we often do not add *"indexed by $$I$$"*.

* *"Let $$(x_i)$$ be a family of elements in $$X$$,..."*

    In the case where the index set $$I$$ is not relevant for the argumentation, I usually omit it to describe an arbitrary family of elements in $$X$$.

* *"Let $$(x_n)$$ be a countable family of elements in $$X$$,..."*

    By the term "countable", I implicitly assume that the indexing set is an arbitrary subset of $$\mathbb{N}$$.

* *"Let $$(x_n)$$ be a sequence of elements in $$X$$,..."*

    I implicitly assume that the indexing set is $$\mathbb{N}$$.

* *"Let $$(x_k)_{k\leq n}$$ be a finite family of elements in $$X$$,..."*

    I implicitly assume that the indexing set is the finite set $$\{k \in \mathbb{N}\colon k\leq n\}$$ for some arbitrary natural number $$n \in \mathbb{N}$$.

* *"Let $$(A_i)$$, or $$(A_n)$$, be a family, or countable family respectively, of subsets of $$X$$,..."*

    The elements of the family are here subsets of $$X$$, that is, elements of the power set $$2^X$$ of $$X$$.

Sometimes you will also see -- I personally try to avoid it as much as possible:

* *"Let $$(x_i)\subseteq X$$ be a family,..."* or *"Let $$(x_n)\subseteq X$$ be a sequence,..."* or even *"Let $$(x_i)\subseteq X$$,..."*, or *"Let $$(x_n)\subseteq X$$,..."*.

In contrast to the previous short hand-writings, these notations are formally not really acceptable from a mathematical view-point.
For instance, in the case of a sequence $$(x_n)$$ of elements in $$X$$, it clearly follows that $$\{x_n\colon n \in \mathbb{N}\}\subseteq X$$.
However, as illustrated in the previous example, unless the function defining the family is injective, the collection $$\{x_n\colon n \in \mathbb{N}\}$$ may not be able to describe the whole sequence.
The real acceptable notation would be *"Let $$\{(n,x_n)\colon n\in \mathbb{N}\}\subseteq \mathbb{N}\times X$$ be a sequence,..."* which is not really nice.
Anyhow, the object $$(x_n)$$ can in general not be identified with a subset of $$X$$ so that the notation $$(x_n)\subseteq X$$ does not make sense.

However, as human being and skilled mathematician, we can overcome this cognitive dissonance and immediately understand what is meant under these notations.

I hope you are not more confused now.
Do not really pay too much attention at the difference as long as your way of writing is not inconsistent with what you want to show and is well accepted and understood by your peers.
As for my rule of thumb, elegance is the better option over cumbersome formal but correct notations.
