# Handeling Data with Pandas

The major input to any scientific computations are data (for calibration purposes, further computations, etc.). Several difficulties comes to mind in this direction:

- **One dimensional:** basically, long sequences of data such as time series that needs vertical efficient access
- **Multi dimensional:** data that are large in dimension (such as matrices, tensor) that need to be accessed horizontaly for efficient computations
- **Heterogeneity:** handeling data of different nature at the same time (numbers, vectors, strings, time, etc.)

Furthermore, before even organized those data along these dimensions, data have to be

- **collected:** how? where to store? which format? how to read?
- **cleaned:** missing data? mesurement errors?
- **converted:** strings of dates to datetime? flags to binary values?
- **pre-processed:** up/down sampling? Partial selection? etc.

We saw that numpy provides efficient single objects (modulo memory size) to handle the dimensionality and types (numerical, strings, etc.). However, it is quite convoluted to handle heterogeneity as a numpy array shall only contain fixed typed data.

Historically, databases, which we will address later, are the answer to these questions. However, based on numpy, the library `pandas` provides a very powerfull and handy answer to most of the points raised here above.

The [Pandas](<https://pandas.pydata.org/>) library is mature and deep with a lot of functionalities. As numpy it is imported as follows with the usual nickname `pd`

```py
import pandas as pd
import numpy as np
```

Pandas is based on two major components:

- **Series:** One dimensional labelled array or data with the following components:

  - `data`: Numpy array (one dimensional usually)
  - `index`: labels of any type for each row
  - `name`: denomination of the series
- **Dataframes:** Collection of series of different types with common index (tabular format)

## Pandas Series

A `pandas` series is a sequence of `data` (a numpy array) together with an explicit `index` as well as a `name`.

```py
import pandas as pd
import numpy as np

s = pd.Series(data = ["NY", "NY" , "London", np.nan, "SG"])

display(s)
```

In this case we just provide the `data` part of the series, the `index` is automatically integers and the `name` is None.

To specify the labels (or index) of the series as well as the name we proceed as follows

```py
pop = pd.Series(
    data = [25, 22 , 8, 5],
    index = ['SH', 'BJ', 'London', 'SG'],
    name = 'Population'
    )
display(pop)
```

## Pandas Dataframe

A dataframe is a tabular collection of series with a common index

```py
# Create a plain dataframe with 3 columns and 10 rows 
# filled with random numbers

# generate 10x3 random data
data = np.random.rand(10, 3)
print(data)

# create the dataframe
df = pd.DataFrame(
    data = data
)
display(df)
```

Since each column is a pandas series, the name of the column is the corresponding name of the series. As for the index, it is common for each column.

```py
# generate a 10*3 random set of data
data = np.random.rand(10, 3)
print("Data:")
print(data)

# provides a list of names
cols = ['Tencent', 'Alibaba', 'Baidu']
print("Columns")
print(cols)

# Create a datetime index of size 10
idx = pd.date_range(start = '2024-04-01', periods = 10)
print("Index")
print(idx)

# create the dataframe
df = pd.DataFrame(
    data = data,
    index = idx,
    columns = cols
)
display(df)
```

## Short Infos about the Dataframe

Several options allows to inspect rapidly the nature of the Dataframe/Series

- `head`/`tail`: shows the first/last rows of the dataframe
- `index`/`columns`: show the index/columns
- `info`: show generic infos from the dataframe
- `describe`: returns basic statistics about the dataframe
- `plot`: allows to visualize data from the dataframe

```py
# showing the first lines (by default 5)
display(df.head())
# showing the last 7 lines
display(df.tail(7))
# show the index
display(df.index)
# shows the columns
display(df.columns)
# show the info from the dataframe
display(df.info())
# discplay a summary statistics about the dataframe
display(df.describe())
```

A more easier way to explore a dataframe is to plot the data available.

> [!NOTE]
>
> By default `pandas` will use the ploting library `matplotlib` to show data, it is however not particulary *nice*. Here we make use of `plotly` as the library to plot data

```py
# import plotly and tell pandas to use it as backend
import plotly.graph_objs as go
pd.options.plotting.backend = "plotly"

# generate a large dataframe
idx = pd.date_range(start = '2014-04-08', end = '2024-04-18', freq = 'B')
N = len(idx)
cols = ['Tencent', 'Baidu', 'Alibaba']
# generate random data between -0.05 and 0.05
data = 0.05 - np.random.rand(N, 3) / 10
# take the cumulative product of 1+data along the time axis
data = (1+data).cumprod(axis = 0)

df = pd.DataFrame(
    data = data,
    index = dates,
    columns=['Tencent', 'Alibaba', 'Baidu']
)

# Plot each columns 
df.plot()

# plot a specific column
df['Tencent'].plot()

# plot histogram of each
df.plot(kind = 'histogram')
```

## Selecting Data

### Selecting Columns

A collection of series, selecting specific columns of a dataframe is done as follows

```py
# get the column Tencent (which is a series)
display(df['Tencent'])

# get a list of columns (hence a dataframe)
display(df[['Tencent', 'Baidu']])
```

### Selecting Rows

Two main methods for the selection in terms of rows

- `iloc`: positional, integer wize, location (as `numpy`)
- `loc`: in terms of labels

As for `iloc` is works basically as `numpy`

```py
# getting the 3rd row
display(df.iloc[3])

# getting the last row
display(df.iloc[-1])

# getting the 3rd to the 5th row
display(df.iloc[2:6])
```

As for `loc`, the selection is done in terms of label or slice

```py
# show a specific row for 2024-04-03
display(df.loc['2024-04-03'])

# show a range (note that the labels starts from 2024-04-01)
display(df.loc['2024-03-15': '2024-04-10'])

# show everything after '2024-04-07'
display(df.loc['2024-04-07':])

# the output of a range is a dataframe, we can select a subsection of columns
df.loc['2024-04-03':'2024-04-18'][['Tencent', 'Alibaba']]
```

## Read and Write Data

Generating random dataframe or defining per hand the data has limited use, since our goal is to handle large sets of data of heterogeneous type. Data are usually available in different format

- **file data:** (among others)

  - `csv`: text files comma (or tab) separated values files. Most basic, most common. Extension is usually `.csv` or `.tvs`.
  - `excel`: excel files. More advanced files with particular structure (several spreadsheets for instance). Extension is usually `.xls` or `.xlsx`
  - `pickle`: python data storage. Rarely used as it is not that efficient and dependent on the version of python used to save or load. Contains however all the information of the dataframe. Extension is `.pkl`
  - `hdf`: cross platform storage of data and structure for large datasets. Used quite often for bio data or physics. Extension is `.hdf` or `hd5`.
  - ...
- **databases:** Either online or offline. We will see that later.

To read specific data files stored in folder `./data/` where `./` is where your python script is located and running, loading data is done as follows:

```py
# read csv file
df = pd.read_csv('./data/my_dataset.csv')

# read tab separated values file 
df = pd.read_csv('./data/my_dataset.tvs', sep = '\t')

# read (the first sheet of) an excel file
df = pd.read_excel('./data/my_dataset.xls')

# read the third sheet of an excel file
df = pd.read_excel('./data/my_dataset.xls', sheet_name = 2)

# read the sheet of an excel file with sheet name 'sheet05'
df = pd.read_excel('./data/my_dataset.xls', sheet_name = 'sheet05')
```

Once done with cleaning and handeling of data you can save the resulting dataframe into a file (preferably `csv`).

```py
# save the new dataframe into a new file `my_data_20240428.csv` in the subfolder ./data/
df.to_csv('./data/my_data_20240428.csv')
```

> [!WARNING]
>
> **DUMP EXCEL**
>
> Excel has been used for many years as the prefered hybrid solution from your *uncle* to handle tabular data with point and click. However, firstly, the format is not open source, complex, buggy, not able to handle large datasets, slow, and usually not platform compatible. Secondly, you are younger and more knowladgable about tech than your uncle: It is a bad idea in 2024 to handle data in this format, so forget about excel alltogether as a format and platform.

## Organizing and Cleaning Data

When you read a dataset into a dataframe, pandas tries to guess as well as it can the structure and type (detecting if there is a header for the column names, or the type of each column). However, most of the time, you have to proceed first first with the following operations

- Convert each column to the correct format
- Change the column names
- Set an index (add a new one or set one existing column as an index)

For this section we will use the dataset `csi_short.csv` as well as `movies.xls` and suppose that it is stored into the folder `./data/csi_short.csv` and `./data/movies.xls`.

You can download the datasets from here if you don't have them already.

- [movies](<https://www.samuel-drapeau.info/ASP_Lecture/data/movies.xls>)
- [csi\_short](<https://www.samuel-drapeau.info/ASP_Lecture/data/csi_short.csv>)

We start with `csi_short`

```py
# load the dataset
dfcsi = pd.read_csv('./data/csi_short.csv')
# Check content
display(dfcsi.head())

# Check datatype of the columns
display(dfcsi.dtypes)
```

The data set consists of 5 daily stock prices.

- We convert the column of dates to a datetime format
- We rename the column `Date` to `date`
- We set the newly renamed column `date` as an index
- We rename the stocks columns to `SXX` where `XX` stands for `01`, `02`, ..., `15`, ...

```py
# conversion to a datetime format of the column date
dfcsi['Date'] = pd.to_datetime(dfcsi['Date'])   

# Rename the column `Date` to `date` using dictionarry assignment
dfcsi = dfcsi.rename(columns = {'Date': 'date'})

# Set the colum date as index
dfcsi = dfcsi.set_index('date')

# rename the stock columns from their names to SXX (we have N stocks where N is the number of columns)
COLSNAMES = [f"S{i:02}" for i in range(1,len(dfcsi.columns)+1)]
print(COLSNAMES)
# Assignment from the column names as array
dfcsi.columns = COLSNAMES

display(dfcsi)
```

Let us handle `movies.xls`

```py
# load the excel data
dfmovies = pd.read_excel('./data/movies.xls')
# show the basic infos
display(dfmovies.info())
```

while looking at the infos you will see that pandas overdone it in terms of conversion of columns

- `year` in the original file is a string which it converted into an int. We want a date
- `duration` is in minutes which is converted into an int. We want a timedelta.
- `Aspect ratio` is given as 16/3, 16/9... in the original file which has been converted to a float. We want a string.
- `Facebook Likes - Actor 3` as well as `Reviews by Crtiics` unlike the other columns is not converted to an int. We want all Facebook and revies by users likes to be converted to int.
- `Reviews by Crtiics` is mispelled and shoud be renamed to `Reviews by Critics`

> [!WARNING]
>
> **`NaN` values and `int`**
>
> If you rapidly check, you will see that you can not plainly convert some float columns you know are integers such as `Facebook Likes - Actor 3` since there are some nan values.
>
> ```py
> dfmovies["Facebook Likes - Actor 3"].astype(int)  # This will throw an error
> ```
>
> In this case, the column shall be casted to the large int datatype of pandas `pd.Int64Dtype()`
>
> ```py
> dfmovies["Facebook Likes - Actor 3"].astype('Int64')  # This will work
> ```

You can naturally handle these columns one by one, however, you can specify pandas while loading the csv file the dtype you want and then convert the columns that are necessary.

```py
# Set the dtypes as dictionarry before loading the csv
DTYPES = {
    "Title": str,
    "Year": str,  # We will convert the year into datetime object so as string it is easier
    "Genres": str,
    "Language": str,
    "Country": str,
    "Content Rating": str,
    "Duration": pd.Int64Dtype(),  # the duration is in minutes, we will convert it in timedelta
    "Aspect Ratio": str,  # The aspect ratio is of the form 16/9
    "Budget": pd.Int64Dtype(),
    "Gross Earnings": pd.Int64Dtype(),
    "Director": str,
    "Actor 1": str,
    "Actor 2": str,
    "Actor 3": str,
    'Facebook Likes - Director': pd.Int64Dtype(),
    'Facebook Likes - Actor 1': pd.Int64Dtype(),
    'Facebook Likes - Actor 2': pd.Int64Dtype(),
    'Facebook Likes - Actor 3': pd.Int64Dtype(),
    'Facebook Likes - cast Total': pd.Int64Dtype(),
    'Facebook likes - Movie': pd.Int64Dtype(),
    'Facenumber in posters': pd.Int64Dtype(),
    'User Votes': pd.Int64Dtype(),
    'Reviews by Users': pd.Int64Dtype(),
    'Reviews by Crtiics': pd.Int64Dtype(),
    'IMDB Score': float,
}

# reload the data by specifying the dictionarry

dfmovies = pd.read_excel("./data/movies.xls", dtype=DTYPES)

# rename the column Reviews by Crtiics to Reviews by Critics
dfmovies = dfmovies.rename(columns={"Reviews by Crtiics": "Reviews by Critics"})

# Convert the column year to datetime (string %Y)
dfmovies["Year"] = pd.to_datetime(dfmovies["Year"], format="%Y")

# Convert the column duration from number of minutes to a timedelta
dfmovies["Duration"] = pd.to_timedelta(dfmovies["Duration"], unit="m")

# show the info
dfmovies.info()
```
