var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');var uglifycss = require('gulp-uglifycss');


gulp.task('default', ['copy-html', 'copy-images', 'scripts', 'styles'], function() {
});

gulp.task('scripts', function() {
	gulp.src('src/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
    
	gulp.src('src/views/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/views/js'));
});

gulp.task('copy-html', function() {
	gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./dist'));
    
	gulp.src('src/views/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./dist/views'));
});

gulp.task('copy-images', function() {
	gulp.src('src/img/*').pipe(imagemin([
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5})
    ]))
		.pipe(gulp.dest('dist/img'));
    
	gulp.src('src/views/images/*').pipe(imagemin([
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5})
    ]))
		.pipe(gulp.dest('dist/views/images'));
});

gulp.task('styles', function() {
	gulp.src('src/css/*.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
        .pipe(uglifycss({
          "maxLineLen": 80,
          "uglyComments": true
        }))
		.pipe(gulp.dest('dist/css'));
    
	gulp.src('src/views/css/*.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
        .pipe(uglifycss({
          "maxLineLen": 80,
          "uglyComments": true
        }))
		.pipe(gulp.dest('dist/views/css'));
});
