import {useContext} from 'react';
import {TextContext} from './../context/textContext';

const Footer = () => {

  const context = useContext(TextContext);

  return (
    <footer>
      <p><strong> TM "Їжа як ліки". </strong><a href="https://www.instagram.com/oliya_com_ua/" target="_blank" rel="noopener noreferrer">{context.ua ? `Інстаграм` : `Инстаграм`} <img src="https://oliya.com.ua/img/landing/instagram_icon.jpg"  alt="Інстаграм" /></a> </p>
      <div className="phone">
        <a href="tel:+380972682232">+38&nbsp;(097)&nbsp;268-22-32</a> &nbsp; <a href="tel:+380959300302">+38&nbsp;(095)&nbsp;930-03-02</a>
      </div>
      <p>{context.ua ? `2021 ©  Дозволяється копіювання тільки з посиланням на сайт.` : `2021 ©  Разрешается копирование только со ссылкой на сайт.`}</p>
  </footer>
  );
}

export default Footer;
