import React, { Component, PropTypes} from 'react';

class App extends Component {
    static propTypes = {
    };

    constructor (props, context) {
        super(props, context);
    }

    componentWillMount () {
        const styles = require('./less/App.less');
    }

    componentWillReceiveProps (nextProps) {
    }


    render () {
        var self = this;
        const {} = this.props;
        return (
            <div className="app">
                {self.props.children}
            </div>
        );
    }
}

export default App;
