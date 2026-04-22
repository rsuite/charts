# Charts for React Suite

:bar_chart: A set of charts based on rsuite and [Recharts](https://recharts.org)

[![npm version](https://badge.fury.io/js/%40rsuite%2Fcharts.svg)](https://badge.fury.io/js/%40rsuite%2Fcharts)
[![Node.js CI](https://github.com/rsuite/charts/actions/workflows/node.js.yml/badge.svg)](https://github.com/rsuite/charts/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/rsuite/charts/branch/master/graph/badge.svg?token=boxBzGyjGx)](https://codecov.io/gh/rsuite/charts)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

> **v6** — Completely rewritten on top of [Recharts](https://recharts.org). No backward compatibility with v5.

## Install

```bash
npm i --save @rsuite/charts recharts
```

## Quick Start

```tsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from '@rsuite/charts';

const data = [
  { name: 'Jan', pv: 800, uv: 400 },
  { name: 'Feb', pv: 967, uv: 430 },
  { name: 'Mar', pv: 1098, uv: 448 },
  { name: 'Apr', pv: 1200, uv: 470 },
  { name: 'May', pv: 1108, uv: 540 },
  { name: 'Jun', pv: 680,  uv: 380 },
];

function App() {
  return (
    <BarChart height={300} data={data}>
      <CartesianGrid />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" name="Page Views" />
      <Bar dataKey="uv" name="Unique Visitors" />
    </BarChart>
  );
}
```

## Features

- **Built on Recharts** — uses the full recharts API; any recharts component works inside our chart wrappers.
- **rsuite color palette** — series are automatically colored using the rsuite design-system palette.
- **Responsive by default** — every chart wraps with `ResponsiveContainer`; just set a `height`.
- **Empty state & loading** — built-in placeholders for empty data and loading state.
- **TypeScript** — full type definitions.

## Available Charts

| Component | Description |
|---|---|
| `<BarChart>` | Bar / horizontal bar chart |
| `<LineChart>` | Line chart |
| `<AreaChart>` | Area chart |
| `<ComposedChart>` | Mix of Bar, Line, and Area |
| `<ScatterChart>` | Scatter / bubble chart |
| `<PieChart>` | Pie / donut chart |
| `<RadarChart>` | Radar / spider chart |
| `<RadialBarChart>` | Radial bar chart |
| `<FunnelChart>` | Funnel chart |
| `<Treemap>` | Treemap chart |

## Styled Components

Components with rsuite defaults pre-applied:

| Component | Description |
|---|---|
| `<XAxis>` | X axis (rsuite tick/line style) |
| `<YAxis>` | Y axis (rsuite tick/line style) |
| `<CartesianGrid>` | Horizontal grid lines |
| `<Tooltip>` | Tooltip popup (rsuite card style) |
| `<Legend>` | Chart legend (rsuite text style) |
| `<Brush>` | Data range brush |

## Series Components

Re-exported from recharts, colors injected automatically:

`Bar` · `Line` · `Area` · `Scatter` · `Pie` · `Cell` · `Radar` · `RadialBar` · `Funnel`

## ChartContainer

For full control, use `<ChartContainer>` to wrap any recharts chart directly:

```tsx
import { ChartContainer } from '@rsuite/charts';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

<ChartContainer height={300} loading={isLoading} empty={data.length === 0}>
  <BarChart data={data}>
    <Bar dataKey="value" fill="#34c3ff" />
    <XAxis dataKey="name" />
    <YAxis />
  </BarChart>
</ChartContainer>
```

## License

MIT licensed

