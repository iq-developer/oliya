import { useState } from 'react';

const Order = () => {

  const [delivery, setDelivery] = useState('Нова пошта');
  const [deliveryOption, setDeliveryOption] = useState('Нова пошта');

  const option = "Нова пошта";
  const option1 = "Самовивіз з офісу (пр. Чорновола 63)";
  const option2 = "Самовивіз з кафе Грін (вул. Братів Рогатинців, 5)";
  const option3 = 'На відділення Нової Пошти';
  const option4 = "Курь'єрська доставка за адресою";
  const option5 = '';

  const handleDeliveryChange = (event) => {
    setDelivery(event.target.value);
  }
  const handleDeliveryOptionChange = (event) => {
    setDeliveryOption(event.target.value);
  }

  return (
    <article className="block-order">
          <form>
            <h2>Спосіб доставки {delivery}</h2>
            <input
              name="delivery"
              type="radio"
              value={option}
              checked={delivery === option}
              onChange={handleDeliveryChange}
            /> {option} <br />
            <input
              name="delivery"
              type="radio"
              value={option1}
              checked={delivery === option1}
              onChange={handleDeliveryChange}
            /> {option1} <br />
            <input
              name="delivery"
              type="radio"
              value={option2}
              checked={delivery === option2}
              onChange={handleDeliveryChange}
            /> {option2} <br /><br />

            <input /> Ім'я отримувача <br />
            <input /> Призвіще отримувача <br />
            <input /> Телефон отримувача <br />

            <h3>Відправляти на відділення або замовити курьерську доставку за вашою адресою?</h3>

            <input
              name="deliveryOption"
              type="radio"
              value={option3}
              checked={deliveryOption === option3}
              onChange={handleDeliveryOptionChange}
            /> {option4} <br />
            <input
              name="deliveryOption"
              type="radio"
              value={option4}
              checked={deliveryOption === option4}
              onChange={handleDeliveryOptionChange}
            /> {option4} <br /><br />

            <input /> Номер відділення<br />

          </form>
        </article>
  );

}

export default Order;
