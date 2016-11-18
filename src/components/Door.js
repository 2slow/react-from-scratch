import React, { Component, PropTypes} from 'react';

class Door extends Component {
    static propTypes = {
    };

    constructor (props, context) {
        super(props, context);
    }

    componentWillMount () {
        const styles = require('./less/Door.less');
    }

    componentWillReceiveProps (nextProps) {
    }


    render () {
        var self = this;
        const {} = this.props;
        return (
            <div className="door">
                Hello door
            </div>
        );
    }
}

export default Door;
