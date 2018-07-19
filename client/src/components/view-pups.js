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
        pupname: "",
        breed: "",
        age: "",
        size: "",
        bio: ""
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

    render() {
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
                        Age:
                            <select className="form-select">
                                <option>View All</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <br/>
                        <div className="form-group">
                        Breed:
                            <select className="form-select">
                                <option>View All</option>
                                <option>Dalmation</option>
                                <option>Greyhound</option>
                                <option>Golden Retriever</option>
                            </select>
                        </div>
                        <br/>
                        <div className="form-group">
                        Size:
                            <select className="form-select">
                                <option>View All</option>
                                <option>Small (under 25 lbs)</option>
                                <option>Medium (26-50 lbs)</option>
                                <option>Large (more than 50 lbs)</option>
                            </select>
                        </div>
                    </div>
                </div>
</div>
            </div>
        );
    }
}

export default ViewPups;