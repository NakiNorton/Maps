import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import fakeLocations from './testLocations'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App locations={fakeLocations}/>, div);
});
