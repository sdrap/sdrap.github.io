# Partial Differential Equations

Partial differential equations are an extension of ODE where the evolution depends not only on time but takes into account the environment values in a neighborhood.

The most prominent example of which is the diffusion of temperature in space which in its simplest form (one dimensional) is given by

\\\[ \\partial\_t u = \\frac{1}{2}\\partial\_{xx} u \\\]

This equation involves the second derivative for which we will consider the central difference:

\\\[ \\begin{equation\*} f^{\\prime\\prime}(x) \\approx \\frac{f(x+h) + f(x-h) - f(x)}{2 h^2} \\end{equation\*} \\\]
