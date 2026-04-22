'use client';

import React from 'react';
import { FunnelChart, Funnel, Cell, Tooltip, LabelList } from '@rsuite/charts';
import DocPage from '../components/DocPage';
import Demo from '../components/Demo';

const conversionData = [
  { name: 'Impressions', value: 100000 },
  { name: 'Clicks', value: 24000 },
  { name: 'Sign-ups', value: 8200 },
  { name: 'Purchases', value: 2100 },
  { name: 'Repeat Buyers', value: 620 },
];

const colors = ['#34c3ff', '#009de6', '#0070b3', '#004f80', '#003052'];

const marketingData = [
  { name: '品牌认知度', value: 70, fill: '#34c3ff' },
  { name: '品牌购买欲望', value: 44, fill: '#a873e6' },
  { name: '品牌忠诚', value: 21, fill: '#13ba9e' },
  { name: '品牌使用', value: 35, fill: '#ee5765' },
  { name: '品牌常用', value: 32, fill: '#f5a623' },
];

export default function FunnelChartPage() {
  return (
    <DocPage
      title="FunnelChart"
      description="Funnel charts show progressive reduction of values through stages of a pipeline."
    >
      <Demo
        title="Conversion Funnel"
        code={`import { FunnelChart, Funnel, Cell, Tooltip, LabelList } from '@rsuite/charts';

const data = [
  { name: 'Impressions',   value: 100000 },
  { name: 'Clicks',        value: 24000 },
  { name: 'Sign-ups',      value: 8200 },
  { name: 'Purchases',     value: 2100 },
  { name: 'Repeat Buyers', value: 620 },
];

const colors = ['#34c3ff', '#009de6', '#0070b3', '#004f80', '#003052'];

<FunnelChart height={320}>
  <Funnel dataKey="value" data={data} isAnimationActive>
    {data.map((_, i) => (
      <Cell key={i} fill={colors[i % colors.length]} />
    ))}
    <LabelList position="right" fill="#575757" dataKey="name" />
  </Funnel>
  <Tooltip />
</FunnelChart>`}
      >
        <FunnelChart height={320}>
          <Funnel dataKey="value" data={conversionData} isAnimationActive>
            {conversionData.map((_, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
            <LabelList position="right" fill="#575757" dataKey="name" />
          </Funnel>
          <Tooltip />
        </FunnelChart>
      </Demo>

      <Demo
        title="Custom Colored Funnel"
        code={`import { FunnelChart, Funnel, Tooltip, LabelList } from '@rsuite/charts';

const data = [
  { name: '品牌认知度',  value: 70, fill: '#34c3ff' },
  { name: '品牌购买欲望', value: 44, fill: '#a873e6' },
  { name: '品牌忠诚',   value: 21, fill: '#13ba9e' },
  { name: '品牌使用',   value: 35, fill: '#ee5765' },
  { name: '品牌常用',   value: 32, fill: '#f5a623' },
];

<FunnelChart height={320}>
  <Funnel dataKey="value" data={data} isAnimationActive>
    <LabelList position="right" fill="#575757" dataKey="name" />
  </Funnel>
  <Tooltip />
</FunnelChart>`}
      >
        <FunnelChart height={320}>
          <Funnel dataKey="value" data={marketingData} isAnimationActive>
            <LabelList position="right" fill="#575757" dataKey="name" />
          </Funnel>
          <Tooltip />
        </FunnelChart>
      </Demo>
    </DocPage>
  );
}
