
### 饼图


<!--start-code-->
```js
// const data = [
//   ['直接访问', 47],
//   ['搜索引擎', 40],
//   ...
// ];

ReactDOM.render(
  <PieChart
    name="访问来源"
    data={data}
    legend={false}
    startAngle={210}
  />
);
```
<!--end-code-->
