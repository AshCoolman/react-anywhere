module.exports = {
  testJsVarName: function (str) {
    // Note: does not test the full range of acceptable characters
    return /^[A-Za-z_][A-Za-z0-9_]*$/g.test(str);
  }
}