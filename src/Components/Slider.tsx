import React from 'react';
import { Carousel, Container, Row , Col} from 'react-bootstrap';
import { CarouselProvider, Slider, Slide, Dot, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {inlineStyles, accentColor} from "./InlineStyles";
import Typewriter from "./Typewriter";
import { FaPlay } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';


import slider1 from "../Images/bg1.png";
import slider2 from "../Images/bg2.png";
import slider3 from "../Images/bg3.png";

import slider1mobile from "../Images/bg1-mobile.png";
import slider2mobile from "../Images/bg2-mobile.png";
import slider3mobile from "../Images/bg3-mobile.png";

import useWindowDimensions from '../Hooks/useWindowDimensions';

const SliderComponent = () =>{

    const { height, width } = useWindowDimensions();
    // console.log("height:",height, "width:", width, "ratio: ", height/width);


    return(
        <div className="container-fluid px-0 mx-0 position-relative">
            <Row className="w-100 mx-0">
                <CarouselProvider
                    orientation="vertical"
                    naturalSlideWidth={100}
                    naturalSlideHeight={height / width * 40}
                    totalSlides={3}
                    interval={5000}
                    isPlaying={true}

                    className="w-100 mx-0 px-0"
                >
                    <Row className="d-flex flex-nowrap w-100 mx-0">
                        <div className="d-flex flex-column flex-nowrap align-self-center">
                            <div className="align-self-center mx-1">
                                <Dot slide={0} style={inlineStyles.sliderDot}><GoPrimitiveDot/></Dot>
                                <Dot slide={1} style={inlineStyles.sliderDot}><GoPrimitiveDot/></Dot>
                                <Dot slide={2} style={inlineStyles.sliderDot}><GoPrimitiveDot/></Dot>
                            </div>
                        </div>

                        <Slider className="w-100 p-0 m-0" style={inlineStyles.slider}>
                            <Slide index={0}>
                                <div className="d-none d-lg-block">
                                    <img src={slider1} alt="" style={inlineStyles.sliderImg} />
                                </div>

                                <div className="d-block d-lg-none">
                                    <img src={slider1mobile} alt="" style={inlineStyles.sliderImg} />
                                </div>

                            </Slide>

                            <Slide index={1}>
                                <div className="d-none d-lg-block">
                                    <img src={slider2} alt="" style={inlineStyles.sliderImg} />
                                </div>
                                
                                <div className="d-block d-lg-none">
                                    <img src={slider2mobile} alt="" style={inlineStyles.sliderImg} />
                                </div>
                            </Slide>

                            <Slide index={2}>
                                <div className="d-none d-lg-block">
                                    <img src={slider3} alt="" style={inlineStyles.sliderImg} />
                                </div>
                                
                                <div className="d-block d-lg-none">
                                    <img src={slider3mobile} alt="" style={inlineStyles.sliderImg} />
                                </div>
                            </Slide>
                        </Slider>

                    </Row>
                    
                </CarouselProvider>

                {/* DESKTOP */}
                <div id="headerTypewriter" className="w-50 position-absolute p-5 d-none d-lg-block align-self-center" style={inlineStyles.sliderTextDivDesktop}>
                    <div className="w-75">
                        <div>
                        <Typewriter strings={[
                            `Lorem ipsum dolor sit amet consectetur adipisicing elit. <span style='color:${accentColor}'>Commodi suscipit similique.</span>`, 
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit "
                            ]}
                        />
                        </div>
                        

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor unde possimus veritatis laudantium qui molestias veniam maxime harum.</p>
                
                        <div className="d-flex">
                            <button className="p-3 " style={inlineStyles.buttonAccentLight}>More about us</button>
                            <button className="p-3 px-4 mx-3" style={inlineStyles.buttonAccentLightCircle}><FaPlay /></button>
                            <p className="my-2 align-self-center" style={inlineStyles.fontPoppins}>Watch video</p>
                        </div>
                    </div>
                </div>

                {/* MOBILE */}
                <div id="headerTypewriter" className="w-100 position-absolute pr-0 py-1 pl-5 d-block d-lg-none align-self-center text-right" style={inlineStyles.sliderTextDivMobile}>
                    <div className="w-100 px-2">
                        <Typewriter strings={[
                            `Lorem ipsum dolor sit amet consectetur adipisicing elit. <span style='color:${accentColor}'>Commodi suscipit similique.</span>`, 
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit."
                            ]}
                            />

                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor unde possimus veritatis laudantium qui molestias veniam maxime harum.</p> */}
                
                        <div className="d-flex text-right flex-row-reverse">
                            <p className="my-2 align-self-center" style={inlineStyles.fontPoppinsSmall}>Watch video</p>
                            <button className="py-1 px-4 mx-3" style={inlineStyles.buttonAccentLightCircle}><FaPlay /></button>
                            <button className="px-3 py-1" style={inlineStyles.buttonAccentLightSmall}>More about us</button>
                            
                        </div>
                    </div>
                </div>
            </Row>


            <Row>
                <div className ="container mt-3 px-3">
                        {/* DESKTOP */}
                        <Row className="d-none d-sm-flex justify-content-center text-center">
                            <h3 style={inlineStyles.h3Black}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit?</h3>
                        </Row>

                        <Row className="d-none d-sm-flex justify-content-center text-center text-wrap">
                            <p style={inlineStyles.fontPoppinsGray}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, itaque.</p>
                        </Row>

                    {/* MOBILE */}
                    <Row className="d-flex d-sm-none justify-content-center text-center px-3">
                            <h4 style={inlineStyles.h3Black}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit?</h4>
                        </Row>
                    <Row className="d-flex d-sm-none justify-content-center text-center text-wrap px-2">
                        <p style={inlineStyles.fontPoppinsGray}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, itaque.</p>
                    </Row>
                </div>
            </Row>

            
        </div>
    )

}

export default SliderComponent;