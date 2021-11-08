import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import api from '../configs/api';
import './BodyCare.css';
import BodyFace from '../components/BodyFace';


const initialState = {
    btnOne: false,
    btnTwo: false,
    btnThree: false
}

const BodyCare = () => {

    const [products, setProducts] = useState([]);
    const [button, setButton] = useState(initialState);
    const [checked, setChecked] = useState(null);
    const [loading, setLoading] = useState(false);
    //console.log('checked', checked)
    
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async() => {
        try {
            const result = await api.get('/product/all');
            setProducts(result.data);
            setLoading(true);
        } catch(error) {
            console.error(error.response);
        };
    };

    const handleButton = (key, value) => {
        setButton({...button, [key]: !value})
    }

    const filterBrand = products.map(el => el.brand);
    const byBrand = filterBrand.filter((el, index) => filterBrand.indexOf(el) === index).slice(1, 7);


    return (
        // rendering Filters
        <div className='page-margin'>
            {loading ? (
             <section className='filter'>
                 <ul className='filter-list'>
                     <Link to='/bodycare'><h3>Body Care</h3></Link>
                     <h6>Filters</h6>
                     <li>
                         <div className='list'>
                             <Link to="#">By Skin Type</Link>
                             {/* <button onClick={() => handleButton('btnOne', button.btnOne)}>+</button> */}
                             <div className={button.btnOne ? 'menu-toggle active': 'menu-toggle'} onClick={() => handleButton('btnOne', button.btnOne)}>
                                <span></span>
                                <span></span>
                             </div> 
                         </div>
                         {!button.btnOne ? '' : 
                             <ul>
                                 <li><Link to='/bodycare?name=oily'>Oily</Link></li>
                                 <li><Link to='/bodycare?name=dry'>Dry</Link></li>
                                 <li><Link to='/bodycare?name=sensitive'>Sensitive</Link></li>
                                 <li><Link to='/bodycare?name=all'>Normal</Link></li>
                             </ul>
                         }    
                     </li>
                     <hr/>
 
                     <li>
                         <div className='list'>
                             <Link to="#">By Brand</Link>
                             {/* <button onClick={() => handleButton('btnTwo', button.btnTwo)}>+</button> */}
                             <div className={button.btnTwo ? 'menu-toggle active': 'menu-toggle'} onClick={() => handleButton('btnTwo', button.btnTwo)}>
                                <span></span>
                                <span></span>
                             </div> 
                         </div>
                         {!button.btnTwo ? '' : 
                             <ul>
                             {byBrand.map(el =><li><Link to={`/bodycare?brand=${el}`}>{el}</Link></li>)}
                             </ul>
                         }
                     </li>
                     <hr/>
 
                     <li>
                         <div className='list'>
                             <Link to="#"> By Rating</Link>
                             {/* <button onClick={() => handleButton('btnThree', button.btnThree)}>+</button> */}
                             <div className={button.btnThree ? 'menu-toggle active': 'menu-toggle'} onClick={() => handleButton('btnThree', button.btnThree)}>
                                <span></span>
                                <span></span>
                             </div> 
                         </div>
                         {!button.btnThree ? '' : 
                         <ul className='rating-check'>
                             <li>
                                 <input type='radio' name='rating' value='5' onChange={(e) => setChecked(e.target.value)}/>
                                 <span> ♥♥♥♥♥ 5.0</span>
                             </li>
                             <li>
                                 <input type='radio' name='rating' value='4' onChange={(e) => setChecked(e.target.value)}/>
                                 <span> ♥♥♥♥♡ 4.0</span>
                             </li>
                             <li>
                                 <input type='radio' name='rating' value='3' onChange={(e) => setChecked(e.target.value)}/>
                                 <span> ♥♥♥♡♡ 3.0</span>
                             </li>
                             <li>
                                 <input type='radio' name='rating' value={null} onChange={(e) => setChecked(e.target.value)}/>
                                 <span> All Ratings</span>
                             </li>
                         </ul>
                         }
                     </li>
                     <hr/>
                 </ul>
             </section>
            ) : 
            (<div className='spinner'>
                <Spinner animation="border" role="status" className='loader'></Spinner>    
            </div>)
            }
           
            <BodyFace category='body' radio={checked}/>
        </div>
    );
};

export default BodyCare;



