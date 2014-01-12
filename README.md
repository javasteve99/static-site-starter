Static Site Starter
===================

A skeleton for quickly starting a new static site. It includes Jekyll to generate static pages without repetition of code, SASS to facilitate rapid writing of CSS, and Grunt to concatenate and minify JS files.

Installing Dependencies
-----------------------

You should have Ruby and Node JS installed for the dependencies to work. If you're running OSX you most likely have Ruby installed. If not, or if you need the latest and greatest, go [here](https://www.ruby-lang.org/en/downloads/). Installers for Node JS can be found [here](http://nodejs.org/download/).

Install Jekyll (global):
`gem install jekyll`

Install SASS (global):
`gem install sass`

Install Grunt (global):
`npm install -g grunt-cli`

Install Grunt modules (project):
`cd project/root-directory`
`npm install`

Watching files and running a server
-----------------------------------

`rake server`

This will run a server for the project that can be accessed at [http://localhost:4000](http://localhost:4000). Changes to files will tell Jekyll to automatically rebuild the site. SASS will also run and recompile when it detects changes. Grunt will also run and recompile when it detects changes.