import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components'

import Articles from './components/Articles'
import Header from './components/header'
import Footer from './components/footer'
import About from './about'
import Post from './post'
import './components/App.css'
import * as serviceWorker from './serviceWorker';

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

const Container = styled.div`
  height:100%;
`

const Cursor = styled.div`
  position: absolute;
  top:-48px;
  left:-48px;
  width: 96px;
  height: 96px;
  z-index: 1;
  position:absolute;
  transition:all .1s ease-out;
  background:rgba(0, 0, 0, 0.8);
  border-radius:50%;
`

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();