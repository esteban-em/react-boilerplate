import React, { Component } from 'react';
import Medium            from "./components/YourComponent/medium";
import ToolBar from "./components/YourComponent/toolbar";


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
        <ToolBar title="rainbow" />
        <div className="medium-editor">
          <Medium/>
        </div>
      </div>
    );
  }
}

export default App;
