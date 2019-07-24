import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import Single from './components/Single';
import {BrowserRouter, Route} from 'react-router-dom'
const Root = function() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Main} />
      <Route path='/search/:searchTerm' component={Main} />
      <Route path='/beer/:beerId/:beerSlug' component={Single} />
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('root'));

