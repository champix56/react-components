import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GraphCircular from './GraphCircular';

describe('<GraphCircular />', () => {
  test('it should mount', () => {
    render(<GraphCircular />);
    
    const graphCircular = screen.getByTestId('GraphCircular');

    expect(graphCircular).toBeInTheDocument();
  });
});