# Computations Based on Data

So far we learned how to fenerate data containers, load, clean and organized data. This data container (`Series` or `DataFrame`) is the basis to further computations.

Throughout we illustrate the basic abilities using the [data set `csi_short`](<https://www.samuel-drapeau.info/ASP_Lecture/data/csi_short.csv>).

```py
# load the dataset, convert date column to datetime and set as index
df = pd.read_csv('./data/csi_short.csv')
df["Date"] = pd.to_datetime(df["Date"])
df = df.set_index("Date")

# show the data set
df.head()
```

This is a collection of time series of stock prices over a certain number of years. We denote by \\(\\mathbf{S} = (S^{0}, \\ldots, S^{d-1})\\) the \\(d\\) different stocks and \\(S^k(t)\\) the price of stock \\(k\\) at time \\(t\\). In other terms \\(S^k = (S^k(t))\\) represents the \\(k\\)-th column in the dataframe, while \\(\\mathbf{S}(t) = (S^0(t), \\ldots, S^{d-1}(t))\\) represents the \\(t\\)-th row.

## Broadcasting Functions on Columns

Basic operations such as additions/multiplications, etc apply pointwize and return a series/column

```py
# Adding/multiplying, dividing two columns
display(df['000001.SZ'] + df['000002.SZ'])
display(df['000001.SZ'] * df['000002.SZ'])
display(df['000001.SZ'] / df['000002.SZ'])
```

Numpy functions are designed to be broadcasted (that is apply element wize).

```py
# Compute the exponential
display(np.exp(df['000001.SZ']))
# Compute the log of the full dataframe
display(np.log(df))
```

Applying these kind of operations elementwize necessitate some care about the dimension of objects. For instance dividing the dataframe by the first column, means that each column should be divided by the first one. In that case `add`, `sub`, `mult`, `div`, `floor`, `pow` etc are the correct way to do

```py
# Divide the dataframe by the first row
display(df.div(df['000001.SZ'], axis = 0))
```

## Mean, Standard Deviation,

Classical operations can be processed on columns or rows using basic functionalities of pandas

```py
# Compute the mean and standard deviation of each column
display(df.mean())
display(df.std())
```

These functions apply column wize (in the direction of time `axis = 0`). You can decide to compute for each row the mean or standard deviation of all columns.

```py
# Compute the mean and standard deviation of each row
display(df.mean(axis = 1))
display(df.std(axis = 1))
```

## Shifting, Cumsum/prod, Rolling

The previous operations are standard and aligned, they do not allow to combine values in different rows and columns.

### Shifting

In our example, we want to compute the returns of the stocks

\\\[ \\begin{equation\*} R^k(t):=\\frac{S^k(t) - S^{k}(t-1)}{S^k(t)}, \\quad R^k(0) = 0 \\end{equation\*} \\\]

for which holds

\\\[ \\begin{equation\*} S^k(t) = S^k(t-1)(1+R^k(t)) = S^k(0) \\prod\_{s=1}^t(1+R^k(s)) \\end{equation\*} \\\]

As for the division, and substraction we can apply the previous operations, however we need to specify how to shift the dataframe with the `shift` operator.

```py
# shifting the dataframe by one row
display(df.shift(1))

# Computing the returns
display(
    (df - df.shift(1))/df.shift(1)
)
```

You will note an issue for the first row since `df.shif[1].iloc[0]` is not well defined and therefore set to `nan`. We need to fill the `nan` values with `0`.

```py
# set a new dataframe dfret 
dfret = (df - df.shift(1))/df.shift(1)

# Fill the nan values with 0
dfret = dfret.fillna(0)

dfret.head()
```

### Cumulative Operations

According to the definition, mathematically we should have

\\\[ \\begin{equation\*} \\frac{S^k(t)}{S^k(0)} = \\prod\_{s=0}^t (1+R^k(t)) \\end{equation\*} \\\]

where \\(R^k(0) = 0\\). Computing the cumulative product on the right hand side requires a sequential function that is present in pandas in the form of the function `cumprod` (`cumsum` as you imagine is also available).

```py
# compute the cumulative product
display((1+dfret).cumprod())

# compare with df/df.iloc[0]
display(df/df.iloc[0])
```

### Rolling Operations

Rolling operations are operations of the kind

\\\[ \\bar{S}^k(t) = \\frac{1}{N} \\sum\_{T- N\< s\<t } S^k(t) \\\]

which is here a rolling average of the last \\(N\\) values.

```py
# compute the moving average 7 days of the stock prices
df.rolling(7).mean()
```

Some more complex computations can be performed, for example the maximum drop down defined as

\\\[ \\begin{equation} MDD(t) = \\inf\_{t-N \<s \\leq t}\\frac{S^\\ast(t) - S(t)}{S^\\ast(t)} \\end{equation} \\\]

where

\\\[ \\begin{equation} S^\\ast(t) = \\sup\_{t-N \< s \\leq t} S(s) \\end{equation} \\\]

```py
# Shifting window
N = 200

# define the rolling running maximum
dfmax = df.rolling(N).maximum()

# define the maximum drop down
mdd = ((dfmax - df)/dfmax).rolling(N).minimum()
```

## Apply Function, Iterrows

Sometimes, you want to apply complex functions to the dataframe that can not be summarized by simple broadcasting functions and operations.

In this case, we pass recursively the rows of the dataframe to a function.

Two possibilities

- `apply`: take as input a function that will act on each row. Internally pandas will loop and return a dataframe with the result indexed by the former dataframe.
- `iterrows`: this will iterate through the dataframe row by row in a loop fashion. Does not return a dataframe.

The preferred solution when possible is `apply`.

```py
# Compute the ratio of the rolling mean 7 divided by 30
dfmaratio = df.rolling(7).mean() / df.rolling(30).mean()

# Return a dataframe columns for each stock equal to 0 if dfmratio <1 and 1 otherwize all normalized by the sum.
# Definition of the function acting on each row
def strategy(row):
    # return an array where 1 if row[i]>1 and 0 otherwize
    w = np.where(row>1, 1, 0)
    # normalized the array
    sum = w.sum()
    if sum != 0:
        w = w/sum
    # we return a pandas series with w as data and row.index as index (here row.index are the column names)
    return pd.Series(data = w, index = row.index)

# Now we apply the function to the dataframe
strategy = dfmaratio.apply(fun, axis = 1)

display(strategy)
```

Sometimes `iterrows` is preferable. It is an interator on the rows of the dataframe with access to the index.

```py
# creating a DataFrame 
df = pd.DataFrame({
    'Names': ['Alice', 'Bob', 'Charlie'],
    'Scores': [85, 70, 92]
})

# iterate over each row of the DataFrame
for index, row in df.iterrows():
    print(f"Index of the current row: {index}") # will print the index
    print(f"Content of the current row (series): {row}")

# this interation does not do anything except printing.
# If we want to act and store the result in the dataframe we use the function at
for index, row in df.iterrows():
    # assign grades based on scores
    if row['Scores'] >= 90:
        grade = 'A'
    elif row['Scores'] >= 80:
        grade = 'B'
    elif row['Scores'] >= 70:
        grade = 'C'
    else:
        grade = 'F'

    # set the grade in the 'Grade' column for the current row
    df.at[index, 'Grade'] = grade

# display DataFrame with names, scores, and the assigned grades
print(df)
```
