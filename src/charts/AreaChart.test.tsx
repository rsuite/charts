import React from 'react';
import { render, screen } from '@testing-library/react';
import AreaChart from './AreaChart';
import Area from '../series/Area';
import XAxis from '../components/XAxis';
import YAxis from '../components/YAxis';
import Tooltip from '../components/Tooltip';
import Legend from '../components/Legend';
import CartesianGrid from '../components/CartesianGrid';

const data = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 200 },
  { name: 'Mar', value: 150 },
];

describe('AreaChart', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <AreaChart data={data}>
        <Area dataKey="value" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid />
      </AreaChart>
    );
    expect(container.querySelector('.rs-chart-container')).not.toBeNull();
  });

  it('shows empty state when data is empty', () => {
    render(
      <AreaChart data={[]}>
        <Area dataKey="value" />
      </AreaChart>
    );
    expect(screen.getByText('No data found')).toBeTruthy();
  });

  it('shows loading state', () => {
    render(
      <AreaChart data={data} loading>
        <Area dataKey="value" />
      </AreaChart>
    );
    expect(screen.getByText('Loading...')).toBeTruthy();
  });

  it('applies custom className', () => {
    const { container } = render(
      <AreaChart data={data} className="my-area">
        <Area dataKey="value" />
      </AreaChart>
    );
    expect(container.querySelector('.rs-chart-container.my-area')).not.toBeNull();
  });

  it('accepts custom height', () => {
    const { container } = render(
      <AreaChart data={data} height={400}>
        <Area dataKey="value" />
      </AreaChart>
    );
    const wrapper = container.querySelector('.rs-chart-container') as HTMLElement;
    expect(wrapper.style.height).toBe('400px');
  });
});
