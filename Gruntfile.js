/* global module */
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('dev', ['connect', 'watch']);
    grunt.registerTask('default', ['jshint', 'uglify', 'test']);
};
