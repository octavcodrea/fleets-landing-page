import React, { useState, useEffect } from 'react';
import { Button, Media } from 'react-bootstrap';
// import {inlineStyles} from "./InlineStyles";
import { FaArrowRight } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';

import card1 from '../Images/card1.svg';
import card2 from '../Images/card2.svg';
import card3 from '../Images/card3.svg';
import card4 from '../Images/card4.svg';


interface CardsProps{
    yscroll: number
}

const Cards1 = (props: CardsProps) =>{
    const [showCards, setShowCards] = useState(false);
    
    useEffect(() => {
        if(props.yscroll >= 400) setShowCards(true);
        
    // }, [useCallback(handleScroll, [Yscroll])]);
    }, [props.yscroll]);

    let textCardTitle1 = (<FormattedMessage id="card-1-1-title" defaultMessage="Feature1" />);
    let textCard1 = (<FormattedMessage id="card-1-1-text1" defaultMessage="Feature1" />);
    let textCardTitle2 = (<FormattedMessage id="card-1-2-title" defaultMessage="Feature1" />);
    let textCard2 = (<FormattedMessage id="card-1-2-text1" defaultMessage="Feature1" />);
    let textCardTitle3 = (<FormattedMessage id="card-1-3-title" defaultMessage="Feature1" />);
    let textCard3 = (<FormattedMessage id="card-1-3-text1" defaultMessage="Feature1" />);
    let textCardTitle4 = (<FormattedMessage id="card-1-4-title" defaultMessage="Feature1" />);
    let textCard4 = (<FormattedMessage id="card-1-4-text1" defaultMessage="Feature1" />);

    let textExploreNow = (<FormattedMessage id="explore-now" defaultMessage="Feature1" />);
    let textLetsSee = (<FormattedMessage id="lets-see-our-features" defaultMessage="Feature1" />);

    return(
        <div className="my-5">
            <div className="d-flex flex-wrap container justify-content-around">

                <div className="cardSmall-topleft my-3 pb-3 pt-1 col-12 col-lg-5" id={showCards? "slidingLeft" : "hidden"}>
                    <img
                        width={64}
                        height={64}
                        className="my-2"
                        src={card1}
                        alt="Generic placeholder"
                    />
                    <br/>
                    <div>
                        <h5>{textCardTitle1}</h5>
                        <p className="mb-1">
                        {textCard1}
                        </p>
                        <a href="#navbar" className="my-0 py-0 colorAccent">{textExploreNow}<FaArrowRight className="mb-1" /> </a>
                    </div>
                </div>

                <div className="cardSmall-topright my-3 pb-3 pt-1 col-12 col-lg-5" id={showCards? "slidingRight" : "hidden"}>
                    <img
                        width={64}
                        height={64}
                        className="my-2"
                        src={card2}
                        alt="Generic placeholder"
                    />
                    <br/>
                    <div>
                        <h5>{textCardTitle2}</h5>
                        <p className="mb-1">
                        {textCard2}
                        </p>
                        <a href="#navbar" className="my-0 py-0 colorAccent">{textExploreNow}<FaArrowRight className="mb-1" /> </a>
                    </div>
                </div>

                <div className="cardSmall-bottomleft my-3 pb-3 pt-1 col-sm-12 col-lg-5" id={showCards? "slidingLeft" : "hidden"}> 
                    <img
                        width={64}
                        height={64}
                        className="my-2"
                        src={card3}
                        alt="Generic placeholder"
                    />
                    <br/>
                    <div>
                        <h5>{textCardTitle3}</h5>
                        <p className="mb-1">
                        {textCard3}
                        </p>
                        <a href="#navbar" className="my-0 py-0 colorAccent">{textExploreNow}<FaArrowRight className="mb-1" /> </a>
                    </div>
                </div>

                <div className="cardSmall-bottomright my-3 pb-3 pt-1 col-sm-12 col-lg-5 " id={showCards? "slidingRight" : "hidden"}>
                    <img
                        width={64}
                        height={64}
                        className="my-2"
                        src={card4}
                        alt="Generic placeholder"
                    />
                    <br/>
                    <div>
                        <h5>{textCardTitle4}</h5>
                        <p className="mb-1">
                        {textCard4}
                        </p>
                        <a href="#navbar" className="my-0 py-0 colorAccent">{textExploreNow}<FaArrowRight className="mb-1" /> </a>
                    </div>
                </div>

            </div>
            <div className="d-flex my-3 justify-content-center">
                <Button className="px-4 py-3 buttonAccentLight" variant="accent">{textLetsSee}</Button>
            </div>
        </div>
    )
}

export default Cards1;