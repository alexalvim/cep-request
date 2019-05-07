import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from './store';

import './index.css';
import Home from './containers/Home';

ReactDOM.render(<Provider store={Store}>
                  <Home />
                </Provider>, document.getElementById('root'));
