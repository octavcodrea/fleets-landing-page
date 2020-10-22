import React, { CSSProperties } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
// import {inlineStyles} from "./InlineStyles";

import image from '../Images/parallaximage1.jpg';

interface StylesDictionary{
    [Key: string]: CSSProperties;
}

const ParallaxContainer = () =>{

    const styles:StylesDictionary  = {
        containerStyle:{
            overflowY: "hidden",
            width: "100%",
            maxHeight: "400px"
        },

        imageStyle :{
            margin: "auto",
            width: "100%",
            height: "auto"
        }
    };

    let header1Title = (<FormattedMessage id="card-2-1-title" defaultMessage="Feature1" />);

    return(

        <div className="container-fluid mx-0 px-0 position-relative">
            <ParallaxProvider>
                <div className="d-block containerStyle" >
                    <Parallax y={[10, -30]}>
                        <img style={styles.imageStyle} 
                            src={image} alt=""/>
                    </Parallax>
                </div>
            </ParallaxProvider>
            
            <div className="container position-relative" >
                <div className="position-absolute parallaxContTextbox">
                    <h1 className="parallaxContHeader">Let's Work Together</h1>
                    <p className="parallaxContHeader2">Get in touch with us and let us help you. We can make your project come true.</p>
                    <button className="parallaxContButton">Get Started</button>
                </div>
            </div>

            <div className="container justify-content-center py-4">
                <Row className="d-flex flex-wrap">
                    <Col className="col-12 col-lg-8 pt-3">
                        {/* DESKTOP */}
                        <div className="d-none d-lg-block">
                            <h3 className="h3Accent">Ready to get started?</h3>
                            <h3 className="h3Black">Create a free account or get in touch.</h3>
                        </div>

                        {/* MOBILE */}
                        <div className="d-block d-lg-none text-center">
                            <h3 className="h3Accent">Ready to get started?</h3>
                            <h3 className="h3Black">Create a free account or get in touch.</h3>
                        </div>
                    </Col>
                    
                    <Col className="d-flex col-12 col-lg-4 justify-content-center">
                        <div className="py-3">
                            <Button className="mx-2 px-4 py-2 my-1 buttonAccent">Get Started</Button>
                            <Button className="mx-2 px-4 py-2 my-1 buttonGray">Get in Touch</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ParallaxContainer;