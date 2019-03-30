# Git Basic
## Git 基本指令

```
git pull <远程主机名> <远程分支> (默认--merge 可加--rebase)
```
### 合理使用git stash
#### 功能
你在当前分支开发，临时有个bug需要切到另外一个分支完成，但是你又不想commit当前的修改,  
这个时候你就需要使用 ```git stash ```。  
它可以把当前工作区的更改的快照存下来（指令 git stash),  
然后等你需要的时候，在使用git stash apply 将工作区还原到制定的快照。  
需要注意的是新文件和目录的更改需要先手动 git add 否则没有依赖stash 无法生效。  
此外尽量stash apply的时候尽量不要使用 git stash pop,  
因为他会应用并且**删除**这个快照,一般来说你对你的操作很自信的时候是没有太大问题的,但是还是推荐git stash list,然后```git stash apply stash@{index}```的方式去应用快照,这样快照并不会被删除,万一呢。  

  
  
更多详细使用请参照 
[git stash](https://git-scm.com/book/zh/v1/Git-%E5%B7%A5%E5%85%B7-%E5%82%A8%E8%97%8F%EF%BC%88Stashing%EF%BC%89)
## Git命令自定义别名 
### 语法
```
git config --global alias.new_alias git_function
```
### 示例
```
git config --global alias.cm commit
```

### 常用配置
| 别名Alias | 命令Command |  配置  |
| :----------------------| :----- | :-----------|
| git cm | git commit |  git config --global alias.cm commit  |
| git co | git checkout | git config --global alias.cm checkout |
| git ac | git add . -A git commit | git config --global alias.ac '!git add -A && git commit' |
| git st | git status -sb |  git config --global alias.st 'status -sb'|
| git tags | git tag -l |  git config --global alias.tags 'tag -l'|
| git bra-s | git branch -a |  git config --global alias.bra-s 'branch -a'|
| git lg | git log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit -- | git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --"  |

### 命令行效果
git log信息高亮 

![log信息高亮](/git.png)

