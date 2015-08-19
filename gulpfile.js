'use strict';

var 
  gulp       = require('gulp'),
  gutil      = require('gulp-util'),
  source     = require('vinyl-source-stream'),
  browserify = require('browserify'),
  rimraf     = require('rimraf'),
  jsonServer = require('json-server'),
  reactify   = require('reactify'),
  apiServer  = jsonServer.create(),
  router     = jsonServer.router('db.json'),
  serve      = require('gulp-serve'),
  sass       = require('gulp-sass');

// JS
var bundler = browserify({
  entries: ['./src/app.js'],
  debug: true
});

bundler.on('log', gutil.log); // Output builds log to terminal

gulp.task('clean', function(cb){
  rimraf('build', cb);
});

gulp.task('build', ['clean'], function() {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build'));
});

// Sass
gulp.task('sass', function() {
  return gulp.src('./sass/*.scss')
    .pipe(sass()
        .on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// Servers (Web and API)
apiServer.use(jsonServer.defaults);
apiServer.use(router);

gulp.task('serve:api', function (cb) {
  apiServer.listen(3000, cb);
});

gulp.task('serve:web', ['serve:api'], serve({
  root: ['.'],
  port: process.env.PORT || 8000
}));

gulp.task('serve', ['serve:api', 'serve:web']);

// Watch

gulp.task('watch', ['build'], function () {
  gulp.watch(['src/**/*.js', 'src/**/*.hbs'], ['build']);
  gulp.watch(['./sass/*.scss'], ['sass']);
})

// Default
gulp.task('default', ['serve', 'watch']);