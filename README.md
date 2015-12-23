# Welcome to NoTeX!

Notex is a super simplistic, and super useful program for creating typeset documents on the fly. Note taking in classes demands speed, and if you aren't a LaTeX genie, typesetting notes can be far too slow. That's where NoTeX comes in! NoTeX is a simple language for typesettings notes on mathematics, physics, computer science, what have you. It's designed to be as easy to use in a classroom setting as possible.

### Nomenclature

The name NoTeX is used to refer to both the chrome app which contains the editor, and the language which all .notex files are written in. 

### (Github Flavoured) Markdown Support

LaTeX is great for math, but when it comes to typesetting just plain english, it can be somewhat cumbersome. That's why NoTeX allows you to write anything that's not en equation as if you were just writing in markdown. In a class, there's no time to deal with all of LaTeX's excess formatting options. With markdown, you can simply type and go. All the features of markdown you know and love are supported. On top of all this, when you compile your project to LaTeX, your markdown sections get compiled to LaTeX with the same styling as the rendered markdown had.

### Writing Equations With Ease

While the array of options for typesetting equations LaTeX provides is incredibly useful when writing a dissertation for example, it can be extremely overwhelming and verbose, making it hard to use quickly. NoTeX provides a much simpler syntax for notetaking which removes a lot of the bells and whistles LaTeX gives you in favor of speed. NoTeX also aims to use less awkward keys and weird constructs (we're looking at you curly braces) opting instead for easy to type keywords and simple mathematical symbols.

Need to write a complex integral? No problem.

     int 0 to \pi / 2 int 0 to 2\pi int 0 to 1 of \rho^2 sin\phi d\rho d\theta d\phi
     
Which produces this beauty:

![Equation](http://i.imgur.com/v68UZvz.png)

In LaTeX, this would be written as:

     \int_0^{\frac{\pi}{2}}\int_0^{2\pi}\int_0^1 d\rho^2 sin\phi d\rho d\theta d\phi

While the two are exactly the same length in characters, the LaTeX expression is much more difficult to type. On top of that, if you consider the fact that the LaTeX expression won't do anything unless it's inside an equation, the document is set up properly, etc. then you begin to see how NoTeX can save some time.

NoTeX is also designed to ready somewhat like how you'd actually read mathematical notation. This means that what you're typing is going to be quite similar to what the lecturer is saying. This minimizes the obnoxious mental task of translating the lecturers words into a typesetting language and allows you to focus on understanding the material while you copy it down for future reference.

### Flexibility

LaTeX can be quite fussy sometimes. Miss one curly brace, and your entire document breaks. While forcing you to follow a rigourous syntax is usually a good thing, it's not that great when you don't have time to stop and make everything perfect. NoTeX is much less particular. It has a variety of different safety nets for you, so that even if you don't use exactly the right syntax, there's a good chance your notes will come out how you expected them to.

The worst case scenario is that you severly mess something up, and you don't have time to go back and fix it. We've got you covered there too. Even if a block of math doesn't compile correctly, the rest of your notes (your other math blocks, markdown, etc.) will still display for you so you can carry on and fix your mistake at a later time.

### But LaTeX is so Pretty! Why would I want to use NoTeX?

We completely agree! (about the first part) LaTeX is pretty! That's why everything you write in NoTeX, including the markdown, can be compiled straight to LaTeX when you're done writing your notes. This allows you to go back, and make everything absolutely perfect when you don't need to be typing a thousand miles a minute. 

<<<<<<< HEAD
### But What if I REALLY Need to Write Something in LaTeX?

Fine then. If you really don't like our language that much. (just kidding, we know you love it)

In all seriousness though, if there's something you need to do which is either not yet supported by NoTeX, or you don't yet know the NoTeX command for, all you need to do is type \\latex on a new line, then your latex code, then \\end.

## NoTeX Math Language Documentation

Below is the documentation for all of the basic features of the NoTeX math language.

To write an equation in NoTeX format, simply prefix a line with a dollar sign ($).

e.g.

     $ This line is now being parsed as a NoTeX equation.

Any lines parsed with the math parser will be put in an equation block when compiled to LaTeX. So this would compile to:

    begin{equation}
     This line is now being parsed as a NoTeX equation.
    end{equation}

### General Notes

NoTeX is somewhat more sensitive to whitespace then LaTeX is. It uses whitespace to contextualize what you're saying, so break things up where appropriote.

### Symbols

Commonly used mathematical symbols are compiled into their latex equivalents. Some of these map one to one with LaTeX commands, and others are simply useful shortcuts. The list of all these shortcuts is below. You may use the original LaTeX syntax for this as well. (e.g. either \leq or <= will be accepted)

|     NoTeX Syntax      |    NoTeX Alternative   |   Equivalent LaTeX    |
|-----------------------|------------------------|-----------------------|
| >=                    | \geq                   | \geq                  |
| <=                    | \leq                   | \leq                  |
| !=                    | \neq                   | \neq                  |
| ~=                    | \approx                | \approx               |
| dot a                 |                        | \dot{a}               |
| hat a                 | a^                     | \hat{a}               |
| bar a                 |                        | \bar{a}               |
| vec a                 | a@                     | \vec{a}               |
| \x                    |                        | \cross                |
| \inf                  |                        | \infty                |
| '                     | \prime                 | \prime                |
| &#124                 | \mid                   | \mid                  |
| "abc123"              |                        | ``abc123''            |
| sin a                 | sina                   | \sin a                |
| cos a                 | cosa                   | \cos a                |
| tan a                 | tana                   | \tan a                |
| sec a                 | seca                   | \sec a                |
| csc a                 | csca                   | \csc a                |
| cot a                 | cotha                  | \cot a                |
| sinh a                | sinha                  | \sinh a               |
| cosh a                | cosha                  | \cosh a               |
| tanh a                | tanha                  | \tanh a               |
| coth a                | cotha                  | \coth a               |
| asin a                | asina                  | \arcsin a             |
| acos a                | acosa                  | \arccos a             |
| atan a                | atana                  | \arctan a             |

Greek letters and all other symbols are written in exactly the same way they are in LaTeX.
  
     \alpha, \beta, \gamma

### Grouping

Where LaTeX uses curly braces ({}) for grouping expressions, NoTeX uses a combination of parsing via order of operations, whitespace, and parenthesis when you need to manually group things yourself to figure out where you want what. This does mean that in order to use parenthesis in your math, you need to type out \( and \) respectively. While this is a bit of a downside to the system, we found that you end up saving much more time than you loose given that in reality, people don't use parenthesis that much.

### Super and Sub Scripts

Like in LaTeX, you just use ^ for superscript, and _ for subscript. Keep in mind that there can't be a space after your carrot

### Fractions

In NoTeX, we figure out fractions for you, not the other way around. NoTeX uses basic operator prescidence to determine what should be on what side of the fraction, and puts it all together for you!

Here's an example:

    bc / def + 2abc / def = 3abc / def

Which compiles to:

    frac{abc}{def} + \frac{2abc}{def} = \frac{3abc}{def}

Whereas:

    bc / (def + 2abc) / def = 3abc / def

compiles to:
  
    frac{\frac{abc}{def + 2abc}}{def} = \frac{3abc}{def}

This is particularly convenient when working with equations in physics, which have a tendency to involve lots of complicated fractions.

    F@_g = GmM / d^2

is much simpler, and easier to write than

    vec{F}_g = \frac{GmM}{d^2}

and both end up producing the same result:

![Equation Two](http://i.imgur.com/WMwZiWt.png)

### Multiplication

There are two ways of typesetting multiplication in NoTeX. To create a multiplication symbol, or in LaTeX, a `\cdot` simply use asterisk (\*).

Easy enough right? Now we get to the second way. To do this, simply use double asterists (\*\*). This also creates a `\cdot`! The difference between the two is in how they're parsed. Double asterisks assumes that it should be executed last in the order of operations (i.e. it has low prescedence).

This means that this:

    bc / def ** abc / def = a^2b^2c^2 / d^2e^2f^2 = \(abc / def\)^2

compiles to:

    frac{abc}{def} \cdot \frac{abc}{def} = \frac{a^2b^2c^2}{d^2e^2f^2} = \left(\frac{abc}{def}\right)^2

while this:

    bc / def * abc / def = a^2b^2c^2 / d^2e^2f^2 = \(abc / def\)^2

compiles to:

    frac{\frac{abc}{def \cdot abc}}{def} = \frac{a^2b^2c^2}{d^2e^2f^2} = \left(\frac{abc}{def}\right)^2

## Advanced Constructs

Now we get into the fun stuff! Advanced constructs are made leagues faster in KaTeX by using a somewhat different structure than LaTeX. Let's dive right in!

### Sums and Productions

Now we get to some more interesting mathematics! Sums and productions! Yay!

We'll only go over sums here, as productions work in the exact same way. Simply replace sum with prod. 

**Basic summation:**

    sum of f(x)

LaTeX:
  
    \sum f(x)

**Sum over some domain:**

    sum x \in S of f(x)

LaTeX:
  
    \sum_{x \in S} f(x)

**Sum over some set of integers in a range:**

    sum i = 0 to \inf of f(i)

LaTeX:

    \sum_{i = 0}^{\infty} f(i)

**Chaining Sums:**

    sum i = 0 to 10 sum j = 0 to 10 sum k = 0 to 10 of i * j * k

LaTeX:

    \sum_{i = 0}^{10} \sum_{j = 0}^{10} \sum_{k = 0}^{10} i \cdot j \cdot k

### Integrals

Integrals are almost exactly the same as sums, but there are a few addition things to take note of!

While this first bit is the same as sums, we'll review anyways for those just skimming the documentation.

**Basic integration:**

    int f(x) dx

LaTeX:

    \int f(x) \, dx

**Integrating over a domain:**

    int D of f(x) \, dx

LaTeX:

    \int_{D} f(x) \, dx

**Bounded Integrals:**

    int a to b of f(x) dx

LaTeX:

    \int_{a}^{b} f(x) \, dx

**Multivariable Integration:**

    iint f(x,y,z) dx dy dz

LaTeX:

    \iiint f(x,y,z) \, dx \, dy \, dz

**Bounded Multivariable Integration:** 

     int a to b int b to c int d to e of f(x,y,z) dx dy dz

LaTeX:

     \int_{a}^{b} \int_{b}^{c} \int_{d}^{e} f(x,y,z) \, dx \, dy \, dz

Nice and easy! All you need to do is chain integrals in the same way you chain sums!

### NoTeX Sample

Want to see NoTeX in action? This entire readme file is also available in NoTeX format! Just take a look at README.notex

