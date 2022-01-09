import React from 'react'

function Homebg({letter,classname}) {
    return (
        <div className={"home-bg "+classname}>
            <h1>{letter}</h1>
        </div>
    )
}

export default Homebg
