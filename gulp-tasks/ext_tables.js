var header = require('gulp-header');
var pkg = require('../src/t3ProviderConf.json');
var srcmap = require('./src.json');

module.exports = function (gulp, plugins) {
  return function () {

    var ext_tables = [

      '<?php',
      'if (!defined(\'TYPO3_MODE\')) {',
      '\t die (\'Access denied.\');',
      '}',
      '',
      'TYPO3\\CMS\\Core\\Utility\\ExtensionManagementUtility::addStaticFile($_EXTKEY, \'Configuration/TypoScript\', \'<%= pkg.briefTitle %>\');',
      'Tx_Flux_Core::registerProviderExtensionKey(\'<%= pkg.extkey %>\', \'Page\');',
      'Tx_Flux_Core::registerProviderExtensionKey(\'extkeyprovider\', \'Content\');'

    ].join('\n');

    gulp.src( srcmap.t3path.Root + 'ext_tables.php' )
      .pipe(header(ext_tables, { pkg: pkg } ))
      .pipe(gulp.dest( srcmap.path.dist + '/' + pkg.extkey ));

    };
};
