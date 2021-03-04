# Charts for React Suite

:bar_chart: A set of charts based on rsuite and ECharts

[![Node.js CI](https://github.com/rsuite/charts/actions/workflows/node.js.yml/badge.svg)](https://github.com/rsuite/charts/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/rsuite/charts/branch/master/graph/badge.svg?token=boxBzGyjGx)](https://codecov.io/gh/rsuite/charts)

## v4.x
This `master` branch is for latest `v4.x` version which is under development. For stable `v3` versions, check the [`v3`](https://github.com/rsuite/charts/tree/v3) branch.

## Install

```bash
npm i --save @rsuite/charts@next
npm i --save echarts
```

## Usage

```js
import { LineChart } from "@rsuite/charts";

const data = [["00:00", random()], ["01:00", random()]];
const App = () => <LineChart name="Page View" data={data} />;

ReactDOM.render(<App />, mountNode);
```

![](https://user-images.githubusercontent.com/1203827/53936390-93543000-40e4-11e9-9892-98cadb183fc6.png)


## Documents

[https://charts.rsuitejs.com/](https://charts.rsuitejs.com/)

## Known issues

### Usage with `react-hot-loader` is broken

Inside `@rsuite/charts`, components' type reference is used for checking whether a component is a `Bars` instance, etc.
However, `react-hot-loader` wraps components up in purpose of hot reloading, thus importing `react-hot-loader` breaks stacked bars and some other features.

## License

MIT licensed
