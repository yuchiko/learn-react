import React, { Component } from 'react'
import ArticleList from '../components/ArticleList'
import articles from '../fixtures'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>News portal</h1>
        <ArticleList articles={articles}/>
      </div>
    );
  }
}

export default App;
