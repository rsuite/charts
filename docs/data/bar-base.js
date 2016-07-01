export default {
    title: {
        text: 'Hypers 主机资源实时分析',
        left: 'center',
        top: '20px'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为: 'line' | 'shadow'
        },
        formatter: function (params) {
            var tar = params[0];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        borderWidth: 0,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: [
            '10.1.0.1',
            '10.1.0.2',
            '10.1.0.3',
            '10.1.0.4',
            '10.1.0.5',
            '10.1.0.6',
            '10.1.0.7',
            '10.1.0.8',
            '10.1.0.9',
            '10.1.0.10',
            '10.1.0.11',
            '10.1.0.12',
            '10.1.0.13'
        ]
    },
    yAxis: {
        type: 'value',

        splitLine: {
            show: false
        },

        axisLine: {
            lineStyle: {
                color: '#777'
            }
        }
    },
    series: [
        {
            name: 'count',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [
                2900,
                1200,
                300,
                200,
                900,
                300,
                300,
                300,
                300,
                1000,
                111,
                212,
                433
            ]
        }
    ]
};
