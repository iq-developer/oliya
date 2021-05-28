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

  const option = context.ua ? `Нова Пошта` : `Новая Почта`;
  const option1 = context.ua ? `Львів - заберу при зустричі по домовленості` : `Львов - заберу при встрече по договоренности`;
  // const option2 = context.ua ? `Львів - самовивіз з кафе Грін (вул. Братів Рогатинців, 5)` : `Львов - самовывоз из кафе Грин (ул. Братьев Рогатинцев, 5)`;

  const option3 = context.ua ? `На відділення Нової Пошти` : `На отделение Новой Почты`;
  const option4 = context.ua ? `Курь'єрська доставка за адресою` : `Курьерская доставка по адресу`;

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

  const onSubmit = (e) => {
    e.preventDefault();

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

  };

  useEffect(() => {
    setToSend({...toSend, ...user, delivery, deliveryOption});
  }, [user, delivery, deliveryOption]);

  //EmailJS end

  return (
    <article className="block-order">

    <form onSubmit={onSubmit}>

        <h2>{context.ua ? `Спосіб доставки` : `Способ доставки`}</h2>
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
        {/* <label><input
          name="delivery"
          type="radio"
          value={option2}
          checked={delivery === option2}
          onChange={handleDeliveryChange}
        /> {option2}</label>
        <br /> */}

        <div hidden={delivery !== option}>
          <h3>{context.ua ? `Відправка на відділення або на адресу` : `Отправка на отделение или на адрес`}</h3>
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
          <label htmlFor="branchNumber" hidden={deliveryOption === option4} className="w220 float"> {context.ua ? `№ відділення або поштомату` : `№ отделения или почтомата`}</label>
          <input
            id="branchNumber"
            name="branchNumber"
            value={user.branchNumber}
            onChange={handleChange}
            hidden={deliveryOption === option4}
            size="4"
            required={deliveryOption !== option4}
          />
          <br />
          <label htmlFor="address" hidden={deliveryOption === option3} className="w220 float"> {context.ua ? `Адреса` : `Адрес`}</label>
          <input
            id="address"
            name="address"
            value={user.address}
            onChange={handleChange}
            hidden={deliveryOption === option3}
            required={deliveryOption !== option3}
          />
          <br />
          <label htmlFor="city" className="w220 float">{context.ua ? `Місто` : `Город`}<br /></label>
          <input
            id="city"
            name="city"
            value={user.city}
            onChange={handleChange}
            list="cities"
            required={delivery === option}
            />
          <datalist id="cities">
            <option value={context.ua ? `Біла Церква` : `Белая Церковь`} />
            <option value={context.ua ? `Бердянськ` : `Бердянск`} />
            <option value={context.ua ? `Бровари` : `Бровары`} />
            <option value={context.ua ? `Вінниця` : `Винница`} />
            <option value={context.ua ? `Дніпро` : `Днепр`} />
            <option value={context.ua ? `Житомир` : `Житомир`} />
            <option value={context.ua ? `Запоріжжя` : `Запорожье`} />
            <option value={context.ua ? `Івано-Франківськ` : `Ивано-Франковск`} />
            <option value={context.ua ? `Кам'янське` : `Каменское`} />
            <option value={context.ua ? `Київ` : `Киев`} />
            <option value={context.ua ? `Краматорськ` : `Краматорск`} />
            <option value={context.ua ? `Кременчук` : `Кременчуг`} />
            <option value={context.ua ? `Кривий Ріг` : `Кривой Рог`} />
            <option value={context.ua ? `Кропивницький` : `Кропивницкий`} />
            <option value={context.ua ? `Луцьк` : `Луцк`} />
            <option value={context.ua ? `Львів` : `Львов`} />
            <option value={context.ua ? `Маріуполь` : `Мариуполь`} />
            <option value={context.ua ? `Мелітополь` : `Мелитополь`} />
            <option value={context.ua ? `Миколаїв` : `Николаев`} />
            <option value={context.ua ? `Нікополь` : `Никополь`} />
            <option value={context.ua ? `Одеса` : `Одесса`} />
            <option value={context.ua ? `Павлоград` : `Павлоград`} />
            <option value={context.ua ? `Полтава` : `Полтава`} />
            <option value={context.ua ? `Рівне` : `Ровно`} />
            <option value={context.ua ? `Севастополь` : `Севастополь`} />
            <option value={context.ua ? `Слов'янськ` : `Славянск`} />
            <option value={context.ua ? `Суми` : `суммы`} />
            <option value={context.ua ? `Тернопіль` : `Тернополь`} />
            <option value={context.ua ? `Ужгород` : `Ужгород`} />
            <option value={context.ua ? `Харків` : `Харьков`} />
            <option value={context.ua ? `Херсон` : `Херсон`} />
            <option value={context.ua ? `Хмельницький` : `Хмельницкий`} />
            <option value={context.ua ? `Черкаси` : `Черкассы`} />
            <option value={context.ua ? `Чернігів` : `Чернигов`} />
            <option value={context.ua ? `Чернівці` : `Черновцы`} />
          </datalist>
          <br />
          <label htmlFor="region" className="w220 float"> Область<br /></label>
          <input
            id="region"
            name="region"
            value={user.region}
            onChange={handleChange}
            list="regions"
            required={delivery === option}
          />
          <datalist id="regions">
            <option value={context.ua ? `Вінницька` : `Винницкая`} />
            <option value={context.ua ? `Волинська` : `Волынская`} />
            <option value={context.ua ? `Дніпропетровська` : `Днепропетровская`} />
            <option value={context.ua ? `Донецька` : `Донецкая`} />
            <option value={context.ua ? `Житомирська` : `Житомирская`} />
            <option value={context.ua ? `Закарпатська` : `Закарпатская`} />
            <option value={context.ua ? `Запорізька` : `Запорожская`} />
            <option value={context.ua ? `Івано-Франківська` : `Ивано-Франковская`} />
            <option value={context.ua ? `Київська` : `Киевская`} />
            <option value={context.ua ? `Кіровоградська` : `Кировоградская`} />
            <option value={context.ua ? `Луганська` : `Луганская`} />
            <option value={context.ua ? `Львівська` : `Львовская`} />
            <option value={context.ua ? `Миколаївська` : `Николаевская`} />
            <option value={context.ua ? `Одеська` : `Одесская`} />
            <option value={context.ua ? `Полтавська` : `Полтавская`} />
            <option value={context.ua ? `Рівненська` : `Ровенская`} />
            <option value={context.ua ? `Сумська` : `Сумская`} />
            <option value={context.ua ? `Тернопільська` : `Тернопольская`} />
            <option value={context.ua ? `Харківська` : `Харьковская`} />
            <option value={context.ua ? `Херсонська` : `Херсонская`} />
            <option value={context.ua ? `Хмельницька` : `Хмельницкая`} />
            <option value={context.ua ? `Черкаська` : `Черкасская`} />
            <option value={context.ua ? `Чернівецька` : `Черновицкая`} />
            <option value={context.ua ? `Чернігівська` : `Черниговская`} />
          </datalist>
        </div>

        <h3>{context.ua ? `Відомості про одержувача` : `Сведения о получателе`}</h3>
        <label htmlFor="phone" className="w220 float"> Телефон</label>
        <input
          id="phone"
          name="phone"
          value={user.phone}
          onChange={handlePhone}
          required
        />
        <br />
        <label htmlFor="firstName" className="w220 float"> {context.ua ? `Ім'я` : `Имя`}</label>
        <input
          id="firstName"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="familyName" className="w220 float" hidden={delivery !== option}> {context.ua ? `Призвіще` : `Фамилия`}</label>
        <input
          id="familyName"
          name="familyName"
          value={user.familyName}
          onChange={handleChange}
          hidden={delivery !== option}
          required={delivery === option}
        />
        <br hidden={delivery !== option} />
        <label htmlFor="fathersName" className="w220 float" hidden={delivery !== option}> {context.ua ? `По-батькові` : `Отчество`}</label>
        <input
          id="fathersName"
          name="fathersName"
          value={user.fathersName}
          onChange={handleChange}
          hidden={delivery !== option}
          required={delivery === option}
        />
        <br hidden={delivery !== option} />
        <h3>{context.ua ? `Як з вами контактувати` : `Как с вами контактировать`}</h3>
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
          required={user.isContactPhone}
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
          required={user.isViber}
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
          type="email"
          id=""
          name="email"
          value={user.email}
          onChange={handleChange}
          hidden={!user.isEmail}
          required={user.isEmail}
        />
        <br />
        <br />
        <button className="big">{context.ua ? `Замовити` : `Заказать`}</button>
      </form>

    </article>
  );

}

export default Order;
