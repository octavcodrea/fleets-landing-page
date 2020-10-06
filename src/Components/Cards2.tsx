import React from 'react';
import { Media } from 'react-bootstrap';

const Cards2 = () =>{

    return(
        <div>
            <Media className="">
                <Media.Body>
                    <h5>Media Heading</h5>
                    <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus.
                    </p>
                </Media.Body>
                <img
                    width={256}
                    height={128}
                    className="mr-3"
                    src="https://via.placeholder.com/256x128/222"
                    alt="Generic placeholder"
                />
            </Media>

            <Media className="">
                <img
                    width={256}
                    height={128}
                    className="mr-3"
                    src="https://via.placeholder.com/256x128/ff2"
                    alt="Generic placeholder"
                />
                <Media.Body>
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