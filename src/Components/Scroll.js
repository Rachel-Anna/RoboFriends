import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: "scroll", border: "5px solid black", height: "800px" }}>
            {props.children} 
        </div>
    )
}

export default Scroll;

//you have to use camel case for JSX and css
//props.children allows you to access children inside the scroll
// i.e. the cards, see app.js

//you dont have to pass the props in the Scroll component in the app.js because every component contains the props object by default
// which, in turn, has the children property by default