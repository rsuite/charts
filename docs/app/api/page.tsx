import React from 'react';
import type { Metadata } from 'next';
import DocPage from '../components/DocPage';

export const metadata: Metadata = {
  title: 'API Reference',
};

function PropRow({
  name,
  type,
  defaultValue,
  desc,
}: {
  name: string;
  type: string;
  defaultValue?: string;
  desc: string;
}) {
  return (
    <tr>
      <td>
        <code>{name}</code>
      </td>
      <td>
        <code style={{ background: '#f0f9ff', color: '#0070b3' }}>{type}</code>
      </td>
      <td>{defaultValue ?? '—'}</td>
      <td>{desc}</td>
    </tr>
  );
}

function PropTable({ children }: { children: React.ReactNode }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default function ApiPage() {
  return (
    <DocPage
      title="API Reference"
      description="All components, props, and TypeScript types exported by @rsuite/charts."
    >
      <h2>ChartContainer</h2>
      <p>
        The foundational component. Every chart wrapper uses it internally. You can use it directly
        with any recharts chart for full control. It provides layout, loading and empty states, and
        theme context, but it does not auto-style raw recharts children.
      </p>
      <pre>
        <code>{`import { ChartContainer } from '@rsuite/charts';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

<ChartContainer height={300} loading={isLoading} empty={data.length === 0}>
  <BarChart data={data}>
    <Bar dataKey="value" fill="#34c3ff" />
    <XAxis dataKey="name" />
    <YAxis />
  </BarChart>
</ChartContainer>`}</code>
      </pre>
      <PropTable>
        <PropRow
          name="height"
          type="number"
          defaultValue="300"
          desc="Container height in pixels."
        />
        <PropRow
          name="loading"
          type="boolean"
          defaultValue="false"
          desc="Display a loading overlay over the chart."
        />
        <PropRow
          name="empty"
          type="boolean"
          desc="Display the empty-state placeholder. Auto-detected from data when using chart wrappers."
        />
        <PropRow
          name="colorPalette"
          type="string[]"
          desc="Override the default rsuite color palette used by the chart wrappers for series auto-coloring."
        />
        <PropRow
          name="locale"
          type="{ emptyMessage?: string; loading?: string }"
          desc="Customize the text shown in empty and loading states."
        />
        <PropRow
          name="renderEmptyPlaceholder"
          type="() => ReactNode"
          desc="Render a fully custom empty-state element."
        />
        <PropRow name="className" type="string" desc="CSS class on the wrapper div." />
        <PropRow name="style" type="CSSProperties" desc="Inline styles on the wrapper div." />
      </PropTable>

      <h2>Chart Wrappers</h2>
      <p>
        All chart wrappers (<code>BarChart</code>, <code>LineChart</code>, <code>AreaChart</code>,{' '}
        <code>ComposedChart</code>, <code>ScatterChart</code>, <code>PieChart</code>,{' '}
        <code>RadarChart</code>, <code>RadialBarChart</code>, <code>Treemap</code>,{' '}
        <code>FunnelChart</code>) accept the same container props above, plus all recharts props for
        their underlying chart.
      </p>

      <h3>BarChart (additional props)</h3>
      <PropTable>
        <PropRow
          name="horizontal"
          type="boolean"
          defaultValue="false"
          desc="Rotate to horizontal layout (bars grow left-to-right instead of bottom-to-top)."
        />
      </PropTable>

      <h2>Styled Components</h2>
      <p>
        These are convenience re-exports of common recharts primitives. When you use them inside the
        chart wrappers, rsuite defaults are injected automatically.
      </p>
      <pre>
        <code>{`import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush } from '@rsuite/charts';`}</code>
      </pre>

      <h3>XAxis</h3>
      <p>
        Wraps recharts <code>XAxis</code>. Defaults: tick color <code>#8e8e93</code>, no axis line,
        no tick lines.
      </p>

      <h3>YAxis</h3>
      <p>
        Wraps recharts <code>YAxis</code>. Defaults: tick color <code>#8e8e93</code>, no axis line,
        no tick lines, <code>width=50</code>.
      </p>

      <h3>CartesianGrid</h3>
      <p>
        Wraps recharts <code>CartesianGrid</code>. Defaults: horizontal lines only, stroke{' '}
        <code>#e5e5ea</code>, strokeDasharray <code>3 3</code>.
      </p>

      <h3>Tooltip</h3>
      <p>
        Wraps recharts <code>Tooltip</code>. Defaults: white card with 8px border-radius, shadow,
        rsuite border color.
      </p>

      <h3>Legend</h3>
      <p>
        Wraps recharts <code>Legend</code>. Defaults: bottom alignment, rsuite text color.
      </p>

      <h3>Brush</h3>
      <p>
        Wraps recharts <code>Brush</code>. Defaults: rsuite border and fill colors.
      </p>

      <h2>Series Components</h2>
      <p>
        Re-exported directly from recharts. Chart wrapper components automatically inject the next
        rsuite palette color into any series that does not have an explicit color set.
      </p>
      <pre>
        <code>{`import { Bar, Line, Area, Scatter, Pie, Cell, Radar, RadialBar, Funnel } from '@rsuite/charts';`}</code>
      </pre>

      <h2>PolarComponents</h2>
      <p>
        Re-exported from recharts for use with <code>RadarChart</code> and{' '}
        <code>RadialBarChart</code>:
      </p>
      <pre>
        <code>{`import { PolarGrid, PolarAngleAxis, PolarRadiusAxis } from '@rsuite/charts';`}</code>
      </pre>

      <h2>Other Re-exports</h2>
      <p>The following recharts utilities are re-exported for convenience:</p>
      <pre>
        <code>{`import {
  ResponsiveContainer,   // use directly when composing custom charts
  ZAxis,                 // third axis for ScatterChart bubble size
  LabelList,             // data labels on bars/slices
  ReferenceLine,         // horizontal/vertical reference annotations
  ReferenceArea,         // shaded reference regions
} from '@rsuite/charts';`}</code>
      </pre>

      <h2>Color Palette</h2>
      <p>The default palette used for auto-coloring series:</p>
      <pre>
        <code>{`const rsuiteChartPalette = [
  '#34c3ff',  // cyan
  '#a873e6',  // purple
  '#13ba9e',  // teal
  '#ee5765',  // red
  '#f5a623',  // orange
  '#2575fc',  // blue
  '#00c690',  // green
  '#ff6b6b',  // coral
];`}</code>
      </pre>

      <h2>TypeScript</h2>
      <p>All components are fully typed. Chart wrapper prop interfaces follow the pattern:</p>
      <pre>
        <code>{`import type { BarChartProps } from '@rsuite/charts';
// extends recharts CategoricalChartProps + ChartContainerProps`}</code>
      </pre>
    </DocPage>
  );
}
