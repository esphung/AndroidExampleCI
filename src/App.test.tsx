import React from 'react';
import { render, userEvent, screen } from '@testing-library/react-native';
import App from './App';

describe('App', () => {
  it('renders initial UI correctly', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    expect(getByPlaceholderText('Enter username')).toBeVisible();
    expect(getByPlaceholderText('Enter password')).toBeVisible();
    expect(getByText('Welcome, Guest!')).toBeVisible();
    expect(getByText('Count: 0')).toBeVisible();
    expect(getByText('Login')).toBeVisible();
    expect(getByText('Increment')).toBeVisible();
    expect(getByText('Decrement')).toBeVisible();
  });

  it('increments and decrements count', async () => {
    render(<App />);
    const incrementBtn = screen.getByText('Increment');
    const decrementBtn = screen.getByText('Decrement');

    await userEvent.press(incrementBtn);
    expect(screen.getByText('Count: 1')).toBeVisible();

    await userEvent.press(decrementBtn);
    expect(screen.getByText('Count: 0')).toBeVisible();
  });

  it('shows welcome message after successful login', async () => {
    render(<App />);
    const usernameInput = screen.getByPlaceholderText('Enter username');
    const passwordInput = screen.getByPlaceholderText('Enter password');
    const loginBtn = screen.getByText('Login');

    await userEvent.type(usernameInput, 'eric');
    await userEvent.type(passwordInput, '1234');
    await userEvent.press(loginBtn);

    expect(screen.getByText('Welcome, eric!')).toBeVisible();
  });

  it('does not change welcome message if username or password is empty', async () => {
    render(<App />);
    const usernameInput = screen.getByPlaceholderText('Enter username');
    const passwordInput = screen.getByPlaceholderText('Enter password');
    const loginBtn = screen.getByText('Login');

    await userEvent.clear(usernameInput);
    await userEvent.type(passwordInput, '1234');
    await userEvent.press(loginBtn);

    expect(screen.getByText('Welcome, Guest!')).toBeVisible();

    await userEvent.type(usernameInput, 'eric');
    await userEvent.clear(passwordInput);
    await userEvent.press(loginBtn);

    expect(screen.getByText('Welcome, Guest!')).toBeVisible();
  });
});
