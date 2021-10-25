import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Caroussel.css';

const Caroussel = () => {
    return(
        <>
            <div className='caroussel'>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        id="first-slide"
                        src="https://res.cloudinary.com/dgzbojudn/image/upload/v1634313454/beautyStore/capture-youth5_1440_1200_zmxhoj.webp"
                        alt="dior"
                        />
                        <Carousel.Caption>
                        {/* <Link to="#" className='caroussel-btn'>SHOP ALL</Link> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        id="caroussel"
                        src="https://res.cloudinary.com/dgzbojudn/image/upload/v1634313455/beautyStore/hydralife-p-1-duo-europe-mood-franch-claim-en-1440-x-616_wnedsj.webp"
                        alt="dior"
                        />

                        <Carousel.Caption>
                        {/* <Link to="#" className='caroussel-btn'>SHOP ALL</Link> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        id="caroussel"
                        src="https://i.pinimg.com/originals/73/ac/92/73ac92991e5ab737e4233cd0153bb1a9.jpg"
                        alt="caudalie"
                        />

                        <Carousel.Caption>
                        {/* <Link to="#" className='caroussel-btn'>SHOP ALL</Link> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default Caroussel;