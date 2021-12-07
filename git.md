## 常用命令

### git 管理

#### 初始化

如果文件夹是本地新建的，就需要进行 git 初始化，初始化会在当前文件夹下创建.git 隐藏文件夹。这样文件夹下的文件就会被 git 追踪了。

```
git init
```

#### 克隆现有仓库

如果是克隆已有仓库就不需要进行 git 的初始化了。

```
git clone xxxx [文件夹名]
```

### 配置 ssh

只有生成 ssh 然后配置好就能拉取推送代码到远端仓库了。

```shell
# 生成秘钥
# 密钥类型可以用 -t 选项指定。如果没有指定则默认生成用于 SSH-2 的 RSA 密钥。这里使用的是 rsa。
# 同时在密钥中有一个注释字段，用-C 来指定所指定的注释，可以方便用户标识这个密钥，指出密钥的用途或其他有用的信息。所以在这里输入自己的邮箱或者其他都行。
ssh-keygen -t rsa -C '1287530097@qq.com'

# 输入完毕后程序同时要求输入一个密语字符串(passphrase)，空表示没有密语。接着会让输入 2 次口令(password)，空表示没有口令。
# 3 次回车即可完成当前步骤，此时[c盘>用户>自己的用户名>.ssh]目录下已经生成好了。

# 登录 github。打开 setting->SSH keys，点击右上角 New SSH key，把生成好的公钥 id_rsa.pub 放进 key 输入框中，再为当前的 key 起一个 title 来区分每个 key。
```

### 远端仓库配置

#### 查看远端仓库

```
git remote -v
```

#### 添加远端仓库

这里的 origin 只是一个名字，可以随便命名。

```
git remote add origin <address>
```

#### 重新命名远端仓库

```
git remote rename oldName newName
```

#### 移除远端仓库

```
git remote remove origin
```

### 配置

#### 列出当前所有配置， 包含本地、全局、系统配置

```
git config --list
```

#### 列出本地配置

```
git config --local --list
```

#### 列出全局配置

```
git config --global --list
```

#### 列出系统配置

```
git config --system --list
```

#### 配置用户名

```
git config --global user.name "your name"
```

#### 配置用户邮箱

```
git config --global user.email "your email"
```

#### 配置别名

```
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

### 分支

#### 查看本地分支

```
git branch
```

#### 查看远程分支

```
git branch -r
```

#### 查看本地和远程分支

```
git branch -a
```

#### 切换分支

```
git checkout <branch-name>
```

切换分支，并创建分支。如果分支不存在则创建该分支并切换到该分支，如果分支存在则切换失败

```
git checkout -b <branch-name>
```

#### 删除分支

```
git branch -d <branch-name>
```

如果分支有改动并且没 push 到远程，-d 删除分支就会失败，如果需要强制删除需要使用-D 进行强制删除。

```
git branch -D <branch-name>
```

#### 重命名分支

```
git branch -m <oldbranch-name> <newbranch-name>
```

### status

查看状态

### add

添加指定文件到暂存区

```
git add <file-name>
```

添加全部文件到暂存区

```
git add .
```

### commit

将暂存区文件提交到本地仓库

```
git commit -m 'xxx'
```

提交到暂存区并且提交到本地仓库，注意未跟踪的文件不会被提交。

```
git commit -am 'xxx'
```

修改提交的 message，该操作不是直接修改原 commit 的 message，而是生成一条新的 commit，把当前 commit 替换掉。

```
git commit --amend
```

### push

将本地仓库的提交推送到远端指定分支

```
git push origin <branch-name>
```

### rm

删除文件，并且将这次删除放入暂存区，前提是该文件是本地仓库的文件，不能是新建的文件。

```
git rm <file-name>
```

停止追踪指定文件，但该文件会保留在工作区(当你忘记添加 .gitignore 文件 这个方法很有效)

```
git rm --cached <file-name>
```

### stash

#### 查看暂存列表

```
git stash list
```

#### 暂存

用来将所有已跟踪的文件保存至堆栈中。

```
git stash
```

用来将所有文件保存至堆栈中，包括未追踪的。

```
git stash -u
```

暂存并添加备注

```
git stash save 'xxx'
```

#### 查看暂存改动

查看当前暂存中修改了哪些文件

```
git stash show stash@{n}
```

查看当前暂存中修改了哪些文件的内容

```
git stash show -p stash@{n}
```

#### 提取暂存

提取最近的一次暂存并在暂存列表清除这次暂存。

```
git stash pop
```

提取指定的暂存并在暂存列表清除这次暂存。这里的 n 是具体的数字，可以使用 git stash list 查看具体的某次暂存。

```
git stash pop stash@{n}
```

提取最近的一次暂存。

```
git stash apply
```

提取指定的暂存。这里的 n 是具体的数字，可以使用 git stash list 查看具体的某次暂存。

```
git stash apply stash@{n}
```

#### 删除暂存

删除某暂存

```
git stash drop stash@{n}
```

清除暂存列表

```
git stash clear
```

### diff

#### 比较工作区和暂存区的不同

```
git diff
```

#### 比较工作区和本地仓库的不同

```
git diff HEAD
```

#### 比较暂存区和本地仓库的不同

```
git diff --staged(Git 1.6.1 及更高版本允许使用) / --cached
```

#### 比较两个不同的提交

```
git diff commitId1..commitId2
```

#### 比较两个不同分支

比较两个不同的分支，需要是已经提交的不同。

```
git diff branch1..branch2
```

比较两个不同的远端分支

```
git diff origin/branch1..origin/branch2
```

比较本地分支和远端分支

```
git diff branch1..origin/branch2
```

比较两个不同的分支某文件

```
git diff branch1..branch2 <file-name>
```

### log

#### 查看提交 log

简要显示 commitId、Author、Date、message

```
git log
```

#### 查看提交 log 文件级别的显示

除了显示 commitId、Author、Date、message 外还显示修改了哪些文件

```
git log --stat
```

#### 查看提交 log 文件详情级别的显示

除了显示 commitId、Author、Date、message 外还显示修改了哪些文件，并且显示文件具体改动细节。你也可以加上 -2 (git log -p -2)来仅显示最近两次提交

```
git log -p
```

#### 查看某次提交的具体改动

```
git show commitId
```

查看某次提交的某个文件的具体改动

```
git show commitId <file-name>
```

查看最近的一次提交的具体改动可以省略 commitId

```
git show
```

#### 查看操作 log

详细的 log，包括分支切换、代码合并等等操作

```
git reflog
```

### 回退

#### 撤销工作区的改动

撤销工作区某文件

```
git checkout <file-name>
```

撤销工作区所有文件

```
git checkout .
```

#### 撤销暂存区

撤销暂存区某文件

```
git checkout HEAD <file-name>
```

撤销暂存区所有文件

```
git checkout HEAD <file-name>
```

#### 撤销本地仓库

回退之后前面的 commit 就会消失。

1、--mixed 改动回退到工作区(默认)
2、--soft 改动回退到暂存区
3、-hard 删除提交改动并放弃掉，

```
git reset [--hard | --soft | --mixed] commitId
```

回退到上上次提交，可以使用 HEAD^代替 commitId，上上上次提交 可以使用 HEAD^^

```
git reset HEAD^
```

### revert

revert 用来生成一个与指定 commitId 相反的提交。

```
git revert commitId
```

提交一个新的 commit 它的内容和最近的一个 commit 完全相反。

```
git revert HEAD
```

### cherry-pick

将指定的提交 commit 应用于当前分支。（可以用于在错误的分支提交代码）

```
git cherry-pick commitId
```
