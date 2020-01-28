import React from 'react';
import ReactDom from 'react-dom';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: "Burr, it's cold in here!",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9 ) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';

    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    // const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach!';
    // const icon = season === 'winter ' ? 'snowflake' : 'sun';
    
    // Destructing the obj seasonConfig
    const { text, iconName } = seasonConfig[season]
    return (
        <div>
            <i className = {`${iconName} icon`} />
            <h1> { text } </h1>
            <i className = {`${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay
