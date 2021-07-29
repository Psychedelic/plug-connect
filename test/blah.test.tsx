import React from 'react';
import * as ReactDOM from 'react-dom';
import PlugConnect from '../src/index';

describe('PlugConnect', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PlugConnect onConnectCallback={() => console.log('Runs a callback')} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
