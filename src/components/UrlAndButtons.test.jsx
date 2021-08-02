import React from 'react';
import { render } from '@testing-library/react';
import UrlAndButtons from './UrlAndButtons';


describe('Search component snapshot', () => {
  it('Renders the URL input and radios component on the page', () => {
    const { asFragment } = render(
      <UrlAndButtons />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
