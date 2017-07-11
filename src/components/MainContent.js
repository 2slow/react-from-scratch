import React, { Component, PropTypes} from 'react';

class MainContent extends Component {
    constructor (props, context) {
        super(props, context);
    }

    componentWillMount () {
        const styles = require('./less/MainContent.less');
    }

    componentWillReceiveProps (nextProps) {
    }


    render () {
        var self = this;
        const {} = this.props;
        return (
            <div className="main-content">
                <h2>Well done</h2>
                <p>Here is your React / Webpack App!</p>
            </div>
        );
    }
}

export default MainContent;
