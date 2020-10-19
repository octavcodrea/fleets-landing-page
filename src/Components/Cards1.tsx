import React, { useState, useEffect } from 'react';
import { Button, Media } from 'react-bootstrap';
import {inlineStyles} from "./InlineStyles";
import { FaArrowRight } from 'react-icons/fa';


const Cards1 = () =>{

    const [Yscroll, setYScroll] = useState(0);
    const [showCards, setShowCards] = useState(false);

    const handleScroll = () => {
        let position = window.pageYOffset;
        // console.log("position Y:",position);

        setYScroll(position);
        // console.log("scroll Y:",Yscroll);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        // , { passive: true });

        handleScroll();
        if(Yscroll >= 200) setShowCards(true);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    // }, [useCallback(handleScroll, [Yscroll])]);
    }, [Yscroll]);

    return(
        <div className="my-5">
            <div className="d-flex flex-wrap container justify-content-between">

                <Media className="mx-3 my-2 col-12 col-lg-5" id={showCards? "slidingLeft" : "hidden"}>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src="https://via.placeholder.com/64x64/73ffe2"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>Get Started Immediatly</h5>
                        <p className="mb-1">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, at aspernatur laudantium deserunt veritatis iusto magnam molestiae facere cupiditate odit, vero, velit nulla suscipit ratione quo debitis esse eius corporis?
                        </p>
                        <a href="#" style={inlineStyles.colorAccent} className="my-0 py-0">Explore now <FaArrowRight className="mb-1" /> </a>
                    </Media.Body>
                </Media>

                <Media className="mx-3 my-2 col-12 col-lg-5" id={showCards? "slidingRight" : "hidden"}>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src="https://via.placeholder.com/64x64/73ffe2"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>Full Responsive</h5>
                        <p className="mb-1">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. 
                        </p>
                        <a href="#" style={inlineStyles.colorAccent} className="my-0 py-0">Explore now <FaArrowRight className="mb-1" /> </a>
                    </Media.Body>
                </Media>

                <Media className="mx-3 my-2  col-sm-12 col-lg-5" id={showCards? "slidingLeft" : "hidden"}> 
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src="https://via.placeholder.com/64x64/73ffe2"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>Clean and Modern</h5>
                        <p className="mb-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam doloribus incidunt rem cupiditate nulla hic eius nemo consectetur in illum!
                        </p>
                        <a href="#" style={inlineStyles.colorAccent} className="my-0 py-0">Explore now <FaArrowRight className="mb-1" /> </a>
                    </Media.Body>
                </Media>

                <Media className="mx-3 my-2  col-sm-12 col-lg-5" id={showCards? "slidingRight" : "hidden"}>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src="https://via.placeholder.com/64x64/73ffe2"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>Easy to Customize</h5>
                        <p className="mb-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsam soluta aperiam, dolor fugiat nulla libero nam. Esse officiis maiores obcaecati vel, quaerat quas deserunt aliquam minima placeat. Beatae, illo?
                        </p>
                        <a href="#" style={inlineStyles.colorAccent} className="my-0 py-0">Explore now <FaArrowRight className="mb-1" /> </a>
                    </Media.Body>
                </Media>

            </div>
            <div className="d-flex justify-content-center">
                <Button className="px-4 py-3" style={inlineStyles.buttonAccentLight}>Let's See Our Features</Button>
            </div>
        </div>
    )
}

export default Cards1;