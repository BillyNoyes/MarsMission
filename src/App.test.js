import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, getByTestId } from '@testing-library/react';

import Sidebar from './components/Sidebar';
import Input from './components/Input';
import Image from './components/Image';

test('Test Template', () => {  
  // const { getByText } = render(<App />);
  // const linkElement = getByText();
  // expect(linkElement).toBeInTheDocument();
});

const setup = () => {
  const utils = render(<Input />)
  const input = utils.getByPlaceholderText('Task Title');
  return {
    input,
    ...utils,
  }
}

test('It should allow text to be entered', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: 'Walk this direction' } })
  expect(input.value).toBe('Walk this direction')
})


test("Check Image is Rendered", async () => {
  render(<Image />);
  const img = await screen.getByRole('img');
  expect(img).toHaveAttribute('alt', 'Mars');
})

test("Check username is displayed", async () => {
  const { getByTestId } = render(<Sidebar username='testuser' />);
  const name = getByTestId('username');
  expect(name.value).toBe('username');
})
