# 网站结构和布局设计

## 1. 网站架构

### 1.1 单页应用结构
- 采用单页滚动式布局，所有内容在一个页面中展示
- 固定导航栏，支持锚点跳转到各个部分
- 响应式设计，适配桌面、平板和手机

### 1.2 页面分区 (Sections)
1. **Header** - 导航栏
2. **Hero** - 个人介绍区
3. **About** - 关于我
4. **Education** - 教育背景
5. **Experience** - 工作经历
6. **Projects** - 项目经验
7. **Skills** - 技能展示
8. **Awards** - 荣誉奖项
9. **Contact** - 联系方式
10. **Footer** - 页脚

## 2. 详细布局设计

### 2.1 Header (导航栏)
- 固定在页面顶部
- 左侧显示姓名/Logo
- 右侧显示导航菜单 (About, Education, Experience, Projects, Skills, Awards, Contact)
- 移动端采用汉堡菜单

### 2.2 Hero Section (英雄区)
- 全屏或半屏高度
- 左侧：个人信息
  - 姓名：William (Junjun) Hu
  - 职位：Data Scientist & Machine Learning Engineer
  - 简短描述：一句话介绍专业背景
  - CTA按钮：下载简历、联系我
- 右侧：个人照片或专业插图
- 背景：渐变色或几何图案

### 2.3 About Section (关于我)
- 两列布局
- 左侧：个人简介文本
- 右侧：关键信息卡片
  - 位置：Thunder Bay, ON
  - 邮箱：jhu29@lakeheadu.ca
  - 电话：+1-8073578514
  - 语言：English (Fluent), Chinese (Native)

### 2.4 Education Section (教育背景)
- 时间线布局
- 每个教育经历包含：
  - 学校名称和logo
  - 学位和专业
  - 时间段
  - GPA
  - 重要课程
  - 特殊荣誉

### 2.5 Experience Section (工作经历)
- 卡片式布局
- 每个工作经历包含：
  - 公司名称
  - 职位
  - 时间段
  - 工作描述（要点列表）
  - 技能标签

### 2.6 Projects Section (项目经验)
- 网格布局 (2-3列)
- 每个项目卡片包含：
  - 项目名称
  - 项目描述
  - 技术栈标签
  - 项目链接（GitHub、论文等）
  - 项目时间

### 2.7 Skills Section (技能展示)
- 分类展示
- 每个技能类别使用进度条或标签云
- 技能分类：
  - Programming Languages
  - Data Science Libraries
  - Tools & Platforms
  - Databases
  - Operating Systems

### 2.8 Awards Section (荣誉奖项)
- 简洁的列表或卡片布局
- 包含奖项名称、颁发机构、时间

### 2.9 Contact Section (联系方式)
- 居中布局
- 联系信息
- 社交媒体链接
- 简单的联系表单（可选）

### 2.10 Footer (页脚)
- 版权信息
- 返回顶部按钮

## 3. 设计元素

### 3.1 配色方案
- 主色：深蓝色 (#2C3E50)
- 辅助色：浅蓝色 (#3498DB)
- 强调色：绿色 (#27AE60)
- 中性色：灰色系 (#ECF0F1, #BDC3C7, #7F8C8D)
- 背景色：白色 (#FFFFFF)

### 3.2 字体
- 标题：Montserrat (现代、专业)
- 正文：Open Sans (易读、友好)
- 代码：Fira Code (等宽字体)

### 3.3 间距和布局
- 容器最大宽度：1200px
- 栅格系统：12列
- 间距单位：8px的倍数 (8px, 16px, 24px, 32px, 48px, 64px)

### 3.4 交互效果
- 平滑滚动
- 悬停效果
- 淡入动画
- 按钮点击反馈
- 导航高亮

## 4. 响应式断点
- 桌面：>= 1024px
- 平板：768px - 1023px
- 手机：< 768px

## 5. 可访问性
- 语义化HTML
- 适当的对比度
- 键盘导航支持
- Alt文本
- ARIA标签

