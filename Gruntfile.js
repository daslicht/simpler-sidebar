module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/main.css': 'css/src/main.scss',

                    //themes
                    'css/themes/red.css': 'css/themes/src/red.scss'
                }
            }
        },

        concat: {
            options: {
                separator: '\n',
            },
            dist: {
                src: 'js/src/*.js',
                dest: 'js/built.js',
            },
        },

        uglify: {
            options: {
                mangle: {
                    except: ['jQuery', 'Backbone']
                }
            },
            my_target: {
                files: {
                    'js/built.min.js': ['js/built.js']
                }
            }
        },

        watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['sass', 'concat', 'uglify']);
    grunt.registerTask('devwatch', ['watch'])

};