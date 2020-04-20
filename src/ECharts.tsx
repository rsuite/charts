import React, { useContext, useImperativeHandle, useRef } from 'react';
import _merge from 'lodash.merge';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import { createEChartsOptionFromChildren } from './utils';
import './theme/rsuite_light';
import { EChartsContext } from './constants';

const styles: {
  [key: string]: React.CSSProperties
} = {
  blockCenter: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loaderWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  }
};

const defaultOption = {
  grid: {
    containLabel: true
  }
};

export interface EChartsProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: number;
  loading?: boolean;
  option?: echarts.EChartOption;
  locale?: {
    emptyMessage?: React.ReactNode;
    loading?: React.ReactNode;
  };
  children?: React.ReactNode;
}

export interface ChartComponentProps<DataType = any[]> extends EChartsProps {
  name?: string;
  data?: DataType;
}

// ECharts with empty message and loading
function ECharts({
  height = 300,
  locale = {
    emptyMessage: 'No data found',
    loading: 'Loading...'
  },
  option = {},
  children,
  ...props
}: EChartsProps, ref: any) {

  const echartsRef = useRef<echarts.ECharts>();

  useImperativeHandle(ref, () => echartsRef.current);

  const context = useContext(EChartsContext);

  /**
   * option 覆盖优先级
   * 1. defaultOption 为底
   * 2. props.option
   * 3. state.option (components 的 props)
   */
  function getEChartsOption() {
    return _merge({},
      defaultOption,
      option,
      createEChartsOptionFromChildren(children, context)
    );
  }

  /**
   * 判断 option 是否没有数据，
   * 用于显示数据为空的 placeholder
   */
  function isDataEmpty(option: { dataset: any; }) {
    if (option.dataset) {
      return isDatasetEmpty(option);
    }

    return isSeriesEmpty(option);
  }

  /**
   * 进入此方法时一定存在 option.dataset
   */
  function isDatasetEmpty(option: { dataset: any; }) {
    if (!option.dataset.source) {
      return true;
    }

    if (Array.isArray(option.dataset.source)) {
      return option.dataset.source.length < 1;
    }

    return Object.getOwnPropertyNames(option.dataset.source).length < 1;
  }

  function isSeriesEmpty(option: { dataset?: any; series?: any; }) {
    return !option.series ||
      option.series.reduce((empty: any, serie: { data: string | any[]; }) => empty && (!serie.data || serie.data.length < 1), true);
  }

  function renderEmptyMessage() {
    return (
      <div className="rs-echarts-body-info" style={styles.blockCenter}>
        {locale!.emptyMessage}
      </div>
    );
  }

  function renderLoader() {
    return (
      <div
        className="rs-echarts-loader-wrap"
        style={{ ...styles.blockCenter, ...styles.loaderWrap }}
      >
        {locale!.loading}
      </div>
    );
  }

  function onChartReady(echarts: echarts.ECharts) {
    echartsRef.current = echarts;
  }

  const {
    className,
    style,
    loading,
    ...echartsForReactProps
  } = props;
  const echartsOption: any = children ? getEChartsOption() : option;
  const dataEmpty = isDataEmpty(echartsOption);

  return (
    <div
      className={`rs-echarts ${className || ''}`}
      style={{ position: 'relative', height, ...style }}
    >
      {dataEmpty && renderEmptyMessage()}
      <ReactEchartsCore
        echarts={echarts}
        option={echartsOption}
        style={{ height: '100%', visibility: dataEmpty ? 'hidden' : 'visible' }}
        onChartReady={onChartReady}
        notMerge
        theme="rsuite_light"
        {...echartsForReactProps}
      />
      {children}
      {loading && renderLoader()}
    </div>
  );
}

if (__DEV__) {
  ECharts.displayName = 'ECharts';
}

export default React.forwardRef<echarts.ECharts, EChartsProps>(ECharts);
