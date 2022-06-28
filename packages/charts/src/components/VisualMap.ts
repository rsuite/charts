import * as echarts from 'echarts/core';
import { VisualMapComponent, VisualMapComponentOption } from 'echarts/components';
import _merge from 'lodash.merge';
import { symbols } from '../constants';
import { OptionComponent } from '../types';

echarts.use([VisualMapComponent]);

export type VisualMapProps = VisualMapComponentOption;

const VisualMap: OptionComponent<VisualMapProps> = (_: VisualMapProps) => null;

VisualMap[symbols.typeKey] = symbols.visualMap;

VisualMap.tapEChartsOption = (option, props, context) => {
  function getComponentOption() {
    const { type = 'continuous', ...rest } = props;
    const { chartData } = context;

    let inRange: any = {
      colorHue: [198, 199],
      colorSaturation: [1, 1],
      colorLightness: [0.88, 0.451],
    };

    if (type === 'piecewise') {
      inRange = {
        symbol: 'rect',
      };
    }

    const visualMapOption = _merge(
      {
        type,
        left: 0,
        bottom: 0,
        text: ['最大值', '最小值'],
        textGap: 5,
        orient: 'horizontal',
        inverse: true,
        min: 0,

        itemGap: 1,
        symbolSize: [18, 14],
        textStyle: {
          color: '#8e8e93',
        },
        inRange,
      },
      rest
    );

    if (chartData && !visualMapOption.max) {
      visualMapOption.max = (chartData as number[]).reduce(
        (max, d) => Math.max(max, d[1]),
        -Infinity
      );
    }

    return visualMapOption;
  }

  option.visualMap = getComponentOption();
};
if (process.env.NODE_ENV !== 'production') {
  VisualMap.displayName = 'VisualMap';
}

export default VisualMap;
