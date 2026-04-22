'use client';

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from '@rsuite/charts';
import DocPage from '../components/DocPage';
import CodeDemo from '../components/CodeDemo';

const dependencies = { PieChart, Pie, Cell, Tooltip, Legend };

const basicCode = `
const data = [
  { name: '搜索引擎', value: 40 },
  { name: '直接访问', value: 47 },
  { name: '外部链接', value: 6 },
  { name: '站内来源', value: 6 },
  { name: '其他', value: 1 },
];

render(
  <PieChart height={300}>
    <Pie data={data} dataKey="value" nameKey="name" label cx="50%" cy="50%" />
    <Tooltip />
    <Legend />
  </PieChart>
);
`.trim();

const donutCode = `
const data = [
  { name: '有汽车', value: 40 },
  { name: '无汽车', value: 60 },
];

const colors = ['#34c3ff', '#1464ac'];

render(
  <PieChart height={300}>
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      innerRadius={60}
      outerRadius={100}
      label
    >
      {data.map((_, i) => (
        <Cell key={i} fill={colors[i % colors.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);
`.trim();

const customColorsCode = `
const data = [
  { name: '搜索引擎', value: 40 },
  { name: '直接访问', value: 47 },
  { name: '外部链接', value: 6 },
  { name: '站内来源', value: 6 },
  { name: '其他', value: 1 },
];

const palette = ['#34c3ff', '#a873e6', '#13ba9e', '#ee5765', '#f5a623'];

render(
  <PieChart height={300}>
    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={110}>
      {data.map((_, i) => (
        <Cell key={i} fill={palette[i % palette.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);
`.trim();

export default function PieChartPage() {
  return (
    <DocPage
      title="PieChart"
      description="Pie and donut charts for visualizing part-to-whole relationships."
    >
      <CodeDemo title="Basic Pie Chart" dependencies={dependencies}>
        {basicCode}
      </CodeDemo>

      <CodeDemo title="Donut Chart" dependencies={dependencies}>
        {donutCode}
      </CodeDemo>

      <CodeDemo title="Custom Colors" dependencies={dependencies}>
        {customColorsCode}
      </CodeDemo>
    </DocPage>
  );
}
