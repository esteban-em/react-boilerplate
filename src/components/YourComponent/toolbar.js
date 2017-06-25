import React from 'react';
import { Image }  from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default class ToolBar extends React.Component {
  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <div><Image src="./rainbow2.png" size="tiny"/></div>
          <div className="title-bar__links">
            <a href="#">Editor</a>
            <a href="#">Upload</a>
          </div>
        </div>
      </div>
    );
  }
}
