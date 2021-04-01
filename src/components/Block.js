import Tr from './Tr';
import database from '../oliya-db.json';

const Block = ({handleInputChangeApp, cart, setCart}) => {
  return Object.entries(database.products).map(([key, value]) => {
    return (
      <article className="block" key={key}>
        <div className="title">
          <img src={value.img} alt={`${value.title}`} className="float" />
          <h2>{value.category} <br /><strong>{value.title}</strong></h2>
        </div>
        <table className="table">
          <tbody>
            <Tr prices={value.price} id={value.id} handleInputChangeBlock={handleInputChangeApp} cart={cart} setCart={setCart} />
          </tbody>
        </table>
      </article>
    );
})};

export default Block;