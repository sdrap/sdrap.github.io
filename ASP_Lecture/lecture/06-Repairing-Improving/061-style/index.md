# Style

Each programming language has its own set of rules in terms of coding in order to compile. However, beyond the requirement of the compiler, there are some additional unoffical rules in order to improve the readability, maintainance and exchange of code.

As those set of rules are not enforce by the compiler, nothing prevents you to write the way you want. Furthermore, there are different schools of thoughts fighting against each other at which style should prevail, however here is a list of common standards plus some personal choice that will make your code readable.

There are many references online about it, like [here](<https://docs.python-guide.org/writing/style/>), [there](<https://docs.python-guide.org/writing/structure/>), [there](<https://machinelearningmastery.com/techniques-to-write-better-python-code/>) or [there](<https://realpython.com/python-comments-guide/>).

In the following here are some my personal advices (I tend to deviate from the standard sometime). most of the advices here apply to `Python` but generically can be used for many other programming languages.

## Developing Environment

Python scripts can be plainly written in a simple text editor and then run using python. However, since it is a scripting language, many editors allows to write pieces of code in cells that can be executed one after the other.

### Jupyter Notebooks

Jupyter notebooks, (or its terminal form `Ipython`) allows to run code in cells without an editor since it runs locally on your browser. It is an easy way to develop some ideas as it allows to write code interleaved with `markdown` cells for additional comments, as well as show figures directly.

One drawback is that it is really oriented to script on a single file. Furthermore, it saves the notebook with all the information (data imported, figures drawn, etc) rather than just the script and so notebook can become very large on the disk.

### VScode, Pycharm, Spyders, etc.

Those editors are designed to develop (not necessarily only python) on project which might include multiple files. They have additional functionalities to debug, navigate the code across multiple files and show the results of different pieces (cells) of code directly. They are also modular in the sense that you can add additional functionalities (plugins) for special purposes.

If you start to develop more intensively beyond just occasional single scripts, this is the recommended environment.

### Old School Terminal Editors

Terminal editors like `vi` or `Emacs` are working horses for developers for more than half a century. Their learning curve is very steep however they are extremely portable, take less space in memory, and are very modular with dozens of useful and powerful extension for coding.

I personally use `neovim` which is a modern clone of `vi` in combination with several coding plugins and in combination with `Ipython` for `python` to run pieces of script in another terminal as `vscode` does.

## Structure your Project

After the choice of environment, instead of writing in loose `py` files all over the place try to keep a consistent organization of your files. Usually create a directory where you want to keep your scripts or longer project (with coding editors use the function `open directory` rather than `open file`).

A typical directory can be organized as follows

```bash
.
|-- data/
|   |-- some_data.csv
```
