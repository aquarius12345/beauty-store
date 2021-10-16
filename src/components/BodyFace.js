import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BodyFace.css';
import api from '../configs/api';


const BodyFace = (props) => {
    // name={query.get('name')} brand={query.get('brand')}
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    //console.log(query)

    // const location = useLocation();
    // //console.log('useLocation', location)

    const skin = query.get('name');
    console.log('skin',skin)

    const byBrand = query.get('brand');
    console.log('brand', byBrand);

    const radio = props.radio;
    console.log('radio', radio)

    const [products, setProducts] = useState([]);
    const [skinType, setSkinType] = useState([]);
    //const [radioValue, setRadioValue] = useState(radio);
    console.log('skintype', skinType)
    //console.log('products', products)

    useEffect(() => {
        getProducts();   
    }, []);

    const getProducts = async() => {
            try {
                const result = await api.get('/product/all');
               
                const filtered = result.data.filter(el => el.category === props.category);
                setProducts(filtered);
                setSkinType(filtered);      
            } catch(error) {
                console.error(error.response);
            };
    };

    useEffect(() => {
        if(skin){
            const filtered = products.filter(el => {
                if(radio){
                    return el.skin_type === skin && el.rating == radio
                }
                return el.skin_type === skin       
            });
            setSkinType(filtered);
            console.log('skin use effect')
        }
        
        if(byBrand){
            const filtered = products.filter(el =>{
                if(radio){
                    return el.brand === byBrand && el.rating == radio
                }
                return el.brand === byBrand
            }) 
            setSkinType(filtered);
            console.log('by brand use effect')
        }

        if(!skin && !byBrand){
            if(radio){
                const filtered = products.filter(el => el.rating == radio)
                setSkinType(filtered);
                return
            }
            setSkinType(products);
        }           
    }, [skin, byBrand, radio]);


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
                    <p>{'('+ skinType.length +')'} Results</p> 
                </div>

                <div>
                    <ul className='the-ul'>
                    {(skinType.map(el => <li key={el._id} className='prd-card'> 
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