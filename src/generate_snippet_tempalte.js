/**
 * 将普通代码转化为 vscode snippet
 */

const fs = require('fs');

module.exports = function(options){
  const parmas = Object.assign({},options)

  const data = fs.readFileSync(parmas.absolutePath);
  
  const output = {
    [parmas.title]: {
      prefix: parmas.prefix,
      body: data.toString().split('\r\n'),
      description: parmas.description,
    }
  }

  return output;
}