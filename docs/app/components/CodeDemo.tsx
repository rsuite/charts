'use client';

import React, { useState } from 'react';
import { LiveProvider, LivePreview, LiveError } from 'react-live';
import { Highlight, themes } from 'prism-react-renderer';
import { Copy, Check } from 'lucide-react';

interface CodeDemoProps {
  title?: string;
  children: string;
  dependencies?: Record<string, unknown>;
}

export default function CodeDemo({ title, children, dependencies = {} }: CodeDemoProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section style={{ marginBottom: 48 }}>
      {title && <h2 style={{ fontSize: 20, margin: '24px 0 12px' }}>{title}</h2>}
      <div style={styles.container}>
        <div style={styles.previewBox}>
          <LiveProvider code={children.trim()} scope={{ React, ...dependencies }} noInline>
            <LivePreview />
            <LiveError style={styles.error as React.CSSProperties} />
          </LiveProvider>
        </div>
        <div style={showCode ? { ...styles.toolbar, borderRadius: 0 } : styles.toolbar}>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={styles.iconBtn} onClick={handleCopy} title="Copy code">
              {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
              <span style={styles.btnText}>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button style={styles.toggleBtn} onClick={() => setShowCode((v) => !v)}>
              {showCode ? 'Hide Code' : 'Show Code'}
            </button>
          </div>
        </div>
        {showCode && (
          <Highlight theme={themes.nightOwl} code={children.trim()} language="tsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={{ ...styles.codeBlock, ...style }}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        )}
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    marginBottom: 48,
    border: '1px solid var(--border-color)',
    borderRadius: 8,
    overflow: 'hidden',
    boxShadow: 'var(--shadow-sm)',
  },
  previewBox: {
    padding: 24,
    background: 'var(--bg-body)',
    minHeight: 100,
  },
  error: {
    color: '#cf222e',
    fontFamily: 'monospace',
    fontSize: 13,
    marginTop: 8,
    whiteSpace: 'pre-wrap',
    background: 'transparent',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '8px 16px',
    background: 'var(--bg-panel)',
    borderTop: '1px solid var(--border-color)',
    borderRadius: '0 0 8px 8px',
  },
  toggleBtn: {
    background: 'var(--bg-body)',
    border: '1px solid var(--border-color)',
    borderRadius: 6,
    padding: '4px 12px',
    fontSize: 13,
    fontWeight: 500,
    cursor: 'pointer',
    color: 'var(--text-secondary)',
    boxShadow: 'var(--shadow-sm)',
  },
  iconBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    background: 'var(--bg-body)',
    border: '1px solid var(--border-color)',
    borderRadius: 6,
    padding: '4px 12px',
    cursor: 'pointer',
    color: 'var(--text-secondary)',
    boxShadow: 'var(--shadow-sm)',
  },
  btnText: {
    fontSize: 13,
    fontWeight: 500,
  },
  codeBlock: {
    color: '#e2e8f0', // Light text
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    fontSize: 13,
    lineHeight: 1.6,
    background: '#0f172a', // Very dark slate background for contrast
    padding: 20,
    margin: 0,
    overflowX: 'auto',
    borderTop: '1px solid #334155', // Darker border on top
    borderRadius: '0 0 8px 8px',
  },
};
