# Stochastic Gradient Descent

In machine learning and statistics (maximum likelihood for instance) the goal is to solve problems of the type

\\\[ \\begin{equation\*} \\mathrm{argmin}\_{\\mathbf{w} \\in \\mathbb{R}^K} E\\left\[ F\\left(\\mathbf{w}, \\mathbf{X}\\right) \\right\] \\end{equation\*} \\\]

where \\(\\mathbf{X}\\) is a \\(d\\) dimensional random vector. We saw a typical example with the linear regression where \\(\\mathbf{w} \\in \\mathbb{R}^{d+1}\\) and \\(F(\\mathbf{w}, \\mathbf{X}) = (Y - \\mathbf{w}\\cdot \\bar{\\mathbf{X}})^2\\) where \\(\\bar{\\mathbf{X}}\\) is just augmented by a constant value.

Having \\(N\\) samples \\((\\mathbf{x}\_n)\\) of \\(\\mathbf{X}\\), the gradient descent would apply to the function

\\\[ \\begin{equation\*} \\mathbf{w} \\mapsto \\frac{1}{N}\\sum F(\\mathbf{w}, \\mathbf{x}\_n) \\approx E\\left\[ F\\left( \\mathbf{w}, \\mathbf{X} \\right) \\right\] \\end{equation\*} \\\]

However this brings several issues

- The quality of \\(\\mathbf{w}^{\\ast, N}\\) as a function of the number of samples. In other terms, how does this local minimum performs when \\(M\\) additional samples are added \\(\\mathbf{x}\_{N+n}\\), \\(n=1, \\ldots, M\\).
- The computational costs of the sum itself when \\(N\\) is already very large (this involves \\(N\\) evaluations of the gradient \\(\\nabla F(\\mathbf{w}, \\mathbf{x}\_n)\\), for \\(n=1, \\ldots, N\\) at each step)

## Stochastic Gradient Descent

The idea of stochastic gradient is similar to Monte Carlo in the sense that each iteration of the gradient descent is performed against a single sample recursively, that is

\\\[ \\begin{equation\*} \\mathbf{w}\_{k+1} = \\mathbf{w}\_k - \\eta \\nabla F(\\mathbf{w}\_k, \\mathbf{x}\_k) \\end{equation\*} \\\]

This iterative procedure is faster at each step since a single gradient is computed, however it is not clear that the sequence \\((\\mathbf{w}\_n)\\) converges against a local minimum.

It turns out that under reasonable conditions on \\(F\\) as well as iid samples as input, it converges asymptotically.

Usually, the classical algorithm will randomly shuffle the dataset \\((\\mathbf{x}\_n)\\) beforehand. Adaptive methods for the learning rate are also applied to improve the speed of convergence.

## Mini-Batches

On the one hand, gradient descent does not involves stochastic by taking the full training set at the cost of a large amount of gradient evaluations, on the other hand, stochastic gradient descent involves randomness in the convergence at the gain of a single gradient evaluation per set.

To mitigate between both strategies, an intermediary method is used called mini-batch. The idea is that at each step, one samples randomly a small amount \\(\\mathbf{x}\_{n\_1}, \\ldots, \\mathbf{x}\_{n\_M}\\) of \\(M\\) elements from the whole sample and update according to

\\\[ \\begin{equation\*} \\mathbf{w}\_{k+1} = \\mathbf{w}\_k - \\frac{\\eta}{M}\\sum\_{m=1}^M\\nabla F(\\mathbf{w}\_k, \\mathbf{x}\_{n\_m}) \\end{equation\*} \\\]

The size \\(M\\) of the mini-batch as well as the iterative updating of the learning rate \\(\\eta\\) is subject to the problem itself (total number of samples, dimension of the samples, computational time for the gradient, memory size, as well as the function itself).
