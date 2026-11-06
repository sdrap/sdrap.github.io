# Clustering

The principle of clustering is to gether *similar* data points among groups. Given a set \\(X = \\{x\_1, \\ldots, x\_N\\}\\) of \\(N\\) points in \\(\\mathbb{R}^d\\), the goal is to find a partition (cluster) \\(C\_1, \\ldots, C\_K \\subseteq X\\) which somehow group *similar* points.

There are several ways to cluster in one way or another depending on how you want to define similarity and also how is your dataset. For instance

- **Perspecified Cluster:** or basic classification of data. For instance partition companies in different categories (`banking`, `insurance`, `construction`, etc.). Those categories are pre given, the only action is to allocate each point to the closest category. This is not really what people understand under clustering as the cluster itself should be derived rather than given.
- **Hierarchical Clustering:** Build a hierarchy of clusters from coarse to fine, similar to a tree.
- **Centroid Clustering:** Cluster data according to geometry and distance.
- etc.

In the following we concentrate on a simple but prominent clustering method involving grouping points according to within distance in a group. Similarity between points is defined in terms of a *(pseudo) distance* \\(d(x,y)\\). The clustering aims to find an optimal cluster \\(C\_1^\\ast, \\ldots, C\_K^\\ast\\) such that

\\\[ \\begin{equation} \\sum\_{k=1}^K \\frac{1}{\\\# C^\\ast\_k}\\sum\_{x, y \\in C\_k^\\ast} d(x, y) \\leq \\sum\_{k=1}^K \\frac{1}{\\\# C\_k}\\sum\_{x, y \\in C\_k} d(x, y) \\end{equation} \\\]

for any other cluster \\(C\_1, \\ldots, C\_K\\).

We denote by \\(\\mathfrak{C}\\) the set of all clusters (or partitions) \\(\\mathcal{C} = \\{C\_1, \\ldots, C\_K\\}\\) of \\(X\\) in \\(K\\) elements and define

\\\[ \\begin{equation\*} F(\\mathcal{C}) = \\sum\_{C \\in \\mathcal{C}} \\frac{1}{\\\# C}\\sum\_{x, y \\in C} d(x, y) \\end{equation\*} \\\]

Clustering can therefore be reformulated into an optimization problem

\\\[ \\begin{equation\*} \\mathcal{C}^\\ast = (C\_1^\\ast, \\ldots, C\_K^\\ast) = \\mathrm{argmin}\\left\\{F(\\mathcal{C})\\colon \\mathcal{C} \\in \\mathfrak{C}\\right\\} \\end{equation\*} \\\]

Computing \\(F\\) for a given cluster \\(\\mathcal{C}\\) is relatively fast as long as the distance is quick to compute. However, the optimization problem itself is very difficult. Indeed, it is a minimization problem on a set \\(\\mathfrak{C}\\) which does not have a suitable topology to define derivatives, for instance. Hence, the only a priory way is a brute force optimization, that is, running through every possible partition. It is however not suitable since the cardinality of \\(\\mathfrak{C}\\) is gigantic. It corresponds to the [stirling number of the second kind](<https://en.wikipedia.org/wiki/Stirling_numbers_of_the_second_kind>) \\({ N \\brace K}\\):

\\\[ \\begin{equation\*} \\\#\\mathfrak{C} := {N\\brace K} = \\sum\_{k=0}^K \\frac{(-1)^{K-k} k^N}{(K-k)!k!} \\sim\_{N\\to \\infty} \\frac{K^N}{K!} \\end{equation\*} \\\]

meaning that for a fixed number \\(K\\), the cardinality is growing exponentially in the size of the set. The problem can be refined and some better approximation can be found but in general this is NP-Hard. However, with some assumptions about the distance, and geometrical considerations, an honnest and fast algorithm can be designed to achieve some local optimum. We consider as *distance* the square of the euclidean norm, that is \\(d(x,y) = \\|x - y\\|^2\\).

In this specific case, it turns out that the problem can be reformulated in terms of barycenter or centroid with respect to the distance

\\\[ \\begin{equation\*} F(\\mathcal{C}) = \\sum\_{C \\in \\mathcal{C}} \\sum\_{x \\in X} \\|x - \\mu\_{C}\\|^2 \\end{equation\*} \\\]

where \\(\\mu\_C = \\frac{1}{\\\# C} \\sum x\\) is the average/barycenter or centroid of \\(C\\).

With this reformulation in term of the geometric center of \\(C\\), it leads to the following idea for an algorithm to select a partition.

> 1. Initialize \\(K\\) centers \\(\\mu\_1(0), \\ldots, \\mu\_K(0)\\) by choosing \\(K\\)-points in \\(X\\).
> 2. Recursively: While \\(\\mathcal{C}(n+1) \\neq \\mathcal{C}(n)\\) at the end of the following do:
>
>    - Given \\(\\mu\_1(n), \\ldots \\mu\_K(n)\\) define the sets \\(C\_1(n+1), \\ldots, C\_K(n+1)\\):
>
>      \\(C\_k(n+1) = \\left\\{x \\in X\\colon \\|x - \\mu\_K(k)\\|^2 \\leq \\|x - \\mu\_K(j)\\|^2 \\text{ for any }j\\neq k\\right\\}\\)
>    - update the new centers \\(\\mu\_1(n+1), \\ldots, \\mu\_K(n+1)\\):
>
>      \\(\\mu\_k(n+1) = \\frac{1}{\\\# C\_k(n+1)} \\sum\_{x \\in C\_k(n+1)} x\\)

With this algorithm, modulo care about common points in clusters, at each step \\(F(\\mathcal{C}(n+1))\\leq F(\\mathcal{C}(n)\\). Hence, there exists a sequence of clusters along which the cost function is decreasing. Since the number of cluster, though large, is finite, the algorithm ends after a finite number of steps.

## Implementation in Numpy and Pandas

In the following implementation, we assume that we have \\(N\\) samples of \\(d\\)-dimensional data points, that is, a `Nxd`-array

```py
import numpy as np
# we assume that we have a set of data N*d with N>d

def basic_cluster(data, K, max_it = 1e3, tol = 1e-4):
    N = data.shape[0]
    # we check that there are enough datapoints.
    if N < K:
        print(f"The number of datapoints {N} is not sufficient to group in {K} clusters.")
        break

    # create a numpy array of size N which entries will corresponds to the cluster value for data point n
    cluster = np.zeros(N)

    # initialize a set of centroids taken randomly from the data using random choice without replacement
    rng = np.random.default_rng()
    mu = rng.choice(data, size = K, replace = False)

    # perform the while loop until centers are the same or max_it is reached
    i = 0
    diff = 1e8

    while i < max_it or diff < tol:
        # we make a copy of the data
        old_mu = mu.copy()
        data_tmp = data.copy()
        # Compute the distance matrix (KxN) of the joint distance between each point and each centroid.
        distmatrix = np.sum(mu**2, axis = 1)[..., None] + np.sum(data**2, axis = 1)[None, ...] - 2 * np.dot(mu, data.T)

        # update the labels for the clusters 
        cluster = np.argmin(distances, axis = 0) 

        # update the centroids
        for k in range(K):
            mu[k] = np.mean(data[cluster == k], axis = 0)

        # update the difference between the old centers and the new ones.
        diff = np.linalg.norm(mu - old_mu)
```

## Using K-Mean on real data

K-Mean has many refinements: the algorithm above does not guarantee for instance that at each step an element of a cluster is non-empty. Also, the algorithm only converges to a local minimum and is therefore highly dependent on the initialization, therefore some procedure with some randomization and running several rounds to get closer to a possible global minimum.

The library `sklearn`, install the package `scikit-learn` with `conda` or `pip`, has a functionality for clustering. We consider the dataset [California Housing](<https://www.samuel-drapeau.info/ASP_Lecture/data/housing.csv>) which represents the housing data for California. It contains housing location (`longitude`, `latitude`) as well as `medianIncome` for each house.

```py
# some package to deal with the following
import numpy as np
import pandas as pd
import ploty.express as px
from sklearn.cluster import KMeans as km

# we import the data
df = pd.read_csv("./data/housing.csv")

# it has many fields
print(df.info())

# We plot the median income as a function of the location 
px.scatter(
    df,
    x="longitude",
    y="latitude",
    color="median_income",
    size="population",
)
```

There is a discrepancy in the housing income and the location but not that clear. We want to group the datapoints according to the features if we can see a clearer picture. Beforehand, we clean the data (we remove the field `ocean_proximity`, though you could give him a label) and we normalize the data (the values are not in the same range). `sklearn` has a functionality for it with `preprocessing.normalize` but we do it by hand. We then process Kmean.

```py
# drop the column ocean_rpoximity
df = df.drop(columns = "ocean_proximity")
# drop nan values
df = df.dropna()

# normalize the values
data = df.copy()
data = (data - data.mean())/data.std()

# perform Kmean into three regions
kmean = km(n_clusters=3)
kmean.fit(data)

# we add the labels in the original dataframe
df['labels'] = kmean.labels_
df['labels'] = "K" + df['labels'].astype(str)

# we scatter plot the labels in terms of group
px.scatter(
    df,
    x="longitude",
    y="latitude",
    color="labels",
    size="population",
)

# We can provide the statistical description per group
df.groupby("label").describe()
```
