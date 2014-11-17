module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
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
        }
    });

    grunt.registerTask('test', ['karma:development']);
};
