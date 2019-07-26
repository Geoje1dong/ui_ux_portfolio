import React from 'react'
// import VerticalityScroll from './components/verticalityScroll'
import styled from 'styled-components'
import Scrollbar from "./components/choiceScroll";

Scrollbar.initAll();

export default class About extends React.Component{

  componentDidMount() {
    this.scrollbar = Scrollbar.init(document.querySelector(".chat"));
  }

  render(){
    return(
      // <VerticalityScroll>
        <Box className='chat'>
          <img src="https://raw.githubusercontent.com/idiotWu/react-smooth-scrollbar/master/test/your_diary.jpg" />
          <img src="https://raw.githubusercontent.com/idiotWu/react-smooth-scrollbar/master/test/your_diary.jpg" />
          <img src="https://raw.githubusercontent.com/idiotWu/react-smooth-scrollbar/master/test/your_diary.jpg" />
          <img src="https://raw.githubusercontent.com/idiotWu/react-smooth-scrollbar/master/test/your_diary.jpg" />
        </Box>
      // </VerticalityScroll>
    )
  }
}


const Box = styled.div`
  height:300px;
  img{
    width:4000px;
  }
`