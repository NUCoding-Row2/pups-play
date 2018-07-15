import React, { Component } from 'react';
import API from '../utils/API';
import { Link } from "react-router-dom";

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

    render () {
        return (
            <div className="container grid-md">
                <h3 className="text-center mt-2">{this.state.Pup.pupname}'s Profile</h3>
                <div className="panel" key={this.state.Pup._id}>
                    <div className="panel-header">
                        <div className="panel-title"></div>
                            <figure className="avatar avatar-xl">
                                <img src="../assets/images/winking-dog.png" alt="..." />
                            </figure>
                    </div>
                    <div className="panel-body">
                        My human: {this.state.Pup.ownername}
                        <br/>
                        Age: {this.state.Pup.age}
                        <br/>
                        Breed: {this.state.Pup.breed}
                        <br/>
                        Size: {this.state.Pup.size}
                        <br/>
                        Location: {this.state.Pup.location}
                        <br/>
                        Bio: {this.state.Pup.bio}
                        <br/>
                        <button className="btn btn-lg" type="submit" id={this.state.Pup._id}>Contact my human</button>
                    </div>
                </div>
                <a href="/Pups/">View All Pups</a>
            </div>
        );
    }
}

export default PupProfile;