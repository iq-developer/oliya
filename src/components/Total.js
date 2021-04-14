import {useContext} from 'react';
import {TextContext} from '../context/textContext';

const Total = () => {

  const context = useContext(TextContext);

  return (
    <article className="block fullWidth total" >
      <p>сума: <strong>{context.sum}</strong> грн</p>
      <p>товарів: <strong>{context.amount}</strong> шт</p>
    </article>
  );
}

export default Total;
