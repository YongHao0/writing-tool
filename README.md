# 蓬莱 Mirage (创作者工具)

<a href="https://github.com/electron/electron">
    <img src="https://img.shields.io/badge/electron-%5E2.0.4-brightgreen" alt="electron">
</a>

产品代号：蓬莱 Mirage
方案：Electron + web 纯本地工具
用途：图文创作

## 运行

```bash
# 安装依赖
yarn install

# 运行
yarn start

# 打包
yarn build

# 单元测试
yarn test

# eslint
yarn lint
```

## 功能

- [x] 一. **基本信息**

  - [x] 1. 个人信息：设置昵称、头像、邮箱、社交网络地址
  - [x] 2. 个人信息卡片：根据个人信息生成
  - [x] 3. 设置工作台：本地的一个目录，后续的文件全部存入此目录

- [x] 二. **图床**

  - [x] 1. 支持导入图片：本地、网络路径、截图粘贴（不做截图工具，只粘贴其他方式的截屏）
  - [x] 2. 保存到本地，可本地浏览
  - [x] 3. 图片后期再说云端同步的事情

- [x] 三. **目录/文件管理**

  - [x] 1. 创建子文件夹、重命名
  - [x] 2. 创建文件、重命名
  - [x] 3. 支持根据 url 创建文件：抓取内容并创建为本地文件，自动保存图片并转化路径
  - [x] 4. 记录修改日志

- [x] 四. **文件编辑**

  - [x] 1. markdown 编辑器
  - [x] 2. 块编辑：标题、文字段落、表格、引用文字、图片/图集（从图床选择）、链接、视频、个人卡片
  - [x] 3. 编辑功能：后退/前进
  - [x] 4. 自动保存、文件落本地
  - [x] 5. 文件考虑用 git 方式云端备份

- [x] 五. **发布**
  - [x] 1. 模板管理
  - [x] 2. 预览
  - [x] 3. 发布：网站，按照 gitbook 本地编译，扫码打开/在浏览器打开
  - [x] 4. 后续再说用蚁小二分发
  - [x] 5. 本地记录发布历史

## 分支描述

|    分支    |     作用     |       描述       |
| :--------: | :----------: | :--------------: |
|   master   | 生产环境分支 |  部署上线/回滚   |
|    test    |   测试分支   |     测试使用     |
|  develop   |   开发分支   |     联调使用     |
|  feature/  |   功能分支   |     开发分支     |
|  release/  |   发布分支   |                  |
|  hotfix/   |   补丁分支   |     开发分支     |
| yyyy-mm-dd |   版本标签   | 举例：2022-01-10 |

## 项目结构

```
.
├── build                  # 打包目录
├── dist                   # 打包目录
├── scripts                # 脚本
├── src                    # 开发目录
    ├── main               # 程序启动
    ├── renderer           # 程序主体
        ├── assets         # 静态资源目录
        ├── components     # 通用模块组件
        ├── router         # 路由设置
        ├── App.vue        # 项目入口文件
        └── main.js        # 项目核心文件
    └── index.ejs          # 模版引擎
├── static                 # 纯静态资源目录
├── test                   # 自动化测试目录
├── .babelrc               # Babel 配置
├── .eslintignore          # ESlint 排除配置
├── .eslintrc.js           # ESlint 配置
├── .gitignore             # Git 管理排除配置
├── .travis.yml            # Travis CI 配置
├── appveyor.yml           # AppVeyor CI 配置
├── LICENSE                # 许可
├── package.json           # 项目配置
└── README.md              # 说明文档
```

## 参考产品

● appflowy
● getdrafts
● Deepdwn by billiam [https://billiam.itch.io/deepdwn](https://billiam.itch.io/deepdwn)