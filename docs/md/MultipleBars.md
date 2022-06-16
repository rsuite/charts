#### 多条图柱

<!--start-code-->

```js
ReactDOM.render(
  <BarChart data={data}>
    <YAxis axisLabel={(value) => `${value / 1000}K`} minInterval={500000} splitLine={false} />
    <Bars name="休眠客户" />
    <Bars name="新客" />
    <Bars name="非品牌用户" />
    <Bars name="老客" />
    <Bars name="流失至竞品" />
    <Bars name="来自竞品" />
  </BarChart>
);
```

<!--end-code-->
