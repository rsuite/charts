
#### 多个 Y 轴


<!--start-code-->
```js

// const data = [
//   ['00:00', random(), random()],
//   ['01:00', random(), random()],
//   ...
// ];

ReactDOM.render(
  <LineChart data={data}>
    <YAxis name="指标1" minInterval={30000} />
    <YAxis name="指标2" axisLabel={value => value.toFixed(2)} />
    <Line name="点击" yAxisIndex={0} />
    <Line name="花费" yAxisIndex={1} />
  </LineChart>
);

```
<!--end-code-->
