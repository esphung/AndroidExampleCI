import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import App from './App';

describe('App', () => {
  it('renders initial count', () => {
    render(<App />);
    expect(screen.getByText('Count: 0')).toBeTruthy();
  });

  it('increments count when button is pressed', () => {
    render(<App />);
    const button = screen.getByText('Increment');
    fireEvent.press(button);
    expect(screen.getByText('Count: 1')).toBeTruthy();
  });
});
