import database from '../oliya-db.json';
import {useContext} from 'react';
import { TextContext } from '../context/textContext';

const CartBlock = () => {

  const context = useContext(TextContext);

  return Object.entries(context.cart).map(([priceId, quantity]) => { 

    const [code, priceKey] = priceId.split('-');

    const product = database.products[code];

    return (
      
      <article className="block" key={priceId}>

        <div className="title">
          <img src={product.img} alt={`${product.title}`} className="float" />
          <h2>{product.category} <br /><strong>{product.title}</strong></h2>
        </div>

        <div className="desc form">
          <form>
            <button name={priceId} onClick={context.handleMinus}>-</button>
            <input name={priceId} size="1" placeholder='0' value={context.cart[priceId] || ''} onChange={context.handleInputChange} />
            <button name={priceId} onClick={context.handlePlus}>+</button>
          </form>
        </div>


      </article>
    );
})};

export default CartBlock;