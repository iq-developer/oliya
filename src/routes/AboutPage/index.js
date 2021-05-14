import logoImg from './../../assets/logo.png';
import menuImg from './../../assets/menu.png';
import cartImg from './../../assets/cart.png';
import Block from './../../components/Block';
import Nav from './../../components/Nav';
import {Link} from 'react-router-dom';
import {TextContext} from './../../context/textContext';
import {useContext} from 'react';

function AboutPage() {

  const context = useContext(TextContext);

  return (
    <>
      <Nav />

      <header>
        <div className="inner">
          <div className="phone" hidden>
            <a href="tel:+380959300302">+38(095)930-03-02</a>
          </div>
          <div className="cart">
            <Link to="cart"><button className="white-button"><img src={cartImg} alt="Корзина замовлення" /></button></Link>
            <div className="amount">товарів: <strong>{context.amount}</strong> шт</div>
            <div className="sum">сума: <strong>{context.sum}</strong> грн</div>
          </div>
        </div>
      </header>

      <main className="about">
        <h1>Про нас</h1>
        <p>Несколько лет назад мы мы попробовали льняное масло и оно нам очень понравилось.</p>
        <p>Мы и раньше много слышали о его пользе для здоровья, и высоком содержании Омега-9, и это было целое открытие для нас тогда&nbsp; - &laquo;Вау, наконец мы нашли замечательный продукт!&raquo;.</p>
        <p>Но одна вещь в том масле немного мешала - легкий привкус горечи.</p>
        <p>&laquo;Ну, это особенность льняного масла, оно должно быть с горчинкой&raquo;,- думали мы.</p>
        <p>Льняное масло купленное в аптеке вообще было ужасно горьким. &laquo;Зато оно лекарственное&raquo; - думал я.</p>
        <p>Но однажды кто-то угостил нас свежеотжатым льняным маслом. И, &laquo;О, чудо!&raquo; - в нем не было горечи.</p>
        <p>Мы не могли поверить. &laquo;Это точно льняное масло?&raquo;</p>
        <p>Оно было совсем другим &mdash; с совершенно чистым вкусом и более сдержанным травяным ароматом.</p>
        <p>Мы задались вопросом, почему все известные нам льняные масла &mdash; горчили?</p>
        <p>Мы ведь покупали настоящие, <strong>нерафинированные </strong>масла. Наверное, самые лучшие, какие можно было найти на тот момент.</p>
        <p>Мы стали искать причину. Мы провели целое исследование. И, наконец, разобрались.</p>
        <p><strong>Что конкретно мы выяснили: </strong>Льняное масло очень чувствительно к нагреванию, и в тепле сразу начинает окисляться</p>
        <p>Другие сыродавленные масла тоже быстро окисляются, но льняное быстрее всех.</p>
        <p><strong>Открытие №1. А значит, его нельзя долго хранить.</strong></p>
        <p>Если льняное масло стоит много дней при комнатной температуре в магазине или аптеке &mdash; оно полностью прогоркшее.</p>
        <p>Да, на нем дальше написано &quot;холодный отжим, Extra Virgin, срок хранения 1 год&quot;. Но оно уже окисленное.</p>
        <p>Для пропитки дерева такое масло прекрасно подходит. Для употребления в пищу &mdash; не очень.</p>
      </main>
    </>
  );
}

export default AboutPage;
