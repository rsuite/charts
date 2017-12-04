# rsuite-echarts

ECharts for React

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
