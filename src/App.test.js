import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  render(<App />);
screen.debug();
  expect(screen.getByText('Bienvenido a React')).toBeInTheDocument();
});
