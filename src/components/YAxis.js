import _merge from 'lodash.merge';
import EChartsComponentOption from '../EChartsComponentOption';
import { transformTextOption } from '../utils';

class YAxis extends EChartsComponentOption {

  static displayName = 'YAxis';

  static defaultProps = {
    show: true,
    type: 'value',
    splitLine: true,
  };

  getOption() {
    const {
      axisLabel,
      splitLine,
      ...props
    } = this.props;

    return _merge({
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: transformTextOption(axisLabel, {
        show: true,
        textStyle: {
          color: '#8e8e93',
        },
      }),
      splitLine: {
        show: !!splitLine,
        lineStyle: {
          color: '#efefef',
        },
      },
    }, props);
  }

  updateChartOption(option) {
    const yAxisOption = this.getOption();

    return {
      ...option,
      yAxis: option.yAxis ?
        (
          Array.isArray(option.yAxis) ?
            [...option.yAxis, yAxisOption] :
            [option.yAxis, yAxisOption]
        ) :
        yAxisOption,
    };
  }
}

export default YAxis;
