import React from 'react';
import { render } from '@testing-library/react';
import BarChart from './BarChart';
import Bar from '../series/Bar';
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

describe('BarChart', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <BarChart data={data}>
        <Bar dataKey="value" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid />
      </BarChart>
    );
    expect(container.querySelector('.rs-chart-container')).not.toBeNull();
  });

  it('shows empty state when data is empty', () => {
    const { container } = render(
      <BarChart data={[]}>
        <Bar dataKey="value" />
      </BarChart>
    );
    expect(container.textContent).toContain('No data found');
  });

  it('accepts horizontal prop', () => {
    const { container } = render(
      <BarChart data={data} horizontal>
        <Bar dataKey="value" />
      </BarChart>
    );
    expect(container.querySelector('.rs-chart-container')).not.toBeNull();
  });
});
