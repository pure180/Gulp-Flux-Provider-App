var jade = require('jade');
var gulpjade = require('gulp-jade');
var rename = require('gulp-rename');
var xmlpoke = require('gulp-xmlpoke');
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

    var doctype = [
      '<?xml version=\'1.0\' encoding=\'utf-8\' standalone=\'yes\'?>\n',
    ].join('\n');

    var d = new Date();
    var date = [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-');
    var time = [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
    var fullDate = date + 'T' + time;

    var sourcefile = p.src + p.provider + p.resources + p.private + p.language + '/locallang.jade';
    var buildfile = p.dist + '/' + conf.extkey + p.resources + p.private + p.language;

    return gulp.src( sourcefile )
      .pipe(gulpjade({
        jade: jade,
        pretty: true,
      }))
      .pipe(rename( 'locallang.xml' ))
      .pipe(xmlpoke({
        replacements : [{
          xpath: '//file/@source-language',
          value: conf.language
        }, {
          xpath: '//file/@product-name',
          value: conf.extkey
        },  {
          xpath: '//file/@date',
          value: fullDate
        }]
      }))
      .pipe(header( doctype ))
      .pipe(rename( 'locallang.xlf' ))
      .pipe(gulp.dest( buildfile ));
  };
};
