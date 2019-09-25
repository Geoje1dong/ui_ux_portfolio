import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {createGlobalStyle} from 'styled-components'

import Articles from './components/Articles'
import Header from './components/header'
import Footer from './components/footer'
import Resume from './resume'
import Post from './post'
import Test from './test'

function App(){
  return(
    <BrowserRouter basename={'/ui_ux_portfolio'}>
      <GlobalStyle />
      <Header />
        <Switch>
          <Route path="/" exact component={Articles} />
          <Route path="/resume/" component={Resume} />
          <Route path="/Post/:id" component={Post}/>
          <Route path="/test" component={Test}/>
        </Switch>
      <Footer />
    </BrowserRouter>
  )
}

const GlobalStyle = createGlobalStyle`
  body, html{
    background:#1f1f1f;
    width:100%;
    height:100%;
    margin:0;
    font-size:16px;
    background:rgb(31, 31, 31);
    color:rgba(255,255,255,1);
    overflow:hidden;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" ,'Noto Sans KR';
  }
  .scrollbar-track.scrollbar-track-x, .scrollbar-thumb.scrollbar-thumb-x{
    height:6px;
  }
  .scrollbar-track.scrollbar-track-y, .scrollbar-thumb.scrollbar-thumb-y{
    width:6px;
  }
  ul{
    list-style:none;
    padding:0;
    margin:0;
  }
  button, a{
    text-decoration:none;
    color:inherit;
    cursor:pointer;
    &:focus{
      outline:none;
    }
  }
  #root{
    background:#1f1f1f;
    width:100%;
    height:100%;
  }
  [data-scrollbar]{
    width:100%;
    height:100%;
    max-height:100%;
  } 
  .scroll-content > div{
    height:100%;
  }
  ::selection{
    // background: #512da8;
    // color:#fff;
    background:none;
    // color:rgb(255, 111, 97);
    color:#a590ff;
  }
`

ReactDOM.render(<App />, document.getElementById('root'));