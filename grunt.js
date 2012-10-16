/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
    }
  });

  // External tasks
  grunt.loadNpmTasks('grunt-buster');

  // Tasks
  grunt.registerTask('test', 'lint buster');

};
