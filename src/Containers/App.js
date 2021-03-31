import React, { useEffect, useState} from "react";
import CardList from "../Components/CardList"; 
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import "./App.css";
import ErrorBoundary from "../Components/ErrorBoundaries";

function App() {

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState("");

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(users => {setRobots(users)});
    },[])

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
    
    return !robots.length ?
        <h1 className ="tc">Loading</h1> :
        (
            <div className="tc">
                 <h1 className="f2">RoboFriends</h1>
                 <SearchBox searchChange={onSearchChange}/>
                 <Scroll>
                    <ErrorBoundary>
                        <CardList users={filteredRobots}/>
                    </ErrorBoundary>
                 </Scroll>
            </div>
        );
}


export default App;

//order:
//constructor, render, componentDidMount, render