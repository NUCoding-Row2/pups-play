import React, { Component } from "react";
import PawIcon from "../assets/images/paw.png"

const image = {
    width: "35px",
    "marginLeft": "3px",
    "marginRight": "3px"
}

const text = {
    color: "black"
}

const logoText = {
    color: "black",
    "marginTop": "10px"
}

class Navbar extends Component {
    render () {
        return (
            <div>
                <header className="navbar">
                    <section className="navbar-section">
                    <a href="/signup" className="btn btn-link" style={text}>Sign Up</a>
                    {/*<a href="/login" className="btn btn-link" style={text}>Login</a>*/}
                    <a href="/pups" className="btn btn-link" style={text}>View Pups</a>
                    </section>
                    <section className="navbar-center">
                        <h4 style={logoText}>Pups</h4>
                            {/*<a href="/"><img style={image} src="./assets/images/paw.png" alt="" /></a>*/}
                            <a href="/"><img style={image} src={PawIcon} alt="..." /></a>
                        <h4 style={logoText}>Play</h4>
                    </section>
                    <section className="navbar-section">
                    <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-link" style={text}>Instagram</a>
                    <a href="https://github.com/NUCoding-Row2/pups-play" target="_blank" rel="noopener noreferrer" className="btn btn-link" style={text}>GitHub</a>
                    </section>
                </header> 
            </div>
        );
    }
}

export default Navbar;