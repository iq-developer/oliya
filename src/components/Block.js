import Tr from './Tr';
import database from '../oliya-db.json';

const Block = () => {
  return Object.entries(database.products).map(([key, value]) => {   
    const blockClassName = () => {
      switch (value.categoryId) {
        case 1:
          return 'block';
        case 2:
          return 'block pasta';
        case 3:
          return 'block krem';
        case 4:
          return 'block zguha';
        default:
          return 'block';
      }
    }
    return (
      <article className={blockClassName()} key={key}>
        <div className="title">
          <img src={value.img} alt={`${value.title}`} className="float" />
          <h2>{value.category} <br /><strong>{value.title}</strong></h2>
        </div>
        <table className="table">
          <tbody>
            <Tr prices={value.price} id={value.id} />
          </tbody>
        </table>
      </article>
    );
})};

export default Block;