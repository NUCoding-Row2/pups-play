import React, { Component } from 'react';
import API from '../utils/API';
// import { Link } from "react-router-dom";
import Avatar from "../assets/images/winking-dog.png";
import playingDog from "../assets/images/playing-dog.png";

const divMargin = {
    margin: "5px"
}

class ViewPups extends Component {
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
        photo: "",
        date: ""
    }

    componentDidMount() {
        this.loadPups();
    }

    loadPups = () => {
        API.getPups()
            .then(res =>
                this.setState({ Pups: res.data, ownername: "", pupname: "", breed: "", age: "", size: "", bio: "", photo: "" })
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
                this.setState({ Pups: res.data, ownername: "", pupname: "", breed: "", age: "", size: "", bio: "", photo: "" })
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
            // <input className="form-input" type="text" name="size" placeholder="enter size" onChange={this.handleInputChange}></input>
        } else if (this.state.filterType == "breed") {
            searchInput = <select className="form-select" name="breed" onChange={this.handleInputChange}>
                <option>Select a breed</option>
                <option value="Dalmation">Dalmation</option>
                <option value="Greyhound">Greyhound</option>
                <option value="Labrador Retriever">Labrador Retriever</option>
            </select>
        }

        // const loggedIn = this.props.loggedIn;
        // console.log('navbar render, props: ')
        // console.log(this.props);

        return (
            <div>
                {/*{loggedIn ? ( */}

                <div className="container grid-md">
                    <div className="marginTop">
                        <h1 className="text-center mt-2">Pups That Want to Play</h1>
                    </div>
                    <img src={playingDog} className="resizeDogPic" />
                    <div className="columns">
                        <div className="column">
                            <div className="columns">
                                {this.state.Pups.map(pup => (

                                    <div className="panel viewpup column col-5 grow" style={divMargin} key={pup._id}>
                                        <div className="panel-header text-center">
                                            <a href={"/Pups/" + pup._id} id={pup._id}>
                                                <div className="h2 panel-title">{pup.pupname}</div>

                                                <figure className="avatar avatar-xl">
                                                    {/*<img src={Avatar} alt="..." />*/}
                                                    <img src={pup.photo} alt="..." />
                                                </figure>
                                                <span class="panel-link"></span>
                                            </a>
                                        </div>

                                        <div className="panel-body text-light">
                                            My human: {pup.ownername}
                                            <br />
                                            Age: {pup.age}
                                            <br />
                                            Breed: {pup.breed}
                                            <br />
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
                                <div className="panel-title"><h2>Filter your results</h2></div>
                            </div>
                            <div className="panel-body">
                                <div className="form-group">
                                    Search Options:
                                <select className="form-select" name="filterType" onChange={this.handleInputChange}>
                                        <option value="">View All</option>
                                        <option value="location" >Location</option>
                                        <option value="age">Age</option>
                                        <option value="size">Size</option>
                                        <option value="breed">Breed</option>
                                    </select>
                                </div>
                                {searchInput}
                                <button className="btn btn-lg btn-primary" type="submit" onClick={this.handleFormSubmit}> Search</button>
                                <button className="btn btn-lg" type="submit" onClick={this.handleReset}> View All</button>
                            </div>
                        </div>


                        {/* ) : ( 
                        <div className="container grid-md">
                        <h1 className="hero__title">Oops!</h1>
                        <img src="../assets/images/sad-dog.png"/>
                            <p className="subtitle text-center mt-2">Sorry You Don't Have Permission to View This Page!</p>
                        </div>
                    )} */}
                    </div>
                </div>
            </div>

        );
    }
}

export default ViewPups;