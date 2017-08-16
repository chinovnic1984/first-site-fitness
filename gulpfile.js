var gulp = require("gulp"),
	browserSync = require('browser-sync');
	sass = require('gulp-sass');

//Сервер
gulp.task('server', function () {
	browserSync({
		port: 9000,
		server: {
			baseDir: 'app'
		}
	});
});

//Подключаем Sass
gulp.task('sass', function() {
	return gulp.src(['app/sass/*.sass','app/sass/*.scss'])
		.pipe(sass({outputStyle: 'expended'}) .on('error', sass.logError))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream())
});

//Слежка
gulp.task('watch', function () {
	gulp.watch([
		'app/sass/*.sass',
		'app/sass/*.scss'
		],
		['sass']
	);
	gulp.watch([
		'app/*.html',
		'app/js/**/*.js',
		'app/css/**/*.css'
	]) .on('change', browserSync.reload);
});

//Задача по умолчанию	
gulp.task('default', ['server', 'watch']);