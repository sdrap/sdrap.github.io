# Homework 01

**Overall Info**

Due date: 2024-03-25

Returns in terms of a `*.py` file with comments for the code

By group of 5-6 students

## 1\. Datatypes, Control Flows, Functions

> [!NOTE]
>
> For the following short exercises, no use of `numpy`.

1.1 Using conditional statements and loops, count the number of numbers between 0 and 10.000 which are divisible by 3 or 7 and print it.

1.2 Write a program that print the following pattern

```text
ooooooooooooooooo                                                       
ooooooooooooooooo                                                       
ooooooooooooooooo                                                       
oooo                                                                    
oooo                                                                    
oooo                                                                    
ooooooooooooooooo                                                       
ooooooooooooooooo                                                       
ooooooooooooooooo                                                       
             oooo                                                       
             oooo                                                       
             oooo                                                       
ooooooooooooooooo                                                       
ooooooooooooooooo                                                       
ooooooooooooooooo
```

1.3 Given a list `["apple", "orange", "cabage", "lemon", "potato"]` extract the subarray containing cabage and potato, and return their indices in the original list. Furthermore, write a program that inverse the order of the list.

1.5 Write a function that takes as input one of the name of the 12 month and return the number of days of this month (february is 28)

1.6 Write a function that takes a list of numbers and return a ordered list. i.e. `[1, 4, 2] -> [1, 2, 4]`. You can test this function by creating arbitraty list from numpy arrays `x = list(np.random.rand(N)`.

## 2\. Numpy

2.1 Using `numpy` and its functionalities redo the exercises 1.1 and 1.6

2.2 Create two arrays of numbers between -1 and 1. The first one has consecutive numbers equally spaced by 0.01 while the second one has exactly 100 elements.

2.3 Given natural numbers \\(n\\) and \\(d\\), create a \\(n\\times d\\) matrix of the form

```py
[
    [0, 1, ..., d-1],
    [d, d+1, ..., 2d-1]
    ...
    [(n-1)d,...,(nd) -1 ]
]
```

> [!NOTE]
>
> There are several ways to do it, but remember that loops are not efficient in python. Have a look at the shape manipulations in `numpy`.

2.4 Create a 10x10 matrix where each line contains all the numbers 0 to 9 but shuffled uniformly randomly (check the random routines of numpy documentation)

2.5 Normalize a random 5x5 matrix such that the smallest element is 0 and largest is 1

2.6 Round a random array 5x5 with two digits after the coma

2.7 Given a random array 100 find the position and value of the closest element to 0.6

2.8 Write a function which given an array of size \\(N\\) of integers between 0 and 10 returns the histogram of the array by bins of 0.1 (that is number of elements between 0 and 0.1, number of elements between 0.1 and 0.2, ..., between 0.9 and 1

## 3\. Numpy and Plotly: *Collatz Conjecture*

> [!NOTE]
>
> ****Collatz Conjecture****
>
> Consider the following sequence \\(u = (u\_i)\\) of natural numbers given by
>
> \\\[ \\begin{equation} u\_{i+1} = \\begin{cases} u\_i /2 &amp; \\text{if }u\_i \\text{ is even}\\\\ 3u\_i + 1 &amp; \\text{if }u\_i \\text{ is odd} \\end{cases} \\end{equation} \\\]
>
> starting with a number \\(u\_0 = n \\in \\mathbb{N}\\).
>
> The **Collatz Conjecture** states that whatever starting integer \\(n \\in \\mathbb{N}\\), the sequence will ultimately reach after some time \\(1\\). This Conjecture is still an open problem, some partial answer in this direction given recently by Terence Tao in 2019.
>
> For \\(n \\in \\mathbb{N}\\), denote by
>
> \\\[ \\tau(n) : = \\inf\\{i \\colon u\_i = 1\\} \\\]
>
> which representes the first time where the sequence starting form \\(n\\) reaches \\(1\\). If this sequence never reaches \\(1\\) starting with \\(n\\), then \\(\\tau(n) = \\infty\\). Collatz conjecture states that \\(\\tau(n)\<\\infty\\) for every \\(n\\).
>
> There is strong confidence that this conjecture is true, and empirically, it holds for every natural number smaller than \\(2^{68}\\)

3.1 Using the control flow `while`, given an integer \\(n\\) write a function that returns a `numpy` array \\((u\_0, u\_i, \\ldots, u\_{\\tau(n)})\\). Mathematically, also write what is the domain and codomain of this function.

3.2 Using `plotly`, provide a function where given a `numpy` array \\(x = (n\_0, \\ldots, n\_{d-1})\\) it plots \\(d\\) paths \\((u\_0, \\ldots, u\_{\\tau(n\_k)})\\) where \\(u\_0 = n\_k\\) for \\(k=0, \\ldots, d-1\\).

3.4 Write a third function where given a `numpy` array \\(x = (1, ldots, d)\\) it returns the array \\((\\tau(1), \\ldots, \\tau(d))\\).

3.5 Using `bar` ploting functionality (`fig.add_bar(...)`) of `plotly`, write a function that plot the histogram of the previous function, that is \\((l\_1, l\_2, \\ldots)\\) where

\\\[ \\begin{equation} l\_k = \\text{Cardinality}\\{n\\colon \\tau(n) = k, \\quad 0\\leq n \\leq N\\} \\end{equation} \\\]

for (depending on the performance of your computer) \\(N=1000, 10000, 100000\\).

## 4\. Scipy

4.1 Consider the function \\(x \\mapsto f(x) = x \*\* 2 + 10 \* sin(x)\\) for \\(x \\in \\mathbb{R}\\)

- plot the function
- find the minimum

4.2 For the following distributions:

- normal with std = 1, 2, 5
- student with degree of freedom 2, 3, 4, 6

Plot the pdf and cdf of each class for different parameters and compare
