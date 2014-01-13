module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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
    watch: {
      scripts: {
        files: [
          'js/**/*.js'
        ],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'watch']);

};