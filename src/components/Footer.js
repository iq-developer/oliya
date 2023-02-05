import {useContext} from 'react';
import {TextContext} from './../context/textContext';

const Footer = () => {

  const context = useContext(TextContext);

  return (
    <footer>
      <p><strong> TM "Їжа як ліки". </strong></p>
      <div className="phone">
        <a href="tel:+380676751442">+38&nbsp;(067)&nbsp;67-51-442</a>
      </div>
      <p>{context.ua ? `2023 ©  Дозволяється копіювання тільки з посиланням на сайт.` : `2023 ©  Разрешается копирование только со ссылкой на сайт.`}</p>
  </footer>
  );
}

export default Footer;
