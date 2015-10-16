---
layout: post
title: 'Ipython &mdash; Jupyter &mdash; Scientific Library <br> Howto Install and Start Using'
categories:
  - programing
---

ipython is an excellent and easy way to implement rapidly and nicely some of the techniques we learned during the lecture.
The main advantages of Python are the following:

* Beautiful and very natural syntax, easy to learn;
* Huge and increasing community -- both in science and industry;
* Loads of libraries for scientific computing: numpy, scipy, matplotlib, pandas, etc.;
* Language of reference for data analysis, computing, financial engineering and statistics;
* Good balance between low and high level programing language: Higher than C++ but possibility to implement C through Cython;
* Excellent cross platform interfaces: ipython notebook, Sage, etc.;
* Produce beautiful pictures, and we all love pictures: matplotlib, seaborn, etc.;
* Free as in "Free Beer" or "Free Speech": Open source! You do not have to pay for it and can contribute to the libraries. Central for science.

I won't discuss in details why, some did it better than I would ever do [there](https://www.stat.washington.edu/~hoytak/blog/whypython.html) or [there](http://sjbyrnes.com/?page_id=67).
There are many other alternatives, but to my mind none of them does have all the advantages listed above yet -- perhaps in the next future with [Julia](http://julialang.org/) for instance that also can run in ipython notebook.
In any cases, this is really by far better than Matlab -- we hate the dinosaur Matlab with its painful and expensive closed source business -- see [here](http://www.pyzo.org/python_vs_matlab.html) or [here](https://www.linkedin.com/pulse/matlab-vs-python-jan-rhebergen).

At [the end of this page](#install), you can find the explanation how to install it.


## Some Tutorials, Useful Links, Additional Information

If you are new to Python, I advise you to follow the online course at [codeacademy](www.codeacademy.com).
After registration you can choose to follow the python course.

After that, try playing around with tutorial ipython notebooks that you can download on your computer and use.
For instance [Patrick Varilly](https://github.com/patvarilly/dihub-python-for-data-scientists-2015) produced a series of [notebooks](https://github.com/patvarilly/dihub-python-for-data-scientists-2015/tree/master/notebooks) to learn how to manipulate data, use the libraries and plot things.
Learning by doing is the better way.

You will make a lot of use of [numpy](http://www.numpy.org/) and [scipy](http://scipy.org/) as well as [matplotlib](http://matplotlib.org/), the library for scientific programing.
Here also, learn by the examples -- in particular for plots there are [thousands of them](http://matplotlib.org/examples/index.html).
However, if you need exact documentation about one or the other function, look at [numpy reference](http://docs.scipy.org/doc/numpy/reference/index.html),[scipy reference](http://docs.scipy.org/doc/scipy/reference/) or [matplotlib reference](http://matplotlib.org/contents.html).


Couple of tutorials:

* [Numpy](http://www.python-course.eu/numpy.php) a little bit outdated
* [Numpy/Scipy/Matplotlib](http://cs231n.github.io/python-numpy-tutorial/)



More advanced courses:

* [Official Python 3.4 tutorial](https://docs.python.org/3.4/tutorial/)
* [Learn Python the Hard Way](http://learnpythonthehardway.org/book/)
* [Python course by google](https://developers.google.com/edu/python/set-up) excellent but you will need vpn to access
* Otherwise look at online courses provided by universities -- I personally do not like to follow a course on video in particular programing


Finally, there are many ipython notebooks online where you can learn about different topic.
[Here](https://github.com/ipython/ipython/wiki/A-gallery-of-interesting-IPython-Notebooks) is a -- not fully up to date -- list of notebooks classified by topics.


BE AWARE: that there are some small differences between Python 2 and 3, the main one being

> print "Hello" # for python 2  
> print("Hello") # for python 3

So if you download a notebook, it may happen that it is not fully compatible with your version so you will have to debug a little bit.


## Install

The easiest way to get Python together with all the useful libraries as well as the GUI interfaces is to install [Anaconda](https://www.continuum.io/why-anaconda)

### You're a Micro$$oft Windows user:

1. Download the [Anaconda installer](https://www.continuum.io/downloads) for windows by choosing Python 3.4 and the version for your computer 32-bits or 64-bits.
2. Double click on the downloaded file, follow instructions
3. Once installed, launch the program anaconda command line and type 

    > pip install seaborn
4. You can now run the program Ipyhon notebook that will open ipython in your browser

### You're a Mac O$$X user:

1. Download the [Anaconda installer](https://www.continuum.io/downloads) for linux by choosing Python 3.4 and the version for your computer 32-bits or 64-bits.
2. Double click on the downloaded file, follow instructions
3. Once installed, launch the program anaconda command line and type 

    > pip install seaborn
4. You can now run the program Ipyhon notebook that will open ipython in your browser

### You're a linux user (Ubuntu distribution $$\geq$$ 14.04)

You can also install anaconda the same way as above.
However you can also set up a virtual environment to isolate what you are doing from the rest of the system as follows:

copy paste in terminal (ctrl+alt+t)

> sudo apt-get install -y python3-dev g++ libblas-dev liblapack-dev gfortran libfreetype6-dev libpng-dev

Then install globally virtual environment by typing

> sudo pip install -y virtualenv virtualenvwrapper

and create a virtualenv in the directory ipython where you will be working

> virtualenv --no-site-packages ipython

Activate the virtualenv 

> cd ipython  
> source ./bin/activate

And then install what is needed

> pip install numpy scipy matplotlib ipython[all] patsy pandas statmodels scikit-learn seaborn

That's pretty much it, close the terminal.

Inside the directory IPyhton, you can create a directory `_notebook` where you will store and organize your notebooks.
To run ipython from this directory you go in a terminal, activate the virtual environment, move to the directory `_notebook`, and run ipython notebook:

> cd ipython  
> source ./bin/activate  
> cd _notebook  
> ipython notebook


