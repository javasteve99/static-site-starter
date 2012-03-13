Static Site Starter
===================

A skeleton for quickly starting a new static site. It's built on HTML5 Boilerplate, and includes Sass and Bourbon to facilitate rapid writing of CSS and CSS3.

_If you're thinking "Hey, there used to be a lot more stuff in this" then you're probably looking for the [Static Prototyping Framework] (https://github.com/javasteve99/static-prototyping-framework) instead. This grew beyond it's original purpose pretty quickly, so I split the project._

Sass
----
Sass is better CSS and is include to simplify rapid front-end development. For more, see [the Sass homepage](http://sass-lang.com/).

Bourbon
-------
Bourbon is thoughbot's set of Sass mixins, intended to make the use of CSS3 properties faster. For more, see [Bourbon's GitHub repo](https://github.com/thoughtbot/bourbon).

Using Sass/Bourbon
-------------------------
Watch Sass stylesheet and require Bourbon:

    sass --watch stylesheets/sass:stylesheets -r ./stylesheets/sass/bourbon/lib/bourbon.rb
