import React from 'react'

function Welcome (props) {
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            <h2 className="message">Welcome to React!</h2>
        </div>
    )
}

export default Welcome