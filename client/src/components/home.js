import React, { Component } from "react";
import API from '../utils/API';
import Logo from "../assets/images/logo.png"

const image = {
    width: "100%"
}

const divMargin = {
    "margin-top": "10px"
}

class Home extends Component {
    render() {
        return (
            <div className="container grid-md" style={divMargin}>
                <div>
                    <img src={Logo} alt="" style={image} />
                </div>
            </div>
        )
    }
}

export default Home;