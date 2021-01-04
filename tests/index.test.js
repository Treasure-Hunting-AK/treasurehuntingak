/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import App from '../pages/index';

describe('Index.js', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: 'Welcome to Treasure Hunting AK' })
    ).toBeInTheDocument();

    expect(screen.getByText('Discover Alaska')).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'About Us' })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'Contact Us' })
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: 'Shop' })).toBeInTheDocument();
  });
});
