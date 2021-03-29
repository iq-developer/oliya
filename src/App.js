import './App.css';
import logo from './assets/logo.png';
import menu from './assets/menu.png';
import cart from './assets/cart.png';
import database from './oliya-db.json';
import { useState } from 'react';

const Tr = ({prices, id, plus}) => { //TODO: передать функцию plus через пропсы от App

  return Object.entries(prices).map(([priceKey, priceValue]) => {
    return (
      <tr key={priceKey}>
        <td className="volume">{priceKey}<small> мл:</small></td>
        <td className="price"><strong>{priceValue}</strong><small> грн</small></td>
        <td className="form">
          <form>
            <button>-</button>
            <input size="1" placeholder=" 0" />
            <button id={id + '-' + priceKey} onClick={plus}>+</button>
          </form>
        </td>
      </tr>
    )
  });
}

const Block = () => {
  return Object.entries(database.products).map(([key, value]) => {
    return (
      <article className="block" key={key}>
        <div className="title">
          <img src={value.img} alt={`${value.title}`} className="float" />
          <h2>{value.category} <br /><strong>{value.title}</strong></h2>
        </div>
        <table className="table">
          <tbody>
            <Tr prices={value.price} id={value.id} />
          </tbody>
        </table>
      </article>
    );
})};

function App() {
  const [amount, setAmount] = useState(0);
  const [sum, setSum] = useState(0);

  const plus = (event) => {
    event.preventDefault();
    console.log(event.target.id)
    setAmount(prev => prev + event.target.value); //если поменяли значение прямо в инпуте
    return;
  }

  return (
    <>
      <nav>
        <div className="inner">
          <a href="#"><img src={logo} className="logo" alt="Лого" /></a>
          <a href="#"><img src={menu} className="menu" alt="Меню" /></a>
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
              <button className="white-button"><img src={cart} alt="Корзина замовлення" /></button>
            </form>
            <div className="amount">товаров: <strong>{amount}</strong> шт</div>
            <div className="sum">на сумму: <strong>{sum}</strong> грн</div>
          </div>
        </div>
      </header>

      <main>
        <Block />
      </main>
    </>
  );
}

export default App;
