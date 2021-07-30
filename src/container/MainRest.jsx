import React, { Component } from 'react';
import UrlAndButtons from '../components/UrlAndButtons';
import ResponseBody from '../components/ResponseBody';
import History from '../components/History';
import MainRestCSS from './MainRest.module.css';

export default class MainRest extends Component {
  render() {
    return (
      <div className={MainRestCSS.main}>
        <div className={MainRestCSS.UrlAndButtons}>
          <UrlAndButtons  />
        </div>
        <div className={MainRestCSS.ResponseBody}>
          <ResponseBody />  
        </div>
        <div className={MainRestCSS.history}>
          <History />
        </div>
      </div>
    );
  }
}
