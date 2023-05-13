import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 title', () => {
  render(<App />);
  const h1Element = screen.getByText(/Dairy Chain/i);
  expect(h1Element).toBeInTheDocument();
});
