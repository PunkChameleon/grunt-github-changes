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
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    github_changes: {
      default_options: {
        options: {
            owner : 'owner',
            repository : 'repository',
            branch : 'branch',
            tagName : 'tagName',
            auth : 'auth',
            token : 'token',
            file : 'file',
            verbose : false,
            host : 'host',
            pathPrefix : 'pathPrefix',
            noMerges : true,
            onlyMerges : false,
            onlyPulls : true,
            useCommitBody : true,
            orderSemver : false
        },
        files: {
          'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123']
        }
      },
      custom_options: {
        options: {
          separator: ': ',
          punctuation: ' !!!'
        },
        files: {
          'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'github_changes', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
