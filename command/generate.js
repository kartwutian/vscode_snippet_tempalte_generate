`use strict`
const path = require('path');
const fs = require('fs');
const Command = require('common-bin');
const generateTemplate = require('../src/generate_snippet_tempalte');

class CloneCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv);

    this.options = {
      title: {
        alias: 't',
        type: 'string',
        description: 'vscode snippet title',
        default: 'snippet title',
      },
      prefix: {
        alias: 'p',
        type: 'string',
        description: 'vscode snippet prefix',
        default: 'snippet_prefix',
      },
      desc: {
        alias: 'd',
        type: 'string',
        description: 'vscode snippet description',
        default: 'snippet description',
      },
    };
  }

  * run({ argv }) {
    const cwd = process.cwd();
    if(argv._[0] === undefined){
      throw(new Error('the snippet template path is required'));
    }

    const templatePath = path.isAbsolute(argv._[0]) ? argv._[0] : path.resolve(cwd, argv._[0]);
    const isFile = fs.statSync(templatePath).isFile();

    if(!isFile){
      throw(new Error('the path is not a file path'));
    }
    // console.log(argv)
    const output = generateTemplate({
      title: argv.title,
      prefix: argv.prefix,
      absolutePath: templatePath,
      description: argv.desc,
    })
    console.info('javascript snippet template generated as bellow \nplease copy to your own snippets\nchange with your own situation\n');
    console.log(JSON.stringify(output, null, 2));
    
    // console.log('git clone %s to %s with depth %d', argv._[0], argv._[1], argv.depth);
   
  }

  get description() {
    return 'generate vscode snippet template';
  }
}

module.exports = CloneCommand;