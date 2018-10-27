import React, { Component } from 'react';
import BImg from './background.png';
class BackgroundImg extends Component {
  render() {
    return (
      <div className="logo-container">
        <img src={BImg} alt=''></img>
      </div>
    );
  }
}

export default BackgroundImg;
