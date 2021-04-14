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

  
  const handleChange = (event) => {
    setUser(prevState => {
      return {...prevState, [event.target.name]: event.target.value}
    });
  }
  const handleCheckbox = (event) => {
    setUser(prevState => {
      return {...prevState, [event.target.name]: event.target.checked}
    });
  }

  const handlePhone = (event) => {
    setUser(prevState => {
      return {...prevState, phone: event.target.value, contactPhone: event.target.value, viber: event.target.value}
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //alert('submited :)');
    console.log('submited');

    //if(){}

    return null;
  }

  return (
    <article className="block-order fullWidth">
    {JSON.stringify(user, null, '  ')};

      <form>
        
        <h2>Спосіб доставки</h2>
        <input
          name="delivery"
          type="radio"
          value={option}
          checked={delivery === option}
          onChange={handleDeliveryChange}
        /> {option}
        <br />
        <input
          name="delivery"
          type="radio"
          value={option1}
          checked={delivery === option1}
          onChange={handleDeliveryChange}
        /> {option1}
        <br />
        <input
          name="delivery"
          type="radio"
          value={option2}
          checked={delivery === option2}
          onChange={handleDeliveryChange}
        /> {option2}
        <br />
        <div hidden={delivery !== option}>
          <h3>Відправка на відділення або на адресу</h3>
          <input
            name="deliveryOption"
            type="radio"
            value={option3}
            checked={deliveryOption === option3}
            onChange={handleDeliveryOptionChange}
          /> {option3}
          <br />
          <input
            name="deliveryOption"
            type="radio"
            value={option4}
            checked={deliveryOption === option4}
            onChange={handleDeliveryOptionChange}
          /> {option4}
          <br />
          <br hidden={deliveryOption === option4} />
          <label hidden={deliveryOption === option4} className="w220 float"> № відділення або поштомату</label>
          <input
            name="branchNumber"
            value={user.branchNumber}
            onChange={handleChange}
            hidden={deliveryOption === option4}
            size="4"
          />
          <br />
          <label hidden={deliveryOption === option3} className="w220 float"> Адреса</label>
          <input
            name="address"
            value={user.address}
            onChange={handleChange}
            hidden={deliveryOption === option3}
          />
          <br />
          <label className="w220 float"> Місто<br /></label>
          <input
            name="city"
            value={user.city}
            onChange={handleChange}
            list="cities"
            />
          <datalist id="cities">
            <option value="Львів" />
            <option value="Київ" />
          </datalist>
          <br />
          <label className="w220 float"> Область<br /></label>
          <input
            name="region"
            value={user.region}
            onChange={handleChange}
          />
        </div>

        <h3>Відомості про одержувача </h3>
        <label className="w220 float"> Телефон</label>
        <input
          name="phone"
          value={user.phone}
          onChange={handlePhone}
        />
        <br />
        <label className="w220 float"> Ім'я</label>
        <input
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <br /> 
        <label className="w220 float" hidden={delivery !== option}> Призвіще</label>
        <input
          name="familyName"
          value={user.familyName}
          onChange={handleChange}
          hidden={delivery !== option}
        />
        <br hidden={delivery !== option} />
        <label className="w220 float" hidden={delivery !== option}> По-батькові</label>
        <input
          name="fathersName"
          value={user.fathersName}
          onChange={handleChange}
          hidden={delivery !== option}
        />
        <br hidden={delivery !== option} />
        <h3>Як з вами контактувати</h3>
        <label className="w220 float">
        <input
          name="isContactPhone"
          type="checkbox"
          value="isContactPhone"
          checked={user.isContactPhone}
          onChange={handleCheckbox}
        />
        &nbsp;Телефон&nbsp;</label>
        <input
          name="contactPhone"
          value={user.contactPhone}
          onChange={handleChange}
          hidden={!user.isContactPhone}
        />
        <br />
        <label className="w220 float">
        <input
          name="isViber"
          type="checkbox"
          value="isViber"
          checked={user.isViber}
          onChange={handleCheckbox}
        />
        &nbsp;Вайбер&nbsp;</label>
        <input
          name="viber"
          value={user.viber}
          onChange={handleChange}
          hidden={!user.isViber}
        />
        <br />
        <label className="w220 float">
        <input
          name="isEmail"
          type="checkbox"
          value="isEmail"
          checked={user.isEmail}
          onChange={handleCheckbox}
        />
        &nbsp;Email&nbsp;</label>
        <input
          name="email"
          value={user.email}
          onChange={handleChange}
          hidden={!user.isEmail}
        />
        <br />
        <br />
      <a href="#" className="button big" onClick={handleSubmit}>Замовити</a>
      </form>
    </article>
  );

}

export default Order;