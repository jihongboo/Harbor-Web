# Harbor 官方网站 (Harbor Website)

本仓库包含了 **Harbor** 的官方宣传网站。Harbor 是一款专为 Apple 生态打造的家庭下载与媒体服务器客户端。

该网站采用 **苹果官方极简白色风格（Minimalist White Style）**，使用纯原生 HTML5、CSS3 (Vanilla CSS) 以及原生 ES6+ JavaScript 编写，无任何第三方包依赖，极速轻量，专门针对 GitHub Pages 进行优化，支持开箱即用。

## 目录结构

```text
Harbor-Web/
├── index.html        # 官网入口主页
├── css/
│   └── style.css     # 核心苹果极简白样式表
├── js/
│   └── main.js       # 滚动淡入、多端标签切换、画廊幻灯片等交互逻辑
├── assets/
│   └── images/       # 界面截图与 App 图标资源
└── README.md         # 本项目说明文档
```

## 本地开发与预览

您可以通过以下几种方式在本地快速预览网站：

1. **直接打开**：
   在文件管理器中双击 `index.html`，即可直接在任意浏览器中打开并预览（在某些旧版浏览器中，图片可能需要放在服务器容器中加载，但现代浏览器完全支持本地文件预览）。

2. **使用 Python 临时服务器**：
   在终端中进入项目根目录，运行以下命令：
   ```bash
   python3 -m http.server 8000
   ```
   然后在浏览器中访问 `http://localhost:8000` 即可。

3. **使用 VS Code 插件**：
   若使用 VS Code 编辑器，可安装 **Live Server** 插件，右键点击 `index.html` 并选择 `Open with Live Server` 即可实时预览和调试。

## GitHub Pages 部署指南

由于本项目是纯静态的，您可以零配置直接将其部署到 GitHub Pages。步骤如下：

### 第一步：将代码推送至您的 GitHub 仓库
1. 在 GitHub 上新建一个名为 `Harbor-Web`（或任意名称）的公开/私有仓库。
2. 在本地终端进入本目录，将本地仓库与 GitHub 关联并推送：
   ```bash
   git add .
   git commit -m "feat: init official website with Apple minimal white theme"
   git branch -M main
   git remote add origin git@github.com:<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```

### 第二步：在 GitHub 上启用 Pages 托管
1. 打开您的 GitHub 仓库页面，点击顶部的 **Settings** 选项卡。
2. 在左侧导航栏中，找到 **Code and automation** 区域，点击 **Pages**。
3. 在 **Build and deployment** 下的 **Source** 选择 **Deploy from a branch**（默认选项）。
4. 在 **Branch** 下拉菜单中，选择 `main`，并在目录选择框中选择 `/ (root)`。
5. 点击 **Save** 按钮。

### 第三步：访问您的官方网站
* 保存后，GitHub Actions 会自动在后台开始构建和发布。
* 大约等待 1-2 分钟后，刷新 Pages 设置页面，您会在顶部看到一条绿色的提示：“Your site is live at `https://<YOUR_USERNAME>.github.io/<YOUR_REPO_NAME>/`”。
* 点击该链接即可访问已上线的官方网站！
