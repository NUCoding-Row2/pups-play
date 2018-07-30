import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import PawIcon from "../assets/images/logo3.png";
import axios from 'axios';

const image = {
    width: "60px",
    "marginLeft": "3px",
    "marginRight": "3px",
    "marginTop": "7px",
}

const text = {
    color: "white",
    fontSize: "12px"
}

const logoText = {
    color: "white",
    "marginTop": "10px",
    fontSize: "12px"
}

const fixed = {
    position: fixed,
    paddingBottom: "50px",
    "padding": "10px",
    backgroundColor: "#212121",
    color: "#ffffff"
}


class Footer extends Component {
 
    render() {

        return (
            <div>
                <footer className="navbar" style={fixed}>
                    <section className="navbar-center">
                        <h4 style={logoText}>Developed by NUCoding-Row2 </h4>
                        {/* <a href="/"><img style={image} src={PawIcon} alt="..." /></a>
                        <h4 style={logoText}>Play</h4> */}
                    </section>
                    <section className="navbar-section">
                        <a href="https://github.com/lizschuering" target="_blank" rel="noopener noreferrer" className="btn btn-link" style={text}>Liz</a>
                        <a href="https://github.com/alfcastillo" target="_blank" rel="noopener noreferrer" className="btn btn-link" style={text}>Alfredo</a>
                        <a href="https://github.com/TonyPuricelli" target="_blank" rel="noopener noreferrer" className="btn btn-link" style={text}>Tony</a>
                        <a href="https://github.com/iCarolyn" target="_blank" rel="noopener noreferrer" className="btn btn-link" style={text}>Carolyn</a>
                    </section>
                </footer>
            </div>
        );
    }
}

export default Footer;