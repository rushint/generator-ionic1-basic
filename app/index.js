'use strict';

var yeoman = require( 'yeoman-generator' );
var chalk  = require( 'chalk' );
var yosay  = require( 'yosay' );
var path   = require( 'path'  );

// var appPath = path.join(process.cwd(), 'app');

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.pkg = require('../package.json');
    },

    prompting: {
        askForNames: function askForNames() {
            var done = this.async();

            this.log(yosay(
                'Welcome to the ' + chalk.red('ionic-basic') + ' generator. Shall We Build Ap App?'
            ));

            var prompts = [{
                type: 'input',
                name: 'appName',
                message: 'What\'s the app name?',
                default : this._.dasherize(this.appname)              // Defaults to current folder name
            },
            {
                type: 'input',
                name: 'userName',
                message: 'The author\'s name? (for config files)',
                default : this.user.git.name || 'Your Name'
            },
            {
                type: 'input',
                name: 'userMail',
                message: 'Author email? (for config files)',
                default : this.user.git.email || 'my.email@example.com'
            }];

            this.prompt(prompts, function(props) {
                this.appName = props.appName;
                this.userName = props.userName;
                this.userMail = props.userMail;

                done();
            }.bind(this));
        },

        askForAppId: function askForAppId() {
            var done = this.async();

            this.prompt([{
                type: 'input',
                name: 'appId',
                message: 'The app id?',
                default : 'com.' + this._.classify(this.userName).toLowerCase() + '.' + this._.classify(this.appName).toLowerCase()
            }], function (props) {
                this.appId = props.appId;
                done();
            }.bind(this));
        }
    },

    writing: {
        setup: function () {
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'),
                {
                    appName: this._.dasherize(this.appName)
                }
            );
            this.fs.copyTpl(
                this.templatePath('_bower.json'),
                this.destinationPath('bower.json'),
                {
                    appName: this._.dasherize(this.appName)
                }
            );
            this.fs.copyTpl(
                this.templatePath('_ionic.config.json'),
                this.destinationPath('ionic.config.json'),
                {
                    appName: this._.dasherize(this.appName)
                }
            );
            this.fs.copyTpl(
                this.templatePath('_config.xml'),
                this.destinationPath('config.xml'),
                {
                    appName: this.appName,
                    userName: this.userName,
                    userEmail: this.userMail,
                    widgetId: this.appId
                }
            );

            this.fs.copy(
                this.templatePath('gulpfile.js'),
                this.destinationPath('gulpfile.js')
            );
            this.fs.copy(
                this.templatePath('gulp.config.js'),
                this.destinationPath('gulp.config.js')
            );
            this.fs.copy(
                this.templatePath('karma.conf.js'),
                this.destinationPath('karma.conf.js')
            );

            // Hidden files
            this.fs.copy(
                this.templatePath('bowerrc'),
                this.destinationPath('.bowerrc')
            );
            this.fs.copy(
                this.templatePath('editorconfig'),
                this.destinationPath('.editorconfig')
            );
            this.fs.copy(
                this.templatePath('gitignore'),
                this.destinationPath('.gitignore')
            );
            this.fs.copy(
                this.templatePath('jshintrc'),
                this.destinationPath('.jshintrc')
            );
            this.fs.copy(
                this.templatePath('jscsrc'),
                this.destinationPath('.jscsrc')
            );
        },

        projectfiles: function () {
            this.directory('hooks', 'hooks');
            this.directory('resources', 'resources');
            this.directory('src', 'src');
            this.directory('www', 'www');

            // this.mkdir('app/icons');
            // this.mkdir('app/images');
            // this.mkdir('resources');

            // this.fs.copyTpl(
            // this.templatePath('index.html'),
            // this.destinationPath('app/index.html'),
            // { title: this.appName, ngModulName: this._.classify(this.appName)  }
            // );
            //
            // this.fs.copyTpl(
            // this.templatePath('home.html'),
            // this.destinationPath('app/templates/views/home.html'),
            // { title: this.appName }
            // );
            //
            // // controllers
            // this.fs.copyTpl(
            //   this.templatePath('scripts/homeController.js'),
            //   this.destinationPath('app/scripts/controllers/homeController.js'),
            //   { ngModulName: this._.classify(this.appName) }
            // );
            //
            // this.fs.copyTpl(
            //   this.templatePath('scripts/mainController.js'),
            //   this.destinationPath('app/scripts/controllers/mainController.js'),
            //   { ngModulName: this._.classify(this.appName) }
            // );
            //
            // this.fs.copyTpl(
            //   this.templatePath('scripts/settingsController.js'),
            //   this.destinationPath('app/scripts/controllers/settingsController.js'),
            //   { ngModulName: this._.classify(this.appName) }
            // );
            //
            // // services
            // this.fs.copyTpl(
            //   this.templatePath('scripts/ExampleService.js'),
            //   this.destinationPath('app/scripts/services/ExampleService.js'),
            //   { ngModulName: this._.classify(this.appName) }
            // );
            //
            // this.fs.copyTpl(
            //   this.templatePath('scripts/ApiService.js'),
            //   this.destinationPath('app/scripts/services/ApiService.js'),
            //   { ngModulName: this._.classify(this.appName) }
            // );
            //
            // // config
            // this.fs.copyTpl(
            //   this.templatePath('scripts/apiEndpoint.js'),
            //   this.destinationPath('app/scripts/config/apiEndpoint.js'),
            //   { ngModulName: this._.classify(this.appName) }
            // );
            //
            // // utils
            // this.fs.copyTpl(
            //   this.templatePath('scripts/lodash.js'),
            //   this.destinationPath('app/scripts/utils/lodash.js'),
            //   { ngModulName: this._.classify(this.appName) }
            // );
            //
            // // app
            //
            // this.fs.copyTpl(
            //   this.templatePath('scripts/app.js'),
            //   this.destinationPath('app/scripts/app.js'),
            //   { ngModulName: this._.classify(this.appName) }
            // );
            //
            //
            // this.fs.copy(
            // this.templatePath('splash.png'),
            // this.destinationPath('resources/splash.png')
            // );
            //
            // this.fs.copy(
            // this.templatePath('icon.png'),
            // this.destinationPath('resources/icon.png')
            // );
        }
    },

    install: function () {
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    }
});
