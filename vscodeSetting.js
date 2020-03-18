{
    "window.menuBarVisibility": "default",
    "window.zoomLevel": 0,
    "files.autoSave": "onFocusChange",
    "editor.lineHeight": 30,
    "editor.fontSize": 17,
    // "window.zoomLevel": 0.2,
    "editor.mouseWheelZoom": true,
    "php.validate.executablePath": "G:\\Develop\\PHP\\php.exe",
    "editor.wordWrap": "on",
    "fileheader.LastModifiedBy": "angus",
    "fileheader.Author": "angus",
    "fileheader.tpl": "/*\r\n * @Author: {author} \r\n * @Date: {createTime} \r\n * @Last Modified by:   {lastModifiedBy} \r\n * @Last Modified time: {updateTime} \r\n */\r\n",
    "workbench.sideBar.location": "left",
    "emmet.triggerExpansionOnTab": true,
    "editor.fontFamily": "'JetBrains Mono Regular','Source Code Pro',Consolas,Inconsolata,monospace,'Courier New'",
    "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",
    // 不填写对应属性即关闭对应功能
    "editor.quickSuggestions": {
        "other": true,
        "comments": true,
        "strings": true
    },
    "workbench.tree.indent": 15,
    "search.exclude": {
        "**/node_modules": true,
        "**/bower_components": true,
        "build/": true,
        "temp/": true,
        "library/": true,
        "**/*.anim": true
    },
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/*.meta": true,
        "library/": true,
        "local/": true,
        "temp/": true
    },
    "editor.tabSize": 2,
    "files.associations": {
        "*.cjson": "jsonc",
        "*.wxss": "css",
        "*.wxs": "javascript",
        "*.wpy": "vue",
        ".wepyignore": "ignore"
    },
    "emmet.includeLanguages": {
        "wxml": "html"
    },
    "workbench.colorTheme": "Monokai",
    // eslint 代码自动检查相关配置
    "eslint.enable": true,
    "eslint.autoFixOnSave": true,
    "eslint.run": "onType",
    "eslint.options": {
	    "extensions": [".js",".vue"]
    },
    "eslint.alwaysShowStatus": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "vue",
        "html",
        {
            "language": "html",
            "autoFix": true
        },
        {
            "language": "vue",
            "autoFix": true
        },
        "typescript",
        "typescriptreact"
    ],
    // 路径提示配置
    "prettier.singleQuote": true,
    "prettier.semi": false,
    "path-intellisense.mappings": {
        "@": "${workspaceRoot}/src",
        "components": "${workspaceRoot}/src/components",
        "assets": "${workspaceRoot}/src/assets",
        "utils": "${workspaceRoot}/src/utils",
        "plugin": "${workspaceRoot}/src/plugin"
    },
    "cSpell.userWords": [
        "styl"
    ],
    "workbench.iconTheme": "vscode-icons",
    // "vetur.format.defaultFormatter.js": "prettier-eslint",
    "prettier.jsxBracketSameLine": true,
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "javascript.format.insertSpaceAfterSemicolonInForStatements": false,
    "typescript.format.insertSpaceAfterSemicolonInForStatements": false,
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            "wrap_attributes": "force-expand-multiline"
        },
        "prettyhtml": {
            "printWidth": 50,
            "singleQuote": false,
            "wrapAttributes": false,
            "sortAttributes": false
        },
        "prettier": {
            "singleQuote": true,
            "semi": false
        }
    },
    "sync.gist": "2c6dd8677ca85f792a4131172ef5dadd",
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "npm.runSilent": true,
    "files.insertFinalNewline": true,
    "workbench.enableExperiments": false,
    // 文件格式化插件
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[css]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}

    // 不校验wepy的template模版----不检验vetur中的template
    // "vetur.validation.template": false
    // #========================== VUE项目环境  =====================================
    // "editor.formatOnSave": true, //#每次保存的时候自动格式化
    // "eslint.validate": [
    //     { "language": "html", "autoFix": true },
    //     { "language": "vue", "autoFix": true },
    //     { "language": "javascript", "autoFix": true },
    //     { "language": "wpy", "autoFix": true }
    // ],
    // "prettier.eslintIntegration": true, // #让prettier使用eslint的代码格式进行校验
    // "prettier.semi": true, //#去掉代码结尾的分号
    // "prettier.singleQuote": true, //#使用单引号替代双引号
    // "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    // "editor.formatOnType": true //#让函数(名)和后面的括号之间加个空格
    // #==============================================================================
