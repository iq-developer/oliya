import {useContext} from 'react';
import { TextContext } from '../context/textContext';

const Tr = ({prices, id, handleInputChangeBlock, cart, setCart}) => {

  const handleInputChange = (event) => {
    handleInputChangeBlock(event.target.name, event.target.value);
  }

  const themeContext = useContext(TextContext);

  const handlePlus = (event) => {
    event.preventDefault();
    themeContext.onPlus(event);
  }

  const handleMinus = (event) => {
    event.preventDefault();
    themeContext.onMinus(event);
  }

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   themeContext.onChangeTheme(themeContext.theme === 'light' ? 'dark' : 'light');
  // }

  return Object.entries(prices).map(([priceKey, priceValue]) => {
    const priceId = `${id}-${priceKey}`;
    return (
      <tr key={priceKey}>
        <td className="volume">{priceKey}<small> мл:</small></td>
        <td className="price"><strong>{priceValue}</strong><small> грн</small></td>
        <td className="form">
          <form>
            <button name={priceId} onClick={handleMinus}>-</button>
            <input name={priceId} size="1" value={cart[priceId] || ''} onChange={handleInputChange} />
            <button name={priceId} onClick={handlePlus}>+</button>
          </form>
        </td>
      </tr>
    )
  });
}

export default Tr;