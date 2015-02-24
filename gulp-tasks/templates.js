var jade = require('jade');
var gulpjade = require('gulp-jade');
var replace = require('gulp-replace');

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
      layouts : p.src + p.provider + p.resources + p.private + p.layouts + '/**/*.jade',
      partials : p.src + p.provider + p.resources + p.private + p.partials + '/**/*.jade',
      templates : p.src + p.provider + p.resources + p.private + p.templates + '/**/*.jade'
    };

    var buildfile = {
      layouts: p.dist + '/' + conf.extkey + p.resources + p.private + p.layouts, 
      templates : p.dist + '/' + conf.extkey + p.resources + p.private + p.templates,
      partials : p.dist + '/' + conf.extkey + p.resources + p.private + p.partials
    };

    function build(source, destination){
      var findfluid = replace( /::/g, '.');
      gulp.src( source )
      .pipe(gulpjade({
        jade: jade,
        pretty: true,
      }))
      .pipe( findfluid )
      .pipe(gulp.dest( destination ));
    }

    var layouts = build(sourcefile.layouts, buildfile.layouts);
    var partials = build(sourcefile.partials, buildfile.partials);
    var templates = build(sourcefile.templates, buildfile.templates);

    return layouts, partials, templates;

  };
};
