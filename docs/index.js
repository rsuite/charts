import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PageContainer } from 'rsuite-docs';
import { Markdown } from 'react-markdown-reader';
import './less/index.less';

import BasicLineChartShowcase from './showcases/BasicLineChartShowcase';
import MultipleLinesShowcase from './showcases/MultipleLinesShowcase';
import DoubleValueAxisShowcase from './showcases/DoubleValueAxisShowcase';
import LineAreaShowcase from './showcases/LineAreaShowcase';
import BasicBarChartShowcase from './showcases/BasicBarChartShowcase';
import VerticalMultipleBarsShowcase from './showcases/VerticalMultipleBarsShowcase';
import HorizontalMultipleBarsShowcase from './showcases/HorizontalMultipleBarsShowcase';
import MultipleStackedBarsShowcase from './showcases/MultipleStackedBarsShowcase';
import LineAndBarsShowcase from './showcases/LineAndBarsShowcase';
import BarAndScatterShowcase from './showcases/BarAndScatterShowcase';
import BasicPieChartShowcase from './showcases/BasicPieChartShowcase';
import DonutChartShowcase from './showcases/DonutChartShowcase';
import ChinaMapChartShowcase from './showcases/ChinaMapChartShowcase';
import TreeChartShowcase from './showcases/TreeChartShowcase';
import TreemapChartShowcase from './showcases/TreemapChartShowcase';
import SankeyChartShowcase from './showcases/SankeyChartShowcase';


class App extends Component {
  render() {

    return (
      <PageContainer
        githubURL="https://github.com/rsuite/rsuite-echarts"
        activeKey="ECharts"
      >
        <h2>基本示例</h2>
        <BasicLineChartShowcase />
        <BasicBarChartShowcase />
        <BasicPieChartShowcase />
        <ChinaMapChartShowcase />
        <TreeChartShowcase />
        <TreemapChartShowcase />
        <SankeyChartShowcase />


        <h2>高级示例</h2>
        <h3>{'<LineChart>'}</h3>
        <MultipleLinesShowcase />
        <DoubleValueAxisShowcase />
        <LineAreaShowcase />

        <h3>{'<BarChart>'}</h3>
        <VerticalMultipleBarsShowcase />
        <HorizontalMultipleBarsShowcase />
        <MultipleStackedBarsShowcase />
        <h4>与折线、散点并用</h4>
        <LineAndBarsShowcase />
        <BarAndScatterShowcase />

        <h3>{'<PieChart>'}</h3>
        <DonutChartShowcase />


        <Markdown>
          {require('./md/props.md')}
        </Markdown>

      </PageContainer>
    );
  }
}


const rootElement = document.getElementById('app');

ReactDOM.render(<App />,
  rootElement
);
