import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Today from './components/Today';
import Home from './views/Home';
import Signup from './views/Signup';
import Logout from './views/Logout';
import BodyCare from './views/BodyCare';
import BodyCareFiltered from './views/BodyCareFiltered';
import Details from './views/Details';


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
        <Route exact path='/bodycare/:filterType' component={BodyCareFiltered} />
        {/*<Route exact path='/bodycare/:params1/:params2' component={BodyCareFiltered} />  */}
      </Switch>
    </div>
  );
}

export default App;
