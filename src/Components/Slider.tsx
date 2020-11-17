import React, { useEffect } from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import { CarouselProvider, Slider, Slide, Dot, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {inlineStyles, accentColor} from "./InlineStyles";
import Typewriter from "./Typewriter";
import { FaPlay } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';

import langEnglish from '../Languages/en-US.json';
import langRomanian from '../Languages/ro-RO.json';


import slider1 from "../Images/slidergraphic2.svg";
import slider2 from "../Images/bg2.png";
import slider3 from "../Images/bg3.png";

import slider1mobile from "../Images/slidergraphic2.svg";
import slider2mobile from "../Images/bg2-mobile.png";
import slider3mobile from "../Images/bg3-mobile.png";

import useWindowDimensions from '../Hooks/useWindowDimensions';
import { FormattedMessage } from 'react-intl';

let textTypewriter1a = "Typewriter1A";
let textTypewriter1b = "Typewriter1B";
let textTypewriter2a = "Typewriter2A";
let textTypewriter2b = "Typewriter2B";


const SliderComponent = (props: any) =>{

    const { height, width } = useWindowDimensions();
    // console.log("height:",height, "width:", width, "ratio: ", height/width);

    //The Typewriter component requires a string and the react-intl returns an object, so we get the text from the language .json manually instead
    //There's a componentDidUpdate method in the Typewriter component that will rerender the component
    switch(props.local){
        
        case "English": case "en": case "en-US": case "EN":{
            textTypewriter1a = langEnglish["slider-typewriter1a"];
            textTypewriter1b = langEnglish["slider-typewriter1b"];
            textTypewriter2a = langEnglish["slider-typewriter2a"];
            textTypewriter2b = langEnglish["slider-typewriter2b"];
            break;
        }
        case "Romanian": case "Română": case "ro": case "ro-RO": case "RO":{
            textTypewriter1a = langRomanian["slider-typewriter1a"];
            textTypewriter1b = langRomanian["slider-typewriter1b"];
            textTypewriter2a = langRomanian["slider-typewriter2a"];
            textTypewriter2b = langRomanian["slider-typewriter2b"];
            break;
        }

        default: {break;}
    }

    useEffect(() => {
        switch(props.local){
        
            case "English": case "en": case "en-US": case "EN":{
                textTypewriter1a = langEnglish["slider-typewriter1a"];
                textTypewriter1b = langEnglish["slider-typewriter1b"];
                textTypewriter2a = langEnglish["slider-typewriter2a"];
                textTypewriter2b = langEnglish["slider-typewriter2b"];
                break;
            }
            case "Romanian": case "Română": case "ro": case "ro-RO": case "RO":{
                textTypewriter1a = langRomanian["slider-typewriter1a"];
                textTypewriter1b = langRomanian["slider-typewriter1b"];
                textTypewriter2a = langRomanian["slider-typewriter2a"];
                textTypewriter2b = langRomanian["slider-typewriter2b"];
                break;
            }
    
            default: {break;}
        }
    },[props.local])

    // let textTypewriter1a = (
    //     <FormattedMessage id="slider-typewriter1a" defaultMessage="Typewriter 1A" />
    //   );
    // let textTypewriter1b = (
    //     <FormattedMessage id="slider-typewriter1b" defaultMessage="Typewriter 1B" />
    // );
    // let textTypewriter2a = (
    //     <FormattedMessage id="slider-typewriter2a" defaultMessage="Typewriter 2A" />
    // );
    // let textTypewriter2b = (
    //     <FormattedMessage id="slider-typewriter2b" defaultMessage="Typewriter 2B" />
    // );

    let textTypewriter3 = (
        <FormattedMessage id="slider-typewriter3" defaultMessage="Text for Typewriter 3" />
    );
    let textMoreAboutUs = (
        <FormattedMessage id="slider-moreaboutus" defaultMessage="More about us" />
    );
    let textWatchVideo = (
        <FormattedMessage id="slider-watchvideo" defaultMessage="Watch video" />
    );
    let textHeader1 = (
        <FormattedMessage id="slider-header1" defaultMessage="Text for Slider Header 1" />
    );
    let textHeader2 = (
        <FormattedMessage id="slider-header2" defaultMessage="Text for Slider Header 2" />
    );


    return(
        <div className="container-fluid px-0 mx-0 position-relative">
            <Row className="w-100 mx-0">
                <CarouselProvider
                    orientation="vertical"
                    naturalSlideWidth={100}
                    naturalSlideHeight={height / width * 80}
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

                        {/*
                        <div className="d-flex flex-column flex-nowrap align-self-center">
                            <div className="align-self-center mx-1">
                                <Dot slide={0}  className="sliderDot"><GoPrimitiveDot/></Dot>
                                <Dot slide={1}  className="sliderDot"><GoPrimitiveDot/></Dot>
                                <Dot slide={2}  className="sliderDot"><GoPrimitiveDot/></Dot>
                            </div>
                        </div>
                        
                        <Slider className="w-100 p-0 m-0 slider">
                            <Slide index={0} className="slideContainer">
                                <div className="d-none d-lg-block slide">
                                    <img src={slider1} alt=""  className="sliderImg" />
                                </div>

                                <div className="d-block d-lg-none slide">
                                    <img src={slider1mobile} alt=""  className="sliderImg" />
                                </div>

                            </Slide>

                            <Slide index={1} className="slideContainer">
                                <div className="d-none d-lg-block slide">
                                    <img src={slider2} alt=""  className="sliderImg" />
                                </div>
                                
                                <div className="d-block d-lg-none slide">
                                    <img src={slider2mobile} alt=""  className="sliderImg" />
                                </div>
                            </Slide>

                            <Slide index={2} className="slideContainer">
                                <div className="d-none d-lg-block slide">
                                    <img src={slider3} alt=""  className="sliderImg" />
                                </div>
                                
                                <div className="d-block d-lg-none slide">
                                    <img src={slider3mobile} alt=""  className="sliderImg" />
                                </div>
                            </Slide>
                        </Slider> */}

                    </Row>
                    
                </CarouselProvider>

                {/* DESKTOP */}
                <div id="headerTypewriter" className="w-50 position-absolute p-5 d-none d-lg-block align-self-center sliderTextDivDesktop">
                    <div className="w-75">
                        <div>
                        <Typewriter strings={[
                            `${textTypewriter1a} <span style='color:${accentColor}'>${textTypewriter1b}</span>`, 
                            `${textTypewriter2a} <span style='color:${accentColor}'>${textTypewriter2b}</span>`
                            ]}
                        />
                        </div>
                        
                        <p>{textTypewriter3}</p>
                
                        <div className="d-flex">
                            <button className="p-3 buttonAccentLight" >{textMoreAboutUs}</button>
                            <button className="p-3 px-4 mx-3 buttonAccentLightCircle" ><FaPlay /></button>
                            <p className="my-2 align-self-center fontPoppins" >{textWatchVideo}</p>
                        </div>
                    </div>
                </div>

                {/* MOBILE */}
                <div id="headerTypewriter" className="w-100 my-3 mx-auto px-2 position-relative d-block d-lg-none align-self-center text-center sliderTextDivMobile">
                    <div className="w-100 px-2">
                        <Typewriter strings={[
                            `${textTypewriter1a} <span style='color:${accentColor}'>${textTypewriter1b}</span>`, 
                            `${textTypewriter2a} <span style='color:${accentColor}'>${textTypewriter2b}</span>`
                            ]}
                        />

                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor unde possimus veritatis laudantium qui molestias veniam maxime harum.</p> */}
                
                        <div className="d-flex  justify-content-around">
                            <div>
                                <p className="my-2 align-self-center fontPoppinsSmall d-inline">{textMoreAboutUs}</p>
                                <button className="py-2 px-4 mx-3 buttonAccentLightCircle"><FaPlay /></button>
                                <button className="px-3 py-2 buttonAccentLightSmall">{textWatchVideo}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>


            <Row>
                <div className ="container mt-5 px-3">
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
    )

}

export default SliderComponent;