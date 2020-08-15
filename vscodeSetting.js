{
    "window.menuBarVisibility": "default",
    "window.zoomLevel": 0,
    "files.autoSave": "onFocusChange",
    "editor.lineHeight": 30,
    "editor.fontSize": 17,
    "editor.fontFamily": "'JetBrains Mono Regular','Source Code Pro',Consolas,Inconsolata,monospace,'Courier New'",
    "editor.fontLigatures": true, // 开启字体连体格式
    "terminal.integrated.fontFamily": "JetBrains Mono Regular",
    "editor.tabSize": 2,
    "editor.mouseWheelZoom": true,
    "editor.wordWrap": "on",
    "workbench.sideBar.location": "left",
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    },
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection":  "automaticallyOverrodeDefaultValue",
    "npm.runSilent": true,
    "files.insertFinalNewline": true,
    "workbench.enableExperiments": false,
    "emmet.triggerExpansionOnTab": true,
    "emmet.syntaxProfiles": {
        "vue-html": "html",
        "vue": "html",
        "javascript": "html"
    },
    "emmet.includeLanguages": {
        "vue-html": "html",
        "vue": "html",
        "wxml": "html"
    },
    "workbench.tree.indent": 15,
    "workbench.colorTheme": "Monokai",
    "editor.quickSuggestions": { // 开启自动建议
        "other": true,
        "comments": true,
        "strings": true
    },
    "php.validate.executablePath": "G:\\Develop\\PHP\\php.exe",
    // "fileheader.LastModifiedBy": "angus",
    // "fileheader.Author": "angus",
    // "fileheader.tpl": "/*\r\n * @Author: {author} \r\n * @Date: {createTime} \r\n * @Last Modified by:   {lastModifiedBy} \r\n * @Last Modified time: {updateTime} \r\n */\r\n",
    "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",
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
    },
    // eslint 代码自动检查相关配置
    "eslint.enable": true,
    // "eslint.autoFixOnSave": true,
    "eslint.run": "onType",
    "eslint.options": {
	    "extensions": [".js",".vue"]
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "vue",
        "vue-html",
        "html",
        "typescript",
        "typescriptreact"
        // {
        //     "language": "html",
        //     "autoFix": true
        // },
        // {
        //     "language": "vue",
        //     "autoFix": true
        // },
    ],
    "prettier.singleQuote": true,
    "prettier.jsxBracketSameLine": true,
    "prettier.semi": false,
    // 路径提示配置
    // "typescript.suggest.paths": false,
    // "path-intellisense.absolutePathToWorkspace": true,
    "path-intellisense.mappings": {
        "@": "${workspaceRoot}/src",
        "components": "${workspaceRoot}/src/components",
        "assets": "${workspaceRoot}/src/assets",
        "utils": "${workspaceRoot}/src/utils",
        "plugins": "${workspaceRoot}/src/plugins",
    },
    "alias-skip.mappings": {
        "@": "/src"  // 默认只有`@`映射，映射到`/src`，你可以添加更多映射，映射路径必须以`/`开头
    },
    "cSpell.userWords": [
        "styl"
    ],
    "workbench.iconTheme": "vscode-icons",
    "javascript.format.insertSpaceAfterSemicolonInForStatements": false,
    "typescript.format.insertSpaceAfterSemicolonInForStatements": false,
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatter.html": "js-beautify-html",
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
    "sync.gist": "3f503f15bc3492b9c3098553b1b5cb2c",
    "sync.removeExtensions": true,
    "sync.forceUpload": false,
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
    "files.associations": {
        "*.cjson": "jsonc",
        "*.wxss": "css",
        "*.wxs": "javascript",
        "*.wpy": "vue",
        ".wepyignore": "ignore"
    },
    "explorer.compactFolders": false,
    // -------------TODO--------------------
    "todo-tree.tree.showScanModeButton": true,
    "todo-tree.regex.regex": "((%|#|//|<!--|^\\s*\\*)\\s*($TAGS)|^\\s*- \\[ \\])",
    "todo-tree.general.tags": [
        "TODO",
        "FIXME",
        "tag",
        "done",
        "note"
    ],
    "todo-tree.regex.regexCaseSensitive": false,
    "todo-tree.tree.showInExplorer": true,
    "todo-tree.highlights.defaultHighlight": {
        "foreground": "#666",
        "background": "yellow",
        "icon": "check",
        "rulerColour": "yellow",
        "type": "tag",
        "iconColour": "yellow"
    },
    "todo-tree.highlights.customHighlight": {
        "todo": {
            "background": "yellow",
            "rulerColour": "yellow",
            "iconColour": "yellow"
        },
        "FIXME": {
            "background": "red",
            "icon": "beaker",
            "rulerColour": "red",
            "iconColour": "red",
        },
        "tag": {
            "background": "blue",
            "icon": "tag",
            "rulerColour": "blue",
            "iconColour": "blue",
            "rulerLane": "full"
        },
        "done": {
            "background": "green",
            "icon": "issue-closed",
            "rulerColour": "green",
            "iconColour": "green",
        },
        "note": {
            "background": "#f90",
            "icon": "note",
            "rulerColour": "#f90",
            "iconColour ": "#f90"
        }
    },
    "tabnine.experimentalAutoImports": true,
    "[scss]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "eslint.alwaysShowStatus": true,
    "hediet.vscode-drawio.local-storage": "eyIuZHJhd2lvLWNvbmZpZyI6IntcImxhbmd1YWdlXCI6XCJcIixcImN1c3RvbUZvbnRzXCI6W10sXCJsaWJyYXJpZXNcIjpcImdlbmVyYWxcIixcImN1c3RvbUxpYnJhcmllc1wiOltcIkwuc2NyYXRjaHBhZFwiXSxcInBsdWdpbnNcIjpbXSxcInJlY2VudENvbG9yc1wiOltdLFwiZm9ybWF0V2lkdGhcIjpcIjI0MFwiLFwiY3JlYXRlVGFyZ2V0XCI6ZmFsc2UsXCJwYWdlRm9ybWF0XCI6e1wieFwiOjAsXCJ5XCI6MCxcIndpZHRoXCI6ODI3LFwiaGVpZ2h0XCI6MTE2OX0sXCJzZWFyY2hcIjp0cnVlLFwic2hvd1N0YXJ0U2NyZWVuXCI6dHJ1ZSxcImdyaWRDb2xvclwiOlwiI2QwZDBkMFwiLFwiZGFya0dyaWRDb2xvclwiOlwiIzZlNmU2ZVwiLFwiYXV0b3NhdmVcIjp0cnVlLFwicmVzaXplSW1hZ2VzXCI6bnVsbCxcIm9wZW5Db3VudGVyXCI6MCxcInZlcnNpb25cIjoxOCxcInVuaXRcIjoxLFwiaXNSdWxlck9uXCI6ZmFsc2UsXCJ1aVwiOlwiXCJ9In0=",
    // "better-comments.tags": [
    //     {
    //       "tag": "!",
    //       "color": "#FF2D00",
    //       "strikethrough": false,
    //       "backgroundColor": "transparent"
    //     },
    //     {
    //       "tag": "?",
    //       "color": "#3498DB",
    //       "strikethrough": false,
    //       "backgroundColor": "transparent"
    //     },
    //     {
    //       "tag": "//",
    //       "color": "#474747",
    //       "strikethrough": true,
    //       "backgroundColor": "transparent"
    //     },
    //     {
    //       "tag": "todo",
    //       "color": "#FF8C00",
    //       "strikethrough": false,
    //       "backgroundColor": "transparent"
    //     },
    //     {
    //       "tag": "*",
    //       "color": "#98C379",
    //       "strikethrough": false,
    //       "backgroundColor": "transparent"
    //     }
    // ]
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
