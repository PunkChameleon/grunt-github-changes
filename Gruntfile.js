/*
 * grunt-github-changes
 * https://github.com/streetlight/grunt-github-changes
 *
 * Copyright (c) 2014 Nick Weingartner
 * Licensed under the BSD license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Configuration to be run (and then tested).
    github_changes: {
      default_options: {
        options: {
            owner : 'streetlight',
            repository : 'grunt-github-changes',
            file : 'CHANGELOG.md',
            useCommitBody : true
        },
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['github_changes']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
