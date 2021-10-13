import React, { useState, useEffect } from 'react';
import '../components/BodyFace';
import api from '../configs/api';
import BodyFiltered from '../components/BodyFiltered';



const BodyCareFiltered = (props) => {

    const [products, setProducts] = useState([]);
    // const [filteredProducts, setFilteredProducts] = useState([]);

    const type = props.match.params.filterType;
    console.log('type', type);

    const name = props.match.params.name;
    console.log('name', name);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async() => {
        try {
            const result = await api.get('/product/all');
            console.log('result',result);
            setProducts(result.data);
        } catch(error) {
            console.error(error.response);
        };
    };

    const bodyProducts = products.filter(el => el.category === 'body');

     return (
         <div>
             <p>Filtered page</p>
             {products.length ? (
                <BodyFiltered data={bodyProducts} filterType={type} />
             ) : null}
             
         </div>
     );
};

export default BodyCareFiltered;