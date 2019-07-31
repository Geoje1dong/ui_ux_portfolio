import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component{
  render(){
    return(
      <StyledHeader>
        <div>
          <NavLink to="/">KimJaeHyun :)</NavLink>
        </div>
        <nav>
        <NavLink to="/">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        </nav>
      </StyledHeader>
    )
  }
}

const StyledHeader = styled.header`
  position:fixed;
  z-index:2;
  top:5.26593vw;
  left:5.26593vw;
  right:5.26593vw;
  letter-spacing: -0.4px;
  >div{
    width:65%;
    display:inline-block;
    >a{
      font-size:2rem;
      font-weight:700;
      transition: all 0.5s ease;
      &:hover{
        color:red;
      }
    }
  }
  >nav{
    width:35%;
    display:inline-block;
    text-align:right;
    >a{
      position:relative;
      margin-left:30px;
      font-weight:100;
      font-size:0.875rem;
      &:hover{
        &:after{
          transform: scaleX(1);
          transform-origin: left center;
        }
      }
      &:after{
        content: '';
        position: absolute;
        left: 0;
        height:1px;
        bottom: -3px;
        width: 100%;
        transform: scaleX(0);
        transition: all 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        background:rgba(255,255,255,0.7);
        transform-origin:right center;
      }
      &:first-child{
        margin-left:0;
      }
    }
  }
`