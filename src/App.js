import React, { Component } from 'react';
import Medium            from "./components/YourComponent/medium";
import ToolBar from "./components/YourComponent/toolbar";
import Upload from "./components/YourComponent/upload";
import Home from "./components/YourComponent/home";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const theDarkSide = document.querySelector('#darksideofthemoon');
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
    setInterval(function(){
      if(window.location.pathname === "/upload" ) {
        theDarkSide.style.display = 'block';
      } else {
        theDarkSide.style.display = 'none';
      };
    }, 500);


    return (
        <Router>
          <div className="App">
            <ToolBar title="rainbow" />
            <Route exact path="/" component={Home}/>
            <Route path="/editor" component={Medium}/>
            <Route path="/upload" component={Upload}/>
          </div>
       </Router>
    );
  }
}

export default App;
