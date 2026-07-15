---
name: add-api-tool-route
description: "使用场景: 在 src/app/api 下新增轻量工具接口并返回 JSON；Use when adding a lightweight Next.js App Router API route and optionally wiring it to a tool component"
---

# 新增 API 工具路由

在 App Router 结构中新增一个用于工具功能的轻量 API 路由。

## 路由约定

- 路径：`src/app/api/<feature>/route.js`
- 导出 HTTP 处理函数，例如 `GET`、`POST`
- 使用 `Response.json(...)` 返回 JSON

## 执行步骤

1. 先定义请求与响应数据结构。
2. 创建 route handler，包含输入校验与明确的错误状态码。
3. 无必要不引入复杂异步逻辑，保持实现简单。
4. 若要求联动 UI，只改对应工具组件。
5. 快速验证接口可用（可参考已有测试路由模式）。

## 约束边界

- 路由代码中不得写入密钥或敏感信息。
- 不做大范围框架级改动。
- 响应结构保持稳定，便于前端消费。

## 输出结果

- 在 `src/app/api/` 下新增 route 文件
- 可选的最小前端接线
- 接口使用说明（简要）
