import React, { Component } from 'react';
import './MainRest.css';
import UrlAndButtons from '../components/UrlAndButtons';

export default class MainRest extends Component {
  render() {
    return (
      <div className="main">
        <UrlAndButtons />     
      </div>
    );
  }
}
