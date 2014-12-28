
var gulp = require('gulp');
var swig = require('gulp-swig');
var path = require('path');
var api = require('jxnblk-api');

gulp.task('swig', function() {
  var options = {
    setup: function(swig) {
      swig.setDefaults({
        loader: swig.loaders.fs(path.resolve(__dirname, './templates'))
      });
    },
    defaults: {
      cache: false
    },
    data: api
  };
  gulp.src([
      './templates/**/*.html',
      '!./templates/partials/**/*',
      '!./templates/layouts/**/*'
    ])
    .pipe(swig(options))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', ['swig'], function() {
  gulp.watch(['./templates/**/*'], ['swig']);
});

gulp.task('default', ['watch']);

