#### 多语言

在 ECharts 中使用 `series-map` 时，可通过 `nameMap` 选项来自定义地区名称。
在 `@rsuite/charts` 中，已预设了 3 个常用的 `nameMap`，分别是中国各省的英文、中国各地市的英文、世界各国的中文，可按需从 `@rsuite/charts/locales/` 目录导入使用。

<!--start-code-->

```js
// import chinaProvinces '@rsuite/charts/locales/en-US/china-provinces';

// const data = [
//   ['北京', random()],
//   ['天津', random()],
//   ...
// ];
// 或者
// const data = [
//   ['Beijing', random()],
//   ['Tianjin', random()],
//   ...
// ];

ReactDOM.render(
  <MapChart name="覆盖率" map="china" data={data} nameMap={chinaProvinces}>
    <VisualMap text={['Max', 'Min']} />
  </MapChart>
);
```

<!--end-code-->
