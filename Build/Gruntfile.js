module.exports = function (grunt) {
    require('time-grunt')(grunt);

    grunt.initConfig({
        baseUrl: 'http://lornlass.dev.local',
        directories: {
            extension: '../../',
            bootstrap: 'node_modules/bootstrap-sass/assets/',
            jquery: 'node_modules/jquery/dist/',
            assets: '../Resources/Private/',
            compress: '../Resources/Public/'
        },
        files: {
            sass: {
                main: '<%= directories.assets %>Sass/main.scss'
            },
            javascript: {
                footer: [
                    '<%= directories.jquery %>jquery.js',
                    '<%= directories.bootstrap %>javascripts/bootstrap.js',

                    '<%= directories.assets %>JavaScript/Main.js'
                ]
            }
        },
        sass: {
            files: {
                '<%= directories.compress %>Css/Compiled.css': '<%= files.sass.main %>'
            },
            development: {
                options: {
                    sourceComments: true,
                    sourceMap: false,
                    outputStyle: 'expanded'
                },
                files: '<%= sass.files %>'
            },
            default: {
                options: {
                    outputStyle: 'compressed'
                },
                files: '<%= sass.files %>'
            }
        },
        concat: {
            footer: {
                src: '<%= files.javascript.footer %>',
                dest: '<%= directories.compress %>JavaScript/Footer.js'
            }
        },
        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            build: {
                files: {
                    '<%= directories.compress %>JavaScript/Footer.js': '<%= directories.compress %>JavaScript/Footer.js'
                }
            }
        },
        compress: {
            main: {
                options: {
                    mode: 'gzip',
                    level: 1
                },
                files: [
                    {expand: true, src: ['<%= directories.compress %>JavaScript/*.js'], dest: '', ext: '.js.gz'},
                    {expand: true, src: ['<%= directories.compress %>Css/*.css'], dest: '', ext: '.css.gz'}
                ]
            }
        },
        penthouse: {
            extract : {
                outfile : '<%= directories.compress %>Css/Critical.css',
                css : '<%= directories.compress %>Css/Compiled.css',
                url : '<%= baseUrl %>',
                width : 1300,
                height : 900,
                skipErrors : false
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    '<%= directories.compress %>Css/Critical.css': '<%= directories.compress %>Css/Critical.css'
                }
            }
        },
        watch: {
            sass: {
                files: [
                    '<%= directories.assets %>Sass/**/*.scss'
                ],
                tasks: ['sass:development']
            },
            javascript: {
                files: [
                    '<%= files.javascript.footer %>'
                ],
                tasks: ['concat:footer']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-penthouse');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('development', ['sass:development', 'concat', 'cssmin', 'compress']);
    grunt.registerTask('default', ['sass:default', 'concat', 'uglify', 'penthouse', 'cssmin', 'compress']);
};
