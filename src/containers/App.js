import React, { Component } from 'react'
import Article from '../components/Article'
import articles from '../fixtures'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>News portal</h1>
        <Article article={articles[0]} />
      </div>
    );
  }
}

export default App;
