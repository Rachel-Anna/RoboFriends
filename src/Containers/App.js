import React, { Component } from "react";
import { connect } from 'react-redux';
import CardList from "../Components/CardList"; 
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import "./App.css";
import ErrorBoundary from "../Components/ErrorBoundaries";

import { setSearchField, requestRobots } from './action';

const mapStateToProps = state => { //state is the store 
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
//this monitors what store changes we are interested in 

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        //The dispatch function is what sends the data to the reducer function
        onRequestRobots: () => dispatch(requestRobots())
    }
}
//onSearchChange is a prop that could be called anything
//this method tells us what props we need to listen to that are actions
//that need to get dispatched

class App extends Component {
    
    componentDidMount() {
        this.props.onRequestRobots();
    }

  
    render(){
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
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
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
connect is a higher order function 
i.e. a function that returns another function

we are connecting the App componenet and saying subscribe to any
state changes in the redux store



dispatch is what triggers an action.
an action is an object that we created but to send the action we 
need to dispatch it (send it) to the reducer

connect runs the function and figures out 1: what state am I interested
in? and 2: what actions am i intersted in? It thens passes these props
to the App

*/



