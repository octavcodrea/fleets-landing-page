import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { CarouselProvider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { accentColor } from "./InlineStyles";
import Typewriter from "./Typewriter";
import { FaPlay } from "react-icons/fa";

import langEnglish from "../Languages/en-US.json";
import langRomanian from "../Languages/ro-RO.json";

import slider1 from "../Images/slidergraphic2.svg";

import slider1mobile from "../Images/slidergraphic2.svg";

import useWindowDimensions from "../Hooks/useWindowDimensions";
import { FormattedMessage } from "react-intl";

let textTypewriter1a = "Typewriter1A";
let textTypewriter1b = "Typewriter1B";
let textTypewriter2a = "Typewriter2A";
let textTypewriter2b = "Typewriter2B";

const SliderComponent = (props: any) => {
  const { height, width } = useWindowDimensions();

  //The Typewriter component requires a string and the react-intl returns an object, so we get the text from the language .json manually instead
  //There's a componentDidUpdate method in the Typewriter component that will rerender the component when the strings given to it change
  switch (props.local) {
    case "English":
    case "en":
    case "en-US":
    case "EN": {
      textTypewriter1a = langEnglish["slider-typewriter1a"];
      textTypewriter1b = langEnglish["slider-typewriter1b"];
      textTypewriter2a = langEnglish["slider-typewriter2a"];
      textTypewriter2b = langEnglish["slider-typewriter2b"];
      break;
    }
    case "Romanian":
    case "Română":
    case "ro":
    case "ro-RO":
    case "RO": {
      textTypewriter1a = langRomanian["slider-typewriter1a"];
      textTypewriter1b = langRomanian["slider-typewriter1b"];
      textTypewriter2a = langRomanian["slider-typewriter2a"];
      textTypewriter2b = langRomanian["slider-typewriter2b"];
      break;
    }

    default: {
      break;
    }
  }

  useEffect(() => {
    switch (props.local) {
      case "English":
      case "en":
      case "en-US":
      case "EN": {
        textTypewriter1a = langEnglish["slider-typewriter1a"];
        textTypewriter1b = langEnglish["slider-typewriter1b"];
        textTypewriter2a = langEnglish["slider-typewriter2a"];
        textTypewriter2b = langEnglish["slider-typewriter2b"];
        break;
      }
      case "Romanian":
      case "Română":
      case "ro":
      case "ro-RO":
      case "RO": {
        textTypewriter1a = langRomanian["slider-typewriter1a"];
        textTypewriter1b = langRomanian["slider-typewriter1b"];
        textTypewriter2a = langRomanian["slider-typewriter2a"];
        textTypewriter2b = langRomanian["slider-typewriter2b"];
        break;
      }

      default: {
        break;
      }
    }
  }, [props.local]);

  let textTypewriter3 = (
    <FormattedMessage
      id="slider-typewriter3"
      defaultMessage="Text for Typewriter 3"
    />
  );
  let textMoreAboutUs = (
    <FormattedMessage id="slider-moreaboutus" defaultMessage="More about us" />
  );
  let textWatchVideo = (
    <FormattedMessage id="slider-watchvideo" defaultMessage="Watch video" />
  );
  let textHeader1 = (
    <FormattedMessage
      id="slider-header1"
      defaultMessage="Text for Slider Header 1"
    />
  );
  let textHeader2 = (
    <FormattedMessage
      id="slider-header2"
      defaultMessage="Text for Slider Header 2"
    />
  );

  return (
    <div className="container-fluid px-0 mx-0 position-relative">
      <Row className="w-100 mx-0">
        <CarouselProvider
          orientation="vertical"
          naturalSlideWidth={100}
          naturalSlideHeight={(height / width) * 80}
          totalSlides={3}
          interval={5000}
          isPlaying={true}
          className="w-100 mx-0 px-0"
        >
          <Row className="d-flex flex-nowrap w-100 mx-0">
            <div className="w-100 p-0 m-0 slider">
              <div className="slideContainer">
                <div className="slide">
                  <div className="d-none d-lg-block slide">
                    <div className="sliderImg">
                      <img src={slider1} alt="" />
                    </div>
                  </div>

                  <div className="d-block d-lg-none slide">
                    <div className="sliderImg">
                      <img src={slider1mobile} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </CarouselProvider>

        {/* DESKTOP */}
        <div
          id="headerTypewriter"
          className="w-50 position-absolute p-5 d-none d-lg-block align-self-center sliderTextDivDesktop"
        >
          <div className="w-75">
            <div>
              <Typewriter
                strings={[
                  `${textTypewriter1a} <span style='color:${accentColor}'>${textTypewriter1b}</span>`,
                  `${textTypewriter2a} <span style='color:${accentColor}'>${textTypewriter2b}</span>`,
                ]}
              />
            </div>

            <p>{textTypewriter3}</p>

            <div className="d-flex">
              <button className="p-3 buttonAccentLight">
                {textMoreAboutUs}
              </button>
              <button className="p-3 px-4 mx-3 buttonAccentLightCircle">
                <FaPlay />
              </button>
              <p className="my-2 align-self-center fontPoppins">
                {textWatchVideo}
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div
          id="headerTypewriter"
          className="w-100 my-3 mx-auto px-2 position-relative d-block d-lg-none align-self-center text-center sliderTextDivMobile"
        >
          <div className="w-100 px-2">
            <Typewriter
              strings={[
                `${textTypewriter1a} <span style='color:${accentColor}'>${textTypewriter1b}</span>`,
                `${textTypewriter2a} <span style='color:${accentColor}'>${textTypewriter2b}</span>`,
              ]}
            />

            <div className="d-flex  justify-content-around">
              <div>
                <p className="my-2 align-self-center fontPoppinsSmall d-inline">
                  {textMoreAboutUs}
                </p>
                <button className="py-2 px-4 mx-3 buttonAccentLightCircle">
                  <FaPlay />
                </button>
                <button className="px-3 py-2 buttonAccentLightSmall">
                  {textWatchVideo}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Row>

      <Row>
        <div className="container mt-5 px-3">
          {/* DESKTOP */}
          <Row className="d-none d-sm-flex justify-content-center text-center">
            <h3 className="h3Black">{textHeader1}</h3>
          </Row>

          <Row className="d-none d-sm-flex justify-content-center text-center text-wrap">
            <p className="fontPoppinsGray">{textHeader2}</p>
          </Row>

          {/* MOBILE */}
          <Row className="d-flex d-sm-none justify-content-center text-center px-3">
            <h4 className="h3Black">{textHeader1}</h4>
          </Row>
          <Row className="d-flex d-sm-none justify-content-center text-center text-wrap px-2">
            <p className="fontPoppinsGray">{textHeader2}</p>
          </Row>
        </div>
      </Row>
    </div>
  );
};

export default SliderComponent;
