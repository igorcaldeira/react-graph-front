import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'mutationobserver-shim';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App integration testing ', () => {
  it('access list and render first 15 items from the api', async () => {
    const { findAllByText } = render(<App />);
    const basicPageItemsCount = 15;
    expect(await findAllByText('click to see more')).toHaveLength(basicPageItemsCount);
  });

  it('access details route and ensure details integration', async () => {
    const { findAllByText, debug } = render(<App />);
    const firstSeeMoreOption = await findAllByText('click to see more');
    userEvent.click(firstSeeMoreOption[0]);
    expect(await findAllByText(/Afghanistan/i)).toHaveLength(2);
  });
});
