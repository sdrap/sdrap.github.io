# Arrays - Numpy

With the basic of programming so far we can do scientific computing, basic scientific computing. Theoretically we can compute approximation of any function such as \\(x \\mapsto e^x\\). This would however be very difficult to implement all the classical mathematics such as basic functions `exp`, `ln`, `sin`, `arccos` etc. The same goes for linear algebra like matrix multiplication or inversion, as well as for integration, differentiation, optimization, generation of random numbers.

Python is modular in the sense that many so called **libraries** can be used to perform more advanced task. Those libraries are most of the time open source and provide pre built functions and structures that can be called directly in the program after importing the library.

In order to use such a library you need to

- **install** it (either through `anaconda` or `pip`)
- **import** it at the begining of the script using `import xxx`

[NumPy](<https://numpy.org/>) is a cornerstones of scientific computing in the python community. The `numpy` library is used in almost all numerical computation using Python. It is a library that provide high-performance vector, matrix and higher-dimensional data manipulation for Python (tensors). It is implemented in C and Fortran so when calculations are vectorized (formulated with vectors and matrices), performance is very good.

At the core, `numpy` puts python lists on steroids for computation. The objects are arrays and handled as lists with many additional functionalities.

> [!NOTE]
>
> As a convention over time the `numpy` library is imported with a nickname `np`.

## Basics

```py
# import the library numpy with nickname np
import numpy as np

# Create a list
my_list = [0, 1, 3, 2]

# create a numpy array from this list
my_array = np.array(my_list)

print(f"""
Python list: {my_list} \t with type: {type(my_list)}
Numpy array: {my_array}\t with type: {type(my_array)}
""")

# Like lists you access elements the same way by indexing and slicing.
x = np.array([1, 2, 7, 18, 4])
print(f"""
my array: {x}
First element: {x[0]}
Array from 1 to second exclusive, {x[1:2]}
Array from begining to third exclusive: {x[:3]}
Array from second to end: {x[2:]}
Type of x[0]: {type(x[0])}
Type of x[1:2]: {type(x[1:2])}
"""
)
```

Unlike the concatenation properties, you can now perform arithmetic operations which will be applied point wise.

```py
x = np.array([1, 2, 7, 18, 4])
y = np.array([-1, 0, 1, 0, 2])

print(f"""
Array: x:{x} and y:{y}
Addition x+y: {x+y}
Multiplication x*y: {x*y}
Division x/y: {x/y}
Addition scalar plus array 3+x: {3+x}
Multiplication by scalar 3 * x: {3 * x}
"""
)
```

You can declare matrices as 2 dimensional arrays and access the dimension and the shape

```py
my_matrix = np.array(
    [ 
        [3.4, 8.7, 9.9], 
        [1.1, -7.8, -0.7],
        [4.1, 12.3, 4.8]
    ]
)
print(f"""
Matrix: {my_matrix}
Number of dimensions: {my_matrix.ndim}
Dimensions: {my_matrix.shape}
"""
)

# Note that you can go to arbitrary higher number of dimensions.
```

> [!WARNING]
>
> Be aware these are not lists. `numpy` arrays have uniform type and can not be mixed. The type of an array once declared can not be changed (unless explicitly done) afterwards for computational efficiency. You can not allocate values which are not of the predeclared type to an array.

```py
# declare a list of integers
my_list = [0, 1, -2]
# declare an array of integers
x = np.array([0, 1, -2])

print(f"""
List {my_list} of type {type(my_list)}
First element of the list {my_list[0]} of type {type(my_list[0])}
Array {x} of type {type(x)}
First element of the array {x[0]} of type {type(x[0])}
""")

# allocate the value 3.5 at the first entry
my_list[0] = 3.5
x[0] = 3.5

print(f"""
List {my_list} of type {type(my_list)}
First element of the list {my_list[0]} of type {type(my_list[0])}
Array {x} of type {type(x)}
First element of the array {x[0]} of type {type(x[0])}
"""
)

# Allocate value "Samuel" at the first entry
# the code will run into an error for numpy therefore we catch it
my_list[0] = "Samuel"
print(f"""
List {my_list} of type {type(my_list)}
First element of the list {my_list[0]} of type {type(my_list[0])}
"""
)

try:
    x[0] = "Samuel"
except Exception as error:
    print(f"We got an error\n{error}")
```

> [!NOTE]
>
> When a `numpy` array is declared, it will basically try to cast the smallest type under which all variables fits.
>
> ```py
> # array with mixed floats and integers
> x = np.array([1, 2.5, 3])
> print(f"array {x} with type {x.dtype}")
> # array with some strings
> x = np.array([1, 2.5, "Samuel"])
> print(f"array {x} with type {x.dtype}")
> # Enforce type with keyword dtype
> x = np.array([1, 2, 3], dtype = float)
> print(f"array {x} with type {x.dtype}")
> ```

## Generating arrays

Quite often you need to generate array from specific shape and structure such as an identity matrix. Numpy provides handy ways to construct them, the list of which can be found [here](<https://numpy.org/doc/stable/reference/routines.array-creation.html>)

It includes among others

- `arange`: array of equally spaced values of size `mesh` (default is 1) between `start` (default is 0), `end`.
- `linspace`: array of `num` equally spaced values between `start` and `end` (excluded unless otherwize specified)
- `zeros`: array of zeros of given dimension
- `ones`: array of ones of given dimension
- `diag`: (for `2d arrays`) construct a diagonal matrix or extract the diagonal
- `eye`: returns an identity matrix
- `random.xxx`: produce random numbers (different distributions)

```py
x = np.arange(10)
print(x)

x = np.arange(-1, 1, 0.5)
print(x)

x = np.linspace(-1, 1, 5)
print(x)

x = np.zeros( (3, 3) )
print(x)

x = np.ones((3,3))
print(x)

# construct diagonal matrix from vector
vector = np.array([0, 1, 5, -1])
x = np.diag(vector)
print(vector)
print(x)

# extract diagonal from matrix
diagonal = np.diag(x)
print(diagonal)

# Generate random numbers
x = np.random.rand(10)
print(x)
```

## Slicing on Conditions

We already saw several examples of slicing for list that are basically done with respect to the domain of indices of the list itself. Numpy allows to generate efficiently slicing based on the values of the array, basically retrieving indices of the kind

\\\[ \\begin{equation} \\left\\{i \\colon x\_i \\in B\\right\\} \\end{equation} \\\]

which is the reciprocal image of \\(i \\mapsto f(i)=x\_i\\).

```py
# %%
x = np.random.rand(10)

print(x)
# make an boolean array of the values above 0.5
mark = x>0.5
print(f"resulting true/flase array for the condition :{mark}")
# extract an array of the values above 0.6
print(f"""
Values of
{x}
above 0.5 is:
{x[mark]}
""")

# get the corresponding indices where mark is true
indices = np.where(mark)
print(f"Indices where the condition is true: {indices}")
print(f"Values of x for the indices where the condition is true: {x[indices]}")

# Do it directly for instance for the values between 0.2 and 0.6
print(x[(x>0.2) & (x<=0.6)])
```

## Broadcasting

Where `numpy` shines from a scientific computational viewpoint, is about so called *broadcasting*. In math you would define a function

\\\[ \\begin{equation\*} \\begin{split} f\\colon X &amp; \\longrightarrow Y\\\\ x &amp; \\longmapsto f(x) \\end{split} \\end{equation\*} \\\]

and for any imaginable \\(x\\) you can evaluate the value of which. However from a computational perspective, for several reasons such as plotting but also parallel computing among others, you would like to have immediately several evaluations of which at the same time.

In other terms, given a vector \\(\\mathbf{x} := (x\_0, \\ldots, x\_{N-1})\\) you would like to have in return the vector \\(\\mathbf{f}(\\mathbf{x}):= (f(x\_0), \\ldots, f(x\_{N-1}))\\). In other terms, we want a function, assume \\(N\\) given for simplicity

\\\[ \\begin{equation\*} \\begin{split} \\mathbf{f}\\colon X^N &amp; \\longrightarrow Y^N\\\\ \\mathbf{x} &amp; \\longmapsto \\mathbf{f}(\\mathbf{x}) = (f(x\_0), \\ldots, f(x\_{N-1})) \\end{split} \\end{equation\*} \\\]

This simple operation is called broadcasting and `numpy` implements it effortlessly for most of the standard [functions](<https://numpy.org/doc/stable/reference/routines.math.html>).

```py
x = 2
print(f"exponential of {x}={np.exp(x)}")
# now with an array
x = np.linspace(-1, 1, 20)
print(f"""
Exponential of:
{x}
is
{np.exp(x)}
""")

# for a random vector
x = np.random.rand(10)
print(x)
print("Exponential: \n", np.exp(1+x))
print("Log: \n", np.log(1 + x))
print("absolute value: \n", np.absolute(x))
print("maximum:\n", np.maximum(x, 0)) 
```

> [!NOTE]
>
> If you want to program it from a straight forward perspective it would run as follow
>
> ```py
> def scalar_fun(x):
>     ...
>     return x
>
> def fun(x):
>     N = len(x) # get the length of x
>     result = np.zeros(N) # create an array of size N
>     for i in range(N):
>         result[i] = scalar_fun(x[i])
>     return result
> ```
>
> This is fully legitimate however almost all the time very slow due to the python loop. As long as there is a `numpy` function available, use it in the context of broadcasting.

Every linear combination, multiplication and composition of `numpy` functions will broadcast automatically. Beyond this scope, if you need to write a function, think twice before you input a `numpy` array before writing the function. Always think that the input are `numpy` arrays.

```py
# define a function computing (x - k)^+=max(x-k, 0)

def maximum00(x, k):
    result = 0
    if x>=k:
        result = x-k
    return result

print(f"""
for x=10 and k =9: {maximum00(10,9)}
""")

try:
    x = np.arange(10)
    print(f"""
    Result for x of (x-9)^+: {maximum00(x, 9)} 
          """)
except Exception as error:
    print(f"We got an error\n{error}")


# In this case you can modify the function as follows
def maximum01(x, k):
    # ensure that x is an numpy array
    x = np.array(x)
    result = np.zeros_like(x)
    # now allocate the value correctly
    mask = x>=k
    result[mask] = x[mask] - k
    result[~mask] = 0 # ~mask set true to false and reciprocal
    return result

x = np.arange(10)
print(f"""
Using maximum01
Result for x of (x-9)^+: {maximum01(x, 9)} 
""")

# Naturally this is naive, you have a numpy function maximum that provides this result direclty
printf(f"Using numpy maximum: {np.maximum(x - k, 0)}")
```

## Linear algebra

- elementwise multiplication and power
- transpose
- norm
- matrix multiplication
- eigenvalue
- inverse ...

```py
x = np.array([1, 2])
A = np.array([[1, 0], [0, 1]])
B = np.array([[4, 1], [2, 2]])

# element wise multiplication
print("x+x \n", x + x)
print("A + B  element wise \n", A + B)

# transpose
print(B)
print("transpose \n", B.T)

# matrix multipplication
print("Matrix multiplication AB \n", A.dot(B)) # perform the matrix multiplication A B
print("Matrix vector multiplication Bx \n", B.dot(x))
print("Matrix vector multiplication xB \n", x.dot(B))
print("Inner prod", x.dot(x))

# eigenvalues and vectors
print("Eigenvalues of B returns eigenvalues and eigenvectors \n", np.linalg.eig(B))

result = np.linalg.eig(B)
print("eigenvalues", result[0])
print("eigenvectors", result[1])

# inverse
print(B)
print("multiplicative inverse of B \n", np.linalg.inv(B) )
print("B B^(-1) \n", B.dot(np.linalg.inv(B)) )
```

## Randomness

We already saw that we can generate random numbers. With this at hand, you have easy access to basis statistical information such as the mean, variance, standard deviation (you can have a look at quantiles, etc.)

```py
x = np.random.rand(40)
y = np.random.rand(40)
print("mean: ", x.mean())
print("std: ", x.std())
print("max:", x.max())
print("min:", x.min())
print("sum:", x.sum())
print("cumulative sum: ", x.cumsum())
print("correlation matrix: ", np.corrcoef(x, y))
```

## Fake vs True Copy

Remember that with basic python, equality means allocation and therefore declaration of a new variable

```py
a = 1
b = a
print(f"Value of a={a} and b={b}")
#change the value of a which will not change the value of b
a = 2
print(f"Value of a={a} and b={b}")
```

> [!NOTE]
>
> Without entering into the concept of *pointers*, from a basic perspective, for a computer, a variable is an address in memory containing the value of this variable. With this at hand you have two ways to consider the variable:
>
> - either by its address in memory
> - either by its value at this given address
>
> Python considers that a variable is the value in the pointed memory. If you declare `a =1` (assigning the value `1` at some place in memory with address called `a`), if you declare `b=1`, it will create a new address `b` pointing to a value in memory equal to the memory value address of `a` which is `1`. Now if you change the value of a by `a = 2` you are saying the at the memory address of `a` change the value from `1` to `2`. The value of address `b` still points to a memory allocation which value is `1`.
>
> From a mathematical perspective this makes sense, but even if as a mathematician you can conceive in mind any large dimensional object of arbitrary cardinality a computer is not.
>
> Suppose for instance that you have a very large vector \\(\\mathbf{x} = (x\_0, \\ldots, x\_{N-1})\\) stored in memory for computations, each single value being a large float taking lot of memory space. For whatever reasons you want to perfrom computations on the values of which being greater than \\(10\\), that is \\(\\mathbf{y} = \\mathbf{x}\[\\mathbf{x}\\geq 10\]\\). In a pythonic way you would define \\(\\mathbf{y} = \\mathbf{x}\[\\mathbf{x}\\geq 10\]\\) allocating a new segment of the memory with this new vector. With multiple copies like this you would rapidly exhaust the memory while doing nothing meaningful. If instead you were just defining \\(\\mathbf{y}\\) as the adresses where \\(\\mathbf{x}\\) is greater than \\(10\\), you would only store the vector of addresses which is way smaller in size.
>
> Since `numpy` relies on `C` and `Fortran` with in mind this typical kind of situations, it considers arrays as address in memory. For most computations `a =b` is just assigning to `b` the address of `a` rather than defining a value (with many exceptions that are documented but sill difficult to catch). If you want a tru new value of an array, you need to *tell* `numpy` that you want to do so.

```py
# with straightforward fake pythonic copy
a = np.array([0,1,2])
b = a 
a[0] = 2
print(f"Value of a:{a}")
print(f"Value of b: {b}")

# with explicit copy
a = np.array([0,1,2])
b = a.copy()
a[0] = 2
print(f"Value of a:{a}")
print(f"Value of b: {b}")
```
