import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('Should Home component render', () => {
  test('renders the Home', () => {
    render(<Home />);
  });
});
