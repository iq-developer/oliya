import logoImg from './../../assets/logo.png';
import menuImg from './../../assets/menu.png';
import cartImg from './../../assets/cart.png';
import Block from './../../components/Block';
import {Link} from 'react-router-dom';
import {TextContext} from './../../context/textContext';
import {useContext} from 'react';

function HomePage() {

  const context = useContext(TextContext);

  return (
    <>
      <nav>
        <div className="inner">
          <Link to="/"><img src={logoImg} className="logo" alt="Лого" /></Link>
          <img src={menuImg} className="menu" alt="Меню" />
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
            <Link to="cart"><button className="white-button"><img src={cartImg} alt="Корзина замовлення" /></button></Link>
            <div className="amount">товарів: <strong>{context.amount}</strong> шт</div>
            <div className="sum">сума: <strong>{context.sum}</strong> грн</div>
          </div>
        </div>
      </header>

      <main className="grid">
        <Block />
      </main>
    </>
  );
}

export default HomePage;
