import React from 'react';
import { render, screen } from '@testing-library/react';
import ScatterChart from './ScatterChart';
import Scatter from '../series/Scatter';
import XAxis from '../components/XAxis';
import YAxis from '../components/YAxis';
import Tooltip from '../components/Tooltip';

const data = [
  { x: 10, y: 20 },
  { x: 30, y: 50 },
  { x: 60, y: 10 },
];

describe('ScatterChart', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ScatterChart>
        <Scatter data={data} />
        <XAxis dataKey="x" />
        <YAxis dataKey="y" />
        <Tooltip />
      </ScatterChart>
    );
    expect(container.querySelector('.rs-chart-container')).not.toBeNull();
  });

  it('shows loading state', () => {
    render(
      <ScatterChart loading>
        <Scatter data={data} />
      </ScatterChart>
    );
    expect(screen.getByText('Loading...')).toBeTruthy();
  });

  it('applies custom className', () => {
    const { container } = render(
      <ScatterChart className="my-scatter">
        <Scatter data={data} />
      </ScatterChart>
    );
    expect(container.querySelector('.rs-chart-container.my-scatter')).not.toBeNull();
  });

  it('accepts custom height', () => {
    const { container } = render(
      <ScatterChart height={500}>
        <Scatter data={data} />
      </ScatterChart>
    );
    const wrapper = container.querySelector('.rs-chart-container') as HTMLElement;
    expect(wrapper.style.height).toBe('500px');
  });
});
