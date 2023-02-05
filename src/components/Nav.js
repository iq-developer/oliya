import logoImg from './../assets/logo.png';
import logoRuImg from './../assets/logo_ru.png';
import menuImg from './../assets/menu.png';
import { useState } from 'react';
import { useContext } from 'react';
import { TextContext } from './../context/textContext';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Nav = () => {

  const context = useContext(TextContext);

  const [menuActive, setMenuActive] = useState('');

  const menuToggle = () => {
    if (!menuActive || menuActive === 'hide') {
      setMenuActive('show');
    } else setMenuActive('hide');
  }

  const langToggle = () => {
    context.setUa(!context.ua);
  }

  const location = useLocation();

  return (
    <>
      <nav>
        <div id="top" className="inner">
          <Link to="/"><img src={context.ua ? logoImg : logoRuImg} className="logo" alt={context.ua ? "Лого Їжа як ліки" : "Лого Еда как лекарство"} /></Link>

          <menu className={menuActive}>
            <Link to="/">{context.ua ? "Головна" : "Главная"}</Link>
            <Link to="/shop">{context.ua ? "Купити" : "Купить"}</Link>
            <Link to="/about">{context.ua ? "Про нас" : "О нас"}</Link>
            <Link to="/discount">{context.ua ? "Знижки" : "Скидки"}</Link>
          </menu>



          <img onClick={menuToggle} src={menuImg} className="mobile_menu" alt="Меню" />
          <button hidden={location.pathname === '/cart' ? true : false} onClick={langToggle} className="lang_selector">{context.ua ? "UA" : "RU"}</button>
        </div>


      </nav>
      
    </>
  );
}



export default Nav;
