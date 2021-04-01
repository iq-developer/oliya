import {useContext} from 'react';
import { TextContext } from '../context/textContext';

const Tr = ({prices, id, handleInputChangeBlock, cart, setCart}) => {

  const themeContext = useContext(TextContext);
  console.log('themeContext: ', themeContext);

  const handleInputChange = (event) => {
    handleInputChangeBlock(event.target.name, event.target.value);
  }

  const handlePlus = (event) => {
    event.preventDefault();
    const newValue = cart[event.target.id] + 1;
    setCart(prevState => {
      return {...prevState, [event.target.id]: newValue};
    })
    return;
  }

  const handleClick = (event) => {
    event.preventDefault();
    themeContext.onChangeTheme(themeContext.theme === 'light' ? 'dark' : 'light');
  }

  return Object.entries(prices).map(([priceKey, priceValue]) => {
    const priceId = `${id}-${priceKey}`;
    return (
      <tr key={priceKey}>
        <td className="volume">{priceKey}<small> мл:</small></td>
        <td className="price"><strong>{priceValue}</strong><small> грн</small></td>
        <td className="form">
          <form>
            <button onClick={handleClick}>-</button>
            <input name={priceId} size="1" value={cart[priceId] || ''} onChange={handleInputChange} />
            <button id={priceId} onClick={handlePlus}>+</button>
          </form>
        </td>
      </tr>
    )
  });
}

export default Tr;