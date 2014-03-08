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
          cwd: 'assets/src/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/build/img/'
        }]
      }
    },
    watch: {
      css: {
        files: ['assets/src/scss/**/*.scss'],
        tasks: ['sass'],
      },
      js: {
        files: ['assets/src/js/**/*.js'],
        tasks: ['concat', 'uglify'],
      },
      img: {
        files: ['assets/src/img/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'concat', 'uglify', 'imagemin', 'watch']);
  grunt.registerTask('build', ['sass', 'concat', 'uglify', 'imagemin']);

};