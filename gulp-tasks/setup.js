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

  var sourcefile = p.src + p.provider + p.configuration + p.typoscript + '/setup.txt';
  var buildfile = p.dist + '/' + conf.extkey + p.configuration + p.typoscript;

  var setup = [
    'plugin.tx_<%= conf.extkey %>.view {',
      '\ttemplateRootPath = {$plugin.tx_<%= conf.extkey %>.view.templateRootPath}',
      '\tpartialRootPath = {$plugin.tx_<%= conf.extkey %>.view.partialRootPath}',
      '\tlayoutRootPath = {$plugin.tx_<%= conf.extkey %>.view.layoutRootPath}',
    '}'
  ].join('\n');

  return gulp.src( sourcefile )
    .pipe(header(setup, { conf: conf } ))
    .pipe(gulp.dest( buildfile ));

    };
};
