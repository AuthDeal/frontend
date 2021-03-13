import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class RateDone extends Component {
    render() {
        return (
            <div className="ratedone">
                <h1 className="ratedone1"> Thanks for your Rating! </h1>
                <h2 className="ratedone2"> Your rated is recevied. </h2>
                <Link to="/">
                    <button className="ratedone3"> Back to Main Page </button>
                </Link>
                
            </div>
        )
    }
}
