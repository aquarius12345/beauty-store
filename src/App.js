import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Today from './components/Today';
import Home from './views/Home';



function App() {
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
