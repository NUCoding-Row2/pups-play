import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import { Link } from "react-router-dom";
// import { FormData } from "form-data";
import API from '../utils/API';

const divMargin = {
    "marginTop": "20px"
}

class Signup extends Component {
    state = {
        BreedList: [],
        ownername: "",
        email: "",
        password: "",
        pupname: "",
        breed: "",
        sex: "",
        spayNeutered: "",
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

    componentDidMount() {
        this.loadBreeds();
    }

    loadBreeds = () => {
        API.getBreedList()
            .then(res =>
                this.setState({ BreedList: res.data, ownername: "", pupname: "", breed: "", sex: "", spayNeutered: "", age: "", size: "", bio: "", photo: "" })
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
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
            pupdata.set('sex', this.state.sex);
            pupdata.set('spayNeutered', this.state.spayNeutered);
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
                <div className="background3-image">
                <div className="pups-bg">
                <div className="container grid-md">
                <div className="marginTop">
                    <h1 className="text-center mt-2">Sign Up</h1>
                    </div>
                    <div className="columns form">
                        <form className="form-group col-6 col-mx-auto pt-2">
                        <div class="divider text-center" data-content="OWNER"></div>
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
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,14}$"
                            />
                            <p class="form-input-hint">The email is invalid.</p>
                            <label className="form-label" htmlFor="password">Password</label>
                            <input className="form-input"
                                value={this.state.password}
                                type="password"
                                onChange={this.handleInputChange}
                                name="password"
                                placeholder="Password (required)"
                                pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"
                            />
                            <p class="form-input-hint">Password must be 8 or more characters that are of at least one number, one uppercase and lowercase letter.</p>
                            <div class="divider text-center" data-content="PUPPY"></div>
                            <label className="form-label" htmlFor="pupName">Pup's Name</label>
                            <input className="form-input"
                                value={this.state.pupname}
                                onChange={this.handleInputChange}
                                name="pupname"
                                placeholder="Pup's Name (required)"
                            />
                            <label className="form-label" htmlFor="breed">Breed</label>
                            <select className="form-select" name="breed" onChange={this.handleInputChange}>
                                <option>Select a breed</option>
                                {this.state.BreedList.map(breed => (
                                    <option key={breed._id} value={breed.breedname}>{breed.breedname}</option>
                                ))}
                            </select>
                            <label className="form-label" style={divMargin} htmlFor="sex">Sex</label>
                            <select className="form-select" name="sex" onChange={this.handleInputChange}>
                                <option>Select a gender</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                            <label className="form-label" style={divMargin} htmlFor="spayNeutered">Has your pup been spayed/neutered?</label>
                            <select className="form-select" name="spayNeutered" onChange={this.handleInputChange}>
                                <option>Select a response</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>

                            <label className="form-label" style={divMargin} htmlFor="age">Age</label>
                            <input className="form-input"
                                value={this.state.age}
                                onChange={this.handleInputChange}
                                name="age"
                                placeholder="Pup's age (required)"
                            />
                            <label className="form-label" htmlFor="size">Size</label>
                            <select className="form-select" name="size" onChange={this.handleInputChange}>
                                <option>Select a size</option>
                                <option value="small">Small (under 25 lbs)</option>
                                <option value="medium">Medium (26-50 lbs)</option>
                                <option value="large">Large (more than 50 lbs)</option>
                            </select>
                            
                            <label className="form-label" style={divMargin} htmlFor="zipCode">Location</label>
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
                            
                            <label className="form-label" htmlFor="picture">Your Pup's Bio</label>
                            <textarea className="form-input" htmlFor="bio"
                                value={this.state.bio}
                                onChange={this.handleInputChange}
                                name="bio"
                                placeholder="bio (optional) - Tell us more about your pup!"
                            ></textarea>
                            <br />
                            <button className="btn btn-lg btn-primary" onClick={this.handleFormSubmit}>
                                Submit
                            </button>
                            <p class="message">Already registered? <a href="/login">Sign In</a></p>
                        </form>
                    </div>
                </div>
                </div>
                </div>
            );
        }
    }
}

export default Signup;