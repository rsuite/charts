### 柱状图

<!--start-code-->

```js
const events = {
  click(params) {
    console.log(params);
  },
};

const instance = (
  <div style={{ height: 400 }}>
    <ECharts option={baseBarOptions} onEvents={events} />
  </div>
);

ReactDOM.render(instance);
```

<!--end-code-->
