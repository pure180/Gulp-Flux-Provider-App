var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var header = require('gulp-header');
var pkg = require('./src/t3ProviderConf.json');


// Creates file "ext_tables.php"
gulp.task('ext_tables', require('./gulp-tasks/ext_tables')(gulp, plugins));

// Creates file "ext_emconf.php"
gulp.task('ext_emconf', require('./gulp-tasks/ext_emconf')(gulp, plugins));

// Creates file "./Configuration/TypoScript/setup.txt"
gulp.task('setup', require('./gulp-tasks/setup')(gulp, plugins));

// Creates file "./Configuration/TypoScript/constants.txt"
gulp.task('constants', require('./gulp-tasks/constants')(gulp, plugins));

gulp.task('create', [
  'ext_tables',
  'ext_emconf',
  'setup',
  'constants'
]);
