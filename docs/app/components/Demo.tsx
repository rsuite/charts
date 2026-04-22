import React from 'react';

interface DemoProps {
  title?: string;
  code: string;
  children: React.ReactNode;
}

export default function Demo({ title, code, children }: DemoProps) {
  return (
    <section style={styles.section}>
      {title && <h2>{title}</h2>}
      <div style={styles.preview}>{children}</div>
      <details style={styles.details}>
        <summary style={styles.summary}>View code</summary>
        <pre style={styles.pre}>
          <code>{code.trim()}</code>
        </pre>
      </details>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    marginBottom: 48,
  },
  preview: {
    border: '1px solid #e5e5ea',
    borderRadius: 8,
    padding: '24px 16px',
    background: '#fff',
    marginBottom: 0,
  },
  details: {
    borderLeft: '1px solid #e5e5ea',
    borderRight: '1px solid #e5e5ea',
    borderBottom: '1px solid #e5e5ea',
    borderRadius: '0 0 8px 8px',
    overflow: 'hidden',
  },
  summary: {
    padding: '10px 16px',
    cursor: 'pointer',
    fontSize: 13,
    color: '#8e8e93',
    background: '#f7f7fa',
    userSelect: 'none',
  },
  pre: {
    background: '#1a1d24',
    margin: 0,
    padding: '20px 24px',
    overflowX: 'auto',
    lineHeight: 1.6,
  },
};
