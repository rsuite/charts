import EChartsComponentOption from '../EChartsComponentOption';

class EChartsSeriesOption extends EChartsComponentOption {

  getSeriesOption() {
    return {};
  }

  updateChartOption(option) {

    const seriesOption = this.getSeriesOption(option);

    return {
      ...option,
      series: option.series ?
        [...option.series, seriesOption] : [seriesOption],
    };
  };

}

export default EChartsSeriesOption;
