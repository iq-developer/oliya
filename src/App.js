import './App.css';
import HomePage from './routes/HomePage';
import CartPage from './routes/CartPage';
import ShopPage from './routes/ShopPage';
import AboutPage from './routes/AboutPage';
import ResultPage from './routes/ResultPage';
import ErrorPage from './routes/ErrorPage';
import {Route, Switch} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {TextContext} from './context/textContext';
import database from './oliya-db.json';
import ScrollToTop from './utils/ScrollToTop';
import ReactGA from 'react-ga';
import { useLocation,} from 'react-router-dom';

ReactGA.initialize('UA-198144083-1');

function App() {
  const location = useLocation();
  const [cart, setCart] = useState({}); // {priceId: amount, priceId: amount...}
  const [sum, setSum] = useState(0);
  const [amount, setAmount] = useState(0);
  const [ua, setUa] = useState(true); // ukrainian language by default

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  const handleInputChange = (event) => {
    const priceId = event.target.name;
    const inputValue = event.target.value;
    if (+inputValue || +inputValue === 0){
      setCart(prevState => {
        return {...prevState, [priceId]: +inputValue};
      });
    }
  };

  useEffect(() => {setSum(Object.entries(cart).reduce((sum, [priceId, amount]) => {
   const [code, priceKey] = priceId.split('-');
   const priceValue = database.products[code].price[priceKey]; //заменил на ключ БД
   return sum + amount * priceValue;
  }, 0))}, [cart]);

  useEffect(() => {setAmount(Object.values(cart).reduce((sum, current) => sum + +current, 0))}, [cart]);

  const handlePlus = (event) => {
    event.preventDefault();
    const newValue = cart[event.target.name] ? cart[event.target.name] + 1 : 1;
    setCart(prevState => {
      return {...prevState, [event.target.name]: newValue};
    });
  }

  const handleMinus = (event) => {
    event.preventDefault();
    const newValue = cart[event.target.name] ? cart[event.target.name] - 1 : '';
    setCart(prevState => {
      return {...prevState, [event.target.name]: newValue};
    });
  }

  const scroll = (e) => {
    e.preventDefault();
    window.scroll({top:820, behavior:'smooth'});
  }

  return (
    <TextContext.Provider value={{
      cart,
      setCart,
      sum,
      amount,
      handleInputChange,
      handlePlus,
      handleMinus,
      scroll,
      ua,
      setUa
    }}>
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/home' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/cart' component={CartPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/result' component={ResultPage} />
        <Route path='/error' component={ErrorPage} />
        <Route path='/' component={ErrorPage} />
      </Switch>
    </TextContext.Provider>
  );
}

export default App;
