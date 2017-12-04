
## API

### Props

属性名称                  | 类型                | 默认值   | 描述
--------------------- | ----------------- | ----- | -----------------------------------------------------------------
style                 | object            | {}    |
theme                 | string or object  | {}    | 主题，目前只提供了 pagurian 主题，你可以通过registerTheme 自己定义一套主题
group                 | string            |       | 图表的分组，用于联动
option                | object.isRequired |       | 图表的配置项和数据，具体见[配置项手册](http://echarts.baidu.com/option.html#title)。
notMerge              | boolean           | true  | 是否不跟之前设置的option进行合并，默认为false，即合并。
notRefreshImmediately | boolean           | false | 在设置完option后是否不立即刷新画布，默认为false，即立即刷新。
onEvents              | object            | {}    | 可以配置多个事件，[参考](http://echarts.baidu.com/api.html#events)


### 静态接口

- [connect](http://echarts.baidu.com/api.html#echarts.connect)
- [disConnect](http://echarts.baidu.com/api.html#echarts.disconnect)
- [dispatchAction](http://echarts.baidu.com/api.html#echarts.dispose)
- [getInstanceByDom](http://echarts.baidu.com/api.html#echarts.getInstanceByDom)
- [getMap](http://echarts.baidu.com/api.html#echarts.getMap)
- [registerMap](http://echarts.baidu.com/api.html#echarts.registerMap)
- [registerTheme](http://echarts.baidu.com/api.html#echarts.registerTheme)
