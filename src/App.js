import React, { Component } from 'react';
import './styles/style.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Panel from './components/Panel'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <div className="main">
        <Panel />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
        </div>
      </div>
    );
  }
}

export default App;
