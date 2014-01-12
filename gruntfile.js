module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
          'js/libraries/*.js',
          'js/scripts/_scripts1.js',
          'js/scripts/_scripts2.js'
        ],
        dest: 'js/scripts.js'
      }
    },
    uglify: {
      build: {
        src: 'js/scripts.js',
        dest: 'js/scripts.min.js'
      }
    },
    watch: {
      scripts: {
        files: [
          'js/libraries/*.js',
          'js/scripts/*.js'
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