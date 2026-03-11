import { render, screen } from '@testing-library/react';
import App from './App';

test('renders UI Component Playground header', () => {
  render(<App />);
  const headerElement = screen.getByText(/UI Component Playground/i);
  expect(headerElement).toBeInTheDocument();
});