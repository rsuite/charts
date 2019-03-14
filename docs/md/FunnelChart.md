
### 漏斗图


<!--start-code-->
```js
const data1 = [
  ['品牌认知度', 70],
  ['品牌购买欲望', 44],
  ['品牌忠诚', 21],
  ['品牌使用', 35],
  ['品牌常用', 32]
];

const data2 = [
  ['目标人群到达率', 34.4],
  ['广告认知度', 18.2],
  ['品牌联系度', 8.4]
];

const color2 = [
  '#34c3ff',
  '#009de6',
  '#0771b3'
];

ReactDOM.render(
  <FunnelChart>
    <Funnel name="市场整体" data={data1} asc />
    <Funnel name="广告活动整体" data={data2} color={color2}/>
  </FunnelChart>
);

```
<!--end-code-->
