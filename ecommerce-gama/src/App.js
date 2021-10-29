import React from 'react';
import { Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import LayoutDefault from './layouts/LayoutDefault';
import Home from './views/Home';

const App = () => {

  return (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
        </Switch>
  );
}

export default App;