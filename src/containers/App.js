import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then( users => setRobots(users));
    })

    const onSearchChange = ({target: {value}}) => {
        setSearchField(value);
    }
    
    const filteredRobots = robots.filter(({name}) => name.toLowerCase().includes(searchField));
    
    return !robots.length ? <h1 className='tc f1'>Loading...</h1> : (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )

}

export default App;