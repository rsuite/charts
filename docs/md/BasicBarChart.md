
### 柱状图


<!--start-code-->
```js
// const data = [
//   ['1次', 4800000],
//   ['2次', 1200000],
//   ...
// ];

const colors = [
  '#34C3FF',
  '#A873E6',
  '#13BA9E',
  '#EE5765',
  '#F5A623',
  '#2575FC',
  '#DF6ECD',
  '#8338EC',
  '#E6B980',
  '#51E8FF'
];

ReactDOM.render(
  <BarChart name="客户数" data={data}>
    <YAxis axisLabel={value => `${value / 1000000}M`} minInterval={1000000} />
    <Bars color={colors} label={({ value }) => `${(value / sum * 100).toFixed(2)}%`}/>
  </BarChart>
);

```
<!--end-code-->
