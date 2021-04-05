import CartBlock from './../../components/CartBlock';
import returnImg from './../../assets/return.png';
import {Link} from 'react-router-dom';

const CartPage = () => {
  return (
    <>
    <header>
        <div className="inner">
          <Link to="/"><button className="white-button"><img src={returnImg} alt="Повернутись до інтернет-магазину" /></button></Link>
          <h1 className="title">Кошик</h1>
        </div>
      </header>
      <main className="grid">
        <CartBlock />
      </main>
    </>

  );
}

export default CartPage;
