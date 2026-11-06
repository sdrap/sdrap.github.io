# Homework 04

**Overall Info**

Due date: 2024-06-26

Returns in terms of a `*.py` file with comments for the code

By group of 5-6 students

## 1\. ODE implementation

Harmonic Oscillator:

\\\[ \\begin{equation\*} x^{\\prime\\prime} + \\omega^2 x = 0 \\end{equation\*} \\\]

- setting \\(v = x^\\prime\\), convert this second order ode into a two dimensional first order ODE \\((x, v)\\).
- Use Euler scheme to compute the solution with \\(\\omega=1\\) with \\(x(0) = 1\\), \\(v(0) =1\\)
- plot the curve \\(t\\mapsto (x(t), v(t))\\) for \\(0\\leq t \\leq 10\\).

Consider the Damped harmonic oscillator:

\\\[ \\begin{equation\*} x^{\\prime\\prime} + 2\\gamma x^\\prime + \\omega^2 x = 0 \\end{equation\*} \\\]

- same notation convert this equation into first order ode in two dimensions.
- Use RK 4th order to compute the solution \\(\\omega = 1\\) and \\(\\gamma = 0.1\\) and \\(x(0) = v(0)=1\\).
- plot the solution and compare with the previous solution

## 2\. Forward vs Backward (explicit vs implicit).

Explicit Euler

\\\[ \\begin{equation\*} y(t+h) = y(t) + h f(t, y(t)) \\end{equation\*} \\\]

Implicit Euler

\\\[ y(t+h) = y(t) + h f(t+h, y(t+h)) \\\]

This second method involves solving a root problem to get \\(y(t+h)\\).

- Using `root` from `scipy.minimize` implement the implicit Euler

Consider the ODE

\\\[ \\begin{equation\*} y^\\prime = -\\lambda y, \\quad y(0) = 1 \\end{equation\*} \\\]

with solution \\(y(t) = e^{-\\lambda t}\\)

- use explicit Euler, RK 4th to compare with implicit Euler (precision and speed)

## 3\. Gradient Descent

We implement the gradient descent on the blurred \\(0\\) and \\(1\\) images from `sklearn` package.

```py
import numpy as np

import plotly.express as px
import plotly.graph_objs as go
from plotly.subplots import make_subplots

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

- modify the objective function and gradient of which so that it takes as input \\(\\mathbf{w}\\) \\(\\mathbf{x}\\) and \\(\\mathbf{y}\\) and modify the gradient descent function.

Since our goal is to find a correct specification to further classify data, we calibrate the model on a training set and evaluate its accuracy on a testing set. To split the two set of data we use `sklearn`

```py
x_train, x_test, y_train, y_test = train_test_split(
  digits,
  target,
  test_size=0.2,
  random_state=10
)
```

- Using the gradient descent calibrate on the training set `x_train`, `y_train` the optimal value of \\(\\mathbf{w}\\). Plot the value of `f_history` (choose a maximum number of iteration of 100 and 0.1 as threshold and tweak a little bit with momentum and learning rate until you reach a satisfactory convergence rate and error)

Now we want to be able to classify the data. We proceed as follows

If \\(\\mathbf{w}^\\top \\bar{\\mathbf{x}} \\geq 0.5\\) it is classified as \\(1\\) otherwise it is classified as \\(0\\).

- Given \\(\\mathbf{w}\\), \\(N\\) samples \\((\\mathbf{x}\_1, y\_1), \\ldots,(\\mathbf{x}\_N, y\_N)\\), design a function `accuracy(w, x, y)` that returns the percentage of correctly classified values.
- Using this function, provide the accuracy of your solutions on the testing set `(x_train, y_train)` and on the test set `(x_test, y_test)`.
- **Optional Question:** compare the gradient descent method with the traditional OLS linear regression method.
