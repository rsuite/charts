import 'echarts/lib/component/legend';
import 'echarts/lib/component/legendScroll';
import PropTypes from 'prop-types';
import _merge from 'lodash.merge';
import EChartsComponentOption from '../EChartsComponentOption';
import { randstr } from '../utils';

class Legend extends EChartsComponentOption {
  static displayName = 'Legend';

  static contextTypes = {
    ...EChartsComponentOption.contextTypes,
    chartType: PropTypes.string,
    series: PropTypes.arrayOf(PropTypes.object),
    chartData: PropTypes.arrayOf(PropTypes.any)
  };

  key = randstr();

  getOption() {
    const { ...props } = this.props;
    const { chartType, series, chartData } = this.context;
    let legendOption = {
      key: this.key,
      show: true,
      data:
        chartType === 'pie' ? chartData.map(([name]) => name) : series.map(comp => comp.props.name),
      bottom: 0,
      textStyle: {
        color: '#8e8e93'
      }
    };

    if (chartType === 'pie') {
      legendOption.icon = 'circle';
    }
    return _merge(legendOption, props);
  }

  updateChartOption(option) {
    const legendOption = this.getOption();

    // 没有 legend，则设置 legend
    if (!option.legend) {
      return {
        ...option,
        legend: legendOption
      };
    }

    // 有 legend 对象
    if (!Array.isArray(option.legend)) {
      //  是自己，则更新对象
      if (option.legend.key === this.key) {
        return {
          ...option,
          legend: legendOption
        };
      }
      //   不是自己，则更新为 legend 数组
      return {
        ...option,
        legend: [option.legend, legendOption]
      };
    }

    // 有 legend 数组
    const thisLegend = option.legend.find(legend => legend.key === this.key);
    // 如果有自己，则更新自己
    if (thisLegend) {
      option.legend[option.legend.indexOf(thisLegend)] = legendOption;
      return option;
    }
    // 没有自己，则增加自己
    return {
      ...option,
      legend: [...option.legend, legendOption]
    };
  }

  resetChartOption(option) {
    if (!option.legend) {
      return option;
    }

    if (!Array.isArray(option.legend)) {
      if (option.legend.key === this.key) {
        delete option.legend;
      }
      return option;
    }

    return {
      ...option,
      legend: option.legend.filter(legend => legend.key !== this.key)
    };
  }
}

export default Legend;
