import React from 'react';
import type { Metadata } from 'next';
import DocPage from '../components/DocPage';
import CodeBlock from '../components/CodeBlock';

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
        <code>@rsuite/charts</code> requires <strong>React 16.8+</strong>. Install{' '}
        <strong>recharts v2</strong> as well only if you want to compose raw recharts primitives
        directly, for example with <code>ChartContainer</code>.
      </p>
      <CodeBlock language="bash">{`npm install @rsuite/charts`}</CodeBlock>

      <p>If you want to use raw recharts components directly:</p>
      <CodeBlock language="bash">{`npm install @rsuite/charts recharts`}</CodeBlock>

      <p>Or with yarn / pnpm:</p>
      <CodeBlock language="bash">{`yarn add @rsuite/charts
# or
pnpm add @rsuite/charts

# add recharts too when using raw recharts primitives
yarn add @rsuite/charts recharts
# or
pnpm add @rsuite/charts recharts`}</CodeBlock>

      <h2>Usage</h2>
      <p>Import chart components directly from the package:</p>
      <CodeBlock>{`import {
  BarChart, Bar,
  LineChart, Line,
  AreaChart, Area,
  XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
} from '@rsuite/charts';`}</CodeBlock>

      <h2>Quick Start</h2>
      <CodeBlock>{`import React from 'react';
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
  { hour: '16:16', pv: 83000 },
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
}`}</CodeBlock>

      <h2>Next.js / SSR</h2>
      <p>
        Recharts uses browser-only APIs (SVG, ResizeObserver). When using Next.js you must render
        chart components on the client:
      </p>
      <CodeBlock>{`'use client';

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
}`}</CodeBlock>

      <p>
        Alternatively, use Next.js <code>dynamic</code> with <code>ssr: false</code>:
      </p>
      <CodeBlock>{`import dynamic from 'next/dynamic';

const MyChart = dynamic(() => import('./MyChart'), { ssr: false });`}</CodeBlock>

      <h2>Theming</h2>
      <p>
        The default color palette matches the rsuite design system. To override it, pass a custom{' '}
        <code>colorPalette</code> to an <code>@rsuite/charts</code> chart wrapper:
      </p>
      <CodeBlock>{`import { BarChart, Bar, XAxis, YAxis } from '@rsuite/charts';

const myPalette = ['#2575fc', '#34c3ff', '#13ba9e'];

<BarChart height={300} data={data} colorPalette={myPalette}>
  <Bar dataKey="value" />
  <XAxis dataKey="name" />
  <YAxis />
</BarChart>`}</CodeBlock>
    </DocPage>
  );
}
