# Setup

Any normal computer with either Linux, Windows of MacOS will do it.

What is primarily needed:

- Python
- A Code editor

## Python

Python can be installed in many different ways (In linux it is for instance most of the time already in the system). Several python (with different versions) can run under the same computer.

However the most simple and best advice is to use [Anaconda](<https://www.anaconda.com/>)

1. Step 1: [Download Anaconda](<https://www.anaconda.com/download>) for your platform
2. Step 2: Install on your computer

> [!NOTE]
>
> **Miniconda**
>
> Anaconda comes with a GUI software to manage the environment and packages with point and click. It also installs a default set of packages such as `Jupyther`, `numpy`, etc. If you prefer to install a minimal version and install only the packages you need one after the other you can install [Miniconda](<https://docs.anaconda.com/free/miniconda/index.html>)

Anaconda usually comes with a python interpreter called `ipython` that allows to run code directly from a console or an editor.

## Code Editor

Two write code you only need an editor, however dedicated editors allows you to program more efficiently.

- Jupyther Notebook: Allows you to run on the browser so called notebook where you can input code, text, and run each cell. Good for pure beginner.
- VSCode: Is a multi platform open source editor maintained and released by Microsoft. It is a great environment for development. The principle is that it is a basic editor in which you can install so called *plugins* (mini apps like in wechat or allipay). [Download](<https://code.visualstudio.com/Download>) and install. Then go to the plugins repository and install the `python` plugin from Microsoft.

> [!TIP]
>
> **Good practice**
>
> It is recommended to have a directory in your computer containing your code files (for organization purposes and also because python will run as environment in this directory).

## Installing additional libraries

Python can be extended with libraries *this is one of the strength of it* that will perform tasks for you. Installing a new library can be done in three ways with anaconda:

1. Use the GUI and search for the library
2. Open a terminal and type `conda install <library>`
3. Open a terminal and use pip with `pip install <library>`

> [!WARNING]
>
> The first and second options are preferable usually. Indeed, libraries have a complex system of inter-dependence and since you are likely using Anaconda, the tool `conda` will manage the inter-dependence of each packages better. It is however slower.

## Which libraries

In the lecture we will use quite a lot of libraries and install them on the go. Fundamentally the following ones will be recurrent

- `numpy`: multidimensional array library
- `pandas`: data analysis (tabular) framework
- `scipy`: scientific library
- `pytorch`: AI and ML library with tensors
- `plotly`: Data visualization
