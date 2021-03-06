import Nav from './../../components/Nav';
import Footer from './../../components/Footer';
import { Helmet } from 'react-helmet';

const ResultPage = () => {

  return (
    <>
      <Helmet>
        <title>Замовлення зроблено успішно</title>
        <meta name="description" content="Дякуємо за ваше замовлення" />
        <meta name="theme-color" content="#efd8b4" />
      </Helmet>
      <Nav />
      <main className="about content">
        <h1>Дякуємо за ваше замовлення</h1>
        <p>Ми зв'яжемось з вами для підтвердження замовлення на протязі 2 годин (в робочий час з 10:00 до 20:00).</p>
      </main>
      <Footer />
    </>

  );
}

export default ResultPage;
