import CartBlock from './../../components/CartBlock';
import Order from './../../components/Order';
import Sum from '../../components/Total';
import returnImg from './../../assets/return.png';
import {Link} from 'react-router-dom';

const CartPage = () => {

  return (
    <>
    <header>
        <div className="inner">
          <Link to="/shop"><button className="white-button"><img src={returnImg} alt="Повернутись до інтернет-магазину" /></button></Link>
          <h1 className="title">Кошик</h1>
        </div>
      </header>
      <main className="cart-page">
        <CartBlock />
        <Sum />
        <Order />
      </main>
    </>

  );
}

export default CartPage;
