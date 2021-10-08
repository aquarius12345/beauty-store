import './App.css';
import api from './configs/api';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Today from './components/Today';
import Home from './views/Home';



function App() {

  //  const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //       getProducts();
  //   }, []);

  //   const getProducts = async() => {
  //       try {
  //           const result = await api.get('/product/all');
  //           console.log('result', result);
  //           setProducts(result.data);
  //       } catch(error) {
  //           console.error(error.response);
  //       }
  //   }

  return (
    <div className="App">
      <Today />
      <Header />
      {/* <Switch>
        <Route exact path='/' component={Home} />
      </Switch> */}
    </div>
  );
}

export default App;
