import React, { useState, useEffect} from 'react';
import { Media } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import cards2a from "../Images/cards2a.svg";
import cards2b from "../Images/cards2b.svg";


interface CardsProps{
    yscroll: number
}

const Cards2 = (props: CardsProps) =>{
    const [showCards, setShowCards] = useState(false);
    
    useEffect(() => {
        if(props.yscroll >= 800) setShowCards(true);

    // }, [useCallback(handleScroll, [Yscroll])]);
    }, [props.yscroll]);

    let textCardTitle1 = (<FormattedMessage id="card-2-1-title" defaultMessage="Feature1" />);
    let textCard1 = (<FormattedMessage id="card-2-1-text1" defaultMessage="Feature1" />);
    let textCardTitle2 = (<FormattedMessage id="card-2-2-title" defaultMessage="Feature1" />);
    let textCard2 = (<FormattedMessage id="card-2-2-text1" defaultMessage="Feature1" />);

    return(
        <div className="container">
            <Media className="my-4 d-flex flex-wrap" id={showCards? "slidingLeft" : "hidden"}>
                <Media.Body className="col-sm-12 col-lg-6 mt-3">
                    <h5>{textCardTitle1}</h5>
                    <p>
                    {textCard1}
                    </p>
                </Media.Body>
                <img
                    width={512}
                    height={256}
                    className="mr-3 col-12 col-lg-6"
                    style={{height: "auto"}}
                    src={cards2a}
                    alt="Generic placeholder"
                />
            </Media>

            <Media className="my-4 d-flex flex-wrap" id={showCards? "slidingRight" : "hidden"}>
                <img
                    width={512}
                    height={256}
                    style={{height: "auto"}}
                    className="mr-3 col-sm-12 col-lg-6"
                    src={cards2b}
                    alt="Generic placeholder"
                />
                <Media.Body className="col-12 col-lg-6 mt-3">
                    <h5>{textCardTitle2}</h5>
                    <p>
                    {textCard2}
                    </p>
                </Media.Body>
            </Media>
        </div>
    )
}

export default Cards2;