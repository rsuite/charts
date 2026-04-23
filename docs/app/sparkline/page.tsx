'use client';

import React from 'react';
import { Sparkline } from '@rsuite/charts';
import DocPage from '../components/DocPage';
import CodeDemo from '../components/CodeDemo';

const dependencies = { Sparkline };

const basicCode = `
render(
  <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
    <div style={{ width: 120 }}>
      <h4>Revenue</h4>
      <Sparkline data={[10, 20, 15, 30, 25, 40, 35]} type="line" strokeWidth={2} />
    </div>

    <div style={{ width: 120 }}>
      <h4>Users</h4>
      <Sparkline data={[50, 40, 60, 80, 50, 90, 100]} type="area" color="#10B981" />
    </div>

    <div style={{ width: 120 }}>
      <h4>Events</h4>
      <Sparkline data={[5, 10, 8, 15, 10, 20, 18]} type="bar" color="#F59E0B" />
    </div>
  </div>
);
`.trim();

const objectDataCode = `
const data = [
  { sales: 4000, month: 'Jan' },
  { sales: 3000, month: 'Feb' },
  { sales: 2000, month: 'Mar' },
  { sales: 2780, month: 'Apr' },
  { sales: 1890, month: 'May' },
  { sales: 2390, month: 'Jun' },
  { sales: 3490, month: 'Jul' }
];

render(
  <div style={{ width: 200, padding: 20, border: '1px solid #e5e5ea', borderRadius: 8 }}>
    <div style={{ marginBottom: 10, fontSize: 13, color: '#8e8e93' }}>Total Sales</div>
    <div style={{ fontSize: 24, fontWeight: 600, marginBottom: 10 }}>$19,550</div>
    <Sparkline data={data} dataKey="sales" type="area" color="#8B5CF6" height={60} />
  </div>
);
`.trim();

export default function SparklinePage() {
  return (
    <DocPage
      title="Sparkline"
      description="A tiny chart without axes or grids to represent a general trend, typically used inline or inside small cards."
    >
      <CodeDemo title="Basic Usage" dependencies={dependencies}>
        {basicCode}
      </CodeDemo>

      <CodeDemo title="With Object Data & Card" dependencies={dependencies}>
        {objectDataCode}
      </CodeDemo>
    </DocPage>
  );
}
