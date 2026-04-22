'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { BarChart2 } from 'lucide-react';

interface NavGroup {
  label: string;
  items: { href: string; label: string }[];
}

const nav: NavGroup[] = [
  {
    label: 'Getting Started',
    items: [
      { href: '/', label: 'Introduction' },
      { href: '/installation', label: 'Installation' },
    ],
  },
  {
    label: 'Charts',
    items: [
      { href: '/bar-chart', label: 'BarChart' },
      { href: '/line-chart', label: 'LineChart' },
      { href: '/area-chart', label: 'AreaChart' },
      { href: '/composed-chart', label: 'ComposedChart' },
      { href: '/scatter-chart', label: 'ScatterChart' },
      { href: '/pie-chart', label: 'PieChart' },
      { href: '/radar-chart', label: 'RadarChart' },
      { href: '/radial-bar-chart', label: 'RadialBarChart' },
      { href: '/treemap', label: 'Treemap' },
      { href: '/funnel-chart', label: 'FunnelChart' },
    ],
  },
  {
    label: 'Reference',
    items: [{ href: '/api', label: 'API Reference' }],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside style={styles.aside}>
      <div style={styles.logoArea}>
        <BarChart2 size={24} color="#009de6" />
        <div>
          <div style={styles.logoTitle}>rsuite/charts</div>
          <div style={styles.logoVersion}>v6</div>
        </div>
      </div>

      <nav>
        {nav.map(group => (
          <div key={group.label} style={styles.group}>
            <div style={styles.groupLabel}>{group.label}</div>
            <ul style={styles.list}>
              {group.items.map(item => {
                const active = pathname === item.href;
                return (
                  <li key={item.href} style={styles.listItem}>
                    <Link
                      href={item.href}
                      style={{
                        ...styles.link,
                        ...(active ? styles.linkActive : {}),
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

const styles: Record<string, React.CSSProperties> = {
  aside: {
    width: 240,
    flexShrink: 0,
    position: 'sticky',
    top: 0,
    height: '100vh',
    overflowY: 'auto',
    borderRight: '1px solid #e5e5ea',
    background: '#fafafa',
    padding: '0 0 40px',
  },
  logoArea: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '20px 20px 16px',
    borderBottom: '1px solid #e5e5ea',
    marginBottom: 8,
  },
  logoTitle: {
    fontWeight: 700,
    fontSize: 15,
    color: '#272c36',
    lineHeight: 1.2,
  },
  logoVersion: {
    fontSize: 11,
    color: '#8e8e93',
    fontFamily: 'monospace',
  },
  group: {
    marginBottom: 4,
    padding: '0 8px',
  },
  groupLabel: {
    padding: '10px 12px 4px',
    fontSize: 11,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    color: '#8e8e93',
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  listItem: {
    margin: '1px 0',
  },
  link: {
    display: 'block',
    padding: '6px 12px',
    borderRadius: 6,
    fontSize: 14,
    color: '#575757',
    textDecoration: 'none',
    transition: 'background 0.15s, color 0.15s',
  },
  linkActive: {
    background: '#e0f4ff',
    color: '#009de6',
    fontWeight: 600,
  },
};
