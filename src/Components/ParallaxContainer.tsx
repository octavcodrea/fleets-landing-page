import React, { CSSProperties } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import {inlineStyles} from "./InlineStyles";

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
    }

    return(

        <div className="container-fluid mx-0 px-0 position-relative">
            <ParallaxProvider>
                <div className="d-block" style={styles.containerStyle}>
                    <Parallax y={[10, -30]}>
                        <img style={styles.imageStyle} 
                            src={image} alt=""/>
                    </Parallax>
                </div>
            </ParallaxProvider>
            
            <div className="container position-relative" >
                <div className="position-absolute" style={inlineStyles.parallaxContTextbox}>
                    <h1 style={inlineStyles.parallaxContHeader}>Let's Work Together</h1>
                    <p style={inlineStyles.parallaxContHeader2}>Get in touch with us and let us help you. We can make your project come true.</p>
                    <button style={inlineStyles.parallaxContButton}>Get started</button>
                </div>
            </div>

            <div className="container justify-content-center py-4">
                <Row className="d-flex flex-wrap">
                    <Col className="col-12 col-lg-8 pt-3">
                        <div>
                            <h3 style={inlineStyles.h3Accent}>Ready to get started?</h3>
                            <h3 style={inlineStyles.h3Black}>Create a free account or get in touch.</h3>
                        </div>
                    </Col>
                    
                    <Col className="d-flex col-12 col-lg-4 justify-content-center">
                        <div className="py-3">
                            <Button className="mx-2 px-4 py-2 my-1" style={inlineStyles.buttonAccent}>Get Started</Button>
                            <Button className="mx-2 px-4 py-2 my-1" style={inlineStyles.buttonGray}>Get in Touch</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ParallaxContainer;