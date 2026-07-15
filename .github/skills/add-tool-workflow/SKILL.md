---
name: add-tool-workflow
description: "使用场景: 新增工具功能、创建 src/components/tools 下的新工具卡片、在 src/app/page.js 中接入 dynamic import 与 Tabs；Use when adding a new toolbox tool, wiring tab trigger/content, keeping shadcn style"
---

# 新增工具工作流

为当前 Next.js 工具箱新增一个工具，并接入首页 Tabs 布局。

## 输入参数

- 工具组件名（PascalCase，例如：`HashTool`）
- Tab 的 value（小写，例如：`hash`）
- Tab 显示文案（可带 emoji，例如：`🔑 Hash`）
- Loading 文案（例如：`Hash Tool`）

## 项目约束

- 工具组件必须放在 `src/components/tools/`
- 首页接线统一放在 `src/app/page.js`
- 复用现有 shadcn 组件（如 `Card`、`Button`、`Textarea`）
- 不引入新的设计 token，不硬编码新颜色
- 保持功能最小可用、实用优先

## 执行步骤

1. 在 `src/components/tools/<ToolName>.js` 新建工具组件。
2. 在 `src/app/page.js` 新增 dynamic import，并复用 `ToolLoadingCard` 作为 loading。
3. 在现有 `TabsList` 中新增一个 `TabsTrigger`。
4. 新增对应的 `TabsContent` 并渲染该工具组件。
5. 如 tab 数量变化，仅按需调整 `TabsList` 的 grid class。
6. 做基础检查（lint 或语法检查），确保无明显错误。

## 输出结果

- 新工具组件文件已创建
- 首页 tabs 已接入并可见
- 返回变更文件简要说明
