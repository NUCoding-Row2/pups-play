import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import { Link } from "react-router-dom";
// import { FormData } from "form-data";
import API from '../utils/API';


class Signup extends Component {
    state = {
        // Pups: [],
        ownername: "",
        email: "",
        password: "",
        pupname: "",
        breed: "",
        age: "",
        size: "",
        location: "",
        bio: "",
        photo: "",
        date: ""
    }

    constructor(props) {
        super(props)
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.fileInput = React.createRef();
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        console.log('sign-up handleSubmit, email: ');
        console.log(this.state.email);
        event.preventDefault();

        if (this.state.ownername && this.state.pupname) {
            let pupdata = new FormData();

            pupdata.set('ownername', this.state.ownername);
            pupdata.set('email', this.state.email);
            pupdata.set('password', this.state.password);
            pupdata.set('pupname', this.state.pupname);
            pupdata.set('breed', this.state.breed);
            pupdata.set('age', this.state.age);
            pupdata.set('size', this.state.size);
            pupdata.set('location', this.state.location);
            pupdata.set('bio', this.state.bio);
            pupdata.set('photo', this.state.photo); //this is the photo url on MongoDB, not the file itself
            pupdata.set('date', this.state.date);
            pupdata.set('picture', this.fileInput.current.files[0], this.fileInput.current.files[0].name);

            API.signup(pupdata)
                .then(res => {
                    console.log(res)
                    if (!res.data.error) {
                        console.log('successful signup')
                        this.setState({
                            redirectTo: '/login',
                            // ownername: "",
                            // email: "",
                            // password: "",
                            // pupname: "",
                            // breed: "",
                            // age: "",
                            // size: "",
                            // location: "",
                            // bio: "",
                            // photo: "",
                            // date: ""
                        })
                    } else {
                        console.log('username already taken')
                    }
                })
                .catch(err => {
                    console.log('signup error: ')
                    console.log(err)
                });
        }


    };

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
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
                            <label className="form-label" htmlFor="picture">Your Pup's Photo</label>
                            <input className="form-input"
                                type="file"
                                ref={this.fileInput}
                                value={this.state.picture}
                                onChange={this.handleInputChange}
                                name="picture"
                                placeholder="Picture (required)"
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
}

export default Signup;