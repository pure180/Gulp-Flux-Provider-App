var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var xmlpoke = require('gulp-xmlpoke');
var plugins = require('gulp-load-plugins')();
var debug = require('gulp-debug');

var header = require('gulp-header');
var pkg = require('./src/t3ProviderConf.json');
var srcmap = require('./gulp-tasks/src.json');


// Creates file "ext_tables.php"
gulp.task('ext_tables', require('./gulp-tasks/ext_tables')(gulp, plugins));

// Creates file "ext_emconf.php"
gulp.task('ext_emconf', require('./gulp-tasks/ext_emconf')(gulp, plugins));

// Creates file "./Configuration/TypoScript/setup.txt"
gulp.task('setup', require('./gulp-tasks/setup')(gulp, plugins));

// Creates file "./Configuration/TypoScript/constants.txt"
gulp.task('constants', require('./gulp-tasks/constants')(gulp, plugins));

// Creates file "./Configuration/TypoScript/constants.txt"
gulp.task('createLocallang', require('./gulp-tasks/create_locallang')(gulp, plugins));
gulp.task('changeLocallang', ['createLocallang'], require('./gulp-tasks/change_locallang')(gulp, plugins));
gulp.task('locallang', ['changeLocallang']);

gulp.task('clean', function(cb) {
    del([
        './dist',
        './src/tmp'
      ], cb);
});


gulp.task('create', [
  'ext_tables',
  'ext_emconf',
  'setup',
  'constants',
  'locallang'
]);
