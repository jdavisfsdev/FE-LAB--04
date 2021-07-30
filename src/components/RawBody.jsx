/* eslint-disable max-len */
import React from 'react';
import RawBodyCSS from './RawBody.module.css';

export default function RawBody({ onChange, body }) {
  return (
    <div>
      <input className={RawBodyCSS.input} onChange={onChange} name="body" placeholder="Raw JSON" type="text" value={body} />
    </div>
  );
}
