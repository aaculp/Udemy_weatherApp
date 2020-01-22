import React from 'react';
import ReactDom from 'react-dom';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9 ) {
        lat > 0 ? 'summer' : 'winter';
    } else {
        lat > 0 ? 'winter' : 'summer';

    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth)
    return (
        <div>Latitude: {props.latitude}</div>
    )
}

export default SeasonDisplay
