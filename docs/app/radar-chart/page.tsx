'use client';

import React from 'react';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  Legend,
} from '@rsuite/charts';
import DocPage from '../components/DocPage';
import Demo from '../components/Demo';

const adData = [
  { subject: '内容清晰易懂', A: 62, B: 53, fullMark: 100 },
  { subject: '可信的', A: 75, B: 80, fullMark: 100 },
  { subject: '符合生活方式', A: 44, B: 37, fullMark: 100 },
  { subject: '独特', A: 39, B: 56, fullMark: 100 },
  { subject: '想分享', A: 44, B: 61, fullMark: 100 },
];

const skillData = [
  { subject: 'TypeScript', score: 90, fullMark: 100 },
  { subject: 'React', score: 85, fullMark: 100 },
  { subject: 'Node.js', score: 75, fullMark: 100 },
  { subject: 'CSS', score: 70, fullMark: 100 },
  { subject: 'Testing', score: 80, fullMark: 100 },
  { subject: 'DevOps', score: 60, fullMark: 100 },
];

export default function RadarChartPage() {
  return (
    <DocPage
      title="RadarChart"
      description="Radar charts (spider charts) are ideal for comparing multiple variables across categories."
    >
      <Demo
        title="Basic Radar Chart"
        code={`import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from '@rsuite/charts';

<RadarChart height={350} data={skillData}>
  <PolarGrid />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis angle={30} domain={[0, 100]} />
  <Radar name="Score" dataKey="score" fillOpacity={0.3} />
  <Tooltip />
</RadarChart>`}
      >
        <RadarChart height={350} data={skillData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name="Score" dataKey="score" fillOpacity={0.3} />
          <Tooltip />
        </RadarChart>
      </Demo>

      <Demo
        title="Multiple Series"
        code={`import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, Tooltip, Legend
} from '@rsuite/charts';

<RadarChart height={350} data={adData}>
  <PolarGrid />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis angle={30} domain={[0, 100]} />
  <Radar name="本次活动" dataKey="A" fillOpacity={0.25} />
  <Radar name="NORM" dataKey="B" fillOpacity={0.25} />
  <Tooltip />
  <Legend />
</RadarChart>`}
      >
        <RadarChart height={350} data={adData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name="本次活动" dataKey="A" fillOpacity={0.25} />
          <Radar name="NORM" dataKey="B" fillOpacity={0.25} />
          <Tooltip />
          <Legend />
        </RadarChart>
      </Demo>
    </DocPage>
  );
}
