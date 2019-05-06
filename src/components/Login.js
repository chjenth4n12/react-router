import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            txtUsername : '',
            txtPassword : ''
        };
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }

    checkLogin (data, user) {
        var result = null;
        data.forEach((item, index) => {
            if (item.txtUsername === user.txtUsername && item.txtPassword === user.txtPassword) {
                result = index
            }
        });
        return result;
    }

    // onLogin = (e) => {
    //     e.preventDefault(); // chặn resubmit
    //     var { location } = this.props;
    //     console.log(location);
    //     var data = JSON.parse(localStorage.getItem('user'));
    //     var check = this.checkLogin(data, this.state);
    //     if (check !== null) {
    //         return <Redirect to={{
    //             pathname : '/product',
    //             state : {
    //                 from : location
    //             }
    //         }}/>
    //     } else {
    //         return null;
    //     }
    // }

    render () {

        var { location } = this.props;
        console.log(location);
        var data = JSON.parse(localStorage.getItem('user'));
        var check = this.checkLogin(data, this.state);
        if (check !== null) {
            return <Redirect to={{
                pathname : '/product',
                state : {
                    from : location
                }
            }}/>
        }
        
        var { txtUsername, txtPassword } = this.state;
        return (
            
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form onSubmit={ this.onLogin }>
                        <legend>Login</legend>
                        <div className="form-group">
                            <label>Username : </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="txtUsername" 
                                placeholder="username" 
                                value={ txtUsername }
                                onChange={ this.onChange }
                            />
                        </div>
                        <div className="form-group">
                            <label>Password : </label>
                            <input
                                type="password"
                                className="form-control"
                                name="txtPassword"
                                placeholder="password"
                                value={ txtPassword }
                                onChange={ this.onChange }
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button> <br/>
                        <a href="/register">Register</a>
                    </form>
                </div>
            </div>
            
        );
    }
}

export default Login;