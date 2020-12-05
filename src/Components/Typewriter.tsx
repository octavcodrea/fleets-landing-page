import React from "react";
import Typed from "typed.js";

interface TypewriterProps {
  strings: string[];
}

interface TypewriterState {
  typed: any;
  width: number;
  height: number;
}

class Typewriter extends React.Component<TypewriterProps, TypewriterState> {
  constructor(props: any) {
    super(props);
    this.state = { typed: "", width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  typed: any;
  el: any;
  isMobile = false;

  checkAspectRatio = () => {
    if (this.state.height / this.state.width > 1) {
      return true;
      // this.isMobile = true;
    } else {
      return false;
      // this.isMobile = false;
    }
  };

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const strings = this.props.strings;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
    window.addEventListener("resize", this.updateWindowDimensions);
    this.checkAspectRatio();
  }

  componentDidUpdate() {
    this.typed.destroy();
    const strings = this.props.strings;
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    return (
      <div className="type-wrap">
        <span
          className="text-wrap"
          style={{ whiteSpace: "pre" }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </div>
    );
  }
}

export default Typewriter;
