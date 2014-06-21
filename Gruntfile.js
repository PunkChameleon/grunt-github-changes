/*
 * grunt-github-changes
 * https://github.com/streetlight/grunt-github-changes
 *
 * Copyright (c) 2014 Nick Weingartner
 * Licensed under the MIT license.
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
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    githubChanges: {
      dist: {
        options: {
            owner : 'streetlight',
            repository : 'grunt-github-changes',
            file : 'CHANGELOG.md',
            useCommitBody : true
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['githubChanges']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
