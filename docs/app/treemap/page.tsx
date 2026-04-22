'use client';

import React from 'react';
import { Treemap, Tooltip } from '@rsuite/charts';
import DocPage from '../components/DocPage';
import Demo from '../components/Demo';

const diskData = [
  { name: 'Documents', size: 4230, fill: '#34c3ff' },
  { name: 'Applications', size: 8120, fill: '#a873e6' },
  { name: 'Media', size: 12800, fill: '#13ba9e' },
  { name: 'Downloads', size: 3100, fill: '#ee5765' },
  { name: 'System', size: 5900, fill: '#f5a623' },
  { name: 'Others', size: 1500, fill: '#2575fc' },
];

const salesData = [
  { name: 'Electronics', size: 45 },
  { name: 'Clothing', size: 28 },
  { name: 'Groceries', size: 18 },
  { name: 'Books', size: 9 },
  { name: 'Toys', size: 12 },
  { name: 'Sports', size: 15 },
  { name: 'Beauty', size: 8 },
  { name: 'Furniture', size: 22 },
];

export default function TreemapPage() {
  return (
    <DocPage
      title="Treemap"
      description="Treemap charts represent hierarchical data as nested rectangles. Each block's area is proportional to its value."
    >
      <Demo
        title="Basic Treemap"
        code={`import { Treemap, Tooltip } from '@rsuite/charts';

const data = [
  { name: 'Electronics', size: 45 },
  { name: 'Clothing',    size: 28 },
  // ...
];

<Treemap height={320} data={data} dataKey="size" aspectRatio={4 / 3}>
  <Tooltip />
</Treemap>`}
      >
        <Treemap height={320} data={salesData} dataKey="size" aspectRatio={4 / 3}>
          <Tooltip />
        </Treemap>
      </Demo>

      <Demo
        title="Custom Colors"
        code={`import { Treemap, Tooltip } from '@rsuite/charts';

const diskData = [
  { name: 'Applications', size: 8120, fill: '#a873e6' },
  { name: 'Media',        size: 12800, fill: '#13ba9e' },
  // ...
];

<Treemap height={320} data={diskData} dataKey="size">
  <Tooltip formatter={(v) => \`\${(v / 1024).toFixed(1)} GB\`} />
</Treemap>`}
      >
        <Treemap height={320} data={diskData} dataKey="size">
          <Tooltip formatter={(v: number) => `${(v / 1024).toFixed(1)} GB`} />
        </Treemap>
      </Demo>
    </DocPage>
  );
}
