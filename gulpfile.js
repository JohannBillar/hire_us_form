var gulp   = require('gulp'),
   gutil   = require('gulp-util'),
   concat  = require('gulp-concat'),
   compass = require('gulp-compass');

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
    .pipe(gulp.dest('builds/development/css'));
});

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('builds/development/js'));
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch('components/sass-boilerplate/stylesheets/**/*.scss', ['compass']);
});

gulp.task('default', ['log', 'js', 'compass', 'watch']);

