import React, { Component, PropTypes} from 'react';

class Form extends Component {
    static propTypes = {
    };

    constructor (props, context) {
        super(props, context);
    }

    componentWillMount () {
        const styles = require('./less/Form.less');
    }

    componentWillReceiveProps (nextProps) {
    }


    render () {
        var self = this;
        const {} = this.props;
        return (
            <div className="form">
                hello form
            </div>
        );
    }
}

export default Form;
