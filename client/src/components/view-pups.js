import React, { Component } from 'react';
import API from '../utils/API';
import { Link } from "react-router-dom";
import Avatar from "../assets/images/winking-dog.png"



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
        date: ""
    }

    componentDidMount() {
        this.loadPups();
    }

    loadPups = () => {
        API.getPups()
            .then(res =>
                this.setState({ Pups: res.data, ownername: "", pupname: "", breed: "", age: "", size: "", bio: "" })
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

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("button clicked")
        
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
                    bio: ""
                })
            )
            .catch(err => console.log(err));
        
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
                    bio: ""
                })
            )
            .catch(err => console.log(err));
    };

    render() {

        let searchInput;
        // console.log(searchInput);

        if (this.state.filterType == "location") {
            searchInput = 
            <input className="form-input" type="number" name="location" placeholder="enter your Zip Code" onChange={this.handleInputChange}></input>;
        } else if (this.state.filterType == "age") {
            searchInput = <input className="form-input" type="number" name="age" placeholder="enter age" onChange={this.handleInputChange}></input>
        } 

        return (
            <div className="container grid-md">
                <h3 className="text-center mt-2">Pups That Want to Play</h3>
                <div className="columns">
                    <div className="column">
                        <div className="columns">
                            {this.state.Pups.map(pup => (
                                <div className="panel column col-5" style={divMargin} key={pup._id}>
                                    <div className="panel-header">
                                        <div className="h5 panel-title">{pup.pupname}</div>
                                        <a href={"/Pups/" + pup._id} id={pup._id}>
                                            <figure className="avatar avatar-xl">
                                                <img src={Avatar} alt="..." />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="panel-body">
                                        My human: {pup.ownername}
                                        <br />
                                        Age: {pup.age}
                                        <br />
                                        Breed: {pup.breed}
                                        <br />
                                        Location: {pup.location}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="panel column col-4">
                        <div className="panel-header">
                            <div className="panel-title">Filter your results</div>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                Search Options:
                            <select className="form-select" name="filterType" onChange={this.handleInputChange}>
                                    <option value="">View All</option>
                                    <option value="location" >Location</option>
                                    <option value="age">Age</option>
                                </select>
                            </div>
                            {searchInput}
                            {/* <div className="form-group">
                                Location:
                            <input className="form-input" type="number" name="location" placeholder="enter your Zip Code" onChange={this.handleInputChange}></input>
                            </div>
                            <div className="form-group">
                                Age:
                            <input className="form-input" type="number" name="age" placeholder="enter age" onChange={this.handleInputChange}></input>
                            </div> */}
                            {/* <div className="form-group">
                                Age:
                            <select className="form-select">
                                    <option>View All</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                            <br />
                            <div className="form-group">
                                Breed:
                            <select className="form-select">
                                    <option>View All</option>
                                    <option>Dalmation</option>
                                    <option>Greyhound</option>
                                    <option>Golden Retriever</option>
                                </select>
                            </div>
                            <br />
                            <div className="form-group">
                                Size:
                            <select className="form-select">
                                    <option>View All</option>
                                    <option>Small (under 25 lbs)</option>
                                    <option>Medium (26-50 lbs)</option>
                                    <option>Large (more than 50 lbs)</option>
                                </select>
                            </div> */}
                            <button className="btn btn-lg" type="submit" onClick={this.handleFormSubmit}> Search</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewPups;