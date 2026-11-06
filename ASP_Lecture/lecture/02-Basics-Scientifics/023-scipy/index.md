# First Scientific Computations

Aside from linear algebra, we need classical implementation of scientific computations.

- Integration
- Optimization
- Statistics (1)

  1. 👉 Some other major scientific computations encompass ODE/PDE, Fourier analysis for instance but we will see them later on in this lecture.

The basic first go library for it is [Scipy](<http://docs.scipy.org>) which can be seen as a meta library for each of this major scientific purposes. (1)

1. 👉 It encompasses the following directions.

   - Special functions ([scipy.special](<http://docs.scipy.org/doc/scipy/reference/special.html>))
   - Integration ([scipy.integrate](<http://docs.scipy.org/doc/scipy/reference/integrate.html>))
   - Optimization ([scipy.optimize](<http://docs.scipy.org/doc/scipy/reference/optimize.html>))
   - Interpolation ([scipy.interpolate](<http://docs.scipy.org/doc/scipy/reference/interpolate.html>))
   - Fourier Transforms ([scipy.fftpack](<http://docs.scipy.org/doc/scipy/reference/fftpack.html>))
   - Signal Processing ([scipy.signal](<http://docs.scipy.org/doc/scipy/reference/signal.html>))
   - Linear Algebra ([scipy.linalg](<http://docs.scipy.org/doc/scipy/reference/linalg.html>))
   - Sparse Eigenvalue Problems ([scipy.sparse](<http://docs.scipy.org/doc/scipy/reference/sparse.html>))
   - Statistics ([scipy.stats](<http://docs.scipy.org/doc/scipy/reference/stats.html>))
   - Multi-dimensional image processing ([scipy.ndimage](<http://docs.scipy.org/doc/scipy/reference/ndimage.html>))

Each of these submodules provides a number of functions and classes that can be used to solve problems in their respective topics. To import a particular function we use `from scipy.<module> import <function>`, for instance

```py
# import quad for integration from the module integrate
from scipy.integrate import quad
# import minimize for minimization from the module optimize
from scipy.optimize import minimize
# import the normal distribution from the module stats
from scipy.stats import norm
```

## Integration

We want to procede to numerical evaluation of integrals of the type

\\(\\displaystyle \\int\_a^b f(x) dx\\)

The naive method is to approximate the area below using some rectangles or trapezoides

![Integral Approximation](<https://www.samuel-drapeau.info/ASP_Lecture/images/integral_approximation_dark.svg#only-dark>) ![Integral Approximation](<https://www.samuel-drapeau.info/ASP_Lecture/images/integral_approximation_white.svg#only-light>)

> [!NOTE]
>
> **About Integral Approximation**
>
> Further methods were developped based on the fact that
>
> 1. polynomials \\(P\[x\] = \\sum\_{k=0}^n a\_k x^k\\) have exact integrals
>
>    \\\[ \\begin{equation\*} \\int\_0^1 P\[x\] dx = \\sum\_{k=0}^n \\frac{a\_k}{k+1} \\end{equation\*} \\\]
> 2. Any *resonably* regular function \\(f:\[0,1\] \\to \\mathbb{R}\\) can be *approximated* by a polynomial \\(P^\\varepsilon\\):
>
>    \\\[ \\begin{equation} \\sup\_{0\\leq x \\leq 1} \\left| f(x) - P^\\varepsilon\[x\] \\right|\\leq \\varepsilon \\end{equation} \\\]
>
> Which implies that
>
> \\\[ \\begin{equation\*} \\left| \\int\_0^1 f(x)dx - \\int\_0^1 P^\\varepsilon\[x\] dx \\right| \\leq \\varepsilon \\end{equation\*} \\\]
>
> This equation yields the following key aspects from a computational perspective:
>
> 1. With \\(\\varepsilon\\) you control the accuracy of your approximation
> 2. Given an accuracy level \\(\\varepsilon\\), how to find the polynomial \\(P^\\varepsilon\\)?
>
> The answer to the second question is topic of a large theory about efficient choice of interpolation polynomial basis wuch as *Chebychev*, *Legendre*, etc.

Without entering in the overall theory of integral approximation, the usual methods are of *quadrature* type, available in the sublibrary `integrate`, and called `quad`, `dblquad` and `tplquad` for single, double and triple integrals, respectively (there are many others too).

### One Dimensional Integration

We compute the integral between \\(0\\) and \\(1\\) of \\(x^\\alpha\\).

```py
# We import the different methods to call them easily
import numpy as np
from scipy.integrate import quad

# define the function to be integrated
def f(x):
    return x

# Define the boundaries of the integral

x_lower = 0 # the lower limit of x
x_upper = 1 # the upper limit of x

# Compute the integral
val, abserr = quad(f, x_lower, x_upper)

print(f"Integral value ={val} with absolute error = {abserr}")
```

In the case of a generic integration of functions depending on parameters

\\\[ \\begin{equation\*} \\alpha \\longmapsto \\int\_0^1 f(x, \\alpha) dx \\end{equation\*} \\\]

where \\(\\alpha\\) is a parameter, we can specify the arguments with respect to which the integral shall be computed.

```py
# define a function returning x^\alpha

def integrand(x, alpha):
    result = x ** alpha
    return result

x_lower = 0  # the lower limit of x
x_upper = 1 # the upper limit of x

# we compute the integral of x^2 by passing the argument args = (2,) (single tuple for alpha =2)
val1, abserr1 = quad(integrand, x_lower, x_upper, args=(2,))
# we compute the integral of x^0.5 by passing the argument args = (0.5,) (single tuple for alpha =0.5)
val2, abserr2 = quad(integrand, x_lower, x_upper, args=(0.5,))

print(f"The integral of x to the power 2 is equal to {val1} with absolute error {abserr1}")
print(f"The integral of the square root of x is equal to {val2} with absolute error {abserr2}")
```

Note that even if computer do not understand what \\(\\infty\\) means, there exists in `numpy` such a concept corresponding to the largest/smallest possible value that your computer can assess. In `numpy`, `np.inf` and `-np.inf` corresponds to \\(\\infty\\) and \\(-\\infty\\) respectively.

This is in particular useful to compute limit objects such as

\\\[ \\begin{equation\*} \\int\_{-\\infty}^\\infty f(x) dx \\end{equation\*} \\\]

> [!NOTE]
>
> **Use of *Nameless* Functions**
>
> From a mathematical viewpoint, *"Consider the function \\(x\\mapsto x^2\\)..."* is not a good practice, even if we use it quite often. It is a so called nameless function. Python also offers (exactly) this shorthand functionality in terms of so called `lambda` functions that can be passed as argument to a further function.
>
> ```py
> val, abserr = quad(lambda x: np.exp(-x ** 2), -np.inf, np.inf)
>
> print("numerical  =", val, abserr)
>
> analytical = np.sqrt(np.pi)
> print("analytical =", analytical)
> ```

### Higher Dimensional Integration

The same holds for higher dimensional integration

\\\[ \\begin{equation} \\int\_{a\_0}^{b\_0} \\int\_{a\_1(x)}^{b\_1(x)} f(x, y)dy dx \\end{equation} \\\]

where \\(x \\mapsto a\_1(x), b\_1(x)\\) are functions defining the domain as a function of \\(x\\) over which the function \\(y\\mapsto f(x,y)\\) has to be integrated.

Using nameless functions (`lambda`) for \\(a\_1\\) and \\(b\_1\\), the procedure works as follows

```py
from scipy.integrate import dblquad

def integrand(x, y):
    return np.exp(-x**2-y**2)

x_lower = 0  
x_upper = 10
y_lower = 0
y_upper = 10

# here the two lambda functions are constant.
val, abserr = dblquad(integrand, x_lower, x_upper, lambda x : y_lower, lambda x: y_upper)

print(val, abserr) 
```

Paying attention to the absolute error, you will notice that this one is immediately multiplied by a large factor. If we look at the the speed, there is also a large difference

Single integral

```py
def f(x):
    return x ** 0.5

%timeit quad(f, 0, 1)
```

vs double integral

```py
def g(x, y):
    return np.exp(-x**2-y**2)

x_lower = 0  
x_upper = 10
y_lower = 0
y_upper = 10


%timeit dblquad(g, x_lower, x_upper, lambda x : y_lower, lambda x: y_upper)
```

The main reason is linked to the so called *curse of dimensionality*. With any method, you will have to consider a grid of your domain over which you integrate to evaluate the function. Suppose that for the interval \\(\[0,1\]\\) you need \\(N\\) points, for a \\(d\\)-dimensional integral over \\(\[0, 1\]^d\\) you would roughly need \\(N^d\\) which is increasing exponentialy with the dimension. In other words, exact integration is excellent in terms of accuracy and speed but is limited to low, very low dimensions.

## Optimization

Optimization is also another corner stone of scientific computing. In a very approximative way you have the following two sets of problems

- Minimization
- Root finding

Though root finding can often be expressed as a minimization problem, it is however a very important tool for instance for fixed points

### Minimization

Given a function \\(f:\\mathbb{R}^d\\to\\mathbb{R}\\) and a constrained set \\(\\mathcal{C}\\subseteq \\mathbb{R}^d\\), the goal is to find a solution \\(x^\\ast\\) in \\(\\mathcal{C}\\) such that

\\\[ \\begin{equation} f(x^\\ast) = \\inf \\left\\{ f(x) \\colon x \\in \\mathcal{C}\\right\\} \\end{equation} \\\]

with two quantity of interest, namely \\(f(x^\\ast)\\) the value of \\(f\\) at the minimum, and more importantly \\(x^\\ast\\) or *argmin* the point in \\(\\mathcal{C}\\) at which \\(f\\) achieves its minimum.

> [!WARNING]
>
> **Constrained, Local, Global Minima**
>
> - The problem is called *constrained* if \\(\\mathcal{C}\\neq \\mathbb{R}^d\\). Solving this kind of problem might be challenging and in its simplest form assume some Lagrangian methods to transform the problem into an unconstrained optimization problem. These constraints are usually of linear type
>
>   \\\[ \\begin{equation} \\mathcal{C}:= \\left\\{x \\in \\mathbb{R}^d \\colon Ax + b =0\\right\\} \\end{equation} \\\]
>
>   requiring \\(x\\) to be in an affine subspace, or of inequality type
>
>   \\\[ \\begin{equation} \\mathcal{C}:= \\left\\{x \\in \\mathbb{R}^d \\colon g(x) \\geq 0\\right\\} \\end{equation} \\\]
>
>   for some function \\(g:\\mathbb{R}^d \\to \\mathbb{R}\\), for instance \\(g(x) = x\\) in one dimension requiring \\(x\\) to be positive.
> - Local vs Global Minima: Constrained problem can be transformed into unconstrained one most of the time. For an unconstrained optimization problem, if \\(f\\) is smooth enough, a necessary condition for \\(x^\\ast\\) to be an argmin is that
>
>   \\\[ \\begin{equation} \\nabla f(x^\\ast) = 0 \\end{equation} \\\]
>
>   In other terms the derivative of \\(f\\) at \\(x^\\ast\\) should vanish. This gives a procedure called gradient descent to compute the argmin by sqeuntially running along the stepest gradient to converge to the argmin. However, this condition is just necessary and not sufficient. Indeed, you could end up in a saddle point of the function, or just a local minimima (minimum over a small neighborhood). If the function is convex, then the condition is necessary and sufficient.

In the following example we search for the global minimum of

\\\[ \\begin{equation} f(x\_1, x\_2) = (x\_1-1)^2 + (x\_2- 2.5)^2 \\end{equation} \\\]

```py
# import the minimize functionality
from scipy.optimize import minimize

# define the function to be minimized
def fun(x):
    result = (x[0] - 1)**2 + (x[1] - 2.5)**2
    return result

# Plot in two dimensions how this function  looks like
x0 = np.linspace(-5, 5, 20)
x1 = np.linspace(-5, 5, 20)

X0, X1 = np.meshgrid(x0, x1)

Z = fun([X0, X1])

fig =go.Figure()
fig.add_surface(x = X0, y = X1, z = Z)
fig.show()

# Compute the minimimum
# 1. provide a guess where the minimization will start
guess = (0, 0)
# 2. return the result
res = minimize(fun, guess)

# the result is a dictionarry with everything
print(res)

# You can access the different components with
print(f"The value of the function at the minimum is {res.fun}")
print(f"The value of the argmin is {res.x}")
```

This function allows you to add boundaries and constraints, but we will see that later.

### Root finding

Given a function \\(f:\\mathbb{R}^d\\to \\mathbb{R}\\), the goal is to find \\(x^\\ast\\) such that

\\\[ f(x^\\ast)=0 \\\]

This statement is equivalent to \\(f(x^\\ast) = a\\) by defining \\(\\tilde{f}(x) = f(x) -a\\).

The main technique in that case are based on root finding methods and two methods are competing for that:

- a Newton based one `root` (give a guess)
- a Brent base method `brentq` (give similar in approach to the bissection)

Advantages and inconvenient of both are subject to some mathematical consideration. On the one hand, Newton (`root`) even if fast is not sure to converge however only needs to be given a smart guess as start point. On the other hand, `brentq` will very likely converge (even in the case where there are several roots) but you have to specify the bounds in which the root has to be found, and the value of the function has to differ in sign on these two boundaries.

We want to find the solution to the equation \\(x\\ln(x)=0.5\\) and therefore consider the function

\\\[ \\begin{equation} f(x) = x \\ln(x) - 0.5 \\end{equation} \\\]

```py
def func(x):
    result = x * np.log(x) - 0.5
    return result

# let us plot the function
X = np.linspace(0.01, 3, 200)
Y = func(X)

fig = go.Figure()
fig.add_scatter(x = X, y = Y)
fig.show()

# we want to find the root of this function on the positive axis with newton
from scipy.optimize import root, brentq

guess = 1
res1 = root(func, guess)
print(res1)

#%%


lb, ub = (0.1, 3)
res2 = brentq(func, lb, ub)
print(res2)
```

## Statistics (Probability)

This sub-library is a comprehensive list of everything you need to have in terms of distributions. There are two big classes:

- discrete distributions
- continuous distributions

You can access to the full list [here](<https://docs.scipy.org/doc/scipy/reference/stats.html>)

Depending on the field you will work with, you will have to deal with many of them but the most important are

- normal distribution
- student t
- normal inverse Gaussian (as well as the more general gamma distribution family)
- binomial
- mixtures of them

> [!NOTE]
>
> **cdf, pdf, pmf, ppf, etc.**
>
> Given a random variable \\(X:\\Omega \\to \\mathbb{R}\\) on some probability space \\((\\Omega, \\mathcal{F}, P)\\), we have
>
> - **(cdf) Cumulative distribution function:** The cumulative distribution of \\(X\\) given \\(P\\) is defined as
>
>   \\\[ \\begin{equation\*} F\_X(x) = P\[X\\leq x\] \\end{equation\*} \\\]
>
>   which is an increasing right continuous function (with left limits) from \\(\\mathbb{R}\\to \[0, 1\]\\).
>
>   For any function \\(h:\\mathbb{R}\\to \\mathbb{R}\\) (under some integrability assumptions) it holds
>
>   \\\[ \\begin{equation\*} E\[h(X)\] = \\int\_{\\Omega} h\\left(X(\\omega)\\right) dP(\\omega) = \\int\_{\\mathbb{R}} h(x)dF\_X(x) \\end{equation\*} \\\]
> - **(pdf) Probability distribution function:** Given the `cdf` of \\(X\\) \\(F\_X\\), if it is differntiable, it follows that \\(dF\_X(x) = f\_X(x)dx\\). The function \\(f\_X\\) is called the **probability distribution function** or `pdf`. In the previous statement, it futher holds
>
>   \\\[ \\begin{equation\*} E\[h(X)\] = \\int\_{\\Omega} h\\left(X(\\omega)\\right) dP(\\omega) = \\int\_{\\mathbb{R}} h(x)dF\_X(x) = \\int\_{\\mathbb{R}} h(x)f\_X(x) dx \\end{equation\*} \\\]
> - **(pmf) Probability mass function:** Given the `cdf` of \\(X\\), \\(F\_X\\), if on the other extreme, suppose that \\(X:\\Omega \\to \\mathbb{R}\\) only takes finite (or countable values) \\(\\{x\_1\< \\ldots\< x\_N\\}\\). We denote by \\(A\_k =\\{\\omega \\in \\Omega\\colon X(\\omega) = x\_k\\}\\) where \\(A\_i\\cap A\_j=\\emptyset\\) as well \\(\\cup A\_k = \\Omega\\). It follows that
>
>   \\\[ \\begin{equation} p\_k:=P\[A\_k\] = P\[X = x\_k\] \\end{equation} \\\]
>
>   is such that \\(p\_k \\geq 0\\) and \\(\\sum\_k p\_k = \\sum P\[A\_k\] = P\[\\cup A\_k\] = 1\\).
>
>   Now given the function \\(h\\), it follows that
>
>   \\\[ \\begin{equation} E\[h(X)\] = E\[h\\left(\\sum x\_k 1\_{A\_k}\\right)\] = \\sum E\[h(x\_k)1\_{A\_k}\] = \\sum h(x\_k)p\_k \\end{equation} \\\]
>
>   In terms of vectors (or numpy arrays), it follows that for discrete random variables the expectation is just a scalar product
>
>   \\\[ \\begin{equation} E\[h(X)\] = \\sum h(x\_k)p\_k = h(x)\\cdot p \\end{equation} \\\]
>
>   In the case of a discrete distribution, we therefore call \\(f\_X(x\_k) := p\_k\\) if \\(x= x+k\\) and zero otherwize, the *probability mass function* `pmf` so that it holds
>
>   \\\[ \\begin{equation} E\[h(X)\] = \\sum h(x\_k)f\_X(x\_k) \\end{equation} \\\]
> - **(ppf) Quantile:** Given a `cdf` \\(F\_X\\colon \\mathbb{R} \\to \[0,1\]\\), since it is an increasing function we can compute its generalized inverse \\(q\_X\\colon (0, 1) \\to \\mathbb{R}\\) Depending on the choice of conventions, we here define the right inverse:
>
>   \\\[ \\begin{equation\*} q\_X(u) = \\inf\\{x \\in \\mathbb{R}\\colon P\[X\\leq x\]\\geq u\\} = \\inf\\{x \\in \\mathbb{R}\\colon F\_X(x)\\geq u\\} \\end{equation\*} \\\]
>
>   If \\(F\_X\\) is strictly increasing and continuous (as is often the case), it is invertible and it holds that
>
>   \\\[ \\begin{equation\*} q\_X(u) = \\inf\\{x \\in \\mathbb{R}\\colon F\_X(x)\\geq u\\} = \\inf\\{x \\in \\mathbb{R}\\colon x\\geq F\_X^{-1}(u)\\} = F\_X^{-1}(u) \\end{equation\*} \\\]
>
>   In other terms, it follows that \\(q\_X\\) can be considered as the inverse of the `cdf` (or at least right inverse). For reasons explained in the lecture, it follows that \\(X\\) as well as \\(q\_X\\) share the same `cdf`. Hence it follows that
>
>   \\\[ \\begin{equation\*} E\[h(X)\] = \\int\_{\\Omega} h\\left(X(\\omega)\\right) dP(\\omega) = \\int\_{\\mathbb{R}} h(x)dF\_X(x) = \\int\_{0}^1 h(q\_X(u))du \\end{equation\*} \\\]
>
>   Hence, integrating \\(h\\) with respect to \\(X\\) is the same as integrating \\(h(q\_X)\\) with respect to leesgues \\(du\\) on \\((0,1)\\).

Following the note, distributions usually have the following methods

- `cdf` (cumulative distribution) \\(F\_X(x)\\)
- `pdf` (density if the distribution is continuous) \\(f\_X(x)\\)
- `ppf` (probability mass function if the distribution is discrete) \\(f\_X(x\_k)\\) for \\(x = \\{x\_1, \\ldots, x\_N\\}\\)
- `ppf` (quantile) \\(q\_X(u)\\)
- `rvs` (generation of independent draws of the random variable)

In the following we illustrate the

- Binomial distribution: distribution of a discrete random variable taking values in \\(\\{0, \\ldots, n\\}\\) with parameter \\(p\\) where the probability of \\(\\{X = k\\}\\) equal to the probability of getting \\(k\\) heads by throwing independently a coin \\(n\\) times with probability \\(p\\) of getting head. The `pmf` of which (that is \\(P\[X = k\]\\)) is given by

  \\\[ \\begin{equation\*} f\_X(k) = P\[X = k\] = C^k\_n p^k (1-p)^{n-k} \\end{equation\*} \\\]
- (standard) Normal distribution: central distribution for many reasons in probability. It is spacial case of the Gaussian distribution denoted by \\(\\mathcal{N}(\\mu, sigma^2)\\), where \\(\\mu\\) is the mean and \\(\\sigma\\) is the standard deviation from the mean. The case where \\(X\\sim \\mathcal{N}(0, 1)\\), that is \\(0\\)-mean and standard deviation equal to \\(1\\) is called the normal distribution with `pdf` given by

  \\\[ f\_X(x) = \\frac{1}{2\\sqrt{\\pi}} e^{-\\frac{x^2}{2}} \\\]

As for the binomial distribution

```py
# import the binominal distribution
from scipy.stats import binom

# paramters of the distribution
n = 20
p= 0.7

B = binom(n, p)

# produce some random samples
N = 1000000
RV = B.rvs(N)

# let us plot the histogram together with the true pmf
X = np.arange(n+1)
Y1 = np.zeros(n+1)
for x in X:
    count = (RV == x).sum()
    Y1[x] = count / N

Y2 = B.pmf(X)

fig = go.Figure()
fig.add_bar(x = X, y = Y1, name = "empirical with %i"%N)
fig.add_bar(x = X, y = Y2, name = "theoretical")
fig.show()
```

As for the normal distribution

```py
# import the normal distribution
from scipy.stats import norm

# declare the distribution (without parameters it is a standard normal)
RV = norm()

# plot of the density
X = np.linspace(-3,3, 100)

n = RV.pdf(X)
N = RV.cdf(X)

fig = go.Figure()

fig.add_scatter(x = X, y = n, name = "pdf")
fig.add_scatter(x = X, y = N, name = "cdf")
fig.show()


# Generate some random samples and compare the histogram
Y = RV.rvs(1000000)
fig = go.FigureWidget()
fig.add_histogram(x = Y, nbinsx = 51, histnorm = "probability")
fig.show()
```
