import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import API from '../utils/API';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            ownername: "",
            email: "",
            password: "",
            pupname: "",
            breed: "",
            age: "",
            size: "",
            location: "",
            bio: "",
            date: ""
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log('handleSubmit');

        API.login({
            email: this.state.email,
            password: this.state.password,
        })
            .then(res => {
                console.log('login response: ')
                console.log(res)
                if (res.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        ownername: this.state.ownername,
                        email: this.state.email,
                        password: this.state.password,
                        pupname: this.state.pupname,
                        breed: this.state.breed,
                        age: this.state.age,
                        size: this.state.size,
                        location: this.state.location,
                        bio: this.state.bio,
                        date: this.state.date
                    })
                    // update the state to redirect to pups when you log in
                    this.setState({
                        redirectTo: '/pups'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    };

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="background2-image">
                <div className="pups-bg">
                <div className="container grid-md">
                <div className="marginTop">
                    <h1 className="text-center mt-2">Log In</h1>
                    </div>
                    <div className="columns form">
                        <div className="form-group col-6 col-mx-auto pt-2">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input value={this.state.email} onChange={this.handleInputChange} name="email" placeholder="Email Address (required)" className="form-input" type="text" id="email" />
                            <label className="form-label" htmlFor="input-example-1">Password</label>
                            <input value={this.state.password} onChange={this.handleInputChange} name="password" className="form-input" type="password" placeholder="Password (required)"
                            />
                            <br />
                            <button className="btn btn-lg btn-primary" type="submit" onClick={this.handleFormSubmit}>Log In</button>
                            <p className="message">Not registered? <a href="/signup">Create an account</a></p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            );
        }
    }
}

export default Login;