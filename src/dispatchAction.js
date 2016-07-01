import echarts from 'echarts';
import getInstanceByDom from './getInstanceByDom';

/**
 * (echartsId: String, payload: Object)
 */
export default function dispatchAction(echartsId, payload) {

    const chartInstance = getInstanceByDom(document.getElementById(echartsId));

    return chartInstance.dispatchAction(payload);
}


