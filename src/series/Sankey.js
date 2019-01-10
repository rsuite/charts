import 'echarts/lib/chart/treemap';
import EChartsSeriesOption from './EChartsSeriesOption';

class Sankey extends EChartsSeriesOption {

  static displayName = 'Sankey';

  static defaultProps = {
    data: {
      nodes: [],
      links: [],
    },
  };

  getSeriesOption() {
    const { props } = this;

    return {
      type: 'sankey',
      name: props.name,
      data: props.data.nodes,
      links: props.data.links,
      nodeWidth: 30,
      nodeGap: 20,
      itemStyle: {
        borderWidth: 0,
      },
      lineStyle: {
        normal: {
          color: '#cfcfcf',
          curveness: 0.5,
        },
      },
    };
  }
}

export default Sankey;
