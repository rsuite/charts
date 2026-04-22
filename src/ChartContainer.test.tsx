import React from 'react';
import { render, screen } from '@testing-library/react';
import ChartContainer from './ChartContainer';
import { BarChart, Bar } from 'recharts';

const TestChart = () => (
  <BarChart data={[{ name: 'A', v: 1 }]}>
    <Bar dataKey="v" />
  </BarChart>
);

describe('ChartContainer', () => {
  it('renders children', () => {
    const { container } = render(
      <ChartContainer height={200}>
        <TestChart />
      </ChartContainer>
    );
    expect(container.querySelector('.rs-chart-container')).not.toBeNull();
  });

  it('shows empty placeholder when empty=true', () => {
    render(
      <ChartContainer height={200} empty>
        <TestChart />
      </ChartContainer>
    );
    expect(screen.getByText('No data found')).toBeTruthy();
  });

  it('shows custom empty message from locale', () => {
    render(
      <ChartContainer height={200} empty locale={{ emptyMessage: 'Nothing here' }}>
        <TestChart />
      </ChartContainer>
    );
    expect(screen.getByText('Nothing here')).toBeTruthy();
  });

  it('shows loading overlay when loading=true', () => {
    render(
      <ChartContainer height={200} loading>
        <TestChart />
      </ChartContainer>
    );
    expect(screen.getByText('Loading...')).toBeTruthy();
  });

  it('shows custom loading text from locale', () => {
    render(
      <ChartContainer height={200} loading locale={{ loading: 'Fetching...' }}>
        <TestChart />
      </ChartContainer>
    );
    expect(screen.getByText('Fetching...')).toBeTruthy();
  });

  it('applies custom className', () => {
    const { container } = render(
      <ChartContainer height={200} className="custom-chart">
        <TestChart />
      </ChartContainer>
    );
    expect(container.querySelector('.rs-chart-container.custom-chart')).not.toBeNull();
  });
});
