import React from 'react'

export default class ArticleTitleBox extends React.Component {
  render(){
    const {article, articleMouseOver} = this.props;
    
    if(this.props.article){
    }

    return(
      <React.Fragment>
        {article.title}
        {articleMouseOver}
      </React.Fragment>
        
    )
  }
}