# Final Report

**Overall Info**

Due date: 2024-06-23

Returns in terms of a `*.py` file with comments for the code

One report per person

## Question 1: Numpy

- Write a function `random_choice_matrix`:

  - Input: `omega` which will be an integer fixing the random seed
  - Output: `10x10` numpy array

  This function:

  a) fixes a seed using `np.random.default_rng`.

  b) create a random matrix with this seed where each row is an independent shuffeling of numbers between `1` and `10`

  For instance

  ```py
  [
    [ 8, 10,  2,  7,  4,  5,  6,  3,  9,  1 ],
    [ 7,  9,  3,  4,  1,  5,  6,  2,  8, 10 ],
    [ 6,  4,  9,  7,  2,  5, 10,  8,  3,  1 ],
    [ 6,  1,  8,  5,  7, 10,  9,  3,  2,  4 ],
    [ 1,  2,  6,  9, 10,  5,  8,  4,  7,  3 ],
    [ 7,  1,  4,  9, 10,  6,  8,  5,  3,  2 ],
    [ 6,  7,  2,  3, 10,  9,  8,  5,  1,  4 ],
    [ 8, 10,  5,  3,  7,  4,  2,  9,  1,  6 ],
    [ 8,  6,  1,  3, 10,  7,  5,  4,  9,  2 ],
    [ 5,  4,  3,  1,  7,  9,  6, 10,  2,  8 ]
  ]
  ```
- Write a function `markov_game`

  - Input: `omega` which is an integer fixing the random seed
  - Output: `final` which is a one dimensional array of size `10`

  This function:

  a) generate a matrix `matrix` from `random_choice_matrix(omega)`

  b) for each number of the first row of matrix, it moves forward in the matrix by the exact number of index of this number until it finishes and record the last number.

  For instance in the example above, if I start with `10` on the first row, I move from left to right and up to down by `10` to end at the number `9` in the second row, then I move from `9` to end up at the number `6` on the third row, etc. until you end up on a number on the last row where you can not go further.

  c) return the array for each terminal value starting from each number from the first row.
- what do you notice when you run the program for several seeds `omega`?
- `%timeit` your function and see if you can improve the efficiency of the program by using numba.

## Question 2: Performance

- Write a function `mat_mult_slow`:

  - Input: two matrices `A` of size `NxM` and `B` of size `MxK`
  - Output: matrix `C` of size `NxK`

  The function returns the matrix multiplication `AB` using **exclusively** `for loop` and basic additions/multiplications.
- Write a function `mat_mult_numpy`:

  Same input and output as above but use numpy to compute the product
- With two random matrices that you generate of size `1000x10000` and `10000x5000` report the speed of each function using `%timeit`.
- Use `numba` with the decorator `@nb.njit` and copy the function `mat_mult_slow` to define a `mat_mult_fast` and compare the speed of each function.

## Question 3: Pandas

We clean and analyse the breast cancer dataset and prepare the data in pandas first

```py
import numpy as np
import pandas as pd
from sklearn.datasets import load_breast_cancer

breast = load_breast_cancer()
print(breast)
```

The data is a dictionary with keys \* `data`: numpy array of size `Nxd` (values) \* `target`: numpy array of size `N` (label `0` and `1` for not serious and serious cancer) \* `feature_names`: numpy array of size `d` naming the nature of the columns in data

- Create a panda dataframe with `d+1` columns and `N` rows where the first `d` columns have names `feature_names` and the last column name `label`. The content of the first `d` columns are data, the content of the `label` column is `target`
- transform the dataframe of `d` columns by removing the mean from each column and dividing by the standard deviation.
- Perform a PCA of these `d` columns and get the first two components `y1` and `y2` of dimension `d` each.
- Generate a dataframe with three columns

  - `pc1`: matrix multiplication of the first component against the data
  - `pc2`: matrix multiplication of the second component against the data
  - `label`
- provide a scatter plot `pc1` against `pc2` by setting a color blue when the label is `0` and a color red when the label is `1`
- Provide mathematically what happened, and how from the results, the PCA in this case allows to classify the data.

---

# Projects

Out of the two following questions, choose one for your report.

## Project 1: ODE

The following Oscillator

\\\[ \\begin{equation\*} y^{\\prime\\prime} - \\mu(1-y^2)y^\\prime +y = 0 \\end{equation\*} \\\]

For large \\(\\mu\\) this equation exhibit rapid changes in speed and therefore is difficult to approximate. With the following variable change \\(y^\\prime = z\\) we get the first order ODE system

\\\[ \\begin{equation\*} \\begin{cases} y^{\\prime} = z\\\\ z^\\prime = \\mu(1-y^2)z - y \\end{cases} \\end{equation\*} \\\]

- Taking `mu = 1000` use your implementation of `euler_scheme` and `RK` for this equation with \\(y(0) =1\\), \\(z(0) = 0\\) starting from \\(t=0\\) to \\(t=10\\) and plot the numerical solution for different time steps \\(0.5\\), \\(0.1\\), \\(0.01\\), \\(0.001\\), ... \\(0.0001\\).
- Implement the implicit `euler_implicit_scheme` where

\\\[ \\begin{equation\*} \\begin{cases} y(t+h) &amp;= y(t) + h z(t+h)\\\\ z(t+h) &amp;= z(t) + h(\\mu(1-y^2(t+h))z(t+h) - y(t+h)) \\end{cases} \\end{equation\*} \\\]

This involves solving a root finding at every step for which you can use `scipy.optimize.root`

- Compare the result of the implicit Euler Scheme with the previous scheme for each time step as well as the speed of each methods.
- Use `numba` to speed up your `euler_scheme` and `RK` scheme and see the speed improvement results.
- Can you use `numba` to improve the `euler_implicit_scheme`?

## Project 2: Systemic Risk Computation

Given a \\(d\\) dimensional random variable \\(\\mathbf{X}\\) the goal is to compute the values \\(\\mathbf{m} = (m\_1, \\ldots, m\_d)\\) argmin in \\(\\mathbf{m}\\) of

\\\[ \\begin{equation\*} F(\\mathbf{m}, \\mathbf{X})= E\\left\[\\ell\\left(X\_1 - m\_1, \\ldots, X\_d - m\_d\\right)\\right\] \\end{equation\*} \\\]

where

\\\[ \\begin{equation\*} \\ell(z\_1, \\ldots, z\_d) = \\sum\_{k,l} \\alpha \\left((x\_k+x\_l)^+\\right)^2 +(1-\\alpha)\\left((x\_k + x\_l)^-\\right)^2 \\end{equation\*} \\\]

where \\(x^+ = \\max\\{x, 0\\}\\) and \\(x^- = \\max\\{-x, 0\\}\\) are the positive and negative parts of \\(x\\) and \\(1/2 \< \\alpha \< 1\\) is a parameter.

> [!NOTE]
>
> The result of this function is computed daily as to decide how much different financial institution have to pay in insurance to cover the systemic risk they provide to the financial system. If institution \\(k\\) is very risky for the overall system, it has to pay an amount \\(m\_k\\) larger to the common insurance.
>
> Now the problem of this computation is that usually \\(d\\) is quite large (from 100 to thousands) and \\(\\mathbf{X}\\) which represents the returns of each institution changes every day.
>
> The expectation in \\(F\\) takes joint integrals which are quite expensive to compute while you search for the argmin.

- Define a function `loss` that takes as input `alpha` a number and `z` a `d` dimensional array and returns \\(\\ell(\\mathbf{z})\\).
- Given
- `N` samples `x_n` of dimension `d`
- A vector `m` of dimension `d`
- `alpha` number

Provide a function that returns the Monte Carlo estimation of \\(F(m, X)\\)

- Implement the numerical gradient of the previous function
- Implement the gradient descent function (take a tolerance of `1e-4` and max iterations of `10000`.).
- Run tests using the following code to generate `N` samples of `d` dimensional normal distributed normal distribution (use `d = 3, 5, 10`)

```py
# fix dimension
import numpy as np
d = 4
omega0 = 10  # seed to generate the constants
omega1 = 20  # seed to generate the sample.

# create a random d*d matrix, a random eigenvalue one, get q from qr and generate Sigma
rng0 = np.random.default_rng(omega0)
eigenval = np.diag(rng0.uniform(low=0.1, high=1, size=d))
q, _ = np.linalg.qr(rng0.normal(size=(d, d)))
Sigma = q.dot(eigenval).dot(q.T)

# generate N random samples from multivariate
N = 100000
rng1 = np.random.default_rng(omega1)
x = rng1.multivariate_normal(mean=np.zeros(d), cov=Sigma, size=N)
```

- Check the accuracy of the results by changing the value of `omega1` (different samples) as well as the speed.
- improve the speed of your application using `numba`
- implement the stochastic gradient descent on this example and compare the speed and accuracy.

## Project 3: Image Classification

We consider the *Hello World* problem of machine learning, namely classifying from images of handwritten digits the value of the digit from \\(0\\) to \\(9\\). We use a small set of ML procedures to decide given an image (input \\(\\mathbf{x}\\)) if is a \\(0\\) or \\(1\\) (output \\(y\\)), that is

\\\[ \\begin{equation\*} y \\approx f(\\mathbf{x}) \\end{equation\*} \\\]

We will try

1. Linear Regression
2. Logistic (multivariate) regression
3. Support Vector Machine
4. (optional) Neural Network

(you can also try PCA as for the cancer test problem)

### Data preparation

We use a small dataset provided by `sklearn` package: The data is a dictionary with keys \* `data`: numpy array of size `Nxd` (values) \\(N\\) for the number of images \\(d=64 = 8x8\\) for the value of each pixel. \* `target`: numpy array of size `N` (label `0` and `1`)

We split the data into a training and testing set using a functionality of scikit learn.

```py
import numpy as np
import pandas as pd
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split

# load the data set
digits = load_digits()

# We split the set (data and target) into a 50/50% train and test set
X_train, X_test, y_train, y_test = train_test_split(digits.data, digits.target, test_size=0.5, shuffle=False)
```

### 1\. Linear regression

- Implement and perform the linear regression on the training set such that

  \\\[ \\begin{equation\*} Y \\approx \\mathbf{w}\\cdot \\bar{\\mathbf{X}} \\end{equation\*} \\\]

  in the square sense where \\(\\bar{\\mathbf{X}}\\) is augmented by one dimension with a constant \\(1\\).

An image is successfully classified as being a number \\(k\\) if \\(k-1/20\<\\mathbf{w}^\\ast \\cdot \\bar{\\mathbf{x}}\<k+1/20\\) (if \\(k=0\\) then no lower bound and if \\(k=9\\) no upper bound).

- Create two dataframes:

  - `df_train`: with two columns `label` and `prediction` where `label` contains the values of `y_train` and `prediction` contains `prediction(x_train)`
  - `df_test`: with two columns `label` and `prediction` where `label` contains the values of `y_test` and `prediction` contains `prediction(x_test)`
- Compute the dataframes `conf_train` and `conf_test` with index and columns `0, 1, ..., 9` and with values `a[i,j]` equal to the ratio of the number of images `i` predicted as `j`.
- plot using `imxshow` the heatmap of this confusion matrix for the train and test set.

### 2\. Multivariate logistic regression

Our problem is of categorical type and therefore approximating with a linear functional is not that adequate. We adopt another strategy where we try to approximate \\(y\\) in terms of probability.

In other terms we intend to find a distribution depending on the input that approximate the probability that the output is equal to \\(k\\). For this we make a parametrized guess for the such a probability density \\(P\[Y=k\] \\approx p\_k(\\mathbf{x}|\\mathbf{w}\_1, \\ldots, \\mathbf{w}\_9)\\) and given by

\\\[ \\begin{equation\*} \\begin{cases} p\_k(\\mathbf{x})&amp;= \\frac{e^{\\mathbf{w}\_k\\cdot \\mathbf{x}}}{1+\\sum\_{l=1}^9 e^{\\mathbf{w}\_l\\cdot \\mathbf{x}}} &amp; k=1, \\ldots 9\\\\ p\_0(\\mathbf{x}) &amp;=1-\\sum\_{k=1}^9 P\[Y=k\] \\end{cases} \\end{equation\*} \\\]

We want to find \\(\\mathbf{w}\_1, \\ldots, \\mathbf{w}\_9\\) in \\(\\mathbb{R}^{64}\\) that matches the most the empirical observed probability. This corresponds to maximizing the (log) likelihood function

\\\[ \\begin{equation\*} \\ell(\\mathbf{w}\_1, \\ldots, \\mathbf{w}\_9) = \\sum\_{n=1}^N \\sum\_{k=0}^9 \\Delta(k, y\_n)p\_k(\\mathbf{x}\_n) \\end{equation\*} \\\]

where \\(\\Delta(k, y\_n)\\) is equal to \\(1\\) is \\(y\_n = k\\) and \\(y\_n = 0\\) otherwise.

- Implement the log likelhood function and its gradient.
- using gradient descent, find the vectors \\(\\mathbf{w}\_1,\\ldots, \\mathbf{w}\_9\\) that minimize \\(-\\ell\\).

As for the prediction function, an image \\(y\\) is classified as being \\(k\\) if \\(p\_k(\\mathbf{x}) \> p\_l(x)\\) for any other \\(l\\).

As above,

- Create two dataframes:

  - `df_train`: with two columns `label` and `prediction` where `label` contains the values of `y_train` and `prediction` contains `prediction(x_train)`
  - `df_test`: with two columns `label` and `prediction` where `label` contains the values of `y_test` and `prediction` contains `prediction(x_test)`
- Compute the dataframes `conf_train` and `conf_test` with index and columns `0, 1, ..., 9` and with values `a[i,j]` equal to the ratio of the number of images `i` predicted as `j`.
- plot using `imxshow` the heatmap of this confusion matrix for the train and test set.

### 3\. Support vector Machine

We won't see the implementation of support vector machine (though it is not difficult but involves constrained optimization problems that we didn't see), the idea is to separate group of points by an hyper plane to classify them into two or more categories.

In a two classification framework with data points \\((\\mathbf{x}\_n, y\_n)\\) where \\(y\_n = \\pm 1\\), we want to find and hyper plane \\(\\mathbf{w}\\cdot \\mathbf{x} - b\\) such that \\(\\mathbf{x}\\cdot \\mathbf{x}\_n - b \\geq 0\\) if \\(y\_n =1\\) and \\(\\mathbf{w}\\cdot \\mathbf{x}\_n - b\<0\\) if \\(y\_n = -1\\).

It involves simple quadratic optimization problem with linear constraints that are quite efficient to solve even in high dimensions. Extensions are done in the multidimensional case.

- Follow the [example](<https://scikit-learn.org/dev/auto_examples/classification/plot_digits_classification.html>) from scikit learn to perform the svm clustering and compare the results with your previous implementations.

Follow the
