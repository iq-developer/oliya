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
                <img src={product.img} alt={`${context.ua ? product.title : product.titleRu}`} className="float cartIcon" />
                <h2>{context.ua ? product.category : product.categoryRu}<br /><strong>{context.ua ? product.title : product.titleRu}</strong></h2>
              </div>

              <table className="desc">
                <tbody>
                  <tr>
                    <th>{context.ua ? "Об'єм" : "Объем"}</th>
                    <th>{context.ua ? "Ціна" : "Цена"}</th>
                    <th className="form">{context.ua ? "Кількість" : "Количество"} (шт)</th>
                    <th className="form additional">{context.ua ? "Сума" : "Сумма"}</th>
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
