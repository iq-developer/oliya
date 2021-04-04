import {useContext} from 'react';
import { TextContext } from '../context/textContext';

const Tr = ({prices, id}) => {

  const context = useContext(TextContext);



  return Object.entries(prices).map(([priceKey, priceValue]) => {
    const priceId = `${id}-${priceKey}`;
    return (
      <tr key={priceKey}>
        <td className="volume">{priceKey}<small> мл:</small></td>
        <td className="price"><strong>{priceValue}</strong><small> грн</small></td>
        <td className="form">
          <form>
            <button name={priceId} onClick={context.handleMinus}>-</button>
            <input name={priceId} size="1" placeholder='0' value={context.cart[priceId] || ''} onChange={context.handleInputChange} />
            <button name={priceId} onClick={context.handlePlus}>+</button>
          </form>
        </td>
      </tr>
    )
  });
}

export default Tr;