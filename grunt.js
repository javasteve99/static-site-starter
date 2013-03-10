// grunt.js to concat and minify plugins and scripts
module.exports = function(grunt) {

  grunt.initConfig({
    min: {
      dist: {
        src: ['js/_plugin1.js', 'js/_plugin2.js', 'js/_plugin3.js', 'js/_scripts.js']
        dest: 'js/scripts.min.js',
        separator: ';'
      }
    }
  });

  grunt.registerTask('default', 'min watch');

};