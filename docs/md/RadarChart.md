
### 雷达图


<!--start-code-->
```js
// const data = [
//   ['广告的内容清晰易懂', 100, 62, 53], // name, max, value1, value2, ...
//   ['广告的内容是可信的', 100, 75, 80],
//   ['广告中的品牌符合我的生活方式和需要', 100, 44, 37],
//   ['这个广告与众不同，很独特', 100, 39, 56],
//   ['这个广告让我想与身边的人分享', 100, 44, 61]
// ];

ReactDOM.render(
  <RadarChart data={data}>
    <RadarLine name="本次活动" />
    <RadarLine name="NORM" />
  </RadarChart>
);

```
<!--end-code-->
