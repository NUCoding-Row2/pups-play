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
    color: "black"
}

const logoText = {
    color: "black",
    "marginTop": "10px"
}

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault();
        console.log('logging out');
        
        axios.post('/api/pups/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    ownername: null,
                    email: null,
                    password: null,
                    pupname: null,
                    breed: null,
                    age: null,
                    size: null,
                    location: null,
                    bio: null,
                    date: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }


    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        return (
            <div>
                <header className="navbar">
                    {loggedIn ? (
                        <section className="navbar-section">
                        <a href="/logout" className="btn btn-link" style={text} onClick={this.logout}>Logout</a>
                        {/*<a href="/signup" className="btn btn-link" style={text}>Sign Up</a>*/}
                        {/*<a href="/login" className="btn btn-link" style={text}>Login</a>*/}
                        <a href="/profile" className="btn btn-link" style={text}>Your Profile</a>
                        <a href="/pups" className="btn btn-link" style={text}>View Pups</a>
                        </section>
                    ) : (
                        <section className="navbar-section">
                        {/*<a href="/logout" className="btn btn-link" style={text} onClick={this.logout}>Logout</a>*/}
                        <a href="/signup" className="btn btn-link" style={text}>Sign Up</a>
                        <a href="/login" className="btn btn-link" style={text}>Login</a>
                        {/*<a href="/profile" className="btn btn-link" style={text}>Your Profile</a>*/}
                        {/*<a href="/pups" className="btn btn-link" style={text}>View Pups</a>*/}
                        </section>
                    )}
                    
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