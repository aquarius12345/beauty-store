import React, { useState, useEffect } from 'react';
import api from '../configs/api';
import BodyFace from '../components/BodyFace';


const BodyCare = () => {
    const [products, setProducts] = useState([]);
    // const [bodyProducts, setBodyProducts] = useState([]);
    
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async() => {
        try {
            const result = await api.get('/product/all');
            setProducts(result.data);
            
        } catch(error) {
            console.error(error.response);
        };
    };

    // useEffect(() => {
    //     filterProducts();
    // }, []);


    // const filterProducts = () => {
    //     const filteredProd = products.filter(el => el.category === 'body');
    //     setBodyProducts(filteredProd);   
    // } 

    return (
        <div>
            <BodyFace data={products}/>
        </div>
    );
};

export default BodyCare;



