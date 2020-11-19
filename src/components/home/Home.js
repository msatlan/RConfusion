import React, { Component } from 'react';
import HomeTemplate from 'components/home/HomeTemplate';
import autoBind from 'react-autobind';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            renderMessage: false,
        };

        autoBind(this, 'onButtonClick');
    }

    onButtonClick() {
        this.setState({
            renderMessage: !this.state.renderMessage,
        });
    }

    render() {
        return (
            <HomeTemplate
                state={this.state}
                props={this.props}
                onButtonClick={() => this.onButtonClick()}
            />
        );
    }
}

export default Home;
