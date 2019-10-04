import React from 'react'
import styled from 'styled-components'

export default class Article extends React.Component{
  state = {
    title : '',
    mobile : false,
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
    const {article, viewIsOpen} = this.props;
    return(
      <React.Fragment>
        <Button  onMouseOver={this.articleMouseOver(article)}  onMouseOut={this._articleMouseOut} onClick={viewIsOpen} imgSize={article.imgSize}>
          <ProjectLabel>{article.label} the project</ProjectLabel>
          
          <img src={article.img} alt={article.title}/>
          {/* <img src={article.img} alt={article.title}/> */}
          <ArticleTitle>
            {mobile ? article.title : title }
          </ArticleTitle>
        </Button>
      </React.Fragment>
    )
  }
}

const Button = styled.button`
  padding:0;
  margin:0;
  background:none;
  border:0;
  text-align:left;
  position:relative;
  z-index:3;
  color:#fff;
  transition: transform 0.5s, filter 0.5s;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover{
    transform:translateY(-10px);
    > p{
      transform: translate3d(0, -100%, 0);
      opacity: 1;
      transition-delay: 0.4s;
    }
    &:after{
      transform: scaleX(1);
      transform-origin: left center;
      transition-delay: 0.2s;
    }
    >img{
      filter:brightness(70%);
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
    filter:brightness(80%);
    box-shadow:0px 20px 35px 0px rgba(0, 0, 0, 0.5);
    @media screen and (max-width : 425px) {
      ${props => props.imgSize ? `height:50vh; width:auto;` : `width:50vh; height:auto;`}
    }
  }
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
  color:rgba(255,255,255,0.8);
  z-index:3;
`

const ArticleTitle = styled.h2`
  color:#fff;
  margin: 0;
  margin-top: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  height: 29px;
  min-width: 10px;
  letter-spacing:1px;
  font-style:italic;
`