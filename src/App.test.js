import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Statistics link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Statistics/i);
  expect(linkElement).toBeInTheDocument();
});
