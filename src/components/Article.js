import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import ArticleTitleBox from './articleTitle'

export default class Article extends React.Component{
  state = {
    title : ''
  }
  render(){
    const {article} = this.props;

    this.articleMouseOver = () => {
      const typingText = article.title;
      this._typingEffect(typingText);
    }

    this._typingEffect = (typingText) => {
      let i = 0;
      let timer = setInterval(() => {
        if(i < typingText.length) {
          let txt = document.createTextNode(typingText.charAt(i));
          i++;
          this.setState({
            title: {
              ...this.state.title,
              txt
            }
          })
          console.log(this.state.title);
        }else {
          clearInterval(timer);
        }
      }, this._randDelay(30, 40))
    }
    this._randDelay = (min, max) => {
      return Math.floor(Math.random() * (max-min+1)+min);
    }

    return(
      <React.Fragment>
        <Link 
          onMouseOver={this.articleMouseOver} 
          // onMouseOut={this.articleMouseOut()}
          to={{
            pathname : `post/${article.id}`,
            state : `${article.content}`,
          }}
          >
          <ProjectLabel>{article.label} the project</ProjectLabel>
          <img src={article.img} alt={article.title}/>
          <ArticleTitle>
            {this.state.title}
            {/* <ArticleTitleBox article={article}/> */}
            {/* <ArticleTitleBox article={article} mouseOver={this.state.MouseOver}/> */}
          </ArticleTitle>
        </Link>
      </React.Fragment>
    )
  }
}

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

const ArticleTitle = styled.h2`
  color:#fff;
`