var gulp = require('gulp');
gulp.task('default', function() {
	gulp.src('./app/css/*.css')
	.pipe(connect.reload());
});