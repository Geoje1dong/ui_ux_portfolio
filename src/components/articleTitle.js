import React from 'react'

export default class ArticleTitleBox extends React.Component {
  state = {
    articleTitle : ''
  }


  render(){
    const {title} = this.props;
    return(
      <React.Fragment>
        {title}
      </React.Fragment>
        
    )
  }
}