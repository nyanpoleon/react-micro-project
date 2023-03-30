import React from 'react';

function Heading(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <h2>{props.decription}</h2>
            <h3>{props.headingSmall}</h3>
        </div>
    );
}

export default Heading;