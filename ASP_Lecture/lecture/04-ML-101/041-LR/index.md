# Linear Regression

Regression is a widely used way to decompose some output \\(Y\\) into a meaningful function \\(f\\) of inputs \\(\\mathbf{X}= (X\_1 , \\ldots , X\_d)\\) and some noise \\(\\varepsilon\\)

\\\[ \\begin{equation\*} Y \\approx f(\\mathbf{X}) + \\varepsilon \\end{equation\*} \\\]

Ideally, \\(\\varepsilon\\) should be somehow "orthogonal" to \\(f(\\mathbf{X})\\). A natural way is to consider the \\(L^2\\) norm between \\(Y\\) and \\(f(\\mathbf{X})\\) as \\(L^2\\) is an Hilbert space and projections are easily understandable. In other terms, the best function \\(f^\\ast\\colon \\mathbb{R}^d \\to \\mathbb{R}\\) shall satisfy

\\\[ \\begin{equation\*} f^\\ast = \\mathrm{argmin} \\left\\{E\\left\[\\left(Y - f(\\mathbf{X}) \\right)^2\\right\] \\colon f \\in \\mathcal{C}\\right\\} \\end{equation\*} \\\]

where \\(\\mathcal{C}\\) is a set of possible functions. If considering any possible function \\(f\\), the optimization problem is too large. Therefore, most regression approaches consider a smaller parametrized subset of functions of finite dimension. The most prominent example are the affine functions

\\\[ \\begin{equation\*} \\mathcal{C} = \\left\\{f(\\mathbf{x})=a + \\mathbf{b}\\cdot \\mathbf{x}: (a, b) \\in \\mathbb{R}\\times \\mathbb{R}^d\\right\\} \\end{equation\*} \\\]

refered to as **Ordinary Least Square** regression.

> [!NOTE]
>
> **Further Constraints or Specifications can be Considered**
>
> For additional robustness, further constraints are imposed on the set \\(\\mathcal{A}\\) of those \\((a, \\mathbf{b})\\) allowed in the linear regression, or fixed transformation of the input variables \\(\\mathbf{x}\\). But the problem is still linear or convex in \\((a, \\mathbf{b})\\).
>
> - **Ridge Regression:** intends to keep the possible factors into some constraint set in the \\(\\ell^2\\) sense
>
>   \\\[ \\begin{equation\*} \\mathcal{A} = \\left\\{(a, \\mathbf{b})\\colon \\sum |b\_k|^2 = \\|\\mathbf{b}\\|\_2^2 \\leq \\lambda\\right\\} \\end{equation\*} \\\]
>
>   for a given smoothing factor \\(\\lambda\\). Convex constraint to prevent dispersion of the coefficients.
> - **Lasso Regression:** same as Lasso but in terms of absolute value or \\(\\ell^1\\) sense, that is
>
>   \\\[ \\begin{equation\*} \\mathcal{A} = \\left\\{(a, \\mathbf{b})\\colon \\sum |b\_k| = \\|\\mathbf{b}\\|\_1 \\leq \\lambda\\right\\} \\end{equation\*} \\\]
>
>   For a given smoothing factor \\(\\lambda\\).
>
> Some mix of Lasso and Ridge yields to further regression types (elastic net, group lasso, fuse lasso, etc.).
>
> Sometimes the data output in clearly not linear in the input, but of polynomial order \\(n\\). If we define \\(\\bar{\\mathbf{x}}\\) as the vector of all monomial powers of \\(\\mathbf{x}\\) (that is the vector of those \\(\\prod\_{i=1}^d x\_i^{\\alpha\_i}\\) where \\(\\sum \\alpha\_i\\leq n\\)), then we can consider the polynomial regression where
>
> \\\[ \\begin{equation\*} \\left\\{f(\\mathbf{x}) = a + \\bar{b}\\cdot \\bar{x}\\right\\} \\end{equation\*} \\\]
>
> which remains linear in the factors \\((a, \\bar{\\mathbf{x}})\\) even if we try to match \\(Y\\) as a polynomial function of the factor. Note that the number of factors increases very fast in that case, and can lead to a problem of over fitting.

## Some Math Preliminaries

> [!NOTE]
>
> For ease of notations and further computations (in the end \\(\\mathbf{b}\\) is a gradient), we assume that \\(\\mathbf{b}\\) is a column vector and write the affine function in terms of matrix calculus \\(a + \\mathbf{b}\\cdot \\mathbf{x} = a + \\mathbf{x}\\mathbf{b}\\).
>
> Furthermore, the affine problem can be transformed into a linear one by adding a dimension. Indeed, for \\(\\bar{\\mathbf{X}} =(1, \\mathbf{X})\\) and \\(\\bar{\\mathbf{b}} = \[a, \\mathbf{b}^\\top\]^\\top\\) we have \\(a + \\mathbf{X}\\mathbf{b} = \\bar{\\mathbf{X}}\\bar{\\mathbf{b}}\\). Hence modulo adding a dimension, we just consider linear functions, and throughout we will always assume that the first entry of \\(\\mathbf{X}\\) is identically \\(1\\).

In the OLS case, solving the minimization problem \\(\\mathbf{b}^\\ast = \\mathrm{argmin} \\{E\[(Y - \\mathbf{b}\\cdot \\mathbf{X}) )^2\] \\colon \\mathbf{b} \\in \\mathbb{R}^d\\}\\) is straightforward. The objective function is convex and smooth in \\(\\mathbf{b}\\) and uniformly bounded from below by \\(0\\). Hence, the global minimum if it exists is characterized by the gradient (column vector) of the objective function being equal to \\(0\\), that is

\\\[ \\begin{equation\*} \\nabla\_{\\mathbf{b}} E\\left\[\\left(Y - \\mathbf{X}\\mathbf{b}\\right)^2\\right\] = -2E\\left\[ \\mathbf{X}^\\top\\left(Y - \\mathbf{X} \\mathbf{b} \\right)\\right\] = 0 \\end{equation\*} \\\]

> [!CAUTION]
>
> **Proposition**
>
> Given square integrable random variables \\(Y\\) and \\(\\mathbf{X}\\) (\\(d\\)-dimensional). Provided that the *Gram* matrix \\(\\mathbf{Q}:=E\[\\mathbf{X}^\\top\\mathbf{X}\]\\) (which is positive semidefinite) is invertible, it follows that
>
> \\\[ \\begin{equation\*} \\mathbf{b}^\\ast =E\\left\[\\mathbf{X}^\\top\\mathbf{X}\\right\]^{-1}E\\left\[\\mathbf{X}^\\top Y\\right\] \\quad \\text{and} \\quad \\mathbf{\\varepsilon}^\\ast := Y - \\mathbf{X}\\mathbf{b}^\\ast \\end{equation\*} \\\]
>
> are the optimal OLS coefficient and error value, respectively. It holds
>
> \\\[ \\begin{equation\*} E\\left\[ \\mathbf{X}^\\top \\varepsilon^\\ast \\right\] = E\\left\[ X^\\top\\left(Y - \\mathbf{X} \\mathbf{b}^\\ast \\right)\\right\]=0 \\end{equation\*} \\\]

In order to estimate the quality of the error, we consider the following

- **Residual Variance:** variance of the residual error \\(\\varepsilon\\). (1)

  1. Since we extended the problem by one dimension for the linear regression, the mean of the error is equal to \\(0\\).

  \\\[ \\begin{equation\*} \\mathrm{RVAR} = \\mathrm{VAR}(\\varepsilon) = E\\left\[ (Y - \\mathbf{X}\\mathbf{b}^\\ast)^2 \\right\] \\end{equation\*} \\\]
- **Total Variance:** variance of \\(Y\\)

  \\\[ \\begin{equation\*} \\mathrm{TVAR} = \\mathrm{VAR}(Y) = E\[(Y - E\[Y\])^2\] \\end{equation\*} \\\]
- **Coefficient of Determination:** number between \\(0\\) and \\(1\\)

  \\\[ \\begin{equation\*} R^2 = 1 - \\frac{\\mathrm{RVAR}}{\\mathrm{TVAR}} = 1 - \\frac{\\mathrm{VAR}(\\varepsilon)}{\\mathrm{VAR}(Y)} \\end{equation\*} \\\]

In particular if the approximation is perfect, then \\(\\mathrm{RVAR}\\) is equal to \\(0\\) and \\(R^2 = 1\\). If the approximation can only explain the mean, then \\(\\mathrm{RVAR} = \\mathrm{TVAR}\\) and \\(R^2 = 0\\).

## From Random Variables to Data (and Back)

Random variables are idealized objects, while in reality we usually observe samples from those.

> [!CAUTION]
>
> **What does it mathematically mean "Sampling"?**
>
> Drawing \\(N\\) iid samples \\(x\_1, \\ldots, x\_N\\) from the distribution of a random variable \\(X\\) is as follows.
>
> 1. Take \\(N\\) iid copies \\(X\_1, \\ldots, X\_N\\) of \\(X\\).
> 2. Choose a state \\(\\omega\\) in \\(\\Omega\\).
> 3. Define \\(x\_1 = X\_1(\\omega)\\), ...,\\(x\_N = X\_N(\\omega)\\)
>
> From this definition, a sample is itself a sequence of the evaluation in a given state \\(\\omega\\) of those identical and independent copies of \\(X\\). From now on we denote by \\(\\mathbf{x}^{(N)}\\) a sample of size \\(N\\) of the random variable and if we want to stress the dependence of the choice of \\(\\omega\\), we write \\(\\mathbf{x}^{(N)}(\\omega)\\).
>
> From a computer perspective, you fix a **seed** that you can think of \\(\\omega\\), and then generate the random sequence \\(\\mathbf{x}^{(N)} = \\mathbf{x}^{(N)}(\\omega) = (x\_1,\\ldots, x\_N)\\) which corresponds to \\(x\_n = X\_n(\\omega)\\).
>
> ```py
> import numpy as np
>
> # fix the number of samples
> N = 5
>
> # fix a seed omega
> omega = 150
> rng = np.random.default_rng(seed = omega)
>
> # Generate N random samples from a normal distribution with mean 0 and standard deviation 0.2
> x = rng.normal(1, 0.2, size = N)      # generate N independent copies of N(1, 0.2) evaluated at omega
> print(f"First draw with omega = {omega} result into:\n{x}")
>
> # draw again with the same omega
> omega = 150
> rng = np.random.default_rng(seed = omega)
> x = rng.normal(1, 0.2, size = N)
> print(f"Second draw with omega = {omega} result into:\n{x}")
>
> # change omega
> omega = 20
> rng = np.random.default_rng(seed = omega)
> x = rng.normal(1, 0.2, size = N)
> print(f"Third draw with omega = {omega} result into:\n{x}")
>
> # set omega to a 'random' choice depending on the clock of the computer
> omega = None
> rng = np.random.default_rng(seed = omega)
> x = rng.normal(1, 0.2, size = N)
> print(f"fourth draw with None (random) omega = {omega} result into:\n{x}")
>
> # Draw again with omega set to None
> omega = None
> rng = np.random.default_rng(seed = omega)
> x = rng.normal(1, 0.2, size = N)
> print(f"Another draw with None set as omega = {omega} result into:\n{x}")
> ```

> [!WARNING]
>
> Throughout, we assume that those samples are identically drawn from the joint distribution \\(\\mathcal{L}aw(Y, \\mathbf{X})\\). This doesn't always need to be the case. For instance for time series, there night be some past dependence between consecutive draws, but in that case the arguments below strongly need to be modified.

For ease of notations, we stack the sample \\((\\mathbf{y}^N, \\mathbf{x}^{(N)})\\) into vectors and matrices

\\\[ \\begin{equation\*} \\mathbf{y} := \\mathbf{y}^{(N)}= \\begin{bmatrix} y\_1\\\\ \\vdots \\\\ y\_N \\end{bmatrix} \\quad \\text{and} \\quad \\mathbf{x}:= \\mathbf{x}^{(N)} = \\begin{bmatrix} \\mathbf{x}\_1\\\\ \\vdots\\\\ \\mathbf{x}\_N \\end{bmatrix}= \\begin{bmatrix} x\_{11}&amp; \\cdots &amp; x\_{1d}\\\\ \\vdots &amp; \\ddots &amp; \\vdots\\\\ x\_{N1}&amp; \\cdots &amp; x\_{Nd}\\\\ \\end{bmatrix} \\end{equation\*} \\\]

By the law of large numbers it holds

\\\[ \\begin{equation\*} E\\left\[\\mathbf{X}^\\top Y\\right\] \\approx \\frac{1}{N}\\sum\_{n=1}^N \\mathbf{x}\_n^\\top y\_n = \\mathbf{x}^\\top\\mathbf{y} \\quad \\text{and} \\quad E\\left\[\\mathbf{X}^\\top \\mathbf{X}\\right\] \\approx \\frac{1}{N}\\sum\_{n=1}^N \\mathbf{x}\_n^\\top \\mathbf{x}\_n = \\frac{1}{N} \\mathbf{x}^\\top \\mathbf{x} \\end{equation\*} \\\]

showing that given a sample \\((\\mathbf{y}^{(N)}, \\mathbf{x}^{(N)})\\) we have an approximation of the OLS given by

\\\[ \\begin{equation\*} \\hat{\\mathbf{b}}^{(N)} = \\left(\\mathbf{x}^\\top \\mathbf{x}\\right)^{-1}\\mathbf{x}^\\top \\mathbf{y} \\quad \\text{and} \\quad \\hat{\\varepsilon}^{(N)} := \\mathbf{y} - \\mathbf{x}\\hat{\\mathbf{b}} \\end{equation\*} \\\]

> [!NOTE]
>
> **How Good is the Sample Approximation?**
>
> Two things happened here.
>
> 1. We have a number \\(N\\) of independent copies of \\((Y, \\mathbf{X})\\)
> 2. We choose a state \\(\\omega\\) and get the sample \\(\\mathbf{y}^{(N)}(\\omega)\\), \\(\\mathbf{x}^{(N)}(\\omega)\\).
>
> From the law of large numbers we know that when \\(N\\) goes to infinity then \\(\\hat{\\mathbf{b}}^{(N)}(\\omega) \\to \\mathbf{b}^\\ast\\) for almost any choice of \\(\\omega\\).
>
> However, this error depends on the choice of \\(\\omega\\) as well as the number \\(N\\) of samples drawn.

To estimate the quality of the error we define

- **reduced \\(\\chi\\)-square statistics**:

  \\\[ \\begin{equation\*} \\hat{s}^2 = \\hat{s}^{2, (N)}(\\omega) = \\frac{\\hat{\\varepsilon}^\\top \\hat{\\varepsilon}}{N-d} \\end{equation\*} \\\]

  which is an unbiased estimation of the variance \\(\\hat{\\sigma}^2 = \\hat{\\varepsilon}^\\top \\hat{\\varepsilon}/N\\) which almost coincide for \\(N\\) large.

  Furthermore, by the law of large numbers, \\(\\hat{s}^{2, (N)}(\\omega)\\) \\(\\hat{\\sigma}^{2,(N)}(\\omega)\\) both converges to the residual variance \\(\\mathrm{RVAR}\\).
- **Empirical Coefficient of Determination**:

  \\\[ \\begin{equation\*} \\hat{R}^2 = \\hat{R}^{2, (N)} = 1 - \\frac{\\mathrm{VAR}(\\hat{\\epsilon}^{(N)})}{\\mathrm{VAR}(\\mathbf{y}^{(N)})} \\end{equation\*} \\\]

  It also holds that \\(\\hat{R}^{2, (N)}(\\omega)\\) converges for almost all \\(\\omega\\) as \\(N\\) goes to \\(\\infty\\) to \\(R^2\\).

## Implementation in Numpy

A naive implementation of the OLS linear regression is relatively simple and is done as follows. In this context, we just generate some random data to illustrate the situation. We give ourselves a fixed dimension \\(d\\) and consider the model

\\\[ \\begin{equation\*} Y = \\mathbf{X} \\mathbf{b} + \\varepsilon \\end{equation\*} \\\]

where \\(\\mathbf{b}\\) is given, \\(\\mathbf{X} \\sim \\mathcal{N}(\\mathbf{\\mu}, \\mathbf{\\Sigma})\\) is a multidimensional normal distribution with given mean \\(\\mathbf{\\mu}\\) in \\(\\mathbb{R}^d\\) and given covariance matrix \\(\\mathbf{\\Sigma}\\) in \\(R^{d\\times d}\\). However, we augment \\(\\mathbf{X}\\) by a dimension equal to \\(1\\).

### Model

We will fix

1. `d` is fixed as the begining for the dimension
2. `N` is the number of samples
3. `omega0`: is a seed to generate and fix given \\(d\\) the parameters `b`, `mu` and `Sigma`.
4. `omega1`: is a seed to draw `N` random samples `x` and `epsilon` from \\(\\mathbf{X}\\) and \\(\\varepsilon\\).

> [!NOTE]
>
> **Generating an arbitrary multidimensional random variable**
>
> There are many multivariate random variable specifications in terms of their distribution, moment generating function or copulas. One of the easiest way is in the class of elliptical distributions that mainly depends on giving a positive semi-definite matrix \\(\\Sigma\\) in \\(R^{d\\times d}\\). It is cumbersome to generate a an arbitrary (random) positive semi definite matrix for a given dimension for testing purposes that is sufficiently random so that it does not influence too much the effect we want to see from real world data problems.
>
> A simple way is to take an orthonormal matrix \\(Q\\) (for instance from the QR factorization of a random matrix which with probability one is going to be orthonormal) and a diagonal matrix of positive eigenvalues.

Set the parameters of the theoretical model.

```py
# import the libraries
import numpy as np
import pandas as pd
import plotly.express as px
import plotly.graph_objs as go
# for nice printing use rich library (pip install rich)
from rich import print
from rich.markdown import Markdown

# set the fixed variables
d = 3
omega0 = 10  # seed to generate the constants

# set the fixed variables
d = 10
omega0 = 10  # seed to generate the constants
omega1 = 20  # seed to generate the sample.

# %%
# We set the constant for our test by fixing the random number generator
rng0 = np.random.default_rng(omega0)

# b, and mu, Sigma and sigma (for the error)
b = rng0.uniform(low=-2, high=2, size=d + 1)  # random vector between -2 and 2
mu = rng0.uniform(low=-0.1, high=0.1, size=d)  # random vector between -0.1 and 0.1
sigma = 2
# create a random d*d matrix, a random eigenvalue one, get q from qr and generate Sigma
eigenval = np.diag(rng0.uniform(low=0.1, high=1, size=d))
q, _ = np.linalg.qr(rng0.normal(size=(d, d)))
Sigma = q.dot(eigenval).dot(q.T)

# We compute the theoretical values of sigma2 and r2
sigma2 = sigma**2
r2 = 1 - sigma**2 / (sigma**2 + b[1:].dot(Sigma).dot(b[1:].T))

print(
    Markdown(
        f"""
# Model values
* Characteristics of the input:
    * Mean:\n
        {mu}
    * Covariance:\n
        {Sigma}
    * Error volatility:\n
        {sigma: 0.2f}

* Characteristic of the output:
    * Coefficient:\n
        {b}

# Theoretical values

| Name       | Variable   | Value         |
|:-----------|:-----------|--------------:|
| s^2        | sigma2     | {sigma2:.02f} |
| R^2        | r2         | {r2:.02%}     |
"""
    )
)
```

For a given number of sample `N` and a seed `omega1` generate the model and run the linear regression.

```py
# Fix N and the random number generator
N = 50
rng1 = np.random.default_rng(omega1)

# Data generation
epsilon = rng1.normal(loc=0, scale=sigma, size=N)
x = rng1.multivariate_normal(mean=mu, cov=Sigma, size=N)

# expand x and get y
x = np.column_stack((np.ones(N), x))
y = x.dot(b.T) + epsilon

# Perform linear regresssion
b_hat = np.linalg.inv(x.T.dot(x)).dot(x.T).dot(y)
epsilon_hat = y - x.dot(b_hat)

# Empirical sigma2 and r2
sigma2_hat = epsilon_hat.dot(epsilon_hat) / (N - d - 1)
r2_hat = 1 - (epsilon_hat.std() ** 2) / (y.std() ** 2)

print(
    Markdown(
        f"""
# Result

* Coefficient:
    * Theoretical:\n
    {b}
    * Empirical:\n
    {b_hat}

| Name       | Empirical          | Theoretical   |
| :--------- | :---------         | ----------:   |
| s^2        | {sigma2_hat: .02f} | {sigma2:.02f} |
| R^2        | {r2_hat:.02%}      | {r2:.02%}     |
"""
    )
)

# Plot difference between empirical and theoretical coeficients
fig = go.Figure()
fig.add_bar(x=np.arange(d + 1), y=b, name="Theoretical")
fig.add_bar(x=np.arange(d + 1), y=b_hat, name="Empirical")
fig.show()
```

The results depends on the choice of `N` and the seed `omega1` at the beginning.

### Asymptotical Accuracy of OLS with respect to `N`

We first have a look at the influence of the number of samples. For ease of data manipulation we use pandas

```py
import pandas as pd
pd.options.plotting.backend = "plotly"

# create a series of different number of samples
dfN = pd.Series(np.arange(d + 10, 500, 10), name="N")
dfN.index = dfN

# we use pandas apply to generate and store the values
def lin_reg(row):
    N = row
    rng1 = np.random.default_rng(omega1)
    epsilon = rng1.normal(loc=0, scale=sigma, size=N)
    rng1 = np.random.default_rng(omega1)
    x = rng1.multivariate_normal(mean=mu, cov=Sigma, size=N)
    # expand the dimension of x by adding a column of ones
    x = np.column_stack((np.ones(N), x))
    # compute y
    y = x.dot(b.T) + epsilon
    # We now estimate the parameters of the model
    b_tmp = np.linalg.inv(x.T.dot(x)).dot(x.T).dot(y)
    epsilon_tmp = y - x.dot(b_tmp)
    # error estimation
    sigma2_tmp = epsilon_tmp.dot(epsilon_tmp) / (N - d - 1)
    r2_tmp = 1 - (epsilon_tmp.std() ** 2) / (y.std() ** 2)
    # put the constant value
    result = {"a": b_tmp[0]}
    # put the further coeeficients
    result.update({f"b_{k}": b_tmp[k] for k in range(1, d + 1)})
    result.update({"sigma2": sigma2_tmp, "r2": r2_tmp})
    return pd.Series(result)

result = dfN.apply(lin_reg)

display(results)

# plot the empirical coefficients as a function of N with their theoretical values
fig = go.Figure()
# the constant coefficient
fig.add_scatter(x = result.index, y = result["a"], name = "a_hat")
fig.add_hline(
    y = b[0],
    line_dash="dot",
    line_color="grey",
    annotation_text="a",
    annotation_position="top right"
)
for k in range(1, d + 1):
    # the variable coefficients
    fig.add_scatter(x = result.index, y = result[f"b_{k}"], name = f"b_{k}_hat")
    fig.add_hline(
        y = b[k],
        line_dash = "dot",
        line_color = "grey",
        annotation_text = f"b_{k}",
        annotation_position="top right"
    )
fig.show()

# Plot the empirical s2 and r2 as a function of N with their theoretical values
fig = go.Figure()
fig.add_scatter(x = result.index, y = result["sigma2"], name = "s2_hat")
fig.add_hline(
    y = sigma2,
    line_dash = "dot",
    line_color = "grey",
    annotation_text = "s2",
    annotation_position = "top right"
)
fig.show()

fig = go.Figure()
fig.add_scatter(x = result.index, y = result["r2"], name = "r2_hat")
fig.add_hline(
    y = r2,
    line_dash = "dot",
    line_color = "grey",
    annotation_text = "r2",
    annotation_position = "top right"
)
fig.show()
```

This gives you a *feeling* how the convergence of the different parameters and error estimations behaves as a function of the number of samples `N`.

### Distributional Behavior of the OLS for given `N`

A similar question is related to the fact that given a number of `N` of samples, how *"accurate"* are your estimations? In the previous example even while modifying `N` we kept using the same random generator with a fixed seed (you can run the code many times, the result will be the same). We now, fix `N` but let the computer choose a seed at will at each draw (either draw random seeds or set it to `None`)

```py
N = 100
number_seeds = 5000

dfomega = pd.Series(np.arange(number_seeds), name="omega")
dfomega.index = dfomega


# we use pandas apply to generate and store the values
def lin_reg(row):
    rng1 = np.random.default_rng(seed=None)
    epsilon = rng1.normal(loc=0, scale=sigma, size=N)
    rng1 = np.random.default_rng(None)
    x = rng1.multivariate_normal(mean=mu, cov=Sigma, size=N)
    # expand the dimension of x by adding a column of ones
    x = np.column_stack((np.ones(N), x))
    # compute y
    y = x.dot(b.T) + epsilon
    # We now estimate the parameters of the model
    b_tmp = np.linalg.inv(x.T.dot(x)).dot(x.T).dot(y)
    epsilon_tmp = y - x.dot(b_tmp)
    # error estimation
    sigma2_tmp = epsilon_tmp.dot(epsilon_tmp) / (N - d - 1)
    r2_tmp = 1 - (epsilon_tmp.std() ** 2) / (y.std() ** 2)
    # put the constant value
    result = {"a": b_tmp[0]}
    # put the further coeeficients
    result.update({f"b_{k}": b_tmp[k] for k in range(1, d + 1)})
    result.update({"sigma2": sigma2_tmp, "r2": r2_tmp})
    return pd.Series(result)


result = dfomega.apply(lin_reg)

# plot the histogram of the variables
data = result.loc[:, ~result.columns.isin(["r2", "sigma2"])] - b
cols = 2
if len(b) % cols == 0:
    rows = len(b) // cols
else:
    rows = (len(b) // cols) + 1
print(rows)

fig = make_subplots(
    rows=rows,
    cols=cols,
    shared_xaxes=True,
    vertical_spacing=0.1,
    shared_yaxes=True,
    horizontal_spacing=0.1,
)

for i, col in enumerate(data.columns):
    fig.add_trace(
        go.Histogram(x=data[col], name=col, histnorm="probability"),
        row=(i // cols) + 1,
        col=(i % cols) + 1,
    )

fig.show()

# plot the histogram of r2 and sigma2
fig = make_subplots(rows=1, cols=2, shared_yaxes=True)
fig.add_trace(
    go.Histogram(x=result["sigma2"], name="sigma2", histnorm="probability"),
    row=1,
    col=1,
)
fig.add_trace(
    go.Histogram(x=result["r2"], name="r2", histnorm="probability"), row=1, col=2
)
fig.show()
```

## Statsmodels with Real Data

The statistical package `statsmodels` as well as the machinlearning one `sklearn` do have implementations of any linear regressions.

For illustration, we make use of `statsmodel` with a wine dataset (see homework)
