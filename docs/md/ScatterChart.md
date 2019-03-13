
### 散点图


<!--start-code-->
```js
// const data1 = [
//   [26, 7, 18], // x, y, ..customData
//   [53, 9, 35],
//   [61, 18, 22],
//   [62, 17, 22],
//   [67, 5, 50]
// ];

ReactDOM.render(
  <ScatterChart>
    <XAxis name="曝光人群广告认知度" min={20} minInterval={10} />
    <YAxis name="目标人群达到率" axisLabel={value => `${value}%`} minInterval={5} />
    <Scatter name="组1" data={data1} symbolSize={data => data[2]} />
    <Scatter name="组2" data={data2} symbolSize={data => data[2]} />
    <Scatter name="组3" data={data3} symbolSize={data => data[2]} />
    <Scatter name="组4" data={data4} symbolSize={data => data[2]} />
  </ScatterChart>
);

```
<!--end-code-->
