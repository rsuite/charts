import React from 'react';
import { render } from '@testing-library/react';
import PieChart from './PieChart';
import Pie from '../series/Pie';
import Tooltip from '../components/Tooltip';
import Legend from '../components/Legend';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];

describe('PieChart', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" />
        <Tooltip />
        <Legend />
      </PieChart>
    );
    expect(container.querySelector('.rs-chart-container')).not.toBeNull();
  });

  it('shows empty state when no Pie data', () => {
    const { container } = render(
      <PieChart>
        <Pie data={[]} dataKey="value" />
      </PieChart>
    );
    expect(container.textContent).toContain('No data found');
  });
});
