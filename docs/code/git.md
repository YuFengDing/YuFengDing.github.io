# Git命令自定义别名 
## 语法
```
git config --global alias.new_alias git_function
```
## 示例
```
git config --global alias.cm commit
```

## 常用配置
| 别名Alias | 命令Command |  配置  |
| :----------------------| :----- | :-----------|
| git cm | git commit |  git config --global alias.cm commit  |
| git co | git checkout | git config --global alias.cm checkout |
| git ac | git add . -A git commit | git config --global alias.ac '!git add -A && git commit' |
| git st | git status -sb |  git config --global alias.st 'status -sb'|
| git tags | git tag -l |  git config --global alias.tags 'tag -l'|
| git bra-s | git branch -a |  git config --global alias.bra-s 'branch -a'|
| git lg | git log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit -- | git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --"  |

## 命令行效果
git log信息高亮 

![log信息高亮](/git.png)

