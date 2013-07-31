module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
        dist: {
          options: {
            config: 'config.rb'
          }
        }
      }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s) - those to be run by the command `grunt`.
  grunt.registerTask('default', ['compass']);

};
