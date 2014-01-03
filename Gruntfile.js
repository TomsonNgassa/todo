module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['app/js/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

      karma: {

          dev: {
              configFile: 'config/karma.conf.js',
              autoWatch: true
          },

          continuous: {
            singleRun: true,
            configFile: 'config/karma.conf.js',
            reporters: ['dots', 'junit'],
                  junitReporter: {
                  outputFile: 'test-results.xml'
              }
          }
      },
    protractor: {
          options: {
              configFile: "node_modules/protractor/referenceConf.js", // Default config file
              keepAlive: true, // If false, the grunt process stops when the test fails.
              noColor: false, // If true, protractor will not use colors in its output.
              args: {
                  // Arguments passed to the command
              }
          },
          e2e: {
              options: {
                  configFile: "config/protractor.conf.js", // Target-specific config file
                  args: {} // Target-specific arguments
              }
          }
    },

    jshint: {
      files: ['Gruntfile.js', 'app/js/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        //Specify which option to turn off or on
          "boss": true,
          "node": true,
          "strict": true,
          curly: "true",
          eqnull : "true",
          "maxlen": 100,  //issue
          "unused": true,
          "eqeqeq": "true",
          "onecase": "true",
           //"indent":  10,
          //"white": true,
          //"smarttabs": true,
          //"newcap": false,
           "undef":  true,
          //declaring global variable
        globals: {
            "describe"   : false,
            "it"         : false,
            "by"         : false,
            "browser"    : false,
            "expect"     : false,
            "before"     : false,
            "beforeEach" : false,
            "after"      : false,
            "afterEach"  : false,
            "inject"     : false,
            "element"    : false,
            "angular"    : false
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('default', ['jshint','karma:continuous','protractor:e2e','concat', 'uglify']);
  grunt.registerTask('compressAndMinify', ['concat', 'uglify']);

};


