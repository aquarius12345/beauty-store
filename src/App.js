import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Today from './components/Today';
import Home from './views/Home';
import Signup from './views/Signup';
import Logout from './views/Logout';
import BodyCare from './views/BodyCare';
import Details from './views/Details';
import FaceCare from './views/FaceCare';
import CartPage from './views/CartPage';
import api from './configs/api';


function App() {

  const [cart, setCart] = useState([])
  console.log('cart', cart)

    useEffect(() => {
        getCart();    
    }, [])

    const getCart = async() => {
       try {
           const result = await api.get('/cart');
           console.log('cart in App',result.data.products);
           setCart(result.data.products);
       } catch(error) {
            console.error(error);
       }
    };

  return (
    <div className="App">
      <Today />
      <Header cartData={cart} getCart={getCart}/>
      <Switch>
        <Route exact path='/' render={(props)=> <Home {...props} />} />
        <Route exact path='/signup' component= {Signup} />
        <Route exact path='/logout' component={Logout} />
        <Route exact path='/bodycare' component={BodyCare} />
        <Route exact path='/product-detail/:id' render={(props)=> <Details {...props} getCart={getCart}/>} />
        <Route exact path='/face-care' component={FaceCare} />
        <Route exact path='/cart' render={(props)=> <CartPage {...props} cartData={cart} getCart={getCart}/> }/>
      </Switch>
    </div>
  );
}

export default App;
