import React from 'react';
import { render, screen } from '@testing-library/react';
import ECharts from './ECharts';

test('renders empty message when data is empty', () => {
  render(
    <div data-testid="chart">
      <ECharts />
    </div>
  );

  expect(screen.getByTestId('chart')).toHaveTextContent(/no data found/i);
});

test('dont render empty message when chart is loading', () => {
  render(
    <div data-testid="chart">
      <ECharts loading />
    </div>
  );

  expect(screen.getByTestId('chart')).not.toHaveTextContent(/no data found/i);
});
