import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

export default class App extends Component {
    state = {
        location: null,
        errorMessage: null,
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({location: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }s

    render() {
        // option 1
        if(this.state.errorMessage && !this.state.location) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.location) {
            return <div>Latitude: {this.state.latitude}</div>;
        }

        return <div>Loading!</div>

        // option 2
        // let message = (this.state.errorMessage && !this.state.location) ? 
        //     `Error: ${this.state.errorMessage}` : 
        //     `Latitude: ${this.state.location}`; 

        // return (
        //     <div>
        //         {message}
        //     </div>
        // )
    }
}

ReactDOM.render( < App / > , document.getElementById('root'));