# grunt-github-changes

> Grunt plugin to generates changelog using Github Changes

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
    options: {
      // Owner and Repository options are mandatory
      owner : 'streetlight',
      repository : 'grunt-github-changes'
    }
})
```

### Options

All options that are valid with [github-changes](https://github.com/lalitkapoor/github-changes) can be used here.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  github_changes: {
    options: {
      owner : 'streetlight',
      repository : 'grunt-github-changes',
      pullsOnly : true
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Nick Weingartner. Licensed under the BSD license.
