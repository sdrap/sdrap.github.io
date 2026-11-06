# Functions and Classes

Remember that from the very beginning, from a mathematical viewpoint, we want to implement the following

\\\[ \\begin{equation} x \\longmapsto f(x) \\end{equation} \\\]

In other terms we want to compute the value of a function. Given an input \\(x\\), transform it to get an output \\(f(x)\\). Such a shorthand writing is colloquial in mathematics, however, it is not correct. To define a function you write the following

\\\[ \\begin{equation} \\begin{split} f \\colon X &amp; \\longrightarrow Y\\\\ x &amp; \\longmapsto f(x) \\end{split} \\end{equation} \\\]

> [!NOTE]
>
> **For the mathematicians among you**
>
> Mathematically, a function is defined as a graph \\(\\mathrm{Graph}(f) \\subseteq X\\times Y\\) with the property that for any \\(x\\) in \\(X\\), there exists a unique \\(y\\) in \\(Y\\) such that \\((x, y)\\) is in \\(\\mathrm{Graph}(f)\\). Aside from this definition, it means that a function is well defined given a domain \\(X\\) and an image \\(Y\\).
>
> Functions are fundamental objects in mathematics in particular in terms of composition. Indeed given functions
>
> \\\[ \\begin{equation} X \\xrightarrow{f} Y \\xrightarrow{g} Z \\end{equation} \\\]
>
> We can consider the function \\(f\\circ g\\) given by
>
> \\\[ \\begin{equation\*} \\begin{split} g\\circ f \\colon X &amp; \\longrightarrow Z\\\\ x &amp; \\longmapsto g\\circ f (x) = g\\left(f\\left(x\\right)\\right) \\end{split} \\end{equation\*} \\\]
>
> Starting from this we can consider more complex structures such as
>
> \\\[ \\begin{align\*} f \\colon X \\times Y &amp; \\longrightarrow Z &amp; g \\colon I &amp; \\longrightarrow Y\\\\ (x, y) &amp; \\longmapsto f(x, y) &amp; i &amp; \\longmapsto g(i) \\end{align\*} \\\]
>
> then you can construct the following composition
>
> \\\[ \\begin{equation\*} \\begin{split} h\\colon X \\times I &amp; \\longrightarrow Z\\\\ (x, i) &amp; \\longmapsto h(x, i) = f(x, g(i)) \\end{split} \\end{equation\*} \\\]
>
> It turns out that in programming definition and composition of functions is the fundamental backbone to get results.
>
> In math we still use shorthand writting whenever it is clear from the context what is meant. In a paper about number theory, writing "Let \\(f(n) := 2n +1\\)" is clear that you consider as domain \\(\\mathbb{N}\\) and image \\(\\mathbb{N}\\). It is elegant and for the reader there is no ambiguity. However a computer is a dumb machine for which you should exactly tell what is what.

Hence, domain \\(X\\), image \\(Y\\) and the action itself \\(f\\) are requirements for a well defined function. For ease of notations, it turns out that python adopts from the beginning the shorthand writing exposed above. In other terms you don't need to specify the domain and image of a function explicitly. The compiler will figure out by itself according to the nature of the input and the function itself:

1. are the inputs valid?
2. can the inputs be processed through the function?
3. the type of the output?

This is a daunting task to ask for a programming language if you think about it. This is one of the main reason why Python is considered as a high level programming language. It has smart way to check for any step above, yet, it comes at efficiency costs and sometimes issues in terms of predictability has it takes control of the procedure that you may not have thought about.

> [!NOTE]
>
> **Example**
>
> If you define `x=1` and `y=3.5`, then `x` is of integer type while `y` is of float type. Nevertheless you can define `x+y` which is equal to `4.5` which is natural, however combines a priori in an operation elements from different domains, and the result is a float. Yet, if you define `y = "hello"` to be a string, `x+y` is going to be an error as there is no way to infer for the compiler how to sum an integer with a string.

## Functions

A function in a programming language is exactly the same as in math, it takes and input and return an output. A function is define using `def f(x):` where `def` is a keyword indicating that we define a function, `f` is the name of the function and `x` are the variables or input to be considered for this function. The content of the function is then specified with an indentation to delimit the scope of this function. After definition, this function can always be called with `f(x)` for a specific value of `x` just as in math.

The most basic function (I won't speak about the empty function) is the constant function. Constant function takes no input or whatever input and return the same output. Since python do not need to specify domain and image it is just a universal function so to say.

```py
# A constant function that just print a message
def hello():
    print("Hello World!")

# we now call the function
hello()
```

Constant functions are called `void` function in programming language however it might be confusing sometimes as in python they can act on variables declared outside the *scope* of the function.

```py
x = 1
# function with no input
def hello():
    print("Hello World!")
    # add one to x
    x = x + 1
print(f"Value of x before calling the function {x}")
# call the function
hello()
print(f"Value of x after calling the function {x}")
```

Most low level programming languages do not allow you to use variables outside the scope and the input of the function. This is however not the case for python, hence care here! As a rule of thumb, never use a variable declared outside the scope of the function and not an input.

If the function takes an input it is declared in the function definition and it can be used in the scope of the function.

```py
def hello_user(username):
    print(f"Hey {username}!")
    print(f"{username}, How do you do?")

hello_user("Samuel")
hello_user("Linda")
```

However the most interesting functions are those that return an output rather than print something. In order to return a value, the function must be ended with the keyword `return`. In this case, you can also use composition

```py
def multiply(x, y):
    c = x*y
    return c

result = multiply(7,3)
print(result)
# now we can compose to compute 3 * (2 * 3)
print(multiply(3,multiply(2,3)))
```

> [!NOTE]
>
> **Fibonacci**
>
> Provide a function that returns the `n`th Fibonacci number
>
> ```py
> def fibbo(a0, b0, n):
>     a = a0
>     b = b0
>     if n != 0:
>         for i in range(1,n):
>             a, b = b, a+b
>     result = a        
>     return result
>
> # return the 10th fibonacci number
> fibbo(10,-5, 10)
> ```

It is possible to pass not only variables to a function but also specify default values. Default values are automatically filled if not provided. Note that default values in python must be provided after the variables without default value.

```py
# we fix 10 as default for n
def fibbo(a0, b0, n = 10):
    a = a0
    b = b0

    if n != 0:
        for i in range(1,n):
            a, b = b, a+b
    return a

# return the 10th fibonacci number we do no longer need to specify 10 for n
print(f"Default fibonnaci number (10): {fibbo(10,-5)}")

# if we want another number we can specify it
print(f"20th fibonnaci number: {fibbo(10,-5, n=20)}")
# it would be here equivalent to call fibbo(10, -5, 20)
```

## Classes

Classes are also function but seen from a higher level. Mathematically speaking they are closer to category theories where objects and morphism describe the relation between the objects. A class defines a structure for objects including their data and functions *also called methods* that operates on these data.

A class is defined almost like a function, but using the `class` keyword, and the class definition usually contains a number of class method definitions (a function in a class).

- Each class method have an argument `self`. This object is a self-reference to itself.
- Some class method names have special meaning, for example:

  - `__init__`: The name of the method that is invoked when the object is first created.
  - `__str__` : A method that is invoked when a simple string representation of the class is needed, as for example when printed.

```py
class Point:
    #Simple class for representing a point in a Cartesian coordinate system.

    # inside the class we define the initialization method (will be called any time a new instance is created)
    def __init__(self, x, y):
        # Create a new Point at x, y.
        self.x = x
        self.y = y

    # A method (function) to translate a point
    def translate(self, dx, dy):
        # Translate the point by dx and dy in the x and y direction.
        self.x += dx
        self.y += dy

    # A method to compute the norm of the vector
    def norm(self):
        return (self.x ** 2 + self.y ** 2) ** 0.5

    # a method to show the coordinates
    def show_myself(self):
        print(f"I am a point with coordinates: ({self.x}, {self.y})")
    def __str__(self):
        return("Point at [%f, %f] with length %f" % (self.x, self.y, self.normxy))


# declaring instances of this class
p1 = Point(1,1)
p2 = Point(1,1)

# calling a class method

p1.translate(-0.5, 0.5)

print(p1)
print(p2)
```

> [!NOTE]
>
> Unless your project really requires to have higher conceptual objects where data structures and tightly connected methods are needed, you do not need classes in the first place. We will see examples throughout this lecture where classes comes naturally to proceed to some computations. Some libraries too are designed from an oject oriented perspective (`pytorch` for instance) or make use of class for their primary objects `pandas dataframes` for instance.
