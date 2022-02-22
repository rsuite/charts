# Charts for React Suite

:bar_chart: A set of charts based on rsuite and ECharts

[![npm version](https://badge.fury.io/js/%40rsuite%2Fcharts.svg)](https://badge.fury.io/js/%40rsuite%2Fcharts)
[![Node.js CI](https://github.com/rsuite/charts/actions/workflows/node.js.yml/badge.svg)](https://github.com/rsuite/charts/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/rsuite/charts/branch/master/graph/badge.svg?token=boxBzGyjGx)](https://codecov.io/gh/rsuite/charts)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

## Install

```bash
npm i --save @rsuite/charts echarts
```

## Usage

```js
import { LineChart } from '@rsuite/charts';

const data = [
  ['00:00', random()],
  ['01:00', random()]
];
const App = () => <LineChart name="Page View" data={data} />;

ReactDOM.render(<App />, mountNode);
```

![](https://user-images.githubusercontent.com/1203827/53936390-93543000-40e4-11e9-9892-98cadb183fc6.png)

## Documentation

[https://charts.rsuitejs.com/](https://charts.rsuitejs.com/)

## License

MIT licensed
