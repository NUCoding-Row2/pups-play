import React, { Component } from "react";
import API from '../utils/API';

const image = {
    width: "100%"
}

const divMargin = {
    "margin-top": "10px"
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
            <div className="container grid-md" style={divMargin}>
                <div>
                    <img src="./assets/images/logo.png" alt="" style={image} />
                </div>
            </div>
        )
    }
}

export default Home;