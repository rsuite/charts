import React from 'react';

interface Props {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function DocPage({ title, description, children }: Props) {
  return (
    <article style={styles.article}>
      <header style={styles.header}>
        <h1>{title}</h1>
        {description && <p style={styles.description}>{description}</p>}
      </header>
      {children}
    </article>
  );
}

const styles: Record<string, React.CSSProperties> = {
  article: {
    maxWidth: 860,
    width: '100%',
  },
  header: {
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    margin: '-16px 0 24px',
  },
};
