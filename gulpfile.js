var gulp = require('gulp'),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload'),
	opn = require('opn');
// Запуск сервера 
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 8080
  });
  opn('http://localhost:8080');
});
// Работа с html 
gulp.task('html', function () {
	gulp.src('app/*.html')
	.pipe(connect.reload());
});
// Работа с css 
gulp.task('css', function () {
	gulp.src('app/css/*.css')
	.pipe(connect.reload()); 
});
// Работа с js 
gulp.task('js', function () {
	gulp.src('app/js/*.js')
	.pipe(connect.reload()); 
});
// Слежка
gulp.task('watch', function () {
	gulp.watch(['app/*.html'], ['html']); gulp.watch(['app/css/*.css'], ['css']); gulp.watch(['app/js/*.js'], ['js']);
});
// Задача по­умолчанию
gulp.task('default', ['connect', 'html', 'css', 'watch']);