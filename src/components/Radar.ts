import * as echarts from 'echarts/core';
import { RadarComponent, RadarComponentOption } from 'echarts/components';
import _merge from 'lodash.merge';
import { symbols } from '../constants';
import { OptionComponent } from '../types';

echarts.use([RadarComponent]);

export type RadarProps = RadarComponentOption & {
  circle?: boolean;
};

const Radar: OptionComponent<RadarProps> = (_: RadarProps) => null;

Radar[symbols.typeKey] = symbols.radar;

Radar.tapEChartsOption = (option, props) => {
  function getOption() {
    const { circle = false, ...rest } = props;

    return _merge(
      {
        axisName: {
          color: '#575757',
        },
        axisNameGap: 10,
        shape: circle ? 'circle' : 'polygon',

        splitArea: {
          areaStyle: {
            color: ['#FFFFFF', '#F7F7FA'],
          },
        },
      },
      rest
    );
  }

  const radarOption = getOption();

  if (!option.radar) {
    option.radar = radarOption;
  } else if (!Array.isArray(option.radar)) {
    option.radar = [option.radar, radarOption];
  } else {
    option.radar.push(radarOption);
  }
};

if (process.env.NODE_ENV !== 'production') {
  Radar.displayName = 'Radar';
}

export default Radar;
