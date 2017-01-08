const assert = require('assert');
const chalk = require('chalk');
console.log(chalk.white.bold('Running assertions...'));

const testJsVarName = require('../utils').testJsVarName;
assert(typeof testJsVarName, `function`);
assert(testJsVarName('test'), `'test' === true`);
assert(testJsVarName('Test1'), `'Test1' === true`);
assert(testJsVarName('_1Test_TEST'), `'_1Test_TEST' === true`);
assert(!testJsVarName('te-st'), `'te-st' === false`);
assert(!testJsVarName('1'), `'1' === false`);
assert(!testJsVarName('te st'), `'te st' === false`);
assert(!testJsVarName('te/st'), `'te/st' === false`);
assert(!testJsVarName('test£$'), `'test£$' === false`);
assert(!testJsVarName('ಠ_ಠ'), `'ಠ_ಠ' === false`); // Note: technically valid as js variable name

console.log(chalk.green.bold('...All PASSED'));
process.exit();