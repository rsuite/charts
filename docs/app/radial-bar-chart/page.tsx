'use client';

import React from 'react';
import { RadialBarChart, RadialBar, Tooltip, Legend } from '@rsuite/charts';
import DocPage from '../components/DocPage';
import CodeDemo from '../components/CodeDemo';

const dependencies = { RadialBarChart, RadialBar, Tooltip, Legend };

const basicCode = `
const data = [
  { name: 'Mobile',   uv: 18, fill: '#34c3ff' },
  { name: 'Desktop',  uv: 45, fill: '#a873e6' },
  { name: 'Tablet',   uv: 27, fill: '#13ba9e' },
  { name: 'Smart TV', uv: 10, fill: '#ee5765' },
];

render(
  <RadialBarChart height={320} data={data} innerRadius="20%" outerRadius="90%">
    <RadialBar dataKey="uv" label={{ position: 'insideStart', fill: '#fff' }} />
    <Tooltip />
    <Legend />
  </RadialBarChart>
);
`.trim();

const progressCode = `
const data = [
  { name: 'Q4 Target', progress: 78, fill: '#34c3ff' },
  { name: 'Q3 Target', progress: 92, fill: '#a873e6' },
  { name: 'Q2 Target', progress: 55, fill: '#13ba9e' },
];

render(
  <RadialBarChart
    height={320}
    data={data}
    startAngle={180}
    endAngle={0}
    innerRadius="30%"
    outerRadius="90%"
  >
    <RadialBar background dataKey="progress" />
    <Tooltip />
  </RadialBarChart>
);
`.trim();

export default function RadialBarChartPage() {
  return (
    <DocPage
      title="RadialBarChart"
      description="Radial bar charts display data as arcs radiating from the center."
    >
      <CodeDemo title="Basic Radial Bar Chart" dependencies={dependencies}>
        {basicCode}
      </CodeDemo>

      <CodeDemo title="Progress Rings" dependencies={dependencies}>
        {progressCode}
      </CodeDemo>
    </DocPage>
  );
}
