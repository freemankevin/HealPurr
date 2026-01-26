# HealPurr 🐾

> 猫咪健康档案管理系统 - 记录每一次就诊，守护每一份健康

HealPurr 是一个基于 Astro 构建的猫咪医疗记录博客网站，用于记录和管理猫咪的健康档案、就诊记录和病史信息。

## ✨ 特性

- 🐱 **多猫咪管理** - 支持记录多只猫咪的健康档案
- 📅 **时间线展示** - 以时间线形式展示所有医疗记录
- 🏷️ **分类标签** - 支持疫苗、手术、体检、治疗、复查等多种记录类型
- 📝 **Markdown 支持** - 使用 Markdown 格式编写详细的医疗记录

## �️ 本地开发

### 环境要求

- Node.js 18.0 或更高版本

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:4321](http://localhost:4321) 查看网站。

## 📝 添加医疗记录

医疗记录使用 Markdown 格式存储在 `src/content/cats/` 目录下。

### 文件命名规范

**格式**：`{猫咪id}-{日期}-{类型}.md`

**命名规则**：

- **猫咪 ID**：必须是 `tortoiseshell`、`cow` 或 `tabby` 之一
- **日期**：使用 YYYY-MM-DD 格式（例如：2024-01-15）
- **类型**：使用英文或拼音，建议使用以下类型之一：
  - `vaccine` - 疫苗
  - `surgery` - 手术
  - `checkup` - 体检
  - `treatment` - 治疗
  - `followup` - 复查

**示例**：

- `tortoiseshell-2024-01-10-surgery.md` - 米儿的手术记录
- `cow-2023-12-20-checkup.md` - 样儿的体检记录
- `tabby-2024-01-15-vaccine.md` - 九儿的疫苗记录

**注意事项**：

- 文件名必须使用小写字母
- 日期必须使用连字符分隔
- 文件名会自动成为 URL 路径（slug），所以建议保持简洁和可读性
- 虽然文件名格式不是硬性要求，但强烈建议遵循此格式以保持一致性

### 记录模板

```markdown
---
cat: tortoiseshell | cow | tabby # 猫咪 ID（必填）
catName: 猫咪名字 # 猫咪名称（必填）
title: 记录标题 # 记录标题（必填）
date: YYYY-MM-DD # 就诊日期（必填，必须是 Date 类型）
type: 疫苗 | 手术 | 体检 | 治疗 | 复查 # 记录类型（必填）
doctor: 医生名字 # 医生名字（可选）
weight: 体重 # 体重（可选，例如：5.2kg）
temperature: 体温 # 体温（可选，例如：38.3°C）
tags: [标签1, 标签2] # 标签数组（可选）
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

## 📷 图片存放规则

医疗记录中可能包含各种检查报告、X 光片、B 超图片等，这些图片应统一存放在 `public/medical/` 目录下。

### 目录结构

```
public/
└── medical/               # 医疗记录图片根目录
    ├── reports/           # 检查报告
    ├── xray/              # X 光片
    ├── ultrasound/         # B 超图片
    ├── blood/             # 血液检查
    └── others/            # 其他（药物、食品等）
```

### 分类说明

| 目录          | 用途                 | 示例文件名                                |
| ------------- | -------------------- | ----------------------------------------- |
| `reports/`    | 各类检查报告         | `tortoiseshell-2024-01-15-report.pdf`     |
| `xray/`       | X 光片               | `cow-2023-12-20-xray.jpg`                 |
| `ultrasound/` | B 超图片             | `tabby-2024-01-10-ultrasound.jpg`         |
| `blood/`      | 血液检查报告         | `tortoiseshell-2024-01-15-blood-test.jpg` |
| `others/`     | 其他（药物、食品等） | `medicine-2024-01-15.jpg`                 |

### 图片命名规范

建议使用以下格式命名图片文件：

```
{猫咪id}-{日期}-{类型}.{扩展名}
```

**示例**：

- `tortoiseshell-2024-01-15-blood-test.jpg` - 米儿的血常规报告
- `cow-2023-12-20-xray.jpg` - 样儿的 X 光片
- `tabby-2024-01-10-ultrasound.jpg` - 九儿的 B 超图片

### 在 Markdown 中引用图片

在医疗记录的 Markdown 文件中，使用绝对路径引用图片：

```markdown
## 血液检查

![血常规报告](/medical/blood/tortoiseshell-2024-01-15-blood-test.jpg)

### 生化指标

![生化报告](/medical/blood/tortoiseshell-2024-01-15-biochemistry.jpg)

## 影像检查

![X 光片](/medical/xray/cow-2023-12-20-xray.jpg)

![B 超图片](/medical/ultrasound/tabby-2024-01-10-ultrasound.jpg)
```

**注意事项**：

- 图片路径必须以 `/medical/` 开头
- 建议使用 `.jpg`、`.png` 或 `.webp` 格式
- 图片文件名建议与对应的 MD 文件名保持一致的命名规则
- 大文件（如 PDF 报告）也可以存放在对应目录中

**字段说明**：

| 字段          | 类型     | 必填 | 说明                                             |
| ------------- | -------- | ---- | ------------------------------------------------ |
| `cat`         | enum     | ✅   | 猫咪 ID，必须是 tortoiseshell、cow 或 tabby 之一 |
| `catName`     | string   | ✅   | 猫咪的名称                                       |
| `title`       | string   | ✅   | 记录的标题                                       |
| `date`        | Date     | ✅   | 就诊日期，格式为 YYYY-MM-DD                      |
| `type`        | string   | ✅   | 记录类型（疫苗、手术、体检、治疗、复查等）       |
| `doctor`      | string   | ❌   | 接诊医生的名字                                   |
| `weight`      | string   | ❌   | 猫咪的体重（例如：5.2kg）                        |
| `temperature` | string   | ❌   | 猫咪的体温（例如：38.3°C）                       |
| `tags`        | string[] | ❌   | 标签数组，用于分类和搜索                         |

## 🐾 猫咪信息

当前项目记录了以下猫咪的健康档案：

| 猫咪 | ID            | 颜色 | 品种图标          |
| ---- | ------------- | ---- | ----------------- |
| 米儿 | tortoiseshell | 橘色 | Tortoiseshell.svg |
| 样儿 | cow           | 黑白 | Cow.svg           |
| 九儿 | tabby         | 虎纹 | Tabby.svg         |

**图标说明**：

- 品种图标存放在 `public/cats/` 目录下
- 使用 SVG 格式，保证清晰度和可缩放性
- 在页面中通过 `src/config/cats.ts` 配置文件引用

**修改猫咪信息**：

- 直接在 `src/config/cats.ts` 中修改对应的字段即可

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件
