import CartBlock from './../../components/CartBlock';
import Order from './../../components/Order';
import Sum from '../../components/Total';
import returnImg from './../../assets/return.png';
import {Link} from 'react-router-dom';
import Nav from './../../components/Nav';
import Footer from './../../components/Footer';
import { Helmet } from 'react-helmet';

const CartPage = () => {

  return (
    <>
      <Helmet>
        <title>Кошик товарів. Їжа як ліки</title>
        <meta name="description" content="Оформити ваше замовлення" />
        <meta name="theme-color" content="#efd8b4" />
      </Helmet>
      <Nav />
      <header>
        <div className="cart-page">
          <Link to="/shop"><button className="white-button"><img src={returnImg} alt="Повернутись до інтернет-магазину" /></button></Link>
          <h1 className="title">Кошик</h1>
        </div>
      </header>
      <main className="cart-page">
        <CartBlock />
        <Sum />
        <Order />
      </main>
      <Footer />
    </>

  );
}

export default CartPage;
