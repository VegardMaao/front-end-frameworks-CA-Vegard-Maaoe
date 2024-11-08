import { render, screen } from '@testing-library/react';
import SingleItem from './singleItem';

const oldWindowLocation = window.location;

beforeAll(() => {
    delete window.location
  
    window.location = Object.defineProperties(
      {},
      {
        ...Object.getOwnPropertyDescriptors(oldWindowLocation),
        assign: {
          configurable: true,
          value: jest.fn(),
        },
      },
    )
  })
  beforeEach(() => {
    window.location.assign.mockReset()
  })
  afterAll(() => {
    // restore `window.location` to the `jsdom` `Location` object
    window.location = oldWindowLocation
  })
  
  

describe('SingleItem', () => {
    test('displays information correctly', () => {
        window.location.assign('https://www.url.com/?id=1234asdf')
        render(
            <SingleItem />,
        );
    
        // Displays our DOM for debugging purposes
        expect(screen.getByText('1234asdf')).toBeInTheDocument();
        screen.debug();
        });
  });
  