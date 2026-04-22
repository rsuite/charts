'use client';

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from '@rsuite/charts';
import DocPage from '../components/DocPage';
import Demo from '../components/Demo';

const sourceData = [
  { name: '搜索引擎', value: 40 },
  { name: '直接访问', value: 47 },
  { name: '外部链接', value: 6 },
  { name: '站内来源', value: 6 },
  { name: '其他', value: 1 },
];

const carData = [
  { name: '有汽车', value: 40 },
  { name: '无汽车', value: 60 },
];

const palette = ['#34c3ff', '#a873e6', '#13ba9e', '#ee5765', '#f5a623'];
const donutColors = ['#34c3ff', '#1464ac'];

export default function PieChartPage() {
  return (
    <DocPage
      title="PieChart"
      description="Pie and donut charts for visualizing part-to-whole relationships."
    >
      <Demo
        title="Basic Pie Chart"
        code={`import { PieChart, Pie, Tooltip, Legend } from '@rsuite/charts';

const data = [
  { name: '搜索引擎', value: 40 },
  { name: '直接访问', value: 47 },
  { name: '外部链接', value: 6 },
  // ...
];

<PieChart height={300}>
  <Pie data={data} dataKey="value" nameKey="name" label />
  <Tooltip />
  <Legend />
</PieChart>`}
      >
        <PieChart height={300}>
          <Pie data={sourceData} dataKey="value" nameKey="name" label cx="50%" cy="50%" />
          <Tooltip />
          <Legend />
        </PieChart>
      </Demo>

      <Demo
        title="Donut Chart"
        code={`import { PieChart, Pie, Cell, Tooltip, Legend } from '@rsuite/charts';

const colors = ['#34c3ff', '#1464ac'];

<PieChart height={300}>
  <Pie
    data={carData}
    dataKey="value"
    nameKey="name"
    cx="50%"
    cy="50%"
    innerRadius={60}
    outerRadius={100}
    label
  >
    {carData.map((_, i) => (
      <Cell key={i} fill={colors[i % colors.length]} />
    ))}
  </Pie>
  <Tooltip />
  <Legend />
</PieChart>`}
      >
        <PieChart height={300}>
          <Pie
            data={carData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            label
          >
            {carData.map((_, i) => (
              <Cell key={i} fill={donutColors[i % donutColors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </Demo>

      <Demo
        title="Custom Colors"
        code={`import { PieChart, Pie, Cell, Tooltip, Legend } from '@rsuite/charts';

const palette = ['#34c3ff', '#a873e6', '#13ba9e', '#ee5765', '#f5a623'];

<PieChart height={300}>
  <Pie data={sourceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={110}>
    {sourceData.map((_, i) => (
      <Cell key={i} fill={palette[i % palette.length]} />
    ))}
  </Pie>
  <Tooltip />
  <Legend />
</PieChart>`}
      >
        <PieChart height={300}>
          <Pie
            data={sourceData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={110}
          >
            {sourceData.map((_, i) => (
              <Cell key={i} fill={palette[i % palette.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </Demo>
    </DocPage>
  );
}
