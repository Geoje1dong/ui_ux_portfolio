import React,{ Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import HorizontalScroll from './horizontalScroll'
import workData from '../work';
import ArticleTitleBox from './articleTitle'

export default class Articles extends Component {
  state = {
    articlesFadeIn : null,
  }


  componentDidMount() {
    setTimeout(() => this.setState({ articlesFadeIn: "articlesFadeIn" }), 0);
  }

  render() {
    let articleTitlte = '';

    this.articleMouseOver = article => (e) => {
      const typingText = article.title;
      this._typingEffect(typingText);
    }
  
    this._typingEffect = (typingText) => {
      let i = 0;
      let timer = setInterval(() => {
        if(i < typingText.length) {
          articleTitlte = document.createTextNode(typingText.charAt(i));
          i++;
          
        }else {
          clearInterval(timer);
        }
      }, this._randDelay(30, 40))
    }
  
    this._randDelay = (min, max) => {
      return Math.floor(Math.random() * (max-min+1)+min);
    }
  
    this.articleMouseOut = article => (e) => {
      console.log(e);
      console.log(article);
    }

    return (
      <HorizontalScroll>
        <ArticleBox className={this.state.articlesFadeIn}>
          <li>
            <div>
              <p>안녕하세요.</p>
              <p>UI / UX 디자이너 <strong>김재현</strong> 입니다.</p>
              <p>저의 <strong>포트폴리오</strong>에 오신것을 환영합니다.</p>
            </div>
          </li>
          {workData.results.map((article) => (
            <Article key={article.id} delay={article.id}>
              <Link 
                onMouseOver={this.articleMouseOver(article)} 
                // onMouseOut={this.articleMouseOut(article)}
                to={{
                  pathname : `post/${article.id}`,
                  state : `${article.content}`,
                }}
               >
                <ProjectLabel>{article.label} the project</ProjectLabel>
                <img src={article.img} alt={article.title}/>
                <ArticleTitle>
                  <ArticleTitleBox title={articleTitlte}/>
                </ArticleTitle>
              </Link>
            </Article>
          ))}
        </ArticleBox>
      </HorizontalScroll>
    );
  }
}

const ArticleTitle = styled.h2`
  color:#fff;
`

const ProjectLabel = styled.p`
  position: absolute;
  top: 50%;
  left: -140px;
  margin: 0;
  font-size: .75rem;
  font-style: italic;
  line-height: 2;
  letter-spacing: 0.5px;
  transform: translate3d(0, -85%, 0);
  opacity: 0;
  pointer-events: none;
  transition: opacity, transform;
  transition-duration: 0.2s;
  transition-delay: 0s;
  transition-timing-function: 
`



const Article = styled.li`
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
`
