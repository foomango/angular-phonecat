module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        'pkg': grunt.file.readJSON('package.json'),

        'meta': {
            'jsFilesForTesting': [
                'app/bower_components/angular/angular.js',
                'app/bower_components/angular-route/angular-route.js',
                'app/bower_components/angular-resource/angular-resource.js',
                'app/bower_components/angular-animate/angular-animate.js',
                'app/bower_components/angular-mocks/angular-mocks.js',
                'test/unit/**/*.js'
            ]
        },

        'karma': {
            'development': {
                'configFile': 'test/karma_grunt.conf.js',
                'options': {
                    'files': [
                        '<%= meta.jsFilesForTesting %>',
                        'app/js/**/*.js'
                    ]
                }
            }
        },

        'jshint': {
            'options': {
                'reporter': require('jshint-jenkins-violations-reporter'),
                'reporterOutput': 'test_out/jshint.xml',
                'force': true
            },
            'beforeconcat': ['app/js/**/*.js']
        },

        'concat': {
            'dist': {
                'src': ['app/js/**/*.js'],
                'dest': 'dist/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },

        'uglify': {
            'options': {
                'mangle': false
            },
            'dist': {
                'files': {
                    'dist/<%= pkg.name %>-<%= pkg.version %>.min.js': ['dist/<%= pkg.name %>-<%= pkg.version %>.js']
                }
            }
        }
    });

    grunt.registerTask('test', ['karma:development']);
    grunt.registerTask('build',
        [
            'jshint',
            'karma:development',
            'concat',
            'uglify'
        ]);
};
