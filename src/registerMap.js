import echarts from 'echarts';

/**
 * (mapName: string, geoJson: Object, specialAreas?: Object)
 */
export default function registerMap(mapName, geoJson, specialAreas = {}) {
    echarts.registerMap(mapName, geoJson, specialAreas);
}
