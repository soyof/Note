# git

## Git安装

+ 通过命令行升级git for windows

  > git update-git-for-windows

## git三个区

要对某个项目使用git进行管理，需要使用`git init`命令初始化git仓库
`git init`会在当前目录生成一个隐藏文件夹 .git  不要去修改这个文件夹下的任意东西。

git仓库会分成三个区

- 工作区：我们书写代码的地方，工作的目录就叫工作区。

- 暂存区：暂时存储的区域，在git中，代码无法直接从工作区提交到仓库区，而是需要先从工作区添加到暂存区，然后才能从暂存区提交到仓库区。暂存区的目的是避免误操作。

- 本地仓库区：将保存在暂存区域的内容永久转储到 Git 仓库中，生成版本号。生成版本号之后，就可以任何的回退到某一个具体的版本。

## git基本命令

### git init

- 作用：初始化git仓库，想要使用git对某个项目进行管理，需要`git init`进行初始化

```bash
# 初始化仓库， 在当前目录下生成一个隐藏文件夹.git
git init
```

### git add

- 作用：将文件由 `工作区` 添加到 `暂存区`，在git中，文件无法直接从工作区直接添加到仓库区，必须先从工作区添加到暂存区，再从暂存区添加到仓库区。
- 命令：`git add 文件名/目录名`

```bash
# 将index.html添加到暂存区
git add index.html

# 将css目录下所有的文件添加到暂存区
git add css

# 将当前目录下所有的js文件添加到暂存区
git add *.js

# 添加当前目录下所有的文件
git add .
git add -A
git add --all
```

### git commit

作用：将文件由 暂存区 添加到 仓库区，生成版本号

```bash
# 将文件从暂存区提交到仓库
git commit -m "提交说明"

# 如果不写提交说明，会进入vi编辑器，没有写提交说明，是提交不成功的。
git commit   # 需要使用vi输入内容

# 如果是一个已经暂存过的文件，可以快速提交，如果是未追踪的文件，那么命令将不生效。
git commit -a -m '提交说明'

# 修改最近的一次提交说明， 如果提交说明不小心输错了，可以使用这个命令
git commit --amend -m "提交说明"
```

### git config配置

如果是第一次提交，需要配置提交者信息，推荐和github的账号邮箱一致

```Bash
# git config  user.name 你的目标用户名
# git config  user.email 你的目标邮箱名

# 使用--global参数，配置全局的用户名和邮箱，只需要配置一次即可。推荐配置github的用户名和密码
git config  --global user.name Jepson
git config  --global user.email jepsonpp@qq.com

# 查看配置信息
git config --list
```

### git status

- 作用：查看文件的状态

- 命令：`git status` 
  - 红色表示工作区中的文件需要提交
  - 绿色表示暂存区中的文件需要提交
- 命令：`git stauts -s` 简化日志输出格式

### git log

- 作用：查看提交日志
- `git log` 查看提交的日志
- `git log --oneline` 简洁的日志信息

### git重置

#### git reset

- 作用：版本回退，将代码恢复到已经提交的某一个版本中。
- `git reset --hard 版本号` 将代码回退到某个指定的版本(版本号只要有前几位即可)
- `git reset --hard Head~0`    表示回退到上一次代码提交时的状态
- `git reset --hard Head~1`   表示回退到上上次代码提交时的状态

- `git reset --hard [版本号]`   可以通过版本号精确的回退到某一次提交时的状态
- `git reflog`   可以看到每一次切换版本的记录:  可以看到所有提交的版本号

- 当使用了`git reset`命令后，版本会回退，使用`git log`只能看到当前版本之前的信息。使用`git reflog`可以查看所有的版本信息

#### git忽视文件

-  touch .gitignore   创建忽视文件

> 在仓库中，有些文件是不想被git管理的，比如数据的配置密码、写代码的一些思路等。git可以通过配置从而达到忽视掉一些文件，这样这些文件就可以不用提交了。

- 在仓库的根目录创建一个`.gitignore`的文件，文件名是固定的。
  - 在需要创建 .gitignore 文件的文件夹, 右键选择Git Bash 进入命令行，进入项目所在目录
  - 输入 touch .gitignore ，生成“.gitignore”文件
  - 在”.gitignore” 文件里输入要忽略的文件夹及其文件就可以了
- 将不需要被git管理的文件路径添加到`.gitignore`中

```bash
# 忽视idea.txt文件
idea.txt

# 忽视.gitignore文件
.gitignore

# 忽视css下的index.js文件
css/index.js

# 忽视css下的所有的js文件
css/*.js

# 忽视css下的所有文件
css/*.*
# 忽视css文件夹
css
```

## git分支操作

### 分支

- 默认是有一个主分支master

#### 查看分支

+ `git branch` 可以查看当前有哪些分支

#### 创建分支

- `git branch 分支名`
  - 创建了一个dev分支
  - 在刚创建时dev分支里的东西和master分支里的东西是一样的

#### 切换分支

- `git checkout 分支名`
  - 切换到指定的分支,这里的切换到名为dev的分支

#### 创建并切换分支

+ `git checkout -b 分支名`    

#### 合并分支

- `git merge 分支名`
  - 合并分支内容,把当前分支与指定的分支(dev),进行合并
  - 当前分支指的是`git branch`命令输出的前面有*号的分支
- 合并时如果有冲突，需要手动去处理，处理后还需要再提交一次.

#### 删除分支

+ `git branch -d 分支名`

## GitHub 

- https://github.com
- 不是git,只是一个网站
- 只不过这个网站提供了允许别通过git上传代码的功能

### git clone

- 作用：克隆远程仓库的代码到本地
- git clone [远程仓库地址]
- `git clone git://github.com/jepsongithub/test.git`会在本地新建一个`test`文件夹，在test中包含了一个`.git`目录，用于保存所有的版本记录，同时test文件中还有最新的代码，你可以直接进行后续的开发和使用。
- git克隆默认会使用远程仓库的项目名字，也可以自己指定。需要是使用以下命令：`git clone [远程仓库地址] [本地项目名]`

### git push

- 作用：将本地仓库中代码提交到远程仓库
- `git push 仓库地址 master` 在代码提交到远程仓库，注意master分支必须写，不能省略
- 例子：`git push git@github.com:jepsongithub/test.git master` 如果第一次使用，需要填写github的用户名和密码

### git pull

- 作用：将远程的代码下载到本地

- 通常在push前，需要先pull一次。

```bash
# 获取远程仓库的更新，并且与本地的分支进行合并
git pull
```

- 先pull , 再push
- 当我们在push时，加上-u参数，那么在下一次push时
  我们只需要写上`git push`就能上传我们的代码。(加上-u之后，git会把
  当前分支与远程的指定的分支进行关联。git push origin master)

### git remote

每次push操作都需要带上远程仓库的地址，非常的麻烦，我们可以给仓库地址设置一个别名

```bash
# 给远程仓库设置一个别名
git remote add 仓库别名 仓库地址
git remote add jepson git@github.com:jepsongithub/test.git

# 删除jepson这个别名
git remote remove jepson

# git clone的仓库默认有一个origin的别名
```

### SSH免密码登陆

git支持多种数据传输协议：

- https协议：`https://github.com/jepsongithub/test.git`  需要输入用户名和密码
- ssh协议：`git@github.com:jepsongithub/test.git`   可以配置免密码登录

每次push或者pull代码，如果使用https协议，那么都需要输入用户名和密码进行身份的确认，非常麻烦。

- github为了账户的安全，需要对每一次push请求都要验证用户的身份，只有合法的用户才可以push
- 使用ssh协议，配置ssh免密码，可以做到免密码往github推送代码

### SSH免密码登录配置

注意：这些命令需要在bash中敲

- 1 创建SSH Key：`ssh-keygen -t rsa`
- 2 在文件路径 `C:\用户\当前用户名\` 找到 `.ssh` 文件夹
- 3 文件夹中有两个文件：
  - 私钥：`id_rsa`
  - 公钥：`id_rsa.pub`
- 4 在 `github -> settings -> SSH and GPG keys`页面中，新创建SSH key
- 5 粘贴 公钥 `id_rsa.pub` 内容到对应文本框中
- 5 在github中新建仓库或者使用现在仓库，拿到`git@github.com:用户名/仓库名.git`
- 6 此后，再次SSH方式与github“通信”，不用输入密码确认身份了

## gulp

[官网](http://www.gulpjs.com)
[中文网](http://www.gulpjs.com.cn)

- 前端自动化构建工具
- js: function(){//},代码压缩,混淆 : var name = 123,var x = 123
- css, 
- 合并: 1个js 1kb ,有10个js.

### 5个核心方法

- gulp.task('任务名',function(){}) // 创建任务。
- gulp.src('./*.css') 指定想要处理的文件
- gulp.dest() // 指定最终处理后的文件的存放路径
- gulp.watch() // 自动的监视文件的变化，然后执行相应任务。
- gulp.run('任务名')，直接执行相应的任务。

### 安装gulp

- 通过npm安装:`npm install gulp-cli -g`

### gulp使用
  - 1.在当前项目中也要安装gulp: `npm install gulp --save`
  - 2.还需要在当前项目中新建一个文件: gulpfile.js
    ```javascript
      var gulp =  require('gulp');​    // 创建任务    
      // 第一个参数: 任务名    
      // 第二个参数:回调函数,当我们执行任务时就会执行这个函数    
      gulp.task('test', function(){      
        console.log(123)
      })
    ```

- 3.执行任务: `gulp 任务名`

  - 示例: `gulp test`

### 对js进行压缩

`npm install gulp-uglify --save`

### 对js进行合并操作

- `npm install gulp-concat --save`

  ```javascript
    gulp.task('script', function(){
    // 1.要匹配到要处理的文件
    // 指定指定的文件:参数是匹配的规则
    // 参数也可以是数组，数组中的元素就是匹配的规则
    gulp.src(['./app.js','./sign.js'])
    // concat 的参数是合并之后的文件名字
    .pipe(concat('index.js'))
    .pipe(uglify())
    // dest方法参数，指定输出文件的路径
    .pipe(gulp.dest('./dist'))
  })
  ```

### 对css进行压缩操作

- `npm install gulp-cssnano --save`

  ```javascript
     // 新建一个任务，对css进行处理
  gulp.task('style', function(){
    // 对项目中的2个css文件进行合并，压缩操作
    // 1.匹配到要处理的文件
    gulp.src(['./*.css'])
    // 2.合并文件
    .pipe(concat('index.css'))
    // 3.压缩操作
    .pipe(cssnano())
    // 4.输出到指定目录
    .pipe(gulp.dest('./dist'))
    })
  ```

  

### 对html进行压缩

- `npm install gulp-htmlmin --save`
- https://github.com/kangax/html-minifier

```javascript
// 新建一个任务，对html进行压缩
gulp.task('html', function(){
 // 1.匹配到要处理的文件
 gulp.src(['./index.html'])
 // 2.压缩操作
 .pipe(htmlmin({collapseWhitespace:true}))
 // 3.指定输出目录
 .pipe(gulp.dest('./dist'))
})
```



### gulp.watch

- 监视文件的变化，然后执行相应的任务
- gulp.run, 直接执行指定的任务

```javascript
  // gulp.watch 监视文件变化，执行相应任务
  gulp.task('mywatch', function(){
  // 执行指定的任务
  gulp.run('script')
  // 1.监视js文件的变化，然后执行script任务
  // 第一个参数：要监视的文件的规则
  // 第二个参数：是要执行的任务
  gulp.watch(['./app.js','sign.js'],['script'])
})
```

