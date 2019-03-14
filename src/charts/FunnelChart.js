import React, { Children, Component, Fragment, cloneElement } from 'react';
import PropTypes from 'prop-types';
import _merge from 'lodash.merge';
import ECharts from '../ECharts';
import Tooltip from '../components/Tooltip';
import Funnel from '@/series/Funnel';
import Legend from '@/components/Legend';

const funnelDefaultWidth = 40;

class FunnelChart extends Component {
  static propTypes = {
    name: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.any),
    asc: PropTypes.bool,
    tooltip: PropTypes.bool,
    option: PropTypes.any
  };

  static defaultProps = {
    data: [],
    asc: false,
    tooltip: true
  };

  static childContextTypes = {
    chartType: PropTypes.string,
    dataName: PropTypes.string
  };

  getChildContext() {
    const { name } = this.props;
    return {
      chartType: 'funnel',
      dataName: name
    };
  }

  renderDefaultFunnel() {
    const { name, data, asc } = this.props;
    const funnelPosition = {
      width: `${funnelDefaultWidth}%`,
      left: `${(100 - funnelDefaultWidth) / 2}%`
    };

    return (
      <Fragment>
        <Funnel name={name} data={data} asc={asc} {...funnelPosition} />
        <Legend data={data.map(([name]) => name)} />
      </Fragment>
    );
  }

  renderFunnels(funnels) {
    // 2 个以内给排排版
    if (funnels.length === 1) {
      const funnelPosition = {
        width: `${funnelDefaultWidth}%`,
        left: `${(100 - funnelDefaultWidth) / 2}%`
      };
      return funnels.map((funnel, index) => (
        <Fragment key={index}>
          {cloneElement(funnel, funnelPosition)}
          <Legend data={funnel.props.data.map(([name]) => name)} />
        </Fragment>
      ));
    }

    const occupiedColorsCount = index =>
      funnels.slice(0, index).reduce((sum, funnel) => sum + funnel.props.data.length, 0);

    if (funnels.length === 2) {
      return funnels.map((funnel, index) => {
        const funnelPosition = {
          width: `${funnelDefaultWidth}%`,
          left: `${5 + 50 * index}%`
        };
        return (
          <Fragment key={index}>
            {cloneElement(funnel, {
              ...funnelPosition,
              color:
                funnel.props.color &&
                new Array(occupiedColorsCount(index)).concat(funnel.props.color)
            })}
            <Legend data={funnel.props.data.map(([name]) => name)} {...funnelPosition} />
          </Fragment>
        );
      });
    }

    return funnels.map((funnel, index) => (
      <Fragment key={index}>
        {cloneElement(funnel, {
          color:
            funnel.props.color && new Array(occupiedColorsCount(index)).concat(funnel.props.color)
        })}
        <Legend data={funnel.props.data.map(([name]) => name)} />
      </Fragment>
    ));
  }

  render() {
    const { name, data, tooltip, children, option, ...props } = this.props;

    const components = Children.toArray(children);
    const funnels = components.filter(comp => comp.type === Funnel);

    let titleOption = {};
    if (!funnels.length) {
      titleOption = {
        title: {
          text: name,
          left: '50%',
          top: '10%',
          textAlign: 'center',
          textVerticalAlign: 'bottom',
          textStyle: { color: '#272c36', fontSize: 14, fontWeight: 'normal' }
        }
      };
    }
    if (funnels.length <= 2) {
      titleOption = {
        title: funnels.map((funnel, index) => ({
          text: funnel.props.name,
          left: `${funnels.length === 1 ? 50 : 5 + funnelDefaultWidth / 2 + index * 50}%`,
          top: '10%',
          textAlign: 'center',
          textVerticalAlign: 'bottom',
          textStyle: { color: '#272c36', fontSize: 14, fontWeight: 'normal' }
        }))
      };
    }

    return (
      <ECharts option={_merge(titleOption, option)} {...props}>
        {!funnels.length && this.renderDefaultFunnel()}
        {funnels.length > 0 && this.renderFunnels(funnels)}
        {tooltip && <Tooltip />}
        {components.filter(comp => comp.type !== Funnel)}
      </ECharts>
    );
  }
}

export default FunnelChart;
