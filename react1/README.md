### create-react-app 创建的应用不能随意修改配置，所以用到了 react-app-rewired

注意 react-app-rewired@2.x版本需要搭配 customize-cra 使用。所以 customize-cra 也需要安装

1. 安装好后，在 package.json 里面添加 react-app-rewired 命令
2. 添加覆盖配置文件 config-overrides.js
3. 使用新命令启动项目
