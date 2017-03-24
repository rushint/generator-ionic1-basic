# A [Yeoman](http://yeoman.io) generator for a basic Ionic 1.x Project

This is a yeoman generator for a basic [Ionic 1.x Project](https://github.com/rushint/ionic-basic). It is a basic Ionic app template that sets up everything to get you started with [Ionic](http://ionicframework.com/) with ease.
This generator is currently using Ionic 1.2.4 and Angular 1.4.3.

This is an alternative project structure for the [Ionic Framework](http://ionicframework.com/) demonstrated with the ionic tabs starter.

### Features

* Gulp jobs for development, building, emulating and running your app
* Compiles and concatenates your Sass
* Local development server with live reload, even inside ios emulator
* Automatically inject all your JS sources into `index.html`
* Auto min-safe all Angular DI through `ng-annotate`, no need to use weird bracket notation
* Easily customize Ionic styles from within your Sass
* Comes already with [ng-cordova](http://ngcordova.com/) and [lodash](https://lodash.com) included

### Installation

You should have Yeoman installed globally

```bash
npm install -g yo
```

To install generator-ionic1-basic from npm, run:

```bash
npm install -g generator-ionic1-basic
```

Create a new project folder (e.g. 'myApp') for your app and clone this repository into it.
```bash
$ cd mkdir myApp
```

Finally, initiate the generator:

```bash
yo ionic1-basic
```

just before creating a build, just run:
```bash
ionic state restore
```
to restore the Cordova plugins.

## How this project is structured

All working files are underneath the 'src' folder trying to follow the [angular styleguide](https://github.com/johnpapa/angular-styleguide) created by [johnpapa](https://github.com/johnpapa).

    /src
        /app
        /images
        /lib
        /styles
        index.html


Everything is set up to serve from this src folder using
```bash
$ ionic serve
```

## Build process

This project comes with a before_build hook to run the 'gulp build' task before actually building the app with cordova. The 'gulp build' task concatenates, minifies and copies the files into the 'www' folder from where cordova is loading the files. So you can just use the standard ionic build commands:

```bash
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

## Included gulp tasks

A bunch of useful gulp tasks have been copied from the [HotTowel yeoman generator](https://github.com/johnpapa/generator-hottowel) created by [johnpapa](https://github.com/johnpapa) and modified to work with ionic.

### Task Listing

- `gulp help`

    Displays all of the available gulp tasks.

### Code Analysis

- `gulp vet`

    Performs static code analysis on all javascript files. Runs jshint and jscs.

- `gulp vet --verbose`

    Displays all files affected and extended information about the code analysis.

### Testing

- `gulp test`

    Runs all unit tests using karma runner & jasmine with phantomjs. Depends on vet task, for code analysis.

### Cleaning Up

- `gulp clean`

    Remove all files from the build and temp folders

- `gulp clean-images`

    Remove all images from the build folder

- `gulp clean-code`

    Remove all javascript and html from the build folder

- `gulp clean-fonts`

    Remove all fonts from the build folder

- `gulp clean-styles`

    Remove all styles from the temp and build folders

### Fonts and Images

- `gulp fonts`

    Copy the ionic fonts from source to the build folder

- `gulp images`

    Copy all images from source to the build folder

### Styles

- `gulp styles`

    Compile less files to CSS and copy to the build folder

### Lib Files

- `gulp wiredep`

    Looks up all bower components' main files and JavaScript source code, then adds them to the `index.html`.
    The `.bowerrc` file also runs this as a postinstall task whenever `bower install` is run.

    **NOTE:**
    wiredep will only grab the bower dependencies that are listed in you bower.json file. Use the `--save` flag when installing dependencies via bower to add them to automatically add them to you bower.json file.

### Angular HTML Templates

- `gulp templatecache`

    Create an Angular module that adds all HTML templates to Angular's $templateCache. This pre-fetches all HTML templates saving XHR calls for the HTML.

- `gulp templatecache --verbose`

    Displays all files affected by the task.

### Serving Development Code

- `ionic serve`

    You can us the standard ionic serve task here.


### Building Production Code

- `gulp optimize`

    Optimize all javascript and styles, move to a build folder, and inject them into the new index.html

- `gulp build`

    Copies the ionic fonts, copies images and runs `gulp optimize` to build the production code to the build folder.

**NOTE:** This project contains a before_build hook for cordova which so that the gulp build task is run automatically when building with `cordova build [platfrom]` or `ionic build [platfrom]`

## License

MIT