'use client';

import React from 'react';
import { CodeView } from '@react-code-view/react';

interface CodeDemoProps {
  title?: string;
  children: string;
  dependencies?: Record<string, unknown>;
}

export default function CodeDemo({ title, children, dependencies = {} }: CodeDemoProps) {
  return (
    <section style={{ marginBottom: 48 }}>
      {title && <h2>{title}</h2>}
      <CodeView dependencies={dependencies} language="jsx">
        {children}
      </CodeView>
    </section>
  );
}
