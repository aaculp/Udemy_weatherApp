import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

export default class App extends Component {
    state = {
        location: [],
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({location: position.coords.latitude}),
            (err) => console.log(err)
        );
    }s

    render() {
        return ( 
            <div>Latitude: {this.state.location}</div>
        )
    }
}

ReactDOM.render( < App / > , document.getElementById('root'));