import { useState } from 'react';

const Order = () => {

  const option = "Нова пошта";
  const option1 = "Самовивіз з офісу (пр. Чорновола 63)";
  const option2 = "Самовивіз з кафе Грін (вул. Братів Рогатинців, 5)";
  const option3 = 'На відділення Нової Пошти';
  const option4 = "Курь'єрська доставка за адресою";

  const [delivery, setDelivery] = useState(option);
  const [deliveryOption, setDeliveryOption] = useState(option3);
  const [user, setUser] = useState({});

  const handleDeliveryChange = (event) => {
    setDelivery(event.target.value);
  }
  const handleDeliveryOptionChange = (event) => {
    setDeliveryOption(event.target.value);
  }
  // универсальный хендлер для всех значений пользователя 
  const handleChange = (event) => {
    setUser(prevState => {
      return {...prevState, [event.target.name]: event.target.value}
    });
  }

  return (
    <article className="block-order">
      <form>
        <h2>Спосіб доставки</h2>
        <input
          name="delivery"
          type="radio"
          value={option}
          checked={delivery === option}
          onChange={handleDeliveryChange}
        /> {option}<br />
        <input
          name="delivery"
          type="radio"
          value={option1}
          checked={delivery === option1}
          onChange={handleDeliveryChange}
        /> {option1}<br />
        <input
          name="delivery"
          type="radio"
          value={option2}
          checked={delivery === option2}
          onChange={handleDeliveryChange}
        /> {option2}<br /><br />

        <input
          name="name"
          value={user.name}
          onChange={handleChange}
          />
        <label> Ім'я отримувача<br /></label>
        <input
          name="familyName"
          value={user.familyName}
          onChange={handleChange}
          />
        <label> Призвіще отримувача<br /></label>
        <input
          name="phone"
          value={user.phone}
          onChange={handleChange}
          />
        <label> Телефон отримувача<br /></label>

        <div hidden={delivery !== option}>
          <h3>Відправляти на відділення або курьерськой доставкою за вашою адресою?</h3>

          <input
            name="deliveryOption"
            type="radio"
            value={option3}
            checked={deliveryOption === option3}
            onChange={handleDeliveryOptionChange}
          /> {option3} <br />
          <input
            name="deliveryOption"
            type="radio"
            value={option4}
            checked={deliveryOption === option4}
            onChange={handleDeliveryOptionChange}
          /> {option4} <br /><br />

          <input
            name="branchNumber"
            value={user.branchNumber}
            onChange={handleChange}
            hidden={deliveryOption === option4}
            size="1"
            />
          <label hidden={deliveryOption === option4}> Номер відділення Нової Пошти<br /></label>
          <input
            name="address"
            value={user.address}
            onChange={handleChange}
            hidden={deliveryOption === option3}
            />
          <label hidden={deliveryOption === option3}> Адреса для доставки курьєром<br /></label>

          <input
            name="city"
            value={user.city}
            onChange={handleChange}
            list="cities"
            />
          <label> Город<br /></label>
          <datalist id="cities">
            <option value="Львів" />
            <option value="Київ" />
          </datalist>
          <input
            name="region"
            value={user.region}
            onChange={handleChange}
            />
          <label> Область<br /></label>
        </div>
      </form>
    </article>
  );

}

export default Order;
