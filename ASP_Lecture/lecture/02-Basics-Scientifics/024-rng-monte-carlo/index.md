# Random Numbers and Monte Carlo

We saw that to integrate a function we have access to standard method of quadrature for *exact approximation* that is, a converging algorithm with exact error estimation.

The method however suffers from the curse of dimensionality as the computational complexity increases exponentially with the dimension. Since most of the integrations nowadays involve large dimensional objects, this method is not appropriate.

A true revolution in that direction is the so called Monte-Carlo method which is based on the fundamental mathematical results

- **Law of Large Numbers:** taking the arithmetic mean of of independent realisation of the same random variable converges to its mean.
- **Central Limit Theorem:** The adjusted error converges to a standard normal distribution.

## Monte Carlo: Convergence and Error

Given an iid sequence of square integrable random variables \\(X\_1, \\ldots, X\_n, \\ldots\\), we denote by \\(X:=X\_1\\) with \\(\\mu =E\[X\]\\) as well as \\(\\sigma = E\[(X - \\mu)^2\]^{1/2}\\) the mean and standard deviation of this random variable and further denote by \\(S\_N\\) the random variable given by the arithmetic mean

\\\[ \\begin{equation} S\_N = \\frac{1}{N}\\sum\_{k=1}^N X\_k \\end{equation} \\\]

And the residual error \\(\\varepsilon\_N\\) given by

\\\[ \\begin{equation} \\varepsilon\_N = S\_N -\\mu \\end{equation} \\\]

It follows that (Law of Large Numbers)

\\\[ \\begin{equation} S\_N(\\omega) = \\frac{1}{N}\\sum\_{k=1}^N X\_k(\\omega) \\longrightarrow E\[X\] = \\mu \\end{equation} \\\]

for (almost) whatever chosen state \\(\\omega \\in \\Omega\\) and (central limit theorem):

\\\[ \\begin{equation} \\varepsilon\_N \\approx \\mathcal{N}\\left(0,\\frac{\\sigma^2}{N}\\right) \\end{equation} \\\]

for \\(N\\) large enough.

> [!NOTE]
>
> **Law of Large Numbers and Central Limit Theorem**
>
> Suppose that we have a sequence \\(X\_1, X\_2, \\ldots, X\_n, \\ldots\\) of square integrable random variables on some probability space \\((\\Omega, \\mathcal{F}, P)\\). Assume that this sequence is **independent** and **identically distributed** (iid) that is
>
> - **Independent:** for any finite choice of random variable in the sequence, it holds
>
>   \\\[ \\begin{equation\*} P\[X\_{n\_1} \\in A\_{1}, \\ldots, X\_{n\_l} \\in A\_l\] = P\[X\_{n\_1} \\in A\_1\]\\cdots P\[X\_{n\_l} \\in A\_l\] = \\prod\_{k=1}^l P\[X\_{n\_k} \\in A\_{n\_k}\] \\end{equation\*} \\\]
> - **Identically distributed:** Each random variable has the same CDF, that is
>
>   \\\[ \\begin{equation} F\_{X\_n}(x) := P\[X\_n \\leq x\] = P\[X\_1\\leq x\] = F\_{X\_1}(x) \\end{equation} \\\]
>
> When this sequence is iid we denote by \\(X:=X\_1\\) with \\(\\mu =E\[X\]\\) as well as \\(\\sigma = E\[(X - \\mu)^2\]^{1/2}\\) the mean and standard deviation of this random variable. We further denote by \\(S\_N\\) the random variable given by the arithmetic mean
>
> \\\[ \\begin{equation} S\_N = \\frac{1}{N}\\sum\_{k=1}^N X\_k \\end{equation} \\\]
>
> And the residual error \\(\\varepsilon\_N\\) given by
>
> \\\[ \\begin{equation} \\varepsilon\_N = S\_N -\\mu \\end{equation} \\\]
>
> ****Law of Large Number Theorem:****
>
> The arithmetic (or sample) mean converges almost surely against the mean \\(\\mu\\), that is
>
> \\\[ \\begin{equation} S\_N(\\omega) = \\frac{1}{N}\\sum\_{k=1}^N X\_k(\\omega) \\longrightarrow E\[X\] = \\mu \\end{equation} \\\]
>
> for (almost) whatever chosen state \\(\\omega \\in \\Omega\\).
>
> ****Central Limit Theorem:****
>
> The normalized error converges in distribution to a standard normal distribution, that is
>
> \\\[ \\begin{equation} \\frac{\\sqrt{N}}{\\sigma}\\varepsilon\_N = \\frac{\\sqrt{N}}{\\sigma}\\left(S\_N - \\mu\\right) \\longrightarrow \\mathcal{N}(0, 1) \\end{equation} \\\]
>
> Or in other terms
>
> \\\[ \\begin{equation} \\varepsilon\_N \\approx \\mathcal{N}\\left(0,\\frac{\\sigma^2}{N}\\right) \\end{equation} \\\]
>
> For \\(N\\) large enough.

In terms of integration, we therefore have a way to approximate the integral of \\(X\\) with \\(S\_N\\), and have an estimate of the approximation error \\(\\varepsilon\_N\\). However, in comparison to the standard integration, our approximation of the integral is now a random variable \\(S\_N(\\omega)\\). Even if for every state \\(\\omega\\) it converges, the rate of the convergence depends on \\(\\omega\\). Looking at the error \\(\\varepsilon\_N\\) it is similar, it is also a random variable that converges in distribution to a normal distribution.

Let us have a look at the error. Since it is a random variable, I want to know what is the probability that this error will be larger than \\(\\delta\>0\\). Since \\(\\frac{\\sqrt{N}}{\\sigma}\\varepsilon\_N \\approx \\mathcal{N}(0, 1)\\) which is the normal distribution, we denote by

\\\[ \\begin{equation\*} \\varphi(x) = \\frac{e^{-x^2/2}}{\\sqrt{2\\pi}} \\quad \\text{and}\\quad \\Phi(x) = \\int\_{-\\infty}^x \\varphi(y) dy \\end{equation\*} \\\]

which are respectively the `pdf` and the `cdf` of a standart normal distribution. Note that since the standard normal distribution is symetric, it follows that if \\(Z\\sim \\mathcal{N}(0,1)\\):

\\\[ \\begin{equation} P\[|Z|\>\\alpha\] = \\int\_{-\\infty}^{-\\alpha} \\varphi(x) dx + \\int\_{\\alpha}^\\infty \\varphi(x)dx = 2\\int\_{-\\infty}^{-\\alpha}\\varphi(x)dx = 2\\Phi(-\\alpha) \\end{equation} \\\]

Now looking at the error, we want to estimate the probability that it is going to be smaller than \\(\\delta\\). We have the following estimate

\\\[ \\begin{align} P\\left\[\\left|S\_N - \\mu \\right|\\geq \\delta\\right\] &amp; = P\\left\[\\left|\\varepsilon\_N\\right|\\geq \\delta\\right\]\\\\ &amp; = P\\left\[\\frac{\\sqrt{N}}{\\sigma}\\left|\\varepsilon\_N\\right|\\geq \\frac{\\sqrt{N}}{\\sigma}\\delta\\right\]\\\\ &amp;\\approx P\\left\[\\left|Z\\right|\\geq \\frac{\\sqrt{N}}{\\sigma}\\delta\\right\]\\\\ &amp; = 2\\Phi\\left(-\\frac{\\sqrt{N}}{\\sigma}\\delta\\right)\\\\ \\end{align} \\\]

Note that for whatever value of \\(\\delta\\) and \\(\\sigma\\), since \\(\\Phi(x)\\to 1\\) when \\(x\\to \\infty\\), hence, the probability of the error being larger than \\(\\delta\\) will converge to \\(0\\) as \\(N\\) is large.

What is often done is the following: for an accuracy error \\(\\delta\\) given (for instance \\(\\delta = 10^{-9}\\)), and a confidence level \\(\\alpha\\) (for instance \\(\\alpha = 1\\%\\)), we want to estimate \\(N\\) such that

\\\[ \\begin{equation} P\\left\[\\left|\\varepsilon\_N\\right|\\geq \\delta\\right\] \\leq \\alpha \\end{equation} \\\]

It follows that \\(N\\) must satisfy

\\\[ \\begin{equation\*} 2\\Phi\\left(-\\frac{\\sqrt{N}}{\\sigma}\\delta\\right) = 2\\left(1- \\Phi\\left(\\frac{\\sqrt{N}}{\\sigma}\\delta\\right)\\right) \\leq \\alpha \\end{equation\*} \\\]

which is equivalent to

\\\[ \\begin{equation} \\sqrt{N} \\geq \\frac{\\sigma}{\\delta} q\\left(1-\\frac{\\alpha}{2}\\right) \\end{equation} \\\]

Where \\(q = \\Phi^{-1}\\) is the quantile of the standard normal distribution.

> [!WARNING]
>
> **Convergence speed**
>
> The error is now given in terms of probability within a confidence interval. However, from the error rate, it turns out that the convergence speed is in square root of \\(N\\) which is particularly slow.

Why are these results fundamental in order to solve our problem of dimensionality in terms of integration?

Consider a function \\(f:\\mathbb{R}^d \\to \\mathbb{R}\\) and a vector of random variables \\(\\mathbf{X} = (X^1, \\ldots, X^d)\\). We want to compute

\\\[ \\begin{equation} I = E\\left\[f(\\mathbf{X})\\right\] = \\int\_{\\mathbb{R}^d} f(x^1, \\ldots, x^d)dF\_{(X^1, \\ldots, X^d)}(x^1, \\ldots, x^d) \\end{equation} \\\]

Define now \\(Z = f(X^1,\\ldots, X^d)\\) and consider independent copies \\(\\mathbf{X}\_1, \\ldots, \\mathbf{X}\_N, \\ldots\\) of \\(\\mathbf{X}=(X^1, \\ldots, X^d)\\). It follows that \\(Z^1, \\ldots, Z^N, \\ldots\\) are iid. Hence, considering \\(N\\) independent samples \\(\\mathbf{x}\_1, \\ldots, \\mathbf{x}\_N\\) where \\(\\mathbf{x}\_k = (x^1\_k, \\ldots, x^d\_k)\\) of \\(\\mathbf{X}\\) yields

\\\[ \\begin{equation} \\frac{1}{N} \\sum\_{k=1}^N f(\\mathbf{x}\_k) \\approx E\\left\[f(\\mathbf{X})\\right\] \\end{equation} \\\]

where \\(N\\) is independent of \\(d\\).

Out of the main questions

1. Does the Monte Carlo integral converges to the ture value of the integral?
2. If so, how fast and how accurate?
3. How do I generate indepedent samples of a distribution?

We already answered theoretically to the first 2 questions. It remains the central question number 3 which is a priori quite difficult since a computer (the standard ones) are deterministic machine and per definition can not generate random numbers.

## Generation of **Pseudo Random Numbers**

We first we address the problem of independent realisations of a uniform distribution \\(U\\). A computer that is working with finite arythmetic and rational numbers can naturally not provide algorythmicaly true random numbers. The task is to find deterministic sequences of numbers which distribution can not be distinguished from a uniform distribution by programatic statistical tests. Once again, it is obvious that if you know the trick generating the random numbers, you can always program a test that will violate the uniformity, but we assume that we are agnostic from this viewpoint.

> [!WARNING]
>
> **Don't program it by yourself for applications!**
>
> We present here techniques on how random numbers can be generated. Be aware that the random number generators -- RNG -- are highly tested for robustnes and refined. If you have a wrong or weak RNG, this may have dramatical consequences in terms of accuracy. Furthermore, these RNG are optimized so as to be fast. Indeed, for some medelization problems the number of random numbers needed may well reach several billions. Just to warn you that it is a VERY bad idea to program your homemade RNG for Monte Carlo pruposes, we just present the idea and shortcomings of some of the techniques.

Given a set \\(\\{0,1,\\ldots,M-1\\}\\), we want to find a sequence \\((i\_l)\\) in this set such that \\((x\_l)=(i\_l/M)\\) is uniformly distributed on \\(\[0,1\]\\).

> [!TIP]
>
> ****Definition: Random Number Generator****
>
> A RNG consists of a state space \\(X\\), a transition function \\(T:X\\to X\\) as well as a mapping \\(G:X\\to \\{0,\\ldots,M-1\\}\\). Given an element \\(x\_0 \\in X\\) -- the *seed* -- the pseudorandom numbers \\(i\_l=G(x\_l)\\) are computed recursively by \\(x\_l=T(x\_{l-1})\\).

By definition, since \\(X\\) is finite, it follows that the sequence of pseudo-random numbers is periodic. Indeed, there must exists \\(l\\) such that \\(x\_l=x\_0\\) and so you will get a period of \\(l\\). Note also that \\(G\\) is not a bijection, so it may well happen that \\(i\_l=i\_k\\) without necessarily having \\(x\_l=x\_k\\).

A RNG is tested along the following lines:

- Statistical uniformity: not distinguishable by feaseable statistical tests from uniformity
- Speed: sometimes \\(10e18\\) numbers are needed...
- Period length: Rule of thumb it should be larger than the square of the number necessary to construct.
- Reproducibility: For debugging and testing reason, a random number should be reproducible.
- Jumping ahead: Possibility to generate \\(x\_{l+n}\\) for a given \\(n\\) and \\(l\\) without the intermidiary values. Important for parallelization.

The Prototypical class are the linear where \\(X=\\{0,\\ldots,M-1\\}\\), \\(G=Id\\) and

\\\[ T(x)=(ax+c) \\quad\\text{modulo }M \\\]

By basic number theory, the period length is exactly \\(M\\) if

- \\(c\\neq 0\\).
- every prime number dividing \\(M\\) also divide \\(a-1\\).
- if \\(M\\) is divisible by \\(4\\) then so is \\(a-1\\).

Depending on the architecture and OS of your computer, different random number generator are implmented. For Linux and many other scientific libraries, the GCC implementation uses

\\\[ M = 2^{32} \\quad a = 1103515245 \\quad c = 12345 \\\]

```py
# basic parameters
a= 1103515245
c= 12345
M = 2**32

def T(x, a = 1103515245, c = 12345 , M = 2 ** 32):
    term = a * x + c
    return term % M

def RN(seed, N):
    X = np.zeros(N)
    for n in range(N):
        if n == 0:
            X[n] = seed
        else:
            X[n] = T(X[n-1])
    return X/M

# SEED:
seed = 14

print(f"RN: {RN(seed, 10)*100}")
```

Let us compare the speed between our implementation and numpy implementation

```py
%timeit RN(10, 100000)
```

```py
%timeit np.random.rand(100000)
```

We generate some random numbers and provide a scatter plot of which

```py
# set the number
N = 100000

X1 = RN(10, N)
X2 = RN(10, N)

fig = go.Figure()
fig.add_scatter(x = X1, y = X2, mode = 'markers')

fig.layout.width = 800
fig.layout.height = 800

fig.show()
```

> [!NOTE]
>
> **Some estimation technique from John von Neuman**
>
> Consider the following code, what does it estimate?
>
> ```py
> def estimate_what(N):
>     m = 0
>     X = np.random.rand(N)
>     Y = np.random.rand(N)
>     for i in range(N):
>         if X[i] ** 2 + Y[i] ** 2 <= 1:
>             m+=1
>     return 4 * m / N
>
> estimate_what(200000)
> ```

## Sampling from another distribution

We have seen how to sample from a uniform distribution. Sampling from another one relies on the following proposition:

> [!CAUTION]
>
> **Proposition**
>
> Let \\(X\\) be a random variable with CDF \\(F\_X\\colon \\mathbb{R}\\to \[0,1\]\\), \\(x \\mapsto F\_X(x) = P\[X\\leq x\]\\) and \\(U\\) a uniformly distributed random variable. Considering the quantile \\(q\_X \\colon (0,1)\\to \\mathbb{R}\\)
>
> \\\[ \\begin{equation} q\_X(u) = \\inf \\{m\\colon F\_L(m)\\geq u\\} =F\_X^{-1}(u) \\end{equation} \\\]
>
> it follows that the random variable \\(q\_X(U)\\) has the same distribution as \\(X\\), that is, both random variable have the same CDF.

> [!NOTE]
>
> **Proof**
>
> By definition of the quantile function, it follows that \\(q\_X(u)\\leq x\\) if and only if \\(u\\leq F\_X(x)\\). Furthermore, \\(q\_X\\colon (0,1) \\to \\mathbb{R}\\) can be considered as a random variable on \\((\\tilde{\\Omega}, \\tilde{F}, \\tilde{P})\\) where \\(\\tilde{\\Omega} = (0,1)\\), \\(\\tilde{F}= \\mathcal{B}(0,1)\\) is the borel \\(\\sigma\\)-algebra generated by open subsets of \\((0,1)\\) and \\(\\tilde{P}=\\lambda\\) the Lebesgue measure on \\((0,1)\\), that is the measure of intervals with \\(d\\lambda = dx\\). Considering the CDF of \\(q\_X\\), it holds
>
> \\\[ \\begin{equation} F\_{q\_X}(x)=\\lambda (\\{u \\colon q\_X(u)\\leq x\\})=\\lambda(\\{u\\colon u\\leq F\_X(x)\\}=\\lambda (0,F\_X(x)\]=F\_X(x) \\end{equation} \\\]

If we know the quantile distribution explicitely, then we can generate any sample of that distribution. If we consider the exponential distribution for instance where

\\\[ \\begin{equation} F\_X(x) = 1- e^{-\\lambda x}, \\quad x\\geq 0 \\end{equation} \\\]

Then it follows that

\\\[ \\begin{equation} q\_X(u) = -\\ln\\left(1-u\\right) / \\lambda \\end{equation} \\\]

From our proposition, sampling from \\(X\\) is the same as sampling from \\(q\_X(U)\\) where \\(U\\) is a \\((0,1)\\) uniform distribution.

```py
# Example with the exponential distribution.
lamb = 5
def q(u, lamb):
    return - np.log(1-u) / lamb

# as comparison we consider the scipy exponential distribution (scale = 1/lamb)

RV = sp.stats.expon(scale = 1/lamb)

N = 10000

# generate N samples from the uniform distribution
U = np.random.rand(N)

# plug those random numbers into the quantile
X= q(U, lamb)

# generate N samples from the exponential RV
Y = RV.rvs(N)

# Plot the histogram for both samples
fig = go.Figure()
fig.add_histogram(x = X, name = 'quantile')
fig.add_histogram(x = X, name = 'rvs')
fig.show()
```

There is however usually no analytical form for the quantile distribution, therefore one has to use numerical inverse of it. These one are known for most of the classical distributions and accessible through `python.stats` by means of the `ppf` method.

In the following we compute the following integral

\\\[ \\begin{equation} E\[(X-K)^+\] = \\int\_K^\\infty (x-K)dF\_X(x) \\end{equation} \\\]

```py
from scipy.integrate import quad
from scipy.stats import norm

# standard integration of the random variable with quad
def Int1(K, RV):
    def integrand(x):
        term = np.maximum(x - K,0) * RV.pdf(x)
        return term
    result, err = quad(integrand, -np.Inf, np.Inf)
    return result

# Same integration using monte carlo
def Int2(K, RV, N):
    # generate $N$ samples
    x = RV.rvs(N)
    result = np.maximum(x - K, 0)
    result = np.mean(result)
    return result

#
N = 100000
RV = norm(loc = 1, scale = 2)
K = 1.5


print(f"Standard integral {Int1(K, RV)}")
print(f"MC integral {Int2(K, RV)}")
```

## Variance Reduction

While integrating, the domain or the nature of the function to integrate influence a lot the convergence of Monte-Carlo. Consider the following simple example. Suppose that \\(X\\) is Cauchy distributed, that is, have a pdf of the form

\\\[ \\begin{equation} dF\_X(x)=f\_X(x)=\\frac{1}{\\pi (1+x^2)} \\end{equation} \\\]

and we want to compute \\(P\_X\[L\>5\] = 1-F\_X(5)\\), that it compute the expectation

\\\[ \\begin{equation} P\_X\[L\>5\]=E\[1\_{\\{X\>5\\}}\]=\\int\_{5}^\\infty f\_X(x) dx \\end{equation} \\\]

If we draw a sample of the distribution, only very few of them will enter in the relevant part of the computation of the integral

```py
x = sp.stats.cauchy()
# here is the true value P[L>3]
h_true = 1-x.cdf(5)
print(f"Value we are searching for {h_true}")
```

It means that only 6% of the sample of our Monte-Carlo will be useful in the computation of this integral. This is quite often a problem as many applications involves evaluation with respect to extreme values of a random variables, events that are large but rare. And since the Monte-Carlo method is typically slow in terms of convergence like \\(\\sqrt{N}\\), we will need a huge amount of samples.

```py
# %%
N = 1000000
X = x.rvs(N)
# We count the average number of the sample above 5
print(np.absolute(h_true - 1/N * np.sum(X>5))/ h_true)
```

However, a simple change of variables lets us use 100% of draws We are trying to estimate the quantity

\\\[ \\int\_5^\\infty \\frac{1}{\\pi (1 + x^2)} dx \\\]

Using the substitution \\(y = 5/x\\) (and a little algebra), we get

\\\[ \\int\_0^1 \\frac{5}{\\pi(25 + y^2)} dy \\\]

Hence, a much more efficient MC estimator is

\\\[ \\frac{1}{N} \\sum\_{k=0}^{N-1} \\frac{5}{\\pi(25 + y\_k^2)} \\\]

where the sample \\(y\_0, y\_1, \\ldots, y\_N\\) is drawn from a uniform \\((0,1)\\) random variable.

```py
N = 100000
Y = np.random.rand(N)
h_cv = 1.0/n * np.sum(5/(np.pi * (25 + Y**2)))

print(f"Integral relative error: {np.abs(h_cv - h_true)/h_true}")
```
