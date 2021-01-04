/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import About from '../pages/about';

describe('pages/about.js', () => {
  it('renders correctly', () => {
    const tree = render(<About />);
    expect(tree).toMatchSnapshot();
  });
});
