### 地图

使用地图时需要手动引入 `echarts` 中对应的地图组件。详见代码示例。

<!--start-code-->

```js
// 手动引入 echarts 中的地图
// import 'echarts/map/js/china';

// const data = [
//   ['北京', random()],
//   ['天津', random()],
//   ...
// ];

ReactDOM.render(<MapChart name="覆盖率" map="china" data={data} />);
```

<!--end-code-->

\*测绘数据和行政区划信息来自 ECharts
