
### 柱状图


<!--start-code-->
```js
// const data = [
//   ['1次', 4800000],
//   ['2次', 1200000],
//   ...
// ];

const colors = [
  '#1464AC',
  '#2485C1',
  '#32A4D4',
  '#41C5E9',
  '#51E8FF',
  '#42C2DC',
  '#13BA9E',
  '#50E3C2',
  '#7ED321',
  '#B8E986',
];

ReactDOM.render(
  <BarChart name="客户数" data={data}>
    <YAxis axisLabel={value => `${value / 1000000}M`} minInterval={1000000} />
    <Bars color={colors} label={({ value }) => `${(value / sum * 100).toFixed(2)}%`}/>
  </BarChart>
);

```
<!--end-code-->
