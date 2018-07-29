import React, { Component } from 'react';
import API from '../utils/API';
import { Link } from "react-router-dom";
import Avatar from "../assets/images/winking-dog.png";
import SadDog from "../assets/images/sad-dog.png";

const flexStyle = {
    "justifyContent": "center",
}

const imageSize = {
    width: "200px"
}

class PupProfile extends Component {
    state = {
        Pup: {}
    };
    // When this component mounts, grab the Pup with the _id of this.props.match.params.id
    // e.g. localhost:3000/Pups/599dcb67f0f16317844583fc
    componentDidMount() {
        API.getPup(this.props.match.params.id)
            .then(res => this.setState({ Pup: res.data }))
            .catch(err => console.log(err));
    }

    render() {

        let pupBio;

        if (this.state.Pup.bio) {
            pupBio = <span>Bio: {this.state.Pup.bio}</span>;
        } else {
            null
        }

        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        return (
            <div>
                {loggedIn ? (
                    <div className="container grid-md" style={flexStyle}>
                        <h1 className="text-center mt-2">{this.state.Pup.pupname}'s Profile</h1>
                        <div className="columns" style={flexStyle}>
                            <div className="panel column col-6" key={this.state.Pup._id}>
                                <div className="panel-header">
                                    <div className="panel-title"></div>
                                    <figure className="avatar avatar-xl">
                                        {/*<img src={Avatar} alt="..." />*/}
                                        <img src={this.state.Pup.photo} alt="..." />
                                    </figure>
                                </div>
                                <div className="panel-body">
                                    My human: {this.state.Pup.ownername}
                                    <br />
                                    Age: {this.state.Pup.age}
                                    <br />
                                    Breed: {this.state.Pup.breed}
                                    <br />
                                    Sex: {this.state.Pup.sex}
                                    <br />
                                    Spayed/Neutered: {this.state.Pup.spayNeutered}
                                    <br />
                                    Size: {this.state.Pup.size}
                                    <br />
                                    Location: {this.state.Pup.location}
                                    <br />
                                    {pupBio}
                                    <br />
                                    <button className="btn btn-lg" type="submit" id={this.state.Pup._id}><a href={"mailto:" + this.state.Pup.email + "?subject=Saw " + this.state.Pup.pupname + " on Pups Play! Would like to set up a playdate."}>Email</a></button>
                                    <Link className="btn btn-lg" to={"/" + this.state.Pup._id + "/messages"}>Message</Link>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="columns" style={flexStyle}><a href="/Pups/" className="text-center">View All Pups</a></div>
                    </div>
                ) : (
                        <div className="container grid-md">
                            <h1 className="hero__title">Oops!</h1>
                            <img src={SadDog} style={imageSize} />
                            <p className="text-center mt-2 subtitle">Sorry You Don't Have Permission to View This Page!</p>
                        </div>
                    )}
            </div>

        );
    }
}

export default PupProfile;