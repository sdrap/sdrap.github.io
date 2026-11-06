# Dealing with Date and Time.

Date and time concept are central in data analysis but also beyond as it is the underlying for the task scheduler from any computer. However, they are particularly difficult objects: On the one hand, as integers or float they are ordered. On the other hand, they have many particularities:

- The basis is not uniform: 60 for minutes and seconds, 24 for hours, 365/366 for years, 28/29/30/31 for months, etc.)
- What is the origin?
- What is the granularity: milliseconds, micro, nano?
- Different formats: `YYYY-MM-DD` vs `MM/DD/YYYY`, `13H35 23'` vs `13:30:23` usually expressed as strings.
- different time zones.

> [!NOTE]
>
> **Time**
>
> Time is usually measured in the number of the smallest quantity (second/milliseconds/microseconds/nanoseconds) starting from an origin date. This is called the epoch time. On Unix machines (now more or less the standard everywhere), the origin is set to `1970-01-01 00:00` and from there any date is computed as a deviation in number of the smallest unit from this date. As for the smallest unit from this date, it depends very much on the operating system as well as the machine itself. Second is pretty standard and accepted on every machine and OS, but resolution up to the microsecond is also nowadays normal. For particular applications (finance, physics), nanosecond resoltion is required (in one nanosecond the light moves by about 30 cm...).

Two concepts emerged:

- `timedelta`: a difference between two times measured in number of the smallest time interval
- `timestamp`: a time point on the axis measured as a deviation in terms of time delta from an origin. In the UNIX framework it is `1970-01-01 00:00`

## Datetime library

The standard library to work with date time objects in python is [`datetime`](<https://docs.python.org/3/library/datetime.html#module-datetime>). It provides a representation for

- `datetime` objects
- `timedelta` amount of time between two dates.

> [!WARNING]
>
> **Granulaity**
>
> The `datetime` library as for now provides a resolution of microseconds. To check on your computer/os/python version you can use the function `timedelta.resolution` as well as `timedelta.max` and `timedelta.min` for the resolution, maximum and minimum.

### Datetime

- declare datetime directly
- datetime from string
- string from datetime

```py
# import from datetime library the relevant classes (the names are self explanatory)
from datetime import date, time, datetime, timedelta

# Current date according to your computer
mydate_now = date.today()
print(f"Today is {mydate_now} with type {type(mydate_now)}")

# Current datetime according to your computer
mydatetime_now = datetime.now()
print(f"Date and time now {mydatetime_now} with type {type(mydatetime_now)}")

# specify a date provinding year, month, day
mydate = date(2023, 2, 28)
print(f"Specified date: {mydate} with type {type(mydate)}")

# specify a time: hour, minute, second
mytime = time(14, 30, 59)

print(f"Specified time: {mytime} with type {type(mytime)}")

# Specify a datetime: year, month, day, hour, minute, second
mydatetime = datetime(2024, 2, 29, 14, 30, 59)
print(f"Specified datetime: {mydatetime} with type {type(mydatetime)}")
```

Each date, time and datetime object has methods to retrieve the different elements of the object (the month, year, day, hour, minute, etc.)

```py
# get from a datetime
# the year
# the month
# the day
# the hour
# the minute

mydatetime = datetime(2024, 2, 29, 14, 30, 59)
print(
    f"""
For the datetime:\t{mydatetime}
Year:\t {mydatetime.year}\t with type:\t {type(mydatetime.year)}
Month:\t {mydatetime.month}\t with type:\t {type(mydatetime.month)}
Day:\t {mydatetime.day}\t with type:\t {type(mydatetime.day)}
Hour:\t {mydatetime.hour}\t with type:\t {type(mydatetime.hour)}
Minute:\t {mydatetime.minute}\t with type:\t {type(mydatetime.minute)}
"""
)
```

The datetime class is calendar aware in terms of basis:

```py
# 2024 is bisectile year
datetime_ok = datetime(2024, 2, 29, 15, 15)
print(datetime_ok)
# 2023 is not
try:
    date_not_ok = datetime(2023, 2, 29, 15, 15)
except Exception as ex:
    print("This does not work because:")
    print(ex)

try:
    time_not_ok = datetime(2024, 2, 29, 15, 60)
except Exception as ex:
    print("This does not work because:")
    print(ex)
```

Usually, datetime are expressed in text files as strings, or datetime shall be returned as human readable strings. The `datetime` library provides methods

- `strptime`: convert a string to datetime object
- `strftime`: convert a datetime object to a string

In order to convert, we must indicate how a string has to be understood in terms its elements. There is a [standard](<https://docs.python.org/3/library/datetime.html#strftime-and-strptime-behavior>) for it however here is a table for the most used ones

| Directive | Meaning | Example |
| --- | --- | --- |
| `%a` | Weekday as locale’s abbreviated name. | Mon |
| `%A` | Weekday as locale’s full name. | Monday |
| `%w` | Weekday as a decimal number, where 0 is Sunday. | 0 (Sunday) |
| `%d` | Day of the month as a zero-padded decimal. | 30 |
| `%b` | Month as locale’s abbreviated name. | Sep |
| `%B` | Month as locale’s full name. | September |
| `%m` | Month as a zero-padded decimal number. | 09 |
| `%y` | Year without century as a zero-padded decimal. | 23 |
| `%Y` | Year with century as a decimal number. | 2023 |
| `%H` | Hour (24-hour clock) as a zero-padded decimal. | 14 |
| `%I` | Hour (12-hour clock) as a zero-padded decimal. | 02 |
| `%p` | Locale’s equivalent of either AM or PM. | AM |
| `%M` | Minute as a zero-padded decimal number. | 05 |
| `%S` | Second as a zero-padded decimal number. | 05 |
| `%f` | Microsecond as a decimal number, zero-padded. | 000000 |
| `%z` | UTC offset in the form +HHMM or -HHMM. | \-0400 |
| `%Z` | Time zone name. | EST |
| `%j` | Day of the year as a zero-padded decimal number. | 365 |
| `%U` | Week number of the year (Sunday as the first day). | 52 |
| `%W` | Week number of the year (Monday as the first day). | 52 |
| `%c` | Locale’s appropriate date and time representation. | Tue Sep 30 14:05:02 2023 |
| `%x` | Locale’s appropriate date representation. | 09/30/23 |
| `%X` | Locale’s appropriate time representation. | 14:05:02 |

```py
# from string to datetime The % indicates the key holders
string_date01 = '2021-01-05 17H45'
string_date02 = 'Thu May 9 15:49 2024'

datetime01 = datetime(2021, 1, 5, 17, 45)
datetime02 = datetime(2024, 5, 9, 15, 49)

# convert string to datetime
my_datetime01 = datetime.strptime(string_date01, "%Y-%m-%d %HH%M")
my_datetime02 = datetime.strptime(string_date02, "%a %b %d %H:%M %Y")

print(f"""
The string time:\t {string_date01}
Interpreted as:\t\t {my_datetime01}\t correctly:\t {my_datetime01 == datetime01}
---------
The string time:\t {string_date02}
Interpreted as:\t\t {my_datetime02}\t correctly:\t {my_datetime02 == datetime02}
""")

my_stringdate01 = datetime01.strftime("%Y-%m-%d %HH%M")
my_stringdate02 = datetime02.strftime("%a %b %d %H:%M %Y")

print(f"""
The datetime:\t {datetime01}
Interpreted as:\t {my_stringdate01}\t correctly:\t {my_stringdate01 == string_date01}
---------
The datetime:\t {datetime02}
Interpreted as:\t {my_stringdate02}\t correctly?:\t {my_stringdate02 == string_date02}
""")
# not that my_stringdate02 is not equal to string_date02, why?
```

### Timedelta

A `timedelta` represents the duration between two dates, that is \\(dt = t\_2 - t\_1\\). As expected \\(t\_1+t\_2\\) is not well defined, however \\(t\_1 + dt = t\_2\\).

```py
t1 = datetime.strptime("2024-02-28 14:30:59", "%Y-%m-%d %H:%M:%S")
t2 = datetime.strptime("2024-02-29 15:35:49", "%Y-%m-%d %H:%M:%S")

dt1 = t2 - t1
dt2 = t1 - t2


print(f"The time difference between {t1} and {t2} is {dt1}")
print(f"The time difference between {t2} and {t1} is {dt2}")
print(f"The sum of deltas is {dt1 + dt2}")


# Time stamp can be defined as the difference between two times.
# however it can be defined directly

t1 = datetime(2024, 2, 28, 14, 30, 59)
dt = timedelta(days=2)

print(
    f"""
Original date: {t1}
Time delta: {dt}
Resulting date: {t1 + dt}
Two time delta: {2 * dt}
Resulting date: {t1 + 2*dt}
"""
)

# Simple operations with time delta (day/hour/minutes/seconds/milliseconds/microseconds)
dt1 = timedelta(hours = 1)
dt2 = timedelta(seconds = 3601)
dt3 = timedelta(hours = 1, seconds = 3601)

print(f"""
{dt1} plus {dt2} is {dt1 + dt2} which clearly coincides with {dt3}
""")
```

## Pandas Timestamps

Pandas as well as Numpy also handle datetimes as a type with slight differences. It is usually better to work directly with pandas datetimes since it handles more complex operations with datetimes (resampling, arithmetics on arrays of datetime as well as empty values). There is a good [introduction](<https://pandas.pydata.org/docs/user_guide/timeseries.html>) about it on the pandas webpage.

By default Pandas datetime are nanosecond resolution.

The basic functionalities can be summarized as follows

| Concept | Class Name | Datatype | Creation |
| --- | --- | --- | --- |
| Datetime | `Timestamp` | `datetime64[ns]` | `to_datetime` or `date_range` |
| Timedelta | `Timedelta` | `timedelta64[ns]` | `to_timedelta` or `timedelta_range` |

```py
import pandas as pd

# Declaring a time can be done from a string (pandas will infer the format if not crazy)
mydatetime = pd.to_datetime('2021-12-01 12:30:25.0003')
print(f"""Pandas datetime {mydatetime} with type {type(mydatetime)}""")

# same for timedelta
mytimedelta = pd.to_timedelta('2 days 12 hours 30 minutes 25 seconds 3 nanoseconds')
print(f"""Pandas Timedelta {mytimedelta} with type {type(mytimedelta)}""")
```

The functionalities are identical to datetime previously.

### Datetime/Timedelta Index

The place where pandas shines is when it handles datetimes as arrays.

- Apply `to_datetime` to an array
- Create a range of datetimes `date_range` (see [offset aliases](<https://pandas.pydata.org/docs/user_guide/timeseries.html#timeseries-offset-aliases>))

```py
import pandas as pd
import numpy as np
from datetime import datetime

t_idx = pd.to_datetime(['2021-01-01', np.nan, datetime(2021, 1, 2)])
display(t_idx)

t_idx = pd.date_range(start = '2021-01-01', end = '2021-01-07', freq = 'D')
display(t_idx)

# business day frequency 
t_idx = pd.date_range(start = '2021-01-01', periods = 7 , freq = 'B')
display(t_idx)

# every half second 
t_idx = pd.date_range(start = '2021-01-01 09:30:00', periods = 7 , freq = '500 ms')
display(t_idx)
```

The same hold for time deltas

```py
import pandas as pd

dt_idx = pd.to_timedelta(['3 days 4 hours', np.nan, timedelta(days = 3, hours = 1, minutes = 2)])
display(dt_idx)

dt_idx = pd.timedelta_range(start = '1 day', periods = 4)
display(dt_idx)

dt_idx = pd.timedelta_range(start = '1 day', end = '2 days', freq = '6h')
display(dt_idx)
```

You can perfom operations between those index as for the scalars as well as perform axis operations (`shift`, `diff`).

```py
t_idx = pd.date_range(start = '2021-01-01 09:30:00', periods = 3 , freq = '1h')
dt_idx = pd.timedelta_range(start = '1 hour', periods = 3, freq = '2h')

print(f"""
Original dates:
{t_idx}
Original timedelta:
{dt_idx}
--------

Shifting dates by 5 days:
{t_idx.shift(10, freq = 'D')}

Shifting timedelta by 2 hours:
{dt_idx.shift(2, freq = 'h')}

Timedelta from dates:
{dt_idx.diff(1)}

Dates plus timedelta:
{t_idx + dt_idx}
""")
```

### Groupby, Rolling, Resampling

We already saw that `groupby` allows to partition a dataframe along the unique values of a given column (or an index) while `rolling` provides a rolling window on the dataframe. These can be combined with date time functionalities (for instance grouping hourly dates into days, or rolling by the hours).

`resample` is however particular. One can distinguish between

- *downsampling*, which means partitioning a higher frequency in terms of time dataframe into a lower frequency (like `groupby` above)
- *upsampling* which provides an index at a higher frequency. In this case you have to explain how to fill the data in for the additional times.

To illustrate these functionalities we create a dataframe with a datetime index `Time` and two columns `Temperature` and `Pressure`.

```py
N = 1000
# create a datetime index by 6 hours
t_idx = pd.date_range(start = '2021-01-01', periods = N, freq = '15min')

df = pd.DataFrame(
    data = {
        'Temperature': np.random.normal(loc = 20, scale = 4, size = N),
        'Pressure': np.random.normal(loc = 1000, scale = 50, size = N)
    },
    index = t_idx
)
df.index.name = 'Time'
display(df)
```

Temperature and pressure are measured hourly, we want to get the daily average.

```py
# using groupby
# here df.index are the timestamps
# date is the accessor to the date part of the timestamp
result = df.groupby(by = df.index.date).mean()
print("Result using groupby")
display(result)

# performing the same using resample
result = df.resample('D').mean()
print("Result using resample")
display(result)
```

As for the rolling functionality, we want to get the 6 hours rolling average of the temperature and pressure. In other terms, every 15 minutes we want the last 6 hours average of each.

```py
result = df.rolling('6h').mean()
print(result)
```

> [!WARNING]
>
> **Rolling minimum interval**
>
> If you apply rolling functionalities on a dataframe with an integer (lets say 7), then by default, it will only start when it has 7 elements in the window. In the case of time rolling with a frequency indicated, it will consider anything within this time window. In this example, it starts at the datetime for which it has one element, then proceed to the next hour where it has two, then to the third where it has 3 until it reaches 6 hours where it has 6 elements, and will go ahead with only 6.
