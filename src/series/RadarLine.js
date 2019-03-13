import 'echarts/lib/chart/line';
import _merge from 'lodash.merge';
import EChartsSeriesOption from './EChartsSeriesOption';

class RadarLine extends EChartsSeriesOption {
  static displayName = 'RadarLine';

  getSeriesOption() {
    const { name, data, value = data, ...props } = this.props;

    return _merge(
      {
        name,
        value
      },
      props
    );
  }

  updateChartOption(option) {
    const radarDataOption = this.getSeriesOption(option);

    const radarSerieOption = {
      type: 'radar',
      symbol: 'none',
      lineStyle: {
        width: 2
      },
      emphasis: {
        lineStyle: {
          width: 3
        },
        areaStyle: {
          opacity: 0.2
        }
      },
      data: [radarDataOption]
    };
    if (!option.series) {
      return {
        ...option,
        series: [radarSerieOption]
      };
    }

    const radarSerie = option.series.find(serie => serie.type === 'radar');

    if (!radarSerie) {
      return {
        ...option,
        series: [...option.series, radarSerieOption]
      };
    }

    const thisDataOption = radarSerie.data.find(
      dataOption => dataOption.name === radarDataOption.name
    );
    if (!thisDataOption) {
      radarSerie.data.push(radarDataOption);
    } else {
      radarSerie.data[radarSerie.data.indexOf(thisDataOption)] = radarDataOption;
    }

    return option;
  }
}

export default RadarLine;
