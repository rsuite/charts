import _merge from 'lodash.merge';
import Line from './series/Line';
import Bars from './series/Bars';
import Map from './series/Map';
import Pie from './series/Pie';
import Sankey from './series/Sankey';
import Scatter from './series/Scatter';
import Tree from './series/Tree';
import Treemap from './series/Treemap';

const series = [Line, Bars, Map, Pie, Sankey, Scatter, Tree, Treemap];

export function isSeriesOption(reactComp) {
  return series.includes(reactComp.type);
}

export function transformTextOption(option, defaultOption) {
  if (option === undefined || option === true) {
    return defaultOption;
  }
  if (option === false) {
    return { show: false };
  }
  if (typeof option === 'function') {
    return {
      ...defaultOption,
      show: true,
      formatter: option,
    };
  }
  if (typeof option === 'object') {
    return _merge({
      ...defaultOption,
      show: true,
    }, option);
  }
  return {
    ...defaultOption,
    show: true,
    formatter() {
      return option;
    },
  };
}

export function randstr(length = 16) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

export function parsePercent(str) {
  const parsed = parseFloat(str);
  if (!Number.isNaN(parsed)) {
    return parsed / 100;
  }
  return parsed;
}
