import React from 'react'
import styled from 'styled-components'
import Scrollbar from './choiceScroll'

export default class ArticleView extends React.Component{

  state = {
    animationView : null,
    dummyBox: false,
    animationEvent: null,
    closeCheck:false,
    openChek:true,
    mobile : false,
  }

  componentDidMount() {
    // setTimeout(() => this.setState({ animationView: "animationIn" }), 0);
    setTimeout(() => this.setState({ animationView:"animationIn"}), 0);
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

    if(window.innerWidth < 768 ){
      this.setState({mobile: true});
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ animationView: "animationOut", animationEvent: 'animationClose' });
    // this.setState({closeCheck:true, openChek:false})
    // if (this.state.closeCheck){
    //   this.setState({animationEvent: 'active'})
    // }
  }

  transitionEnd = () => {
    if (this.state.animationView === 'animationIn'){
      this.setState({animationEvent: 'active'})
    }
    if (this.state.animationView === "animationOut") {
      this.props.viewIsClose();
    }
  }

  _getAnimationBox(){
    if(this.state.openChek){
      return <BlackBox className={this.state.animationEvent}/>
    }else if(!this.state.openChek){
      return <CloseBox className={this.state.animationEvent}/>
    }
  }

  render(){
    const {viewContent, view} = this.props;
    const animationBox = this._getAnimationBox();
    return(
      <View effect={view} onTransitionEnd={this.transitionEnd} className={this.state.animationView}>
        <ViewHeader className="viewHeader">
          <div>
            <ViewHeaderText className={this.state.animationEvent} delay='1000' fontSize='42px' fontWeight='700' fontStyle='italic' margin='0 0 30px 0'><span>{viewContent.content[0].header_h1}</span></ViewHeaderText>
            <ViewHeaderText className={this.state.animationEvent} delay='5'><span>{viewContent.label} the project</span></ViewHeaderText>
            <ViewHeaderText className={this.state.animationEvent} delay='5' margin='6px 0 0 0'><span>{viewContent.content[0].header_h2}</span></ViewHeaderText>
            {/* <h2>{viewContent.content[0].header_h1}</h2>
            <span>{viewContent.label} the project</span>
            <p>{viewContent.content[0].header_h2}</p> */}
          </div>
          <div></div>


          {this.state.mobile ? 
            <ViewHeaderImg backgroundImage={process.env.PUBLIC_URL + `${viewContent.content[0].mobile_images[0].mianImg}`}/>
            :
            <ViewHeaderImg backgroundImage={process.env.PUBLIC_URL + `${viewContent.content[0].header_img}`}/>
          }

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
            
              

              {this.state.mobile ? 
                viewContent.content[0].mobile_images.map((img, index) => (
                  <section key={index}>
                    <img src={process.env.PUBLIC_URL + `${img.contentImg}`} alt={img.Alt}/>
                  </section>
                ))
                :
                viewContent.content[0].section_imges.map((img, index) => (
                  <section key={index}>
                    <img src={process.env.PUBLIC_URL + `${img.imgUrl}`} alt={img.Alt}/>
                    {/* <img src={img.imgUrl} alt={img.Alt}/> */}
                  </section>
                ))
              }
          </ViewContent>
        </ViewContentBox>
        {this.state.dummyBox && <ScrollDummyBox />}
        {/* {this.state.openChek && } */}
        {animationBox}
      </View>
    )
  }
}

const BlackBox = styled.div`
  background:#f5f5f5;
  width:100vw;
  height:100vh;
  position:fixed;
  top:0vh;
  left:0;
  z-index:888;
  &.active{
    // transition-delay: 0.5s;
    transition:all 0.3s cubic-bezier(0.455,0.03,0.515,0.955);
    transform:translateY(-100vh);
  } 
  &.ready{
    z-index:-1;
  }
`

const CloseBox = styled.div`
  background:red;
  // background:#f5f5f5;
  width:100vw;
  height:100vh;
  position:fixed;
  top:100vh;
  left:0;
  z-index:888;
  &.active{
    transition:all 0.3s cubic-bezier(0.455,0.03,0.515,0.955);
    transform:translateY(-100vh);
  } 
  &.ready{
    z-index:-1;
  }
`

// const Description = styled.ul`
//   transition:all 0.4s cubic-bezier(0.455,0.03,0.515,0.955);
//   transition-delay: ${props => props.delay}s;
//   max-width:1000px;
//   > li{
//     padding-bottom:3.75rem;
//     margin-bottom: 3.75rem;
//     border-bottom:1px solid rgba(0, 0, 0, 0.1);
//     >p {
//       font-size:1.25rem;
//       font-weight:700;
//       margin-bottom:0;
//     }
//     > div{
//       font-weight:200;
//       > p{
//         font-weight:400;
//         margin-bottom:0;
//         &:last-child{
//           font-size:12px;
//         }
//         &:before{
//           content:'';
//           display:block;
//           clear: both;
//         }
//         > ol{
//           margin-top:12px;
//           list-style-type:disc;
//           padding:0;
//           margin:0;
//           padding-left:17px;
//           display:block;
//         }
//       }
//     }
//   }
//   > li:after{
//     content:'';
//     display:block;
//     clear: both
//   }
// `

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
    display:block;
    justify-content:center;
    @media screen and (max-width : 425px) {
      padding:0 0 5.26593vw 0;
    }
    img{
      max-width:2000px;
      width:100vw;
      height:auto !important;
    }
  }
`

const IntroBox = styled.div`
  // height:100vh;
  background:#f5f5f5;
`

const IntroText = styled.div`
  font-size:16px;
  line-height:1.5em;
  max-width:1024px;
  margin:0 auto;
  padding:10.53186vw 5.26593vw;
  position:relative;
  >div {
    overflow:hidden;
    > p{
      padding:0;
      margin:60px 0 20px 0;
      // margin:0px 0 20px 0;
      // width:73%;
      // float:left;
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
      // width:22%;
      // float:right;
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

const ViewHeaderImg = styled.div`
  background-image:url(${props => props.backgroundImage});
  position:absolute;
  top:50%;
  left:50%;
  bottom:0;
  right:0;
  width:120vw;
  height:120vh;
  background-color:rgba(0,0,0,0.25);
  background-blend-mode:multiply;
  filter: blur(10px);
  background-size:cover;
  background-position:center;  
  transform:translate(-50%, -50%);
`

const ViewHeader = styled.div`
  overflow:hidden;
  width:100vw;
  height:100vh;
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  display:flex;
  align-items: center;
  justify-content: center;
  >div:first-child{
    z-index:1;
  }
`

const ViewHeaderText = styled.p`
  font-size:${props => props.fontSize ? props.fontSize : '14px'};
  font-weight:${props => props.fontWeight ? props.fontWeight : '100'};
  color:${props => props.fontColor ? props.fontColor : '#fff'};
  margin:${props => props.margin ? props.margin : '0'};
  font-style:${props => props.fontStyle ? props.fontStyle : 'inherit'};
  padding:0;
  overflow:hidden;
  position:relative;
  > span{
    display:inline-block;
    transition-delay: ${props => props.delay}s;  
    transform:translate3d(0, 100%, 0);    
    transition:all 0.6s cubic-bezier(0.455,0.03,0.515,0.955);
  }
  &.active{
    >span{
      transform:translate3d(0, 0, 0);
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
  background:#fff;
  &.animationIn{
    transform:translateY(0vh);
    transition:transform 0.4s cubic-bezier(0.455,0.03,0.515,0.955);
  }
  &.animationReady{
    transform:translateY(0vh);
  }
  &.animationOut{
    transform:translateY(-100vh);
    transition:transform 0.4s cubic-bezier(0.455,0.03,0.515,0.955);
  }
`