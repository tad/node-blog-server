module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-execute');
  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          require: 'babel-core/register'
        },
        src: ['./test/*.js']
      }
    },
    eslint: {
      target:['./test/*.js']
    },
    execute: {
      target: {
        src: ['index.js']
      }
    }
  });
  grunt.registerTask('default', ['eslint','mochaTest', 'execute']);
};
