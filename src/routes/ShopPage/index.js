import logoImg from './../../assets/logo.png';
import menuImg from './../../assets/menu.png';
import cartImg from './../../assets/cart.png';
import Block from './../../components/Block';
import Nav from './../../components/Nav';
import {Link} from 'react-router-dom';
import {TextContext} from './../../context/textContext';
import {useContext} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ShopPage() {

  const context = useContext(TextContext);

  const CartButton = () => {
    const notify = () => toast.error("Спочатку у кошик треба додати товари");
    const handleClick = () => {
      if (true) {
        
      } else {
        notify();
      }
    }

    return (
      <div>
        <button onClick={handleClick}>Notify!</button>

        <ToastContainer />
      </div>
    );
  }

  return (
    <>
      <Nav />

      <header>
        <div className="inner">
          <div className="phone" hidden>
            <a href="tel:+380959300302">+38(095)930-03-02</a>
          </div>
          <div className="cart">
            <Link className="button white-button" to="cart"><img src={cartImg} alt="Корзина замовлення" /></Link>
            <CartButton />
            <div className="amount">товарів: <strong>{context.amount}</strong> шт</div>
            <div className="sum">сума: <strong>{context.sum}</strong> грн</div>
          </div>
        </div>
      </header>

      <main className="grid content">
        <Block />
      </main>
    </>
  );
}

export default ShopPage;
