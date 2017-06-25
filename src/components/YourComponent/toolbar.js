import React from 'react';
import { Image }  from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom'

export default class ToolBar extends React.Component {
  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <div><Link to="/"><Image src="./rainbow2.png" size="tiny"/></Link></div>
          <div className="title-bar__links">
            <Link to="/editor">Editor</Link>
            <Link to="/upload">Upload</Link>
          </div>
        </div>
      </div>
    );
  }
}
