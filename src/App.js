import React, { Component } from 'react';
import Medium            from "./components/YourComponent/medium";


import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
      this.setState({ loading: false })
  }

  render() {
    return (
      <div className="App">
        <Medium />
      </div>
    );
  }
}

export default App;
