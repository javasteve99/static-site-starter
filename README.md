Static Site Starter
===================

A skeleton for quickly starting a new static site. It is built on HTML5 Boilerplate and Jekyll and includes Sass and Bourbon to facilitate easy and rapid development.

_If you're thinking "Hey, there used to be a lot more stuff in this" then you're probably looking for the [Static Prototyping Framework] (https://github.com/javasteve99/static-prototyping-framework) instead. This grew beyond it's original purpose pretty quickly, so I split the project._

Sass
----
Sass is better CSS and is include to simplify rapid front-end development. For more, see [the Sass homepage](http://sass-lang.com/).

Bourbon
-------
Bourbon is thoughbot's set of Sass mixins, intended to make the use of CSS3 properties faster. For more, see [Bourbon's GitHub repo](https://github.com/thoughtbot/bourbon).

Jekyll
------
The file structure is set up to use Jekyll. To use it, [install the gem](https://github.com/mojombo/jekyll/wiki/install).
For more on Jekyll, read [the guide](https://github.com/mojombo/jekyll/wiki/usage).

Using Sass/Bourbon and Jekyll
-------------------------
Watch Sass stylesheet and require Bourbon:

    sass --watch stylesheets/sass:stylesheets -r ./stylesheets/sass/bourbon/lib/bourbon.rb

Start the Jekyll server:

    jekyll --server --auto

You can view your running application at [http://localhost:4000](http://localhost:4000).
