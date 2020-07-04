import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlatFertileButton from './FlatFertileButton';

describe('<FlatFertileButton />', () => {
  test('it should mount', () => {
    render(<FlatFertileButton />);
    
    const flatFertileButton = screen.getByTestId('FlatFertileButton');

    expect(flatFertileButton).toBeInTheDocument();
  });
});