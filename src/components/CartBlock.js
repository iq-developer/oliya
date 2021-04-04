import database from '../oliya-db.json';
import {useContext} from 'react';
import { TextContext } from '../context/textContext';

const CartBlock = () => {

  const context = useContext(TextContext);

  return Object.entries(context.cart).map(([key, value]) => { 
    console.log('key:', key); // priceValue
    console.log('value:', value); // сколько штук 
    return (
      
      <article className="block" key={key}>

        {/* <div className="title">
          <img src={value.img} alt={`${value.title}`} className="float" />
          <h2>{value.category} <br /><strong>{value.title}</strong></h2>
        </div> */}


      </article>
    );
})};

export default CartBlock;