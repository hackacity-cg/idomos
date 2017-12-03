var gulp = require('gulp');
var browserSync = require('browser-sync');
var jshint = require('gulp-jshint');
//var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
//var gutil = require('gulp-util');
//var minify = require('gulp-minify');

console.log('OIEEEE CAMBADAAA');
 
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// Definimos o diretorio dos arquivos para evitar repetição futuramente
var js_files = "./src/js/*.js";
var scss_files = "./src/scss/*.scss";
var scss_index =  "./src/scss/app.scss";
 
gulp.task('js', function() { 
	gulp.src(js_files)
  .pipe(concat('./'))
	.pipe(rename('app.js'))
	//.pipe(minify({compress:}))
	.pipe(gulp.dest('./www/'));
	
});

 
 
gulp.task('styles', function() { 
	return gulp
  .src(scss_index)
	.pipe(sass(sassOptions).on('error', sass.logError))
  .pipe(autoprefixer())
	//.pipe(uglify())
	.pipe(gulp.dest('./www/'))
  .pipe(browserSync.reload( {stream:true} ));
	});


// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', function(done) {

  browserSync({
    online: true,
    open: false,
    port: 9000,
    server: {
      baseDir: ['./www'],
      middleware: function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);

});


gulp.task('watch', ['styles', 'js', 'serve'], function() {

  gulp.watch('./www/index.html', browserSync.reload);
  
  gulp.watch(js_files, ['js', browserSync.reload] );

  gulp.watch(scss_files, ['styles'] ).on('change', function(ev){
    console.log('File ' + ev.path + ' was ' + ev.type + ', running tasks...'  )
  });

});
