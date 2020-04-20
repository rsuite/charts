import 'echarts/lib/chart/bar';
import { symbols } from '../constants';

type BarsProps = echarts.EChartOption.SeriesBar & {
  color?: string | string[];
  stack?: string | true;
};

function Bars(_: BarsProps) {
  return null;
}

Bars[symbols.typeKey] = symbols.bars;

if (__DEV__) {
  Bars.displayName = 'Bars';
}

export default Bars;
