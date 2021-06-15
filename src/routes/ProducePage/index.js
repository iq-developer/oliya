import Nav from './../../components/Nav';
import Footer from './../../components/Footer';
import {Link} from 'react-router-dom';
import {TextContext} from './../../context/textContext';
import {useContext} from 'react';
import s from './style.module.css';
import cn from 'classnames';
import { Helmet } from 'react-helmet';

//{context.ua ? `` : ``}

function ProducePage() {

  const context = useContext(TextContext);

  return (
    <>
      <Helmet>
        <title>{context.ua ? `Сиродавлена олія на дубовому пресі. Львів. Їжа як ліки` : `Сиродавлена масло на дубовой прессе. Львов. Еда как лекарство`}</title>
        <meta name="description" content={context.ua ? `Олія чорного кмину, конопляна, насіння гарбуза, мигдалева, чорного кунжута, волоського горіха, білого кунжуту, лляна, соняшникова, кокосова.` : `Масло черного тмина, конопляное, семена тыквы, миндальное, черного кунжута, грецкого ореха, белого кунжута, льняное, подсолнечное, кокосовое.`} />
        <meta name="theme-color" content="#efd8b4" />
      </Helmet>
      <Nav />
      <main className={s.home}>

        <div className={cn(s.banner, s.white)}>
          <div>
            <h1>{context.ua ? `Сиродавлена олія` : `Сыродавленное масло`}</h1>
            <p className={s.subtitle}>{context.ua ? `виробляємо під замовлення на дубовому пресі` : `выжимаем под заказ на дубовом маслопрессе`}</p>
            <br />
            <a onClick={context.scroll} className={cn("button", s.big_button, s.bgbeige)} href="/#">{context.ua ? `Що особливого? ▼` : `Что особенного? ▼`}</a>
            <Link className={cn("button", s.big_button, s.bgbeige)} to="/shop">{context.ua ? `Вибрати олію` : `Выбрать масло`} &#128722;</Link>
          </div>
        </div>

        <h2 id="special">{context.ua ? `Особливе виробництво - незвичайна олія` : `Особое производство - особенное масло`}</h2>
        <p className={s.h2subtitle}>{context.ua ? `подивиться, як дбайливо ми робимо нашу олію` : `посмотрите, как заботливо мы делаем наше масло`}</p>

        <div className={s.bars}>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar0.jpg"  alt={context.ua ? `Тільки свіжий врожай` : `Только свежий урожай`} />
            <div className={s.bar_desc}>

              <h3>{context.ua ? `Тільки свіжий врожай` : `Только свежий урожай`}</h3>
              <hr />
              <p>{context.ua ? `це смачніше, ми перевірили` : `так вкуснее, мы проверили`}</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar1.jpg"  alt={context.ua ? `Обираємо якісне насіння` : `Выбираем лучшие семена`} />
            <div className={s.bar_desc}>
              <h3>{context.ua ? `Обираємо якісне насіння` : `Выбираем лучшие семена`}</h3>
              <hr />
              <p>{context.ua ? `тому що ми фанати якості` : `потому что мы фанаты качества`}</p>
            </div>
          </div>



          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar2.jpg"  alt={context.ua ? `Використовуємо цільне зерно` : `Используем цельное зерно`} />
            <div className={s.bar_desc}>
              <h3>{context.ua ? `Використовуємо цільне зерно` : `Используем цельное зерно`}</h3>
              <hr />
              <p>{context.ua ? `олія не потребує фільтрування` : `масло не нуждается в фильтрации`}</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar3.jpg"  alt={context.ua ? `Миємо під проточною водою` : `Моем под проточной водой`} />
            <div className={s.bar_desc}>
              <h3>{context.ua ? `Миємо під проточною водою` : `Моем под проточной водой`}</h3>
              <hr />
              <p>{context.ua ? `особливо чистий смак` : `особо чистый вкус`}</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar4.jpg"  alt={context.ua ? `Сушимо при температурі 30°C` : `Сушим при температуре 30°C`} />
            <div className={s.bar_desc}>
              <h3>{context.ua ? `Сушимо при температурі 30°C` : `Сушим при температуре 30°C`}</h3>
              <hr />
              <p>{context.ua ? `не смажимо та не перегріваємо` : `не жарим и не перегреваем`}</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar5.jpg"  alt={context.ua ? `Віджимаємо на дубовому пресі` : `Выжимаем на дубовом прессе`} />
            <div className={s.bar_desc}>
              <h3>{context.ua ? `Віджимаємо на дубовому пресі` : `Выжимаем на дубовом прессе`}</h3>
              <hr />
              <p>{context.ua ? `без жодного контакту з металом` : `без контакта масла с металлом`}</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar8.jpg"  alt={context.ua ? `Розливаємо в темні скляни пляшки` : `Разливаем в темные стеклянные бутылки`} />
            <div className={s.bar_desc}>
              <h3>{context.ua ? `Розливаємо в темні скляні пляшки` : `Разливаем в темные стеклянные бутылки`}</h3>
              <hr />
              <p>{context.ua ? `та обертаємо в паперову етикетку` : `и заворачиваем в бумажную этикетку`}</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar9.jpg"  alt={context.ua ? `Відправляємо Новою Поштою` : `Отправляем Новой Почтой`} />
            <div className={s.bar_desc}>
              <h3>{context.ua ? `Відправляємо Новою Поштою` : `Отправляем Новой Почтой`}</h3>
              <hr />
              <p>{context.ua ? `тільки свіжовіджату олію` : `только свежеотжатое масло`}</p>
            </div>
          </div>

        </div>

        <h2>{context.ua ? `Що дає таке ретельний процес виробництва?` : `Что дает такой тщательное процесс производства?`}</h2>
        <p className={s.h2subtitle}>
        {context.ua ? `Це дозволяє зберегти в олії максимум корисних речовин -
        вітамінів, важливих омега-кислот та мікроелементів.
        Саме такі олії насправді є цілющими та життєдайними.
        Це не просто продукти харчування, це` : `Это позволяет сохранить в масле максимум полезных веществ - витаминов, важных омега-кислот и микроелементов.
         Такие масла на самом деле являются целебными и живительными.
         Это не просто продукты питания, это`} <strong>"{context.ua ? `їжа як ліки` : `пища как лекарство`}"</strong>
        </p>

        <div className={cn(s.banner, s.white, s.long)}>

          <div className={s.gears}>

            <div className={s.gear2col}>
              <h2>{context.ua ? `А як же виробляється "звичайна" олія?` : `А как же производится "обычное" масло?`} </h2>
              <p className={s.h2subtitle}>
              {context.ua ? `Ось 8 головних ступенів промислового виробництва та очищення соняшникової олії` : `Вот 8 главных ступеней промышленного производства и очистки подсолнечного масла`}
              </p>
            </div>

            <div className={s.gear}>
              <img src="https://oliya.com.ua/img/landing/icon1.png" className={s.gear_img} alt={context.ua ? `сиродавлена олія Подрібнення` : `Измельчение`} />
              <div className={s.gear_desc}>
                <h3>{context.ua ? `Подрібнення` : `Измельчение`}</h3>
                <hr />
                <p>{context.ua ? `розмелювання в мезгу пропусканням крізь вальці` : `размалывание в мезгу пропусканием сквозь вальцы `}</p>
              </div>
            </div>

            <div className={s.gear}>
              <img src="https://oliya.com.ua/img/landing/icon2.png" className={s.gear_img} alt={context.ua ? `Екстрагування` : `Экстрагирование`} />
              <div className={s.gear_desc}>
                <h3>{context.ua ? `Екстрагування` : `Экстрагирование`}</h3>
                <hr />
                <p>{context.ua ? `сырье помещают в НЕФРАС или экстракционный бензин` : `сировину поміщають в НЕФРАС або екстракційний бензин`}</p>
              </div>
            </div>

            <div className={s.gear}>
              <img src="https://oliya.com.ua/img/landing/icon3.png" className={s.gear_img} alt={context.ua ? `Гідратація` : `Гидратация`} />
              <div className={s.gear_desc}>
                <h3>{context.ua ? `Гідратація` : `Гидратация`}</h3>
                <hr />
                <p>{context.ua ? `гарячим розчином фосфорної або лимонної кислоти` : `горячим раствором фосфорной или лимонной кислоты`}</p>
              </div>
            </div>

            <div className={s.gear}>
              <img src="https://oliya.com.ua/img/landing/icon4.png" className={s.gear_img} alt={context.ua ? `Нейтралізація` : `Нейтрализация`} />
              <div className={s.gear_desc}>
                <h3>{context.ua ? `Нейтралізація` : `Нейтрализация`}</h3>
                <hr />
                <p>{context.ua ? `обробка олії лугом або силікатом натрію` : `обработка масла щелочью или силикатом натрия`}</p>
              </div>
            </div>

            <div className={s.gear}>
              <img src="https://oliya.com.ua/img/landing/icon5.png" className={s.gear_img} alt={context.ua ? `Відбілювання` : `Отбеливание`} />
              <div className={s.gear_desc}>
                <h3>{context.ua ? `Відбілювання` : `Отбеливание`}</h3>
                <hr />
                <p>{context.ua ? `з додаванням соляної або сірчаної кислоти` : `с добавление соляной или серной кислоты`}</p>
              </div>
            </div>

            <div className={s.gear}>
              <img src="https://oliya.com.ua/img/landing/icon6.png" className={s.gear_img} alt={context.ua ? `Дезодорація` : `Дезодорация`} />
              <div className={s.gear_desc}>
                <h3>{context.ua ? `Дезодорація` : `Дезодорация`}</h3>
                <hr />
                <p>{context.ua ? `вплив перегрітим сухим паром 170-230°С` : `воздействие перегретым сухим паром 170-230°С`}</p>
              </div>
            </div>

            <div className={s.gear}>
              <img src="https://oliya.com.ua/img/landing/icon7.png" className={s.gear_img} alt={context.ua ? `Виморожування` : `Вымораживание`} />
              <div className={s.gear_desc}>
                <h3>{context.ua ? `Виморожування` : `Вымораживание`}</h3>
                <hr />
                <p>{context.ua ? `охолодження з додаванням перлітового порошку` : `охлаждение с добавлением перлитового порошка`}</p>
              </div>
            </div>

            <div className={s.gear}>
              <img src="https://oliya.com.ua/img/landing/icon8.png" className={s.gear_img} alt={context.ua ? `Фільтрація` : `Фильтрация`} />
              <div className={s.gear_desc}>
                <h3>{context.ua ? `Фільтрація` : `Фильтрация`}</h3>
                <hr />
                <p>{context.ua ? `підігрів і пропускання крізь фільтри` : `подогрев и пропускание через фильтры`}</p>
              </div>
            </div>

            <div className={s.gear2col}>
              {/* <button hidden className={cn(s.big_button, s.bgwhite)}>Для чого вони це роблять?</button> */}
            </div>

          </div>

        </div>


        </main>

        <Footer />
    </>
  );
}

export default ProducePage;
