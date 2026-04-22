import type { Metadata } from 'next';
import './globals.css';
import '@react-code-view/react/styles/index.css';
import Sidebar from './components/Sidebar';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: '@rsuite/charts',
    template: '%s | @rsuite/charts',
  },
  description: 'A recharts-based chart library styled for React Suite v6',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={styles.shell}>
          <Sidebar />
          <main style={styles.main}>
            <div style={styles.content}>{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}

const styles = {
  shell: {
    display: 'flex',
    minHeight: '100vh',
  },
  main: {
    flex: 1,
    minWidth: 0,
    overflowX: 'auto',
  },
  content: {
    maxWidth: 900,
    margin: '0 auto',
    padding: '40px 32px 80px',
  },
} satisfies Record<string, React.CSSProperties>;
