const mozjpeg = require('imagemin-mozjpeg');

module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.initConfig({
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: ['assets/js/acme-form.js', 'assets/js/liker_script.js'],
				dest: 'assets/js/all.js',
			},
		},
	});

	grunt.initConfig({
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					'assets/js/all.min.js': ['assets/js/all.js'],
				}
			}
		}
	});

	grunt.initConfig({
		imagemin: {
			static: {
				options: {
					optimizationLevel: 7,
					svgoPlugins: [{removeViewBox: false}],
					use: [mozjpeg()]
				},
				files: {
					'assets/images/logo.min.png': ['assets/images/logo.png'],
				}
			},
		}
	});

	grunt.initConfig({
		cssmin: {
			options: {
				mergeIntoShorthands: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'assets/css/admin-colors.min.css': ['assets/css/admin-colors.css']
				}
			}
		}
	});
}
