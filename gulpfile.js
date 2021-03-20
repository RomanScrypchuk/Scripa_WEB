const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const cssnano = require ('gulp-cssnano'),
	autoprefixer = require ('gulp-autoprefixer'), 
	imagemin = require ('gulp-imagemin'),
	concat = require ('gulp-concat'),
	uglify = require ('gulp-uglify'),
	rename = require ('gulp-rename');

gulp.task('hello', function(done) {
	console.log('Hello world!')
	done()
});

gulp.task ( 'html', function (done) {
    return gulp.src ( 'src/*.html')
    .pipe (gulp.dest ( 'dist'));
	done()
});

gulp.task ( 'sass', function (done) {
    return gulp.src ( 'app/sass/*.sass')
        .pipe (concat ( 'styles.sass'))
        .pipe (sass ())
        .pipe (gulp.dest ( 'app/css'))
        .pipe(browserSync.reload({
      	stream: true
    	}))
        .pipe (autoprefixer ({
            browsers: [ 'last 2 versions'],
            cascade: false
        }))
        .pipe (cssnano ())
        .pipe (rename ({suffix: '.min'}));
	done()
});

gulp.task ( 'appipts', function (done) {
    return gulp.src ( 'app/js/*.js')
        .pipe (concat ( 'appipts.js'))
        .pipe (uglify ())
        .pipe (rename ({suffix: '.min'}))
        .pipe (gulp.dest ( 'dist/js'));
	done()
});

gulp.task ( 'imgs', function (done) {
    return gulp.src ( 'app/images/*.+(jpg|jpeg|png|gif)')
        .pipe (imagemin ({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true
        }))
        .pipe (gulp.dest ( "dist/images"))
	done()
});

gulp.task ('watch', function(){
	browserSync.init({
        watch: true,
		server: {
			baseDir: 'app'
    	},
  	});
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/js/*.js').on('change', browserSync.reload);
    gulp.watch('app/sass/*.sass', gulp.series('sass'));
    gulp.watch('app/images/*.+(jpg|jpeg|png|gif)').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('watch'));