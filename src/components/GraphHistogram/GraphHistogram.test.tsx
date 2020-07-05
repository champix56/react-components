import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GraphHistogram from './GraphHistogram';

describe('<GraphHistogram />', () => {
  test('it should mount', () => {
    render(<GraphHistogram />);
    
    const graphHistogram = screen.getByTestId('GraphHistogram');

    expect(graphHistogram).toBeInTheDocument();
  });
});