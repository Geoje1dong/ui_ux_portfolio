import Scrollbar,{ ScrollbarPlugin } from "smooth-scrollbar";

Scrollbar.initAll();

class SomePlugin extends ScrollbarPlugin {
  static pluginName = "someDelta";

  transformDelta(delta, fromEvent) {
    return {
      x: delta.x,
      y: delta.y
    };
  }
  
  // static pluginName = 'someDelta';

  // transformDelta(delta, fromEvent) {
  //   if (!/wheel/.test(fromEvent.type)) {
  //     return delta;
  //   }
    
  //   console.log(delta);
  //   const { x, y } = delta; 
  //   return {
  //     x: 0,
  //     y: Math.abs(y) > Math.abs(x) ? y : x,
  //     // x: Math.sign(x || y) * Math.sqrt(x*x + y*y),
  //   };
  // }
}

Scrollbar.use(SomePlugin);
export default Scrollbar;