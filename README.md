# learn-react-core
一个学习react源码的库

1. 使用cra创建react项目

npx create-react-app my-react-core

2. 下载react源码

git clone https://github.com/facebook/react

3. 回滚到某一个git

git reset --hard 80f3d88190c07c2da11b5cac58a44c3b90fbc296

4. 使用nrm来切换镜像源地址

//全局安装nrm
npm install nrm/yrm -g
//查询镜像列表
nrm/yrm list
//增加源地址
nrm/yrm add taobao1 ​https://npm.taobao.org/

5. 使用yrm切换到taobao镜像进行安装

- 1. RequestError: socket hang up 安装electron报错

然后终端执行npm config set electron_mirror https://npm.taobao.org/mirrors/electron/

继续安装 不报错了

6. 修改rollup配置文件 增加sourcemap配置

./scripts/rollup/build.js 

7. 执行npm run build

======>
