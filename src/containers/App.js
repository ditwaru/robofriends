import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField, requestRobots } from '../actions';
import Header from '../components/Header';

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  err: state.requestRobots.err,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

const App = ({
  searchField,
  onSearchChange,
  onRequestRobots,
  isPending,
  robots,
}) => {
  useEffect(() => {
    onRequestRobots();
  }, []);

  const filteredRobots = robots.filter(({ name }) =>
    name.toLowerCase().includes(searchField)
  );

  return isPending ? (
    <h1 className="tc f1">Loading...</h1>
  ) : (
    <div className="tc">
      <Header title={'Robofriends'} />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
