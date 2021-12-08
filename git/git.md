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

### 文档查询

#### 查看命令大纲

```
git help
```

#### 查看所有命令

```
git help -a
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

删除远程分支

```
git push origin -d <branch-name>
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

### fetch

将远端分支代码拉取下来

```
git fetch origin <branch-name>
```

### pull

将远端分支代码拉取下来并与当前分支进行 merge

```
git pull origin <branch-name>
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

清除 git 所有的缓存，也就是把所有文件置为未追踪状态。

```
git rm -r --cached .
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

#### 查看详细操作 log

详细的 log，包括分支切换、代码合并等等操作。

```
git reflog
```

我们可以使用 git checkout reflogid 切换到某个操作上。（git checkout 并不仅仅只能切换到某分支或者某 tag 上）

#### 查看分支提交图

```
git log --graph --all --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative
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

撤销暂存区某文件到工作区

```
git reset HEAD <file-name>
```

撤销暂存区所有文件到工作区

```
git reset HEAD <file-name>
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

### tag

tag 只是在某 commit 上打上标签，并不会产生提交。

#### 列出已有 tag

```
git tag
```

#### 新建 tag

```
git tag v1.0.0
```

#### 新建带有备注信息的 tag

```
git tag -a v1.0.0 -m '初始版本'
```

#### 给指定的某个 commit 加 tag

```
git tag -a v1.0.0 -m '某版本' commitId
```

#### 删除 tag

```
git tag -d v1.0.0
```

#### 查看 tag 详情

可以利用 tag 的 commitId 进行代码的回滚

```
git show v1.0.0
```

#### 把 tag 推送到远端

```
git push origin v1.0.0
```

#### 把所有不存在的 tag 推送到远程

```
git push origin --tags
```

#### 切换到某个 tag 下

切换到某个 tag 跟分支一样，可以直接切换到某个 tag 去。这个时候不位于任何分支，处于游离状态，可以考虑基于这个 tag 创建一个分支。

```
git checkout v1.0.0
```

### merge

把目标 commit 的路径上的所有 commit 的内容一并应用到当前 commit，然后自动生成一个新的 commit。

```
git merge <branch-name>
```

取消 merge

```
git merge --abort
```

### rebase

有些人不喜欢 merge，因为在 merge 之后，commit 历史就会出现分叉，这种分叉再汇合的结构会让有些人觉得混乱而难以管理。
如果你不希望 commit 历史出现分叉，可以用 rebase 来代替 merge。

```
git rebase <branch-name>
```

取消 rebase

```
git rebase --abort
```

### 交互式 rebase

rebase -i 是 rebase --interactive 的缩写形式，意为「交互式 rebase」。

```
git rebase -i commitId
```

1、以修改不是第一条提交的 message。rebase -i commitId，把需要修改的 commit 的 message 使用 edit/e 标识。
2、合并提交。rebase -i HEAD^^。把需要合并的 commit 的 message 用 squash/s 标识。
3、删除某次提交。rebase -i HEAD^^。把需要删除的 commit 的 message 去掉即可。

## ^和~符号

### ^

^ 的用法：在 commit 的后面加一个或多个 ^ 号，可以把 commit 往回偏移，偏移的数量是 ^ 的数量。例如：master^ 表示 master 指向的 commit 之前的那个 commit；
HEAD^^ 表示 HEAD 所指向的 commit 往前数两个 commit。

### ~

~ 的用法：在 commit 的后面加上 ~ 号和一个数，可以把 commit 往回偏移，偏移的数量是 ~ 号后面的数。例如：HEAD~5 表示 HEAD 指向的 commit 往前数 5 个 commit。

## 忽略文件 .gitignore

```shell
# 此行为注释 会被Git忽略

# 忽略 node_modules/ 目录下所有的文件
node_modules


# 忽略所有.vscode结尾的文件
.vscode

# 忽略所有.md结尾的文件
*.md

# 但README.md 除外
!README.md

# 会忽略 doc/something.txt 但不会忽略doc/images/arch.txt
doc/*.txt

# 忽略 doc/ 目录下所有扩展名为txt文件

doc/**/*.txt

```
