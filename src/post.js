import React from 'react'
import styled from 'styled-components'

export default class Post extends React.Component{
  render(){
    // console.log(this.props.match);
    // console.log(this.props.location);
    // console.log(this.props.location.state);
    return(
      <View>
        <h3>{this.props.match.params.id}</h3>
        <p>{this.props.location.state.title}</p>
        <p>{this.props.location.state.userName}</p>
      </View>
    )
  }
}

const View = styled.div`

`