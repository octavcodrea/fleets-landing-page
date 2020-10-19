import React from 'react';
import Typed from 'typed.js';
import {inlineStyles} from './InlineStyles';

interface TypewriterProps{
    strings: string[]
}

interface TypewriterState{
    typed: any,
    width: number,
    height: number
}


class Typewriter extends React.Component<TypewriterProps, TypewriterState> {

  constructor(props:any) {
    super(props);
    this.state = { typed: '', width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

    typed: any;
    el: any;
    isMobile = false;

    checkAspectRatio = () =>{

      if (this.state.height/this.state.width > 1){
        return true;
        // this.isMobile = true;
      }else{
        return false;
        // this.isMobile = false;
      }
    }

    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    componentDidMount() {
        // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const  strings  = this.props.strings;
      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
          strings: strings,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
      window.addEventListener('resize', this.updateWindowDimensions);
      this.checkAspectRatio();
    }
  
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  
    render() {
      // style={this.checkAspectRatio() ? inlineStyles.headerTypewriterMobile : inlineStyles.headerTypewriterDesktop }
      return (
        <div className="type-wrap" >
            <span
            className="text-wrap"
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
            />
        </div>
      
      );
    }
  }
  
  export default Typewriter;

//   <div className="wrap">
//           <h1>Typed.js</h1>
//           <div className="type-wrap">
//             <span
//               style={{ whiteSpace: 'pre' }}
//               ref={(el) => { this.el = el; }}
//             />
//           </div>
//           <button onClick={() => this.typed.toggle()}>Toggle</button>
//           <button onClick={() => this.typed.start()}>Start</button>
//           <button onClick={() => this.typed.stop()}>Stop</button>
//           <button onClick={() => this.typed.reset()}>Reset</button>
//           <button onClick={() => this.typed.destroy()}>Destroy</button>
//         </div>