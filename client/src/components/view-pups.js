import React, { Component } from 'react';
import API from '../utils/API';
import { Link } from "react-router-dom";
import Avatar from "../assets/images/winking-dog.png"

const flexStyle = {
    "justifyContent": "center"
}

const divMargin = {
    margin: "10px"
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
            this.setState({ Pups: res.data, ownername: "", pupname: "", breed:"", age:"", size:"", bio: "" })
            )
            .catch(err => console.log(err));
    };

    render () {
        return (
            <div className="container grid-md">
                <h3 className="text-center mt-2">Pups That Want to Play</h3>
                <div className="columns" style={flexStyle}>
                    {this.state.Pups.map(pup => (
                        <div className="panel column col-4" style={divMargin} key={pup._id}>
                            <div className="panel-header">
                                <div className="panel-title">{pup.pupname}</div>
                                <a href={"/Pups/" + pup._id} id={pup._id}>
                                    <figure className="avatar avatar-xl">
                                        <img src={Avatar} alt="..." />
                                    </figure>
                                </a>
                            </div>
                            <div className="panel-body">
                                My human: {pup.ownername}
                                <br/>
                                Age: {pup.age}
                                <br/>
                                Breed: {pup.breed}
                                <br/>
                                Location: {pup.location}
                            </div>
                        </div>
                    ))}
                </div> 
            </div>
        );
    }
}

export default ViewPups;