import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';

import store, { history } from './store';

import Home from './screens/Home';
import Details from './screens/Details';
import Create from './screens/Create';

// import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail/:id" component={Details} />
            <Route exact path="/create" component={Create} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
