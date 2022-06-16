import React, { Children, Fragment, cloneElement } from 'react';
import _merge from 'lodash.merge';
import ECharts, { ChartComponentProps } from '../ECharts';
import Tooltip from '../components/Tooltip';
import Funnel from '../series/Funnel';
import Legend from '../components/Legend';
import { EChartsContext } from '../constants';
import { is } from '../utils';

const funnelDefaultWidth = 40;

export interface FunnelChartProps extends ChartComponentProps {
  asc?: boolean;
  tooltip?: boolean;
}

function FunnelChart(
  { asc = false, tooltip = true, name, data = [], children, option, ...props }: FunnelChartProps,
  ref: any
) {
  const components = Children.toArray(children);
  const funnels = components.filter((comp) => is(comp, 'funnel'));
  const legends = components.filter((comp) => is(comp, 'legend'));
  const withoutLegend = legends.length === 0;

  function renderDefaultFunnel() {
    const funnelPosition = {
      width: `${funnelDefaultWidth}%`,
      left: `${(100 - funnelDefaultWidth) / 2}%`,
    };

    return (
      <Fragment>
        <Funnel name={name} data={data} asc={asc} {...funnelPosition} />
        {withoutLegend && <Legend data={(data as any).map(([name]: any) => name)} />}
      </Fragment>
    );
  }

  function renderFunnels(funnels: any[]) {
    // 2 个以内给排排版
    if (funnels.length === 1) {
      const funnelPosition = {
        width: `${funnelDefaultWidth}%`,
        left: `${(100 - funnelDefaultWidth) / 2}%`,
      };
      return funnels.map((funnel, index) => (
        <Fragment key={index}>
          {cloneElement(funnel, { ...funnelPosition, ...funnel.props })}
          {withoutLegend && <Legend data={funnel.props.data.map(([name]: any) => name)} />}
        </Fragment>
      ));
    }

    const occupiedColorsCount = (index: number) =>
      funnels.slice(0, index).reduce((sum, funnel) => sum + funnel.props.data.length, 0);

    if (funnels.length === 2) {
      return funnels.map((funnel: any, index: number) => {
        const funnelPosition = {
          width: `${funnelDefaultWidth}%`,
          left: `${5 + 50 * index}%`,
        };
        return (
          <Fragment key={index}>
            {cloneElement(funnel, {
              ...funnelPosition,
              color:
                funnel.props.color &&
                new Array(occupiedColorsCount(index)).concat(funnel.props.color),
              ...funnel.props,
            })}
            {withoutLegend && (
              <Legend
                data={funnel.props.data.map(([name]: any) => name)}
                {...(funnelPosition as any)}
              />
            )}
          </Fragment>
        );
      });
    }

    return funnels.map((funnel: any, index: number) => (
      <Fragment key={index}>
        {cloneElement(funnel, {
          color:
            funnel.props.color && new Array(occupiedColorsCount(index)).concat(funnel.props.color),
        })}
        {withoutLegend && <Legend data={funnel.props.data.map(([name]: any) => name)} />}
      </Fragment>
    ));
  }

  let titleOption = {};
  if (!funnels.length) {
    titleOption = {
      title: {
        text: name,
        left: '50%',
        top: '10%',
        textAlign: 'center',
        textVerticalAlign: 'bottom',
        textStyle: { color: '#272c36', fontSize: 14, fontWeight: 'normal' },
      },
    };
  }
  if (funnels.length <= 2) {
    titleOption = {
      title: funnels.map((funnel: any, index) => ({
        text: funnel.props.name,
        left: `${funnels.length === 1 ? 50 : 5 + funnelDefaultWidth / 2 + index * 50}%`,
        top: '10%',
        textAlign: 'center',
        textVerticalAlign: 'bottom',
        textStyle: { color: '#272c36', fontSize: 14, fontWeight: 'normal' },
      })),
    };
  }

  return (
    <EChartsContext.Provider value={{ chartType: 'funnel', dataName: name }}>
      <ECharts ref={ref} option={_merge(titleOption, option)} {...props}>
        {!funnels.length && renderDefaultFunnel()}
        {funnels.length > 0 && renderFunnels(funnels)}
        {tooltip && <Tooltip />}
        {components.filter((comp) => !is(comp, 'funnel'))}
      </ECharts>
    </EChartsContext.Provider>
  );
}

export default React.forwardRef<echarts.ECharts, FunnelChartProps>(FunnelChart);
