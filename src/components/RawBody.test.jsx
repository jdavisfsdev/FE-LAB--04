import React from 'react';
import { render } from '@testing-library/react';
import RawBody from './RawBody';

describe('RawBody componenet snapshot', () => {
  it('Renders the raw body input box', () => {
    const { asFragment } = render(
      <RawBody />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
