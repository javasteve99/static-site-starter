# Static Site Starter

A skeleton for quickly starting a new static site. It includes Jekyll to generate static pages without repetition of code and run a web server, SASS to facilitate rapid writing of CSS, and Grunt to concatenate and minify JS files as well as compile the SASS and compress images.

## Installing Dependencies

You should have Ruby and Node JS installed for the dependencies to work. If you're running OSX you most likely have Ruby installed. If not, or if you need the latest and greatest, go [here](https://www.ruby-lang.org/en/downloads/). Installers for Node JS can be found [here](http://nodejs.org/download/).

### Install Jekyll (global):

```shell
gem install jekyll
```

### Install SASS (global):

```shell
gem install sass
```

### Install Grunt (global):

```shell
npm install -g grunt-cli
```

### Install Grunt modules (project):

```shell
cd project/root-directory
npm install
```

## Watching files and running a server

```shell
rake server
```

This will use Jekyll to run a server for the project that can be accessed at [http://localhost:4000](http://localhost:4000). Changes to files will tell Jekyll to automatically rebuild the site. Grunt will run and compile/compress SASS to CSS, compress images, compile/minify JS and compress images when it detects changes to any of these types of files.