import React from 'react';
import { render, screen } from '@testing-library/react';
import RadialBarChart from './RadialBarChart';
import RadialBar from '../series/RadialBar';
import Legend from '../components/Legend';
import Tooltip from '../components/Tooltip';

const data = [
  { name: 'Step 1', value: 80 },
  { name: 'Step 2', value: 60 },
  { name: 'Step 3', value: 40 },
];

describe('RadialBarChart', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <RadialBarChart data={data}>
        <RadialBar dataKey="value" />
        <Legend />
        <Tooltip />
      </RadialBarChart>
    );
    expect(container.querySelector('.rs-chart-container')).not.toBeNull();
  });

  it('shows empty state when data is empty', () => {
    render(
      <RadialBarChart data={[]}>
        <RadialBar dataKey="value" />
      </RadialBarChart>
    );
    expect(screen.getByText('No data found')).toBeTruthy();
  });

  it('shows loading state', () => {
    render(
      <RadialBarChart data={data} loading>
        <RadialBar dataKey="value" />
      </RadialBarChart>
    );
    expect(screen.getByText('Loading...')).toBeTruthy();
  });

  it('applies custom className', () => {
    const { container } = render(
      <RadialBarChart data={data} className="my-radialbar">
        <RadialBar dataKey="value" />
      </RadialBarChart>
    );
    expect(container.querySelector('.rs-chart-container.my-radialbar')).not.toBeNull();
  });

  it('accepts custom locale for empty message', () => {
    render(
      <RadialBarChart data={[]} locale={{ emptyMessage: 'No results' }}>
        <RadialBar dataKey="value" />
      </RadialBarChart>
    );
    expect(screen.getByText('No results')).toBeTruthy();
  });
});
