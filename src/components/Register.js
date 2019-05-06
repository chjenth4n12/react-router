import React, { Component } from 'react';



class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            txtUsername : '',
            txtPassword : ''
        };
    }

    data = JSON.parse(localStorage.getItem('user'));

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }

    onRegister = () => {
        var data = this.data ? this.data : [];
        data.push(this.state);
        localStorage.setItem('user', JSON.stringify(data));
    }

    render () {

        return (
            
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form onSubmit={ this.onRegister }>
                        <legend>Login</legend>
                        <div className="form-group">
                            <label>Username : </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="txtUsername" 
                                placeholder="username" 
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
                                onChange={ this.onChange }
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            
        );
    }
}

export default Register;