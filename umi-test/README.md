## 配置

支持两种配置 .umirc.ts 或 config/config.ts

## 环境变量

要么直接写在命令行，要么写在该根目录下的.env 文件中

我的想法是，不同环境公共配置写在.env 文件中，不同配置写在各自构建的命令行里面

UMI_ENV=staging 就会读取.umirc.staging.ts 里面的配置
