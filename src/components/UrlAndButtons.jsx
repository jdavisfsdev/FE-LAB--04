/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import UrlAndButtonsCSS from './UrlAndButtons.module.css';

export default function UrlAndButtons({ url, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input className={UrlAndButtonsCSS.url} data-testid="url" name="url" id="url" placeholder="URL" type="text" onChange={onChange} value={url}/>
      <div className={UrlAndButtonsCSS.container}>
        <label htmlFor="radio" className={UrlAndButtonsCSS.label}>
        Get
          <input onChange={onChange} className={UrlAndButtonsCSS.radio} value={'GET'} name="method" data-testid="get" type="radio" id="get"></input>
        </label>
        <label htmlFor="radio" className={UrlAndButtonsCSS.label}>
        Post
          <input onChange={onChange} className={UrlAndButtonsCSS.radio} value={'POST'} name="method" type="radio" id="post"></input>
        </label>
        <label htmlFor="radio" className={UrlAndButtonsCSS.label}>
        Put
          <input onChange={onChange} className={UrlAndButtonsCSS.radio} value={'PUT'} name="method" type="radio" id="put"></input>
        </label>
        <label htmlFor="radio" className={UrlAndButtonsCSS.label}>
        Patch
          <input onChange={onChange} className={UrlAndButtonsCSS.radio} value={'PATCH'} name="method" type="radio" id="patch"></input>
        </label>
        <label htmlFor="radio" className={UrlAndButtonsCSS.label}>
        Delete
          <input onChange={onChange} className={UrlAndButtonsCSS.radio} value={'DELETE'} name="method" type="radio" id="delete"></input>
        </label>
        <button onSubmit={onSubmit} data-testid="enter" className={UrlAndButtonsCSS.radio}>Go</button>
      </div>
    </form>
  );
}

UrlAndButtons.propTypes = {
    
};
