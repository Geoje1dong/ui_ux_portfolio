import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'

Scrollbar.initAll();
class choiceScrollPlugin extends ScrollbarPlugin {
  static pluginName = 'choiceScroll';
  
  static defaultOptions = {
    vertical: true,
  };

  transformDelta(delta, fromEvent) {
    if (!/wheel/.test(fromEvent.type)) {
      return delta;
    }

    const { x, y } = delta; 
    return this.options.vertical ? delta : {y: 0, x: Math.abs(x) > Math.abs(y) ? x : y,};
      // x: Math.s7ign(x || y) * Math.sqrt(x*x + y*y),

      // x: 0,
      // y: Math.abs(y) > Math.abs(x) ? y : x,
      // x: Math.sign(x || y) * Math.sqrt(x*x + y*y),
  }
}


Scrollbar.use(choiceScrollPlugin, OverscrollPlugin);
// Scrollbar.use(choiceScrollPlugin);

export default Scrollbar;