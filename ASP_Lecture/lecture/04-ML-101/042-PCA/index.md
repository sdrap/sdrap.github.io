# Principal Component Analysis

Principal component analysis, commonly referred to as PCA, is a linear method to reduce dimension in large sets of data. For instance, in linear regression, you want to approximate the output by a linear combination of inputs. Two problems then come to mind:

1. The dimension \\(d\\) might be extremely large resulting into overfiting problems.
2. Some of the inputs might themselves be collinear reducing the explanatory power of one factor with respect to the other one.

The idea is to proceed to an orthonormal basis change under which the inputs will be orthogonal and select the vectors with the largest eigenvalue.

## Theory

> [!CAUTION]
>
> **Theorem: Spectral Decomposition**
>
> Any \\(d\\times d\\) dimensional real valued **symetric** matrix \\(\\mathbf{A}\\) can be decomposed into.
>
> \\\[ \\begin{equation\*} \\mathbf{A} = \\mathbf{\\Gamma} \\mathbf{\\Lambda} \\mathbf{\\Gamma}^\\top \\end{equation\*} \\\]
>
> where
>
> 1. \\(\\mathbf{\\Lambda} = \\mathrm{diag}(\\lambda\_1, \\ldots, \\lambda\_d)\\) is a matrix of real valued eigenvalues.
> 2. \\(\\mathbf{\\Gamma}\\) is an orthogonal matrix whose columns are normalized eigenvectors satisfying \\(\\mathbf{\\Gamma}^\\top \\mathbf{\\Gamma} = \\mathbf{\\Gamma} \\mathbf{\\Gamma}^\\top = I\\).
>
> Furthermore, if the matrix is positive semi-definite, that is \\(\\mathbf{x}^\\top \\mathbf{A}\\mathbf{x} \\geq 0\\) for any column vector \\(\\mathbf{x}\\), the eigenvalues are then positives and strictly positive in case of positive definiteness.

Consider a column vector \\(\\mathbf{X}\\) of random variable and define the mean vector and covariance matrix

\\\[ \\begin{equation\*} \\mathbf{\\mu} = E\\left\[\\mathbf{X}\\right\] \\quad \\text{and} \\quad \\mathbf{\\Sigma} :=\\mathrm{Cov}(\\mathbf{X})= E\\left\[\\left(\\mathbf{X}-\\mathbf{\\mu}\\right)\\left(\\mathbf{X} - \\mathbf{\\mu}\\right)^\\top\\right\] \\end{equation\*} \\\]

> [!NOTE]
>
> **Properties of Covariance and Mean**
>
> Clearly, the covariance is a real valued symetric matrix.
>
> However, since for a matrix \\(\\mathbf{B} \\in \\mathbb{R}^{l\\times d}\\) and a column vector \\(\\mathbf{a}\\in \\mathbb{R}^l\\), it holds
>
> \\\[ \\begin{equation\*} E\\left\[ \\mathbf{B}\\mathbf{X} + \\mathbf{a} \\right\] = \\mathbf{B}\\mathbf{\\mu} + \\mathbf{a}\\quad \\text{and}\\quad \\mathrm{Cov}\\left(\\mathbf{B}\\mathbf{X} + \\mathbf{a}\\right) = \\mathbf{B}\\mathrm{Cov}(\\mathbf{X})\\mathbf{B}^\\top \\end{equation\*} \\\]
>
> it follows that \\(\\mathrm{Cov}(\\mathbf{X})\\) is positive semi-definite. Indeed, for any column vector \\(\\mathbf{y}\\), it follows that
>
> \\\[ \\begin{equation\*} \\mathbf{y}^\\top \\mathbf{\\Sigma}\\mathbf{y} = \\mathrm{Cov}(\\mathbf{y}^\\top \\mathbf{X}) = \\mathrm{Var}(\\mathbf{y}^\\top \\mathbf{X})\\geq 0 \\end{equation\*} \\\]

Since \\(\\mathbf{\\Sigma}\\) is positive semidefinite, let \\(\\lambda\_{1}, \\ldots, \\lambda\_{d}\\) be the real valued eigenvalues and \\(\\mathbf{\\Gamma}\_1, \\ldots,\\mathbf{\\Gamma}\_d\\) be the the corresponding eigenvectors for which holds

\\\[ \\begin{equation\*} \\mathbf{\\Sigma} = \\begin{bmatrix} \\mathbf{\\Gamma}\_1 &amp; \\ldots &amp; \\mathbf{\\Gamma}\_d \\end{bmatrix} \\begin{bmatrix} \\lambda\_1 &amp; \\cdots &amp; 0 \\\\ \\vdots &amp; \\ddots &amp; \\vdots \\\\ 0 &amp; \\cdots &amp; \\lambda\_d \\end{bmatrix} \\begin{bmatrix} \\mathbf{\\Gamma}^\\top\_1 \\\\ \\vdots \\\\ \\mathbf{\\Gamma}^\\top\_d \\end{bmatrix} \\end{equation\*} \\\]

Without loss of generality up to permutation of the columns of \\(\\mathbf{\\Gamma}\\) we can consider that \\(\\lambda\_1\\geq \\ldots \\geq \\lambda\_0 =0\\).

> [!NOTE]
>
> **Permuting the Representation**
>
> The spectral decomposition holds under permutation. Indeed, let \\(\\sigma\\) be a permutation of \\(\\{1, \\ldots, d\\}\\), we define the column permutation matrix \\(P\\) as \\(P\_{ij} = 1\\) if \\(j =\\sigma(i)\\) and zero otherwise. This permutation matrix is invertible with inverse \\(P^\\top\\) which coincide with the row permutation matrix. In particular \\(P\\) is orthonormal.
>
> Given a matrix \\(A\\), the product \\(P^\\top A\\) permuts the rows of \\(A\\) while the product \\(AP\\) permuts the columns of \\(A\\). Hence, it follows that
>
> \\\[ \\begin{equation\*} \\mathbf{\\Sigma} = \\mathbf{\\Gamma}\\mathbf{\\Lambda}\\mathbf{\\Gamma} = \\mathbf{\\Gamma}P P^\\top \\mathbf{\\Lambda}P P^\\top \\mathbf{\\Gamma} = (\\mathbf{\\Gamma}P) (P^\\top \\Lambda P)(\\mathbf{\\Gamma}P) \\end{equation\*} \\\]
>
> Since the set of orthogonal matrices is a group we can define \\(\\tilde{\\mathbf{\\Gamma}} = \\mathbf{\\Gamma}P\\) and \\(\\tilde{\\mathbf{\\Lambda}}=P^\\top \\mathbf{\\Lambda}P\\).

> [!TIP]
>
> ****PCA Decomposition****
>
> The *Principal component transform* of \\(\\mathbf{X}\\) is the random vector
>
> \\\[ \\begin{equation\*} \\mathbf{Y} = \\mathbf{\\Gamma}^\\top\\left(\\mathbf{X} - \\mathbf{\\mu}\\right) \\end{equation\*} \\\]

It clearly follows that

\\\[ \\begin{equation\*} E\\left\[\\mathbf{Y}\\right\] = 0 \\quad \\text{and}\\quad \\mathrm{COV}(\\mathbf{Y}) = \\mathbf{\\Lambda} \\end{equation\*} \\\]

In particular, with a total variance \\(\\sum\_{k=1}^d \\mathrm{VAR}\\left(Y\_k\\right) = \\sum\_{k=1}^d \\lambda\_k = \\mathrm{Trace}(\\mathbf{\\Lambda}) = \\mathrm{Trace}(\\mathbf{X}) = \\sum\_{k=1}^d \\mathrm{VAR}(X\_k)\\) for which we define the ratio

\\\[ \\begin{equation\*} \\mathrm{tv}(k):=\\frac{\\sum\_{l=1}^k \\lambda\_k}{\\mathrm{Trace}(\\mathbf{\\Lambda})} \\end{equation\*} \\\]

that can be interpreted as the percentage of variance explained by the first \\(k\\) components. This ratio is clearly increasing from \\(0\\) to \\(100\\%\\) and concave since we ordered the components decreasingly. Given a threshold \\(\\theta\\) (for instance \\(\\theta = 50\\%\\)), the smallest \\(k\_0\\) such that \\(\\mathrm{tv}(k)\\geq \\theta\\) is such that the first \\(k\_0\\) components explains at least \\(\\theta \\%\\) of the total variation of \\(\\mathbf{X}\\).

We then define \\(\\mathbf{Y}^{(1)}\\) and \\(\\mathbf{Y}^{(2)}\\) as the first \\(k\_0\\) and last \\(d-k\_0+1\\) rows of \\(\\mathbf{Y}\\) respectively as well as (remember \\(\\Gamma\\) is the orthogonal matrix of eigenvectors after permuting the columns) \\(\\mathbf{\\Gamma}^{(1)}\\) and \\(\\mathbf{\\Gamma}^{(2)}\\) as the matrix with the first \\(k\_0\\) and last \\(d-k\_0+1\\) eigenvectors, respectively. It holds that

\\\[ \\begin{equation\*} \\mathbf{X} = \\mathbf{\\mu} + \\mathbf{\\Gamma}^{(1)}\\mathbf{Y}^{(1)}+ \\mathbf{\\Gamma}^{(2)}\\mathbf{Y}^{(2)} = \\mathbf{\\mu} + \\mathbf{\\Gamma}^{(1)}\\mathbf{Y}^{(1)} + \\mathbf{\\varepsilon} \\end{equation\*} \\\]

where \\(\\mathbf{\\varepsilon}\\) is a random vector only contributing to less than \\((1-\\theta)\\%\\) of the total variance of \\(\\mathbf{X}\\).

> [!NOTE]
>
> **Normalization**
>
> Note that the PCA is not invariant with scaling of one or the other input. Depending on the situation (in particular when there is a large variation in terms of the amplitude of the inputs) a normalization (by the standard deviation or with quantiles) can be performed. However the interpretation is totally different as the projection might differ a lot.

## Numpy Implementation

To perform a PCA decomposition, the functionalities of `np.linalg.eig` are entirely sufficient to provide a PCA decomposition. For this we will make use of the dataset [CSI](<https://www.samuel-drapeau.info/ASP_Lecture/data/CSI.csv>) that represents the price of 208 stocks over 7 years of the CSI Index. We want to consider as \\(\\mathbf{X}\\) the normalized returns of these stock prices and proceed to a PCA decomposition of which (basically we do a PCA of the correlation matrix rather than covariance matrix.)

Import the data and

```py
# import numpy, pandas to load data and plotly to plot
import numpy as np
import pandas as pd
import plotly.graph_objs as go
import plotly.express as px
from plotly.subplots import make_subplots

# load the dataset, convert the dates to datetime and set as index
dfstocks = pd.read_csv('./data/CSI.csv')
dfstocks["Date"] = pd.to_datetime(dfstocks["Date"])
dfstocks = dfstocks.set_index("Date")

# get the returns and dropna as it destroys positive definiteness
dfret = dfstocks.pct_change().dropna().copy()

# compute the correlation matrix
Corr = dfret.corr() 

# and plot it as a heat map
fig = px.imshow(Corr, color_continuous_scale='Inferno_r')
fig.show()
```

The correlation matrix is quite mixed most of which are positive. We now proceed to the PCA decomposition of this matrix.

```py
# use linalg.eig to get eigenvalues and eigenvectors (eigenvector[:, i] is the ith eigenvector)
eigenvalues, eigenvectors = np.linalg.eig(Corr)


# %% plot the cumulative normalized eigenvalues and their relative weights with two different y-axi
fig = make_subplots(specs=[[{"secondary_y": True}]])
fig.add_trace(
    go.Bar(
        x=dfeigenval.index,
        y=dfeigenval / dfeigenval.sum(),
        name="Eigenvalues Relative Weights",
    ),
    secondary_y=False,
)
fig.add_trace(
    go.Scatter(
        x=dfeigenval.index,
        y=dfeigenval.cumsum() / dfeigenval.sum(),
        mode="lines",
        name="Eigenvalues Cumulative Weights",
    ),
    secondary_y=True,
)
# update the axis layout for each axis
fig.update_yaxes(tickformat=",.0%", title="Relative Weights", secondary_y=False)
fig.update_yaxes(tickformat=",.0%", title="Cumulative Weights", secondary_y=True)
fig.show()
```

Now decide for a threshold (here \\(60\\%\\)) and define the principal factor loading matrix.

```py
# set the threshold
theta = 0.6

# get the index of those factor that only contributes beyond theta
idx = dfeigenval.cumsum() / dfeigenval.sum() >= theta
print(f"The index of those factors that explain at least {theta:.0%} of the variance are:{~idx}")

# now slice the dfeigenvectors dataframe by keeping only the columns that are in ~idx
pca = dfeigenvec.loc[:, ~idx].copy()
display(pca)
print(f"The original dimension of {len(dfeigenvec.columns)} has been reduced to {len(pca.columns)}")
```

## Using Scikitlearn

Scikit learn provides a package performing PCA entirely.
