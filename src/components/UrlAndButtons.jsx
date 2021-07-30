/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import UrlAndButtonsCSS from './UrlAndButtons.module.css';

export default function UrlAndButtons() {
  return (
    <div>
      <input className={UrlAndButtonsCSS.url} placeholder="URL" type="text" />
      <section className={UrlAndButtonsCSS.container}>
        <label htmlFor="radio" className={UrlAndButtonsCSS.label}>
        Get
          <input placeholder="get" className={UrlAndButtonsCSS.radio} value={'get'} type="radio" name="radio" id="get"></input>
        </label>
        <label htmlFor="radio" className={UrlAndButtonsCSS.label}>
        Post
          <input placeholder="get" className={UrlAndButtonsCSS.radio} value={'post'} type="radio" name="radio" id="post"></input>
        </label>
        <label htmlFor="radio" className={UrlAndButtonsCSS.label}>
        Put
          <input placeholder="get" className={UrlAndButtonsCSS.radio} value={'put'} type="radio" name="radio" id="put"></input>
        </label>
        <label htmlFor="radio" className={UrlAndButtonsCSS.label}>
        Patch
          <input placeholder="get" className={UrlAndButtonsCSS.radio} value={'patch'} type="radio" name="radio" id="patch"></input>
        </label>
        <label htmlFor="radio" className={UrlAndButtonsCSS.label}>
        Delete
          <input placeholder="get" className={UrlAndButtonsCSS.radio} value={'delete'} type="radio" name="radio" id="delete"></input>
        </label>
        <button className={UrlAndButtonsCSS.radio}>Go</button>
      </section>
    </div>
  );
}

UrlAndButtons.propTypes = {
    
};
