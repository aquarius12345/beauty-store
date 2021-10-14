import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BodyFace.css';
import api from '../configs/api';

const BodyFace = (props) => {

    const skin = props.name;
    console.log('skin',skin)

    const byBrand = props.brand;
    console.log('brand', byBrand);

    const [products, setProducts] = useState([]);
    const [skinType, setSkinType] = useState([]);
    console.log('skintype', skinType)
    console.log('products', products)

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async() => {
            try {
                const result = await api.get('/product/all');
               
                const filtered = result.data.filter(el => el.category === props.category);
                setProducts(filtered);        
            } catch(error) {
                console.error(error.response);
            };
    };


    useEffect(() => {
        if(skin){
            const filtered = products.filter(el => el.skin_type === skin);
            setSkinType(filtered);
        }else{
            const filtered = products.filter(el => el.brand === byBrand);
            setSkinType(filtered);
        }    
               
    }, [skin, byBrand])


    const heart = '♥';
    const emptyheart = '♡'

    const rating = (number) => {
        return heart.repeat(number).padEnd(5, emptyheart);
    }
    
    
    return(
        <div>
            {/* -------------Rendering Products section------------ */}
            <section className='products-part'>
            
                <div className='result'>
                    {!skinType.length ? 
                    <p>{'('+ products.length +')'} Results</p> 
                    : 
                    <p>{'('+ skinType.length +')'} Results</p>
                    }    
                </div>

                <div>
                    <ul className='the-ul'>
                    {!skinType.length ? 
                    
                    (products.map(el => <li key={el._id} className='prd-card'> 
                        <Link to={`/product-detail/${el._id}`}>
                        <img src={el.image_one} alt='body product'/>
                        <div>
                            <p style={{fontWeight: 'bold'}}>{el.brand}</p>
                            <p style={{fontSize: '0.9rem'}}>{el.name}</p>
                            <p>{rating(el.rating)}</p>
                            <p style={{fontWeight: 'bold'}}>{'$'+ (el.price / 100) + '.00'}</p>
                        </div>
                        </Link>
                    </li>))
                    : 
                    (skinType.map(el => <li key={el._id} className='prd-card'> 
                    <Link to={`/product-detail/${el._id}`}>
                    <img src={el.image_one} alt='body product'/>
                    <div>
                        <p style={{fontWeight: 'bold'}}>{el.brand}</p>
                        <p style={{fontSize: '0.9rem'}}>{el.name}</p>
                        <p>{rating(el.rating)}</p>
                        <p style={{fontWeight: 'bold'}}>{'$'+ (el.price / 100) + '.00'}</p>
                    </div>
                    </Link>
                </li>))
                    }
                    </ul>
                </div>
          
            </section>      
        
        </div>
    );
};

export default BodyFace;