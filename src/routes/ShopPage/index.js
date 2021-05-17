import cartImg from './../../assets/cart.png';
import Block from './../../components/Block';
import Nav from './../../components/Nav';
import Footer from './../../components/Footer';
import {Link} from 'react-router-dom';
import {TextContext} from './../../context/textContext';
import {useContext} from 'react';
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

function ShopPage() {

  const context = useContext(TextContext);

  // const CartButton = () => {
  //   const notify = () => toast.error("Спочатку у кошик треба додати товари");
  //   const handleClick = () => {
  //     if (true) {

  //     } else {
  //       notify();
  //     }
  //   }
  //   return (
  //     <div>
  //       <button onClick={handleClick}>Notify!</button>

  //       <ToastContainer />
  //     </div>
  //   );
  // }

  console.log('context.amount: ', context.amount);
  console.log('context.cart: ', context.cart);

  return (
    <>
      <Nav />

      <header hidden={!context.amount} >
        <div className="inner">
          <div className="cart">
            <Link className="button white-button" to="cart"><img src={cartImg} alt="Корзина замовлення" /></Link>
            <div className="amount">{context.ua ? "товарів:" : "товаров:"} <strong>{context.amount}</strong> шт</div>
            <div className="sum">{context.ua ? "сума:" : "сумма:"} <strong>{context.sum}</strong> грн</div>
          </div>
        </div>
      </header>

      <main className="grid content">
        <Block />
      </main>

      <Footer />
    </>
  );
}

export default ShopPage;
