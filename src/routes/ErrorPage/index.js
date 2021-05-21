import Nav from './../../components/Nav';
import Footer from './../../components/Footer';

const ErrorPage = () => {

  return (
    <>
      <Nav />
      <main className="about content">
        <h1>Сталася якась помилка :(</h1>
        <p>Будь ласка зателефонуйте або напишить нам, про це.</p>
        <p>Ми будемо вам дуже вдячні, та швидко все виправимо.</p>
        <p>Адміністратор сайту (тел/вайбер): <b><a href="tel:+380959300302">+38&nbsp;(095)&nbsp;930-03-02</a></b></p>
      </main>
      <Footer />
    </>

  );
}

export default ErrorPage;
