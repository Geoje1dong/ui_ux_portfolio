import React from 'react'
import styled from 'styled-components'
import Scrollbar from './choiceScroll'

export default class ArticleView extends React.Component{

  state = {
    animationView : null,
    dummyBox: false
  }

  componentDidMount() {
    setTimeout(() => this.setState({ animationView: "animationIn" }), 0);
    const scrollbar = Scrollbar.init(document.querySelector(".view"), {
      overscroll: false
    });
    scrollbar.addListener((status) => {
      const yPosition = status.offset.y;
      const deviceHeight = window.innerHeight;
      if(yPosition > deviceHeight){
        this.setState({dummyBox:true})
      }else{
        this.setState({dummyBox:false})
      }
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ animationView: "animationOut" });
  }

  transitionEnd = () => {
    if (this.state.animationView === "animationOut") {
      this.props.viewIsClose();      
    }
  }

  render(){
    const {viewContent, view} = this.props;
    return(
      <View effect={view} onTransitionEnd={this.transitionEnd} className={this.state.animationView}>
        <ViewHeader className="viewHeader" backgroundImage={viewContent.content[0].header_img}>
          <div>
            <h2>{viewContent.content[0].header_h1}</h2>
            <span>{viewContent.label} the project</span>
            <p>{viewContent.content[0].header_h2}</p>
          </div>
        </ViewHeader>
        <ViewCloseButton onClick={this.handleClick}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.4 59.4"><path d="M29.7 45.3L0 15.6l1.4-1.5 28.3 28.3L58 14.1l1.4 1.5z"/></svg></ViewCloseButton>
        <ViewContentBox className="view">
          <BlankBox />
          <ViewContent>
            <IntroBox>
              {/* <IntroText>
                <a target="_blank" href={viewContent.content[0].url}>{viewContent.content[0].url}</a>
                <Description>
                  <li>
                    <div>
                      <p><strong>{viewContent.content[0].description. split('\n').map(line => {
                        return (<span>{line}<br /></span>)
                      })}</strong></p>
                    </div>
                  </li>
                  <li>
                    <p>기여한 점</p>
                    <div>
                    contribution
                      <p>한국산업인력공단에서 운영하는 월드잡플러스 사이트 UI/UX Designer, WEB Publisher</p>
                    </div>
                  </li>
                  <li>
                    <p>사용한 Skill 또는 지식</p>
                    <div>
                      <p>
                        <ol>
                          {viewContent.content[0].clist.map((list, index) => (
                            <li key={index}>{list}</li>
                          ))}
                        </ol>
                      </p>
                    </div>
                  </li>
                </Description>
                
              </IntroText> */}
              <IntroText>
                <div>
                  <ol>
                    {viewContent.content[0].clist.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ol>
                  <p>
                    {viewContent.content[0].description.split('\n').map((line, index) => {
                      return (<span key={index}>{line}<br /></span>)
                    })}
                  </p>
                </div>
                <a target="_blank" href={viewContent.content[0].url} rel="noopener noreferrer">{viewContent.content[0].url}</a>
              </IntroText>
            </IntroBox>
              {viewContent.content[0].section_imges.map((img, index) => (
                <section key={index}>
                  <img src={img.imgUrl} alt={img.Alt}/>
                </section>
              ))}
          </ViewContent>
        </ViewContentBox>
        {this.state.dummyBox && <ScrollDummyBox />}
      </View>
    )
  }
}

const Description = styled.ul`
  transition:all 0.4s cubic-bezier(0.455,0.03,0.515,0.955);
  transition-delay: ${props => props.delay}s;
  max-width:1000px;
  > li{
    padding-bottom:3.75rem;
    margin-bottom: 3.75rem;
    border-bottom:1px solid rgba(0, 0, 0, 0.1);
    >p {
      font-size:1.25rem;
      font-weight:700;
      margin-bottom:0;
    }
    > div{
      font-weight:200;
      > p{
        font-weight:400;
        margin-bottom:0;
        &:last-child{
          font-size:12px;
        }
        &:before{
          content:'';
          display:block;
          clear: both;
        }
        > ol{
          margin-top:12px;
          list-style-type:disc;
          padding:0;
          margin:0;
          padding-left:17px;
          display:block;
        }
      }
    }
  }
  > li:after{
    content:'';
    display:block;
    clear: both
  }
`

const ScrollDummyBox = styled.div`
  background:#fff;
  width:100%;
  height:200px;
  position:absolute;
  left:0;
  bottom:0;
  z-index:0;
`

const ViewContent = styled.div`
  background:#fff;
  height:auto !important;
  >section{
    padding:0 5.26593vw 5.26593vw 5.26593vw;
    display:flex;
    justify-content:center;
    img{
      max-width:2000px;
      width:100%;
    }
  }
`

const IntroBox = styled.div`
  // height:100vh;
  background:#f5f5f5;
`

const IntroText = styled.div`
  font-size:14px;
  line-height:1.5em;
  max-width:1024px;
  margin:0 auto;
  padding:10.53186vw 5.26593vw;
  position:relative;
  >div {
    overflow:hidden;
    > p{
      padding:0;
      margin:0px 0 20px 0;
      width:73%;
      float:left;
      display:block;
      &:before{
        content:'';
        display:block;
        clear: both;
      }
    }
    > ol{
      list-style-type:disc;
      padding:0;
      margin:0;
      padding-left:17px;
      display:block;
      width:22%;
      float:right;
    }
  }
  >a {
    margin-top:40px;
    display:inline-block;
    position:relative;
    color:#512da8;
    text-decoration:underline;
  }
  @media screen and (max-width : 425px) {
    display:block!important;
    >div{
      > p{
        display:block;
        margin:20px 0 20px 0;
        width:100%;
        float:none;
      }
      > ol{
        display:block;
        width:100%;
        float:none;
      }
    }
    
  }
`

const BlankBox = styled.div`
  width:100vw;
  height:100vh;
`

const ViewHeader = styled.div`
  width:100vw;
  height:100vh;
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  background-image:url(${props => props.backgroundImage});
  background-size:cover;
  background-position:center;
  display:flex;
  align-items: center;
  justify-content: center;
  >div{
    color:#fff;
    h2{
      font-size:42px;
      margin-bottom:30px;
      font-style:italic;
    }
    p{
      font-size:14px;
      font-weight:100;
      font-color:rgba(255,255,255, 0.7);
      margin:0;
      padding-top:6px;
    }
    span{
      margin:0;
      font-size:14px;
      font-weight:100;
    }
  }
`

const ViewContentBox = styled.div`
  width:100vw;
  position:relative;
  z-index:1;
  .scroll-content{
    height:100%;
  }
`

const ViewCloseButton = styled.button`
  z-index:3;
  position:fixed; 
  padding: 21px 22px; 
  background: #fff; 
  border: 1px solid rgba(0,0,0,0.5); 
  cursor:pointer; 
  box-shadow: 3px 7px 9px -4px rgba(0,0,0,0.1);
  right:5.26593vw;
  top:5.26593vw;
  svg{
    width:14px; height:auto;
  }
`

const View = styled.div`
  z-index:2;
  position:fixed;
  width:100vw;
  height:100vh;
  top:0;
  left:0;
  color:#000;
  transform:translateY(100vh);
  transition:all 0.5s cubic-bezier(0.455,0.03,0.515,0.955);
  background:#fff;
  &.animationIn{
    transform:translateY(0vh);
  }
  &.animationOut{
  }
`