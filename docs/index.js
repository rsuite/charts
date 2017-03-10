
import React from 'react';
import ReactDOM from 'react-dom';
import ECharts, {dispatchAction} from '../src';
import { Markdown } from 'markdownloader';

import './style.less';
import './highlight.less';


import baseBarOptions from './data/bar-base';
import mapOptions from './data/map.js';
import chinaJson from './data/china.json';


const events = {
    click:function(params){
        console.log(params);
    }
};

ECharts.registerMap('china',chinaJson);

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
                        <h1>RSuite ECharts</h1>
                        <p>ECharts for React</p>
                        <ECharts  option={baseBarOptions}  onEvents={events} />


                        <h4>Map</h4>
                        <ECharts  option={mapOptions}  onEvents={events} />

                        <Markdown>
                            {require('./README.md') }
                        </Markdown>
                    </div>
                </div>
            </div>
        );
    }
});


const rootElement = document.getElementById('app');

ReactDOM.render(<App />,
    rootElement
);
