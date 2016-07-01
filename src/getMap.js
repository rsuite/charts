import echarts from 'echarts';

/**
 * (mapName: string) => Object
 */
export default function getMap(mapName) {
    return echarts.getMap(mapName);
}
