import React from 'react';
import { render, screen } from '@testing-library/react';
import Treemap from './Treemap';

const data = [
  { name: 'A', size: 400 },
  { name: 'B', size: 300 },
  { name: 'C', size: 200 },
  { name: 'D', size: 100 },
];

describe('Treemap', () => {
  it('renders without crashing', () => {
    const { container } = render(<Treemap data={data} dataKey="size" />);
    expect(container.querySelector('.rs-chart-container')).not.toBeNull();
  });

  it('shows empty state when data is empty', () => {
    render(<Treemap data={[]} dataKey="size" />);
    expect(screen.getByText('No data found')).toBeTruthy();
  });

  it('shows loading state', () => {
    render(<Treemap data={data} dataKey="size" loading />);
    expect(screen.getByText('Loading...')).toBeTruthy();
  });

  it('applies custom className', () => {
    const { container } = render(<Treemap data={data} dataKey="size" className="my-treemap" />);
    expect(container.querySelector('.rs-chart-container.my-treemap')).not.toBeNull();
  });

  it('accepts custom height', () => {
    const { container } = render(<Treemap data={data} dataKey="size" height={450} />);
    const wrapper = container.querySelector('.rs-chart-container') as HTMLElement;
    expect(wrapper.style.height).toBe('450px');
  });
});
