import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import {TextContext} from '../../context/textContext';
import {useContext} from 'react';
import { Helmet } from 'react-helmet';


const Error404Page = () => {

  const context = useContext(TextContext);

  return (
    <>
      <Helmet>
        <title>{context.ua ? `Помилка 404 - на сайті немає сторінки з такою адресою` : `Ошибка 404 - на сайте нет страницы с таким адресом`}</title>
        <meta name="theme-color" content="red" />
      </Helmet>
      <Nav />
      <main className="page about content">

        <h2>{context.ua ? `Помилка 404 - на сайті немає сторінки з такою адресою` : `Ошибка 404 - на сайте нет страницы с таким адресом`}</h2>
        <p>{context.ua ? `Будь ласка надішліть адресу цієї сторінки нам на вайбер` : `Пожалуйста отправьте адрес этой страницы нам на вайбер.`}</p>
        <p>{context.ua ? `Ми будемо вам дуже вдячні, та швидко все виправимо.` : `Мы будем вам очень благодарны, и быстро все исправим.`}</p>
        <p>{context.ua ? `Адміністратор сайту (тел/вайбер):` : `Администратор сайта (тел / вайбер):`} <b><a href="tel:+380959300302">+38&nbsp;(095)&nbsp;930-03-02</a></b></p>
        <br />
      </main>
      <Footer />
    </>

  );
}

export default Error404Page;
