# Charts for React Suite

:bar_chart: A set of charts based on rsuite and ECharts


## Install

```bash
npm i --save @rsuite/charts echarts
npm i --save echarts #可选择安装需要的 echarts 版本
```

## Usage

```js
import LineChart from "@rsuite/charts/lib/charts/LineChart";

const data = [["00:00", random()], ["01:00", random()]];
const App = () => <LineChart name="Page View" data={data} />;

ReactDOM.render(<App />, mountNode);
```

![](https://user-images.githubusercontent.com/1203827/53936390-93543000-40e4-11e9-9892-98cadb183fc6.png)


## Documents

[https://charts.rsuitejs.com/](https://charts.rsuitejs.com/)

## License

MIT licensed
