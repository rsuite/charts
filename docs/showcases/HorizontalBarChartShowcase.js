import React from 'react';
import BarChart from '@/charts/BarChart';
import Bars from '@/series/Bars';

const data = [['>20k', 11], ['10k-20k', 17], ['5k-10k', 29], ['3k-5k', 19], ['<3k', 25]];

const colors = ['#51E8FF', '#41C5E9', '#32A4D4', '#2485C1', '#1464AC'];

function HorizontalBarChartShowcase() {
  return (
    <div className="showcase">
      <BarChart horizontal inputData={data} xAxis={false}>
        <Bars
          colors={colors.reverse()}
          itemStyle={{ barBorderRadius: 5 }}
          label={({ value }) => `${value}%`}
        />
      </BarChart>
    </div>
  );
}

export default HorizontalBarChartShowcase;
