import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Articles from './components/Articles'
import Header from './components/header'
import Footer from './components/footer'
import About from './about'
import './components/App.css'
import * as serviceWorker from './serviceWorker';

function App(){
  return(
    <BrowserRouter basename={'/portfolio'}>
      <Header />
        <Switch>
          <Route path="/" exact component={Articles} />
          <Route path="/about/" component={About} />
        </Switch>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();