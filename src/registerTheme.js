import echarts from 'echarts';

/**
 * (themeName: string, theme: Object)
 */
export default function registerTheme(themeName, theme) {
    echarts.registerTheme(themeName, theme);
}
