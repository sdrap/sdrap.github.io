# Data Manipulations

Those manipulations are usually akin to database functionalities. For simplicity we separate into two parts

- `concat`, `merge`, `pivot`: combine data from different dataframes or modify the structure of the organization of the current dataframe. Usually does not involve any computations.
- `groupby`: Aggregation of data (partitioning) to perform further computations.

## Combining/Reorganizing data

We handle here some most used functionalities. For an overall presentation, we refer to the pandas tutorial [Merge, join, concatenate and compare](<https://pandas.pydata.org/docs/user_guide/merging.html>).

### Concatenation

Given a list of dataframe `[df1, ..., dfN]`, concatenation intends to return a single dataframe with `df1`,..., `dfN` stacked either vertically (`axis = 0`) or horizontally (`axis = 1`). Clearly, in order to get a meaningful concatenation, the columns or index among the dataframes to be concatenated should share common elements.

```py
import pandas as pd

data1 = [
    [1, 'x'],
    [2, 'y'],
    [3, 'z']
]
data2 = [
    [2, 'a'],
    [3, 'b'],
    [4, 'z']
]

# two dataframes with common columns
df1 = pd.DataFrame(
    data = data1,
    columns = ['A', 'B'],
    index = [0, 1, 2]
)
df2 = pd.DataFrame(
    data = data2,
    columns = ['A', 'B'],
    index = [3, 4, 5]
)

# concatenate vertically (common columns, distinct index)
df = pd.concat([df1, df2], axis = 0)
display(df1)
display(df2)
print("vertical concatenation")
display(df)     # (1)

# two dataframes with common columns
df1 = pd.DataFrame(
    data = data1,
    columns = ['A', 'B'],
    index = [0, 1, 2]
)

df2 = pd.DataFrame(
    data = data2,
    columns = ['C', 'D'],
    index = [0, 1, 2]
)

# concatenate horizontally (common index, distinct columns)
df = pd.concat([df1, df2], axis = 1)
display(df1)
display(df2)
print("horizontal concatenation")
display(df)     # (2)
```

1. df1

   | index | A | B |
   | ---: | ---: | ---: |
   | 0 | 1 | x |
   | 1 | 2 | y |
   | 2 | 3 | z |

   df2

   | index | A | B |
   | ---: | ---: | ---: |
   | 3 | 2 | a |
   | 4 | 3 | b |
   | 5 | 4 | z |

   result into

   | index | A | B |
   | ---: | ---: | ---: |
   | 0 | 1 | x |
   | 1 | 2 | y |
   | 2 | 3 | z |
   | 3 | 2 | a |
   | 4 | 3 | b |
   | 5 | 4 | z |
2. df1

   | index | A | B |
   | ---: | ---: | ---: |
   | 0 | 1 | x |
   | 1 | 2 | y |
   | 2 | 3 | z |

   df2

   | index | C | D |
   | ---: | ---: | ---: |
   | 0 | 2 | a |
   | 1 | 3 | b |
   | 2 | 4 | z |

   result into

   | index | A | B | C | D |
   | ---: | ---: | ---: | ---: | ---: |
   | 0 | 1 | x | 2 | a |
   | 1 | 2 | y | 3 | b |
   | 2 | 3 | z | 4 | z |

> [!WARNING]
>
> **When to concat and when better not?**
>
> Even if `concat` handles mismatched in index and columns, I strongly advise to limit the use `concat` in the following situations
>
> - Vertical concatenation (`axis=0`):
>
>   - the index of each dataframe are disjoint
>   - the columns of each dataframe are the same
> - horizontal concatenation (`axis=1`):
>
>   - the index of each dataframe are the same
>   - the columns of each dataframe are disjoint
>
> For other situations, the `merge` functionality is better though it handles only two dataframes at the same time.

### Merging

Given two dataframes `left_df` and `right_df`, the `merge` operation will provide a `SQL` type of merging between these two.

Though it can be done on indexed dataframes, it is easier to get on non indexed ones (use the `reset_index()` to get the dataframes to be merged correctly).

The basic operation is `pd.merge(left_df, right_df, on = ..., how = ...)`

Where

- `on`: is the common column name (or a list thereof) in the two dataframes.
- `how`: is the method how the two dataframes are combined according to `on='col'` where `'col'` is the common column name in each dataframe.

  - `left`: use the left dataframe `col`. That is, for each row in the left dataframe, it concatenate with the row from the right dataframe if the `col` value is identical, otherwize it fill the content with `nan`.
  - `right`: use the right dataframe `col` (same as swapping left and right) in the previous point.
  - `inner`: Use the intersection of values in left and right `col`.
  - `outer`: use the union of the values in left and right `col`

```py
data1 = [
    [1, 'x'],
    [2, 'y'],
    [3, 'z']
]
data2 = [
    [2, 23.5],
    [3, 11.2],
    [4, 6.0]
]

# two dataframe without specified index
# they share the sam column name `ints` #(1)
left_df = pd.DataFrame(
    data = data1,
    columns = ['ints', 'letters']
)
right_df = pd.DataFrame(
    data = data2,
    columns = ['ints', 'floats']
)

# left/right/inner/outer merging
l_join = pd.merge(left_df, right_df, on='ints', how = 'left')
r_join = pd.merge(left_df, right_df, on='ints', how = 'right')
i_join = pd.merge(left_df, right_df, on='ints', how = 'inner')
o_join = pd.merge(left_df, right_df, on='ints', how = 'outer')


display(l_join)  # (2)
display(r_join)  # (3)
display(i_join)  # (4)
display(o_join)  # (5)
```

1. left\_df

   | ints | letters |
   | ---: | ---: |
   | 1 | x |
   | 2 | y |
   | 3 | z |

   right\_df

   | ints | floats |
   | ---: | ---: |
   | 2 | 23.5 |
   | 3 | 11.2 |
   | 4 | 6.0 |
2. left join results into

   | ints | letters | floats |
   | ---: | ---: | ---: |
   | 1 | x | `NaN` |
   | 2 | y | 23.5 |
   | 3 | z | 11.2 |
3. right join results into

   | ints | letters | floats |
   | ---: | ---: | ---: |
   | 2 | y | 23.5 |
   | 3 | z | 11.2 |
   | 4 | `NaN` | 6.0 |
4. inner join results into

   | ints | letters | floats |
   | ---: | ---: | ---: |
   | 2 | y | 23.5 |
   | 3 | z | 11.2 |
5. outer join results into

   | ints | letters | floats |
   | ---: | ---: | ---: |
   | 1 | x | `NaN` |
   | 2 | y | 23.5 |
   | 3 | z | 11.2 |
   | 4 | `NaN` | 6.0 |

> [!NOTE]
>
> **There many more options**
>
> - the `on` can be a list of columns can be passed, on which each tuple of this list is the key for the merging operation.
> - If the names of the columns in the two dataframes are different you can use `left_on = 'some_col` with `right_on='other_col'`
> - If you want to merge on index rather than some col, you can use `left_index = True` and/or `right_index = True`
> - Columns outside of the merge condition that share the same name will be appended with a suffix `_x` and `_y` in the resulting dataframe.

### Pivot

The function `pivot` allows to transform a dataframe along a new column and index. As illustration, let us consider the simple dataframe without specific index.

| Item | CType | USD | EUR |
| --- | --- | --- | --- |
| Item0 | Gold | 1.2$ | 1€ |
| Item0 | Bronze | 2.4$ | 2€ |
| Item1 | Gold | 3.6$ | 3€ |
| Item1 | Silver | 4.8$ | 4€ |

```py
# declare the data
data = np.array(
    [
        ["Item0", "Item0", "Item1", "Item1"],
        ["Gold", "Bronze", "Gold", "Silver"],
        ["1.2$", "2.4$", "3.6$", "4.8$"],
        ["1€", "2€", "3€", "4€"],
    ]
)
# create the dataframe
df = pd.DataFrame(data=data)
# the dataframe is not in the right direction, we transpose
df = df.T
# set the column names
df.columns = ["Item", "CType", "USD", "EU"]
display(df)
```

We want to pivot the table to get `Item` as index and `CType` as columns with values in $ as data.

```py
p = df.pivot(index="Item", columns="CType", values="USD")

display(p) # (1)
```

1. Results into

   | Items | Gold | Bronze | Silver |
   | :--- | ---: | ---: | ---: |
   | Item0 | 1.2$ | 2.4$ | `NaN` |
   | Item1 | 3.6$ | `NaN` | 4.8$ |

   Note that pivoting that way remove the informations about EU

We want to pivot the table to get `Item` as index and `CType` as columns but with all the values ($ and E). Clearly this is not possible in a plain tabular format so that it will create a multilevel index for the columns

```py
p = df.pivot(index="Item", columns="CType")

display(p) # (1)
```

1. Results into

   <table> <tbody> <tr> <td align="center" rowspan="2" valign="bottom">Items</td> <td align="center" colspan="2">Gold</td> <td align="center" colspan="2">Bronze</td> <td align="center" colspan="2">Silver</td> </tr> <tr> <td align="center">USD</td> <td align="center">EU</td> <td align="center">USD</td> <td align="center">EU</td> <td align="center">USD</td> <td align="center">EU</td> </tr> <tr> <td align="center">Item0</td> <td align="center">1.2$</td> <td align="center">1€</td> <td align="center">2.4$</td> <td align="center">2€</td> <td align="center">NaN</td> <td align="center">NaN</td> </tr> <tr> <td align="center">Item1</td> <td align="center">3.6$</td> <td align="center">3€</td> <td align="center">NaN</td> <td align="center">NaN</td> <td align="center">4.8$</td> <td align="center">4€</td> </tr> </tbody> </table>

## Groupby

The `groupby` functionality is another `SQL` type functionality to perform computation based on a partitioning of the data.

The functionality can be entailed into three steps

- **Partition**: split the dataframe into a partition of sub dataframes
- **Apply**: Apply a function on each of these partitions
- **Combine**: return the results of the function on each element of this partition

```py
import pandas as pd

data = [
    ["Math", "Master", 87],
    ["Math", "Master", 76],
    ["CS", "PhD", 91],
    ["Physics", "Master", 84],
    ["Math", "PhD", 96],
    ["CS", "Master", 72],
    ["CS", "Master", 81],
    ["Math", "PhD", 98],
    ["Physics", "PhD", 87],
    ["Physics", "PhD", 85],
    ["Physics", "Master", 45],
]
cols = ["Dept", "Level", "Grade"]
df = pd.DataFrame(data = data, columns = cols)
display(df) # (1)

# Computation of average grade
# per dept
avg_dept = df.groupby('Dept')['Grade'].mean()
# per level
avg_level = df.groupby('Level')['Grade'].mean()
# per dept and level (multiindex dept/level)
avg_dept_level = df.groupby(['Dept', 'Level'])['Grade'].mean()

display(avg_dept)       # (2)
display(avg_level)      # (3)
display(avg_dept_level) # (4)
```

1. Return

   |  | Dept | Level | Grade |
   | ---: | :--- | :--- | ---: |
   | 0 | Math | Master | 87 |
   | 1 | Math | Master | 76 |
   | 2 | CS | PhD | 91 |
   | 3 | Physics | Master | 84 |
   | 4 | Math | PhD | 96 |
   | 5 | CS | Master | 72 |
   | 6 | CS | Master | 81 |
   | 7 | Math | PhD | 98 |
   | 8 | Physics | PhD | 87 |
   | 9 | Physics | PhD | 85 |
   | 10 | Physics | Master | 45 |
2. Average per Dept

   | Dept | Grade |
   | :--- | ---: |
   | CS | 81.3333 |
   | Math | 89.25 |
   | Physics | 75.25 |
3. Average per Level

   | Level | Grade |
   | :--- | ---: |
   | Master | 74.1667 |
   | PhD | 91.4 |
4. Average per Dept and Level

   <table> <thead> <tr> <th align="left"></th> <th align="left"></th> <th align="right">Grade</th> </tr> </thead> <tbody> <tr> <td align="left" rowspan="2" valign="top">CS</td> <td align="left">Master</td> <td align="right">76.5</td> </tr> <tr> <td align="left">PhD</td> <td align="right">91</td> </tr> <tr> <td align="left" rowspan="2" valign="top">Math</td> <td align="left">Master</td> <td align="right">81.5</td> </tr> <tr> <td align="left">PhD</td> <td align="right">97</td> </tr> <tr> <td align="left" rowspan="2" valign="top">Physics</td> <td align="left">Master</td> <td align="right">64.5</td> </tr> <tr> <td align="left">PhD</td> <td align="right">86</td> </tr> </tbody> </table>

In this simple example, we performed the full chain partition (`groupby`), apply (`mean` to column 'Grade').

The `groupby` performs the partition, it returns an iterator running through each sub dataframe from that partition. (1)

1. More precisely, the result of `groupby` is a dictionary with `key` being the unique element along which it is partitioned and `value` being the corresponding sub dataframe for that key.

```py
dept_grp = df.groupby('Dept')

for name, subdf in dept_grp:
    print(f"Name:\t{name}")
    print("with sub dataframe as content:")
    print(subdf)
```

In the main example we just performed one standard function one one of the columns of the groupby. It is possible to apply

- user defined functions (do not invent the wheel, if the function is already defined in pandas use it)
- several functions
- a single function that treats everything.

```py
# take a numpy array and return the max - min
def maxmin(x):
    return x.max() - x.min()

result1 = df.groupby('Dept')['Grade'].agg(maxmin).rename(columns = {'Grade': 'Maxmin'})
display(result1)        # (1)

# apply different functions to different columns and return the result
result2 = df.groupby('Dept').agg(
    Counting = ('Level', 'count'),
    Average = ('Grade', 'mean'),
    Std = ('Grade', 'std'),
    Maxmin = ('Grade', maxmin)
)
print(result2)          # (2)

# define a single function that will apply to each subdataframes

def treatment(dftmp):
    # the Function will get as input each subdataframes
    count = dftmp.size
    mean = dftmp['Grade'].mean()
    std = dftmp['Grade'].std()
    mixing_twocols = dftmp['Level'].iloc[0] + ' with grade ' + dftmp['Grade'].astype(str).iloc[-1]
    # we return a pandas series with the results
    return pd.Series(
        {
            'Count': count,
            'Mean': mean,
            'Std': std,
            'Some stupid things': mixing_twocols
        }
    )
result3 = df.groupby('Dept').apply(treatment)
print(result3)          # (3)
```

1. Returns

   | Dept | MaxMin |
   | :--- | ---: |
   | CS | 19 |
   | Math | 22 |
   | Physics | 42 |
2. Returns

   | Dept | Counting | Average | Std | Maxmin |
   | :--- | ---: | ---: | ---: | ---: |
   | CS | 3 | 81.3333 | 9.50438 | 19 |
   | Math | 4 | 89.25 | 10.0457 | 22 |
   | Physics | 4 | 75.25 | 20.2052 | 42 |
3. Returns

   | Dept | Count | Mean | Std | Some stupid things |
   | :--- | ---: | ---: | ---: | :--- |
   | CS | 6 | 81.3333 | 9.50438 | PhD with grade 81 |
   | Math | 8 | 89.25 | 10.0457 | Master with grade 98 |
   | Physics | 8 | 75.25 | 20.2052 | Master with grade 45 |
