import logoImg from './../assets/logo.png';
import menuImg from './../assets/menu.png';
import {useState} from 'react';
import {useContext} from 'react';
import {TextContext} from './../context/textContext';
import {Link} from 'react-router-dom';

const Nav = () => {

  const context = useContext(TextContext);

  const [menuActive, setMenuActive] = useState('');

  const menuToggle = () => {
    if (!menuActive || menuActive=== 'hide') {
      setMenuActive('show');
    } else setMenuActive('hide');
  }

  const langToggle = () => {
    context.setUa(!context.ua);
  }

  return (
    <>
      <nav>
        <div id="top" className="inner">
          <Link to="/"><img src={logoImg} className="logo" alt={context.ua ? "Лого Їжа як ліки" : "Лого Еда как лекарство"} /></Link>

          <menu className={menuActive}>
            <Link to="/">{context.ua ? "Головна" : "Главная"}</Link>
            <Link to="/shop">{context.ua ? "Купити" : "Купить"}</Link>
            <Link to="/about">{context.ua ? "Про нас" : "О нас"}</Link>
          </menu>

          <img onClick={menuToggle} src={menuImg} className="mobile_menu" alt="Меню" />
          <button onClick={langToggle} className="lang_selector">{context.ua ? "UA" : "RU"}</button>
        </div>
      </nav>

    </>
  );
}

export default Nav;
