import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Slider = () =>{

    return(
        <div className="d-flex mx justify-content-center" style={{border: "1px solid red"}}>
                <Carousel>
                    <Carousel.Item style={{'height':"auto", 'width':'100%'}}>
                        <img
                        className="d-block w-100"
                        src={"https://via.placeholder.com/1900x500/f2f"}
                        alt="First slide"
                        style={{'height':"auto", 'width':'100%'}}
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height':"auto", 'width':'100%'}}>
                        <img
                        className="d-block w-100"
                        src={"https://via.placeholder.com/1900x500/f22"}
                        alt="Second slide"
                        style={{'height':"auto", 'width':'100%'}}
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height':"auto", 'width':'100%'}}>
                        <img
                        className="d-block w-100"
                        src={"https://via.placeholder.com/1900x500/2ff"}
                        alt="Third slide"
                        style={{'height':"auto", 'width':'100%'}}
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

        </div>
        
    )
}

export default Slider;