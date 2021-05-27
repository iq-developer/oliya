import Nav from './../../components/Nav';
import Footer from './../../components/Footer';
import {TextContext} from './../../context/textContext';
import {useContext} from 'react';
import { Helmet } from 'react-helmet';


const ErrorPage = () => {

  const context = useContext(TextContext);

  return (
    <>
      <Helmet>
        <title>{context.ua ? `Не вдалось відправити ваше замовлення` : `Не удалось отправить ваш заказ`}</title>
        <meta name="theme-color" content="red" />
      </Helmet>
      <Nav />
      <main className="page about content">

        <h2>{context.ua ? `Помилка сервера. Не вдалось відправити ваше замовлення` : `Не удалось отправить ваш заказ`}</h2>
        <p>{context.ua ? `Будь ласка зателефонуйте або напишить нам, про це.` : `Пожалуйста позвоните или напишите нам, об этом.`}</p>
        <p>{context.ua ? `Ми будемо вам дуже вдячні, та швидко все виправимо.` : `Мы будем вам очень благодарны, и быстро все исправим.`}</p>
        <p>{context.ua ? `Адміністратор сайту (тел/вайбер):` : `Администратор сайта (тел / вайбер):`} <b><a href="tel:+380959300302">+38&nbsp;(095)&nbsp;930-03-02</a></b></p>
        <br />
      </main>
      <Footer />
    </>

  );
}

export default ErrorPage;
