import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import SingleItem from './singleItem';

describe('SingleItem', () => {
    test('displays information correctly', () => {

        jest.spyOn(URLSearchParams.prototype, 'get').mockImplementation((id) => '1234asdf');

        render(
            <SingleItem />,
        );
        expect(screen.getByText('Single Item ID: 1234asdf')).toBeInTheDocument();
        screen.debug();
        });
  });
