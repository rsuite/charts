import 'echarts/lib/component/radar';
import PropTypes from 'prop-types';
import _merge from 'lodash.merge';
import EChartsComponentOption from '../EChartsComponentOption';
import { randstr } from '../utils';

class Radar extends EChartsComponentOption {
  static displayName = 'Radar';

  static contextTypes = {
    ...EChartsComponentOption.contextTypes,
    dataName: PropTypes.string
  };

  key = randstr();

  getOption() {
    const { circle, ...props } = this.props;

    return _merge(
      {
        name: {
          color: '#575757'
        },
        nameGap: 10,
        shape: circle ? 'circle' : 'polygon',
        axisLine: {
          lineStyle: {
            color: '#E5E5EA'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#E5E5EA'
          }
        },
        splitArea: {
          areaStyle: {
            color: ['#FFFFFF', '#F7F7FA']
          }
        }
      },
      props
    );
  }

  updateChartOption(option) {
    const radarOption = this.getOption();

    // 没有 radar，则设置 radar
    if (!option.radar) {
      return {
        ...option,
        radar: radarOption
      };
    }

    // 有 radar 对象
    if (!Array.isArray(option.radar)) {
      //  是自己，则更新对象
      if (option.radar.key === this.key) {
        return {
          ...option,
          radar: radarOption
        };
      }
      //   不是自己，则更新为 radar 数组
      return {
        ...option,
        radar: [option.radar, radarOption]
      };
    }

    // 有 radar 数组
    const thisRadar = option.radar.find(radar => radar.key === this.key);
    // 如果有自己，则更新自己
    if (thisRadar) {
      option.radar[option.radar.indexOf(thisRadar)] = radarOption;
      return option;
    }
    // 没有自己，则增加自己
    return {
      ...option,
      radar: [...option.radar, radarOption]
    };
  }

  resetChartOption(option) {
    if (!option.radar) {
      return option;
    }

    if (!Array.isArray(option.radar)) {
      if (option.radar.key === this.key) {
        delete option.radar;
      }
      return option;
    }

    return {
      ...option,
      radar: option.radar.filter(radar => radar.key !== this.key)
    };
  }
}

export default Radar;
