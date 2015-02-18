var header = require('gulp-header');
var pkg = require('../src/t3ProviderConf.json');
var srcmap = require('./src.json');

module.exports = function (gulp, plugins) {
  return function () {

  var setup = [
    'plugin.tx_<%= pkg.extkey %>.view {',
      '\ttemplateRootPath = {$plugin.tx_<%= pkg.extkey %>.view.templateRootPath}',
      '\tpartialRootPath = {$plugin.tx_<%= pkg.extkey %>.view.partialRootPath}',
      '\tlayoutRootPath = {$plugin.tx_<%= pkg.extkey %>.view.layoutRootPath}',
    '}'
  ].join('\n');

  gulp.src( srcmap.t3path.Configuration + '/TypoScript/setup.txt' )
    .pipe(header(setup, { pkg: pkg } ))
    .pipe(gulp.dest( srcmap.path.dist + '/' + pkg.extkey + '/Configuration/TypoScript'));

    };
};
