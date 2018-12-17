
<!--start-code-->
```js

ReactDOM.render(
  <BarChart data={data}>
    <YAxis minInterval={1000000} axisLabel={value => `${value / 1000}K`} />
    <Bars name="触达用户数" barWidth={10} />
    <Line name="曝光量" />
  </BarChart>
);


```
<!--end-code-->
