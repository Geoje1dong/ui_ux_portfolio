import React from 'react'
import VerticalityScroll from './components/verticalityScroll'

import styled from 'styled-components'

export default class About extends React.Component{
  render(){
    return(
      <div>
        <VerticalityScroll>
          <Box>
            <img src="https://raw.githubusercontent.com/idiotWu/react-smooth-scrollbar/master/test/your_diary.jpg" />
            <img src="https://raw.githubusercontent.com/idiotWu/react-smooth-scrollbar/master/test/your_diary.jpg" />
            <img src="https://raw.githubusercontent.com/idiotWu/react-smooth-scrollbar/master/test/your_diary.jpg" />
            <img src="https://raw.githubusercontent.com/idiotWu/react-smooth-scrollbar/master/test/your_diary.jpg" />
          </Box>
        </VerticalityScroll>
      </div>
    )
  }
}


const Box = styled.div`
  >img{
    width:4000px;
  }
`