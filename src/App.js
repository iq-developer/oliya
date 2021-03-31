import './App.css';
import logoImg from './assets/logo.png';
import menuImg from './assets/menu.png';
import cartImg from './assets/cart.png';
import database from './oliya-db.json';
import { useState, useEffect } from 'react';

const Tr = ({prices, id, handleInputChangeBlock, cart, setCart}) => {

  const handleInputChange = (event) => {
    handleInputChangeBlock(event.target.name, event.target.value);
  }

  const handlePlus = (event) => { //доделать потом
    event.preventDefault();
    // setCart(prevState => {
    //   return {...prevState, [priceId]: +inputValue};
    // })
    return;
  }

  return Object.entries(prices).map(([priceKey, priceValue]) => {
    const priceId = `${id}-${priceKey}`;
    return (
      <tr key={priceKey}>
        <td className="volume">{priceKey}<small> мл:</small></td>
        <td className="price"><strong>{priceValue}</strong><small> грн</small></td>
        <td className="form">
          <form>
            <button>-</button>
            <input name={priceId} size="1" value={cart[priceId] || ''} onChange={handleInputChange} />
            <button id={priceId} onClick={handlePlus}>+</button>

          </form>
        </td>
      </tr>
    )
  });
}

const Block = ({handleInputChangeApp, cart, setCart}) => {
  return Object.entries(database.products).map(([key, value]) => {
    return (
      <article className="block" key={key}>
        <div className="title">
          <img src={value.img} alt={`${value.title}`} className="float" />
          <h2>{value.category} <br /><strong>{value.title}</strong></h2>
        </div>
        <table className="table">
          <tbody>
            <Tr prices={value.price} id={value.id} handleInputChangeBlock={handleInputChangeApp} cart={cart} setCart={setCart} />
          </tbody>
        </table>
      </article>
    );
})};

function App() {
  const [cart, setCart] = useState({}); // {priceId: amount, priceId: amount...}
  const [sum, setSum] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleInputChangeFinal = (priceId, inputValue) => {
    if (+inputValue || +inputValue === 0){
      setCart(prevState => {
        return {...prevState, [priceId]: +inputValue};
      });
    }
  };

  useEffect(() => {setSum(Object.values(cart).reduce((sum, current) => sum + current, 0))}, [cart]);

  useEffect(() => {setAmount(Object.values(cart).reduce((sum, current) => sum + (+!!current), 0))}, [cart]);

  return (
    <>
      <nav>
        <div className="inner">
          <a href="#"><img src={logoImg} className="logo" alt="Лого" /></a>
          <a href="#"><img src={menuImg} className="menu" alt="Меню" /></a>
          <form>
            <input type="search" className="search" size="1" placeholder="Пошук по сайту" />
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
            <div className="amount">товаров: <strong>{amount}</strong> шт</div>
            <div className="sum">на сумму: <strong>{sum}</strong> грн</div>
          </div>
        </div>
      </header>

      <main>
        <Block handleInputChangeApp={handleInputChangeFinal} cart={cart} setCart={setCart} />
      </main>
    </>
  );
}

export default App;
