var header = require('gulp-header');
var pkg = require('../src/t3ProviderConf.json');
var srcmap = require('./src.json');

module.exports = function (gulp, plugins) {
  return function () {

  var ext_emconf = [

    '<?php\n',

    '/***************************************************************',
    ' * Extension Manager/Repository config file for ext "<%= pkg.extkey %>".',
    '*',
    '* Auto generated ' + Date(),
    '*',
    '* Manual updates:',
    '* Only the data in the array - everything else is removed by next',
    '* writing. "version" and "dependencies" must not be touched!',
    '***************************************************************/\n',

    '$EM_CONF[$_EXTKEY] = array(',
      '\t\'title\' => \'<%= pkg.briefTitle %>\',',
      '\t\'description\' => \'<%= pkg.description %>\',',
      '\t\'category\' => \'<%= pkg.category %>\',',
      '\t\'shy\' => <%= pkg.shy %>,',
      '\t\'version\' => \'<%= pkg.version %>\',',
      '\t\'dependencies\' => \'<%= pkg.dependencies %>\',',
      '\t\'conflicts\' => \'<%= pkg.conflicts %>\',',
      '\t\'priority\' => \'<%= pkg.priority %>\',',
    	'\t\'loadOrder\' => \'<%= pkg.loadOrder %>\',',
    	'\t\'module\' => \'<%= pkg.module %>\',',
    	'\t\'state\' => \'<%= pkg.state %>\',',
    	'\t\'uploadfolder\' => <%= pkg.uploadfolder %>,',
    	'\t\'createDirs\' => \'<%= pkg.createDirs %>\',',
    	'\t\'modify_tables\' => \'<%= pkg.modify_tables %>\',',
    	'\t\'clearcacheonload\' => <%= pkg.clearcacheonload %>,',
    	'\t\'lockType\' => \'<%= pkg.lockType %>\',',
    	'\t\'author\' => \'<%= pkg.author %>\',',
    	'\t\'author_email\' => \'<%= pkg.author_email %>\',',
    	'\t\'author_company\' => \'<%= pkg.author_company %>\',',
    	'\t\'CGLcompliance\' => \'<%= pkg.CGLcompliance %>\',',
    	'\t\'CGLcompliance_note\' => \'<%= pkg.CGLcompliance_note %>\',',
      '\t\'constraints\' => array(',
        '\t\t\'depends\' => array(',
          '\t\t\t\'typo3\' => \'<%= pkg.typo3 %>\',',
          '\t\t\t\'cms\' => \'<%= pkg.cms %>\',',
          '\t\t\t\'extbase\' => \'<%= pkg.extbase %>\',',
          '\t\t\t\'fluid\' => \'<%= pkg.fluid %>\',',
          '\t\t\t\'flux\' => \'<%= pkg.flux %>\',',

          '\t\t\t\'fluidpages\' => \'<%= pkg.fluidpages %>\',',
          '\t\t\t\'fluidcontent\' => \'<%= pkg.fluidcontent %>\',',
          '\t\t\t\'vhs\' => \'<%= pkg.vhs %>\',',
        '\t\t),',
        '\t\t\'conflicts\' => array(',
        '\t\t),',
        '\t\t\'suggests\' => array(',
        '\t\t),',
      '\t),',
      '\t\'_md5_values_when_last_written\' => \'<%= pkg._md5_values_when_last_written %>\',',
      '\t\'suggests\' => array(',
      '\t),',
    ');',



  ].join('\n');

  return gulp.src( srcmap.t3path.Root + 'ext_emconf.php' )
    .pipe(header(ext_emconf, { pkg: pkg } ))
    .pipe(gulp.dest( srcmap.path.dist + '/' + pkg.extkey ));

    };
};
