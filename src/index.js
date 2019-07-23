import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
                                              
import Articles from './components/Articles'
import Header from './components/header'
import Footer from './components/footer'
import About from './about'
import Post from './post'

import './components/App.css'

function App(){
  return(
    <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" exact component={Articles} />
          <Route path="/about/" component={About} />
          <Route path="/Post/:id" component={Post}/>
        </Switch>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));