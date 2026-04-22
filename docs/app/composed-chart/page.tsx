'use client';

import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from '@rsuite/charts';
import DocPage from '../components/DocPage';
import Demo from '../components/Demo';

const data = [
  { month: 'Jan', revenue: 4000, growth: 2.4, target: 3500 },
  { month: 'Feb', revenue: 3000, growth: 1.4, target: 3500 },
  { month: 'Mar', revenue: 5000, growth: 3.5, target: 3500 },
  { month: 'Apr', revenue: 4780, growth: 2.8, target: 4000 },
  { month: 'May', revenue: 5890, growth: 4.1, target: 4000 },
  { month: 'Jun', revenue: 4390, growth: 3.2, target: 4000 },
  { month: 'Jul', revenue: 6490, growth: 4.8, target: 5000 },
];

export default function ComposedChartPage() {
  return (
    <DocPage
      title="ComposedChart"
      description="ComposedChart combines Bar, Line, and Area series in a single chart for richer data stories."
    >
      <Demo
        title="Bar + Line"
        code={`import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from '@rsuite/charts';

<ComposedChart height={300} data={data}>
  <CartesianGrid />
  <XAxis dataKey="month" />
  <YAxis yAxisId="left" />
  <YAxis yAxisId="right" orientation="right" />
  <Tooltip />
  <Legend />
  <Bar dataKey="revenue" name="Revenue" yAxisId="left" />
  <Line dataKey="growth" name="Growth %" yAxisId="right" type="monotone" />
</ComposedChart>`}
      >
        <ComposedChart height={300} data={data}>
          <CartesianGrid />
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" name="Revenue" yAxisId="left" />
          <Line dataKey="growth" name="Growth %" yAxisId="right" type="monotone" />
        </ComposedChart>
      </Demo>

      <Demo
        title="Area + Bar + Line"
        code={`import { ComposedChart, Bar, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from '@rsuite/charts';

<ComposedChart height={300} data={data}>
  <CartesianGrid />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Area dataKey="target" name="Target" fillOpacity={0.15} type="monotone" />
  <Bar dataKey="revenue" name="Revenue" />
  <Line dataKey="growth" name="Growth" type="monotone" dot={false} />
</ComposedChart>`}
      >
        <ComposedChart height={300} data={data}>
          <CartesianGrid />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area dataKey="target" name="Target" fillOpacity={0.15} type="monotone" />
          <Bar dataKey="revenue" name="Revenue" />
          <Line dataKey="growth" name="Growth" type="monotone" dot={false} />
        </ComposedChart>
      </Demo>
    </DocPage>
  );
}
