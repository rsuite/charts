
import React from 'react';
import ReactDOM from 'react-dom';
import ECharts, {dispatchAction} from '../src';
import Markdown from './Markdown';

import './style.less';
import './highlight.less';


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
                        <h1>RSuite ECharts</h1>
                        <p>ECharts for React</p>
                        <ECharts  option={baseBarOptions}  theme='pagurian' />
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
