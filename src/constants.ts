import React from 'react';

interface EChartsContext {
  [key: string]: any
}

export const EChartsContext = React.createContext<EChartsContext>({
});


export const symbols = {
  typeKey: Symbol.for('$$typeKey'),
  // components
  dataZoom: Symbol.for('$$dataZoom'),
  legend: Symbol.for('$$legend'),
  radar: Symbol.for('$$radar'),
  tooltip: Symbol.for('$$tooltip'),
  visualMap: Symbol.for('$$visualMap'),
  xAxis: Symbol.for('$$xAxis'),
  yAxis: Symbol.for('$$yAxis'),

  // series
  bars: Symbol.for('$$bars'),
  funnel: Symbol.for('$$funnel'),
  line: Symbol.for('$$line'),
  map: Symbol.for('$$map'),
  pie: Symbol.for('$$pie'),
  radarLine: Symbol.for('$$radarLine'),
  sankey: Symbol.for('$$sankey'),
  scatter: Symbol.for('$$scatter'),
  tree: Symbol.for('$$tree'),
  treemap: Symbol.for('$$treemap')
};

(symbols as any).components = [
  symbols.dataZoom,
  symbols.legend,
  symbols.radar,
  symbols.tooltip,
  symbols.visualMap,
  symbols.xAxis,
  symbols.yAxis
];

(symbols as any).series = [
  symbols.bars,
  symbols.funnel,
  symbols.line,
  symbols.map,
  symbols.pie,
  symbols.radarLine,
  symbols.sankey,
  symbols.scatter,
  symbols.tree,
  symbols.treemap
];
