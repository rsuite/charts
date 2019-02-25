import 'echarts/lib/chart/bar';
import PropTypes from 'prop-types';
import _merge from 'lodash.merge';
import EChartsSeriesOption from './EChartsSeriesOption';
import { randstr, transformTextOption } from '../utils';

const stackKey = randstr();

class Bars extends EChartsSeriesOption {
  static displayName = 'Bars';

  static contextTypes = {
    ...EChartsSeriesOption.contextTypes,
    chartType: PropTypes.string,
    horizontal: PropTypes.bool,
    series: PropTypes.arrayOf(PropTypes.object),
  };

  getSeriesOption() {
    const {
      type,

      stack,
      color,
      label,
      ...props
    } = this.props;
    const { chartType, horizontal, series } = this.context;

    const barsSeriesCount = series.filter(comp => comp.type === Bars).length;
    const stackedBars = stack
      ? series.filter(comp => comp.type === Bars && comp.props.stack === stack)
      : [];
    const stacked = stackedBars.length > 1;
    const stackTop = stackedBars.indexOf(
      stackedBars.find(comp => comp.type === Bars && comp.props.name === props.name),
    ) === stackedBars.length - 1;

    let barBorderRadius;
    if (stacked && !stackTop) {
      barBorderRadius = 0;
    } else {
      barBorderRadius = (chartType === 'bar' && horizontal)
        ? [0, 5, 5, 0]
        : [5, 5, 0, 0];
    }

    return _merge({
      type: 'bar',
      barWidth: (!stack && barsSeriesCount) > 1 ? 6 : 20,
      stack: stack === true ? stackKey : stack,
      itemStyle: {
        color: Array.isArray(color) ? (({ dataIndex }) => color[dataIndex]) : color,
        barBorderRadius,
      },
      // 默认 label
      // 颜色：#575757
      // 位置：top，水平则 right
      label: transformTextOption(label, { position: horizontal ? 'right' : 'top', textStyle: { color: '#575757' } }),
    }, props);
  }

}

export default Bars;
