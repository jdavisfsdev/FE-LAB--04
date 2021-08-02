/* eslint-disable max-len */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import MainRest from './MainRest';

describe('MainRest container', () => {
  it('makes a GET to pokemon api', async () => {
    render(<MainRest />);

    const url = screen.getByTestId('url');
    const get = screen.getByTestId('get');
    const enter = screen.getByTestId('enter');
    const results = screen.getByTestId('results');
    fireEvent.change(url, { target: { value: 'https://pokeapi.co/api/v2/pokemon/ditto' } });
    fireEvent.click(get);
    fireEvent.click(enter);
    expect(results).not.toBeEmptyDOMElement;
  });
});
