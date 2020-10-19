import React, { useState, useEffect} from 'react';
import { Media } from 'react-bootstrap';

const Cards2 = () =>{

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
        if(Yscroll >= 500) setShowCards(true);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    // }, [useCallback(handleScroll, [Yscroll])]);
    }, [Yscroll]);

    return(
        <div className="container">
            <Media className="my-4 d-flex flex-wrap" id={showCards? "slidingLeft" : "hidden"}>
                <Media.Body className="col-sm-12 col-lg-6 mt-3">
                    <h5>Media Heading</h5>
                    <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus.
                    </p>
                </Media.Body>
                <img
                    width={512}
                    height={256}
                    className="mr-3 col-12 col-lg-6"
                    style={{height: "auto"}}
                    src="https://via.placeholder.com/512x256/73ffe2"
                    alt="Generic placeholder"
                />
            </Media>

            <Media className="my-4 d-flex flex-wrap" id={showCards? "slidingRight" : "hidden"}>
                <img
                    width={512}
                    height={256}
                    style={{height: "auto"}}
                    className="mr-3 col-sm-12 col-lg-6"
                    src="https://via.placeholder.com/512x256/73ffe2"
                    alt="Generic placeholder"
                />
                <Media.Body className="col-12 col-lg-6 mt-3">
                    <h5>Media Heading</h5>
                    <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus.
                    </p>
                </Media.Body>
            </Media>
        </div>
    )
}

export default Cards2;