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
                        src="https://1.bp.blogspot.com/-k52s9yHwyuc/Wso0WjoSLgI/AAAAAAAAZZE/pfRxRFVSm6EaM9DMDdOKKKKSiVj_7Xo8ACEwYBhgL/s1600/DiorCaptureYouth_5.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <Link to="#" className='caroussel-btn'>SHOP ALL</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        id="caroussel"
                        src="https://www.dior.com/beauty/version-5.1432748112001/resize-image/ep/0/0/90/0/Alternate_views%252Frange_board_serums_V3.jpg"
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
                        src="https://www.dior.com/couture/var/dior/storage/images/14216800/80-int-EN/capture-youth5_1440_1200.jpg"
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