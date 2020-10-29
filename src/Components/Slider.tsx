import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import { CarouselProvider, Slider, Slide, Dot, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {inlineStyles, accentColor} from "./InlineStyles";
import Typewriter from "./Typewriter";
import { FaPlay } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';


import slider1 from "../Images/slidergraphic.svg";
import slider2 from "../Images/bg2.png";
import slider3 from "../Images/bg3.png";

import slider1mobile from "../Images/slidergraphic.svg";
import slider2mobile from "../Images/bg2-mobile.png";
import slider3mobile from "../Images/bg3-mobile.png";

import useWindowDimensions from '../Hooks/useWindowDimensions';
import { FormattedMessage } from 'react-intl';

const SliderComponent = () =>{

    const { height, width } = useWindowDimensions();
    // console.log("height:",height, "width:", width, "ratio: ", height/width);

    let textTypewriter1 = (
        <FormattedMessage id="slider-typewriter1" defaultMessage="Features" />
      );
    let textTypewriter2 = (
        <FormattedMessage id="slider-typewriter2" defaultMessage="Features" />
    );
    let textTypewriter3 = (
        <FormattedMessage id="slider-typewriter3" defaultMessage="Features" />
    );
    let textMoreAboutUs = (
        <FormattedMessage id="slider-moreaboutus" defaultMessage="More about us" />
    );
    let textWatchVideo = (
        <FormattedMessage id="slider-watchvideo" defaultMessage="More about us" />
    );
    let textHeader1 = (
        <FormattedMessage id="slider-header1" defaultMessage="More about us" />
    );
    let textHeader2 = (
        <FormattedMessage id="slider-header2" defaultMessage="More about us" />
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
                                        <img src={slider1} alt=""  className="sliderImg" />
                                    </div>

                                    <div className="d-block d-lg-none slide">
                                        <img src={slider1mobile} alt=""  className="sliderImg" />
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
                            `Lorem ipsum dolor sit amet consectetur adipisicing elit. <span style='color:${accentColor}'>Commodi suscipit similique.</span>`, 
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit "
                            ]}
                        />
                        </div>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor unde possimus veritatis laudantium qui molestias veniam maxime harum.</p>
                
                        <div className="d-flex">
                            <button className="p-3 buttonAccentLight" >More about us</button>
                            <button className="p-3 px-4 mx-3 buttonAccentLightCircle" ><FaPlay /></button>
                            <p className="my-2 align-self-center fontPoppins" >Watch video</p>
                        </div>
                    </div>
                </div>

                {/* MOBILE */}
                <div id="headerTypewriter" className="w-100 my-3 px-2 position-relative d-block d-lg-none align-self-center text-center sliderTextDivMobile">
                    <div className="w-100 px-2">
                        <Typewriter strings={[
                            `Lorem ipsum dolor sit amet consectetur adipisicing elit. <span style='color:${accentColor}'>Commodi suscipit similique.</span>`, 
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit."
                            ]}
                            />

                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor unde possimus veritatis laudantium qui molestias veniam maxime harum.</p> */}
                
                        <div className="d-flex  justify-content-around">
                            <div>
                                <p className="my-2 align-self-center fontPoppinsSmall d-inline">Watch video</p>
                                <button className="py-2 px-4 mx-3 buttonAccentLightCircle"><FaPlay /></button>
                                <button className="px-3 py-2 buttonAccentLightSmall">More about us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>


            <Row>
                <div className ="container mt-5 px-3">
                        {/* DESKTOP */}
                        <Row className="d-none d-sm-flex justify-content-center text-center">
                            <h3 className="h3Black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit?</h3>
                        </Row>

                        <Row className="d-none d-sm-flex justify-content-center text-center text-wrap">
                            <p className="fontPoppinsGray"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, itaque.</p>
                        </Row>

                    {/* MOBILE */}
                    <Row className="d-flex d-sm-none justify-content-center text-center px-3">
                            <h4 className="h3Black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit?</h4>
                        </Row>
                    <Row className="d-flex d-sm-none justify-content-center text-center text-wrap px-2">
                        <p className="fontPoppinsGray"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, itaque.</p>
                    </Row>
                </div>
            </Row>

            
        </div>
    )

}

export default SliderComponent;