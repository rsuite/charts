import React from 'react';
import {
  palette as defaultPalette,
  colors as defaultColors,
  darkPalette,
  darkColors,
} from './theme';

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

export function useChartTheme(
  themeProp?: 'light' | 'dark' | 'auto',
  colorPalette?: string[]
): ChartContextValue {
  const [theme, setTheme] = React.useState<'light' | 'dark'>(() =>
    themeProp && themeProp !== 'auto' ? themeProp : 'light'
  );

  React.useEffect(() => {
    if (themeProp === 'light' || themeProp === 'dark') {
      setTheme(themeProp);
      return;
    }

    const checkTheme = () => {
      const isDark =
        document.documentElement.classList.contains('rs-theme-dark') ||
        document.body.classList.contains('rs-theme-dark') ||
        document.documentElement.classList.contains('dark') ||
        document.body.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme'],
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'data-theme'] });

    return () => observer.disconnect();
  }, [themeProp]);

  const isDark = theme === 'dark';
  const basePalette = isDark ? darkPalette : defaultPalette;
  const baseColors = isDark ? darkColors : defaultColors;

  return React.useMemo(
    () => ({
      palette: colorPalette || basePalette,
      colors: baseColors,
    }),
    [colorPalette, basePalette, baseColors]
  );
}

export function useChartContext(): ChartContextValue {
  return React.useContext(ChartContext);
}
