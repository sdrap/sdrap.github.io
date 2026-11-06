# Basic Operations, Data Types

Beforehand, let us just write our first program

```py
print("Hello world!")
```

Fairly easy, it is a constant function that prints a message.

Note that you can put comments in the code that is then ignored by python. These lines to be ignored are indicated by `#` character

```py
# We want to print Hello world
print("Hello World")
# We next print a date
print("Today is 2024-02-14")
```

As your code starts to get longer, it is well advised to comment the most important steps.

1. When you come back to this code several months later, you can rapidly understand what you did.
2. When others use your code (you just don't code for yourself) they can also rapidly follow what you are coding.

## Variables

In math, declaring variables is bottom line and done like

\\\[ \\text{Let }a =\\sqrt{\\pi} \\\]

In python this is the same way

```py
a = 1
print("The value of a is now:", a)
```

Variables are mutable, means that another assignation will override it

```py
a = 3
print("Value of a is", a)
a = 5
print("The value of a is now", a)
```

Variable can be assigned to other variables. Those assignations are copies and therefore independent objects

```py
a = 5
b = a
print("The value of a is", a, "and the value of b is", b)
# If I reassign a it will change a but not b -->
a = 6
print("The value of a is now", a, "and the value of b remains", b)
```

> [!WARNING]
>
> **Equal is not Equal**
>
> In math the symbol \\(=\\) has a very special meaning, it is a binary relation which is in particular symmetric. But it is also colloquially used as definition such as let \\(x = \\sqrt{\\pi}\\) whereby some use the notation \\(x:=\\sqrt{\\pi}\\). In python `=` means definition or assignment. It is not a symmetric relation meaning that `1 =a` (if `a` was not defined before) will not work. Also `a =1` and `b=2`, then `a=b` is not true mathematically, while in python it just reassigning `b` to `a`.

## Data types

Every programming language distinguishes between the nature of inputs. The basic datatype in python are

- boolean: either `True` or `False`
- integers: elements of \\(\\mathbb{Z}\\)
- floats: elements of \\(\\mathbb{R}\\)
- strings: sequence of characters `"Hello this is Samuel"`

> [!WARNING]
>
> **\\(\\mathbb{N}\\) still remains out of reach.**
>
> It is clear from the description of a computer that the range of available numbers is bounded (by memory). In particular integers will only be a bounded subset of \\(\\mathbb{Z}\\). For floats it is even more complicated. Remember that \\(\\mathbb{Q}\\) is constructed from \\(\\mathbb{Z}\\) and \\(\\mathbb{R}\\) is constructed as the quotient of all Cauchy sequences in \\(\\mathbb{Q}\\). Since we only have access to a bounded subset of \\(\\mathbb{Z}\\) we can not even construct full \\(\\mathbb{Q}\\). Furthermore quotients of Cauchy sequences is an operation involving infinity (or the cardinality of \\(\\mathbb{N}\\)) since those are limit objects. Hence, they are not within the realm of a computer. Hence floats is just a subset of \\(\\mathbb{Q}\\) which is even discrete, meaning that the minimal distance between two floats is strictly positive which is not the case of any arbitrary subsets of \\(\\mathbb{Q}\\).
>
> Those limitations do also have an impact on operations. Indeed, addition, multiplication are not stable within bounded subsets. Hence, there is a lot of theory (fundamental and applied as well) how to handle this correctly, but from our small viewpoint we assume that we have very large numbers and that everything we do remains within an \\(\\epsilon\\) error. For instance computers do not have \\(0\\) usually...

At any time, given a variable `x` you can assess what type python is considering for it by using the function `type(x)`.

```py
my_bollean = False
my_integer = 25
my_float = 3.1
my_string = "My string"
# and you can print them as well as the type

print("my_boolean = ", my_bollean)
print("my_integer = ", my_integer)
print("my_float = ", my_float)
print("my_string =", my_string)
print("With types:", type(my_bollean), type(my_integer), type(my_float), type(my_string))
```

Note that some operations propagate accross types. In math, since \\(\\mathbb{Z}\\subseteq \\mathbb{R}\\) as a group, the addition between an integer \\(n\\) in \\(\\mathbb{Z}\\) and a real number \\(x\\) in \\(\\mathbb{R}\\) is well defined as an element of \\(n+x\\) in \\(\\mathbb{R}\\). Python does the same automatically by casting the type in the correct space whenever it is unambiguous.

```py
a = 1
b = 3.2
print(a+b)
print(type(a), type(b), type(a+b))
```

> [!NOTE]
>
> **Further use**
>
> ```py
> print("Integer positive negative")
> print(1, 2, -3)
> print("of type")
> print(type(-3))
> print("Floats with different declarations")
> print(1.7, 10e-2, -3.0)
> print("of type")
> print(type(1.7))
> ```

## The special case of strings

Strings in programming languages is a complex datatype. Indeed, their length is not exactly defined (from a couple of characters for a name, to several millions for a book). In python, each datatype is a class (we will see that later), hence they have many additional functions that can be called on themselves. A particular one in the case of strings is that they can be partially declared and formatted afterwards.

### Declaration

Strings are declared in several ways

- Between single quotes: `'my string'`
- Between triple single quotes: `'''my string'''`
- Between double quotes: `"my string"`
- Between triple double quotes: `"""my string"""`

```py
string1 = 'Hello'
string2 = "Samuel."
string3 = """Your email address is 'sdrapeau@saif.sjtu.edu.cn'. How are you doing on this "2024-02-19"?"""
print(string1, string2, string3)
```

> [!NOTE]
>
> **Single, double, triple, triple double quotes? What the heck!**
>
> There are kilometers of documentation and webpage about it, you can have a look. However the basic issue is that if a string contains itself a character like `'` or `"` the declaration becomes ambiguous: `'I'm Samuel'`, `"Let us meet at the "Da Pino" restaurant"`. In this case, those characters conflicting with the declaration of the string should be *escaped* (with another character, which again raises the question how to escape this escape character...). For the sake of simplicity, the triple (single/double) quotes allow you to define inside the string quotes as long as they are strictly less than three: `'''I'm Samuel'''`, `"""Let us meet at the "Da Pino" restaurant"""`. Rule of thumb:
>
> - Use double quotes for simple strings or messages where you know that there won't be double quotes inside
> - If you want to use single quotes, no pb, just follow the same argumentation than for the first point
> - Use double quote for simple `f-strings` (see after)
> - For large string or complex `f-strings` or formated strings use triple double quote

### Concatenate strings

While `1+3.5` works as expected as mentioned above, `1 + "Samuel"` will result into an error that addition is not well defined between and integer and a string. However, the addition between strings is well defined in the sense that it results in concatenation.

```py
my_name = "Samuel"
first_string = "Hello"
last_string = "How are you?"
concatenated = first_string + " " + my_name + "! " + last_string
print(concatenated) # will print `Hello Samuel! How are you?`
```

### Formatted strings

Strings in combination with the print statement are extremely useful to track what your program is doing: a primitive yet powerful debugging method. To handle strings dynamically, python allows to predefine strings that can be later formatted. Mathematically these are function of the kind

\\\[ f(name, date) = \\text{Hello }\\{name\\}\\text{! Today we are }\\{date\\} \\\]

which produces

\\\[ f(\\text{Samuel}, \\text{2024-02-14}) = \\text{Hello Samuel! Today we are 2024-02-14} \\\]

You can declare strings to be formatted with double quotes, triple single quotes or triple double quotes. It is usually better to use triple double quotes. Place holders for the variables are indicated with curly brakets `{<...>}` Since strings are class object, you can access to the function `format` to format it

```py
# Declare the string to be formatted.
# The place holders and names for each variables are between curly brackets
to_format_string = """
Hello {name}!
Your birthdate is {birthdate}
You are {age} years old.
You weight {weight}.
"""

# you can pass strings, integers, floats as well as simple operations in the variables.
first_string = to_format_string.format(
    name = 'Samuel',
    birthdate = '1977-05-23',
    age = 46,
    weight = 60+25
)
second_string = to_format_string.format(
    name = 'Irina',
    birthdate = '1992-09-15',
    age = 31,
    weight = 70-15
)
print(first_string)
print(second_string)
```

### Shortcut: `f-strings`

Instead of using a formatted string as above, another way is to use the shortcut `f-strings`. The main difference is that the variable inside an `f-string` must be declared before. The declaration is usually done with a single double quote of a triple double quote if the string might be complex.

```py
# pre-declare the variables
name = "Samuel"
age = 36
# get the formated string without the format function
my_string  = f"Hello {name}, you are {age} years old."
print(my_string)
```

### Advanced formatting

Beyond just putting variables at different places, the format functionality allows to provide additional formating, in particular for numbers. This is usually done by adding `{<...>:<some format code>}`.

```py
num1 = 1
num2 = 73/7
num3 = 0.45622

my_string = """
We have:
An integer: {number1}
two floats: {number2} and {number3}

I can appy formating with :.xf or :.x% where
 - x represent the number of significant digits
 - f/% represent if float formating or percent formating (will multiply by 100)

Formated Floats (works for int): {number1:.2f} {number2: .4f}
Formated percent: {number3:.2%} and {number3:.0%}
"""

result = my_string.format(number1 = num1, number2 = num2, number3 = num3)
print(result)
```

## Operators

Now that we have datatype and can define variable, we address the basic operators necessary for manipulating these variables.

### Arithmetic operators

The simple Arithmetic operators are just what it means.

| Symbol | Task Performed |
| :---: | :--- |
| \+ | Addition |
| \- | Subtraction |
| / | Division |
| \* | Multiplication |
| % | Modulus |
| // | Floor division |
| \*\* | To the power of |

> [!NOTE]
>
> **Euclidean division**
>
> As for the Euclidean division, remember that for two integers \\(a\\) and \\(b\\neq 0\\), there exists unique integers \\(m\\) and \\(n\\) such that
>
> - \\(a = m b + n\\)
> - \\(0\\leq n \< |b|\\)
>
> In python this Euclidean division is performed using the floor division and the modulus, that is `a = a//b * b + a%b`

```py
a = 5
b = 3

# in the following f-string the symbol \t stands for a tab space (usually 4 spaces)
print(f"""
addition:\t a+b = {a+b}
substraction:\t a-b = {a-b}
division:\t a/b = {a/b}
multiplication:\t a*b = {a * b}
power:\t a^b = {a**b}
modulus:\t a mod b = {a%b}
floor division:\t a '//' b = {a//b}
Hence: \t a//b * b+ a%b = {a//b * b + a%b}
""")
```

### Relational Operators

The relational operators are binary relations. In math, a binary relation \\(R\\) on some product set \\(X\\times Y\\) returns for each tuple \\((x,y)\\) either \\(1\\) (true) or \\(0\\) (false) written as \\(xRy\\) if \\(1\\). The classical but fundamental operators are as follows

| Symbol | Task Performed |
| :---: | :--- |
| \== | True, if left and right sides are equal |
| != | True, if left and right are not equal |
| \< | Strictly less than |
| \> | Strictly greater than |
| \<= | Less than |
| \>= | Greater than |

```py
# define z with equal
z = 1

# test is z is equal to 1 WITH two consecutive equal ==
print(f"""
z is equal to 1: {z == 1}
z is equal to 1: {1 == z} # note that it is as expected symetric
z is different of 2: {z != 2}
z is strictly greater than 4: {z > 4}
""")
```

### Bitwise Operators

Bitwize operation are also binary relations related to logic. They are called bitwize since they are defined on the logic Boolean algebra `{True, False}`

| Symbol | Task Performed |
| :---: | :--- |
| &amp; | Logical and |
| l | Logical or |
| ^ | xor |
| \~ | Negate |

> [!NOTE]
>
> Note that `xor` also called exclusive `or` is True only when the left and right are strictly different. In math these operators are usually denoted by \\(\\wedge\\) for `and`, \\(\\vee\\) for `or` and \\(\\neg\\) for `~` and \\(\\not \\leftrightarrow\\) for `xor`. `xor` is redundant as it can be expressed in terms of the three other operators
>
> \\\[ \\begin{equation} A \\not \\leftrightarrow B = (A \\vee B)\\wedge \\neg(A \\wedge B) = (A\\wedge \\neg B)\\vee(\\neg A \\wedge B) \\end{equation} \\\]

```py
print(f"""
True or False is: {True | False}
True and False is: {True & False}
The negation of True is: {~True}
True xor False (exclusive or): {True ^ False}
True xor True: {True ^ True}
"""
)
```

The main use of those bitwize operators is within control flows we will see later in combination with the relational operators

```py
a = 1
b = 2

print(f"a is equal to 1 and b is different of 3 is {(a == 1) & (b != 3)}")
print(f"a is negative and b is different of 3 is {(a <=0) & (b != 3)}")
```

## Data Structures

Aside basic data types such as int, floats or strings, python allows for more advanced data structures, which can be considered as containers of variables. They come in four forms: tuple, lists, sets, dictionaries. They distinguish themselves by the properties

- Mutable: can be modified (append, delete, change value)
- Ordered: if an inherent order is defined for the objects in the container
- Duplicates: if elements in the container can have duplicated values.
- Heterogeneous: if elements can have different types

|  | Tuple | Lists | Dictionaries | Sets |
| :--- | :---: | :---: | :---: | :---: |
| Mutable |  |  |  |  |
| Ordered |  |  |  |  |
| Duplicate |  |  |  |  |
| Heterogeneous |  |  |  |  |

With these properties in mind, the most widely used object remains lists and dictionaries. Tuple are also often used but less in the sense of a data structure, but rather as input/output of functions.. Sets are seldom used, only if you want to constructs collections without duplicates and do not care about ordering.

We therefore present tuple, lists and dictionary thereafter and shortly tuple and sets in the end.

### Lists

Lists can be viewed as arrays of variables that can be of mixed type. Those arrays can be expanded, shrunken, modified. They are ordered as the elements are all associated with an index starting from `0` and ending with `N-1` where `N` is the length of the list.

- **Declare**: between squared parenthesis `x = [x0, x1, ..., x_{N-1}]`
- **Properties**: function length `len(x)` returns the length of the list `N`
- **Access**:

  - element `x[k]` represent the value of the array at the `k`th. position
  - backward: `x[-1]` is for `x[N-1]`, `x[-2]` is for `x[N-2]` etc.
- **Slice**: extract sub array:

  - `x[start:end]` is equal to the array `[x[start], x[start+1],..., x[end-1]]`
  - `x[:end]` is equal to the array `[x[0], ..., x[end-1]]`
  - `x[start:]` is equal to the array `[x[start], ..., x[N-1]]`

> [!WARNING]
>
> Remember that arrays in python are enumerated starting from `0` and not `1` like is usual in math. Hence, the last element of an array is `x[N-1]` for an array of size `N`

```py
# declare an empty array
x = []
print(f"Empty array {x} of length {len(x)} and type {type(x)}")

# declare a heterogeneous array
x = ['apple', 'orange', 25, 5.4]
print(f"""
Hetegrogeneous array: {x}
of length: {len(x)}
and type {type(x)}
""")

# Access values
print(f"""
First element:\t {x[0]}
Third element:\t {x[2]}
Last element:\t {x[-1]}
"""
)

# Slice
print(f"""
Slice from 1 to 3 (exclusive): {x[1:3]}
Slice from begining to 3 (exclusive): {x[:3]}
Slice from 2 (inclusive) to end: {x[2:]}
""")
```

Since lists are mutable, you can

- **Change values**: `x[k] = some_val` change the value of the element at the `k`th position to `some_val`
- **Append values**: `x.append(some_val)` append `some_val` at the end of the array. The new length is modified to `N+1`
- **Insert values**: `x.insert(k, some_val)` insert `some_val` at position `k`. Each previous value between `k` and `N-1` is shifted to positions `k+1` and `N` with a new length of `N+1`
- **Remove specific item**: `x.remove(some_val)` removes `some_val` from the array if it is present. If there are multiple instance of which, it will remove the first occurrence.(1)

  1. 👉 Be careful with this function as it is not bijective due to the fact that duplicate values might be in the array
- **Remove specific indexed value**: `x.pop(k)` remove the `k`th element resulting in `N-1` length array.(1) Furthermore, while the function `x.pop(k)` remove the item it also returns the value. In other term `val = x.pop(k)` result in `x` without the `k`th value and `val` containing the former value `x[k]`.

  1. 👉 This is the preferred way as it is explicit.

```py
x = ['apple', 'orange', 25, 5.4]

# append the string "new value" at the 4th position of the array
x.append("new value")
print(f"""
x after appending "new value" at the last position:
{x}
""")

# insert an integer 25 at position 1
x.insert(1, 25)
print(f"""
x after inserting 25 at position 1:
{x}
""")

# remove the value 25 from the array (be carefull there are two so it removes the first)
x.remove(25)
print(f"""
x after removing (the first occurence of) 25:
{x}
""")

# remove the element at position 1
val = x.pop(1)
print(f"""
x after removing the value {val} at position 1:
{x}
""")
```

Since list elements can be made of any type, you can also construct list of lists as well as concatenate them as strings.

```py
x = [1, 2]
y = ['carrot','potato']
z = [x,y]
concat = x+y
print(f"""
First list x:\t{x}
Second list y:\t{y}
List of lists [x, y] =\t{z}
Accessing the second element of the first list in [x, y]:\t{z[0][1]}
Concatenation of lists x + y:\t{concat}
"""
)
```

### Dictionaries

Dictionaries are collections of `key/value` pairs. Like in a classical dictionary where a specific word is associated to a definition. As words in a classical dictionary, keys are unique, however values can be non unique. It is similar to a list where the integer indices of the list are replaced by unique however arbitrary keys.

- **Declare**: between curly brakets `x = {'keys': val1, 'key2' = val2}`
- **Properties**:

  - function length `len(x)` returns the length of the dictionary (is however of limited use)
  - function listing keys `x.keys()` returns the list of the keys.
- **Access**:

  - element `x['key']` represent the value of the dictionary for the key `key`

```py
# declare an empty dictionary
x = {}
print(f"Empty dictionary {x} of length {len(x)} and type {type(x)}")

# declare a dictionary
x = {'fruit': 'apple', 'vegetable': 'cucumber'}
print(f"""
Dictionary: {x}
of length: {len(x)}
and type {type(x)}
""")

# Access values
print(f"""
Value of key fruit:\t {x['fruit']}
Value of key vegetable:\t {x['vegetable']}
List of the keys:\t {x.keys()}
"""
)
```

As lists, dictionary are mutable, you can

- **Change values**: `x['key'] = some_val` change the value for the key `key` to `some_val`
- **Add values**: `x['new_key'] = val` adds a new key (if it does not exists otherwize it overwrites the existing value) with value `new_val`.
- **Remove specific key/value**: `x.pop('key')` remove the key value for key `key`.

> [!NOTE]
>
> **Info**
>
> There are other methods for dictionary such as `x.popitem()` that removes the last inserted key. Even if in Python a dictionary is considered as not ordered, it keeps internally an order. Therefore in terms of philosophy this method should not be used.

```py
x = {'fruit': 'apple', 'vegetable': 'cucumber'}

# change the value 'apple' of key `fruit` to `orange`
x['fruit'] = orange
print(f"""
Dictionary with new value orange for key fruit: {x}
""")

# Add a new item `meat` with value `steak`
x['meat'] = 'steak'
print(f"""
x after adding a new key/value pair:
{x}
""")

# remove the key `vegetable` from the dictionary
val = x.pop['vegetable']
print(f"""
x after removing the key `vegetable` with value {val}:
{x}
""")
```

As lists, the value of every key/value pair in a dictionary can be of every nature. In other terms you can build for instance dictionaries of dictionaries that are quite often used for web development (a form of no-sql structure for data).

```py
x = {'fruit': 'apple', 'vegetable': 'cucumber'}

# Adding a subdictionary
x["condiments"] = {"salty": "salt", "sugary": "caramel"}
print(f"""
We now have a dictionary with a sub dictionary
{x}
The subdictionarry can be accessed
{x['condiments']}
and its elements too
{x['condiments']['salty']}
"""
)
```

### Tuples

Tuples are similar to list up to the fact that once declared they are immutable. Values can not be changed, tuples can not be extended or shrunk.

- **Declare**: between parenthesis `x = (x0, x1, ..., x_{N-1})` or just as sequence separated by commas `x = x0, x1, ..., x_{N-1}`.
- **Properties**: function length `len(x)` returns the length of the list `N`
- **Access**:

  - element `x[k]` represent the value of the tuple at the `k`th. position
  - backward: `x[-1]` is for `x[N-1]`, `x[-2]` is for `x[N-2]` etc.

```py
# declare an empty tuple
x = ()
print(f"Empty tuple {x} of length {len(x)} and type {type(x)}")

# declare a heterogeneous tuple
x = ('apple', 'orange', 25, 5.4)
# alternatively
x = 'apple', 'orange', 25, 5.4

print(f"""
Hetegrogeneous tuple: {x}
of length: {len(x)}
and type {type(x)}
""")

# Access values
print(f"""
First element:\t {x[0]}
Third element:\t {x[2]}
Last element:\t {x[-1]}
"""
)
```

Tuple can be decomposed

```py
x = 3.5, 7.6, 0
a, b, c = x

print(x)
print(a, b, c)
```
