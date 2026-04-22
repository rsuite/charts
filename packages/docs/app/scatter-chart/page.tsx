'use client';

import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend } from '@rsuite/charts';
import DocPage from '../components/DocPage';
import Demo from '../components/Demo';

const groupA = [
  { x: 26, y: 7, z: 200 },
  { x: 53, y: 9, z: 350 },
  { x: 61, y: 18, z: 220 },
  { x: 67, y: 5, z: 500 },
  { x: 42, y: 14, z: 280 },
];

const groupB = [
  { x: 30, y: 11, z: 220 },
  { x: 37, y: 6, z: 180 },
  { x: 48, y: 15, z: 350 },
  { x: 58, y: 8, z: 220 },
  { x: 43, y: 17, z: 500 },
];

const groupC = [
  { x: 35, y: 10, z: 220 },
  { x: 31, y: 11, z: 180 },
  { x: 55, y: 8, z: 220 },
  { x: 59, y: 6, z: 350 },
  { x: 63, y: 16, z: 500 },
];

export default function ScatterChartPage() {
  return (
    <DocPage
      title="ScatterChart"
      description="Scatter charts display the relationship between two or three variables."
    >
      <Demo
        title="Basic Scatter Chart"
        code={`import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from '@rsuite/charts';

<ScatterChart height={300}>
  <CartesianGrid />
  <XAxis dataKey="x" name="Impressions" type="number" />
  <YAxis dataKey="y" name="CTR %" type="number" />
  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
  <Scatter name="Group A" data={groupA} />
</ScatterChart>`}
      >
        <ScatterChart height={300}>
          <CartesianGrid />
          <XAxis dataKey="x" name="Impressions" type="number" />
          <YAxis dataKey="y" name="CTR %" type="number" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Group A" data={groupA} />
        </ScatterChart>
      </Demo>

      <Demo
        title="Multiple Groups"
        code={`import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from '@rsuite/charts';

<ScatterChart height={300}>
  <CartesianGrid />
  <XAxis dataKey="x" name="X" type="number" />
  <YAxis dataKey="y" name="Y" type="number" />
  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
  <Legend />
  <Scatter name="Group A" data={groupA} />
  <Scatter name="Group B" data={groupB} />
  <Scatter name="Group C" data={groupC} />
</ScatterChart>`}
      >
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
      </Demo>

      <Demo
        title="Bubble Chart (with ZAxis)"
        code={`import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend } from '@rsuite/charts';

<ScatterChart height={300}>
  <CartesianGrid />
  <XAxis dataKey="x" name="X" type="number" />
  <YAxis dataKey="y" name="Y" type="number" />
  <ZAxis dataKey="z" range={[40, 400]} name="Size" />
  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
  <Legend />
  <Scatter name="Group A" data={groupA} fillOpacity={0.7} />
  <Scatter name="Group B" data={groupB} fillOpacity={0.7} />
</ScatterChart>`}
      >
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
      </Demo>
    </DocPage>
  );
}
