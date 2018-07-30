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
            <div className="pups-bg">
                {loggedIn ? (
                    <div className="container grid-md" style={flexStyle}>
                    <div className="marginTop">
                        <h1 className="text-center mt-2">{this.state.Pup.pupname}'s Profile</h1>
                        </div>
                        <div className="columns" style={flexStyle}>
                            <div className="column col-6 col-xs-12" key={this.state.Pup._id}>

                                <div className="card">
                                    <div className="card-image">
                                        {/*<img src={Avatar} alt="..." />*/}
                                        <img src={this.state.Pup.photo} className="img-responsive" alt="..." />
                                </div>
                                <div className="card-header">
                                <div class="card-title h5">{this.state.Pup.pupname}</div>
                                <div class="card-subtitle text-gray">Location: {this.state.Pup.location}</div>
                                <div className="card-footer">
                                    <button className="btn btn-lg btn-primary" type="submit" id={this.state.Pup._id}><a href={"mailto:" + this.state.Pup.email + "?subject=Saw " + this.state.Pup.pupname + " on Pups Play! Would like to set up a playdate."}><i class="icon icon-mail"></i> Email</a></button>
                                    <Link className="btn btn-lg" to={"/" + this.state.Pup._id + "/messages"}> <i class="icon icon-message"></i> Message</Link>
                                    </div>
                                <div className="card-body">
                                    <strong>My human:</strong> <p>{this.state.Pup.ownername}</p>
                                    <strong>Age:</strong> <p>{this.state.Pup.age}</p>
                                    <strong>Breed:</strong> <p>{this.state.Pup.breed}</p>
                                    <strong>Sex:</strong> <p>{this.state.Pup.sex}</p>
                                    <strong>Spayed/Neutered:</strong> <p>{this.state.Pup.spayNeutered}</p>
                                    <strong>Size:</strong> <p>{this.state.Pup.size}</p>

                                    <p>{pupBio}</p>
                                    
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="columns" style={flexStyle}><a href="/Pups/" className="text-center"><button class="btn btn-primary btn-action btn-lg"><i class="icon icon-back"></i></button> View All Pups</a></div>
                    </div>
                    </div>
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