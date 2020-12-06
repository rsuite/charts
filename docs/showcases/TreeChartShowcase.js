import React from 'react';
import CodeView from 'react-code-view';
import { TreeChart } from '../..';

const data = [
  {
    name: 'flare',
    children: [
      {
        name: '穷游族',
        children: [
          {
            name: 'LonelyPlant'
          },
          {
            name: 'daodao'
          },
          {
            name: '打折机票'
          },
          {
            name: '酒店促销'
          },
          {
            name: '优惠'
          }
        ]
      },
      {
        name: '婴儿幼儿产品'
      },
      {
        name: '教育'
      },
      {
        name: '新手妈妈'
      },
      {
        name: '都市白领'
      },
      {
        name: '健身'
      },
      {
        name: 'AC追番'
      },
      {
        name: 'HBO GO'
      },
      {
        name: '频道订阅'
      },
      {
        name: '明星粉丝团'
      }
    ]
  }
];

function TreeChartShowcase() {
  return (
    <CodeView
      classPrefix="rs-"
      buttonClassName="rs-btn-subtle rs-btn-icon-circle"
      dependencies={{
        data,
        TreeChart
      }}
    >
      {require('../md/TreeChart.md')}
    </CodeView>
  );
}

export default TreeChartShowcase;
