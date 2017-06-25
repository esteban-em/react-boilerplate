import React from 'react';
import { Image }  from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-body">
        <h1>Welcome to the other side of the rainbow.</h1>
        <div className="home-wrapper">

          <div className="home-box">
            <Image src="./pencil.png" size="tiny"/>
            <h2>Edit</h2>
            <p>Start a document from scratch or copy paste it from the web.</p>
            <Link to="/editor">Editor</Link>
          </div>

          <div className="home-box">
            <Image src="./inbox.png" size="tiny"/>
            <h2>Upload</h2>
            <p>Convert your images to HTML document in one click.</p>
            <Link to="/upload">Upload</Link>
          </div>

        </div>
      </div>
    );
  }
}
