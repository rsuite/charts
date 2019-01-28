import 'echarts/lib/component/dataZoom';
import PropTypes from 'prop-types';
import _merge from 'lodash.merge';
import EChartsComponentOption from '../EChartsComponentOption';

class DataZoom extends EChartsComponentOption {

  static displayName = 'DataZoom';

  static contextTypes = {
    ...EChartsComponentOption.contextTypes,
    dataName: PropTypes.string,
  };

  getOption() {
    const { props } = this;

    return _merge({
      type: 'slider',
    }, props);
  }

  updateChartOption(option) {
    const dataZoomOption = this.getOption();

    if (!option.dataZoom) {
      return {
        ...option,
        dataZoom: dataZoomOption,
      };
    }

    return {
      ...option,
      dataZoom: Array.isArray(option.dataZoom) ?
        [...option.dataZoom, dataZoomOption] :
        [option.dataZoom, dataZoomOption],
    };
  }
}

export default DataZoom;

