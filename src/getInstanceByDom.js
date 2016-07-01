import echarts from 'echarts';

/**
 * (target: HTMLDivElement|HTMLCanvasElement) => ECharts
 */
export default function getInstanceByDom(target) {
   return echarts.getInstanceByDom(target);
}
