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

  return (
    <>
      <nav>
        <div className="inner">
          <Link to="/"><img src={logoImg} className="logo" alt="Лого" /></Link>
          <img onClick={menuToggle} src={menuImg} class="menu" alt="Меню" />
          <form>
            <input type="search" className="search" size="1" placeholder="Знайти" />
          </form>
        </div>
      </nav>
      <menu hidden={!menuActive}>
        <Link onClick={menuToggle} to="/">Главная</Link>
        <Link to="/shop">Купити</Link>
        <Link to="/about">Про нас</Link>
      </menu>
    </>
  );
}

export default Nav;
