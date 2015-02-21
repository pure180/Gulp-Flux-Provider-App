var header = require('gulp-header');
var conf = require('./config.json');
var p = require('./src.json');

if(p.in_development === true) {
  p.dist = './ext';
} else {
  p.dist = '../ext';
}

module.exports = function (gulp, plugins) {
  return function () {

  var sourcefile = p.src + p.provider + '/composer.json';
  var buildfile = p.dist + '/' + conf.extkey;

  var ext_emconf = [
    '{',
      '\t"name": "<%= conf.name %>",',
      '\t"description": "<%= conf.description %>",',
      '\t"type": "<%= conf.type %>",',
      '\t"version": "<%= conf.version %>",',
      '\t"homepage" : "<%= conf.homepage %>"',
    '}'
  ].join('\n');

  return gulp.src( sourcefile )
    .pipe(header(ext_emconf, { conf: conf } ))
    .pipe(gulp.dest( buildfile ));
    };
};
