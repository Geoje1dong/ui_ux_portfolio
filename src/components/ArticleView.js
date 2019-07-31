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
      console.log(yPosition);
      console.log(deviceHeight);
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
    console.log(viewContent);
    console.log(viewContent.content[0].header_h1);
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
            <IntroText>
              <p>
                {viewContent.content[0].description. split('\n').map(line => {
                  return (<span>{line}<br /></span>)
                })}
              </p>
              <ol>
                {viewContent.content[0].clist.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ol>
            </IntroText>
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

const IntroText = styled.div`
  font-size:14px;
  line-height:1.5em;
  max-width:1024px;
  margin:0 auto;
  padding:5.26593vw;
  display:flex;
  > p{
    padding:0;
    margin:0 auto 0 0;
  }
  > ol{
    list-style-type:disc;
    padding:0;
    margin:0;
    padding-left:17px;
  }
  @media screen and (max-width : 425px) {
    display:block!important;
    > p{
      display:block;
      margin:0 0 20px; 0;
    }
    > ol{
      display:block;
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
  &.animationIn{
    transform:translateY(0vh);
  }
  &.animationOut{
  }
`