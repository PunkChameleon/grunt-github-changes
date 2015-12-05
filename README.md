# grunt-github-changes

> Grunt plugin to generates changelog using Github Changes

[![NPM](https://nodei.co/npm/grunt-github-changes.png)](https://nodei.co/npm/grunt-github-changes/)

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-github-changes --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-github-changes');
```

## The "githubChanges" task

### Overview
In your project's Gruntfile, add a section named `githubChanges` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  githubChanges: {
    dist : {
      options: {
        // Owner and Repository options are mandatory
        owner : 'PunkChameleon',
        repository : 'grunt-github-changes'
      }
    }
})
```

### Options

All options that are valid with [github-changes](https://github.com/lalitkapoor/github-changes) can be used here.

### Usage Examples

####  Using Options in task

The only necessary fields are owner and repository, and the rest are optional. Below is how they can be passed in if desired. For more documentation on each field see the [github-changes](https://github.com/lalitkapoor/github-changes) repo.

```js
grunt.initConfig({
  githubChanges: {
    dist : {
      options: {
        owner : 'PunkChameleon', // MANDATORY
        repository : 'grunt-github-changes', // MANDATORY
        branch : '', // optional string
        tagName : '',// optional string
        auth : false, // optional boolean
        token : '', // optional string
        file : '', // optional string
        verbose : false, // optional boolean
        host : '', // optional string
        pathPrefix : '', // optional string
        noMerges : false, // optional boolean
        onlyMerges : false, // optional boolean
        onlyPulls : false, // optional boolean
        useCommitBody : false, // optional boolean
        orderSemver : false // optional boolean
      }
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 Nick Weingartner. Licensed under the MIT license.
