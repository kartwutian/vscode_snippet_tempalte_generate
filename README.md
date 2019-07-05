## 命令行辅助工具

辅助编写vscode snippet

快速生成使用自己的templete生成 vscode snippet template，

然后复制到自己的snippet中管理；

```
npm i -g vscode_snippet_tempalte_generate

vs-snippet --help

// options 不支持空格
vs-snippet generate ./index.js --title=demo --desc=demo --prefix=snippet_prefix

// 控制台输出，复制到自己的snippet中编辑吧
  "demo": {
    "prefix": "snippet_prefix",
    "body": [
      "'use strict';",
      "",
      "const path = require('path');",
      "const Command = require('common-bin');",
      "",
      "class MainCommand extends Command {",
      "  constructor(rawArgv) {",
      "    super(rawArgv);",
      "    this.usage = 'Usage: vs-snippet <command> [options]';",
      "",
      "    // load sub command",
      "    this.load(path.join(__dirname, 'command'));",
      "  }",
      "}",
      "",
      "module.exports = MainCommand;"
    ],
    "description": "demo"
  }
}

```