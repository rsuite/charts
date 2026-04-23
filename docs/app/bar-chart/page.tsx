'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush } from '@rsuite/charts';
import DocPage from '../components/DocPage';
import CodeDemo from '../components/CodeDemo';

const dependencies = { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush };

const basicCode = `
const data = [
  { name: '1次', value: 4800000 },
  { name: '2次', value: 1200000 },
  { name: '3次', value: 800000 },
  { name: '4次', value: 500000 },
  { name: '5次', value: 400000 },
  { name: '6次', value: 350000 },
  { name: '7次', value: 300000 },
  { name: '8次', value: 200000 },
  { name: '9次', value: 150000 },
  { name: '10次', value: 100000 },
  { name: '10次+', value: 150000 },
];

render(
  <BarChart height={280} data={data}>
    <CartesianGrid />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="value" name="访问次数" />
  </BarChart>
);
`.trim();

const multipleCode = `
const data = [
  { month: 'Jan', revenue: 4200, cost: 2100 },
  { month: 'Feb', revenue: 5800, cost: 2800 },
  { month: 'Mar', revenue: 3900, cost: 2000 },
  { month: 'Apr', revenue: 7100, cost: 3200 },
  { month: 'May', revenue: 6300, cost: 2900 },
  { month: 'Jun', revenue: 8200, cost: 3800 },
];

render(
  <BarChart height={300} data={data}>
    <CartesianGrid />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="revenue" name="Revenue" />
    <Bar dataKey="cost" name="Cost" />
  </BarChart>
);
`.trim();

const stackCode = `
const data = [
  { category: 'Q1', mobile: 4000, desktop: 2400, tablet: 1200 },
  { category: 'Q2', mobile: 3000, desktop: 1398, tablet: 1800 },
  { category: 'Q3', mobile: 2000, desktop: 9800, tablet: 2100 },
  { category: 'Q4', mobile: 2780, desktop: 3908, tablet: 1600 },
];

render(
  <BarChart height={300} data={data}>
    <CartesianGrid />
    <XAxis dataKey="category" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="mobile" name="Mobile" stackId="a" />
    <Bar dataKey="desktop" name="Desktop" stackId="a" />
    <Bar dataKey="tablet" name="Tablet" stackId="a" />
  </BarChart>
);
`.trim();

const horizontalCode = `
const data = [
  { month: 'Jan', revenue: 4200, cost: 2100 },
  { month: 'Feb', revenue: 5800, cost: 2800 },
  { month: 'Mar', revenue: 3900, cost: 2000 },
  { month: 'Apr', revenue: 7100, cost: 3200 },
  { month: 'May', revenue: 6300, cost: 2900 },
  { month: 'Jun', revenue: 8200, cost: 3800 },
];

render(
  <BarChart height={300} data={data} horizontal>
    <CartesianGrid />
    <XAxis type="number" />
    <YAxis dataKey="month" type="category" width={50} />
    <Tooltip />
    <Legend />
    <Bar dataKey="revenue" name="Revenue" />
    <Bar dataKey="cost" name="Cost" />
  </BarChart>
);
`.trim();

const brushCode = `
const data = [
  { name: '1次', value: 4800000 },
  { name: '2次', value: 1200000 },
  { name: '3次', value: 800000 },
  { name: '4次', value: 500000 },
  { name: '5次', value: 400000 },
  { name: '6次', value: 350000 },
  { name: '7次', value: 300000 },
  { name: '8次', value: 200000 },
  { name: '9次', value: 150000 },
  { name: '10次', value: 100000 },
  { name: '10次+', value: 150000 },
];

render(
  <BarChart height={300} data={data}>
    <CartesianGrid />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="value" name="访问次数" />
    <Brush dataKey="name" startIndex={0} endIndex={5} />
  </BarChart>
);
`.trim();

export default function BarChartPage() {
  return (
    <DocPage
      title="BarChart"
      description="Bar charts for comparing categorical data. Supports multiple series, stacking, and horizontal layout."
    >
      <CodeDemo title="Basic Bar Chart" dependencies={dependencies}>
        {basicCode}
      </CodeDemo>

      <CodeDemo title="Multiple Series" dependencies={dependencies}>
        {multipleCode}
      </CodeDemo>

      <CodeDemo title="Stacked Bars" dependencies={dependencies}>
        {stackCode}
      </CodeDemo>

      <CodeDemo title="Horizontal Bar Chart" dependencies={dependencies}>
        {horizontalCode}
      </CodeDemo>

      <CodeDemo title="With Brush (Range Selector)" dependencies={dependencies}>
        {brushCode}
      </CodeDemo>

      <h2>Props</h2>
      <table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>data</code>
            </td>
            <td>
              <code>object[]</code>
            </td>
            <td>—</td>
            <td>Array of data objects</td>
          </tr>
          <tr>
            <td>
              <code>height</code>
            </td>
            <td>
              <code>number</code>
            </td>
            <td>300</td>
            <td>Chart height in pixels</td>
          </tr>
          <tr>
            <td>
              <code>horizontal</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>false</td>
            <td>Rotate to horizontal bar layout</td>
          </tr>
          <tr>
            <td>
              <code>loading</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>false</td>
            <td>Show loading overlay</td>
          </tr>
          <tr>
            <td>
              <code>locale</code>
            </td>
            <td>
              <code>{'{ emptyMessage?, loading? }'}</code>
            </td>
            <td>—</td>
            <td>Custom empty/loading messages</td>
          </tr>
          <tr>
            <td>
              <code>colorPalette</code>
            </td>
            <td>
              <code>string[]</code>
            </td>
            <td>rsuite palette</td>
            <td>Override the color palette</td>
          </tr>
        </tbody>
      </table>
    </DocPage>
  );
}
