import React from 'react';
import { render } from '@testing-library/react';
import Sparkline from './Sparkline';

const numericData = [10, 40, 30, 80, 60, 90, 55];
const objectData = [
  { value: 10 },
  { value: 40 },
  { value: 30 },
  { value: 80 },
  { value: 60 },
];

describe('Sparkline', () => {
  it('renders line type without crashing', () => {
    const { container } = render(<Sparkline data={numericData} type="line" height={60} />);
    expect(container.querySelector('.rs-chart-container')).not.toBeNull();
  });

  it('renders area type without crashing', () => {
    const { container } = render(<Sparkline data={numericData} type="area" height={60} />);
    expect(container.querySelector('.rs-chart-container')).not.toBeNull();
  });

  it('renders bar type without crashing', () => {
    const { container } = render(<Sparkline data={numericData} type="bar" height={60} />);
    expect(container.querySelector('.rs-chart-container')).not.toBeNull();
  });

  it('accepts object data with custom dataKey', () => {
    const { container } = render(
      <Sparkline data={objectData} dataKey="value" type="line" height={60} />
    );
    expect(container.querySelector('.rs-chart-container')).not.toBeNull();
  });

  it('accepts custom color', () => {
    const { container } = render(
      <Sparkline data={numericData} color="#ff0000" height={60} />
    );
    expect(container.querySelector('.rs-chart-container')).not.toBeNull();
  });

  it('accepts custom height', () => {
    const { container } = render(<Sparkline data={numericData} height={80} />);
    const wrapper = container.querySelector('.rs-chart-container') as HTMLElement;
    expect(wrapper.style.height).toBe('80px');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Sparkline data={numericData} className="my-sparkline" height={60} />
    );
    expect(container.querySelector('.rs-chart-container.my-sparkline')).not.toBeNull();
  });
});
