import React from 'react'
import styled from 'styled-components'

export default class Footer extends React.Component{
  render(){
    return(
      <FooterBox>
        Copyright by Jaehyune Kim. 2019
      </FooterBox>
    )
  }
}

const FooterBox = styled.div`
  position:fixed;
  bottom:5.26593vw;
  left:5.26593vw;
  right:5.26593vw;
`