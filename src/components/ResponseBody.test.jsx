import React from 'react';
import { render } from '@testing-library/react';
import ResponseBody from './ResponseBody';

describe(' ResponseBody component snapshot', () => {
  it('Renders the response body box', () => {
    const { asFragment } = render (
      <ResponseBody />
    );
    expect(asFragment()).toMatchSnapshot;
  });
});
