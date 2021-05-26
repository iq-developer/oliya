import Nav from './../../components/Nav';
import Footer from './../../components/Footer';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {

  return (
    <>
      <Helmet>
        <title>{context.ua ? `Не вдалось відправити ваше замовлення` : `Не удалось отправить ваш заказ`}</title>
        <meta name="theme-color" content="red" />
      </Helmet>
      <Nav />
      <main className="about content">

        <h1>{context.ua ? `` : ``}Не вдалось відправити ваше замовлення</h1>
        <p>{context.ua ? `` : ``}Будь ласка зателефонуйте або напишить нам, про це.</p>
        <p>{context.ua ? `` : ``}Ми будемо вам дуже вдячні, та швидко все виправимо.</p>
        <p>{context.ua ? `` : ``}Адміністратор сайту (тел/вайбер): <b><a href="tel:+380959300302">+38&nbsp;(095)&nbsp;930-03-02</a></b></p>
      </main>
      <Footer />
    </>

  );
}

export default ErrorPage;
