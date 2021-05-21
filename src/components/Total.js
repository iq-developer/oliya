import {useContext} from 'react';
import {TextContext} from '../context/textContext';

const Total = () => {

  const context = useContext(TextContext);

  return (
    <article className="block total" >
      <p>{context.ua ? `Товарів:` : `Товаров:`} <strong>{context.amount}</strong> шт <br />
       {context.ua ? `Сума:` : `Сумма:`} <strong>{context.sum}</strong> грн</p>
    </article>
  );
}

export default Total;
