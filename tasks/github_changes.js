/*
 * grunt-github-changes
 * https://github.com/streetlight/grunt-github-changes
 *
 * Copyright (c) 2014 Nick Weingartner
 * Licensed under the BSD license.
 */

'use strict';

var exec = require('child_process').exec;

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('github_changes', 'Grunt plugin to run github changes (changelog generator)', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
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

    function createArgString(options) {
       var ghC = './node_modules/github-changes/bin/index.js',
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
            ghC,
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
        ].join(" ");
    }
    console.log(options);
    console.log(createArgString(options));
    var cp = exec('echo "HELLO"', function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
                if (error !== null) {
                          console.log('exec error: ' + error);
                              }
    });

    var captureOutput = function (child, output) {
        child.pipe(output);
    };

    captureOutput(cp.stdout, process.stdout);
    exec(createArgString(options));

  });

};
