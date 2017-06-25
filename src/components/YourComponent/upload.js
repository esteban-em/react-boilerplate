import React from 'react';
import { Image }  from 'semantic-ui-react';
import UploadImage from './upload_image';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';

export default class Upload extends React.Component {
  render() {
    return (
      <div className="home-body">
        <h1>Welcome to the other side of the rainbow.</h1>
        <div className="home-wrapper">

          <div className="home-box">
            <UploadImage/>
          </div>

          <div className="home-box">
            <Image src="./inbox.png" size="tiny"/>
            <h2>Upload</h2>
            <p>Convert your word documents or image to HTML in one click.</p>
            <Link to="/upload">Upload</Link>
          </div>

        </div>
      </div>
    );
  }
}
