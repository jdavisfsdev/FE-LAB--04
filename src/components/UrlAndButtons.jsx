/* eslint-disable max-len */
import React from 'react';
import UrlAndButtonsCSS from './UrlAndButtons.module.css';

export default function UrlAndButtons() {
  return (
    <div>
      <input className={UrlAndButtonsCSS.url} placeholder="URL" type="text" />
      <section>
        <label htmlFor="radio">
        Get
          <input placeholder="get" className={UrlAndButtonsCSS.radio} type="radio" name="radio" id="get"></input>
        </label>
        <label htmlFor="radio">
        Post
          <input placeholder="get" className={UrlAndButtonsCSS.radio} type="radio" name="radio" id="post"></input>
        </label><label htmlFor="radio">
        Put
          <input placeholder="get" className={UrlAndButtonsCSS.radio} type="radio" name="radio" id="put"></input>
        </label><label htmlFor="radio">
        Patch
          <input placeholder="get" className={UrlAndButtonsCSS.radio} type="radio" name="radio" id="patch"></input>
        </label><label htmlFor="radio">
        Delete
          <input placeholder="get" className={UrlAndButtonsCSS.radio} type="radio" name="radio" id="delete"></input>
        </label>
      </section>
    </div>
  );
}
