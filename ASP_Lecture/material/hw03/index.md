# Homework 03

**Overall Info**

Due date: 2024-05-24

Returns in terms of a `*.py` file with comments for the code

By group of 5-6 students

## 1\. Linear Regression Fake Data

To illustrate the principle of linear regression we consider the following model

\\\[ \\begin{equation\*} Y = a + b\_1 X\_1 +b\_2 X\_2 + \\varepsilon = \\mathbf{X}\\mathbf{b} + \\varepsilon \\end{equation\*} \\\]

where

\\\[ \\begin{equation\*} \\mathbf{b} = \\begin{bmatrix} a\\\\ b\_1\\\\ b\_2 \\end{bmatrix} \\quad \\text{and} \\quad \\mathbf{X} = \\begin{bmatrix} 1 &amp; X\_1 &amp; X\_2 \\end{bmatrix} \\end{equation\*} \\\]

We assume that

\\\[ \\begin{equation\*} \\begin{bmatrix} X\_1 \\\\ X\_2 \\end{bmatrix} \\sim \\mathcal{N}\\left( \\begin{bmatrix} \\mu\_1 \\\\ \\mu\_2 \\end{bmatrix} , \\begin{bmatrix} \\sigma\_1^2 &amp; \\sigma\_1 \\sigma\_2 \\rho\\\\ \\sigma\_1 \\sigma\_2 \\rho &amp; \\sigma\_2^2 \\end{bmatrix} \\right) \\quad \\text{and}\\quad \\varepsilon \\sim \\mathcal{N}(0, \\sigma^2) \\end{equation\*} \\\]

with \\(\\varepsilon\\) independent of \\((X\_1, X\_2)\\).

Consider the following specifications

```py
import numpy as np

b = np.array([1, 1, -0.5]).T

mu = np.array([1, 0]).T
sigma1 = 1
sigma2 = 0.5
rho = 0.4
Sigma = np.array(
    [
        [sigma1 ** 2, sigma1 * sigma2 * rho],
        [sigma1 * sigma2 * rho, sigma2 ** 2]
    ]
)

sigma = 2

# We prepare the dataset

# Fix random number generator and number of samples
rng = np.random.default_rng(seed = 150)
N = 1000

# generate samples
X = rng.multivariate_normal(mu, Sigma, size = N)        # size N x 2
epsilon = rng.normal(0, sigma, size = N)                # size N

# Add an axis of 1 to X
X = np.append(np.ones((N, 1)), X, axis = 1)             # append Nx1 to Nx2 -> Nx3

# Generate Y
Y = X.dot(b) + epsilon                                  # size N
Y
```

### Question 1:

- Generate a scatter plot of \\(Y\\) against \\(X\_1\\) and \\(X\_2\\), as well as a scatter plot of \\(X\_1\\) against \\(X\_2\\).
- Implement the computation of \\(\\hat{\\mathbf{b}}(N)\\) from the \\(N\\) sample data and compare the obtained values with the true one.
- Return the residual error \\(\\hat{\\varepsilon}(N)=Y - \\hat{\\mathbf{b}}(N)\\cdot \\mathbf{X}\\) and plot its histogram.

### Question 2:

Since we fixed the random generator with `seed=150` you always get the same result for \\(\\hat{\\mathbf{b}}(N)\\) as well as \\(\\hat{\\varepsilon}(N)\\).

Two source of error can come into the linear regression: The randomness in the sample (the seed) as well as the number of samples `N`.

- Define a function `f(N, M)` where `N` is the number of samples, and \\(M\\) is the number of trials where you draw this sample. This function shall return
- an array \\(\\hat{\\mathbf{b}}(N)\\) of size `3xM` for each computation of the regression coefficient (in the random generator you set `seed = None`)
- an array \\(\\hat{\\varepsilon}(N)\\) of size `NxM` of the corresponding residual for each sample drawn.
- Fix `M=100` and for `N = 10, 100` and `1000` plot the histogram of
- `a(N)`, `b_1(N)` and `b_2(N)` (they are arrays of `M=100` values)
- mean and standard deviation in the direction of the `N` axis of \\(\\hat{\\varepsilon}(N)\\) (you get two arrays of `M=100` values)

## 2\. Linear Regression Real Data

As seen in the lecture, we are given a set of data in a dataframe `df` with

- a column `y` for the serie of outputs;
- `d` columns `x_0`, ..., `x_d` for the series of outputs

In the following example we consider a [dataset about wine](<https://www.samuel-drapeau.info/ASP_Lecture/data/winequality.csv>)

### Question 1:

Proceed through the following:

- Load the dataset with pandas, check if the data are correct and provide some descriptive statistics.

The output \\(\\mathbf{y}\\) is `quality`, the column `type` stands for the rows that are either `red` or `white`, all the other columns are characteristics of the wine.

- Using plotly scatter plot, visualize for `red` and `white` the relation between each input dimension and output dimension.
- Implement using `statsmodels` the ols regression of `quality` against the inputs and show the results.

### Question 2.

The number of features is quite large and it is not clear which feature is relevant or not in the linear regression. The goal is to reduce the number of features as to explain as much as possible the output.

Without entering in feature selection overall, we just want to see which input is the most relevant. One indicator for the goodness of a linear regression is `rsquared` which can be obtained from the returned fitted model `est = sm.OLS(y, X).fit()` and then `est.rsquared`.

We just try to get the two best features

- Loop through every single input feature, perform the linear regression, get the rsquared.
- take the feature with the largest rsquared.
- Loop through each other feature, perform the linear regression together with the previously selected and first feature
- select the feature with the largest rsquared.

> [!NOTE]

Normally you should also consider if the new feature collected is not strongly colinear with the first one. To do so you should double check the VIF factor, see [`variance_inflation_factor`](<https://www.statsmodels.org/dev/generated/statsmodels.stats.outliers_influence.variance_inflation_factor.html>).

## 3\. Clustering

The principle of clustering is as follows. Given a set \\(X = \\{x\_1, \\ldots, x\_N\\}\\) of \\(N\\) points in \\(\\mathbb{R}^d\\), the goal is to find a partition (cluster) \\(C\_1, \\ldots C\_K \\subseteq X\\) which somehow group *similar* points.

Similarity between points is defined in terms of some distance \\(d(x,y)\\). The clustering aims to find an optimal cluster \\(C\_1^\\ast, \\ldots, C\_K^\\ast\\) such that

\\\[ \\begin{equation} \\sum\_{k=1}^K \\frac{1}{\\\# C^\\ast\_k}\\sum\_{x, y \\in C\_k^\\ast} d(x, y) \\leq \\sum\_{k=1}^K \\frac{1}{\\\# C\_k}\\sum\_{x, y \\in C\_k} d(x, y) \\end{equation} \\\]

for any other cluster \\(C\_1, \\ldots, C\_K\\).

We denote by \\(\\mathfrak{C}\\) the set of all clusters (or partitions) \\(\\mathcal{C} = \\{C\_1, \\ldots, C\_K\\}\\) of \\(X\\) in \\(K\\) elements and define

\\\[ \\begin{equation\*} F(\\mathcal{C}) = \\sum\_{C \\in \\mathcal{C}} \\frac{1}{\\\# C}\\sum\_{x, y \\in C} d(x, y) \\end{equation\*} \\\]

the problem can therefore be reformulated into an optimization problem

\\\[ \\begin{equation\*} \\mathcal{C}^\\ast = (C\_1^\\ast, \\ldots, C\_K^\\ast) = \\mathrm{argmin}\\left\\{F(\\mathcal{C})\\colon \\mathcal{C} \\in \\mathfrak{C}\\right\\} \\end{equation\*} \\\]

Computing \\(F\\) for a given cluster \\(\\mathcal{C}\\) is relatively fast as long as the distance is quick to compute. However, the optimization problem itself is very difficult. Indeed, it is a minimization problem on a set \\(\\mathfrak{C}\\) which does not have a suitable topology to define derivatives for instance. Hence, the only way a priori would be a brute force optimization, that is running through every possible partition, which is however not suitable since the cardinality of \\(\\mathfrak{C}\\) is gigantic. It corresponds to the [stirling number of the second kind](<https://en.wikipedia.org/wiki/Stirling_numbers_of_the_second_kind>) \\({ N \\brace K}\\):

\\\[ \\begin{equation\*} \\\#\\mathfrak{C} := {N\\brace K} = \\sum\_{k=0}^K \\frac{(-1)^{K-k} k^N}{(K-k)!k!} \\sim\_{N\\to \\infty} \\frac{K^N}{K!} \\end{equation\*} \\\]

meaning that for a fixed number \\(K\\), the cardinality is growing exponentially in the size of the set. The problem can be refined and some better approximation can be found but in general this is NP-Hard.

However, with some assumptions about the distance, and geometrical consideration, an honnest and fast algorithm can be designed to achieve some local optimum.

We consider as ''distance''' the square of the euclidean norm, that is \\(d(x,y) = \\|x - y\\|^2\\).

### Question 1.

Show that

\\\[ \\begin{equation\*} \\frac{1}{\\\# C} \\sum\_{x, y \\in C} \\| x - y \\|^2 = 2 \\sum\_{x \\in c} \\|x - \\mu\\|^2 \\end{equation\*} \\\]

where \\(\\mu = \\frac{1}{\\\# C} \\sum x\\) is the average/barycenter or centroid of \\(C\\).

### Question 2.

It follows that

\\\[ \\begin{equation\*} F(\\mathcal{C}) = \\sum\_{C \\in \\mathcal{C}} \\sum\_{x \\in X} \\|x - \\mu\_{C}\\|^2 \\end{equation\*} \\\]

With this reformulation in term of geometric center of \\(C\\) leads to the following idea for an algorithm to select a partition.

> 1. Initialize \\(K\\) centers \\(\\mu\_1(0), \\ldots, \\mu\_K(0)\\) by choosing \\(K\\)-points in \\(X\\).
> 2. Recursively: While \\(\\mathcal{C}(n+1) \\neq \\mathcal{C}(n)\\) at the end of the following do:
> 3. Given \\(K\\) \\(\\mu\_1(n), \\ldots \\mu\_K(n)\\) define \\(K\\) sets \\(C\_1(n+1), \\ldots, C\_K(n+1)\\):
>
>    \\(C\_k(n+1) = \\left\\{x \\in X\\colon \\|x - \\mu\_K(k)\\|^2 \\leq \\|x - \\mu\_K(j)\\|^2 \\text{ for any }j\\neq k\\right\\}\\)
>
>    If some point is assigned to two or more then set it to a single one. The best way to do it, is to assign the points to the first cluster, then assign the remaining points to the second one, etc.
> 4. update the new centers \\(\\mu\_1(n+1), \\ldots, \\mu\_K(n+1)\\):
>
>    \\(\\mu\_k(n+1) = \\frac{1}{\\\# C\_k(n+1)} \\sum\_{x \\in C\_k(n+1)} x\\)

- Show that at each step \\(F(\\mathcal{C}(n+1))\\leq F(\\mathcal{C}(n)\\), hence we find a sequence along which the cost function is decreasing.
- Show that the algorythm finishes after a finite number of steps.
- implement the algorythm in numpy by choosing randomly \\(k\\) elements of the set \\(X\\). (the set \\(X\\) can be represented by a numpy array `Nxd`.)

### Question 2.

Consider the dataset [California Housing](<https://www.samuel-drapeau.info/ASP_Lecture/data/housing.csv>) which represents the housing data for California.

- Load the dataset and select the columns `longitude`, `lattitude` and `medianIncome` as final dataframe `df`.
- Install (using conda or pip) the package `scikit-learn` which is a standard machine learning library.
- Cluster the data with 4 clusters using Kmeans: `from sklearn.cluster import KMeans`.
- given a numpy array `X` of size `N x d`, computing the cluster with `Kmeans` is done as follows `result = KMeans(n_clusters = 4).fit(X)` and the labels for the cluster are given by `result.labels_` which is an array of size `N`.
- join the cluster values in the dataframe as a new column.
- plot using [plotly express scatter](<https://plotly.com/python/line-and-scatter/>) the scatter plot latitude against longitude with a different color for each cluster.
