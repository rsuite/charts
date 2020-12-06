import React from 'react';
import CodeView from 'react-code-view';
import { FunnelChart, Funnel } from '../..';

function FunnelChartShowcase() {
  return (
    <CodeView
      classPrefix="rs-"
      buttonClassName="rs-btn-subtle rs-btn-icon-circle"
      dependencies={{
        FunnelChart,
        Funnel
      }}
    >
      {require('../md/FunnelChart.md')}
    </CodeView>
  );
}

export default FunnelChartShowcase;
