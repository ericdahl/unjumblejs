/* global module, process */
module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'js/unjumble.js',
                dest: 'build/unjumble.min.js'
            }
        },
        jshint: {
            options: {
                jshintrc: true
            },
            all: ['Gruntfile.js', 'js/*.js', 'tests/**/*.js']
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['tests/**/*.js']
            }
        },
        watch: {
            scripts: {
                options: {
                    atBegin: true
                },
                files: ['js/*.js', 'tests/**/*.js'],
                tasks: ['jshint', 'uglify', 'test']
            }
        },
        connect: {
            server: {
            }
        },
        'saucelabs-mocha': {
            all: {
                options: {
                    build: process.env.TRAVIS_JOB_ID,
                    urls: ['http://localhost:8000/tests/'],
                    detailedError: true,
                    concurrency: 2,
                    browsers: [
                        {browserName: 'chrome'}
//
//                        {browserName: 'firefox'},
//                        {browserName: 'firefox', version: '3.6'},
//                        {browserName: 'safari', version: 7, platform: 'OS X 10.9'},
//                        {browserName: 'safari', version: 6, platform: 'OS X 10.8'},
//                        {browserName: 'safari', version: 5},
//                        {browserName: 'opera', version: 12},
//                        {browserName: 'opera', version: 11},
//                        {browserName: 'internet explorer', version: 11, platform: 'Windows 8.1'},
//                        {browserName: 'internet explorer', version: 10, platform: 'Windows 8'},
//                        {browserName: 'internet explorer', version: 9, platform: 'Windows 7'},
//                        {browserName: 'internet explorer', version: 8, platform: 'XP'},
//                        {browserName: 'internet explorer', version: 7, platform: 'XP'},
//                        {browserName: 'internet explorer', version: 6, platform: 'XP'}
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-saucelabs');
    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('dev', ['connect', 'watch']);
    grunt.registerTask('travis', ['default', 'connect', 'saucelabs-mocha']);
    grunt.registerTask('default', ['jshint', 'uglify', 'test']);
};
