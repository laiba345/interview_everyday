git分支
- 创建一个分支
```
git branch <branch-name>
```
- 切换到新分支进行开发
```
git checkout <branch-name>
```
- 创建一个新的分支,并将工作目录切换到新分支
```
git checkout -b <branch-name>
```
- 将本地新创建的分支推送到远程仓库, 第一次可能需要使用-u参数来将本地分支与远程分支关联起来;后续推送到会只需要是运行git push命令即可
```
git push -u origin <branch-name>
```
