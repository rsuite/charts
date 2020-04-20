import React from 'react';
import BarChart from '@/charts/BarChart';
import Bars from '@/series/Bars';
import YAxis from '@/components/YAxis';
import XAxis from '@/components/XAxis';
import Tooltip from '@/components/Tooltip';

const data = [
  ['1次', 30, 910],
  ['2次', 25, 650],
  ['3次', 25, 400],
  ['4次', 20, 290],
  ['5次', 20, 190],
  ['6次', 20, 160],
  ['7次', 15, 105],
  ['8次', 15, 80],
  ['9次', 10, 70],
  ['10次', 10, 60],
  ['10-20次', 25, 190],
  ['20-30次', 25, 190],
  ['30次+', 50, 380]
];

const colors = ['#1464AC', '#34C3FF'];

function StackedBarsShowcase() {
  const sum = data.reduce((acc, [category, value1, value2]) => acc + value1 + value2, 0);
  return (
    <div className="showcase">
      <BarChart height={400} color={colors} inputData={data}>
        <YAxis minInterval={200} axisLabel={value => `${value}K`} />
        <Bars name="触达品类用户数" stack />
        <Bars
          name="触达用户数"
          stack
          label={({ value }) => `${((value / sum) * 100).toFixed(0)}%`}
        />
      </BarChart>
    </div>
  );
}

export default StackedBarsShowcase;
