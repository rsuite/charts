import 'echarts/lib/component/dataZoom';
import PropTypes from 'prop-types';
import _merge from 'lodash.merge';
import EChartsComponentOption from '../EChartsComponentOption';
import { randstr } from '../utils';

class DataZoom extends EChartsComponentOption {
  static displayName = 'DataZoom';

  static contextTypes = {
    ...EChartsComponentOption.contextTypes,
    dataName: PropTypes.string
  };

  key = randstr();

  getOption() {
    const { props } = this;

    return _merge(
      {
        key: this.key,
        type: 'slider'
      },
      props
    );
  }

  updateChartOption(option) {
    const dataZoomOption = this.getOption();

    // 没有 dataZoom，则设置 dataZoom
    if (!option.dataZoom) {
      return {
        ...option,
        dataZoom: dataZoomOption
      };
    }

    // 有 dataZoom 对象
    if (!Array.isArray(option.dataZoom)) {
      //  是自己，则更新对象
      if (option.dataZoom.key === this.key) {
        return {
          ...option,
          dataZoom: dataZoomOption
        };
      }
      //   不是自己，则更新为 dataZoom 数组
      return {
        ...option,
        dataZoom: [option.dataZoom, dataZoomOption]
      };
    }

    // 有 dataZoom 数组
    const thisDataZoom = option.dataZoom.find(dataZoom => dataZoom.key === this.key);
    // 如果有自己，则更新自己
    if (thisDataZoom) {
      option.dataZoom[option.dataZoom.indexOf(thisDataZoom)] = dataZoomOption;
      return option;
    }
    // 没有自己，则增加自己
    return {
      ...option,
      dataZoom: [...option.dataZoom, dataZoomOption]
    };
  }

  resetChartOption(option) {
    if (!option.dataZoom) {
      return option;
    }

    if (!Array.isArray(option.dataZoom)) {
      if (option.dataZoom.key === this.key) {
        delete option.dataZoom;
      }
      return option;
    }

    return {
      ...option,
      dataZoom: option.dataZoom.filter(dataZoom => dataZoom.key !== this.key)
    };
  }
}

export default DataZoom;
