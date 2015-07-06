/*
 * grunt-github-changes
 * https://github.com/streetlight/grunt-github-changes
 *
 * Copyright (c) 2014 Nick Weingartner
 * Licensed under the MIT license.
 */

'use strict';

var exec = require('child_process').exec;

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('githubChanges', 'Grunt plugin to run github changes (changelog generator)', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var done = this.async(),
       options = this.options({
        owner : 'owner',
        repository : 'repository',
        branch : null,
        tagName : null,
        auth : null,
        token : null,
        file : null,
        verbose : false,
        host : null,
        pathPrefix : null,
        noMerges : false,
        onlyMerges : false,
        onlyPulls : false,
        useCommitBody : false,
        orderSemver : false
    });

    if (!options.owner || !options.repository) {
        console.error("Owner and Repository fields are mandatory");
    }

    var createArgString = function (options) {

        var ghC = require.resolve('github-changes/bin/index.js'),
           owner = '-o '+ options.owner,
           repository = '-r ' + options.repository,
           branch = options.branch ? '-b ' + options.branch : null,
           tagName = options.tagName ? '-n ' + options.tagName : null,
           auth = options.auth ? '-a ' + options.auth : null,
           token = options.token ? '-k ' + options.token : null,
           file = options.file ? '-f ' + options.file : null,
           verbose = options.verbose ? '-v' : null,
           host = options.host ? '--host ' + options.host : null,
           pathPrefix = options.pathPrefix ? '--path-prefix ' + options.pathPrefix : null,
           noMerges = options.noMerges ? '--no-merges' : null,
           onlyMerges = options.onlyMerges ? '--only-merges' : null,
           onlyPulls = options.onlyPulls ? '--only-pulls' : null,
           useCommitBody = options.useCommitBody ? '--use-commit-body' : null,
           orderSemver = options.orderSemver ? '--order-semver' : null;

        return [
            JSON.stringify(process.execPath),
            JSON.stringify(ghC),
            owner,
            repository,
            branch,
            tagName,
            auth,
            token,
            file,
            verbose,
            host,
            pathPrefix,
            noMerges,
            onlyMerges,
            onlyPulls,
            useCommitBody,
            orderSemver
        ]
        .filter(function(n) { return n != undefined})
        .join(" ");
    };

    var command = createArgString(options);
    grunt.verbose.writeln(command);
    var cp = exec(command, {}, function (error) {
        if (!error) {
            console.log("Changelog generated");
            done();
        } else {
            grunt.warn(error);
        }
    });

    var captureOutput = function (child, output) {
        child.pipe(output);
    };

    captureOutput(cp.stdout, process.stdout);

  });

};
