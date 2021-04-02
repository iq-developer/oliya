import './App.css';
import HomePage from './routes/HomePage';
import CartPage from './routes/CartPage';
import {useRouteMatch, Route, Switch, Redirect} from 'react-router-dom';

function App() {
  <Switch>
    <Route path='/' exact component={HomePage} />
    <Route path='/home' component={HomePage} />
    <Route path='/cart' component={CartPage} />
    <Route path='/' render={() =>(<div>404</div>
    )} />
  </Switch>
}

export default App;
