## ubuntu18.04完全卸载mysql的命令

1.卸载mysql

```
sudo apt-get autoremove --purge mysql-server
sudo apt-get autoremove --purge mysql-server-*
sudo apt-get autoremove --purge mysql-client
sudo apt-get autoremove --purge mysql-client-*
sudo apt-get remove mysql-common
```

2.删除数据

```
dpkg -l |grep ^rc|awk '{print $2}' |sudo xargs dpkg -P 
```

注意，清楚的过程中会弹出几个窗口，内容大概是问你是否需要清除用户数据之类的，要选择yes！

3.删除目录

```
sudo rm -rf /etc/mysql
sudo rm -rf /var/lib/mysql
```

4.清除残留

```
sudo apt autoremove
sudo apt autoreclean
```

## mysql 下载安装

在 ubuntu 系统中，安装 mysql 十分简单，只需要三条命令即可完成，但在安装前，我们首先要获取最新的软件源地址。

```csharp
sudo apt-get update
```

然后执行：

```csharp
sudo apt-get install mysql-server
sudo apt-get install mysql-client
sudo apt-get install libmysqlclient-dev
```

安装过程中会提示设置密码什么的，注意设置了，如果没有提示可参照第二步来修改密码。安装完成之后可以使用如下命令来检查是否安装成功：

```undefined
sudo netstat -tap | grep mysql
```

通过上述命令检查之后，如果看到有 mysql 的socket处于 listen 状态则表示安装成功。登陆 mysql 数据库可以通过如下命令：

```undefined
mysql -u root -p
```

如果安装过程中并没有输入密码，且上述命令输入自己密码并不能登录到自己的 mysql，则进入第二步，否则进入第三步。（此问题一般出现在 mysql5.7 及以上版本。）

## mysql 修改密码

mysql5.7 以上的版本会有系统自己设置的密码，使用如下命令：

```undefined
sudo gedit /etc/mysql/debian.cnf
```

可以看到如下界面：

![img](https://upload-images.jianshu.io/upload_images/1380583-199fc20069731e7b?imageMogr2/auto-orient/strip|imageView2/2/w/1165/format/webp)

1

系统登录名就是 user 后面的 debian-sys-maint，密码即是 password 后面的字符串，可以用如下方式登录 mysql：

```undefined
mysql -u debian-sys-maint -p
```

输入 debian.cnf 中的 password 即可登录到 mysql。登陆之后，我们开始修改 root 用户密码：

1.登录之后查询plugin字段值：

```csharp
mysql> use mysql;
mysql> select plugin from user where user = 'root';
```

执行结果plugin字段为空。
2.更新 plugin 字段为 mysql 默认值：

```bash
mysql> update user set plugin='mysql_native_password';
```

3.更新成功，开始更改密码：

```bash
mysql> update user set authentication_string=password('123456') where user='root' and host='localhost';
```

4.刷新权限：

```undefined
mysql> flush privileges;
```

之后重启 mysql，即可使用修改后的 root 用户登录。

## mysql 设置字符集为 utf-8

由于 mysql 的默认字符集为 latin1，不满足我们平常插入数据的需求，我们一般将其改为 utf-8。我们输入如下命令：

```undefined
sudo gedit /etc/mysql/my.cnf
```

在文件中添加这样的语句：

```csharp
[mysqld]
character_set_server = utf8
```

如果文件中已经存在 [mysqld] 字样，直接添加第二句话在其下方即可。当然若有时插入数据还是有错，可以将 utf8 改为 utf8mb4。