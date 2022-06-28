import _merge from 'lodash.merge';

/**
 * DO NOT directly edit this theme object
 * If you need to edit the rsuite_dark theme, follow these steps:
 *
 * 1. Visit https://echarts.apache.org/zh/theme-builder.html
 * 2. Import rsuite_dark.project.json to the theme builder
 * 3. Make changes in the theme builder GUI
 * 4. Download (not export) the edited theme
 * 5. Replace the theme object with the latest theme JSON
 * 6. Export the edited theme and update rsuite_dark.project.json
 */
const theme = {
  color: [
    '#34c3ff',
    '#a873e6',
    '#13ba9e',
    '#ee5765',
    '#f5a623',
    '#2575fc',
    '#df6ecd',
    '#8338ec',
    '#e6b980',
    '#51E8FF',
  ],
  backgroundColor: '#1a1d24',
  textStyle: {},
  title: {
    textStyle: {
      color: '#ffffff',
    },
    subtextStyle: {
      color: '#aaaaaa',
    },
  },
  line: {
    itemStyle: {
      borderWidth: '0',
    },
    lineStyle: {
      width: 2,
    },
    symbolSize: '0',
    symbol: 'circle',
    smooth: false,
  },
  radar: {
    itemStyle: {
      borderWidth: '0',
    },
    lineStyle: {
      width: 2,
    },
    symbolSize: '0',
    symbol: 'circle',
    smooth: false,
  },
  bar: {
    itemStyle: {
      barBorderWidth: 0,
      barBorderColor: '#cccccc',
    },
  },
  pie: {
    itemStyle: {
      borderWidth: 0,
      borderColor: '#cccccc',
    },
  },
  scatter: {
    itemStyle: {
      borderWidth: 0,
      borderColor: '#cccccc',
    },
  },
  boxplot: {
    itemStyle: {
      borderWidth: 0,
      borderColor: '#cccccc',
    },
  },
  parallel: {
    itemStyle: {
      borderWidth: 0,
      borderColor: '#cccccc',
    },
  },
  sankey: {
    itemStyle: {
      borderWidth: 0,
      borderColor: '#cccccc',
    },
  },
  funnel: {
    itemStyle: {
      borderWidth: 0,
      borderColor: '#cccccc',
    },
  },
  gauge: {
    itemStyle: {
      borderWidth: 0,
      borderColor: '#cccccc',
    },
  },
  candlestick: {
    itemStyle: {
      color: '#e01f54',
      color0: '#001852',
      borderColor: '#f5e8c8',
      borderColor0: '#b8d2c7',
      borderWidth: 1,
    },
  },
  graph: {
    itemStyle: {
      borderWidth: 0,
      borderColor: '#cccccc',
    },
    lineStyle: {
      width: 1,
      color: '#aaaaaa',
    },
    symbolSize: '0',
    symbol: 'circle',
    smooth: false,
    color: [
      '#34c3ff',
      '#a873e6',
      '#13ba9e',
      '#ee5765',
      '#f5a623',
      '#2575fc',
      '#df6ecd',
      '#8338ec',
      '#e6b980',
      '#51E8FF',
    ],
    label: {
      color: '#e9ebf0',
    },
  },
  map: {
    itemStyle: {
      areaColor: '#eeeeee',
      borderColor: '#444444',
      borderWidth: 0.5,
    },
    label: {
      color: '#000000',
    },
    emphasis: {
      itemStyle: {
        areaColor: 'rgba(255,215,0,0.8)',
        borderColor: '#444444',
        borderWidth: 1,
      },
      label: {
        color: 'rgb(100,0,0)',
      },
    },
  },
  geo: {
    itemStyle: {
      areaColor: '#eeeeee',
      borderColor: '#444444',
      borderWidth: 0.5,
    },
    label: {
      color: '#000000',
    },
    emphasis: {
      itemStyle: {
        areaColor: 'rgba(255,215,0,0.8)',
        borderColor: '#444444',
        borderWidth: 1,
      },
      label: {
        color: 'rgb(100,0,0)',
      },
    },
  },
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#3c3f43',
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#333',
      },
    },
    axisLabel: {
      show: true,
      color: '#e9ebf0',
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ['#e5e5ea'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
      },
    },
  },
  valueAxis: {
    axisLine: {
      show: false,
      lineStyle: {
        color: '#e5e5ea',
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#8e8e93',
      },
    },
    axisLabel: {
      show: true,
      color: '#e9ebf0',
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#3c3f43'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
      },
    },
  },
  logAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#3c3f43',
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#333',
      },
    },
    axisLabel: {
      show: true,
      color: '#e9ebf0',
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#3c3f43'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
      },
    },
  },
  timeAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#3c3f43',
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#333',
      },
    },
    axisLabel: {
      show: true,
      color: '#e9ebf0',
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#3c3f43'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
      },
    },
  },
  toolbox: {
    iconStyle: {
      borderColor: '#999999',
    },
    emphasis: {
      iconStyle: {},
    },
  },
  legend: {
    textStyle: {
      color: '#8e8e93',
    },
  },
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: '#cccccc',
        width: 1,
      },
      crossStyle: {
        color: '#cccccc',
        width: 1,
      },
    },
  },
  timeline: {
    lineStyle: {
      color: '#293c55',
      width: 1,
    },
    itemStyle: {
      color: '#293c55',
      borderWidth: 1,
    },
    controlStyle: {
      color: '#293c55',
      borderColor: '#293c55',
      borderWidth: 0.5,
    },
    checkpointStyle: {
      color: '#e43c59',
      borderColor: '#c23531',
    },
    label: {
      color: '#293c55',
    },
    emphasis: {
      itemStyle: {
        color: '#a9334c',
      },
      controlStyle: {
        color: '#293c55',
        borderColor: '#293c55',
        borderWidth: 0.5,
      },
      label: {
        color: '#293c55',
      },
    },
  },
  visualMap: {
    color: ['#c2edff', '#009de6'],
  },
  dataZoom: {
    backgroundColor: 'rgba(47,69,84,0)',
    dataBackgroundColor: 'rgba(47,69,84,0.3)',
    fillerColor: 'rgba(167,183,204,0.4)',
    handleColor: '#a7b7cc',
    handleSize: '100%',
    textStyle: {
      color: '#333333',
    },
  },
  markPoint: {
    label: {
      color: '#e9ebf0',
    },
    emphasis: {
      label: {
        color: '#e9ebf0',
      },
    },
  },
};

/**
 * Theme properties that are not supported by the theme builder GUI
 */
const additionalSettings = {
  textStyle: {
    color: '#e9ebf0',
  },
  legend: {
    textStyle: {
      fontSize: 14,
    },
  },
};

export default _merge(theme, additionalSettings);
