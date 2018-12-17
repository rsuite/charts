
#### 水平图柱


<!--start-code-->
```js

ReactDOM.render(
  <BarChart horizontal height={400} data={data}>
    <XAxis axisLabel={value => `${value}K`} minInterval={15} />
    <Bars name="曝光用户" />
    <Bars name="购买用户" />
  </BarChart>
);

```
<!--end-code-->
