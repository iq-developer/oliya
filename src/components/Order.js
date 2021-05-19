import {useState, useEffect} from 'react';
import {useContext} from 'react';
import {TextContext} from './../context/textContext';
import {send} from 'emailjs-com';
import{init} from 'emailjs-com';

init("user_sI9r9eHLuS7gdbxX83bpG");

const Order = () => {

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


  const onSubmit = (e) => {
    e.preventDefault();

    send(
      'service_skcbnpf',
      'template_a5rrair',
      toSend,
      'user_sI9r9eHLuS7gdbxX83bpG'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
  };

  useEffect(() => {
    setToSend({...toSend, ...user, delivery, deliveryOption});
  }, [user, delivery, deliveryOption]);

  //EmailJS end

  return (
    <article className="block-order fullWidth">

    <form onSubmit={onSubmit}>

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
          name="firstName"
          value={user.firstName}
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
        <button className="big">Замовити</button>
      </form>

    </article>
  );

}

export default Order;
