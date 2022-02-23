module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    sass: {

      // grunt
      dev: {
        files: {
          'css/main.css' : 'sass/*.scss'
        },
        options: {
          style: 'expanded'
        }
      },

      // grunt prod
      prod: {
        files: {
          'css/main.css' : 'sass/*.scss'
        },
        options: {
          style: 'compressed'
        }
      }

    },

    // watch
    watch: {
      sass: {
        files: [
          'sass/**/*.scss'
        ],
        tasks: ['sass:dev']
      }
    }

  });
  grunt.registerTask('default', ['sass:dev']);
  grunt.registerTask('prod', ['sass:prod']);
};