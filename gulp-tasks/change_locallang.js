var rename = require('gulp-rename');
var xmlpoke = require('gulp-xmlpoke');
var pkg = require('../src/t3ProviderConf.json');
var srcmap = require('./src.json');

module.exports = function (gulp, plugins) {

  return function () {

    var d = new Date();
    var date = [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-');
    var time = [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
    var fullDate = date + 'T' + time;

    return gulp.src('./tmp/build_locallang.xml')
      .pipe(xmlpoke({
        replacements : [{
          xpath: '//file/@source-language',
          value: pkg.language
        }, {
          xpath: '//file/@product-name',
          value: pkg.extkey
        }, {
          xpath: '//file/@date',
          value: fullDate
        }]
      }))
      .pipe(rename( 'locallang.xlf' ))
      .pipe(gulp.dest( srcmap.path.dist + '/' + pkg.extkey + '/Resources/Resources/Language' ));

  };
};
  /**
  return function () {



  var locallang = [
    '<?xml version="1.0" encoding="utf-8" standalone="yes"?>',
    '<xliff version="1.0">',
      '\t<file source-language="<%= pkg.language %>" datatype="plaintext" original="messages" product-name="<%= pkg.extkey %>" date="' + date + 'T' + time + '">',
        '\t\t<header/>',
        '\t\t<body>',
          '\t\t\t<trans-unit id="flux.fluidcontent">',
            '\t\t\t\t<source>Fluid content element example</source>',
          '\t\t\t</trans-unit>',
          '\t\t\t<trans-unit id="flux.fluidpage.description">',
            '\t\t\t\t<source>Description can be entered in LLL file locallang.xlf of extension extensionkey</source>',
          '\t\t\t</trans-unit>',
          '\t\t\t<trans-unit id="flux.fluidpage">',
            '\t\t\t\t<source>Standard fluid page</source>',
          '\t\t\t</trans-unit>',
          '\t\t\t<trans-unit id="flux.fluidpage.description">',
            '\t\t\t\t<source>Description can be entered in LLL file locallang.xlf of extension extensionkey</source>',
          '\t\t\t</trans-unit>',
        '\t\t</body>',
      '\t</file>',
    '</xliff>'
  ].join('\n');



  };
  ** */
