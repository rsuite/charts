import * as echarts from 'echarts/core';
import { DataZoomComponent, DataZoomComponentOption } from 'echarts/components';
import _merge from 'lodash.merge';
import { symbols } from '../constants';
import { OptionComponent } from '../types';

echarts.use([DataZoomComponent]);

export type DataZoomProps = DataZoomComponentOption;

const DataZoom: OptionComponent<DataZoomProps> = (_: DataZoomProps) => null;

DataZoom[symbols.typeKey] = symbols.dataZoom;

DataZoom.tapEChartsOption = (option, props) => {
  function getOption() {
    return _merge(
      {
        type: 'slider',
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
};

if (process.env.NODE_ENV !== 'production') {
  DataZoom.displayName = 'DataZoom';
}

export default DataZoom;
