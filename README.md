# Static Site Starter

A skeleton for quickly starting a new static site. It uses [Grunt](http://gruntjs.com/) to concatenate and minify JS files, compress images and recompile assets when changes are detected, [SASS](http://sass-lang.com/)/[Bourbon](http://bourbon.io/) to facilitate rapid CSS, and [Jekyll](http://jekyllrb.com/) to generate static pages and run a web server.

## Installing Dependencies

You need to have Ruby and Node JS installed for the dependencies to work. If you're running OSX you most likely have Ruby installed already. If not, or if you need the latest and greatest, go [here](https://www.ruby-lang.org/en/downloads/). Installers for Node JS can be found [here](http://nodejs.org/download/).

### Installing Grunt:

```shell
npm install -g grunt-cli
```

### Installing Jekyll, SASS & Grunt modules the easy way:

```shell
cd static-site-starter
rake install
```

### Installing Jekyll, SASS & Grunt modules individually:

```shell
cd static-site-starter
gem install jekyll
gem install sass
npm install
```

## Watching files and running a dev server

```shell
rake serve
```

This will run a server for the project that can be accessed at [http://localhost:4000](http://localhost:4000). Changes to files will tell Jekyll/Grunt to automatically rebuild the site. Grunt will also run and compile SASS to CSS, compress images, compile/minify JS and compress images when it detects changes to any of these types of files.

FYI, Grunt and Jekyll don't play nice together sometimes, especially upon initial startup of the server. You're likely to see an unstyled page because the site has been compiled before the assets could be. Just change something and the resulting recompile should make everything fine.

## Just building the site

```shell
rake build
```

If you're just looking for a quick static build of your project files this will run Grunt to compile all assets and then build the site to the /_site directory with Jekyll.

This doesn't seem to suffer from the uncompiled assets problem that running a server does because Jekyll specifically doesn't compile until Grunt has finished.