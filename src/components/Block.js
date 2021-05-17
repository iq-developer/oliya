import Tr from './Tr';
import database from '../oliya-db.json';
import {useContext} from 'react';
import { TextContext } from '../context/textContext';

const Block = () => {

  const context = useContext(TextContext);

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
          <h2>{context.ua ? value.category : value.categoryRu} <br /><strong>{context.ua ? value.title : value.titleRu}</strong></h2>
        </div>
        <table className="table center">
          <tbody>
            <Tr prices={value.price} id={key} />
          </tbody>
        </table>
      </article>
    );
})};

export default Block;
