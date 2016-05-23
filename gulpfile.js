var gulp   = require('gulp'),
   gutil   = require('gulp-util'),
   concat  = require('gulp-concat'),
   compass = require('gulp-compass');

var sassSources = ['components/sass-boilerplate/stylesheets/main.scss'];   

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
    .pipe(gulp.dest('builds/development/css'));
});