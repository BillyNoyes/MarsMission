import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import Image from './components/Image';

// Feel free to use a different test framework you're more familiar with

test('Test Template', () => {  
  // const { getByText } = render(<App />);
  // const linkElement = getByText();
  // expect(linkElement).toBeInTheDocument();
});


describe('Mars Image', () => {
  test('Image of Mars must be showing from the API', () => {
    render(<Image />);
    const Image = screen.getByRole('img');
    expect(logo).toHaveAttribute('alt', 'Mars');
  });
});