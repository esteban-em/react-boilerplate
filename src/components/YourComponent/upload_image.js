import React from 'react';
const theDarkSide = document.querySelector('#darksideofthemoon');
export default class UploadImage extends React.Component {


  dark2Light(e) {
    e.preventDefault();
    theDarkSide.style.display = 'inline';
  }

  render() {
    return (
      <button onClick={this.dark2Light}>Upload your image</button>
    );
  }
}
