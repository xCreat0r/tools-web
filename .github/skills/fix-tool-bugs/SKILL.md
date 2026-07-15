---
name: fix-tool-bugs
description: "使用场景: 修复 src/components/tools 下工具组件问题（解析/校验/复制报错）；Use when debugging existing tools and applying minimal targeted fixes without changing unrelated UX"
---

# 修复工具问题

在保持现有 UX 不变的前提下，对工具组件进行聚焦修复。

## 作用范围

- 主要目标：`src/components/tools/*.js`
- 次要目标（必要时）：`src/hooks/useClipboard.js`、`src/app/page.js`

## 约束

- 优先修复根因，不做表面绕过
- 除非修复必须，保持组件 API 与可见布局不变
- 不重构无关文件
- 保持现有代码风格一致

## 执行步骤

1. 根据反馈复现问题，或明确失败路径。
2. 仅修改最小必要代码区域。
3. 确保用户可见报错文案清晰、可操作。
4. 检查改动文件没有新增 lint/语法错误。
5. 输出根因与修复点总结。

## 常见修复模式

- 在转换/解析前先校验空输入。
- 统一重置过期的 output/error 状态。
- 复制按钮状态与输出可用性保持一致。
- 文本转换使用 UTF-8 安全的编码/解码流程。
