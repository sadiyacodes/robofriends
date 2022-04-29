import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css'; 

class App extends Component
{
    constructor()
    {
        super();
        this.state = 
        {
            robots : [],
            searchfield : ''
        }
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots : users})});
    }
     
    onSearch = (event) =>
    {
        this.setState({searchfield : event.target.value})
    }

    render()
    {  const {robots , searchfield} = this.state;
        const filteredRobots = robots.filter(robo => 
            {
     return robo.name.toLowerCase().includes(searchfield.toLowerCase());
            })

    return  !robots.length ?
    <h1> Loading... </h1> :
    (
        <div className='tc'>
            <h1 className='f2'>ROBOFRIENDS</h1>
            <SearchBox searchChange = {this.onSearch}/>
            <Scroll>
            <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
       
    );
}
}
export default App;