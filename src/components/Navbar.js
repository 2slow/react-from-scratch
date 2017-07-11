import React, { Component, PropTypes} from 'react';

class Navbar extends Component {
    constructor (props, context) {
        super(props, context);
    }

    componentWillMount () {
        const styles = require('./less/Navbar.less');
    }

    componentWillReceiveProps (nextProps) {
    }


    render () {
        var self = this;
        const {} = this.props;
        return (
            <div className="navbar">
                <h1>Hello world!</h1>
            </div>
        );
    }
}

export default Navbar;
