import {useContext} from 'react';
import {TextContext} from '../context/textContext';

const Total = () => {

  const context = useContext(TextContext);

  return (
    <article className="block fullWidth total" >
      <p>{context.ua ? `сума:` : `сумма:`} <strong>{context.sum}</strong> грн</p>
      <p>{context.ua ? `товарів:` : `товаров:`} <strong>{context.amount}</strong> шт</p>
    </article>
  );
}

export default Total;
