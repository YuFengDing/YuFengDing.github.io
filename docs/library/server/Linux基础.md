# Linux 基础
Linux 下切换用户 
```
su username
```
su是 switch user 的缩写,如果不加username则默认为切换到root用户。
# crontab 定时任务 
crontab是什么
crontab命令常见于Unix和类Unix的操作系统之中,用于设置周期性被执行的指令。「crontab」一词来源于希腊语chronos(χρνο),原意是时间.
linux 下定时任务主要依靠crontab,在命令行输入crontab -e 就可以对定时任务进行编辑了。

编辑之后需要重启服务命令如下
service crond restart