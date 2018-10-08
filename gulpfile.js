let gulp = require('gulp');
let sass = require('gulp-sass');
let nano = require('gulp-cssnano');
let uglify = require('gulp-minify');
let concat = require('gulp-concat');

gulp.task('sass', function() {
	return gulp.src('./assets/scss/main.scss')
		.pipe(sass())
		.pipe(nano())
		.pipe(gulp.dest('./dist/assets/css'))
});

gulp.task('uglify', function() {
	return gulp.src('./assets/js/**/**.js')
		.pipe(concat('main.js'))
		.pipe(uglify({
			ext:{
				min: '.js',
			},
			noSource: true,
		}))
		.pipe(gulp.dest('./dist/assets/js/'))
});

gulp.task('default', function() {
	gulp.watch('./assets/scss/**/**.scss').on('change', gulp.parallel('sass'))
	gulp.watch('./assets/js/**/**.js').on('change', gulp.parallel('uglify'))
});