import React from 'react';
import { render, screen } from '@testing-library/react';
import FunnelChart from './FunnelChart';
import Funnel from '../series/Funnel';
import Tooltip from '../components/Tooltip';

const data = [
  { name: 'Visits', value: 5000 },
  { name: 'Signups', value: 3000 },
  { name: 'Purchases', value: 1500 },
  { name: 'Repeat', value: 800 },
];

describe('FunnelChart', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <FunnelChart>
        <Funnel dataKey="value" data={data} />
        <Tooltip />
      </FunnelChart>
    );
    expect(container.querySelector('.rs-chart-container')).not.toBeNull();
  });

  it('shows empty state when no Funnel data', () => {
    render(
      <FunnelChart>
        <Funnel dataKey="value" data={[]} />
      </FunnelChart>
    );
    expect(screen.getByText('No data found')).toBeTruthy();
  });

  it('shows loading state', () => {
    render(
      <FunnelChart loading>
        <Funnel dataKey="value" data={data} />
      </FunnelChart>
    );
    expect(screen.getByText('Loading...')).toBeTruthy();
  });

  it('applies custom className', () => {
    const { container } = render(
      <FunnelChart className="my-funnel">
        <Funnel dataKey="value" data={data} />
      </FunnelChart>
    );
    expect(container.querySelector('.rs-chart-container.my-funnel')).not.toBeNull();
  });

  it('accepts custom locale for empty message', () => {
    render(
      <FunnelChart locale={{ emptyMessage: 'Pipeline empty' }}>
        <Funnel dataKey="value" data={[]} />
      </FunnelChart>
    );
    expect(screen.getByText('Pipeline empty')).toBeTruthy();
  });
});
