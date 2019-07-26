import React,{ Component } from 'react'
import styled from 'styled-components'

import workData from '../work';
import Article from './Article'

import Scrollbar from './choiceScroll'

export default class Articles extends Component {
  state = {
    articlesFadeIn : null,
    MouseOver : false,
    
  }

  componentDidMount() {
    setTimeout(() => this.setState({ articlesFadeIn: "articlesFadeIn" }), 0);
    const scrollbar = Scrollbar.init(document.querySelector(".horizontalScroll"), {
      // alwaysShowTracks: true,
      overscroll: { effect: 'bounce', damping: 0.1 }
    });
    scrollbar.updatePluginOptions('choiceScroll', { vertical: false });
  }

  render() {
    this.articleMouseOver = (e) => {
      this.setState({ MouseOver : !this.state.MouseOver})
    }
    this.articleMouseOut = article => (e) => {
      this.setState({ MouseOver : !this.state.MouseOver})
    }
    return (
      <HorizontalScroll data-foo='123' className="horizontalScroll">
        <ArticleBox className={this.state.articlesFadeIn}>
          <li>
            <div>
              <p>안녕하세요.</p>
              <p>UI / UX 디자이너 <strong>김재현</strong> 입니다.</p>
              <p>저의 <strong>포트폴리오</strong>에 오신것을 환영합니다.</p>
            </div>
          </li>
          {workData.results.map((article) => (
            <StyledArticle key={article.id} delay={article.id}>
              <Article article={article}/>
            </StyledArticle>
          ))}
        </ArticleBox>
      </HorizontalScroll>
    );
  }
}

const HorizontalScroll = styled.div`
  > .scroll-content{
    height:100%;
    // height:6000px;
  }
`

const StyledArticle = styled.li`
  transition:all 1.${props => props.delay}s cubic-bezier(0.455,0.03,0.515,0.955);
  &:nth-child(1n){
    align-items: center;
  }
  &:nth-child(2n){
    align-items: flex-start;
  }
  &:nth-child(3n){
    align-items: flex-end;
  }
  > a{
    position:relative;
    z-index:3;
    &:hover{
      > p{
        transform: translate3d(0, -100%, 0);
        opacity: 1;
        transition-delay: 0.4s;
        // transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
      &:after{
        transform: scaleX(1);
        transform-origin: left center;
        transition-delay: 0.2s;
      }
    }
    &:after{
      content: '';
      position: absolute;
      top: 50%;
      margin-top:2px;
      left: -130px;
      height: 1px;
      width: 180px;
      background-color: rgba(255,255,255,0.8);
      transform: scaleX(0);
      transform-origin: right center;
      transition: transform;
      transition-duration: 0.5s;
      transition-delay: 0s;
      transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    > img{
      max-width:600px;
    }
  }
`

const ArticleBox = styled.ul`
  padding:0;
  margin:0;
  list-style:none;
  display:flex;
  top: 8.898895vw;
  bottom: 5.26593vw;
  position:absolute;
  overflow:hidden;
  &.articlesFadeIn{
    >li{
      opacity:1;
      transform: translateX(0px) !important;
    }
  }
  >li{
    opacity: 0;
    transform: translateX(700px);
    padding:0 5.26593vw
    display: flex;
    &:first-child{
      align-items: flex-start;
      transition:all 0.9s cubic-bezier(0.455,0.03,0.515,0.955);
      >div{
        width:340px;
        padding-top:5.26593vw;
        > p{
          font-size: 1.3125rem;
          line-height: 1.4em;
          margin: 0 0.2em;
          font-weight: 200;
        }
      }
    }
  }
  @media screen and (max-width : 1024px) {
    top: 15.79779vw;
    bottom: 10.79779vw;
  }
  @media screen and (max-width : 425px) {
    top: 30.79779vw;
    bottom: 10.79779vw;
    >li{
      padding:0 15.26593vw
      &:first-child{
        padding-left:5.26593vw
      }
    }
    
  }
`
