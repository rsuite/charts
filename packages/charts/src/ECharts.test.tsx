import React from 'react';
import { render, screen } from '@testing-library/react';
import ECharts from './ECharts';

describe('Empty state', () => {
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

  test('Renders custom message specified by `locale.emptyMessage`', () => {
    render(
      <div data-testid="chart">
        <ECharts locale={{ emptyMessage: '没有数据' }} />
      </div>
    );

    expect(screen.getByTestId('chart')).toHaveTextContent('没有数据');
  });

  test('Renders custom placeholder specified by `renderEmptyPlaceholder`', () => {
    render(
      <div data-testid="chart">
        <ECharts renderEmptyPlaceholder={() => <div>没有数据</div>} />
      </div>
    );

    expect(screen.getByTestId('chart')).toHaveTextContent('没有数据');
  });
});
