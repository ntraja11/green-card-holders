var gulp = require('gulp');
var sass = require('gulp-sass'); 
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
	return gulp.src('scss/gcStyle.scss')
		.pipe(sass())
		.pipe(gulp.dest('deploy/css'))
		.pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('scss/*.scss', ['sass']);
	gulp.watch('**/*.html', browserSync.reload);
	gulp.watch('js/*.js', browserSync.reload);
});

gulp.task('browserSync', function(){
	browserSync.init({
		server:{baseDir: 'deploy'},
	});
});