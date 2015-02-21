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

    var sourcefile = p.src + p.provider + '/ext_tables.php';
    var buildfile = p.dist + '/' + conf.extkey;

    var ext_tables = [

      '<?php',
      'if (!defined(\'TYPO3_MODE\')) {',
      '\t die (\'Access denied.\');',
      '}',
      '',
      'TYPO3\\CMS\\Core\\Utility\\ExtensionManagementUtility::addStaticFile($_EXTKEY, \'Configuration/TypoScript\', \'<%= conf.briefTitle %>\');',
      'Tx_Flux_Core::registerProviderExtensionKey(\'<%= conf.extkey %>\', \'Page\');',
      'Tx_Flux_Core::registerProviderExtensionKey(\'<%= conf.extkey %>\', \'Content\');'

    ].join('\n');

    gulp.src( sourcefile )
      .pipe(header(ext_tables, { conf: conf } ))
      .pipe(gulp.dest( buildfile ));

    };
};
