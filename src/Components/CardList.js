import React from "react";
import Card from "./Card";

const CardList = ({users}) => {
    const CardArray = users.map(robot => {
        return <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
        />
    })
    return (
        <div>
            {CardArray}
        
        </div>
    );
    
}

export default CardList;

