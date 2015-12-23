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

$ int 0 to \pi / 2 int 0 to 2\pi int 0 to 1 of \rho^2 sin\phi d\rho d\theta d\phi

In LaTeX, this would be written as:

     \int_0^{\frac{\pi}{2}}\int_0^{2\pi}\int_0^1 d\rho^2 sin\phi d\rho d\theta d\phi

While the two are exactly the same length in characters, the LaTeX expression is much more difficult to type. On top of that, if you consider the fact that the LaTeX expression won't do anything unless it's inside an equation, the document is set up properly, etc. then you begin to see how NoTeX can save some time.

NoTeX is also designed to ready somewhat like how you'd actually read mathematical notation. This means that what you're typing is going to be quite similar to what the lecturer is saying. This minimizes the obnoxious mental task of translating the lecturers words into a typesetting language and allows you to focus on understanding the material while you copy it down for future reference.

### Flexibility

LaTeX can be quite fussy sometimes. Miss one curly brace, and your entire document breaks. While forcing you to follow a rigourous syntax is usually a good thing, it's not that great when you don't have time to stop and make everything perfect. NoTeX is much less particular. It has a variety of different safety nets for you, so that even if you don't use exactly the right syntax, there's a good chance your notes will come out how you expected them to.

The worst case scenario is that you severly mess something up, and you don't have time to go back and fix it. We've got you covered there too. Even if a block of math doesn't compile correctly, the rest of your notes (your other math blocks, markdown, etc.) will still display for you so you can carry on and fix your mistake at a later time.

### But LaTeX is so Pretty! Why would I want to use NoTeX?

We completely agree! (about the first part) LaTeX is pretty! That's why everything you write in NoTeX, including the markdown, can be compiled straight to LaTeX when you're done writing your notes. This allows you to go back, and make everything absolutely perfect when you don't need to be typing a thousand miles a minute. 

### More Documentation

The rest of the documentation is available in the NoTeX format in the .notex readme file. Feel free to take a look there for more information!

