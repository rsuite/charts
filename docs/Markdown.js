
import React from 'react';

const Markdown = React.createClass({

    createMarkup: function () {
        return { __html: this.props.children };
    },
    render: function () {


        return (
            <div
                dangerouslySetInnerHTML={this.createMarkup() }
                className='markdown'
                />
        );
    }
});

export default Markdown;
