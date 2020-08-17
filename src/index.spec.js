import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'mutationobserver-shim';
import App from './App';

describe('Global app test', () => {
  it('should be alive', async () => {
    const { findAllByText } = render(<App />);
    const basicPageItemsCount = 15;
    expect(await findAllByText('click to see more')).toHaveLength(basicPageItemsCount);
  });
});
