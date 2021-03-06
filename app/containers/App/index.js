/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';/*eslint-disable */
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import GenderShow from 'components/GenderShow';
import Welcome from 'containers/Welcome/index';
import YouNeeds from 'containers/YouNeeds/Loadable';
import Home from 'containers/Home';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/home" component={Home} />
        <Route path="/youneeds" component={YouNeeds} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
