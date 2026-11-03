# AGENTS.md — 个人网站（leiqinghe.cloud）开发指南

> 线上地址：https://leiqinghe.cloud · 仿 Aave 风格浅色渐变单页站
> 完整上下文（服务器架构/工具站/HTTPS 等）见 **devtools 仓库的 AGENTS.md**。

## 项目概述

- 技术栈：Vite + React 18 + TypeScript + Tailwind CSS v4（**无 UI 库、无动画库**）
- 形态：纯静态单页（锚点导航），nginx 直接托管，无后端
- 服务器：`101.201.56.200:/var/www/portfolio-site`（ssh 免密）
- GitHub：`leiqinghe/portfolio-site`（公开）
- 本地工程：`~/Documents/code/leiqinghe/portfolio-site`

## ⚡ 修改 → 发布（速查）

```bash
cd ~/Documents/code/leiqinghe/portfolio-site

# 先发预览确认（不影响主站）
npm run build -- --base=/preview/ && rsync -az --delete dist/ 101.201.56.200:/var/www/preview/
# → 访问 https://leiqinghe.cloud/preview 确认

# 确认后正式发布（nginx 静态托管，无需重启任何服务）
npm run build && rsync -az --delete dist/ 101.201.56.200:/var/www/portfolio-site/

# 验收
curl -s -o /dev/null -w "%{http_code}\n" https://leiqinghe.cloud/   # 200

# 提交推送（git 已对 github.com 配代理；gh 命令需 export HTTPS_PROXY=http://127.0.0.1:7897）
git add -A && git commit -m "..." && git push
```

回滚：旧站镜像 `devcore-portfolio:backup-20261103`（容器已停未删）；nginx 443 `location /` 改回 `proxy_pass http://127.0.0.1:8180` + `docker start devcore-portfolio` 即可恢复旧站。

## 文件地图

| 文件 | 作用 |
|---|---|
| `src/App.tsx` | **全部页面内容**：数据常量（PROJECTS/TAGS/TECHS/FEATURES）+ 组件（Nav/Hero/WindowFrame/TagMarquee/FocusProject/Projects/TechStack/Contact/Footer）+ `useReveal()` |
| `src/index.css` | Tailwind 入口 + `@theme` hex 色板覆盖 + 光晕/窗框/跑马灯/reveal 全部自定义动画 |
| `index.html` | 标题/meta/favicon（渐变「雷」方块 SVG） |
| `public/assets/icons/` | 项目卡片图标（AI 生图统一 3D 蓝紫风格，256px） |
| `public/assets/devtools-hero.png` | 首屏焦点截图（DevTools 真实站点截取，1440x900） |
| 服务器 `/etc/nginx/sites-available/portfolio` | 80(301跳https) / 443(SSL+静态) / /preview/ 通道 / acme-challenge 豁免 |

## ⚠️ 工程红线（违反会在旧内核浏览器上出问题）

1. **颜色只能用 hex**：`@theme` 已覆盖用到的色阶（zinc/indigo/purple/sky 全系）；**新增色阶必须先在 `@theme` 加 hex**——Tailwind v4 默认 OKLCH 在旧内核不渲染（文字会隐形）
2. **动画只用 CSS**：渐入 = `className="reveal"`（`useReveal()` 自动观察）；**禁止引入 framer-motion 或任何 JS 动画库**（旧内核 GPU 合成层 bug）；新动画写进 index.css 并补 `prefers-reduced-motion` 降级
3. **动画层与交互层分离**：hover 动效卡片 = 外层 `.reveal`（带 transitionDelay）+ 内层卡片放 hover 类，避免 transition/transform 冲突和 hover 延迟
4. **public 资产引用**：一律 `` `${import.meta.env.BASE_URL}assets/xxx` ``（`/preview` 子路径构建时 Vite 不改写 public 引用，硬编码 `/assets/...` 会 404）

## 新增板块三步

1. `App.tsx`：定义数据常量 → 写组件函数（内容块加 `reveal` 类）
2. 挂载到 `App()` 的 `<main>` 中
3. 需要导航锚点的话在 `Nav` 加链接（`href="#id"`）

## 待补占位

- 联系邮箱当前为 `hello@leiqinghe.cloud`（域名邮箱未配置，可换真实邮箱）
- GitHub 链接 `github.com/leiqinghe` 已确认正确
