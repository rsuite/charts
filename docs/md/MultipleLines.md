
#### 多条图线


<!--start-code-->
```js

// const data = [
//   ['00:00', random(), random()],
//   ['01:00', random(), random()],
//   ...
// ];

ReactDOM.render(
  <LineChart data={data}>
    <YAxis minInterval={30000} axisLabel={value => `${value / 1000}K`} />
    <Line name="昨日浏览量(PV)" />
    <Line name="今日浏览量(PV)" />
  </LineChart>
);

```
<!--end-code-->
