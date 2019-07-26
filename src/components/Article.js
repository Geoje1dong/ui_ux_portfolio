import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default class Article extends React.Component{
  state = {
    title : '',
    mobile : false
  }

  // 타이핑 이펙트
  timer
  articleMouseOver = article => (e) => {
    const typingText = article.title;
    this._typingEffect(typingText);
  }
  _typingEffect = (typingText) => {
    let i = 0;
    this.timer = setInterval(() => {
      if(i < typingText.length) {
        this.setState({ title: this.state.title + typingText.charAt(i) });
        i++;
      }else {
        clearInterval(this.timer);
      }
    }, this._randDelay(30, 70))
  }
  _randDelay = (min, max) => {
    return Math.floor(Math.random() * (max-min+1)+min);
  }
  _articleMouseOut = () => {
    this.setState({title:''});
    clearInterval(this.timer);
  }

  // 모바일 대응
  componentWillMount(){
    if(window.innerWidth < 768 ){
      this.setState({mobile: true});
    }
  }

  render(){
    const {mobile, title} = this.state;
    const {article} = this.props;
    
    return(
      <React.Fragment>
        <Link 
          className="article"
          onMouseOver={this.articleMouseOver(article)} 
          onMouseOut={this._articleMouseOut}
          to={{
            pathname : `post/${article.id}`,
            state : `${article.content}`,
          }}
          >
          <ProjectLabel>{article.label} the project</ProjectLabel>
          <img src={article.img} alt={article.title}/>
          <ArticleTitle>
            {mobile ? article.title : title }
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
  margin: 0;
  margin-top: 8px;
  font-weight: 100;
  font-size: 16px;
  line-height: 29px;
  height: 29px;
  min-width: 10px;
`