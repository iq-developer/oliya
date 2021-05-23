import {useState, useEffect} from 'react';
import {useContext} from 'react';
import {TextContext} from './../context/textContext';
import {send} from 'emailjs-com';
import {init} from 'emailjs-com';
import credentials from './../credentials.js';
import {useHistory} from 'react-router-dom';

init(credentials.user_code);

const Order = () => {

  const history = useHistory();

  const context = useContext(TextContext);

  const option = "Нова пошта";
  const option1 = "Львів - заберу при зустричі по домовленності";
  const option2 = "Львів - самовивіз з кафе Грін (вул. Братів Рогатинців, 5)";

  const option3 = 'На відділення Нової Пошти';
  const option4 = "Курь'єрська доставка за адресою";

  const [delivery, setDelivery] = useState(option);
  const [deliveryOption, setDeliveryOption] = useState(option3);
  const [user, setUser] = useState({isContactPhone: true, isViber: true, isEmail: true});

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

  const day = () => {
    const date = new Date();
    let dateOfMonth = date.getDate();
    dateOfMonth = dateOfMonth < 10 ? '0' + dateOfMonth : dateOfMonth;
    let month = (date.getMonth() + 1);
    month = month < 10 ? '0' + month : month;
    return `${dateOfMonth}.${month}`;
  }

  const orderHTML = context.order.reduce((accum, current) => accum + current + '<br />', '');

  //EmailJS start
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',

    delivery: '',
    deliveryOption: '',
    branchNumber: '',
    address: '',
    city: '',
    region: '',

    phone: '',
    firstName: '',
    familyName: '',
    fathersName: '',

    contactPhone: '',
    viber: '',
    email: '',

    isContactPhone: '',
    isViber: '',
    isEmail: '',

    date: day(),
    order: orderHTML,
    amount: context.amount,
    sum: context.sum,
    lang: context.ua ? 'UA' : 'RU',
  });

  const [requiredFields, setRequiredFields] = useState({
    branchNumber: true,
    address: false, // только при Курь'єрська доставка
    city: true,
    region: true,

    phone: true,
    firstName: true,
    familyName: true,
    fathersName: false, // только при Курь'єрська доставка

    contactPhone: true,
    viber: true,
    email: true,
  });

  const [errorFields, setErrorFields] = useState({});

  const formVerification = () => { // проверяем только заполненность полей
    Object.entries(requiredFields).map(([key, value]) => {
      if (value) { // поле обязательное
        if (!user[key]) { // поле не заполнено

          errorFields[key] = 'red'; // НЕЛЬЗЯ МУТИРОВАТЬ ОБЪЕКТ?
        }
      }
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (true) { // add conditions of filling forms
      send(
        credentials.service_code,
        credentials.template_code,
        toSend,
        credentials.user_code,
      )
      .then((response) => {
        history.push('/result');
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        history.push('/error');
        console.log('FAILED...', err);
      });
    } else {
      // show error + mark fields with red border
    }

  };

  useEffect(() => {
    setToSend({...toSend, ...user, delivery, deliveryOption});
  }, [user, delivery, deliveryOption, toSend]); // toSend added

  //EmailJS end

  return (
    <article className="block-order">

    <form onSubmit={onSubmit}>

        <h2>Спосіб доставки</h2>
        <label><input
          name="delivery"
          type="radio"
          value={option}
          checked={delivery === option}
          onChange={handleDeliveryChange}
        /> {option}</label>
        <br />
        <label><input
          name="delivery"
          type="radio"
          value={option1}
          checked={delivery === option1}
          onChange={handleDeliveryChange}
        /> {option1}</label>
        <br />
        <label><input
          name="delivery"
          type="radio"
          value={option2}
          checked={delivery === option2}
          onChange={handleDeliveryChange}
        /> {option2}</label>
        <br />
        <div hidden={delivery !== option}>
          <h3>Відправка на відділення або на адресу</h3>
          <label><input
            name="deliveryOption"
            type="radio"
            value={option3}
            checked={deliveryOption === option3}
            onChange={handleDeliveryOptionChange}
          /> {option3}</label>
          <br />
          <label><input
            name="deliveryOption"
            type="radio"
            value={option4}
            checked={deliveryOption === option4}
            onChange={handleDeliveryOptionChange}
          /> {option4}</label>
          <br />
          <br hidden={deliveryOption === option4} />


          <label htmlFor="branchNumber" hidden={deliveryOption === option4} className="w220 float"> № відділення або поштомату</label>
          <input
            id="branchNumber"
            name="branchNumber"
            value={user.branchNumber}
            onChange={handleChange}
            hidden={deliveryOption === option4}
            size="4"
            className={errorFields.branchNumber}
          />
          <br />
          <label htmlFor="address" hidden={deliveryOption === option3} className="w220 float"> Адреса</label>
          <input
            id="address"
            name="address"
            value={user.address}
            onChange={handleChange}
            hidden={deliveryOption === option3}
          />
          <br />
          <label htmlFor="city" className="w220 float"> Місто<br /></label>
          <input
            id="city"
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
          <label htmlFor="region" className="w220 float"> Область<br /></label>
          <input
            id="region"
            name="region"
            value={user.region}
            onChange={handleChange}
          />
        </div>

        <h3>Відомості про одержувача </h3>
        <label htmlFor="phone" className="w220 float"> Телефон</label>
        <input
          id="phone"
          name="phone"
          value={user.phone}
          onChange={handlePhone}
        />
        <br />
        <label htmlFor="firstName" className="w220 float"> Ім'я</label>
        <input
          id="firstName"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="familyName" className="w220 float" hidden={delivery !== option}> Призвіще</label>
        <input
          id="familyName"
          name="familyName"
          value={user.familyName}
          onChange={handleChange}
          hidden={delivery !== option}
        />
        <br hidden={delivery !== option} />
        <label htmlFor="fathersName" className="w220 float" hidden={delivery !== option}> По-батькові</label>
        <input
          id="fathersName"
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
          id=""
          name="contactPhone"
          value={user.contactPhone}
          onChange={handleChange}
          hidden={!user.isContactPhone}
        />
        <br />
        <label className="w220 float">
        <input
          id=""
          name="isViber"
          type="checkbox"
          value="isViber"
          checked={user.isViber}
          onChange={handleCheckbox}
        />
        &nbsp;Вайбер&nbsp;</label>
        <input
          id=""
          name="viber"
          value={user.viber}
          onChange={handleChange}
          hidden={!user.isViber}
        />
        <br />
        <label className="w220 float">
        <input
          id=""
          name="isEmail"
          type="checkbox"
          value="isEmail"
          checked={user.isEmail}
          onChange={handleCheckbox}
        />
        &nbsp;Email&nbsp;</label>
        <input
          id=""
          name="email"
          value={user.email}
          onChange={handleChange}
          hidden={!user.isEmail}
        />
        <br />
        <br />
        <button className="big">Замовити</button>
      </form>

    </article>
  );

}

export default Order;
