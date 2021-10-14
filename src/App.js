import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Today from './components/Today';
import Home from './views/Home';
import Signup from './views/Signup';
import Logout from './views/Logout';
import BodyCare from './views/BodyCare';
import Details from './views/Details';
import FaceCare from './views/FaceCare';


function App() {
  return (
    <div className="App">
      <Today />
      <Header />
      <Switch>
        <Route exact path='/' component= {Home} />
        <Route exact path='/signup' component= {Signup} />
        <Route exact path='/logout' component={Logout} />
        <Route exact path='/bodycare' component={BodyCare} />
        <Route exact path='/product-detail/:id' component={Details} />
        <Route exact path='/face-care' component={FaceCare} />
      </Switch>
    </div>
  );
}

export default App;
