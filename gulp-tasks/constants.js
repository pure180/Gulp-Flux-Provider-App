var header = require('gulp-header');
var pkg = require('../src/t3ProviderConf.json');
var srcmap = require('./src.json');

module.exports = function (gulp, plugins) {
  return function () {

  var constants = [
    'plugin.tx_<%= pkg.extkey %>.view {',
    	'\ttemplateRootPath = EXT:<%= pkg.extkey %>/Resources/Private/Templates/',
    	'\tpartialRootPath = EXT:<%= pkg.extkey %>/Resources/Private/Partials/',
    	'\tlayoutRootPath = EXT:<%= pkg.extkey %>/Resources/Private/Layouts/',
    '}',
  ].join('\n');

  return gulp.src( srcmap.t3path.Configuration + '/TypoScript/constants.txt' )
    .pipe(header(constants, { pkg: pkg } ))
    .pipe(gulp.dest( srcmap.path.dist + '/' + pkg.extkey + '/Configuration/TypoScript'));
  };
};
