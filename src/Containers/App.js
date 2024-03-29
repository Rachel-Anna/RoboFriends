import React, { Component } from "react";
import CardList from "../Components/CardList"; 
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import "./App.css";
import ErrorBoundary from "../Components/ErrorBoundaries";

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: "",
            hi1: "sf",
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> {
            return response.json();
        })
        .then(users => {
            this.setState({robots: users})
        })
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render(){
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length ?
        <h1 className ="tc">Loading</h1> :
        (
            <div className="tc">
                 <h1 className="f2">RoboFriends</h1>
                 <SearchBox searchChange={this.onSearchChange}/>
                 <Scroll>
                    <ErrorBoundary>
                        <CardList users={filteredRobots}/>
                    </ErrorBoundary>
                 </Scroll>
            </div>
        );
    }
}


export default App;

//order:
//constructor, render, componentDidMount, render