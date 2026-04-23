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
import CodeDemo from '../components/CodeDemo';

const dependencies = {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  Legend,
};

const basicCode = `
const data = [
  { subject: 'TypeScript', score: 90, fullMark: 100 },
  { subject: 'React', score: 85, fullMark: 100 },
  { subject: 'Node.js', score: 75, fullMark: 100 },
  { subject: 'CSS', score: 70, fullMark: 100 },
  { subject: 'Testing', score: 80, fullMark: 100 },
  { subject: 'DevOps', score: 60, fullMark: 100 },
];

render(
  <RadarChart height={350} data={data}>
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <PolarRadiusAxis angle={30} domain={[0, 100]} />
    <Radar name="Score" dataKey="score" fillOpacity={0.3} />
    <Tooltip />
  </RadarChart>
);
`.trim();

const multipleCode = `
const data = [
  { subject: '内容清晰易懂', A: 62, B: 53, fullMark: 100 },
  { subject: '可信的', A: 75, B: 80, fullMark: 100 },
  { subject: '符合生活方式', A: 44, B: 37, fullMark: 100 },
  { subject: '独特', A: 39, B: 56, fullMark: 100 },
  { subject: '想分享', A: 44, B: 61, fullMark: 100 },
];

render(
  <RadarChart height={350} data={data}>
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <PolarRadiusAxis angle={30} domain={[0, 100]} />
    <Radar name="本次活动" dataKey="A" fillOpacity={0.25} />
    <Radar name="NORM" dataKey="B" fillOpacity={0.25} />
    <Tooltip />
    <Legend />
  </RadarChart>
);
`.trim();

export default function RadarChartPage() {
  return (
    <DocPage
      title="RadarChart"
      description="Radar charts (spider charts) are ideal for comparing multiple variables across categories."
    >
      <CodeDemo title="Basic Radar Chart" dependencies={dependencies}>
        {basicCode}
      </CodeDemo>

      <CodeDemo title="Multiple Series" dependencies={dependencies}>
        {multipleCode}
      </CodeDemo>
    </DocPage>
  );
}
