import React,{ Component } from 'react'
import Scrollbar from 'react-smooth-scrollbar'
import SmoothScrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'

class HorizontalScrollPlugin extends ScrollbarPlugin {
  static pluginName = 'horizontalScroll';

  transformDelta(delta, fromEvent) {
    if (!/wheel/.test(fromEvent.type)) {
      return delta;
    }
    
    // @see: https://github.com/idiotWu/smooth-scrollbar/issues/181
    
    const { x, y } = delta; 
    return {
      y: 0,
      x: Math.abs(x) > Math.abs(y) ? x : y,
      // x: Math.sign(x || y) * Math.sqrt(x*x + y*y),

      // x: 0,
      // y: Math.abs(y) > Math.abs(x) ? y : x,
      // x: Math.sign(x || y) * Math.sqrt(x*x + y*y),
    };
  }
}
SmoothScrollbar.initAll();
SmoothScrollbar.use(HorizontalScrollPlugin, OverscrollPlugin);

export default class HorizontalScroll extends Component {
  render() {
    return (
      <Scrollbar plugins={{
        // disableScroll: { direction: 'x' },
        overscroll: { effect: 'bounce', damping: 0.1 }
      }}>
        {this.props.children}
      </Scrollbar>
    );
  }
}