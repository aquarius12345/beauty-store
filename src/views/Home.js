import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Caroussel from '../components/Caroussel';
import Slider from '../components/Slider';
import api from '../configs/api';
import './Home.css';


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async() => {
        try {
            const result = await api.get('/product/all');
            console.log('result', result);
            setProducts(result.data);
        } catch(error) {
            console.error(error.response);
        }
    }

    const bestSell = products.filter(el => el.rating >= 4).slice(30, 50);

    const choosen = products.filter(el => el.rating === 4);

    return (
        <div>
           <Caroussel/>
           <Slider data={products} title={'New In'} spantext={'NEW'}/>
           <div className='banner'>
               <article className='banner-art'>
                <img src="https://forwardpositive.com/wp-content/uploads/2020/08/fall-2020_laneige-gummy-bear_000_promo-660x330.jpg" alt='laneige'/>
                <Link to="#" id="left">SHOP ALL</Link>
               </article>
               <article className='banner-art'>
                <img src="https://bestkbeauty.com/wp-content/uploads/2020/11/dr-jart-ceramidin-review.jpg" alt="ceramidin"/>
                <Link to="#" id="right">BEST SELLERS</Link>
               </article>
           </div>
           <Slider data={bestSell} title={'Selling Fast'}/>
           <Slider data={choosen} title={'Choosen for you'}/>
           {/* <Slider data={diorColl} title={'See Collection'}/> */}
        </div>
    );
};

export default Home;