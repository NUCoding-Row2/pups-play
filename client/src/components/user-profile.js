import React, { Component } from 'react';
import API from '../utils/API';
// import { Link } from "react-router-dom";

class UserProfile extends Component {
    constructor(props) {
        super(props)
        // this.state = {
            // Pups: [],
            // ownername: "",
            // email: "",
            // password: "",
            // pupname: "",
            // breed: "",
            // age: "",
            // size: "",
            // location: "",
            // bio: "",
            // date: ""
        // }
        // this.handleFormSubmit = this.handleFormSubmit.bind(this)
        // this.handleInputChange = this.handleInputChange.bind(this)
    }

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     console.log('sign-up handleSubmit, email: ')
    //     console.log(this.state.email)
    //     event.preventDefault();

    //     API.signup({
    //         ownername: this.state.ownername,
    //         email: this.state.email,
    //         password: this.state.password,
    //         pupname: this.state.pupname,
    //         breed: this.state.breed,
    //         age: this.state.age,
    //         size: this.state.size,
    //         location: this.state.location,
    //         bio: this.state.bio,
    //         date: Date.now
    //     })
    //         .then(res => {
    //             console.log(res)
    //             if (!res.data.error) {
    //                 console.log('successful signup')
    //                 this.setState({
    //                     ownername: "",
    //                     email: "",
    //                     password: "",
    //                     pupname: "",
    //                     breed: "",
    //                     age: "",
    //                     size: "",
    //                     location: "",
    //                     bio: "",
    //                     date: ""
    //                 })
    //             } else {
    //                 console.log('username already taken')
    //             }
    //         })
    //         .catch(err => {
    //             console.log('signup error: ')
    //             console.log(err)
    //         });
    // };

    render() {
        const loggedIn = this.props.loggedIn;
        const loggedInUser = this.props.loggedInUser;
        console.log('navbar render, props: ')
        console.log(this.props);

        return (
            <div>
                {loggedIn ? (
                    <div className="container grid-md">
                        <h3 className="text-center mt-2">Your Profile</h3>
                        <div className="columns">
                            <form className="form-group col-6 col-mx-auto pt-2">
                                <label className="form-label" htmlFor="ownername">Owner's Name</label>
                                <input className="form-input"
                                    value={loggedInUser.ownername}
                                    // onChange={this.handleInputChange}
                                    name="ownername"
                                    placeholder="Owner's Name (required)"
                                />
                                <label className="form-label" htmlFor="email">Email</label>
                                <input className="form-input"
                                    value={loggedInUser.email}
                                    // onChange={this.handleInputChange}
                                    name="email"
                                    placeholder="Email (required)"
                                />
                                <label className="form-label" htmlFor="password">Password</label>
                                <input className="form-input"
                                    value={loggedInUser.password}
                                    type="password"
                                    // onChange={this.handleInputChange}
                                    name="password"
                                    placeholder="Password (required)"
                                />
                                <label className="form-label" htmlFor="pupName">Pup's Name</label>
                                <input className="form-input"
                                    value={loggedInUser.pupname}
                                    // onChange={this.handleInputChange}
                                    name="pupname"
                                    placeholder="Pup's Name (required)"
                                />
                                <label className="form-label" htmlFor="breed">Breed</label>
                                <input className="form-input"
                                    value={loggedInUser.breed}
                                    // onChange={this.handleInputChange}
                                    name="breed"
                                    placeholder="Pup's breed (required)"
                                />
                                <label className="form-label" htmlFor="sex">Sex</label>
                                <input className="form-input"
                                    value={loggedInUser.sex}
                                    // onChange={this.handleInputChange}
                                    name="sex"
                                    placeholder="Pup's breed (required)"
                                />
                                <label className="form-label" htmlFor="sex">Spayed/Neutered</label>
                                <input className="form-input"
                                    value={loggedInUser.spayNeutered}
                                    // onChange={this.handleInputChange}
                                    name="spayNeutered"
                                    placeholder="Pup's breed (required)"
                                />
                                <label className="form-label" htmlFor="age">Age</label>
                                <input className="form-input"
                                    value={loggedInUser.age}
                                    // onChange={this.handleInputChange}
                                    name="age"
                                    placeholder="Pup's age (required)"
                                />
                                <label className="form-label" htmlFor="size">Size</label>
                                <input className="form-input"
                                    value={loggedInUser.size}
                                    // onChange={this.handleInputChange}
                                    name="size"
                                    placeholder="Pup's size (required) - small, medium, large"
                                />
                                <label className="form-label" htmlFor="zipCode">Location</label>
                                <input className="form-input"
                                    value={loggedInUser.location}
                                    // onChange={this.handleInputChange}
                                    name="location"
                                    placeholder="Zip code (required)"
                                />
                                <br />
                                <textarea className="form-input" htmlFor="bio"
                                    value={loggedInUser.bio}
                                    // onChange={this.handleInputChange}
                                    name="bio"
                                    placeholder="bio (Optional)"
                                ></textarea>
                                <br />
                                {/*<button className="btn btn-lg" onClick={this.handleFormSubmit}>
                                Submit
                            </button>*/}
                            </form>
                        </div>
                    </div>
                ) : (
                        <div className="container grid-md">
                        <h1 className="hero__title">Oops!</h1>
                        <img src="../assets/images/sad-dog.png"/>
                            <p className="text-center mt-2 subtitle">Sorry You Don't Have Permission to View This Page!</p>
                        </div>
                    )}

            </div>

        )

    }
}

export default UserProfile;