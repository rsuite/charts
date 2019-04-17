
## API

`@rsuite/charts` 中的 React 组件对应 ECharts 配置项中的各个部分。
除特殊说明的 props 外，它们会将接收的所有 props 直接转换为相应的 ECharts　配置项。

如：
```
<XAxis type="value" minInterval={1000} />
```

即对应：

```
xAxis: {
  type: 'value',
  minInterval: 10000
}
```

### `<ECharts>`

`<ECharts>` 是 `@rsuite/charts` 中最基础的组件，
接收 option 参数，
生成一个 ECharts 图表。

| prop | type | default | description |
| ---- | ---- | ------- | ----------- |
| option | `object`  |  | ECharts 配置项，详见　[ECharts 配置项手册](http://echarts.baidu.com/option.html)|
| loading | `boolean` | `false` | 显示 loading 状态 |
| height | `number` | 300 | 图表高度 |
| locale | `object<{emptyMessage, loading}>` | `{emptyMessage: 'No data found', loading: 'Loading...'}` | 数据为空/loading 时显示的信息|

### charts/series

`series` 是展示数据的主要组件，
包括 `<Line>` `<Bars>` `<Scatter>` `<Pie>` `<Map>` `<Tree>` `<Treemap>` `<Sankey>`，
分别对应 [ECharts 配置项中各个 type 的 series](http://echarts.baidu.com/option.html#series)。

除了 `<Line>` `<Bars>` `<Scatter>` 外，其他的 `series` 通常不会单独使用，而是继承相应的 `charts` 接收的 props。如 `<Pie>` 会从 `<PieChart>` 继承 `donut` 等 props。

#### `<Line>`

| prop | type | default | description |
| ---- | ---- | ------- | ----------- |
| stack | `boolean`&#124;`string`  |  | 当设为 `true` 时，所有 `stack={true}` 的 `<Line>` 会在同一个堆叠中。其它用法同 ECharts 配置项手册。 |
| area | `boolean` | `false` | 设为 `true` 时，相当于设置 `areaStyle={{opacity: 0.2}}`。 |

#### `<Bars>`

| prop | type | default | description |
| ---- | ---- | ------- | ----------- |
| stack | `boolean`&#124;`string`  |  | 当设为 `true` 时，所有 `stack={true}` 的 `<Bars>` 会在同一个堆叠中。其它用法同 ECharts 配置项手册。 |
| color | `string`&#124;`array<string>` | | 当设为数组时，该组图柱中的各条图柱将显示为数组中的各个颜色。其它用法同 ECharts 配置项手册。 |


#### `<Pie>`

| prop | type | default | description |
| ---- | ---- | ------- | ----------- |
| donut | `boolean` | `false` | 是否为环形图。默认 `innerRadius` 比 `outerRadius` 小 15%。 |

### charts/components

`components` 是图表的其他组成部分，包括 `<XAxis>` `<YAxis>` `<Legend>` `<Tooltip>` `<DataZoom>` `<VisualMap>`。


### charts/charts

`charts` 是 `@rsuite/charts` 预先封装的一些常用图表，通常包括一个默认 `series` 和一些默认 `components`。

`charts` 都接收 `name` 和 `data` 两个 props，并传递给其内部的 `series`。大多时候，其他的 props 也会被传递下去。

#### `<LineChart>` 和 `<BarChart>`

除了使用默认 `series` 之外，`<LineChart>` 和 `<BarChart>` 还可以手动添加更多的 `series`，并将 `data` 中的数据依次分配给它们。

```
data: [
  [category, value1, value2, ...],
  ...
]

```

### 特殊 props

`@rsuite/charts` 对一些常用的配置项进行了处理，使用更加简便。

#### `textOption.formatter()`

如果对 `label` `axisLabel` `tooltip` 等 props 传入一个函数，`@rsuite/charts` 会自动将它用作该项配置的 `formatter` 字段。

如：
```
<XAxis axisLabel={value => `${value}%`} />
```

相当于：
```
<XAxis
  axisLabel={{
    show: true,
    formatter: value => `${value}%`
  }}
/>
```

类似地，如果传入一个字符串或数字，则被视作 `formatter()` 的返回值。
