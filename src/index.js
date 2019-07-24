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

let xPosition;
let yPosition;
function _cursorMove(e){
  // xPosition = e.clientX;
  // yPosition = e.clientY;
  // console.log(e.target.tagName);
  // let target = document.querySelector('.cursor');
  // target.style.transform = "matrix(1, 0, 0, 1, "+xPosition+", "+yPosition+") scale(.2)";
  // if(e.target.tagName === 'A'){
  //   target.style.transform = "matrix(1, 0, 0, 1, "+xPosition+", "+yPosition+") scale(1)";
  // }
}

function App(){
  return(
    <BrowserRouter>
      <Container onMouseMove={_cursorMove}>
        <Header />
          <Switch>
            <Route path="/" exact component={Articles} />
            <Route path="/about/" component={About} />
            <Route path="/Post/:id" component={Post}/>
          </Switch>
        <Footer />
        <Cursor className="cursor" style={{top:xPosition, left:yPosition}}/>
      </Container>
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