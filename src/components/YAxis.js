import _merge from 'lodash.merge';
import EChartsComponentOption from '../EChartsComponentOption';
import { randstr, transformTextOption } from '../utils';

class YAxis extends EChartsComponentOption {
  static displayName = 'YAxis';

  static defaultProps = {
    show: true,
    type: 'value',
    splitLine: true
  };

  key = randstr();

  getOption() {
    const { name, axisLabel, splitLine, ...props } = this.props;

    return _merge(
      {
        key: this.key,
        axisLine: {
          show: false,
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
          show: !!splitLine,
          lineStyle: {
            color: '#efefef'
          }
        },
        nameRotate: 0,
        name: name && props.nameLocation === 'middle' ? name.split('').join('\n') : name,
        nameTextStyle: {
          fontSize: 12,
          color: '#575757'
        }
      },
      props
    );
  }

  updateChartOption(option) {
    const yAxisOption = this.getOption();

    // 没有 yAxis，则设置 yAxis
    if (!option.yAxis) {
      return {
        ...option,
        yAxis: yAxisOption
      };
    }

    // 有 yAxis 对象
    if (!Array.isArray(option.yAxis)) {
      //  是自己，则更新对象
      if (option.yAxis.key === this.key) {
        return {
          ...option,
          yAxis: yAxisOption
        };
      }
      //   不是自己，则更新为 yAxis 数组
      return {
        ...option,
        yAxis: [option.yAxis, yAxisOption]
      };
    }

    // 有 yAxis 数组
    const thisYAxis = option.yAxis.find(yAxis => yAxis.key === this.key);
    // 如果有自己，则更新自己
    if (thisYAxis) {
      option.yAxis[option.yAxis.indexOf(thisYAxis)] = yAxisOption;
      return option;
    }
    // 没有自己，则增加自己
    return {
      ...option,
      yAxis: [...option.yAxis, yAxisOption]
    };
  }

  resetChartOption(option) {
    if (!option.yAxis) {
      return option;
    }

    if (!Array.isArray(option.yAxis)) {
      if (option.yAxis.key === this.key) {
        delete option.yAxis;
      }
      return option;
    }

    return {
      ...option,
      yAxis: option.yAxis.filter(yAxis => yAxis.key !== this.key)
    };
  }
}

export default YAxis;
