# Linux 基础
Linux 下切换用户 
```
su username
```
su是 switch user 的缩写,如果不加username则默认为切换到root用户。
# Linux 定时任务
linux 下定时任务主要依靠crontab 这是一个linux系统自带的一个包并且linux系统下默认运行,在命令行输入crontab -e 就可以对定时任务进行编辑了
编辑之后需要重启服务命令如下
service crond restart