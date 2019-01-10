import React from 'react';
import BarChart from '@/charts/BarChart';
import Bars from '@/series/Bars';
import YAxis from '@/components/YAxis';
import XAxis from '@/components/XAxis';

const data = [
  ['购物达人', 60],
  ['理财达人', 57],
  ['出行达人', 43],
  ['手机卫士达人', 43],
  ['煲剧一族', 43],
  ['旅游达人', 31],
  ['办公达人', 31],
  ['对战游戏', 28],
  ['时尚达人', 28],
  ['脱口秀达人', 20],
];

const colors = [
  '#1464AC',
  '#2485C1',
  '#32A4D4',
  '#41C5E9',
  '#51E8FF',
  '#42C2DC',
  '#13BA9E',
  '#50E3C2',
  '#7ED321',
  '#B8E986',
];

function VerticalBarChartShowcase() {

  return (
    <div className="showcase">
      <BarChart data={data}>
        <YAxis axisLabel={value => `${value}%`} minInterval={20} />
        <Bars colors={colors} />
      </BarChart>
    </div>
  );
}

export default VerticalBarChartShowcase;
