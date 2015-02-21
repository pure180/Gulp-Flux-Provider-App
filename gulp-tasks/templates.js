var conf = require('./config.json');
var p = require('./src.json');

if(p.in_development === true) {
  p.dist = './ext';
} else {
  p.dist = '../ext';
}

module.exports = function (gulp, plugins) {

  return function () {

    var sourcefile = {
      templates : p.src + p.provider + p.resources + p.private + p.templates + '/**/*.html',
      layouts : p.src + p.provider + p.resources + p.private + p.layouts + '/**/*.html'
    };

    var buildfile = {
      templates : p.dist + '/' + conf.extkey + p.resources + p.private + p.templates,
      layouts: p.dist + '/' + conf.extkey + p.resources + p.private + p.layouts
    };

    var templates = gulp.src(sourcefile.templates).pipe(gulp.dest( buildfile.templates ));
    var layouts = gulp.src(sourcefile.layouts).pipe(gulp.dest( buildfile.layouts ));

    return templates, layouts;

  };
};
