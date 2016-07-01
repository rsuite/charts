
import React from 'react';
import ReactDOM from 'react-dom';
import ECharts, {dispatchAction} from '../src';

import './style.less';


import baseBarOptions from './data/bar-base';



const App = React.createClass({

    render() {
         let styles = Object.assign({
            width: '100%',
            height: '400px'
        }, this.props.style);

        return (
            <div className="doc-page">
                <div className="doc-container">
                    <div style={styles}>
                        <ECharts id="myEcharts" option={baseBarOptions}  theme='pagurian' />
                    </div>
                </div>
            </div>
        );
    }
});

setTimeout(function(){

    dispatchAction('myEcharts',{
        type: 'dataZoom',
        start: 20,
        end: 30
    });

},3000);


const rootElement = document.getElementById('app');

ReactDOM.render(<App />,
    rootElement
);
