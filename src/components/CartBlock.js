import database from '../oliya-db.json';

const CartBlock = () => {
  return Object.entries(database.products).map(([key, value]) => {   
    return (
      
      <article className="block" key={key}>
        <div className="title">
          <img src={value.img} alt={`${value.title}`} className="float" />
          <h2>{value.category} <br /><strong>{value.title}</strong></h2>
        </div>


      </article>
    );
})};

export default CartBlock;