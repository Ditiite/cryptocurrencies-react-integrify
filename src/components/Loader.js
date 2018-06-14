import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return(
            <div className="loader-container">
                <div className="loader">
                    <div className="loader-abs"></div> 
                    <div className="loader-abs"></div>
                </div>
            </div> 
        );
    }
}

export default Loader;