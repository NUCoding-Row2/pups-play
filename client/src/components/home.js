import React, { Component } from "react";
// import API from '../utils/API';
import Logo from "../assets/images/logo2.png";
import "./home.css";

const image = {
    width: "20%"
}

const divMargin = {
    "marginTop": "10px"
}

class Home extends Component {
    render() {
        return (
            <div className="background-image">
            <div className="hero">
                <div className="container grid-md" style={divMargin}>
                    <div>
                    <div className="centered-block">
                        <h1 className="hero__title">Woof!</h1>
                        <span className="subtitle">Where pups meet pups</span>
                        {/* <img src={Logo} alt="" style={image} /> <br /> */}
                    {/* <button class="btn">login</button>
                            <button class="btn btn-primary">sign up</button> */}
                        </div>

                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Home;