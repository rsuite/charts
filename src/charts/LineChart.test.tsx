import React from 'react';
import { render } from '@testing-library/react';
import LineChart from './LineChart';
import Line from '../series/Line';
import XAxis from '../components/XAxis';
import YAxis from '../components/YAxis';

const data = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 200 },
];

describe('LineChart', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <LineChart data={data}>
        <Line dataKey="value" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    );
    expect(container.querySelector('.rs-chart-container')).not.toBeNull();
  });

  it('shows empty state when data is empty', () => {
    const { container } = render(
      <LineChart data={[]}>
        <Line dataKey="value" />
      </LineChart>
    );
    expect(container.textContent).toContain('No data found');
  });
});
