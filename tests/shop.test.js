/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import Shop from '../pages/index';

describe('Index.js', () => {
  it('renders correctly', () => {
    const tree = render(<Shop />);
    expect(tree).toMatchSnapshot();
  });
});
