import React from 'react';
import type { Metadata } from 'next';
import DocPage from '../components/DocPage';

export const metadata: Metadata = {
  title: 'Installation',
};

export default function InstallationPage() {
  return (
    <DocPage
      title="Installation"
      description="Get @rsuite/charts running in your project in under a minute."
    >
      <h2>Install</h2>
      <p>
        <code>@rsuite/charts</code> requires <strong>React 18+</strong> and{' '}
        <strong>recharts v2</strong> as peer dependencies.
      </p>
      <pre>
        <code>npm install @rsuite/charts recharts</code>
      </pre>

      <p>Or with yarn / pnpm:</p>
      <pre>
        <code>{'yarn add @rsuite/charts recharts\n# or\npnpm add @rsuite/charts recharts'}</code>
      </pre>

      <h2>Usage</h2>
      <p>Import chart components directly from the package:</p>
      <pre>
        <code>{`import {
  BarChart, Bar,
  LineChart, Line,
  AreaChart, Area,
  XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
} from '@rsuite/charts';`}</code>
      </pre>

      <h2>Quick Start</h2>
      <pre>
        <code>{`import React from 'react';
import {
  LineChart, Line,
  XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
} from '@rsuite/charts';

const data = [
  { hour: '08:00', pv: 21000 },
  { hour: '10:00', pv: 45000 },
  { hour: '12:00', pv: 67000 },
  { hour: '14:00', pv: 52000 },
  { hour: '16:00', pv: 83000 },
  { hour: '18:00', pv: 72000 },
];

export default function App() {
  return (
    <LineChart height={300} data={data}>
      <CartesianGrid />
      <XAxis dataKey="hour" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line dataKey="pv" name="Page Views" />
    </LineChart>
  );
}`}</code>
      </pre>

      <h2>Next.js / SSR</h2>
      <p>
        Recharts uses browser-only APIs (SVG, ResizeObserver). When using Next.js you must render
        chart components on the client:
      </p>
      <pre>
        <code>{`'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip } from '@rsuite/charts';

export default function MyChart({ data }) {
  return (
    <BarChart data={data}>
      <Bar dataKey="value" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </BarChart>
  );
}`}</code>
      </pre>

      <p>
        Alternatively, use Next.js <code>dynamic</code> with <code>ssr: false</code>:
      </p>
      <pre>
        <code>{`import dynamic from 'next/dynamic';

const MyChart = dynamic(() => import('./MyChart'), { ssr: false });`}</code>
      </pre>

      <h2>Theming</h2>
      <p>
        The default color palette matches the rsuite design system. To override it, wrap your
        charts with <code>ChartContainer</code> and pass a custom <code>colorPalette</code>:
      </p>
      <pre>
        <code>{`import { ChartContainer } from '@rsuite/charts';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const myPalette = ['#2575fc', '#34c3ff', '#13ba9e'];

<ChartContainer height={300} colorPalette={myPalette}>
  <BarChart data={data}>
    <Bar dataKey="value" />
    <XAxis dataKey="name" />
    <YAxis />
  </BarChart>
</ChartContainer>`}</code>
      </pre>
    </DocPage>
  );
}
