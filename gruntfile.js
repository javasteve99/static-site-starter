module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/build/application.css': 'css/sass/application.scss'
        }
      }
    },
    concat: {
      dist: {
        src: [
          'js/libs/*.js',
          'js/vendor/*.js',
          'js/modules/*.js'
        ],
        dest: 'js/build/application.js'
      }
    },
    uglify: {
      build: {
        src: 'js/build/application.js',
        dest: 'js/build/application.min.js'
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['*.{png,jpg,gif}'],
          dest: 'img/build/'
        }]
      }
    },
    watch: {
      css: {
        files: ['css/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        }
      },
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        },
      },
      images: {
        files: ['img/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
          spawn: false,
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'concat', 'uglify', 'imagemin', 'watch']);

};