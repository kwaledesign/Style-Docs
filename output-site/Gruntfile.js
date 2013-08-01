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
    },
    requirejs: {
      compile: {
        options: {
          name: "js/main",
          baseUrl: ".",
          mainConfigFile: "js/main.js",
          out: "js/dist/styledocs.js"
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task(s) - those to be run by the command `grunt`.
  grunt.registerTask('default', ['compass']);

};
