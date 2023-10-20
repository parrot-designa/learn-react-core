# learn-react-core

一个学习 react 源码的库

1. 使用 cra 创建 react 项目

npx create-react-app my-react-core

2. 下载 react 源码

git clone https://github.com/facebook/react

3. 回滚到某一个 git

git reset --hard 80f3d88190c07c2da11b5cac58a44c3b90fbc296

4. 使用 nrm 来切换镜像源地址

//全局安装 nrm
npm install nrm/yrm -g
//查询镜像列表
nrm/yrm list
//增加源地址
nrm/yrm add taobao1 ​https://npm.taobao.org/

5. 使用 yrm 切换到 taobao 镜像进行安装

- 1. RequestError: socket hang up 安装 electron 报错

然后终端执行 npm config set electron_mirror https://npm.taobao.org/mirrors/electron/

继续安装 不报错了

6. 修改 rollup 配置文件 增加 sourcemap 配置

./scripts/rollup/build.js

7. 执行 npm run build

======>
