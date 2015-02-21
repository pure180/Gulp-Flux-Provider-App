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

  var sourcefile = p.src + p.provider + p.configuration + p.typoscript + '/constants.txt';
  var buildfile = p.dist + '/' + conf.extkey + p.configuration + p.typoscript;

  var constants = [
    'plugin.tx_<%= conf.extkey %>.view {',
    	'\ttemplateRootPath = EXT:<%= conf.extkey %>/Resources/Private/Templates/',
    	'\tpartialRootPath = EXT:<%= conf.extkey %>/Resources/Private/Partials/',
    	'\tlayoutRootPath = EXT:<%= conf.extkey %>/Resources/Private/Layouts/',
    '}',
  ].join('\n');

  return gulp.src( sourcefile )
    .pipe(header(constants, { conf: conf } ))
    .pipe(gulp.dest( buildfile ));
  };
};
