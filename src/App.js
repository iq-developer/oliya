import './App.css';
import HomePage from './routes/HomePage';
import CartPage from './routes/CartPage';
import {Route, Switch} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {TextContext} from './context/textContext';
import database from './oliya-db.json';

function App() {
  const [cart, setCart] = useState({}); // {priceId: amount, priceId: amount...}
  const [sum, setSum] = useState(0);
  const [amount, setAmount] = useState(0);

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

  useEffect(() => {setAmount(Object.values(cart).reduce((sum, current) => sum + (+!!current), 0))}, [cart]);

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

  return (
    <TextContext.Provider value={{
      cart,
      setCart,
      sum,
      amount,
      handleInputChange,
      handlePlus,
      handleMinus
    }}>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/home' component={HomePage} />
        <Route path='/cart' component={CartPage} />
        <Route path='/' render={() =>(<div>404</div>
        )} />
      </Switch>    
    </TextContext.Provider>
  );
}

export default App;
