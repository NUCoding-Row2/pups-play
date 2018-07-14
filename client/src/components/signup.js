import React, { Component } from "react";

class Signup extends Component {
    render () {
        return (
            <div className="container grid-md">
                <h3 className="text-center mt-2">Sign Up</h3>
                <div className="columns">
                    <div className="form-group col-6 col-mx-auto pt-2">
                        <label className="form-label" htmlFor="input-example-1">Email</label>
                        <input className="form-input" type="text" id="input-example-1" />
                        <label className="form-label" htmlFor="input-example-1">Password</label>
                        <input className="form-input" type="text" id="input-example-1" />
                        <label className="form-label" htmlFor="input-example-1">Confirm Password</label>
                        <input className="form-input" type="text" id="input-example-1" />
                        <br/>
                        <button className="btn btn-lg" type="submit">Sign Up</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;