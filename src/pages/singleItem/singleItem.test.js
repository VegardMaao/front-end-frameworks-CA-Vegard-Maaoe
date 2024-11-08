import { render, screen } from '@testing-library/react';
import SingleItem from './singleItem';

describe('SingleItem', () => {
    test('displays information correctly', () => {
      render(
        <SingleItem
        param="1234asdf"
        />,
      );
  
      // Displays our DOM for debugging purposes
      expect(screen.getByText('1234asdf')).toBeInTheDocument();
      screen.debug();
    });
  });
  