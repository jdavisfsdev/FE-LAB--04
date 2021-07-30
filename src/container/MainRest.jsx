/* eslint-disable max-len */
import React, { Component } from 'react';
import UrlAndButtons from '../components/UrlAndButtons';
import ResponseBody from '../components/ResponseBody';
import History from '../components/History';
import MainRestCSS from './MainRest.module.css';
import RawBody from '../components/RawBody';

const fetchFunction = async (url, method, raw) => {
  if(method !== 'GET') {
    const res = await fetch(url, {
      method: `${method}`,
      body: JSON.stringify(raw)
    });
    const json = await res.json();
    console.log(method);
    return json;
  }
  const res = await fetch(url);
  const json = res.json();
  return json;
};

export default class MainRest extends Component {
    state = {
      url: '',
      method: '',
      results: 'Postman: results',
      body: '',
      history: []
    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetchFunction(this.state.url, this.state.method);
      this.setState({ results: response });

    }

    render() {
      const { url, body, results, history } = this.state;
      return (
        <div className={MainRestCSS.main}>
          <div className={MainRestCSS.UrlAndButtons}>
            <UrlAndButtons onChange={this.handleChange} onSubmit={this.handleSubmit} url={url}/>
          </div>

          <div className={MainRestCSS.ResponseBody}>
            <RawBody onChange={this.handleChange} body={body} />
            <ResponseBody results={results}/>  
          </div>

          <div className={MainRestCSS.history}>
            <History history={history} />
          </div>
        </div>
      );
    }
}
