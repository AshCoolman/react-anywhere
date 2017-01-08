var chalk = require('chalk');
var testJsVarName = require('./utils').testJsVarName;

module.exports = function(process, raCmd, raArgs) {
  if (raCmd === 'init') {
    if (testJsVarName(raArgs[1]) === false) {
      console.log(
        `
        ${chalk.yellow('react-anywhere found a problem!')}
        ${`Cannot init using "${chalk.white.bold(raArgs[1])}"`}
        App name must be a valid javascript variable name with these characters:
          _ A-Z a-z 0-9
        `
      );
      process.exit(0);
    }
  }
}