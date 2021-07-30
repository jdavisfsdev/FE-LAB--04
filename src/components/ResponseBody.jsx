import React from 'react';
import PropTypes from 'prop-types';
import ResponseBodyCSS from './ResponseBody.module.css';

export default function ResponseBody({ results }) {
  return (
    <div className={ResponseBodyCSS.body} name="results" value={results}>
     `roote`
    </div>
  );
}
