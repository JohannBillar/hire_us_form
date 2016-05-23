var gulp   = require('gulp'),
   gutil   = require('gulp-util'),
   concat  = require('gulp-concat'),
   compass = require('gulp-compass'),
   connect = require('gulp-connect');

var sassSources = ['components/sass-boilerplate/stylesheets/main.scss'];   
var jsSources   = [
  'components/scripts/form_validation.js'
];

gulp.task('log', function() {
  gutil.log('Workflow is working!');
});

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass-boilerplate/stylesheets',
      image: 'builds/development/images',
      style: 'expanded'
    })
    .on('error', gutil.log))
    .pipe(gulp.dest('builds/development/css'))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('builds/development/js'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch('components/sass-boilerplate/stylesheets/**/*.scss', ['compass']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'builds/development',
    port: 8001,
    livereload: true
  });
});

gulp.task('default', ['log', 'js', 'compass', 'connect', 'watch']);

