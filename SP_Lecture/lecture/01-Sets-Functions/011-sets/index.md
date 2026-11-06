# Sets

This lecture will not cover the foundations of logic and the axiomatic approach to set theory. We stick to the *naive* set theory in the sense that we will not encounter "too large objects" for which paradox may arise if the objects are defined too naively—see Russell's paradox. We refer to Jech (2003) for a comprehensive overview of set theory.

The language of set theory consists of the binary predicate \\(\\in\\) that describes the membership relation between objects, that is, \\(x\\in A\\) means that \\(x\\) is an *element* or a member of \\(A\\). A set is a collection of objects that belong to it. We usually denote sets with capital letters \\(A,B,\\ldots\\) and elements of these sets with lowercase letters \\(x,y,\\ldots\\). Note that sets can also be elements of other sets. We can define sets either by an explicit listing such as \\(A=\\{\\text{pig},\\text{horse},\\text{table}\\}\\), or by a "property rule" \\(P\\), i.e. \\(A=\\{x\\colon x\\text{ has property }P\\}\\). To avoid logical problems, we assume that this rule applies only to some elements of a given larger set. For instance,

\\\[2\\mathbb{Z}:=\\{x\\in\\mathbb{Z}\\colon x\\text{ is even}\\}\\\]

Typical sets we will use are:

- Natural numbers: \\(\\mathbb{N}=\\{1,2,3,\\ldots\\}\\) and \\(\\mathbb{N}\_0=\\{0,1,2,\\ldots\\}\\);
- Integers: \\(\\mathbb{Z}=\\{\\ldots,-2,-1,0,1,2,\\ldots\\}\\);
- Rational numbers: \\(\\mathbb{Q}\\);
- Real numbers: \\(\\mathbb{R}\\);
- \\(\\mathbb{R}^d\\), the \\(d\\)-dimensional Euclidean space.

Let us introduce the following operations or relations between sets:

- **Inclusion** \\(\\subseteq\\): Given two sets \\(A\\) and \\(B\\), we denote by \\(A\\subseteq B\\) that every element \\(x\\) in \\(A\\) also belongs to \\(B\\). The inclusion defines a partial order (it is reflexive, transitive, and antisymmetric).
- **Empty set** \\(\\emptyset\\): The set containing no elements is called the empty set and is denoted by \\(\\emptyset\\). It is the smallest set with respect to inclusion and is universal in this axiomatic system.
- **Intersection** \\(\\cap\\): The intersection of two sets \\(A\\) and \\(B\\), denoted by \\(A\\cap B\\), is defined as the largest set that is contained in both \\(A\\) and \\(B\\). In other words, \\(A\\cap B=\\{x\\colon x\\in A\\text{ and }x\\in B\\}\\). Two sets \\(A\\) and \\(B\\) are said to be **disjoint** if their intersection is empty, i.e. \\(A\\cap B=\\emptyset\\).
- **Union** \\(\\cup\\): The union of two sets \\(A\\) and \\(B\\), denoted by \\(A\\cup B\\), is defined as the smallest set that contains all elements of either \\(A\\) or \\(B\\). In other words, \\(A\\cup B=\\{x\\colon x\\in A\\text{ or }x\\in B\\}\\).
- **Complement** \\({}^c\\): Given a set \\(X\\), the complement of a subset \\(A\\) (relative to \\(X\\)) is given by \\(A^c=\\{x\\in X\\colon x\\not\\in A\\}\\).
- **Difference** \\(\\setminus\\): Given two subsets \\(A\\) and \\(B\\) of a set \\(X\\), the difference \\(A\\setminus B\\) is defined as \\(\\{x\\colon x\\in A\\text{ and }x\\not\\in B\\}\\), which is equivalent to \\(A\\cap B^c\\).
- **Symmetric difference** \\(\\Delta\\) Given two subsets \\(A\\) and \\(B\\) of a set \\(X\\), the symmetric difference is defined as \\(A\\Delta B:=(A\\setminus B)\\cup(B\\setminus A)\\).

Given a set \\(X\\), we can define its **power set** as \\(2^X:=\\{A\\subseteq X\\}\\). Note that the power set always contains both \\(X\\) and the empty set \\(\\emptyset\\). In particular, \\(2^\\emptyset=\\{\\emptyset\\}\\) is the set containing only the empty set.

> [!NOTE]
>
> **Proposition**
>
> The power set \\(2^X\\) of a set \\(X\\), together with the operations \\(\\cup\\), \\(\\cap\\), \\({}^c\\), and the two distinguished elements \\(\\emptyset\\) and \\(X\\), satisfies the properties of a Boolean algebra.
>
> 1. \\(\\emptyset^c=X\\) and \\(X^c=\\emptyset\\).
> 2. Identity laws: \\(A\\cap\\emptyset=\\emptyset\\), \\(A\\cap X=A\\), \\(A\\cup\\emptyset=A\\), and \\(A\\cup X=X\\).
> 3. Complement laws: \\(A\\cap A^c=\\emptyset\\) and \\(A\\cup A^c=X\\).
> 4. Double complement law: \\((A^c)^c=A\\).
> 5. Idempotent laws: \\(A\\cap A=A\\) and \\(A\\cup A=A\\).
> 6. De Morgan laws: \\((A\\cap B)^c=A^c\\cup B^c\\) and \\((A\\cup B)^c=A^c\\cap B^c\\).
> 7. Commutative laws: \\(A\\cap B=B\\cap A\\) and \\(A\\cup B=B\\cup A\\).
> 8. Associative laws: \\(A\\cap(B\\cap C)=(A\\cap B)\\cap C\\) and \\(A\\cup(B\\cup C)=(A\\cup B)\\cup C\\).
> 9. Distributive laws: \\(A\\cap(B\\cup C)=(A\\cap B)\\cup(A\\cap C)\\) and \\(A\\cup(B\\cap C)=(A\\cup B)\\cap(A\\cup C)\\).

**Proof**

Left as an exercise.

**Remark: Boolean Ring**

The power set \\(2^X\\) of a set \\(X\\), together with the operations \\(\\Delta\\), \\(\\cap\\), and the two distinguished elements \\(\\emptyset\\) and \\(X\\), satisfies the properties of a Boolean ring, that is:

1. \\(\\Delta\\) and \\(\\cap\\) are associative and commutative.
2. Identity law: \\(A\\Delta\\emptyset=A\\) and \\(A\\cap X=A\\).
3. Inverse law: \\(A\\Delta A^c=X\\).
4. Distributive law: \\(A\\cap(B\\Delta C)=(A\\cap B)\\Delta(A\\cap C)\\).

The *Cartesian product* \\(A\\times B\\) of two sets \\(A\\) and \\(B\\) is the collection of ordered pairs \\((x,y)\\) such that \\(x\\in A\\) and \\(y\\in B\\).

Given the Cartesian product, we can define functions:

> [!NOTE]
>
> **Definition: Functions**
>
> A function \\(f:X\\to Y\\) is an ordered triple \\((X, Y, G)\\), where \\(G\\subseteq X\\times Y\\) is called the *graph* of \\(f\\) and satisfies the property that for every \\(x\\in X\\), there exists a unique \\(y\\in Y\\) such that \\((x,y)\\in G\\).(1)
>
> 1. This definition requires \\(Y\\) to be non-empty if \\(X\\) is non-empty. If \\(X\\) is empty, then \\(G=\\emptyset\\), and this function is called the empty function.
>
> For \\(x\\in X\\), this unique element \\(y\\in Y\\) such that \\((x,y)\\in G\\) is denoted by \\(f(x)\\).

A function is called

- **injective** if \\(x\\neq y\\) implies \\(f(x)\\neq f(y)\\);
- **surjective** if for every \\(y\\in Y\\), there exists \\(x\\in X\\) such that \\(f(x)=y\\);
- **bijective** if it is both injective and surjective.

Given a set \\(I\\) and a non-empty set \\(X\\), a *family* of elements in \\(X\\) is a function \\(f:I\\to X\\), \\(i\\mapsto f(i)\\). We usually denote this function as \\((x\_i)\_{i\\in I}\\), where \\(x\_i\\in X\\) for every \\(i\\).(1) If \\(I=\\mathbb{N}\\), we also call it a *sequence* or a *countable family*. If there is no risk of confusion, we use the notation \\((x\_i)\\) for an arbitrary family of elements in \\(X\\) and \\((x\_n)\\) for a countable family—or sequence—in \\(X\\).

1. A family \\((x\_i)\_{i\\in I}\\) is different from the collection \\(\\{x\_i: i\\in I\\}\\). For instance, consider the family \\((x\_n)\_{n\\in\\mathbb{N}}\\) where \\(x\_n=1\\) if \\(n\\) is odd and \\(x\_n=0\\) if \\(n\\) is even. Then \\(\\{x\_n:n\\in\\mathbb{N}\\}=\\{0,1\\}\\), while \\((x\_n)\_{n\\in\\mathbb{N}}=(1,0,1,0,1,\\ldots)\\).}

Given a family of sets \\((X\_i)=(X\_i)\_{i\\in I}\\), we define the Cartesian product of these sets as the collection of families \\((x\_i)=(x\_i)\_{i\\in I}\\) such that \\(x\_i\\) is in \\(X\_i\\) for every \\(i\\), denoted by

\\\[ \\prod X\_i=\\prod\_{i\\in I}X\_i=\\{(x\_i)\\colon x\_i\\in X\_i \\text{ for every } i\\}. \\\]

> [!NOTE]
>
> **Proposition**
>
> The Boolean algebra \\(2^X\\) is *complete*, meaning that for every family of sets \\((A\_i)\\), there exists a minimum and a maximum with respect to inclusion in \\(2^X\\).(1)
>
> 1. That is, there exist subsets \\(A\\) and \\(B\\) such that \\(A\\subseteq A\_i\\subseteq B\\) for every \\(i\\), and if \\(\\tilde{A}\\) and \\(\\tilde{B}\\) also satisfy this property, then \\(\\tilde{A}\\subseteq A\\) and \\(B\\subseteq \\tilde{B}\\).
>
> We denote this minimum and maximum by
>
> \\\[ \\begin{align\*} \\bigcap A\_i&amp;=\\{x\\in X\\colon x\\in A\_i \\text{ for all } i\\} &amp; \\bigcup A\_i&amp; =\\{x\\in X\\colon x\\in A\_i \\text{ for some } i\\} \\end{align\*} \\\]
>
> Furthermore, it holds that
>
> \\\[ \\begin{equation} \\left(\\bigcap A\_i\\right)^c=\\bigcup A\_i^c, \\quad \\left(\\bigcup A\_i\\right)^c=\\bigcap A\_i^c \\end{equation} \\\]
>
> as well as
>
> \\\[ \\begin{equation} C\\cap\\left(\\bigcup A\_i\\right)=\\bigcup (C\\cap A\_i), \\quad C\\cup\\left(\\bigcap A\_i\\right)=\\bigcap (A\_i\\cup C) \\end{equation} \\\]

**Proof**

Left to the reader.

Given a function \\(f:X\\to Y\\) and subsets \\(A\\subseteq X\\) and \\(B\\subseteq Y\\), we define the

- **image:**

  \\\[ \\begin{equation} f(A) := \\left\\{ y\\in Y\\colon y=f(x) \\text{ for some } x\\in A \\right\\}\\subseteq Y \\end{equation} \\\]
- **pre-image:**

  \\\[ \\begin{equation} f^{-1}(B) := \\left\\{ x\\in X\\colon f(x)\\in B \\right\\}\\subseteq X \\end{equation} \\\]

> [!NOTE]
>
> **Proposition**
>
> The image and pre-image define functions from \\(2^X\\) to \\(2^Y\\) and \\(2^Y\\) to \\(2^X\\), respectively, with the following properties:
>
> \\\[ \\begin{align} f(A\_1) &amp;\\subseteq f(A\_2), &amp; f^{-1}(B\_1) &amp;\\subseteq f^{-1}(B\_2)\\\\ f\\left(\\cup A\_i\\right) &amp;= \\cup f(A\_i), &amp; f^{-1}\\left(\\cup B\_j\\right) &amp;= \\cup f^{-1}(B\_j)\\\\ f\\left(\\cap A\_i\\right) &amp;\\subseteq \\cap f(A\_i), &amp; f^{-1}\\left(\\cap B\_j\\right) &amp;= \\cap f^{-1}(B\_j)\\\\ f(A^c) &amp;\\subseteq f(A)^c, &amp; f^{-1}(B^c) &amp;= \\left(f^{-1}(B)\\right)^c\\\\ A &amp;\\subseteq f^{-1}\\left(f(A)\\right), &amp; B &amp;\\subseteq f\\left(f^{-1}(B)\\right) \\end{align} \\\]

**Proof**

Left to the reader.

> [!NOTE]
>
> **Remark**
>
> The pre-image function—unlike the image function—respects the Boolean operations of the power set. In other words, it is a morphism. Any structure defined on a subset of \\(2^Y\\) with intersection, union, and complementation will carry over to a substructure of \\(2^X\\) with the same properties via the pre-image function.

As for the **cardinality** of sets, we say that a set \\(X\\) has cardinality smaller than \\(Y\\) if there exists an injective function \\(f:X\\to Y\\). Two sets have same cardinality if such a function is bijective. A set \\(X\\) is called

- **finite** if there exists \\(n\\) in \\(\\mathbb{N}\\) such \\(X\\) has the same cardinality as \\(\\{1, \\ldots, n\\}\\). In this case \\(n\\) is the cardinality of this set.
- **enumerable** if \\(X\\) has the same cardinality as \\(\\mathbb{N}\\). In this case we denote by \\(\\aleph\_0\\) the cardinality of this set.
- **countable** if \\(X\\) is either finite or enumerable.

The emptyset has cardinality \\(0\\) and is the only such set. If \\(X\\) is finite of cardinality \\(n\\) in \\(\\mathbb{N}\\), then the cardinality of \\(2^X\\) is \\(2^n\\). In general, the cardinality of \\(2^X\\) is always strictly greater than the cardinality of \\(X\\), that is, while there obviously exists an injective function \\(X \\ni x \\mapsto \\{x\\} \\in 2^X\\), the reverse is not true. The set of real numbers of any interval of real numbers has a cardinality that is striclty larger than \\(\\mathbb{N}\\). However, \\(\\mathbb{Z}\\) is obviously enumerable by the injective function \\(f\\colon \\mathbb{Z}\\to \\mathbb{N}\\) such that \\(n \\mapsto f(n)=2n\\) if \\(n\\) is positive and \\(n \\mapsto f(n) = -2n -1\\) if \\(n\\) is strictly negative. Classsical but less obvious is that \\(\\mathbb{Q}\\) has the same cardinality as \\(\\mathbb{N}\\).

> [!NOTE]
>
> **Proposition**
>
> Let \\((X\_n)\\) be a countable family of countable sets, then \\(\\cup X\_n\\) is countable.
>
> In particular \\(\\mathbb{Q}\\) is countable.

**Proof**

Define \\(X = \\cup X\_n\\). Without loss of generality, we can assume that the family is enumerable, that is \\((X\_n) = (X\_n)\_{n=1, \\ldots}\\). Furthermore, up to redefining sequentially \\(Y\_1 = X\_1\\) and \\(Y\_{n+1} = X\_{n+1} \\setminus Y{n}\\) for which holds \\(\\cup Y\_n = X\\), we can also assume that the \\((X\_n)\\) are pairewize disjoint. Up to slight modification, we can also assume that each \\(X\_n\\) is itself enumerable. Since each set is enumerable, we can write uniquely \\(X\_n =\\{ x\_{n,m}: m \\in \\mathbb{N}\\}\\) such that \\(X = \\{x\_{n, m}\\colon n \\in \\mathbb{N} \\text{ and } m \\in \\mathbb{N}\\}\\) which has the same cardinality as \\(\\mathbb{N}\\times \\mathbb{N}\\). However \\(\\mathbb{N}\\times \\mathbb{N}\\) has the same cardinality as \\(\\mathbb{N}\\). Indeed, it is equal to the countable union of the disjoint finite sets \\(Y\_k =\\{(m, n)\\colon m+n = k\\}\\) each being of cardinality \\(k\\) from which an injection can be built into \\(\\mathbb{N}\\).

As for \\(\\mathbb{Q}\\), it is the countable union of the countable sets \\(X\_n = \\{m / n\\colon m \\in \\mathbb{Z} \\}\\).

Given a sequence \\((X\_n)\\) of sets we define the \\(\\limsup\\) and \\(\\liminf\\) of this sequence as the sets:

\\\[ \\begin{align\*} \\limsup X\_n &amp;:= \\cap\_n \\cup\_{k\\geq n} X\_k &amp; \\liminf X\_n &amp;:= \\cup\_n \\cap\_{k \\geq n} X\_k \\end{align\*} \\\]

In other term, the \\(\\limsup\\) represent the set of those elements \\(x\\) which are contained in infinitely many \\(X\_n\\) while the \\(\\liminf\\) represent the set of those elements \\(x\\) that are contained in all but finitely many \\(X\_n\\). For \\(x\\) in \\(\\liminf X\_n\\), it follows that there exists \\(n\_0\\) such that \\(x\\) belongs to any \\(X\_n\\) for \\(n\\geq n\_0\\). Hence \\(x\\) is in \\(\\cup\_{k\\geq n} X\_k\\) for any \\(n\\) showing that \\(x\\) is in \\(\\limsup X\_n\\). Therefore \\(\\liminf X\_n \\subseteq \\limsup X\_n\\). The sequence of sets converges if \\(\\liminf X\_n = \\limsup X\_n\\).

> [!NOTE]
>
> **Definition**
>
> Given a subset \\(A\\) of \\(X\\), we define the **indicator** function of \\(A\\) as the function
>
> \\\[ \\begin{equation\*} \\begin{split} 1\_A \\colon X &amp; \\longrightarrow \\mathbb{R}\\\\ x &amp; \\longmapsto 1\_A(x) = \\begin{cases} 1 &amp; \\text{if }x \\in A\\\\ 0 &amp; \\text{otherwize } \\end{cases} \\end{split} \\end{equation\*} \\\]

![Indicator Function](<https://www.samuel-drapeau.info/SP_Lecture/images/indicator_dark.svg#only-dark>) ![Indicator Function](<https://www.samuel-drapeau.info/SP_Lecture/images/indicator_white.svg#only-light>)

> [!NOTE]
>
> **Exercise**
>
> - Show that \\((0,1)\\) has the same cardinality as \\((0, 1\]\\).
> - Let \\(f\\colon \\mathbb{R} \\to \\mathbb{R}\\) be an increasing function. Show that the set \\(X = \\{x \\in \\mathbb{R}\\colon \\lim\_{y\\nearrow x} f(y) \< \\lim\_{y\\searrow x} f(y)\\}\\) of discountinuity of \\(f\\) is countable.
> - Show that \\((\\limsup X\_n^c)^c = \\liminf X\_n\\), \\(\\liminf X\_n = \\{x \\in X\\colon \\liminf 1\_{A\_n}(x) = 1\\}\\) and \\(\\limsup X\_n = \\{x \\in X \\colon \\limsup 1\_{A\_n}(x) = 1\\}\\).
> - Show that \\(1\_{\\cup A\_n} = \\sum 1\_{A\_n}\\) whenever \\((A\_n)\\) are disjoints. Show that \\(1\_{\\cap A\_n} = \\prod 1\_{A\_n}\\).

## References

- Jech, Thomas (2003). *Set Theory -- The Third Millennium Edition*. Springer.
