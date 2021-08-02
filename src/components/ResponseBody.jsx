/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import ResponseBodyCSS from './ResponseBody.module.css';

export default function ResponseBody({ results }) {
  return (
    <div className={ResponseBodyCSS.body} data-testid="results" name="results" value={results}>
      {JSON.stringify(results, null, 3)}
    </div>
  );
}
