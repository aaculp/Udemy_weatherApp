import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.location) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.location) {
            return <div><SeasonDisplay latitude = {this.state.location} /></div>;
        }

        return <Spinner message = 'Please accept location request...'/>
    }

    render() {
        // option 1
        // if(this.state.errorMessage && !this.state.location) {
        //     return <div>Error: {this.state.errorMessage}</div>;
        // }

        // if(!this.state.errorMessage && this.state.location) {
        //     return <div><SeasonDisplay latitude = {this.state.location} /></div>;
        // }

        // return <Spinner message = 'Please accept location request...'/>

        // option 2
        // let message = (this.state.errorMessage && !this.state.location) ? 
        //     `Error: ${this.state.errorMessage}` : 
        //     `Latitude: ${this.state.location}`; 

        // return (
        //     <div>
        //         {message}
        //     </div>
        // )

        return (
            <div className='border red'>
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render( < App / > , document.getElementById('root'));