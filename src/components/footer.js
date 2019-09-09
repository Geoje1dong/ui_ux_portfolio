import React from 'react'
import styled from 'styled-components'

export default class Footer extends React.Component{
  render(){
    return(
      <FooterBox>
        Copyright by Jaehyun Kim. 2019
      </FooterBox>
    )
  }
}

const FooterBox = styled.div`
  position:fixed;
  bottom:2.632965vw;
  left:5.26593vw;
  right:5.26593vw;
  font-size:14px;
`