
### 地图


<!--start-code-->
```js
const events = {
  click(params) {
    console.log(params);
  }
};

ECharts.registerMap('china', chinaJson);

const instance = (
  <div style={{height:400}}>
    <ECharts option={mapOptions} onEvents={events} />
  </div>
);

ReactDOM.render(instance);
```
<!--end-code-->

