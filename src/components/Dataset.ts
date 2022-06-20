import * as echarts from 'echarts/core';
import { DatasetComponent, DatasetComponentOption } from 'echarts/components';
import _merge from 'lodash.merge';
import { symbols } from '../constants';
import { OptionComponent } from '../types';

echarts.use([DatasetComponent]);

export type DatasetProps = DatasetComponentOption;

const Dataset: OptionComponent<DatasetProps> = (_: DatasetProps) => null;

Dataset[symbols.typeKey] = symbols.dataset;

Dataset.tapEChartsOption = (option, props) => {
  option.dataset = _merge({}, props);
};

if (process.env.NODE_ENV !== 'production') {
  Dataset.displayName = 'Dataset';
}

export default Dataset;
