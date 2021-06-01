import cartImg from './../../assets/cart.png';
import Block from './../../components/Block';
import Nav from './../../components/Nav';
import Footer from './../../components/Footer';
import {Link} from 'react-router-dom';
import {TextContext} from './../../context/textContext';
import {useContext} from 'react';
import { Helmet } from 'react-helmet';

function ShopPage() {

  const context = useContext(TextContext);

  return (
    <>
      <Helmet>
        <title>{context.ua ? `Купити сиродавлену олію. Львів. Їжа як ліки` : `Купить сиродавлену масло. Львов. Еда как лекарство`}</title>
        <meta name="description" content={context.ua ? `Олія чорного кмину, конопляна, насіння гарбуза, мигдалева, чорного кунжута, волоського горіха, білого кунжута, лляна, соняшникова, кокосова.` : `Масло черного тмина, конопляное, семена тыквы, миндальное, черного кунжута, грецкого ореха, белого кунжута, льняное, подсолнечное, кокосовое.`} />
        <meta name="theme-color" content="#efd8b4" />
      </Helmet>
      <Nav />

      <header hidden={!context.amount} className="sticky">
        <div className="inner">
          <div className="cart">
            <Link className="button white-button" to="cart"><img src={cartImg} alt="Корзина замовлення" /></Link>
            <div className="amount">{context.ua ? "товарів:" : "товаров:"} <strong>{context.amount}</strong> шт</div>
            <div className="sum">{context.ua ? "сума:" : "сумма:"} <strong>{context.sum}</strong> грн</div>
          </div>
        </div>
      </header>

      <main className="grid content mT10B10">
        <Block />
      </main>

      <Footer />
    </>
  );
}

export default ShopPage;
