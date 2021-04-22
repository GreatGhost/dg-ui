# fire-ui-component

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```


### vue基础语法涉及
- 组件基本语法
- 组件通讯
- 插槽的使用
- props校验
- 过渡与动画处理
- 计算属性和监听属性
- v-model 语法糖
- vue插件机制
- npm 发布


### 掌握封装组件的技巧和语法
- 学会造轮子，了解element-ui组件库的实现原理
- 搭建和积累自己的UI组件库


### 封装组件

- 组件通信
- 组件插槽
- props校验

### 封装button

type:primary success danger warning
plain 
round 是否是圆角 boolean 默认false
circle 是否是原型 boolean 默认false
disabled 是否禁用 boolean 默认false
icon 是否有icon


### dialog
- vue过渡动画
- sync修饰符:是一个语法糖
- 具名插槽 v-slot
- 插槽构成 header 、body、footer 
- 控制dialog显示、隐藏
- scoped的作用
1.给样式选择器添加一个随机属性选择器
2.给元素添加一个data属性
- ::v-deep .one-button:first-child{}
``` javascript

    // 老语法
    <template slot="title"></template>
    // 新语法
    <template v-slot:title>
        
    </template>

```
### input组件封装
- 属性
1.type
2.placeholder
3.disabled
4.清空value
5.密码框是否可见
- 事件
1.change
2.blur
3.focus

- 基本结构


### switch
- 开关颜色


### 前端代码规范

[如何让一个前端项目变得更加规范？]()




















### 参考文档和视频

[哔哩哔哩组件封装](https://www.bilibili.com/video/BV1nJ411V75n?from=search&seid=17093487258785068881)

[vue官方文档](https://vuejs.bootcss.com/guide/)
[vue-cli文档](https://cli.vuejs.org/zh/guide/)