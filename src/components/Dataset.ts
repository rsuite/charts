import * as echarts from 'echarts/core';
import { DatasetComponent, DatasetComponentOption } from 'echarts/components';
import { symbols } from '../constants';

echarts.use([DatasetComponent]);

export type DatasetProps = DatasetComponentOption;

function Dataset(_: DatasetProps) {
  return null;
}

Dataset[symbols.typeKey] = symbols.dataset;

if (process.env.NODE_ENV !== 'production') {
  Dataset.displayName = 'Dataset';
}

export default Dataset;
