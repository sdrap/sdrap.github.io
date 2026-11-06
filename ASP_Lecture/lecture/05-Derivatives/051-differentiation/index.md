# Differentiation

A central aspect of mathematics, counterpart to integration, is computing derivatives. Many different applications depends on it such as ODE, optimization, PDE, AI, etc.

Mathematically, given a smooth function \\(f:\\mathbb{R}\\to \\mathbb{R}\\), the derivative of \\(f\\) at point \\(x\\) is defined as

\\\[ \\begin{equation\*} f^\\prime(x) = \\lim\_{h \\to 0}\\frac{f(x+h)-f(x)}{h} \\end{equation\*} \\\]

Unless the derivative is explicitely known, since limit are unatainable ojects for computer an approximation has to be done and a direction has to be choosen. Let \\(h\\) be *small* we can consider

- Forward difference: \\(f^\\prime(x)\\approx (f(x+h) - f(x))/h\\)
- Backward difference: \\(f^\\prime(x)\\approx (f(x) - f(x-h))/h\\)
- Central difference: \\(f^\\prime(x)\\approx (f(x+h) - f(x-h))/2h\\)

Further higher order differences can also be considered at point \\(h\\), \\(2h\\), etc.

```py
def diff_for(f, x, h):
    return (f(x + h) - f(x))/h

def diff_back(f, x, h):
    return (f(x) - f(x-h))/h

def diff_cent(f, x, h):
    return (f(x+h) - f(x-h))/(2 * h)
```

In the limit all these object coincide (provided you are smooth) but the forward difference corresponds to the right derivative while the backward corresponds to the left one and the central is the average between both. Depending on the slope of the function where the derivative is computed, the approximation might differ.

For example, consider \\(f(x) = \\exp(x + x^2)\\) with derivative \\(f^\\prime(x) = (2x+1)\\exp(x+x^2)\\). In particular \\(f^\\prime(0) = 1\\).

```py
import numpy as np
import plotly.graph_objs as go

def f(x):
    return np.exp(x + x**2)

N = np.linespace(-8, -1, 100)
h = 10 ** N

Yfor = diff_for(f, 0, h)
Yback = diff_back(f, 0, h)
Ycent = diff_cent(f, 0, h)

fig = go.Figure()
fig.add_scatter(x = h, y = Yfor, name = 'Forward diff')
fig.add_scatter(x = h, y = Yback, name = 'Backward diff')
fig.add_scatter(x = h, y = Ycent, name = 'Central diff')
fig.show()
```

As the slope is strongly different before and after \\(0\\), it turns out that the convergence of the central diff is faster to the true value.

> [!NOTE]
>
> **Computational Complexity**
>
> One shall however consider also the numerical cost of computing those numerical derivatives. Indeed, consider a smooth function \\(F:\\mathbb{R}^d \\to \\mathbb{R}\\), the derivative of \\(F\\) at point \\(\\mathbf{x}\\) is given by the gradient vector
>
> \\\[ \\begin{equation\*} \\nabla\_{\\mathbf{x}}F(\\mathbf{x}) = \\begin{bmatrix} \\partial\_{x\_1} F(\\mathbf{x})\\\\ \\vdots\\\\ \\partial\_{x\_d}F(\\mathbf{x}) \\end{bmatrix} \\quad \\text{where}\\quad \\partial\_{x\_i}F(\\mathbf{x}) = \\lim\_{h\\to 0}\\frac{F(x\_1, \\ldots, x\_i + h,\\ldots, x\_d ) - F(\\mathbf{x})}{h} \\end{equation\*} \\\]
>
> Since you always have to compute the value of \\(F(\\mathbf{x})\\), it turns out that the number of evaluation of \\(F\\) to compute the gradient is
>
> - \\(1+d\\) for the backward and forward derivative
> - \\(1+2d\\) for the central derivative (and higher for higher order differences).

In analysis, \\(h\\) is actually infinitely small, so how small shall we choose \\(h\\). The computer accuracy is pretty small, however by taking too small you run into issues

```py
# we consider smaller values in the range of 10^{-15} for h
N = np.linespace(-15, -1, 100)
h = 10 ** N

Yfor = diff_for(f, 0, h)
Yback = diff_back(f, 0, h)
Ycent = diff_cent(f, 0, h)

fig = go.Figure()
fig.add_scatter(x = h, y = Yfor, name = 'Forward diff')
fig.add_scatter(x = h, y = Yback, name = 'Backward diff')
fig.add_scatter(x = h, y = Ycent, name = 'Central diff')
fig.show()
```

It turns out that for very small value of \\(h\\), computer precision and rounding issues goes against accuracy (dividing by \\(10^{-15}\\) is multiplying rounding errors of the difference by \\(10^{15}\\)).

## Ordinary Differential Equations

One of the first application of the computing derivative is to solve numerically ODEs of the kind

\\\[ \\begin{equation\*} y^\\prime(t) = f(t, y(t)), \\quad \\text{with}\\quad y(0) = y\_0 \\end{equation\*} \\\]

> [!NOTE]
>
> **Higher dimension and higher derivative**
>
> You can also consider
>
> \\\[ \\begin{equation\*} \\mathbf{y}^\\prime(t) = \\mathbf{F}(t, \\mathbf{y}(t)) \\quad \\text{with} \\quad \\mathbf{y}(0) = \\mathbf{y}\_0 \\end{equation\*} \\\]
>
> where \\(\\mathbf{y}\\) is \\(d\\)-dimensional and \\(\\mathbf{F}\\colon \\mathbb{R}\\times \\mathbb{R}^d\\to \\mathbb{R}^d\\).
>
> If the ODE is of higher order of integration, with linear structure, you can also write it in vector form of a first order linear ODE.

The very basic and first scheme is the Euler scheme that takes a forward difference as approximation:

\\\[ \\begin{equation\*} \\mathbf{y}(t+h) = \\mathbf{y}(t) + h \\mathbf{F}(t, \\mathbf{y}(t)) \\end{equation\*} \\\]

the implementation of which is straightforward

```py
import numpy as np

# Generic Euler scheme for one dimension 
# input:
# * f: given function with t and y as input and real output
# * y0: initial value
# * t: is the meshgrid [t0, t1,..., tN]
def ode_euler(f, y0, t):
    y = np.zeros(len(t))
    y[0] = y0

    for n in range(0, len(t)-1):
        y[n+1] = y[n] + f(t[n], y[n]) * (t[n+1] - t[n])
    return y
```

\\\[ y^\\prime(t) = 2(1-y(t)) - 4 e^{-4t} \\quad \\text{with} y(0)=1 \\\]

with explicit solution

\\\[ \\begin{equation\*} y(t) = 1-2 e^{-2t}\\left(1-e^{-2t}\\right) \\end{equation\*} \\\]

```py
import plotly.graph_objs as go

def f(t, y):
    return 2 * (1 - y) - 4 * np.exp(-4 * t)


def solution(t):
    return 1 - 2 * np.exp(-2 * t) * (1 - np.exp(-2 * t)) 

# Now we solve for several mesh size and compare with the optimal value

T = np.linspace(0, 2, 100)
DT = np.array([0.5, 0.1, 0.05, 0.01])
y0 = 1

fig = go.Figure()
fig.add_scatter(x=T, y=solution(T), name="theoretical")

for dt in DT:
    t = np.arange(0, 2, dt)
    y = ode_euler(f, t, y0)
    fig.add_scatter(x=t, y=y, name=f"num {dt}")
fig.show()
```

The Euler scheme is a simple (each step is fast to compute) but as a matter of fact the method is iterative and therefore involves a loop. For a good accuracy the mesh shall be small which however increases the number of evaluation.

Several methods have been developed to increase the accuracy for a given step, however at the cost of additional computation at every steps. As long as the improvement in accuracy for a given step is is higher than the overall cost then it is computationally a good method.

The classical ODE method in this case is the (here the 4th order one) [Runge-Kutta](<https://en.wikipedia.org/wiki/Runge-Kutta_methods>) method which runs as follows

\\\[ \\begin{equation\*} y(t+h) = y(t) + \\frac{h}{6}(k\_1 + 2 k\_2 + 2 k\_3 + k\_4) \\end{equation\*} \\\]

where

\\\[ \\begin{equation\*} \\begin{cases} k\_1 &amp; = f(t, y(t))\\\\ k\_2 &amp;= f\\left(t+\\frac{h}{2}, y(t) + h \\frac{k\_1}{2}\\right)\\\\ k\_3 &amp;= f\\left(t+\\frac{h}{2}, y(t) + h \\frac{k\_2}{2}\\right)\\\\ k\_4 &amp; = f\\left(t+h, y(t) + h k\_3\\right) \\end{cases} \\end{equation\*} \\\]

```py
def ode_rk(f, y0, t):
    y = np.zeros(len(t))
    y[0] = y0

    for n in range(0, len(t)-1):
        h = t[n+1] -t[n]
        k1 = f(t[n], y[n])
        k2 = f(t[n] + h/2, y[n] + h * k1 /2)
        k3 = f(t[n] + h/2, y[n] + h * k2 /2)
        k4 = f(t[n] + h, y[n] + h * k3)
        y[n+1] = y[n] + h * (k1 + 2 * k2 + 2 * k3 + k4) /6
    return y
```

We can now run a test between the two methods

```py
T = np.linspace(0, 2, 100)
DT = np.array([0.1, 0.05])
y0 = 1

fig = go.Figure()
fig.add_scatter(x=T, y=solution(T), name="theoretical")

for dt in DT:
    t = np.arange(0, 2, dt)
    y = ode_euler(f, t, y0)
    fig.add_scatter(x=t, y=y, mode = "lines" name=f"num {dt}")
fig.show()
```
