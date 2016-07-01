import React from 'react';
import echarts from 'echarts';
import onResize from 'element-resize-event';



const ECharts = React.createClass({
    propTypes: {
        style: React.PropTypes.object,
        theme: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.object
        ]),
        group: React.PropTypes.string,
        option: React.PropTypes.object.isRequired,
        //是否不跟之前设置的option进行合并，默认为false，即合并
        notMerge: React.PropTypes.bool,
        //在设置完option后是否不立即刷新画布，默认为false，即立即刷新
        notRefreshImmediately: React.PropTypes.bool,
        onEvents: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            notMerge: false,
            notRefreshImmediately: false,
            onEvents: {},
            style: {},
            theme: {}
        };
    },
    componentDidMount() {
        this.init();
    },
    componentDidUpdate() {
        this.renderEcharts();
    },
    componentWillUnmount() {
        this.dispose();
    },
    init() {
        this.chart = echarts.init(this.refs.container, this.props.theme);
        this.renderEcharts();
    },
    initEvents() {
        let onEvents = this.props.onEvents;
        for (let eventName in onEvents) {
            this.chart.on(eventName, onEvents[eventName]);
        }

        onResize(this.refs.container, () => {
            this.chart.resize();
        });
    },
    dispose() {
        if (this.chart) {
            this.chart.dispose();
            this.chart = null;
        }
    },
    renderEcharts() {

        let { option, notMerge, notRefreshImmediately} = this.props;
        this.chart.showLoading();
        this.chart.setOption(option, notMerge, notRefreshImmediately);
        this.chart.hideLoading();

    },
    render() {
        let {
            id,
            option,
            style,
            className,
            ...props,
        } = this.props;

        let styles = Object.assign({
            width: '100%',
            height: '100%'
        }, style);

        return (
            <div
                id={id}
                ref="container"
                style={styles}
                {...props}
                >
            </div>
        );
    }
});

export default ECharts;
