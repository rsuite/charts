# rsuite-echarts

ECharts for React


版本与状态

[![npm][npm-badge]][npm] [![Travis][build-badge]][build]


## 快速开始

### 安装
```bash
npm i rsuite-echarts --save
```


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

/**
 * (chartId: String, payload: Object)
 */
ECharts.dispatchAction('myChart',{
    type: 'dataZoom',
    start: 20,
    end: 30
});

//jsx
<ECharts id='myChart' option={options} />

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


[npm-badge]: https://img.shields.io/npm/v/rsuite-echarts/version2.x.svg?style=flat-square
[npm]: https://www.npmjs.com/package/rsuite-echarts


[build-badge]: https://img.shields.io/badge/build-passing-green.svg?style=flat-square
[build]: https://travis-ci.org/rsuite/rsuite-echarts
