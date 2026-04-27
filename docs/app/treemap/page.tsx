'use client';

import React from 'react';
import { Treemap, Tooltip } from '@rsuite/charts';
import DocPage from '../components/DocPage';
import CodeDemo from '../components/CodeDemo';

const dependencies = { Treemap, Tooltip };

const basicCode = `
const data = [
  { name: 'Electronics', size: 45 },
  { name: 'Clothing',    size: 28 },
  { name: 'Groceries',   size: 18 },
  { name: 'Books',       size: 9 },
  { name: 'Toys',        size: 12 },
  { name: 'Sports',      size: 15 },
  { name: 'Beauty',      size: 8 },
  { name: 'Furniture',   size: 22 },
];

render(
  <Treemap height={320} data={data} dataKey="size" aspectRatio={4 / 3}>
    <Tooltip />
  </Treemap>
);
`.trim();

const customColorsCode = `
const data = [
  { name: 'Documents',    size: 4230,  fill: '#34c3ff' },
  { name: 'Applications', size: 8120,  fill: '#a873e6' },
  { name: 'Media',        size: 12800, fill: '#13ba9e' },
  { name: 'Downloads',    size: 3100,  fill: '#ee5765' },
  { name: 'System',       size: 5900,  fill: '#f5a623' },
  { name: 'Others',       size: 1500,  fill: '#2575fc' },
];

render(
  <Treemap height={320} data={data} dataKey="size">
    <Tooltip formatter={(v) => \`\${(v / 1024).toFixed(1)} GB\`} />
  </Treemap>
);
`.trim();

export default function TreemapPage() {
  return (
    <DocPage
      title="Treemap"
      description="Treemap charts represent hierarchical data as nested rectangles. Each block's area is proportional to its value."
    >
      <CodeDemo title="Basic Treemap" dependencies={dependencies}>
        {basicCode}
      </CodeDemo>

      <CodeDemo title="Custom Colors" dependencies={dependencies}>
        {customColorsCode}
      </CodeDemo>
    </DocPage>
  );
}
