var jade = require('jade');
var gulpjade = require('gulp-jade');
var rename = require('gulp-rename');
var srcmap = require('./src.json');

module.exports = function (gulp, plugins) {

  return function () {
    return gulp.src( srcmap.t3path.Resources + '/Private/Language/build_locallang.jade' )
      .pipe(gulpjade({
        jade: jade,
        pretty: true,
        //extension: '.xml',
        //doctype: 'xml'
      }))
      .pipe(rename( 'build_locallang.xml' ))
      .pipe( gulp.dest( './tmp' ));

  };
};
