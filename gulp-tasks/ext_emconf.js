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

  var sourcefile = p.src + p.provider + '/ext_emconf.php';
  var buildfile = p.dist + '/' + conf.extkey;

  var ext_emconf = [

    '<?php\n',

    '/***************************************************************',
    ' * Extension Manager/Repository config file for ext "<%= conf.extkey %>".',
    '*',
    '* Auto generated ' + Date(),
    '*',
    '* Manual updates:',
    '* Only the data in the array - everything else is removed by next',
    '* writing. "version" and "dependencies" must not be touched!',
    '***************************************************************/\n',

    '$EM_CONF[$_EXTKEY] = array(',
      '\t\'title\' => \'<%= conf.briefTitle %>\',',
      '\t\'description\' => \'<%= conf.description %>\',',
      '\t\'category\' => \'<%= conf.category %>\',',
      '\t\'shy\' => <%= conf.shy %>,',
      '\t\'version\' => \'<%= conf.version %>\',',
      '\t\'dependencies\' => \'<%= conf.dependencies %>\',',
      '\t\'conflicts\' => \'<%= conf.conflicts %>\',',
      '\t\'priority\' => \'<%= conf.priority %>\',',
    	'\t\'loadOrder\' => \'<%= conf.loadOrder %>\',',
    	'\t\'module\' => \'<%= conf.module %>\',',
    	'\t\'state\' => \'<%= conf.state %>\',',
    	'\t\'uploadfolder\' => <%= conf.uploadfolder %>,',
    	'\t\'createDirs\' => \'<%= conf.createDirs %>\',',
    	'\t\'modify_tables\' => \'<%= conf.modify_tables %>\',',
    	'\t\'clearcacheonload\' => <%= conf.clearcacheonload %>,',
    	'\t\'lockType\' => \'<%= conf.lockType %>\',',
    	'\t\'author\' => \'<%= conf.author %>\',',
    	'\t\'author_email\' => \'<%= conf.author_email %>\',',
    	'\t\'author_company\' => \'<%= conf.author_company %>\',',
    	'\t\'CGLcompliance\' => \'<%= conf.CGLcompliance %>\',',
    	'\t\'CGLcompliance_note\' => \'<%= conf.CGLcompliance_note %>\',',
      '\t\'constraints\' => array(',
        '\t\t\'depends\' => array(',
          '\t\t\t\'typo3\' => \'<%= conf.typo3 %>\',',
          '\t\t\t\'cms\' => \'<%= conf.cms %>\',',
          '\t\t\t\'extbase\' => \'<%= conf.extbase %>\',',
          '\t\t\t\'fluid\' => \'<%= conf.fluid %>\',',
          '\t\t\t\'flux\' => \'<%= conf.flux %>\',',

          '\t\t\t\'fluidpages\' => \'<%= conf.fluidpages %>\',',
          '\t\t\t\'fluidcontent\' => \'<%= conf.fluidcontent %>\',',
          '\t\t\t\'vhs\' => \'<%= conf.vhs %>\',',
        '\t\t),',
        '\t\t\'conflicts\' => array(',
        '\t\t),',
        '\t\t\'suggests\' => array(',
        '\t\t),',
      '\t),',
      '\t\'_md5_values_when_last_written\' => \'<%= conf._md5_values_when_last_written %>\',',
      '\t\'suggests\' => array(',
      '\t),',
    ');',



  ].join('\n');

  return gulp.src( sourcefile )
    .pipe(header(ext_emconf, { conf: conf } ))
    .pipe(gulp.dest( buildfile ));

    };
};
