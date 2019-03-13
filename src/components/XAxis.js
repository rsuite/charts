import PropTypes from 'prop-types';
import _merge from 'lodash.merge';
import EChartsComponentOption from '../EChartsComponentOption';
import { randstr, transformTextOption } from '../utils';
import Bars from '../series/Bars';

class XAxis extends EChartsComponentOption {
  static displayName = 'XAxis';

  static contextTypes = {
    ...EChartsComponentOption.contextTypes,
    chartType: PropTypes.string,
    horizontal: PropTypes.bool,
    series: PropTypes.arrayOf(PropTypes.object)
  };

  key = randstr();

  getOption() {
    const { axisLabel, ...props } = this.props;
    const { series } = this.context;

    return _merge(
      {
        key: this.key,
        boundaryGap: !!series.find(comp => comp.type === Bars),
        axisLine: {
          lineStyle: {
            color: '#e5e5ea'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: transformTextOption(axisLabel, {
          show: true,
          textStyle: {
            color: '#8e8e93'
          }
        }),
        splitLine: {
          show: false
        },
        nameTextStyle: {
          fontSize: 12,
          color: '#575757'
        }
      },
      props
    );
  }

  updateChartOption(option) {
    const xAxisOption = this.getOption();

    // 没有 xAxis，则设置 xAxis
    if (!option.xAxis) {
      return {
        ...option,
        xAxis: xAxisOption
      };
    }

    // 有 xAxis 对象
    if (!Array.isArray(option.xAxis)) {
      //  是自己，则更新对象
      if (option.xAxis.key === this.key) {
        return {
          ...option,
          xAxis: xAxisOption
        };
      }
      //   不是自己，则更新为 xAxis 数组
      return {
        ...option,
        xAxis: [option.xAxis, xAxisOption]
      };
    }

    // 有 xAxis 数组
    const thisXAxis = option.xAxis.find(xAxis => xAxis.key === this.key);
    // 如果有自己，则更新自己
    if (thisXAxis) {
      option.xAxis[option.xAxis.indexOf(thisXAxis)] = xAxisOption;
      return option;
    }
    // 没有自己，则增加自己
    return {
      ...option,
      xAxis: [...option.xAxis, xAxisOption]
    };
  }

  resetChartOption(option) {
    if (!option.xAxis) {
      return option;
    }

    if (!Array.isArray(option.xAxis)) {
      if (option.xAxis.key === this.key) {
        delete option.xAxis;
      }
      return option;
    }

    return {
      ...option,
      xAxis: option.xAxis.filter(xAxis => xAxis.key !== this.key)
    };
  }
}

export default XAxis;
