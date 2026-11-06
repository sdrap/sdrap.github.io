# Gradient Descent

Gradient descent is another application where derivatives plays a role. The main objective of gradient descent is to design a scheme that will converge to the (or better a local) minimum of a function.

Given a smooth function \\(f:\\mathbb{R}^d \\to \\mathbb{R}\\), the goal is to find a local minimum \\(\\mathbf{x}^\\ast\\), that is

\\\[ \\begin{equation\*} f(\\mathbf{x}^\\ast) \\leq f(\\mathbf{y}) \\end{equation\*} \\\]

for any \\(\\mathbf{y}\\) in a neighborhood of \\(\\mathbf{x}^\\ast\\). If this relation holds for any \\(\\mathbf{y}\\), then \\(\\mathbf{x}^\\ast\\) is called a global minimum.

Since \\(f\\) is assumed to be smooth, it follows that a necessary (but not sufficient, think about a saddle point) condition for it is that

\\\[ \\nabla f(\\mathbf{x}^\\ast) = 0 \\\]

If an explicit solution or a direct root finding method is not available, we want to construct a sequence \\(\\mathbf{x}\_0, \\mathbf{x}\_1, \\ldots\\) such that \\(\\mathbf{x}\_n \\to \\mathbf{x}^\\ast\\).

The classical intuition behind the gradient descent, is the situation where you are in the mountains, it is foggy and you want to find your way down to the valley. Your vision is just local but you can estimate in a close radius in which direction the path is going downwards. You move further and update along the way the direction in which you are going.

This principle rely on the following result:

> [!TIP]
>
> ****Descent Direction****
>
> A vector \\(\\mathbf{d}\\) is called a **descent direction** at \\(\\mathbf{x}\\) if \\(f(\\mathbf{x} + t\\mathbf{d})\<f(\\mathbf{x})\\) for all \\(t\>0\\) sufficiently small.

> [!WARNING]
>
> **Proposition**
>
> If \\(f\\) is smooth, then any \\(\\mathbf{d}\\) such that \\(\\mathbf{d}^\\top \\nabla f(\\mathbf{x})\<0\\) is a descent direction.
>
> Note that \\(\\inf\_{\\|\\mathbf{d}\\|=1} \\mathbf{d}^\\top \\nabla f(\\mathbf{x}) = -\\nabla f(\\mathbf{x})\\), therefore \\(-\\nabla f(\\mathbf{x})\\) is called the steepest descent direction.

> [!NOTE]
>
> **Proof**
>
> Let \\(\\mathbf{d}\\) be such that \\(\\mathbf{d}^\\top \\nabla f(\\mathbf{x}) \<0\\), by continuity of \\(\\nabla f\\) there exist \\(t\_0\\) such that \\(\\mathbf{d}^\\top \\nabla f(\\mathbf{x}+t\\mathbf{d})\<0\\) for all \\(0\<t\<t\_0\\). Applying Taylor for any \\(0\<t\<t\_0\\) it holds
>
> \\\[ \\begin{equation\*} f(\\mathbf{x} + t \\mathbf{d}) = f(x) + t\\mathbf{d}^\\top \\nabla f(\\mathbf{x} + \\gamma t \\mathbf{d}) \\end{equation\*} \\\]
>
> for some \\(0\<\\gamma \<1\\) from which follows the claim.

## A First Try

Following this result and the intuition, we therefore construct the sequence as follows. We start from \\(\\mathbf{x}\_0\\) and update recursively with

\\\[ \\begin{equation\*} \\mathbf{x}\_{n+1} = \\mathbf{x}\_n - \\gamma \\nabla f(\\mathbf{x}\_n) \\end{equation\*} \\\]

and stop whenever we have something like \\(\\nabla f(\\mathbf{x}\_n) \\approx 0\\). However from the proof, even if the steeest direction is \\(-\\nabla f(\\mathbf{x})\\), the amount in which you walk down along this direction is part of the Taylor expansion and it is not clear how large \\(\\gamma\\) shall be optimally.

- \\(\\gamma\\) large: Even if \\(\\nabla f(\\mathbf{x})\\) will decrease to \\(0\\) as you close the minimum, your iterative step \\(\\gamma\\) might be too large so that you are going to miss it by overshooting and will have to come back, eventually ending up into an oscillatory or unstable behavior.
- \\(\\gamma\\) small: You run into less problems of overshooting, but you will walk slowly making the overall scheme very slow.

A lot of theory has been done on this topic for choosing the *right* step, with updating as you walk down. It depends very much on the problem, the properties of your function (convex, lipschitz, second differentiable, etc.)

Though we do not enter in this problem here, we consider another strategy to improve the convergence called *momentum* closely related to exponential moving average, in the sense that we keep in our update a decaying memory of the previous gradients.

\\\[ \\begin{equation\*} \\begin{cases} \\delta\_{n+1} &amp; = \\alpha \\delta\_{n} + \\gamma \\nabla f(\\mathbf{x}\_{n})\\\\ \\mathbf{x}\_{n+1} &amp;= \\mathbf{x}\_{n} - \\delta\_{n+1} \\end{cases} \\end{equation\*} \\\]

Doing a short expansion it follows that

\\\[ \\begin{align\*} \\mathbf{x}\_{n} &amp;= \\mathbf{x}\_{n-1} - \\delta\_{n}\\\\ &amp; = \\mathbf{x}\_{n-1} - \\gamma \\nabla f(\\mathbf{x}\_{n-1}) - \\alpha \\delta\_{n-1}\\\\ &amp; = \\mathbf{x}\_{n-1} - \\gamma \\nabla f(\\mathbf{x}\_{n-1}) - \\gamma \\alpha \\nabla f(\\mathbf{x}\_{n-1}) - \\alpha^2 \\delta\_{n-2}\\\\ &amp; \\vdots \\\\ &amp; = \\mathbf{x}\_{n-1} - \\gamma \\nabla f(\\mathbf{x}\_{n-1}) - \\sum\_{k=1}^{n-1}\\gamma \\alpha^k \\left(\\nabla f(\\mathbf{x}\_{n-k}) + \\alpha \\delta\_{n-1-k}\\right) \\end{align\*} \\\]

The second term in the sum is an exponential decaying function of the previous step size difference, therefore the term momentum (in time series it is often referred to as exponential moving average).

## Implementation using Numpy

```py
import numpy as np

# define the gradient descent function with inputs
# * max_iterations
# * threshold
# * x0 initialization
# * obj_func
# * grad_func
# * alpha (learning rate)
# * momentum
# return the trajectory of the gradient descent as well as the value
def gradient_descent(
    max_iterations,
    threshold,
    x0,
    obj_func,
    grad_func,
    gamma=0.01,
    alpha=0.9,
):
    # initialize the w and the history
    x = x0
    x_history = x
    f_history = obj_func(x)
    deltax = np.zeros(x.shape)

    # initialize the iteration counter
    i = 0

    # initialize the previous loss
    diff = 1e10

    # loop until the max iterations
    while i < max_iterations and diff > threshold:
        deltax = alpha * deltax + gamma * grad_func(x)
        x = x - deltax

        # store the history
        x_history = np.vstack([x_history, x])
        f_history = np.vstack([f_history, obj_func(x)])

        # update i and diff
        i += 1
        diff = np.abs(f_history[-1] - f_history[-2])

    return x_history, f_history
```

With our gradient descent function at hand let us try on a simple function. We import some plotting functionalities too to illustrate.

```py
import plotly.express as px
import plotly.graph_objs as go
from plotly.subplots import make_subplots

# define the objective and gradient functions
def func(x):
    return np.sum(x**2)

def grad(x):
    return 2 * x

# plot the function
x = np.linspace(-10, 10, 100)
y = np.linspace(-10, 10, 100)
X, Y = np.meshgrid(x, y)
cart_prod = np.dstack((X, Y)).reshape(-1, 2)
Z = np.apply_along_axis(func, 1, cart_prod)

fig = go.Figure()
fig.add_trace(
    go.Surface(
        x=x,
        y=y,
        z=Z.reshape(100, 100),
        colorscale="Inferno",
        showscale=False,
    )
)
fig.show()
```

We now run the gradient descent for different learning rate and moment values

```py
learning_rates = np.array([0.05, 0.2, 0.5, 0.8])
momentums = np.array([0.0, 0.5, 0.9])
max_iterations = 5
threshold = 1e-6

fig = make_subplots(cols=len(learning_rates), rows=len(momentums))
for idx, gamma in enumerate(learning_rates):
    for idy, alpha in enumerate(momentums):
        rng = np.random.default_rng(seed=10)
        x0 = 20 * rng.random(2) - 10
        x_history, f_history = gradient_descent(
            max_iterations,
            threshold,
            x0,
            func,
            grad,
            gamma=gamma,
            alpha=alpha,
        )

        # add the plot of the function
        fig.add_trace(
            px.imshow(
                Z.reshape(100, 100),
                x=x,
                y=y,
                color_continuous_scale="Oranges",
                zmin=100,
                zmax=200,
            ).data[0],
            row=idy + 1,
            col=idx + 1,
        )
        # add the curve of the path with arrows
        fig.add_trace(
            go.Scatter(
                x=x_history[:, 0],
                y=x_history[:, 1],
                mode="lines+markers",
                showlegend=False,
                marker=dict(
                    symbol="arrow",
                    size=15,
                    angleref="previous",
                    color="blue",
                ),
                line=dict(color="blue"),
            ),
            row=idy + 1,
            col=idx + 1,
        )
fig.update_layout(coloraxis_showscale=False)
fig.show()
```

## Basic Image Classification on Real Data

`sklearn` provides several datasets, among which are blurred images of \\(0\\) and \\(1\\). The images are `8x8` pixels, that is arrays of length `64` where the value corresponds to the shade of grey (from white to black).

```py
# library to get the dataset as well as the train_test function to split the dataset
import sklearn.datasets as dt
from sklearn.model_selection import train_test_split

# load the images and their feature (if it is 0 or 1)
digits, target = dt.load_digits(n_class=2, return_X_y=True)

# the shape of the dataset
print(digits.shape)

# We plot a short sample 
px.imshow(digits.reshape(360, 8, 8)[:10, :, :], facet_col=0, binary_string=True)
```

The goal it to perform a simple linear regression but using gradient descent by minimizing among all \\(\\mathbf{w} = \[w\_0, \\ldots, w\_{64}\]^\\top\\) the objective function

\\\[ \\frac{1}{N}\\sum (y\_n - \\mathbf{w}^\\top \\bar{\\mathbf{x}}\_n)^2 \\\]

where \\(y\_n\\) is either \\(0\\) or \\(1\\) for the label of the \\(n\\)-th image and \\(\\bar{\\mathbf{x}}\_n = \[1, \\mathbf{x}\_n\]\\) is the array of the image augmented with a \\(1\\).

Compute the gradient descent and compare with the linear regression.
