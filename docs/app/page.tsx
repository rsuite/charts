import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  BarChart2,
  TrendingUp,
  AreaChart,
  Layers,
  ScatterChart,
  PieChart,
  Hexagon,
  Gauge,
  LayoutDashboard,
  Filter,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Introduction',
};

const ICON_SIZE = 24;
const ICON_COLOR = '#009de6';

const charts = [
  {
    href: '/bar-chart',
    name: 'BarChart',
    icon: <BarChart2 size={ICON_SIZE} color={ICON_COLOR} />,
    desc: 'Vertical and horizontal bar charts',
  },
  {
    href: '/line-chart',
    name: 'LineChart',
    icon: <TrendingUp size={ICON_SIZE} color={ICON_COLOR} />,
    desc: 'Line and area trend charts',
  },
  {
    href: '/area-chart',
    name: 'AreaChart',
    icon: <AreaChart size={ICON_SIZE} color={ICON_COLOR} />,
    desc: 'Filled area charts',
  },
  {
    href: '/composed-chart',
    name: 'ComposedChart',
    icon: <Layers size={ICON_SIZE} color={ICON_COLOR} />,
    desc: 'Mix Bar, Line and Area',
  },
  {
    href: '/scatter-chart',
    name: 'ScatterChart',
    icon: <ScatterChart size={ICON_SIZE} color={ICON_COLOR} />,
    desc: 'Scatter / bubble charts',
  },
  {
    href: '/pie-chart',
    name: 'PieChart',
    icon: <PieChart size={ICON_SIZE} color={ICON_COLOR} />,
    desc: 'Pie and donut charts',
  },
  {
    href: '/radar-chart',
    name: 'RadarChart',
    icon: <Hexagon size={ICON_SIZE} color={ICON_COLOR} />,
    desc: 'Radar / spider charts',
  },
  {
    href: '/radial-bar-chart',
    name: 'RadialBarChart',
    icon: <Gauge size={ICON_SIZE} color={ICON_COLOR} />,
    desc: 'Radial / circular bar charts',
  },
  {
    href: '/treemap',
    name: 'Treemap',
    icon: <LayoutDashboard size={ICON_SIZE} color={ICON_COLOR} />,
    desc: 'Hierarchical treemap charts',
  },
  {
    href: '/funnel-chart',
    name: 'FunnelChart',
    icon: <Filter size={ICON_SIZE} color={ICON_COLOR} />,
    desc: 'Funnel / pipeline charts',
  },
];

export default function HomePage() {
  return (
    <div>
      <div style={styles.hero}>
        <div style={styles.heroIcon}>
          <BarChart2 size={48} color="#009de6" />
        </div>
        <h1 style={styles.heroTitle}>@rsuite/charts</h1>
        <p style={styles.heroSubtitle}>
          A recharts-based chart library built for{' '}
          <a href="https://rsuitejs.com" target="_blank" rel="noreferrer">
            React Suite
          </a>
          . Responsive, themeable, and ready to use.
        </p>
        <div style={styles.heroBadges}>
          <span style={{ ...styles.badge, ...styles.badgeBlue }}>v6</span>
          <span style={{ ...styles.badge, ...styles.badgeGray }}>recharts v2</span>
          <span style={{ ...styles.badge, ...styles.badgeGray }}>TypeScript</span>
          <span style={{ ...styles.badge, ...styles.badgeGray }}>React 18+</span>
        </div>
        <div style={styles.heroActions}>
          <Link href="/installation" style={{ ...styles.btn, ...styles.btnPrimary }}>
            Get Started
          </Link>
          <a
            href="https://github.com/rsuite/charts"
            target="_blank"
            rel="noreferrer"
            style={{ ...styles.btn, ...styles.btnOutline }}
          >
            GitHub
          </a>
        </div>
      </div>

      <h2>Available Charts</h2>
      <div style={styles.grid}>
        {charts.map(chart => (
          <Link key={chart.href} href={chart.href} style={styles.card}>
            <div style={styles.cardIcon}>{chart.icon}</div>
            <div style={styles.cardName}>{chart.name}</div>
            <div style={styles.cardDesc}>{chart.desc}</div>
          </Link>
        ))}
      </div>

      <h2>Quick Example</h2>
      <pre>
        <code>{`import {
  BarChart, Bar,
  XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
} from '@rsuite/charts';

const data = [
  { month: 'Jan', revenue: 4200 },
  { month: 'Feb', revenue: 5800 },
  { month: 'Mar', revenue: 3900 },
];

export default function App() {
  return (
    <BarChart height={300} data={data}>
      <CartesianGrid />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="revenue" name="Revenue" />
    </BarChart>
  );
}`}</code>
      </pre>

      <h2>Features</h2>
      <ul style={styles.features}>
        <li>
          <strong>Built on Recharts</strong> — full access to the Recharts API; pass any recharts
          prop directly to the chart wrappers.
        </li>
        <li>
          <strong>rsuite color palette</strong> — series are automatically colored using the rsuite
          design-system palette. Override with <code>colorPalette</code> prop.
        </li>
        <li>
          <strong>Responsive by default</strong> — every chart uses{' '}
          <code>ResponsiveContainer</code>; set a <code>height</code> and you&rsquo;re done.
        </li>
        <li>
          <strong>Empty &amp; loading states</strong> — pass <code>loading</code> or let the chart
          detect an empty <code>data</code> array automatically.
        </li>
        <li>
          <strong>TypeScript</strong> — complete type definitions, including all recharts
          prop types.
        </li>
      </ul>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: 'center' as const,
    padding: '40px 0 48px',
    borderBottom: '1px solid #e5e5ea',
    marginBottom: 8,
  },
  heroIcon: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 800,
    margin: '0 0 16px',
    color: '#1a1d24',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#575757',
    maxWidth: 520,
    margin: '0 auto 20px',
    lineHeight: 1.6,
  },
  heroBadges: {
    display: 'flex',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 28,
  },
  badge: {
    display: 'inline-block',
    padding: '3px 10px',
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 600,
    fontFamily: 'monospace',
  },
  badgeBlue: {
    background: '#e0f4ff',
    color: '#009de6',
  },
  badgeGray: {
    background: '#f2f2f5',
    color: '#575757',
  },
  heroActions: {
    display: 'flex',
    justifyContent: 'center',
    gap: 12,
  },
  btn: {
    display: 'inline-block',
    padding: '10px 24px',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    textDecoration: 'none',
    cursor: 'pointer',
  },
  btnPrimary: {
    background: '#009de6',
    color: '#fff',
  },
  btnOutline: {
    background: 'transparent',
    border: '1px solid #e5e5ea',
    color: '#575757',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: 12,
    marginBottom: 8,
  },
  card: {
    display: 'block',
    border: '1px solid #e5e5ea',
    borderRadius: 10,
    padding: '16px 18px',
    textDecoration: 'none',
    transition: 'border-color 0.15s, box-shadow 0.15s',
    background: '#fff',
  },
  cardIcon: {
    display: 'flex',
    marginBottom: 8,
  },
  cardName: {
    fontWeight: 600,
    fontSize: 14,
    color: '#272c36',
    marginBottom: 4,
    fontFamily: 'monospace',
  },
  cardDesc: {
    fontSize: 12,
    color: '#8e8e93',
    lineHeight: 1.4,
  },
  features: {
    paddingLeft: 20,
    lineHeight: 1.8,
    color: '#575757',
  },
} satisfies Record<string, React.CSSProperties | { textAlign: 'center' }>;
