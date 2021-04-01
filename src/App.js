import './App.css';
import logoImg from './assets/logo.png';
import menuImg from './assets/menu.png';
import cartImg from './assets/cart.png';
import { useState, useEffect } from 'react';
import { TextContext } from './context/textContext';
import Block from './components/Block';

function App() {
  const [cart, setCart] = useState({}); // {priceId: amount, priceId: amount...}
  const [sum, setSum] = useState(0);
  const [amount, setAmount] = useState(0);
  const [theme, setTheme] = useState('light');

  const handleChangeTheme = (val) => {
    setTheme(val);
  }

  const handleInputChangeFinal = (priceId, inputValue) => {
    if (+inputValue || +inputValue === 0){
      setCart(prevState => {
        return {...prevState, [priceId]: +inputValue};
      });
    }
  };

  useEffect(() => {setSum(Object.values(cart).reduce((sum, current) => sum + current , 0))}, [cart]); // добавить умножение на цену

  useEffect(() => {setAmount(Object.values(cart).reduce((sum, current) => sum + (+!!current), 0))}, [cart]);

  return (
    <TextContext.Provider value={{
      theme,
      onChangeTheme: handleChangeTheme
      }}>
      <nav>
        <div className="inner">
          <a href="#"><img src={logoImg} className="logo" alt="Лого" /></a>
          <a href="#"><img src={menuImg} className="menu" alt="Меню" /></a>
          <form>
            <input type="search" className="search" size="1" placeholder="Знайти" />
          </form>
        </div>
      </nav>

      <header>
        <div className="inner">
          <div className="phone" hidden>
            <a href="tel:+380959300302">+38(095)930-03-02</a>
          </div>
          <div className="cart">
            <form>
              <button className="white-button"><img src={cartImg} alt="Корзина замовлення" /></button>
            </form>
            <div className="amount">товарів: <strong>{amount}</strong> шт</div>
            <div className="sum">сума: <strong>{sum}</strong> грн</div>
          </div>
        </div>
      </header>

      <main>
        <Block handleInputChangeApp={handleInputChangeFinal} cart={cart} setCart={setCart} />
      </main>
    </TextContext.Provider>
  );
}

export default App;
