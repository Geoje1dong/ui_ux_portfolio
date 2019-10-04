import React,{ Component } from 'react'
import styled from 'styled-components'

import workData from '../work';
import Article from './Article'
import Scrollbar from './choiceScroll'
import ArticleView from './ArticleView'

export default class Articles extends Component {
  state = {
    viewIsOpen : false,
    viewContent: null,
    articlesFadeIn: null
  }

  componentDidMount() {

    this.setState({articlesFadeIn:'articlesFadeIn'})
    const scrollbar = Scrollbar.init(document.querySelector(".horizontalScroll"), {
      overscroll: { effect: 'bounce', damping: 0.1 }
    });
    scrollbar.updatePluginOptions('choiceScroll', { vertical: false });
  }

  _viewIsOpen = article => () => { 
    this.setState({
      viewIsOpen: true,
      viewContent: article
    })
  }

  _viewIsClose = () => {
    this.setState({
      viewIsOpen: false,
      viewContent: null
    })
  }

  render() {
    return (
      <React.Fragment>
      <HorizontalScroll className="horizontalScroll">
        <ArticleBox className={this.state.articlesFadeIn}>
          <li>
            <div>
              <p>안녕하세요 <strong>김재현</strong> 입니다.</p>
              <p>UI UX 디자이너 <strong>김재현</strong> 입니다.</p>
              <p>저의 <strong>포트폴리오</strong>에 오신것을 환영합니다.</p>
              {/* <p>실용적이고 유용하며 아름다운 제품을 만들기 위해 많은 작업물을 보며 공부하고 있습니다.</p> */}
              
            </div>
          </li>
          {workData.results.map((article) => (
            <StyledArticle key={article.id} delay={article.id}>
              <Article article={article} viewIsOpen={this._viewIsOpen(article)}/>
              {/* <link rel="prefetch" href={process.env.PUBLIC_URL + `${article.content[0].header_img}`} as="image" /> */}
            </StyledArticle>
          ))}
        </ArticleBox>
      </HorizontalScroll>
      {this.state.viewIsOpen && <ArticleView view={this.state.viewIsOpen} viewContent={this.state.viewContent} viewIsClose={this._viewIsClose}/>}
      </React.Fragment>
    );
  }
}

const HorizontalScroll = styled.div`
  > .scroll-content{
    height:100%;
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
`

const ArticleBox = styled.ul`
  padding:0;
  margin:0;
  list-style:none;
  display:flex;
  top: 7.898895vw;
  bottom: 4.26593vw;
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
    padding:1vw 5.26593vw;
    display: flex;
    &:first-child{
      align-items: flex-start;
      transition:all 0.9s cubic-bezier(0.455,0.03,0.515,0.955);
      >div{
        width:340px;
        padding-top:5.26593vw;
        > p{
          font-size: 1.2125rem;
          line-height: 1.7em;
          margin: 0 0.2em;
          font-weight: 200;
        }
      }
    }
    &:nth-child(2){
      > button >img{
        height:500px;
        width:auto;
        @media screen and (max-width : 425px) {
          height:50vh;
        }
      }
    }
    &:nth-child(3){
      > button >img{
        height:560px;
        width:auto;
        @media screen and (max-width : 425px) {
          height:50vh;
        }
      }
    }
    &:nth-child(5){
      > button >img{
        @media screen and (max-width : 425px) {
          max-width:260px;
        }
      }
    }
  }
  @media screen and (max-width : 1024px) {
    top: 15.79779vw;
    bottom: 10.79779vw;
  }
  @media screen and (max-width : 425px) {
    top: 23.79779vw;
    bottom: 10.79779vw;
    >li{
      padding:0 15.26593vw
      &:first-child{
        padding-left:5.26593vw
      }
    }
    
  }
`