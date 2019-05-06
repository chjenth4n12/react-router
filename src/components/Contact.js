import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isOk: true
        };
    }

    changePermission = () => {
        this.setState({
            isOk : !this.state.isOk
        });
    }

    render () {
        return (
            <div>
                <h1>ĐÂY LÀ TRANG CONTACT</h1> <br />
                <button type="button" className="btn btn-danger" onClick={ this.changePermission }>
                    { this.state.isOk ? 'not allowed' : 'allowed'}
                </button>
                <Prompt when={this.state.isOk} message={location => (`do you want to go to ${location.pathname}`)} />
            </div>
        );
    }
}

export default Contact;