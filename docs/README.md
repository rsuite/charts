
## Props

属性名称                  | 类型                | 默认值   | 描述
--------------------- | ----------------- | ----- | -----------------------------------------------------------------
style                 | object            | {}    |
theme                 | string or object  | {}    | 主题，目前只提供了 pagurian 主题，你可以通过registerTheme 自己定义一套主题
group                 | string            |       | 图表的分组，用于联动
option                | object.isRequired |       | 图表的配置项和数据，具体见[配置项手册](http://echarts.baidu.com/option.html#title)。
notMerge              | boolean           | false | 是否不跟之前设置的option进行合并，默认为false，即合并。
notRefreshImmediately | boolean           | false | 在设置完option后是否不立即刷新画布，默认为false，即立即刷新。
onEvents              | object            | {}    | 可以配置多个事件，[参考](http://echarts.baidu.com/api.html#events)


## API

- connect
- disConnect
- dispatchAction
- getInstanceByDom
- getMap
- registerMap
- registerTheme

### 自定义主题

```js
import ECharts from 'rsuite-echarts';

ECharts.registerTheme('myTheme', {
    backgroundColor: '#f5f5f5',
    color: ['#fe8463', '#9bca63', '#fad860'],
    ...
});

//jsx
<ECharts theme='myTheme' option={options} />

```

### 触发图表行为

ECharts 中支持的图表行为，[参考](http://echarts.baidu.com/api.html#action)

```js
import ECharts from 'rsuite-echarts';

//jsx
<ECharts id='myChart' option={options} />

/**
 * (chartId: String, payload: Object)
 */
ECharts.dispatchAction('myChart',{
    type: 'dataZoom',
    start: 20,
    end: 30
});



```

### 自定义事件

```js
const events = {
    click:function(params){
        console.log(params);
    },
    mousedown:function(params){
        console.log(params);
    }
    ...
}
//jsx
<ECharts onEvents={events} />

```
