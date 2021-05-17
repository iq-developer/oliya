import logoImg from './../assets/logo.png';
import menuImg from './../assets/menu.png';
import {useState} from 'react';
import {useContext} from 'react';
import {TextContext} from './../context/textContext';
import {Link} from 'react-router-dom';

const Nav = () => {

  const context = useContext(TextContext);

  const [menuActive, setMenuActive] = useState(false);

  const menuToggle = () => {
    setMenuActive(!menuActive);
  }

  const langToggle = () => {
    context.setUa(!context.ua);
  }

  return (
    <>
      <nav>
        <div id="top" className="inner">
          <Link to="/"><img src={logoImg} className="logo" alt="Лого" /></Link>
          <img onClick={menuToggle} src={menuImg} className="menu" alt="Меню" />
          <button onClick={langToggle} className="menu lang_selector">{context.ua ? "UA" : "RU"}</button>
        </div>
      </nav>
      <menu hidden={!menuActive}>
        <Link to="/">{context.ua ? "Главная" : "Главная"}</Link>
        <Link to="/shop">{context.ua ? "Купити" : "Купить"}</Link>
        <Link to="/about">Про нас</Link>
      </menu>
    </>
  );
}

export default Nav;
