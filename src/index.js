import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Auth0Provider from './Auth0Provider';
import store from './store';
import { Provider } from 'react-redux'; 

render(
  <Auth0Provider
    domain="steezli.auth0.com"
    client_id="nZgVOv7Kqq52vqJxKSVMKmoJGSe9y0HM"
    redirect_uri="http://localhost:7890"
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
);
