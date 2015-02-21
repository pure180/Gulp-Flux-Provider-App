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
      icons : p.src + p.provider + p.resources + p.public + p.icons + '/**/*.*'
    };

    var buildfile = {
      icons : p.dist + '/' + conf.extkey + p.resources + p.public + p.icons
    };

    var icons = gulp.src(sourcefile.icons).pipe(gulp.dest( buildfile.icons ));

    return icons;

  };
};
