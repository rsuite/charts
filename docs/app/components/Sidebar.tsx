'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BarChart2, Sun, Moon } from 'lucide-react';

function GithubIcon({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

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
      { href: '/sparkline', label: 'Sparkline' },
    ],
  },
  {
    label: 'Reference',
    items: [{ href: '/api', label: 'API Reference' }],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const dark = saved ? saved === 'dark' : document.documentElement.classList.contains('rs-theme-dark');
    setIsDark(dark);
    if (dark) {
      document.documentElement.classList.add('rs-theme-dark');
    } else {
      document.documentElement.classList.remove('rs-theme-dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    if (next) {
      document.documentElement.classList.add('rs-theme-dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('rs-theme-dark');
      localStorage.setItem('theme', 'light');
    }
    setIsDark(next);
  };

  return (
    <aside style={styles.aside}>
      <div style={styles.logoArea}>
        <BarChart2 size={24} color="#009de6" />
        <div style={{ flex: 1 }}>
          <div style={styles.logoTitle}>rsuite/charts</div>
          <div style={styles.logoVersion}>v6</div>
        </div>
        <a
          href="https://github.com/rsuite/charts"
          target="_blank"
          rel="noreferrer"
          style={styles.themeToggle}
          title="View on GitHub"
        >
          <GithubIcon size={16} color="var(--text-primary)" />
        </a>
        <button
          onClick={toggleTheme}
          style={styles.themeToggle}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? (
            <Sun size={16} color="var(--text-primary)" />
          ) : (
            <Moon size={16} color="var(--text-primary)" />
          )}
        </button>
      </div>

      <nav>
        {nav.map((group) => (
          <div key={group.label} style={styles.group}>
            <div style={styles.groupLabel}>{group.label}</div>
            <ul style={styles.list}>
              {group.items.map((item) => {
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
    borderRight: '1px solid var(--border-color)',
    background: 'var(--bg-panel)',
    padding: '0 0 40px',
  },
  logoArea: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '20px 20px 16px',
    borderBottom: '1px solid var(--border-color)',
    marginBottom: 8,
  },
  logoTitle: {
    fontWeight: 700,
    fontSize: 15,
    color: 'var(--text-primary)',
    lineHeight: 1.2,
  },
  logoVersion: {
    fontSize: 11,
    color: 'var(--text-secondary)',
    fontFamily: 'monospace',
  },
  themeToggle: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 6,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-primary)',
    transition: 'background 0.2s',
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
    color: 'var(--text-secondary)',
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
    color: 'var(--text-primary)',
    textDecoration: 'none',
    transition: 'background 0.15s, color 0.15s',
  },
  linkActive: {
    background: 'var(--rs-primary-50)',
    color: 'var(--rs-primary-700)',
    fontWeight: 600,
  },
};
