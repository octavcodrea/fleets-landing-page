import React, { CSSProperties, useLayoutEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { ParallaxProvider, Parallax, useController } from 'react-scroll-parallax';
// import {inlineStyles} from "./InlineStyles";

import image from '../Images/parallax-container.svg';

interface StylesDictionary{
    [Key: string]: CSSProperties;
}

const ParallaxCache = () => {
    const { parallaxController } = useController();
 
    useLayoutEffect(() => {
        const handler = () => parallaxController.update();
        window.addEventListener('load', handler);
        return () => window.removeEventListener('load', handler);
    }, [parallaxController]);
 
    return null;
};

const ParallaxContainer = () =>{

    const styles:StylesDictionary  = {
        containerStyle:{
            overflowY: "hidden",
            overflowX: "hidden",
            width: "100%",
            maxHeight: "400px"
        },

        imageStyle :{
            margin: "auto",
            width: "auto",
            height: "100%",
            minHeight: "400px",
            overflowX: "hidden"

        }
    };

    let textPrxHeader1 = (<FormattedMessage id="prx-container-header1" defaultMessage="Feature1" />);
    let textPrxHeader2 = (<FormattedMessage id="prx-container-header2" defaultMessage="Feature1" />);
    let textPrxButton = (<FormattedMessage id="prx-container-button" defaultMessage="Feature1" />);

    let textPrxHeader3 = (<FormattedMessage id="prx-container-header1" defaultMessage="Feature1" />);
    let textPrxHeader4 = (<FormattedMessage id="prx-container-header2" defaultMessage="Feature1" />);
    let textPrxButtonGetStarted = (<FormattedMessage id="prx-container-button-getstarted" defaultMessage="Feature1" />);
    let textPrxButtonGetInTouch = (<FormattedMessage id="prx-container-button-getintouch" defaultMessage="Feature1" />);

    return(

        <div className="container-fluid mx-0 px-0 position-relative">

            <div className="container w-100 position-relative" >
                <div className="position-absolute parallaxContTextbox mx-auto">
                    <h1 className="parallaxContHeader">{textPrxHeader1}</h1>
                    <p className="parallaxContHeader2">{textPrxHeader2}</p>
                    <div className="parallaxContTextboxButtonContainer">
                        <button className="parallaxContButton">{textPrxButton}</button>
                    </div>
                </div>
            </div>

            <div className="parallax-top w-100 position-absolute"></div>
            <ParallaxProvider>
                <ParallaxCache /> 
                <div className="d-block containerStyle position-relative" >
                    <Parallax y={[0, -55]}>
                        <img style={styles.imageStyle} 
                            src={image} alt=""/>
                    </Parallax>
                    <div className="parallax-bottom w-100 position-absolute"></div>
                </div>
                
            </ParallaxProvider>
            

            <div className="container justify-content-center py-4">
                <Row className="d-flex flex-wrap">
                    <Col className="col-12 col-lg-8 pt-4">
                        {/* DESKTOP */}
                        <div className="d-none d-lg-block">
                            <h3 className="h3Accent">{textPrxHeader3}</h3>
                            <h3 className="h3Black">{textPrxHeader4}</h3>
                        </div>

                        {/* MOBILE */}
                        <div className="d-block d-lg-none text-center">
                            <h3 className="h3Accent">{textPrxHeader3}</h3>
                            <h3 className="h3Black">{textPrxHeader4}</h3>
                        </div>
                    </Col>
                    
                    <Col className="d-flex col-12 col-lg-4 justify-content-center align-self-center">
                        <div className="d-flex py-3 justify-content-center mx-auto">
                            <Button className="mx-2 px-4 py-3 my-1 buttonAccent" variant="accent">{textPrxButtonGetStarted}</Button>
                            <Button className="mx-2 px-4 py-3 my-1 buttonGray" variant="accent">{textPrxButtonGetInTouch}</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ParallaxContainer;