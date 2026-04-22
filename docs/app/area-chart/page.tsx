'use client';

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from '@rsuite/charts';
import DocPage from '../components/DocPage';
import CodeDemo from '../components/CodeDemo';

const dependencies = { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend };

const basicCode = `
const data = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 5000, expenses: 2800 },
  { month: 'Apr', revenue: 4780, expenses: 3908 },
  { month: 'May', revenue: 5890, expenses: 4800 },
  { month: 'Jun', revenue: 4390, expenses: 3800 },
  { month: 'Jul', revenue: 6490, expenses: 4300 },
];

render(
  <AreaChart height={300} data={data}>
    <CartesianGrid />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Area dataKey="revenue" name="Revenue" fillOpacity={0.3} />
  </AreaChart>
);
`.trim();

const multipleCode = `
const data = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 5000, expenses: 2800 },
  { month: 'Apr', revenue: 4780, expenses: 3908 },
  { month: 'May', revenue: 5890, expenses: 4800 },
  { month: 'Jun', revenue: 4390, expenses: 3800 },
  { month: 'Jul', revenue: 6490, expenses: 4300 },
];

render(
  <AreaChart height={300} data={data}>
    <CartesianGrid />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Area dataKey="revenue" name="Revenue" fillOpacity={0.3} type="monotone" />
    <Area dataKey="expenses" name="Expenses" fillOpacity={0.3} type="monotone" />
  </AreaChart>
);
`.trim();

const stackedCode = `
const data = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 5000, expenses: 2800 },
  { month: 'Apr', revenue: 4780, expenses: 3908 },
  { month: 'May', revenue: 5890, expenses: 4800 },
  { month: 'Jun', revenue: 4390, expenses: 3800 },
  { month: 'Jul', revenue: 6490, expenses: 4300 },
];

render(
  <AreaChart height={300} data={data}>
    <CartesianGrid />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Area dataKey="expenses" name="Expenses" stackId="1" fillOpacity={0.5} />
    <Area dataKey="revenue" name="Revenue" stackId="1" fillOpacity={0.5} />
  </AreaChart>
);
`.trim();

export default function AreaChartPage() {
  return (
    <DocPage
      title="AreaChart"
      description="Area charts show filled regions to emphasize the magnitude of values over time."
    >
      <CodeDemo title="Basic Area Chart" dependencies={dependencies}>
        {basicCode}
      </CodeDemo>

      <CodeDemo title="Multiple Areas" dependencies={dependencies}>
        {multipleCode}
      </CodeDemo>

      <CodeDemo title="Stacked Areas" dependencies={dependencies}>
        {stackedCode}
      </CodeDemo>
    </DocPage>
  );
}
