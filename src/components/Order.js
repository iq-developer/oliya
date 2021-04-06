import { useState } from 'react';

const Order = () => {

  const [option, setOption] = useState(false);

  const handleRadioChange = () => {
    return;
  }

  return (
    <article className="block fullWidth">
          <form>
            <h2>Спосіб доставки</h2>
            <input
              name="lang"
              type="radio"
              value="option1"
              checked={option}
              onChange={handleRadioChange}
            /> Самовивіз з офісу (пр. Чорновола 63)<br />
            <input
              name="lang"
              type="radio"
              value="option2"
              checked={option}
              onChange={handleRadioChange}
            /> Самовивіз кафе Грін (вул. Братів Рогатинців, 5) <br />
            <input
              name="lang"
              type="radio"
              value="option3"
              checked={option}
              onChange={handleRadioChange}
            /> Нова почта <br />
          </form>
        </article>
  );

}

export default Order;
