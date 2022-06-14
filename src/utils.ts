import React from 'react';
import _merge from 'lodash.merge';
import _omit from 'lodash.omit';
import flattenChildren from 'react-keyed-flatten-children';
import { symbols } from './constants';
import { ChartComponentProps } from './ECharts';

export function is(element: any, name: string): boolean {
  return element.type[symbols.typeKey] === Symbol.for(`$$${name}`);
}

export function isSeries(element: any) {
  return (symbols as any).series.includes(element.type[symbols.typeKey]);
}

export function transformTextOption(option: any, defaultOption?: any) {
  if (option === undefined || option === true) {
    return defaultOption;
  }
  if (option === false) {
    return { show: false };
  }
  if (typeof option === 'function') {
    return {
      ...defaultOption,
      show: true,
      formatter: option
    };
  }
  if (typeof option === 'object') {
    return _merge(
      {
        ...defaultOption,
        show: true
      },
      option
    );
  }
  return {
    ...defaultOption,
    show: true,
    formatter() {
      return option;
    }
  };
}

export function randstr(length = 16) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

const stackKey = randstr();

const createOptions = {
  // components
  [symbols.dataZoom](option: any, props: any, _: any) {
    function getOption() {
      return _merge(
        {
          type: 'slider'
        },
        props
      );
    }

    const dataZoomOption = getOption();

    if (!option.dataZoom) {
      option.dataZoom = dataZoomOption;
    } else if (!Array.isArray(option.dataZoom)) {
      option.dataZoom = [option.dataZoom, dataZoomOption];
    } else {
      option.dataZoom.push(dataZoomOption);
    }
  },
  [symbols.tooltip](option: any, props: any, context: any) {
    function getOption() {
      const { chartType, series } = context;

      const hasAxis =
        chartType === 'bar' ||
        chartType === 'line' ||
        !!series.find(
          (comp: any) =>
            comp.type[symbols.typeKey] === symbols.xAxis ||
            comp.type[symbols.typeKey] === symbols.yAxis
        );

      return _merge(
        {
          show: true,
          trigger: hasAxis ? 'axis' : 'item',
          axisPointer: {
            type: 'none'
          }
        },
        props
      );
    }

    option.tooltip = getOption();
  },
  [symbols.legend](option: any, props: any, context: any) {
    function getOption() {
      const { chartType, series, chartData = [] } = context;
      let legendOption: any = {
        show: true,
        data:
          chartType === 'pie'
            ? chartData.map(([name]: any) => name)
            : series.map((comp: any) => {
                return comp.props.name;
              }),
        bottom: 0
      };

      if (chartType === 'pie') {
        legendOption.icon = 'circle';
      }
      return _merge(legendOption, props);
    }

    const legendOption = getOption();

    if (!option.legend) {
      option.legend = legendOption;
    } else if (!Array.isArray(option.legend)) {
      option.legend = [option.legend, legendOption];
    } else {
      option.legend.push(legendOption);
    }
  },
  [symbols.radar](option: any, props: any, _: any) {
    function getOption() {
      const { circle, ...rest } = props;

      return _merge(
        {
          name: {
            color: '#575757'
          },
          nameGap: 10,
          shape: circle ? 'circle' : 'polygon',

          splitArea: {
            areaStyle: {
              color: ['#FFFFFF', '#F7F7FA']
            }
          }
        },
        rest
      );
    }

    const radarOption = getOption();

    if (!option.radar) {
      option.radar = radarOption;
    } else if (!Array.isArray(option.radar)) {
      option.radar = [option.radar, radarOption];
    } else {
      option.radar.push(radarOption);
    }
  },

  [symbols.visualMap](option: any, props: any, context: any) {
    function getComponentOption() {
      const { type = 'continuous', ...rest } = props;
      const { chartData } = context;

      let inRange: any = {
        colorHue: [198, 199],
        colorSaturation: [1, 1],
        colorLightness: [0.88, 0.451]
      };

      if (type === 'piecewise') {
        inRange = {
          symbol: 'rect'
        };
      }

      const visualMapOption = _merge(
        {
          type,
          left: 0,
          bottom: 0,
          text: ['最大值', '最小值'],
          textGap: 5,
          orient: 'horizontal',
          inverse: true,
          min: 0,

          itemGap: 1,
          symbolSize: [18, 14],
          textStyle: {
            color: '#8e8e93'
          },
          inRange
        },
        rest
      );

      if (chartData && !visualMapOption.max) {
        visualMapOption.max = chartData.reduce(
          (max: any, d: any) => Math.max(max, d[1]),
          -Infinity
        );
      }

      return visualMapOption;
    }

    option.visualMap = getComponentOption();
  },
  [symbols.xAxis](option: any, props: any, context: any) {
    function getOption() {
      const { axisLabel, ...rest } = props;
      const { series } = context;

      return _merge(
        {
          boundaryGap: !!series.find((comp: any) => comp.type[symbols.typeKey] === symbols.bars),
          nameTextStyle: {
            fontSize: 12,
            color: '#575757'
          }
        },
        axisLabel
          ? {
              axisLabel: transformTextOption(axisLabel)
            }
          : {},
        rest
      );
    }

    const xAxisOption = getOption();

    if (!option.xAxis) {
      option.xAxis = xAxisOption;
    } else if (!Array.isArray(option.xAxis)) {
      option.xAxis = [option.xAxis, xAxisOption];
    } else {
      option.xAxis.push(xAxisOption);
    }
  },
  [symbols.yAxis](option: any, props: any, _: any) {
    function getOption() {
      const { name, axisLabel, splitLine, ...rest } = props;

      return _merge(
        {
          nameRotate: 0,
          name: name && rest.nameLocation === 'middle' ? name.split('').join('\n') : name,
          nameTextStyle: {
            fontSize: 12,
            color: '#575757'
          }
        },
        typeof splitLine !== 'undefined'
          ? {
              splitLine: _merge(
                {
                  show: !!splitLine
                },
                typeof splitLine !== 'boolean' && splitLine
              )
            }
          : {},
        axisLabel
          ? {
              axisLabel: transformTextOption(axisLabel)
            }
          : {},
        rest
      );
    }

    const yAxisOption = getOption();

    if (!option.yAxis) {
      option.yAxis = yAxisOption;
    } else if (!Array.isArray(option.yAxis)) {
      option.yAxis = [option.yAxis, yAxisOption];
    } else {
      option.yAxis.push(yAxisOption);
    }
  },

  // series
  [symbols.bars](option: any, props: any, context: any) {
    function getSeriesOption() {
      const {
        type,

        stack,
        color,
        label,
        ...rest
      } = props;
      const { chartType, horizontal, series } = context;

      const barsSeriesCount = series.filter(
        (comp: any) => comp.type[symbols.typeKey] === symbols.bars
      ).length;
      const stackedBars = stack
        ? series.filter(
            (comp: any) => comp.type[symbols.typeKey] === symbols.bars && comp.props.stack === stack
          )
        : [];
      const stacked = stackedBars.length > 1;
      const stackTop =
        stackedBars.indexOf(
          stackedBars.find(
            (comp: any) =>
              comp.type[symbols.typeKey] === symbols.bars && comp.props.name === rest.name
          )
        ) ===
        stackedBars.length - 1;

      let barBorderRadius;
      if (stacked && !stackTop) {
        barBorderRadius = 0;
      } else {
        barBorderRadius = chartType === 'bar' && horizontal ? [0, 5, 5, 0] : [5, 5, 0, 0];
      }

      return _merge(
        {
          type: 'bar',
          barWidth: (!stack && barsSeriesCount) > 1 ? 6 : 20,
          stack: (stack as any) === true ? stackKey : stack,
          itemStyle: {
            color: Array.isArray(color) ? ({ dataIndex }: any) => color[dataIndex] : color,
            barBorderRadius
          },
          // 默认 label
          // 颜色：#575757
          // 位置：top，水平则 right
          label: transformTextOption(label, {
            position: horizontal ? 'right' : 'top'
          })
        },
        rest
      );
    }

    if (!option.series) {
      option.series = [];
    }

    option.series.push(getSeriesOption());
  },
  [symbols.funnel](option: any, props: any, _: any) {
    function getSeriesOption() {
      const { type, data, asc, sort = asc ? 'ascending' : 'descending', label, ...rest } = props;

      return _merge(
        {
          type: 'funnel',
          data: data
            .map(([name, value]: any) => ({
              name,
              value
            }))
            .sort((d1: any, d2: any) => d2.value - d1.value),
          sort,
          label: transformTextOption(label, {
            show: true,
            position: 'inside',
            formatter: ({ value }: any) => value,
            textStyle: {
              fontSize: 14
            }
          })
        },
        rest
      );
    }

    if (!option.series) {
      option.series = [];
    }

    option.series.push(getSeriesOption());
  },
  [symbols.line](option: any, props: any, _: any) {
    function getSeriesOption() {
      const {
        type,

        stack,
        area,
        ...rest
      } = props;

      return _merge(
        {
          type: 'line',
          symbol: 'none',
          stack: stack === true ? stackKey : stack,
          areaStyle: area && { opacity: stack ? 0.6 : 0.2 }
        },
        rest
      );
    }

    if (!option.series) {
      option.series = [];
    }

    option.series.push(getSeriesOption());
  },
  [symbols.map](option: any, props: any, _: any) {
    function getSeriesOption() {
      const { type, map, name, data, nameMap, ...rest } = props;

      return _merge(
        {
          type: 'map',
          map,
          name,
          data: data.map(([name, value]: any) => ({
            name: (nameMap && nameMap[name]) || name,
            value
          })),
          itemStyle: {
            areaColor: '#E5E5EA',
            borderColor: '#ffffff',
            borderWidth: 1
          },
          label: {
            fontSize: 10
          },
          emphasis: {
            label: {
              color: 'rgb(131, 56, 236)'
            },
            itemStyle: {
              areaColor: 'rgba(131, 56, 236, .3)',
              borderColor: 'rgb(131, 56, 236)'
            }
          },
          nameMap
        },
        rest
      );
    }

    if (!option.series) {
      option.series = [];
    }

    option.series.push(getSeriesOption());
  },
  [symbols.pie](option: any, props: any, _: any) {
    function getSeriesOption() {
      const {
        type,

        radius,
        donut,
        label,
        ...rest
      } = props;

      const outerRadius = parseFloat(radius) || 80;
      const innerRadius = outerRadius - 15;

      const pieOption = _merge(
        {
          type: 'pie',
          radius: donut ? [`${innerRadius}%`, `${outerRadius}%`] : `${outerRadius}%`,
          center: ['50%', '50%']
        },
        rest
      );

      if (label !== undefined) {
        pieOption.label = transformTextOption(label);
      }

      return pieOption;
    }

    if (!option.series) {
      option.series = [];
    }

    option.series.push(getSeriesOption());
  },
  [symbols.radarLine](option: any, props: any, _: any) {
    function getSeriesOption() {
      const { name, data, value = data, ...rest } = props;

      return _merge(
        {
          name,
          value
        },
        rest
      );
    }

    const radarSerieOption = {
      type: 'radar',
      symbol: 'none',
      lineStyle: {
        width: 2
      },
      emphasis: {
        lineStyle: {
          width: 3
        },
        areaStyle: {
          opacity: 0.2
        }
      },
      data: [getSeriesOption()]
    };

    if (!option.series) {
      option.series = [];
    }

    option.series.push(radarSerieOption);
  },
  [symbols.sankey](option: any, props: any, _: any) {
    function getSeriesOption() {
      return {
        type: 'sankey',
        name: props.name,
        data: props.data.nodes,
        links: props.data.links,
        nodeWidth: 30,
        nodeGap: 20,
        itemStyle: {
          borderWidth: 0
        },
        lineStyle: {
          normal: {
            color: '#cfcfcf',
            curveness: 0.5
          }
        }
      };
    }

    if (!option.series) {
      option.series = [];
    }

    option.series.push(getSeriesOption());
  },
  [symbols.scatter](option: any, props: any, context: any) {
    function getSeriesOption() {
      const {
        type,

        ...rest
      } = props;

      const { chartType } = context;

      return _merge(
        {
          type: 'scatter',
          symbol: chartType === 'bar' ? 'emptyCircle' : 'circle',
          symbolSize: 9,
          itemStyle: {
            opacity: chartType === 'bar' ? 1 : 0.7
          },
          emphasis: {
            itemStyle: {
              opacity: 1
            }
          }
        },
        rest
      );
    }

    if (!option.series) {
      option.series = [];
    }

    option.series.push(getSeriesOption());
  },
  [symbols.tree](option: any, props: any, _: any) {
    function getSeriesOption() {
      const { name, data, ...rest } = props;

      return _merge(
        {
          type: 'tree',
          name,
          data,
          symbolSize: 8,
          itemStyle: {
            color: '#34c3ff',
            borderColor: '#34c3ff',
            borderWidth: 2
          },
          label: {
            normal: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right'
            }
          },

          leaves: {
            label: {
              normal: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
              }
            }
          }
        },
        rest
      );
    }

    if (!option.series) {
      option.series = [];
    }

    option.series.push(getSeriesOption());
  },

  [symbols.treemap](option: any, props: any, _: any) {
    function transformData(node: any) {
      if (!node) {
        return node;
      }
      if (!Array.isArray(node)) {
        return node;
      }
      const [name, value, children] = node;
      return {
        name,
        value,
        children: children && children.map(transformData)
      };
    }

    function getSeriesOption() {
      const { data, ...rest } = props;

      return _merge(
        {
          type: 'treemap',
          data: data.map(transformData),
          itemStyle: {
            areaColor: '#BEDBED',
            borderColor: '#ffffff',
            borderWidth: 1
          },
          visibleMin: 300,
          leafDepth: 1,
          drillDownIcon: null,
          label: {
            position: 'insideTopLeft',
            color: '#ffffff',
            fontSize: 12,
            lineHeight: 17,
            formatter({ name, value }: any) {
              return `{a|${name}\n${value}}`;
            },
            rich: {
              a: {
                color: '#ffffff',
                fontSize: 12,
                lineHeight: 17
              }
            }
          },
          levels: [
            {
              itemStyle: {
                normal: {
                  borderColor: '#fff',
                  borderWidth: 1,
                  gapWidth: 1
                }
              }
            }
          ]
        },
        rest
      );
    }

    if (!option.series) {
      option.series = [];
    }

    option.series.push(getSeriesOption());
  }
};

export function excludeEchartsProps(props: ChartComponentProps) {
  return _omit(props, ['option', 'locale', 'height', 'loading']);
}

export function createEChartsOptionFromChildren(children: any, _: any) {
  const option = {};

  function getValidChildren(): React.ReactElement[] {
    return flattenChildren(children).filter(child => {
      return React.isValidElement(child);
    }) as any;
  }

  const validChildren = getValidChildren();

  const series = validChildren.filter(child => {
    return (symbols as any).series.includes(child.type[symbols.typeKey]);
  });

  const context = {
    ..._,
    series
  };

  validChildren.forEach(child => {
    // 处理 child 的 props
    // 根据 child 的 type 上的 symbol
    (createOptions as any)[child.type[symbols.typeKey]]?.(
      option,
      excludeEchartsProps(child.props),
      context
    );
  });

  return option;
}
