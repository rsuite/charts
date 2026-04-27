import React from 'react';
import { render, screen } from '@testing-library/react';
import RadarChart from './RadarChart';
import Radar from '../series/Radar';
import Tooltip from '../components/Tooltip';
import Legend from '../components/Legend';
import { PolarGrid, PolarAngleAxis } from 'recharts';

const data = [
  { subject: 'Speed', A: 120, B: 80 },
  { subject: 'Power', A: 98, B: 130 },
  { subject: 'Agility', A: 86, B: 100 },
  { subject: 'Stamina', A: 99, B: 95 },
];

describe('RadarChart', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar dataKey="A" name="Team A" />
        <Radar dataKey="B" name="Team B" />
        <Tooltip />
        <Legend />
      </RadarChart>
    );
    expect(container.querySelector('.rs-chart-container')).not.toBeNull();
  });

  it('shows empty state when data is empty', () => {
    render(
      <RadarChart data={[]}>
        <Radar dataKey="A" />
      </RadarChart>
    );
    expect(screen.getByText('No data found')).toBeTruthy();
  });

  it('shows loading state', () => {
    render(
      <RadarChart data={data} loading>
        <Radar dataKey="A" />
      </RadarChart>
    );
    expect(screen.getByText('Loading...')).toBeTruthy();
  });

  it('applies custom className', () => {
    const { container } = render(
      <RadarChart data={data} className="my-radar">
        <Radar dataKey="A" />
      </RadarChart>
    );
    expect(container.querySelector('.rs-chart-container.my-radar')).not.toBeNull();
  });
});
