import logoImg from './../../assets/logo.png';
import menuImg from './../../assets/menu.png';
import cartImg from './../../assets/cart.png';
import Block from './../../components/Block';
import {Link} from 'react-router-dom';
import {TextContext} from './../../context/textContext';
import {useContext} from 'react';

function HomePage() {

  const context = useContext(TextContext);

  return (
    <>
      <nav>
        <div className="inner">
          <Link to="/"><img src={logoImg} className="logo" alt="Лого" /></Link>
          <img src={menuImg} className="menu" alt="Меню" />
          <form>
            <input type="search" className="search" size="1" placeholder="Знайти" />
          </form>
        </div>
      </nav>

      <main className="grid">

      </main>
    </>
  );
}

export default HomePage;
