global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

import React from 'react';
import * as ReactDOM from 'react-dom';
import PlugConnect from '../src';

describe('PlugConnect', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PlugConnect
      dark
      onConnectCallback={() => {}}
      title="Connect to Plug"
      whitelist={[
        'canister-1',
        'canister-2'
      ]}
    />, div)
    ReactDOM.unmountComponentAtNode(div);
  });
});
