/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import Contact from '../pages/contact';

describe('Index.js', () => {
  it('renders correctly', () => {
    const tree = render(<Contact />);
    expect(tree).toMatchSnapshot();
  });
});
