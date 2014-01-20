module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/build/css/application.css': 'assets/src/scss/application.scss'
        }
      }
    },
    concat: {
      dist: {
        src: [
          'assets/src/js/libs/*.js',
          'assets/src/js/vendor/*.js',
          'assets/src/js/modules/*.js'
        ],
        dest: 'assets/build/js/application.js'
      }
    },
    uglify: {
      build: {
        src: 'assets/build/js/application.js',
        dest: 'assets/build/js/application.min.js'
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          src: ['assets/src/img/*.{png,jpg,gif}'],
          dest: 'assets/build/img/'
        }]
      }
    },
    exec: {
      serve: {
        cmd: 'jekyll serve --watch'
      }
    },
    watch: {
      css: {
        files: ['assets/src/scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        }
      },
      js: {
        files: ['assets/src/js/**/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        },
      },
      img: {
        files: ['assets/src/img/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
          spawn: false,
        },
      },
      livereload: {
        files: [
          'assets/build/**/*',
          '*.html'
          ],
        options: {
          livereload: true,
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['sass', 'concat', 'uglify', 'imagemin', 'exec:serve', 'watch']);

};