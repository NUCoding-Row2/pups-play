import React, { Component } from "react";
import API from '../utils/API';

const image = {
    width: "100%"
}

class Home extends Component {
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
        return (
            <div className="container grid-md">
                <div>
                    <img src="./assets/images/up-close-pup.jpg" alt="" style={image} />
                </div>
                <div className="panel" key={this.state.Pup._id}>
                    <div className="panel-header">
                        <div class="panel-title"></div>
                    </div>
                    <div class="panel-body">
                        {this.state.Pup.ownername}
                        <br />
                        {this.state.Pup.age}
                        <br />
                        {this.state.Pup.breed}
                        <br />
                        {this.state.Pup.size}
                        <br />
                        {this.state.Pup.location}
                        <br />
                        {this.state.Pup.bio}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;