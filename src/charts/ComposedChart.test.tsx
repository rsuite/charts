import React from 'react';
import { render, screen } from '@testing-library/react';
import ComposedChart from './ComposedChart';
import Bar from '../series/Bar';
import Line from '../series/Line';
import Area from '../series/Area';
import XAxis from '../components/XAxis';
import YAxis from '../components/YAxis';
import Tooltip from '../components/Tooltip';
import Legend from '../components/Legend';
import CartesianGrid from '../components/CartesianGrid';

const data = [
  { name: 'Jan', bar: 100, line: 80, area: 60 },
  { name: 'Feb', bar: 200, line: 150, area: 120 },
  { name: 'Mar', bar: 150, line: 130, area: 100 },
];

describe('ComposedChart', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ComposedChart data={data}>
        <Bar dataKey="bar" />
        <Line dataKey="line" />
        <Area dataKey="area" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid />
      </ComposedChart>
    );
    expect(container.querySelector('.rs-chart-container')).not.toBeNull();
  });

  it('shows empty state when data is empty', () => {
    render(
      <ComposedChart data={[]}>
        <Bar dataKey="bar" />
      </ComposedChart>
    );
    expect(screen.getByText('No data found')).toBeTruthy();
  });

  it('renders in vertical layout', () => {
    const { container } = render(
      <ComposedChart data={data} vertical>
        <Bar dataKey="bar" />
        <XAxis dataKey="name" />
        <YAxis />
      </ComposedChart>
    );
    expect(container.querySelector('.rs-chart-container')).not.toBeNull();
  });

  it('shows loading state', () => {
    render(
      <ComposedChart data={data} loading>
        <Bar dataKey="bar" />
      </ComposedChart>
    );
    expect(screen.getByText('Loading...')).toBeTruthy();
  });

  it('accepts custom locale for empty message', () => {
    render(
      <ComposedChart data={[]} locale={{ emptyMessage: 'Nothing to show' }}>
        <Bar dataKey="bar" />
      </ComposedChart>
    );
    expect(screen.getByText('Nothing to show')).toBeTruthy();
  });
});
