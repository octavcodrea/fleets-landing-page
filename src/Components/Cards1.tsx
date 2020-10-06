import React from 'react';
import { Media } from 'react-bootstrap';

const Cards1 = () =>{

    return(
        <div className="d-flex flex-wrap">
            <Media className="w-50">
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="https://via.placeholder.com/64x64/f22"
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

            <Media className="w-50">
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="https://via.placeholder.com/64x64/f2f"
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

            <Media className="w-50">
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="https://via.placeholder.com/64x64/2f2"
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

            <Media className="w-50">
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="https://via.placeholder.com/64x64/22f"
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

export default Cards1;