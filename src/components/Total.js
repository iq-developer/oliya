import {useContext} from 'react';
import {TextContext} from '../context/textContext';

const Total = () => {

  const context = useContext(TextContext);

  return (
    <article className="block fullWidth total" >
      <div className="sum">сума: <strong>{context.sum}</strong> грн</div>
      <div className="amount">товарів: <strong>{context.amount}</strong> шт</div>
    </article>
  );
}

export default Total;
