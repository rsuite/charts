import echarts from 'echarts';

/**
 * (group:string)
 *
 * 分别设置每个实例的 group id
 * chart1.group = 'group1';
 * chart2.group = 'group1';
 * echarts.connect('group1');
 */
export default function connect(group) {
    echarts.connect(group);
}
