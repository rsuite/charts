# Charts for React Suite

:bar_chart: A set of charts based on rsuite and ECharts

## Install

```bash
npm i --save @rsuite/charts echarts
```

## Usage

```js
import { LineChart } from "@rsuite/charts";

const data = [["00:00", random()], ["01:00", random()]];
const App = () => <LineChart name="浏览量(PV)" data={data} />;

ReactDOM.render(<App />, mountNode);
```

## Documents

[https://charts.rsuitejs.com/](https://charts.rsuitejs.com/)

## License

MIT licensed
