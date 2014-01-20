# Static Site Starter

A skeleton for quickly starting a new static site. It uses [Grunt](http://gruntjs.com/) to run all of the following tasks: [Jekyll](http://jekyllrb.com/) to generate static pages and run a web server, [SASS](http://sass-lang.com/)/[Bourbon](http://sass-lang.com/) to facilitate rapid CSS, and Grunt concatenates and minifies JS files, compresses images and reloads the browser when changes are detected.

## Installing Dependencies

You need to have Ruby and Node JS installed for the dependencies to work. If you're running OSX you most likely have Ruby installed already. If not, or if you need the latest and greatest, go [here](https://www.ruby-lang.org/en/downloads/). Installers for Node JS can be found [here](http://nodejs.org/download/).

### Installing Jekyll & SASS using Bundler:

```shell
cd static-site-starter
bundle install
```

### Installing Jekyll & SASS without Bundler:

```shell
gem install jekyll
gem install sass
```

### Installing Grunt:

```shell
npm install -g grunt-cli
```

### Installing Grunt modules:

```shell
cd static-site-starter
npm install
```

## Watching files and running a server

```shell
rake server
```

This will run a server for the project that can be accessed at [http://localhost:4000](http://localhost:4000). Changes to files will tell Jekyll/Grunt to automatically rebuild the site. Grunt will also run and compile SASS to CSS, compress images, compile/minify JS and compress images when it detects changes to any of these types of files.