import React from 'react';
import { palette as defaultPalette, colors as defaultColors } from './theme';

export interface ChartContextValue {
  /**
   * Color palette used for automatic series coloring.
   */
  palette: string[];
  colors: typeof defaultColors;
}

export const ChartContext = React.createContext<ChartContextValue>({
  palette: defaultPalette,
  colors: defaultColors,
});

export function useChartContext(): ChartContextValue {
  return React.useContext(ChartContext);
}
