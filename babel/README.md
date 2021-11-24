## Babel 是什么？

Babel 是一个工具链，主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

## @babel/core

Babel 的核心功能包含在 @babel/core 模块中。

## @babel/cli

@babel/cli 是一个能够从终端（命令行）使用的工具。比如编译。

```
./node_modules/.bin/babel src --out-dir dist
```

## 插件

代码转换功能以插件的形式出现，插件是小型的 JavaScript 程序，用于指导 Babel 如何对代码进行转换。你甚至可以编写自己的插件将你所需要的任何代码转换功能应用到你的代码上。

插件分为两种: 语法插件和转换插件。

插件在 Presets 前运行。从前往后执行。

## 预设

预设是一组插件。

预设的执行顺序是从后往前执行。

官方预设

```
@babel/preset-env
@babel/preset-typescript
@babel/preset-react
@babel/preset-flow
```

### @babel/preset-env

@babel/preset-env 所包含的插件将支持所有最新的 JS 特性(ES2015,ES2016 等，不包含 stage 阶段)，将其转换成 ES5 代码。

如果你没有在 Babel 配置文件中(如 .babelrc)设置 targets 或 ignoreBrowserslistConfig，@babel/preset-env 会使用 .browserslist 配置源。

即使不设置 targes，也会有一个默认值，规则为 > 0.5%, last 2 versions, Firefox ESR, not dead。

## polyfill

因为语法转换只是将高版本的语法转换成低版本的，但是新的内置函数、实例方法无法转换。这时，就需要使用 polyfill 上场了，顾名思义，polyfill 的中文意思是垫片，所谓垫片就是垫平不同浏览器或者不同环境下的差异，让新的内置函数、实例方法等在低版本浏览器中也可以使用。

### 全局@babel/polyfill

@babel/polyfill 体积比较大，整体引入既增加项目体积，又污染了过多的变量，所以更推荐使用 preset-env 来按需引入 polyfill。

因为全局引入 import "@bable/polyfill"相当于引入了如下两个库，这意味着不仅不能按需加载还有全局空间被污染的问题。因为他是通过向全局对象和内置对象的 prototype 上添加方法来实现的。

```
import "core-js/stable";
import "regenerator-runtime/runtime";
```

### preset-env 使用按需引入 polyfill。

```js
presets: [
  [
    "@babel/preset-env",
    {
      useBuiltIns: "usage", // usage-按需引入 entry-入口引入（整体引入） false-不引入polyfill
      corejs: 2, // 2-corejs@2  3-corejs@3
    },
  ],
];
```

## @babel/plugin-transform-runtime 和 @babel/runtime 实现代码复用

这两个插件结合使用会大大减少代码体积

babel/runtime 并不是开发依赖，而是项目生产依赖。编译时使用了 plugin-transform-runtime，你的项目就要依赖于 babel/runtime，所以这两个东西是一起使用的。

### polyfill

上面说了 plugin-transform-runtime 主要是负责将工具函数转换成引入的方式，减少重复代码，而 babel-polyfill 则是引入相关文件模拟兼容环境。babel-polyfill 有一个问题就是引入文件会污染变量，其实 plugin-transform-runtime 也提供了一种 runtime 的 polyfill。有点类似@babel/preset-env 预设。

这种写法更好，既减少了代码体积又按需加载了 polyfill

```js
"plugins": [["@babel/plugin-transform-runtime", { "corejs": "3" }]]
```

## 配置文件

支持 babel.config.js、babel.config.json、.babelrcjs、.babelrc.json、package.json 文件里面的 babel key。

## babel 的工作流程

Babel 的三个主要处理步骤分别是： 解析（parse），转换（transform），生成（generate）。
