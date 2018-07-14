import React, { Component } from "react";

const image = {
    width: "100%"
}

class Home extends Component {
    render () {
        return (
            <div>
                <img src="./assets/images/up-close-pup.jpg" alt="" style={image}/>
            </div>
        )
    }
}

export default Home;