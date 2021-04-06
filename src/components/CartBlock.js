import database from '../oliya-db.json';
import {useContext} from 'react';
import { TextContext } from '../context/textContext';

const CartBlock = () => {

  const context = useContext(TextContext);

  return Object.entries(context.cart).map(([priceId, quantity]) => {

    const [code, priceKey] = priceId.split('-');

    const product = database.products[code];

    if (quantity) {

        return (
            <article className="block fullWidth" key={priceId}>

              <div className="title floatResponsive">
                <img src={product.img} alt={`${product.title}`} className="float cartIcon" />
                <h2>{product.category} <br /><strong>{product.title}</strong></h2>
              </div>

              <table className="desc">
                <tbody>
                  <tr>
                    <th>Об'єм</th>
                    <th>Ціна</th>
                    <th className="form">Кількість (шт)</th>
                    <th className="form additional">Сума</th>
                    <th className="form additional">Видалити</th>
                  </tr>
                  <tr>
                    <td>{priceKey}<small> мл:</small></td>
                    <td><strong>{product.price[priceKey]}</strong><small> грн</small></td>
                    <td className="form">
                      <form>
                        <button name={priceId} onClick={context.handleMinus}>-</button>
                        <input name={priceId} size="1" placeholder='0' value={context.cart[priceId] || ''} onChange={context.handleInputChange} />
                        <button name={priceId} onClick={context.handlePlus}>+</button>
                      </form>
                    </td>
                    <td className="form additional"><strong>{product.price[priceKey] * context.cart[priceId]}</strong><small> грн</small></td>
                    <td className="form additional"><button className="round">x</button></td>
                  </tr>
                </tbody>
              </table>

            </article>
      );
    } else {
      return null;
    }
})};

export default CartBlock;
