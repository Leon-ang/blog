---
title: theme-reco
date: 2020-05-29
---
### createElement的问题

* 繁琐不简洁
* 不直观，无法一眼看出所描述的结构
* 不优雅，开发体验不好

### JSX介绍

`JSX`是 `JavaScript XML`的简写，表示了在Javascript代码中写XML(HTML)格式的代码 (JS写HTML代码)

### 使用步骤

```
- 导入react和reactDOM包
- 使用jsx语法创建react元素
- 把react元素渲染到页面中
```

![]()

1. 导入react和reactDOM

   ```
   import React from 'react'
   import ReactDOM from 'react-dom'
   ```

   ![]()
2. 创建react元素

   ```
   const title = <h1 title="哈哈"></h1>
   ```

   ![]()
3. 渲染元素

   ```
   ReactDOM.render(title, document.getElementById('root'))
   ```

   ![]()

### JSX注意点

* 只有在脚手架中才能使用jsx语法
  * 因为JSX需要经过babel的编译处理，才能在浏览器中使用。脚手架中已经默认有了这个配置。
* JSX必须要有一个根节点， `<></>` `<React.Fragment></React.Fragment>`
* 没有子节点的元素可以使用 `/>`结束
* JSX中语法更接近与JavaScript
  * `class` =====> `className`
  * `for`========> `htmlFor`
  * JSX可以换行，如果JSX有多行，推荐使用 `()`包裹JSX，防止自动插入分号的bug
