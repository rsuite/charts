'use client';

import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from '@rsuite/charts';
import DocPage from '../components/DocPage';
import CodeDemo from '../components/CodeDemo';

const dependencies = { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend };

const basicCode = `
const groupA = [
  { x: 26, y: 7, z: 200 },
  { x: 53, y: 9, z: 350 },
  { x: 61, y: 18, z: 220 },
  { x: 67, y: 5, z: 500 },
  { x: 42, y: 14, z: 280 },
];

render(
  <ScatterChart height={300}>
    <CartesianGrid />
    <XAxis dataKey="x" name="Impressions" type="number" />
    <YAxis dataKey="y" name="CTR %" type="number" />
    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
    <Scatter name="Group A" data={groupA} />
  </ScatterChart>
);
`.trim();

const multipleCode = `
const groupA = [
  { x: 26, y: 7 }, { x: 53, y: 9 }, { x: 61, y: 18 },
  { x: 67, y: 5 }, { x: 42, y: 14 },
];

const groupB = [
  { x: 30, y: 11 }, { x: 37, y: 6 }, { x: 48, y: 15 },
  { x: 58, y: 8 }, { x: 43, y: 17 },
];

const groupC = [
  { x: 35, y: 10 }, { x: 31, y: 11 }, { x: 55, y: 8 },
  { x: 59, y: 6 }, { x: 63, y: 16 },
];

render(
  <ScatterChart height={300}>
    <CartesianGrid />
    <XAxis dataKey="x" name="X" type="number" />
    <YAxis dataKey="y" name="Y" type="number" />
    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
    <Legend />
    <Scatter name="Group A" data={groupA} />
    <Scatter name="Group B" data={groupB} />
    <Scatter name="Group C" data={groupC} />
  </ScatterChart>
);
`.trim();

const bubbleCode = `
const groupA = [
  { x: 26, y: 7, z: 200 }, { x: 53, y: 9, z: 350 },
  { x: 61, y: 18, z: 220 }, { x: 67, y: 5, z: 500 },
  { x: 42, y: 14, z: 280 },
];

const groupB = [
  { x: 30, y: 11, z: 220 }, { x: 37, y: 6, z: 180 },
  { x: 48, y: 15, z: 350 }, { x: 58, y: 8, z: 220 },
  { x: 43, y: 17, z: 500 },
];

render(
  <ScatterChart height={300}>
    <CartesianGrid />
    <XAxis dataKey="x" name="X" type="number" />
    <YAxis dataKey="y" name="Y" type="number" />
    <ZAxis dataKey="z" range={[40, 400]} name="Size" />
    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
    <Legend />
    <Scatter name="Group A" data={groupA} fillOpacity={0.7} />
    <Scatter name="Group B" data={groupB} fillOpacity={0.7} />
  </ScatterChart>
);
`.trim();

export default function ScatterChartPage() {
  return (
    <DocPage
      title="ScatterChart"
      description="Scatter charts display the relationship between two or three variables."
    >
      <CodeDemo title="Basic Scatter Chart" dependencies={dependencies}>
        {basicCode}
      </CodeDemo>

      <CodeDemo title="Multiple Groups" dependencies={dependencies}>
        {multipleCode}
      </CodeDemo>

      <CodeDemo title="Bubble Chart (with ZAxis)" dependencies={dependencies}>
        {bubbleCode}
      </CodeDemo>
    </DocPage>
  );
}
