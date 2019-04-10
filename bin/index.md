`#!/usr/bin/env node`  全局环境变量配置
/**
 * 在配置文件中增加了此项后，只需要在配置文件根目录下执行npm link命令，
 * 即可使用name-cli --help命令来查看加载的name-cli脚手架。
如果你发布了你的脚手架，那么在其他用户使用命令npm install -g name-cli之后，便可以在全局下使用你的脚手架了
 使用 npm unlink进行解绑, 如果报权限错误就用sudo npm link
 */
 
 ### package中配置项
 ``` js
 {
  "name": "wagnew-cli",
  "version": "3.3.6",
  "description": "基于webpack多页面打包工具",
  "bin": {
    "name-cli": "bin/index.js"
  },
  ...
 }
 ```

 