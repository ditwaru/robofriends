import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then( users => this.setState({robots: users}))
    }
    onSearchChange = ({target: {value}}) => {
        this.setState({ searchField: value });
    }
    
    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(({name}) => name.toLowerCase().includes(searchField));
        
        return !robots.length ? <h1 className='tc f1'>Loading...</h1> : (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
    }
}

export default App;