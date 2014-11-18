module.exports = function(config){
  config.set({

    basePath : '../',

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            //'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],
    singleRun : true,
    reporters : ['dots', 'junit'],

    junitReporter : {
      outputFile: 'test_out/unit_dist.xml',
      suite: 'unit'
    }

  });
};
