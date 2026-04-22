'use client';

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from '@rsuite/charts';
import DocPage from '../components/DocPage';
import Demo from '../components/Demo';

const data = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 5000, expenses: 2800 },
  { month: 'Apr', revenue: 4780, expenses: 3908 },
  { month: 'May', revenue: 5890, expenses: 4800 },
  { month: 'Jun', revenue: 4390, expenses: 3800 },
  { month: 'Jul', revenue: 6490, expenses: 4300 },
];

export default function AreaChartPage() {
  return (
    <DocPage
      title="AreaChart"
      description="Area charts show filled regions to emphasize the magnitude of values over time."
    >
      <Demo
        title="Basic Area Chart"
        code={`import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from '@rsuite/charts';

<AreaChart height={300} data={data}>
  <CartesianGrid />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Area dataKey="revenue" name="Revenue" fillOpacity={0.3} />
</AreaChart>`}
      >
        <AreaChart height={300} data={data}>
          <CartesianGrid />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area dataKey="revenue" name="Revenue" fillOpacity={0.3} />
        </AreaChart>
      </Demo>

      <Demo
        title="Multiple Areas"
        code={`import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from '@rsuite/charts';

<AreaChart height={300} data={data}>
  <CartesianGrid />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Area dataKey="revenue" name="Revenue" fillOpacity={0.3} type="monotone" />
  <Area dataKey="expenses" name="Expenses" fillOpacity={0.3} type="monotone" />
</AreaChart>`}
      >
        <AreaChart height={300} data={data}>
          <CartesianGrid />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area dataKey="revenue" name="Revenue" fillOpacity={0.3} type="monotone" />
          <Area dataKey="expenses" name="Expenses" fillOpacity={0.3} type="monotone" />
        </AreaChart>
      </Demo>

      <Demo
        title="Stacked Areas"
        code={`import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from '@rsuite/charts';

<AreaChart height={300} data={data}>
  <CartesianGrid />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Area dataKey="expenses" name="Expenses" stackId="1" fillOpacity={0.5} />
  <Area dataKey="revenue" name="Revenue" stackId="1" fillOpacity={0.5} />
</AreaChart>`}
      >
        <AreaChart height={300} data={data}>
          <CartesianGrid />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area dataKey="expenses" name="Expenses" stackId="1" fillOpacity={0.5} />
          <Area dataKey="revenue" name="Revenue" stackId="1" fillOpacity={0.5} />
        </AreaChart>
      </Demo>
    </DocPage>
  );
}
