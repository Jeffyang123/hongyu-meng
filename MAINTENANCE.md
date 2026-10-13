# 课题组官网维护说明（V2）

## 项目结构

```
v2/
├── src/
│   ├── data/           ← 所有内容数据（YAML 格式，日常维护主要改这里）
│   │   ├── site.yml          站点配置（标题、联系方式、Logo）
│   │   ├── research.yml      研究方向、目标、子方向、关键词
│   │   ├── members.yml       团队成员信息
│   │   ├── publications.yml  论文列表
│   │   └── news.yml          新闻动态
│   ├── pages/         ← 页面路由
│   │   ├── *.astro          中文页面（/）
│   │   └── en/*.astro       英文页面（/en/）
│   ├── components/    ← 可复用组件
│   ├── layouts/       ← 页面布局
│   └── styles/        ← 全局样式
├── public/
│   ├── images/
│   │   ├── logo/            单位/课题组 Logo 图片
│   │   ├── people/          成员头像照片
│   │   └── research/        研究方向配图（V2 新增）
│   └── files/               PDF 等附件
├── package.json
├── astro.config.mjs
└── tailwind.config.mjs
```

## 日常维护操作

### 1. 修改成员信息
编辑 `src/data/members.yml`。
- 添加成员：在列表末尾新增一条记录
- 删除成员：删除对应条目
- 修改信息：直接编辑对应字段
- 替换头像：将照片放入 `public/images/people/`，修改 YAML 中的 `photo` 路径

### 2. 修改论文
编辑 `src/data/publications.yml`。
- 添加论文：在列表开头新增一条（按时间倒序）
- 字段：year, title, authors, journal, doi, type
- type 可选：journal / conference / preprint

### 3. 修改新闻
编辑 `src/data/news.yml`。
- 添加新闻：在列表开头新增一条
- 字段：date, title, content, category, link（可选）

### 4. 修改研究方向
编辑 `src/data/research.yml`。
- **关键词（首页显示）**：修改 `keywords` 列表
  - V2 支持可选图片：设置 `image: /images/research/xxx.jpg` 即在文字上方显示图片
  - 设为 `image: null` 则不显示图片（纯文字）
  - `image_size`：`cover`（填满裁切）| `contain`（完整显示）| `auto`（原始比例）
  - **数量可增减**：添加/删除条目即可，页面网格自动适配列数
- **子方向**：修改 `sub_directions` 列表，同样支持可选图片
- **研究目标**：修改 `goals` 列表，支持可选图片

### 5. 修改导航/页脚
编辑 `src/data/site.yml`。
- 站点标题、描述、联系方式、社交链接
- V2 Logo 配置：
  - `lab_logo`：页眉 Logo 图片路径，设为 `null` 恢复默认 SVG 图标
  - `institute_logo`：页脚单位 Logo 路径，设为 `null` 只显示文字
  - `lab_logo_width/height`：Logo 显示尺寸（px），可调整
  - `institute_logo_width/height`：单位 Logo 显示尺寸

### 6. 替换照片
将照片放入 `public/images/people/`，修改 `members.yml` 中对应成员的 `photo` 路径。

### 7. 添加研究方向配图（V2 新增）
1. 将图片放入 `public/images/research/`（目录不存在则新建）
2. 编辑 `src/data/research.yml`
3. 在对应关键词或子方向中设置 `image: /images/research/你的图片名.jpg`
4. 可选设置 `image_size: cover`（默认）/ `contain` / `auto`

### 8. 修改招生信息
编辑 `src/pages/join.astro`（中文）和 `src/pages/en/join.astro`（英文）。
招生信息直接写在页面中，未抽离到 YAML。

## 本地预览

```bash
cd v2
npm install      # 首次运行需要安装依赖
npm run build    # 构建静态文件
npm run preview  # 本地预览（默认 http://localhost:4321）
```

开发模式（实时热更新）：
```bash
npm run dev
```

## 部署到 GitHub Pages

1. 将代码推送到 GitHub 仓库 `predictive-coding-lab.github.io`
2. GitHub Actions 会自动构建并部署（见 `.github/workflows/deploy.yml`）
3. 访问 `https://predictive-coding-lab.github.io` 查看网站

## V2 相比 V1 的增强

| 功能 | V1 | V2 |
|------|----|----|
| 页眉 Logo | 固定 SVG 图标 | 支持 YAML 配置图片 Logo，可调尺寸 |
| 页脚单位 Logo | 纯文字 | 支持图片 Logo，可调尺寸 |
| 研究关键词 | 固定4个纯文字 | 数量可增减，每个可配图片，网格自动适配 |
| 研究子方向 | 纯文字卡片 | 每个可配图片，可调显示模式 |
| 研究目标 | 纯文字+图标 | 可选配图 |
| 图片回退 | 无 | 图片加载失败自动隐藏，不影响布局 |

## 图片规格建议

| 位置 | 建议尺寸 | 格式 |
|------|----------|------|
| 页眉 Logo | 40×40 px | PNG/SVG |
| 页脚单位 Logo | 120×40 px | PNG/SVG |
| 研究方向配图 | 800×450 px (16:9) | JPG/WebP |
| 成员头像 | 400×400 px | JPG/PNG |
| PI 大头像 | 800×800 px | JPG/PNG |
