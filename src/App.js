import React, { Component } from 'react';
import './App.css';
import Navigation from './components/GlobalNavigation';
import BoardReadList from './components/BoardReadList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation title="menu"></Navigation>
        <div className="contents">
          <BoardReadList></BoardReadList>
        </div>
      </div>
    );
  }
}

export default App;
