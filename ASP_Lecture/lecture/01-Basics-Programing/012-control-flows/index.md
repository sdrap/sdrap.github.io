# Control Flow Statements

So far we have datatype for variables and basic operations to deal with. However, in order to perform computations beyond simple arithmetic we need to deal with things such as

\\\[ \\begin{align} u\_0 &amp; = x\\\\ u\_{n+1} &amp;= \\begin{cases} \\alpha u\_n + \\beta &amp; \\text{ if } u\_n\>0\\\\ -\\alpha u\_n -\\beta &amp; \\text{otherwize} \\end{cases} \\end{align} \\\]

which are the backbones for functions and computation overall. Such a simple construction requires the computer to master two things

1. Conditional evaluation (the if section)
2. Induction (go from n to n+1)

From a programming language viewpoint these two fundamental flows are implemented in different form but are all present. The two basic ones are

- `if then else` Conditional evaluation
- `for loops` inductions

For the moment we will concentrate on these two as they are the prominent ones.

> [!NOTE]
>
> **Other control flows**
>
> Control flows are not bounded to these two ones. You also have in different programming languages as well as python some of those
>
> - `while` do something while a condition is true
> - `case` choice between alternatives (no in python in this form but in combination with match)
> - `match` match a condition to a branch of code
> - `go to` (fortran style, not in python) allows to jump in the code
> - `while` do something while a condition is True
>
> One can also mention `try` in combination with `except` to catch errors.
>
> Furthermore those control flows are paired with `break`, `continue`, `pass` etc. which we will see later in the lecture.

## If, then, else

This conditional flow allows to evaluate if something is true or false and acts upon it

```py
x = 6
if x > 5:
    print(f"{x} is indeed greater than 5, fantastic")

x = 3
if x > 5:
    print('fantastic')  # is not printed since now x<5
print("this line is executed since it is out of the scope of the if statement")
```

> [!WARNING]
>
> The evaluation is given by `if ....:` and then the code to implement if `True` is processed below but with indentation (at least 2 space, usually one tab which is 4 spaces). Normally your code editor register it. It is elegant however prone to errors since the beginning and the end of the condition is given by this indentation. Indeed, whether true or false everything after which is not indented will be processed.

We can add an alternative execution if the result of the evaluation is `False` using the keyword `else`. We can also compose the control flow with corresponding indentation.

```py
x = 6
if x != 6:
    print(f'cool {x} is indeed different of 6')
else:
    print(f'Uncool {x} is equal to 6')

# Combining conditions
x = -2
if x < 0:
    if x < -1:
        print("super cool")
    else:
        print('Also ok')
else x < 1:
    print('cool')
```

You can also combine several conditions using the `elif` statement that will evaluate an alternative statement before going forward

```py
x= 5
if x == 6:
    print(f"cool {x} is equal to 6")
elif x<6:
    print(f"that ok, {x} is still smaller than 6")
else:
    print(f"that's not cool {x} is greater than 6")
print("The program continues")
```

> [!WARNING]
>
> Be aware that this control flow will be executed sequentially. In other terms it evaluates one condition after the other. The first branch evaluated as `True` will be executed and the program then jumps out of the control flow to continue at the first lower level of indentation.

```py
# if x is smaller than 1 you want to print cool
# if x is smaller than 0 you want to print super cool
# otherwize this is uncool

# wrong implementation for x = 0.5 where you should print super cool
x = -1
if x < 1:
    print("Cool")
elif x<0:
    print("Super cool")
else:
    print("not ok it is greater or equal than 1 ")
print("End of wrong condition flow")
# in this conditional sequence the first evaluation is true and executed
# and then the statement is exited

# The right way to do it is to evaluate from larger to narrower condition

x = -1
if x < 0:
    print("Super cool")
elif x<1:
    print("Cool")
else:
    print("not ok it is greater or equal than 1 ")
print("End of correct condition flow")
```

## For loop

For loops allows to realize induction (at least bounded). The idea is to iterate through numbers and do something. In order to do so, we need to define the object over which we iterate (is called an iterator). In any programming languages you can iterate through a range of integers. In python such an iterator of integers is called a `range`. With such an iterator at hand we can loop through them one element after the other using `for n in range(5)`

```py
my_range = range(5) # a range of integers from 0 to 4
print(my_range)

# we can now loop through it
for n in range(5):
    print(f"We are at the stage {n} of the loop")
    print(f"We can conduct operations for instance squaring n resulting in {n**2}")

myrange = range(1,5) # a range of integers from 1 to 4
print(my_range)
```

In any programming languages, integer iterators are defined and the backbone of computations. However as python is a higher level programming language, iterators can also be of higher levels. In particular, lists or dictionaries are iterators.(1)

1. 👉 Be aware that dictionaries are assumed to be unordered. However they have an internal counter about the sequence at which key/values have been inserted and the iterator will take this order.

```py
list_of_lists = [[1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9]]

for x in list_of_lists:
    print(f"Sublist {x}")

# alternative
len(list_of_lists)
for i in range(len(list_of_lists)):
    print(f"Sublist {list_of_lists[i]}")
```

Remember that for lists and dictionary both are the same with the exception that the index in lists is a key in dictionary. When you enumerate in both of them you can access to the (index or key)/value using a tuple.

- Lists: `enumerate(x)` returns an interator `(n, x[n])` for `n` in `range(len(x))`
- Dictionary: `x.items()` returns an iterator `(key, val)` for each `key` in `x.keys()`

```py
my_list = ['first val', 3, 5.6]

for idx, val in enumerate(my_list):
    print(f"value {val} of the list at index {idx}")

my_dict = {'fruit': "apple", 'vegetable': 'cucumber'}

for key, val in my_dict.items():
    print(f"Value {val} of the dictionary for the key {key}")
```

## Example

The Fibonacci sequence, is a recursive sequence \\(u\_0,u\_1,\\ldots, u\_n,\\ldots\\) given by

\\\[ \\begin{equation} u\_{n+2}=u\_{n+1}+u\_n \\end{equation} \\\]

with start values \\(u\_0=a\\) and \\(u\_1=b\\).

We compute and print the ten first Fibonacci numbers

```py
a = 1
b = 2

for n in range(1,10):
    # temporary store the value of u_{n+1} into c
    c = b
    # assign u_n + u{n+1} into b
    b = a + b
    # assign the value u_{n+1} into b
    a = c
    # after these operations, given a = u_n and b = u_{n+1}
    # you shift a = u_{n+1} and b = u_n + u_{n+1} = u_{n+2}
    print(f"The {n}th Fibonacci number if {a}")

# more elegant implementation using the fact that you can allocate tuples
a = 1
b = 2
for n in range(1,10):
    a, b = b, a+b
    print(f"The {n}th Fibonacci number if {a}")
```

## Assignment by loops

Python has a very handy way to build up objects with `in line` loops. This is practical but can not be extended to complex constructions.

Suppose that we want to plot the function \\(x \\mapsto f(x) = x^2\\). In order to do so, you need the graph, that is a list a values of \\(x\\) in a given range as well as a list of corresponding values of \\(x^2\\).

```py
# construct a list of equidistant 11 values of x between 0 and 1 iterating over some range
x_axis = [n /10 for n in range(11)]
# get the square of them by iterating over x_axis
y_axis = [x**2 for x in x_axis]

print(f"""
The x axis values are:\t{x}
The y axis values are:\t{y} 
""")
```
