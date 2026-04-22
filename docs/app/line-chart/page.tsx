'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from '@rsuite/charts';
import DocPage from '../components/DocPage';
import CodeDemo from '../components/CodeDemo';

const dependencies = { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend };

const basicCode = `
const data = [
  { hour: '00:00', pv: 81892 },
  { hour: '03:00', pv: 3355 },
  { hour: '06:00', pv: 9730 },
  { hour: '09:00', pv: 80550 },
  { hour: '12:00', pv: 4494 },
  { hour: '15:00', pv: 68671 },
  { hour: '18:00', pv: 73269 },
  { hour: '21:00', pv: 74292 },
];

render(
  <LineChart height={280} data={data}>
    <CartesianGrid />
    <XAxis dataKey="hour" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line dataKey="pv" name="Page Views" />
  </LineChart>
);
`.trim();

const multipleCode = `
const data = [
  { date: 'Mon', today: 21000, yesterday: 34000 },
  { date: 'Tue', today: 45000, yesterday: 28000 },
  { date: 'Wed', today: 67000, yesterday: 51000 },
  { date: 'Thu', today: 52000, yesterday: 62000 },
  { date: 'Fri', today: 83000, yesterday: 44000 },
  { date: 'Sat', today: 72000, yesterday: 38000 },
  { date: 'Sun', today: 91000, yesterday: 55000 },
];

render(
  <LineChart height={300} data={data}>
    <CartesianGrid />
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line dataKey="today" name="Today" />
    <Line dataKey="yesterday" name="Yesterday" strokeDasharray="5 5" />
  </LineChart>
);
`.trim();

const curvedCode = `
const data = [
  { date: 'Mon', today: 21000, yesterday: 34000 },
  { date: 'Tue', today: 45000, yesterday: 28000 },
  { date: 'Wed', today: 67000, yesterday: 51000 },
  { date: 'Thu', today: 52000, yesterday: 62000 },
  { date: 'Fri', today: 83000, yesterday: 44000 },
  { date: 'Sat', today: 72000, yesterday: 38000 },
  { date: 'Sun', today: 91000, yesterday: 55000 },
];

render(
  <LineChart height={300} data={data}>
    <CartesianGrid />
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line dataKey="today" name="Today" type="monotone" dot={false} />
    <Line dataKey="yesterday" name="Yesterday" type="monotone" dot={false} />
  </LineChart>
);
`.trim();

export default function LineChartPage() {
  return (
    <DocPage
      title="LineChart"
      description="Line charts for visualizing trends over time or continuous data."
    >
      <CodeDemo title="Basic Line Chart" dependencies={dependencies}>
        {basicCode}
      </CodeDemo>

      <CodeDemo title="Multiple Lines" dependencies={dependencies}>
        {multipleCode}
      </CodeDemo>

      <CodeDemo title="Curved Lines" dependencies={dependencies}>
        {curvedCode}
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
            <td><code>data</code></td>
            <td><code>object[]</code></td>
            <td>—</td>
            <td>Array of data objects</td>
          </tr>
          <tr>
            <td><code>height</code></td>
            <td><code>number</code></td>
            <td>300</td>
            <td>Chart height in pixels</td>
          </tr>
          <tr>
            <td><code>loading</code></td>
            <td><code>boolean</code></td>
            <td>false</td>
            <td>Show loading overlay</td>
          </tr>
        </tbody>
      </table>
    </DocPage>
  );
}
