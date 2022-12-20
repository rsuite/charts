import React, { useCallback, useContext, useImperativeHandle, useMemo, useRef } from 'react';
import _merge from 'lodash.merge';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import type { EChartsReactProps } from 'echarts-for-react';
import * as echarts from 'echarts/core';
import type { ECharts as EChartsInstance, EChartsOption, SeriesOption } from 'echarts';
import { CanvasRenderer } from 'echarts/renderers';
import { createEChartsOptionFromChildren, isDataEmpty } from './utils';
import * as themes from 'echarts-theme-rsuite';
import { ReactComponent as IconChartNoData } from './assets/chart-nodata.svg';
import { EChartsContext } from './constants';

echarts.use([CanvasRenderer]);

echarts.registerTheme('rsuite_light', themes.light);
echarts.registerTheme('rsuite_dark', themes.dark);

const styles: {
  [key: string]: React.CSSProperties;
} = {
  blockCenter: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#8e8e93',
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: '20px',
  },
  loaderWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
};

const defaultOption = {
  grid: {
    containLabel: true,
  },
};

export interface EChartsProps extends Omit<EChartsReactProps, 'option'> {
  height?: number;
  loading?: boolean;
  option?: EChartsOption;
  locale?: {
    emptyMessage?: React.ReactNode;
    loading?: React.ReactNode;
  };

  /**
   * Customize the placeholder when chart data is empty
   */
  renderEmptyPlaceholder?: () => React.ReactNode;
  children?: React.ReactNode;
}

export interface ChartComponentProps<DataType = unknown[]> extends EChartsProps {
  name?: SeriesOption['name'];
  data?: DataType;
}

// ECharts with empty message and loading
function ECharts(
  {
    height = 300,
    locale = {
      emptyMessage: 'No data found',
      loading: 'Loading...',
    },
    option = {},
    children,
    renderEmptyPlaceholder,
    ...props
  }: EChartsProps,
  ref: React.Ref<EChartsInstance>
) {
  const echartsRef = useRef<EChartsInstance>();

  useImperativeHandle(ref, () => echartsRef.current as EChartsInstance);

  const context = useContext(EChartsContext);

  const renderEmptyMessage = useCallback(() => {
    if (typeof renderEmptyPlaceholder !== 'undefined') {
      return renderEmptyPlaceholder();
    }

    return (
      <div className="rs-echarts-body-info" style={styles.blockCenter}>
        <IconChartNoData style={{ marginBottom: 10 }} />
        {locale.emptyMessage}
      </div>
    );
  }, [renderEmptyPlaceholder, locale]);

  const renderLoader = useCallback(() => {
    return (
      <div
        className="rs-echarts-loader-wrap"
        style={{ ...styles.blockCenter, ...styles.loaderWrap }}
      >
        {locale.loading}
      </div>
    );
  }, [locale]);

  const onChartReady = useCallback((echarts: EChartsInstance) => {
    echartsRef.current = echarts;
  }, []);

  const { className, style, loading, ...echartsForReactProps } = props;

  const echartsOption = useMemo(() => {
    /**
     * option 覆盖优先级
     * 1. defaultOption 为底
     * 2. props.option
     * 3. state.option (components 的 props)
     */
    return children
      ? _merge({}, defaultOption, option, createEChartsOptionFromChildren(children, context))
      : option;
  }, [children, context, option]);

  const dataEmpty = isDataEmpty(echartsOption);

  return (
    <div
      className={`rs-echarts ${className || ''}`}
      style={{ position: 'relative', height, ...style }}
    >
      {!loading && dataEmpty && renderEmptyMessage()}
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

if (process.env.NODE_ENV !== 'production') {
  ECharts.displayName = 'ECharts';
}

export default React.forwardRef<EChartsInstance, EChartsProps>(ECharts);
