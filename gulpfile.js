var gulp = require('gulp')
	, $ 	 = require('gulp-load-plugins')()

gulp.task('jade', function () {
	gulp.src('src/jade/*.jade')
		.pipe($.plumber())
		.pipe($.jade({ pretty: true }))
		.pipe(gulp.dest('dist'))
})

gulp.task('stylus', function () {
	gulp.src('src/styles/main.styl')
		.pipe($.plumber())
		.pipe($.stylus())
		.pipe(gulp.dest('dist'))
})

gulp.task('watch', [ 'jade', 'stylus' ], function () {
	gulp.watch('src/jade/**/*.jade', [ 'jade' ])
	gulp.watch('src/styles/**/*.styl', [ 'stylus' ])
})

gulp.task('default', [ 'watch' ])
