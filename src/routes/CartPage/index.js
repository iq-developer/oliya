import CartBlock from './../../components/CartBlock';
import Order from './../../components/Order';
import returnImg from './../../assets/return.png';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const CartPage = () => {

  return (
    <>
    <header>
        <div className="inner">
          <Link to="/"><button className="white-button"><img src={returnImg} alt="Повернутись до інтернет-магазину" /></button></Link>
          <h1 className="title">Кошик</h1>
        </div>
      </header>
      <main className="cart-page">
        <CartBlock />
        <Order />
      </main>
    </>

  );
}

export default CartPage;
