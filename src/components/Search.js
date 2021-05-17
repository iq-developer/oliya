import {useContext} from 'react';
import {TextContext} from './../context/textContext';

const Search = () => {

  const context = useContext(TextContext);

  return (
    <>
      <div className="search">
          <form>
            <input type="search" className="search" size="1" placeholder="{context.ua ? `Знайти` : `Найти`}" />
          </form>
      </div>
    </>
  );
}

export default Search;
