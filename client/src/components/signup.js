import React, { Component } from "react";
import API from '../utils/API';

class Signup extends Component {
    state = {
        Pups: [],
        ownername: "",
        emailaddress: "",
        password: "",
        pupname: "",
        breed: "",
        bio: ""
    };

    // componentDidMount() {
    //   this.loadPups();
    // }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.ownername && this.state.pupname) {
            API.savePup({
                ownername: this.state.ownername,
                emailaddress: this.state.email,
                password: this.state.password,
                pupname: this.state.pupname,
                breed: this.state.breed,
                age: this.state.age,
                size: this.state.size,
                bio: this.state.bio
            })
                .then(res => this.loadPups())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className="container grid-md">
                <h3 className="text-center mt-2">Sign Up</h3>
                <div className="columns">
                    <div className="form-group col-6 col-mx-auto pt-2">
                        <label className="form-label" htmlFor="ownername">Owner's Name</label>
                        <input value={this.state.ownername} onChange={this.handleInputChange} name="ownername" placeholder="Owner's Name (required)" className="form-input" type="text" id="ownername" />
                        <label className="form-label" htmlFor="email">Email Address</label>
                        <input value={this.state.email} onChange={this.handleInputChange} name="email" placeholder="Email Address (required)" className="form-input" type="text" id="email" />
                        <label className="form-label" htmlFor="password">Password</label>
                        <input value={this.state.password} onChange={this.handleInputChange} name="password" className="form-input" type="password" placeholder="Password (required)" pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$" />

                        <hr />
                        <label className="form-label" htmlFor="pupname">Pup's Name </label>
                        <input value={this.state.pupname} onChange={this.handleInputChange} name="pupname" placeholder="Pup's name (required)" className="form-input" type="text" id="pupname" />
                        <label htmlFor="breed">Breed</label>
                        <input value={this.state.breed} onChange={this.handleInputChange} name="breed" className="form-input" placeholder="Pup's breed (required)" type="text" id="breed" />
                        <label htmlFor="age">Age</label>
                        <input value={this.state.age} onChange={this.handleInputChange} name="age" className="form-input" placeholder="Pup's age (required)" type="text" id="age" />
                        <label htmlFor="size">Size</label>
                        {/* <input value={this.state.size} onChange={this.handleInputChange} name="size" className="form-input" type="text" placeholder="Pup's size (required)" id="size" /> */}
                        <select value={this.state.size} onChange={this.handleInputChange} className="form-select" id="size">
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                        </select>
                        {/* <label htmlFor="bio">Bio:
          <textarea value={this.state.bio} onChange={this.handleInputChange} name="bio" className="form-input" placeholder="Bio (Optional)" id="bio" />
                        </label> */}
                        <br />
                        <button onClick={this.handleFormSubmit} className="btn btn-lg" type="submit">Sign Up</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;