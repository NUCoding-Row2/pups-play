import React, { Component } from 'react';
import API from '../utils/API';
import { Link } from "react-router-dom";

class Signup extends Component {
    state = {
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
    };

    componentDidMount() {
        this.loadPups();
    }

    loadPups = () => {
        API.getPups()
            .then(res =>
                this.setState({ Pups: res.data, 
                ownername: "",
                email: "",
                password: "",
                pupname: "",
                breed: "",
                age: "",
                size: "",
                location: "",
                bio: "",
                date: "" })
            )
            .catch(err => console.log(err));
    };

    deletePup = id => {
        API.deletePup(id)
            .then(res => this.loadPups())
            .catch(err => console.log(err));
    };

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
                email: this.state.email,
                password: this.state.password,
                pupname: this.state.pupname,
                breed: this.state.breed,
                age: this.state.age,
                size: this.state.size,
                location: this.state.location,
                bio: this.state.bio,
                date: Date.now
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
                    <form className="form-group col-6 col-mx-auto pt-2">
                        <label className="form-label" htmlFor="ownername">Owner's Name</label>
                        <input className="form-input" 
                            value={this.state.ownername}
                            onChange={this.handleInputChange}
                            name="ownername"
                            placeholder="Owner's Name (required)"
                        />
                        <label className="form-label" htmlFor="email">Email</label>
                        <input className="form-input"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"
                            placeholder="Email (required)"
                        />
                        <label className="form-label" htmlFor="password">Password</label>
                        <input className="form-input"
                            value={this.state.password}
                            type="password"
                            onChange={this.handleInputChange}
                            name="password"
                            placeholder="Password (required)"
                        />
                        <label className="form-label" htmlFor="pupName">Pup's Name</label>
                        <input className="form-input"
                            value={this.state.pupname}
                            onChange={this.handleInputChange}
                            name="pupname"
                            placeholder="Pup's Name (required)"
                        />
                        <label className="form-label" htmlFor="breed">Breed</label>
                        <input className="form-input"
                            value={this.state.breed}
                            onChange={this.handleInputChange}
                            name="breed"
                            placeholder="Pup's breed (required)"
                        />
                        <label className="form-label" htmlFor="age">Age</label>
                        <input className="form-input"
                            value={this.state.age}
                            onChange={this.handleInputChange}
                            name="age"
                            placeholder="Pup's age (required)"
                        />
                        <label className="form-label" htmlFor="size">Size</label>
                        <input className="form-input"
                            value={this.state.size}
                            onChange={this.handleInputChange}
                            name="size"
                            placeholder="Pup's size (required) - small, medium, large"
                        />
                        <label className="form-label" htmlFor="zipCode">Location</label>
                        <input className="form-input"
                            value={this.state.location}
                            onChange={this.handleInputChange}
                            name="location"
                            placeholder="Zip code (required)"
                        />
                        <br />
                        <textarea className="form-input" htmlFor="bio"
                            value={this.state.bio}
                            onChange={this.handleInputChange}
                            name="bio"
                            placeholder="bio (Optional)"
                        ></textarea>
                        <br />
                        <button className="btn btn-lg" onClick={this.handleFormSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;