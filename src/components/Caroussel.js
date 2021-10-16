import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                        />
                        <Carousel.Caption>
                        <Link to="#" className='caroussel-btn'>SHOP ALL</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        id="caroussel"
                        src="https://res.cloudinary.com/dgzbojudn/image/upload/v1634313455/beautyStore/hydralife-p-1-duo-europe-mood-franch-claim-en-1440-x-616_wnedsj.webp"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        {/* <Link to="#" className='caroussel-btn'>SHOP ALL</Link> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        id="caroussel"
                        src="https://www.moodiedavittreport.com/wp-content/uploads/2021/06/Screenshot-2021-06-09-at-10.32.49.png"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <Link to="#" className='caroussel-btn'>SHOP ALL</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default Caroussel;