import React, { Component } from 'react';
import API from '../utils/API';
import SadDog from "../assets/images/sad-dog.png";
import playingDog from "../assets/images/playing-dog.png";
import Delay from "./Delay";

const divMargin = {
    margin: "5px"
}

const divPadding = {
    paddingTop: "15px",
    paddingBottom: "10px"
}

const center = {
    alignSelf: "center",
    width: "200px"
}

class ViewPups extends Component {
    state = {
        Pups: [],
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

    componentDidMount() {
        this.loadPups();
        this.loadBreeds();
    }

    loadPups = () => {
        API.getPups()
            .then(res =>
                this.setState({ Pups: res.data, ownername: "", pupname: "", breed: "", sex: "", spayNeutered: "", age: "", size: "", bio: "", photo: "" })
            )
            .catch(err => console.log(err));
    };

    loadBreeds = () => {
        API.getBreedList()
            .then(res =>
                this.setState({ BreedList: res.data })
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        // console.log(event.target.selected)
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        this.setState({
            [name]: value
        });
    };

    handleReset = event => {
        event.preventDefault();
        console.log("view all button clicked");

        // window.location.reload();

        API.getPups()
            .then(res =>
                this.setState({ Pups: res.data, BreedList: res.data, ownername: "", pupname: "", breed: "", sex: "", spayNeutered: "", age: "", size: "", bio: "", photo: "" })
            )
            .catch(err => console.log(err));

        API.getBreedList()
            .then(res =>
                this.setState({ BreedList: res.data })
            )
            .catch(err => console.log(err));
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("search button clicked");

        if (this.state.filterType === "location") {
            API.searchPupLocation({
                location: this.state.location,
                date: Date.now
            })
                .then(res =>
                    this.setState({
                        Pups: res.data,
                        ownername: "",
                        pupname: "",
                        breed: "",
                        sex: "",
                        spayNeutered: "",
                        age: "",
                        size: "",
                        bio: "",
                        photo: ""
                    })
                )
                .catch(err => console.log(err));
        } else if (this.state.filterType === "age") {
            API.searchPupAge({
                age: this.state.age,
                date: Date.now
            })
                .then(res =>
                    this.setState({
                        Pups: res.data,
                        ownername: "",
                        pupname: "",
                        breed: "",
                        sex: "",
                        spayNeutered: "",
                        age: "",
                        size: "",
                        bio: "",
                        photo: ""
                    })
                )
                .catch(err => console.log(err));
        } else if (this.state.filterType === "size") {
            API.searchPupSize({
                size: this.state.size,
                date: Date.now
            })
                .then(res =>
                    this.setState({
                        Pups: res.data,
                        ownername: "",
                        pupname: "",
                        breed: "",
                        sex: "",
                        spayNeutered: "",
                        age: "",
                        size: "",
                        bio: "",
                        photo: ""
                    })
                )
                .catch(err => console.log(err));
        }
        else if (this.state.filterType === "breed") {
            API.searchPupBreed({
                breed: this.state.breed,
                date: Date.now
            })
                .then(res =>
                    this.setState({
                        Pups: res.data,
                        ownername: "",
                        pupname: "",
                        breed: "",
                        sex: "",
                        spayNeutered: "",
                        age: "",
                        size: "",
                        bio: "",
                        photo: ""
                    })
                )
                .catch(err => console.log(err));
        }


    };

    render() {

        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        let searchInput;

        if (this.state.filterType === "location") {
            searchInput =
                <input className="form-input" type="number" name="location" placeholder="enter your Zip Code" onChange={this.handleInputChange}></input>;
        } else if (this.state.filterType === "age") {
            searchInput = <input className="form-input" type="number" name="age" placeholder="enter age" onChange={this.handleInputChange}></input>
        } else if (this.state.filterType == "size") {
            searchInput = <select className="form-select" name="size" onChange={this.handleInputChange}>
                <option>Select a size</option>
                <option value="small">Small (under 25 lbs)</option>
                <option value="medium">Medium (26-50 lbs)</option>
                <option value="large">Large (more than 50 lbs)</option>
            </select>
        } else if (this.state.filterType == "breed") {
            searchInput = <select className="form-select" name="breed" onChange={this.handleInputChange}>
                <option>Select a breed</option>
                {this.state.BreedList.map(breed => (
                    <option key={breed._id} value={breed.breedname}>{breed.breedname}</option>
                ))}
            </select>
        }

        return (
            <div className="background3-image">
                <div className="pups-bg">
                    {loggedIn ? (
                        // <div className="pups-bg">
                        <div className="container grid-lg">
                            <div className="marginTop">
                                <h1 className="text-center mt-2">Pups That Want to Play</h1>
                            </div>
                            <div class="box bounce-5"><img src={playingDog} className="resizeDogPic" /></div>
                            <div className="columns">
                                <div className="column">
                                    <div className="columns">
                                        {this.state.Pups.map(pup => (
                                            <div className="panel viewpup column col-5 grow" style={divMargin} key={pup._id}>
                                                <div className="panel-header text-center">
                                                    <a href={"/Pups/" + pup._id} id={pup._id}>
                                                        <div className="h2 panel-title">{pup.pupname}</div>
                                                        <figure className="avatar avatar-xl">
                                                            <img src={pup.photo} alt="..." />
                                                        </figure>
                                                        <span class="panel-link"></span>
                                                    </a>
                                                </div>
                                                <div className="panel-body text-light">
                                                    {/* My human: {pup.ownername}
                                                <br /> */}
                                                    Age: {pup.age}
                                                    <br />
                                                    Breed: {pup.breed}
                                                    <br />
                                                    {/* Sex: {pup.sex}
                                                <br /> */}
                                                    {/* Spayed/Neutered: {pup.spayNeutered}
                                                <br /> */}
                                                    Size: {pup.size}
                                                    <br />
                                                    Location: {pup.location}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="panel column col-4">
                                    <div className="panel-header">
                                        <div className="panel-title"><h2><i class="icon icon-arrow-left text-light"></i> Filter your results</h2></div>
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <div className="text-light">Search Options:</div>
                                            <select className="form-select" name="filterType" onChange={this.handleInputChange}>
                                                <option value="">View All</option>
                                                <option value="location" >Location</option>
                                                <option value="age">Age</option>
                                                <option value="size">Size</option>
                                                <option value="breed">Breed</option>
                                            </select>
                                        </div>
                                        {searchInput}
                                        <div style={divPadding}>
                                            <button className="btn btn-lg btn-primary" type="submit" onClick={this.handleFormSubmit}> Search</button> &nbsp;
                                    <button className="btn btn-lg" type="submit" onClick={this.handleReset}> View All</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        // </div>
                    ) : (
                            <Delay wait={250}>
                                <div className="container grid-md center">
                                    <h1 className="hero__title">Oops!</h1>
                                    <p className="subtitle text-center mt-2">Sorry You Don't Have Permission to View This Page!</p>
                                    <img src={SadDog} style={center} />
                                </div>
                            </Delay>
                        )}
                </div>
            </div>


        );
    }
}

export default ViewPups;