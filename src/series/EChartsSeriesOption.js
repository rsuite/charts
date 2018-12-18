import EChartsComponentOption from '../EChartsComponentOption';

class EChartsSeriesOption extends EChartsComponentOption {

  getSeriesOption() {
    return {};
  }

  updateChartOption(option) {

    const seriesOption = this.getSeriesOption(option);

    if (!option.series) {
      return {
        ...option,
        series: [seriesOption]
      };
    }

    const thisSeries = option.series.find(serie => serie.name === this.props.name);

    if (!thisSeries) {
      return {
        ...option,
        series: [...option.series, seriesOption]
      };
    }

    const thisSeriesIndex = option.series.indexOf(thisSeries);
    const newSeriesArray = [...option.series];
    newSeriesArray[thisSeriesIndex] = seriesOption;
    return {
      ...option,
      series: newSeriesArray
    };
  }

}

export default EChartsSeriesOption;
