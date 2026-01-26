# HealPurr 🐾

> 猫咪健康档案管理系统 - 记录每一次就诊，守护每一份健康

HealPurr 是一个基于 Astro 构建的猫咪医疗记录博客网站，用于记录和管理猫咪的健康档案、就诊记录和病史信息。

## ✨ 特性

- 🐱 **多猫咪管理** - 支持记录多只猫咪的健康档案
- 📅 **时间线展示** - 以时间线形式展示所有医疗记录
- 🏷️ **分类标签** - 支持疫苗、手术、体检、治疗、复查等多种记录类型
- 📱 **响应式设计** - 完美适配桌面和移动设备
- 🎨 **美观界面** - 使用 Tailwind CSS 构建的现代化暗色主题
- 📝 **Markdown 支持** - 使用 Markdown 格式编写详细的医疗记录
- ⚡ **静态生成** - 基于 Astro 的静态站点生成，加载速度快

## 🚀 技术栈

- **框架**: [Astro](https://astro.build/) - 现代化的静态站点生成器
- **样式**: [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- **内容**: [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) - 结构化内容管理
- **Markdown**: [MDX](https://mdxjs.com/) - 支持 JSX 的 Markdown
- **部署**: [Vercel](https://vercel.com/) - 零配置部署平台

## 📁 项目结构

```
HealPurr/
├── public/                 # 静态资源
│   └── cats/               # 猫咪图片
├── src/
│   ├── components/        # 组件
│   │   ├── Header.astro   # 头部导航
│   │   ├── CatSelector.astro  # 猫咪选择器
│   │   └── Timeline.astro # 时间线组件
│   ├── content/           # 内容集合
│   │   ├── config.ts      # 内容配置
│   │   └── cats/          # 猫咪医疗记录
│   ├── layouts/           # 布局
│   │   └── RecordLayout.astro  # 记录详情布局
│   └── pages/             # 页面
│       ├── index.astro    # 首页
│       ├── cat/           # 猫咪专属页面
│       │   ├── orange.astro
│       │   ├── white.astro
│       │   └── black.astro
│       └── records/       # 记录详情页
│           └── [slug].astro
├── astro.config.mjs       # Astro 配置
├── tailwind.config.mjs    # Tailwind 配置
├── vercel.json            # Vercel 部署配置
└── package.json           # 项目依赖
```

## 🛠️ 本地开发

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn
- VSCode（推荐）- 需要安装 Astro 扩展

### VSCode 扩展

项目已包含推荐的 VSCode 扩展配置，打开项目后会自动提示安装以下扩展：

- **Astro** - Astro 语言支持
- **Prettier** - 代码格式化
- **ESLint** - 代码检查
- **Tailwind CSS IntelliSense** - Tailwind CSS 智能提示

### 安装依赖

```bash
npm install
```

**重要**：安装依赖后，必须执行以下步骤来解决 TypeScript 错误：

1. **重启 VSCode**：
   - 按 `Ctrl+Shift+P`（Windows/Linux）或 `Cmd+Shift+P`（Mac）
   - 输入 "Developer: Reload Window" 并回车

2. **如果仍有错误**，尝试：
   - 删除 `node_modules` 和 `package-lock.json`
   - 重新运行 `npm install`
   - 再次重启 VSCode

3. **确保已安装 Astro 扩展**：
   - 在 VSCode 中打开扩展面板（Ctrl+Shift+X）
   - 搜索并安装 "Astro" 扩展（由 Astro Team 提供）

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:4321](http://localhost:4321) 查看网站。

### 构建生产版本

```bash
npm run build
```

构建后的文件将输出到 `dist` 目录。

### 预览生产版本

```bash
npm run preview
```

## 📝 添加医疗记录

医疗记录使用 Markdown 格式存储在 `src/content/cats/` 目录下。

### 文件命名规范

```
{猫咪id}-{日期}-{类型}.md
```

例如：

- `orange-2024-01-15-vaccine.md` - 小橘的疫苗记录
- `white-2024-01-10-surgery.md` - 小白的手术记录
- `black-2023-12-20-checkup.md` - 小黑的体检记录

### 记录模板

```markdown
---
cat: orange | white | black
catName: 猫咪名字
title: 记录标题
date: YYYY-MM-DD
type: 疫苗 | 手术 | 体检 | 治疗 | 复查
doctor: 医生名字（可选）
weight: 体重（可选）
temperature: 体温（可选）
tags: [标签1, 标签2]（可选）
---

这里是详细的记录内容，使用 Markdown 格式编写。

## 症状描述

...

## 诊断结果

...

## 治疗方案

...

## 医生建议

...
```

## 🌐 部署到 Vercel

### 自动部署

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. Vercel 会自动检测 Astro 项目并部署

### 手动配置

项目已包含 `vercel.json` 配置文件，支持：

- 自动构建和部署
- 香港区域部署（hkg1）
- 静态站点输出

### 环境变量（可选）

如果需要自定义域名或其他配置，可以在 Vercel 项目设置中添加环境变量。

## 🐾 猫咪信息

当前项目记录了以下猫咪的健康档案：

| 猫咪 | ID     | 颜色 | Emoji |
| ---- | ------ | ---- | ----- |
| 小橘 | orange | 橘色 | 🐱    |
| 小白 | white  | 白色 | 🐈    |
| 小黑 | black  | 黑色 | 🐈‍⬛    |

## 🎨 自定义主题

### 修改颜色

在 `tailwind.config.mjs` 中修改主题颜色：

```javascript
export default {
  theme: {
    extend: {
      colors: {
        // 自定义颜色
      },
    },
  },
};
```

### 修改猫咪信息

在以下文件中修改猫咪信息：

- `src/components/Header.astro` - 导航栏
- `src/components/CatSelector.astro` - 选择器
- `src/components/Timeline.astro` - 时间线

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

感谢所有为猫咪健康付出的兽医和宠物医院工作人员！

---

**HealPurr** - 用心记录每一份健康 🐾
