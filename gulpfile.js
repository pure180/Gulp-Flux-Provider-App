var gulp = require('gulp');
var del = require('del');
var plugins = require('gulp-load-plugins')();

var conf = require('./gulp-tasks/config.json');
var p = require('./gulp-tasks/src.json');

if(p.in_development === true) {
  p.dist = './ext';
} else {
  p.dist = '../ext';
}

// Creates file "ext_tables.php"
gulp.task('ext_tables', require('./gulp-tasks/ext_tables')(gulp, plugins));

// Creates file "ext_emconf.php"
gulp.task('ext_emconf', require('./gulp-tasks/ext_emconf')(gulp, plugins));

// Creates file "composer.json"
gulp.task('composer', require('./gulp-tasks/composer')(gulp, plugins));

// Creates file "./Configuration/TypoScript/setup.txt"
gulp.task('setup', require('./gulp-tasks/setup')(gulp, plugins));

// Creates file "./Configuration/TypoScript/constants.txt"
gulp.task('constants', require('./gulp-tasks/constants')(gulp, plugins));

// Creates file "./Resources/Privat/locallang.xlf"
gulp.task('locallang', require('./gulp-tasks/locallang')(gulp, plugins));

// Creates file "./Resources/Privat/locallang.xlf"
gulp.task('templates', require('./gulp-tasks/templates')(gulp, plugins));

// Creates file "./Resources/Privat/locallang.xlf"
gulp.task('public', require('./gulp-tasks/public')(gulp, plugins));

gulp.task('copy_icon', function(){
  return gulp.src( p.src + p.provider + '/ext_icon.gif')
    .pipe(gulp.dest( p.dist + '/' + conf.extkey ));
});

var sourcefile = p.src + '/empty.js';
var buildfile = p.dist + '/' + conf.extkey + p.classes + p.controller + '/tmp';

gulp.task( 'build_folders', function(){
  return gulp.src( sourcefile )
    .pipe(gulp.dest( buildfile ));
});

gulp.task( 'del_dummies', function(cb) {
  del( buildfile, {force: true}, cb );
});

gulp.task('build_environment', ['build_folders'], function(){
  gulp.start('del_dummies');
});


gulp.task('clean', function(cb) {
    del( p.dist + conf.extkey, {force: true}, cb);
});


gulp.task('create', [
  'build_environment',
  'ext_tables',
  'ext_emconf',
  'composer',
  'setup',
  'constants',
  'locallang',
  'templates',
  'public',
  'copy_icon'
]);

gulp.task('serve', ['clean'], function(){
  gulp.start('create');
});
