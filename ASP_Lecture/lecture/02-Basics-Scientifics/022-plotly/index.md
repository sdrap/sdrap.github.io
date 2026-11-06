# Producing Some Nice Graphs (we truly like it)

It is underestimated how graphs representation can help to tackle some complex problems. If the graph is ugly, you just don't want to see it, while if the graphs is appealing, you might want to explore more the problematic. Colors, and clear representations allows to express complex relations therefore a good graph library is fundamental to data analysis and scientific computing.

Historically, `matplotlib` is the library that is dedicated at producing every possible plots based on data. It is however quite complicated (with very difficult way of modifying making a graph nicer). Think of `matplotlib` as a powerful but low level programming language.

Based on this library, or independently developed, several plot libraries have emerged:

- `seaborn`: [plotting library](<https://seaborn.pydata.org/>) encapsulating `matplotlib` but with a nice touch.
- `bokeh`: [plotting library](<https://bokeh.org/>) more advanced but to my mid a bit difficult to master however with beautiful results (in particular for dynamic graphs)
- `plotly`: [Plotting library](<https://plotly.com/graphing-libraries/>) company providing solution for data representation and analysis. Their graph library is open source for python.

There are several others (let me know if you find a nice one), but for this lecture I will mainly use `plotly` as it is easily usable with python and for out purposes.

The basic of `plotly` (we will present rapidly plotly express which is a one stop way to represent data from a pandas dataframe) is to define a `graph` as an object and add components interactively one after the other (like a dictionary).

```py
# Import the libraryt
import numpy as np
import plotly.graph_objs as go

# we create a graph with x\mapsto sin(x)
x = np.linspace(-5, 5, 100)
y = np.sin(x)

# Declare the graph
fig = go.Figure()
# add a scatter plot (x, y)
fig.add_scatter(x = x, y = y)
# show the graph
fig.show()
```

Let us make use of the library with a simple example of a stock price modeled as a random walk.

We first define our Random walk which is mathematically given as

\\\[ \\begin{equation} S\_0=s,\\quad S\_t = X\_t+S\_{t-1}=S\_0+\\sum\_{s=1}^t X\_s \\end{equation} \\\]

Where

\\\[ \\begin{equation} X\_t= \\begin{cases} 1 &amp;\\text{If I get head for my coin toss}\\\\ -1 &amp;\\text{If I get tail} \\end{cases} \\end{equation} \\\]

The basic element you need is a sequence of independent coin tosses delivering \\(\\pm 1\\). We know how to generate uniformly random numbers between \\(0\\) and \\(1\\). Given a sequence \\(\\mathbf{x} = (x\_0, \\ldots, x\_{N-1})\\) of such random numbers, I can transform them into an independent sequence of \\(\\pm 1\\) where each probability is \\(1/2\\) as follows

```py
shock = np.random.rand(40)
print(shock)
print(2 * np.round(shock) - 1)
```

We now define the function that returns the stock price for a given amount of times.

```py
def random_walk(startprice, days):
    price = np.zeros(days)
    shock = np.round(np.random.rand(days))
    price[0] = startprice
    for i in range(1, days):
        price[i] = price[i-1] + 2*shock[i]-1
    return price

# This gives us the generation of sample random walks that we can print

print(random_walk(10, 20))
```

We can now plot a sample path

```py
days = 10
# Define the X and Y axis
X = np.arange(days)
Y = random_walk(10, days)

# Define a figure object
fig = go.Figure()
fig.add_scatter(x = X, y = Y)
fig.layout.title = "My random walk"
fig.show()
```

We can plot several random path since every time we run the function a new random sample is drawn (this function is per se not a function by the way).

```py
days = 1000

X= np.arange(days)
#define an object
fig = go.Figure()
# add scatters to the figure
for i in np.arange(5):
    Y = random_walk(10, days)
    # append the new scatter with a name for each trace
    fig.add_scatter(x = X, y = Y, name = 'RW number %i'%i, line = {'width':1})

# add a title
fig.layout.title = "Sample paths of the random walks"
# display the random walks
fig.show()
```

We can generate a huge amount of different graphs with plotly. We will see the different types, but as illustration we can plot the some histogram.

```py
# generate samples from a normal distribution
X = np.random.randn(100000)

# plot them
fig = go.Figure()
fig.add_histogram(x = X, histnorm = 'probability')
fig.show()
```
