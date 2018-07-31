import React, { Component } from 'react';
import API from '../utils/API';
import SadDog from "../assets/images/sad-dog.png";

const imageSize = {
    width: "200px"
}

const center = {
    alignSelf: "center",
    width: "200px"
}

class UserProfile extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const loggedIn = this.props.loggedIn;
        const loggedInUser = this.props.loggedInUser;
        console.log('navbar render, props: ')
        console.log(this.props);

        if (!this.props.loggedIn) {
            return false;
        }

        return (
            <div className="pups-bg">
                {loggedIn ? (
                    <div className="container grid-md">
                        <div className="marginTop">
                        <h1 className="text-center mt-2">Your Profile</h1>
                        </div>
                        <div className="columns form">
                        <img src={loggedInUser.photo} class="avatar avatar-xl" />
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
                                
                                <label className="form-label" htmlFor="bio">Biography</label>
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
                            <p className="text-center mt-2 subtitle">Sorry You Don't Have Permission to View This Page!</p>
                            <img src={SadDog} style={imageSize} style={center} />
                        </div>
                    )}

            </div>

        )

    }
}

export default UserProfile;