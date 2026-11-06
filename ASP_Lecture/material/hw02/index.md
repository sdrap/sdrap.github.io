# Homework 02

**Overall Info**

Due date: 2024-04-22

Returns in terms of a `*.py` file with comments for the code

By group of 5-6 students

## 1\. Monte Carlo Convergence

We compute the following expectation

\\\[ \\begin{equation} E\[(X - K)^+\] = \\int\_{-\\infty}^{\\infty}(x-K)^+ dF\_X(x) = \\int\_{-\\infty}^{\\infty}(x-K)^+ f\_X(x)dx \\end{equation} \\\]

where \\(K\\) is a constant, \\(F\_X\\) is the `cdf` of \\(X\\) and \\(f\_X=dF\_X/dx\\) is the `pdf` of \\(X\\).

We assume throughout that \\(X\\sim \\mathcal{N}(\\mu, \\sigma^2)\\) is a guaussian distribution with mean \\(\\mu\\) and standard deviation \\(\\sigma\\). Such a random variable is declared in `scipy` as follows

```py
from scipy.stats import norm

mu = 0.5
sigma = 0.2

RV = norm(loc = mu, scale = sigma)
```

1.1 Define a function `expectation` that takes as input the random variable `RV`, the constant `K` and return the value of the integral using `quad`.

1.2 Define a function `mc_expectation` that takes as input the random variable `RV`, the constant `K` and the natural number `N` (the number of samples) that retuns a `numpy` vector `[I_0, ..., I_{N-1}]` where

\\\[ \\begin{equation} I\_k = \\frac{1}{k} \\sum\_{l=0}^{k-1} (x\_k-K)^+ \\end{equation} \\\]

where `x = [x_0, \ldots, x_{N-1}]` is a random sample from the distribution of \\(X\\).

1.3 For \\(N = 100000\\), with a plotly graph, plot

- The constant function `expectation(RV, K)` for `n=0, ..., N-1`
- 10 functions `mc_expectation(RV, K, N)` (they already return a vector `I = [I_0, ..., I_{N-1}]`)

Comment on the speed of convergence of monte carlo method (you can vary \\(N\\) as well as the number of monte carlo samples you compute).

# 2\. Quantile: exact vs MC methods

From the lecture we know

****Value at Risk:****

The value at risk is defined as \\(V@R\_{\\alpha}(X) = q\_X(1-\\alpha) = F\_X^{-1}(1-\\alpha)\\) where \\(q\_X\\) is the quantile of \\(X\\).

Leads to three methods to compute it.

- You already have a `ppf` function at hand for the quantile
- You compute the inverse of the `cdf` using `root`
- You have just random sample of the distribution and compute the empirical quantile.

2.1 Define a `quantile00` function that takes as input a known `RV` and a number `0<u<1` and return the quantile with a root finding method to invert the `cdf`

2.2 Compare the speed of computation for different `RV` (normal, student, normal inverse guaussian from the `scipy.stats` library) of this function with respect to the `ppf` function of those random variable.

2.3 Sometimes, you do not have access to the `ppf` or `cdf` explicitely but just have \\(N\\) random samples \\(x^N = (x\_0^N, ..., x^N\_{N-1})\\) of this random variable. Numpy has a functionality to return the quantile of a random sample (there are many ways to interpolate it, see documnetation). Given a random sample (as a numpy array) `x=[x_0, ..., x_{N-1}]` the quantile is given by `np.quantile(x, u)`. This empirical quantile converges to the normal quantile. Experiment with different random samples from a normal random variable (`rvs`) and plot the convergence as a function of \\(N\\) of the empirical quantile to the theoretical quantile.

> [!NOTE]
>
> **Empirical Quantile**
>
> Note that the general definition of the (right) quantile is given by
>
> \\\[ \\begin{equation} q\_X(u) := \\inf \\left\\{ x \\in \\mathbb{R}\\colon P\[X\\leq x\] \\geq u \\right\\} = \\inf \\left\\{ x \\in \\mathbb{R}\\colon F\_X(x) \\geq u \\right\\} \\end{equation} \\\]
>
> If you have a a random sample \\((x\_0, \\ldots, x\_{N-1})\\) of \\(X\\), denote by
>
> \\\[ \\begin{equation} F^N(x) = \\frac{\\\# \\{k \\colon x\_k \\leq x\\}}{N} \\end{equation} \\\]
>
> It holds that \\(F^N \\to F\_X\\) if \\(F\_X\\) is continuous (is not easy to show, it holds in general gut in a distributional sense).
>
> Hence, the quantile \\(q^N\\) of \\(F^N\\) converges too to \\(q\_X\\) as \\(N\\) is large.
>
> If you denote by \\((y\_0, \\ldots, y\_{N-1})\\) the reordering of \\((x\_0, \\ldots, x\_{N-1})\\) from the smallest to the largest value, then it holds
>
> \\\[ q^N(u) = y\_{k\_u} \\\]
>
> where
>
> \\\[ k\_u = \\begin{cases} \\inf\\{k \\colon k\\geq Nu\\} &amp; \\text{if }Nu\\leq N-1\\\\ N-1 &amp; \\text{otherwize} \\end{cases} \\\]

# 3\. Average Value at Risk

We discussed in the lecture that the value at risk (which is a quantile) is not appropriate to estimate the risk. It has been replaced by the average value at risk which has different representations

\\\[ \\begin{align} AV@R\_{\\alpha}(X) &amp; = \\frac{1}{\\alpha}\\int\_{1-\\alpha}^1 q\_X(u) du\\\\ &amp; = \\inf\\left\\{x + \\frac{1}{\\alpha}E\\left\[(X - x)^+\\right\]\\colon x \\in \\mathbb{R}\\right\\}\\\\ &amp; = q\_X(1-\\alpha) + \\frac{1}{\\alpha}E\\left\[ (X - q\_X(1-\\alpha))^+ \\right\] \\end{align} \\\]

3.1 Implement the `AVaR0`, `AVaR1` and `AV@R2` functions with input `RV` and `alpha` and return with `quad` the result for the first, second and third representation using `ppf` and/or `minimize` depending on the representation

3.2 Implement the `mc_AVaR0`, `mc_AVaR1` and `mc_AVaR2` functions with input `x = [x_0, \ldots, x_{N-1}]` numpy random sample of \\(X\\) and `alpha` using Monte carlo and empirical quantile for each representations

3.3 Compare numerically the speed and accuracy of each method.

# 4\. Multidimensional

Usually in risk managment, the random variable \\(X\\) is a combination of many random variables

\\\[ \\begin{equation} X = \\sum\_{k=1}^d w^k X^k \\end{equation} \\\]

where the vector \\((X^1, \\ldots, X^d)\\) has a given `cdf` or random samples, and \\(w^1, \\ldots, w^d\\) are numbers representing the contribution of each factor \\(X^k\\) to the total risk \\(X\\).

Throughout, we will consider that \\((X^1, \\ldots, X^d)\\) is a \\(d\\)-dimensional normal Gaussian random variable.

> [!NOTE]
>
> **Multivariate Gaussian distribution**
>
> The multivariate Gaussian distribution is the multidimensional extension of a Gaussian distribution for a vector of random variables \\(X=(X^1, \\ldots, X^d)\\). The parameters are the mean \\(\\mathbf{\\mu} = (\\mu^1, \\ldots, \\mu^d)\\) and the covariance matrix (positive semi definite matrix) \\(\\mathbf{\\Sigma} \\in \\mathbb{R}^{d\\times d}\\).
>
> The `pdf` of this multidimensional random variable is given by
>
> \\\[ \\begin{equation} f(\\mathbf{x}) = \\frac{1}{(2\\pi)^{d/2} \\sqrt{\\det(\\mathbf{\\Sigma})}} \\exp\\left(-\\frac{1}{2}\\left(\\mathbf{x} - \\mathbf{\\mu}\\right)^\\top \\mathbf{\\Sigma}\\left(\\mathbf{x} - \\mathbf{\\mu}\\right)\\right) \\end{equation} \\\]
>
> Denoting by \\(\\sigma^k = \\sqrt{\\mathbf{\\Sigma}^{k,k}}\\) the square root of the diagonal of \\(\\mathbf{\\Sigma}\\), then each random variable \\(X^k\\) is a normal distribution \\(\\mathcal{N}(\\mu^k, (\\sigma^k)^2)\\).
>
> However, the different components of the random vector might be dependent as
>
> \\\[ \\begin{equation} E\[(X^k - \\mu^k)(X^l - \\mu^l)\] = \\mathbf{\\Sigma}^{k,l} \\end{equation} \\\]

4.1 Extend the functions `mc_AVaR0`, `mc_AVaR1` and `mc_AVaR2` to multidimensional samples. Use the following two case scenarios to compare accuracy and execution time by varying \\(N\\) the number of samples

```py
# case of 2 dimensions
import numpy as np
from scipy.stats import multivariate_normal

mu = np.array([0.2, 0.5])
Sigma = np.array(
    [
        [ 1.        , -0.26315789],
        [-0.26315789,  1.        ]
    ]
)
w = np.array([2, 5])

RV_2dim = multivariate_normal(mean = mu, cov = Sigma)

# generate N random samples (you get a numpy array Nx2)
N = 10
samples = RV_2dim.rvs(N)

# case of 5 dimensions
mu = np.array([0.2, 0.5, -0.1, 0, 0.6])

Sigma = np.array(
    [
        [1.        , 0.2688825 , 0.401427  , 0.19473116, 0.66256879],
        [0.2688825 , 1.        , 0.3907619 , 0.43373298, 0.43199657],
        [0.401427  , 0.3907619 , 1.        , 0.27893741, 0.61330745],
        [0.19473116, 0.43373298, 0.27893741, 1.        , 0.46849892],
        [0.66256879, 0.43199657, 0.61330745, 0.46849892, 1.        ]
    ]
)
w = np.array([2, 5, -2, 3, 6])

RV_5dim = multivariate_normal(mean = mu, cov = Sigma)

# generate N random samples (you get a numpy array Nx5)
N = 10
samples = RV_5dim.rvs(N)
```

*Hint:* Do not forget that numpy gives you access to the `dot` product to compute \\(\\sum w^k X^k\\).

4.2 Optional: you can try for the two dimensional case to implement with `dblquad` the direct computation of the `AVaR1` to compare speed and accuracy.

> [!NOTE]
>
> **Any dimensional multidimensional Gaussian distributions**
>
> To create a multidimensional guassian vector, you need to provide the mean vector \\(\\mathbf{\\mu} = (\\mu^1, \\ldots, \\mu^d)\\) as well as the covariance matrix \\(\\mathbf{\\Sigma}\\) which is usually calibrated to data. In our case we can generate some of these distribution using `numpy` and `scipy`
>
> ```py
> # we import the multivariate normal as well as a function to generate Sigma
> from scipy.stats import multivariate_normal, random_correlation
> import numpy as np
>
> # create a random vector of positive eigenvalues and then random covariance
> d=4
> eigenvalues = np.random.rand(d)
> Sigma = random_correlation.rvs(eigenvalues) # covariance matrix
> mu = no.random.rand(d)                      # vector of mean
>
> RV = multivariate_normal(mean = mu, cov = Sigma)
>
> # generate random samples (N random vectors or dimension d each so Nxd numpy array)
> N = 1000
> samples = RV.rvs(N)
> print(samples)
> ```
