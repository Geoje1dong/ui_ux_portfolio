import React,{ Component } from 'react'
import Scrollbar from 'react-smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import SmoothScrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';

SmoothScrollbar.use(OverscrollPlugin);

export default class VerticalityScroll extends Component {

  componentDidMount() {
    // this.scrollbar = SmoothScrollbar.init(this.$container, this.props);
    this.scrollbar = this.$container.scrollbar;
  }

  render() {
    return (
      <Scrollbar 
        style={{height: '100vh'}}
        ref={c => this.$container = c}
        damping={0.1}
        plugins={{
            overscroll: { damping: 0.1 }
        }}
      >
        {this.props.children}
      </Scrollbar>
    );
  }
}
