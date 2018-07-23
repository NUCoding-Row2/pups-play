import React, { Component } from "react";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            Pups: [],
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
        console.log("button clicked")
    };

    render() {
        return (
            <div className="container grid-md">
                <h3 className="text-center mt-2">Log In</h3>
                <div className="columns">
                    <div className="form-group col-6 col-mx-auto pt-2">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input value={this.state.email} onChange={this.handleInputChange} name="email" placeholder="Email Address (required)" className="form-input" type="text" id="email" />
                        <label className="form-label" htmlFor="input-example-1">Password</label>
                        <input value={this.state.password} onChange={this.handleInputChange} name="password" className="form-input" type="password" placeholder="Password (required)" 
                        // pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$" 
                        />
                        <br />
                        <button className="btn btn-lg" type="submit" onClick={this.handleFormSubmit}>Log In</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;