import Nav from './../../components/Nav';
import Footer from './../../components/Footer';
import {Link} from 'react-router-dom';
import {TextContext} from './../../context/textContext';
import {useContext} from 'react';
import s from './style.module.css';
import cn from 'classnames';

function HomePage() {

  const context = useContext(TextContext);

  return (
    <>
      <Nav />

      <main className={s.home}>

        <div className={cn(s.banner, s.white)}>
          <div>
            <h1>Сиродавлена олія</h1>
            <p className={s.subtitle}>робимо під замовлення на дубовому пресі</p>
            <br />
            <a className={cn("button", s.big_button, s.bgbeige)} href="#special">Що особливо? ▼</a>
            <Link className={cn("button", s.big_button, s.bgbeige)} to="/shop">Вибрати олію ►</Link>
          </div>
        </div>
        <h2 id="special">Особливе виробництво - особлива олія</h2>
        <p className={s.h2subtitle}>подивиться як дбайливо ми робимо нашу олію</p>
        <div className={s.bars}>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar0.jpg"  alt="" />
            <div className={s.bar_desc}>
              <h3>Обираємо вишукане насіння</h3>
              <hr />
              <p>тому що ми фанати якісті</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar1.jpg"  alt="" />
            <div className={s.bar_desc}>
              <h3>Тільки свіжого врожаю</h3>
              <hr />
              <p>це смачніше, ми перевірили</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar2.jpg"  alt="" />
            <div className={s.bar_desc}>
              <h3>Очищене від макухи та соломи</h3>
              <hr />
              <p>олію не треба фільтрувати</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar3.jpg"  alt="" />
            <div className={s.bar_desc}>
              <h3>Миємо під проточною водою</h3>
              <hr />
              <p>це дає особливо чистий смак</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar4.jpg"  alt="" />
            <div className={s.bar_desc}>
              <h3>Сушимо при температурі 30°C</h3>
              <hr />
              <p>не смажимо та не перегріваємо</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar5.jpg"  alt="" />
            <div className={s.bar_desc}>
              <h3>Віджимаємо на дубовому пресі</h3>
              <hr />
              <p>без жодного контакту з металом</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar7.jpg"  alt="" />
            <div className={s.bar_desc}>
              <h3>Отримуємо свіжо віджату олію</h3>
              <hr />
              <p>зроблену під ваше замовлення</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar8.jpg"  alt="" />
            <div className={s.bar_desc}>
              <h3>Розливаємо в темні скляни пляшки</h3>
              <hr />
              <p>та обертаємо в бумажну єтикетку</p>
            </div>
          </div>

        </div>
        <h2>Що дає таке ретельне виробництво</h2>
        <p className={s.h2subtitle}>
        Це дозволяє зберегти в олії максимум корисних речовин - <br />
        вітаминів, корисних омега-кислот та микроелементів <br />
        саме такі олії насправді є цілющими та життєдайними,<br />
        це не просто продукти харчування, це <strong>"їжа як ліки"</strong>
        </p>

        <div className={cn(s.banner, s.white, s.long)}>

          <div className={s.gears}>

            <div className={s.gear2col}>
              <h2>А як же виробляється "звичайна" олія? </h2>
              <p className={s.h2subtitle}>
              Ось 8 головних ступенів промислового виробництва та очищення соняшникової олій на маслопереробних заводах.
              </p>
            </div>

            <div className={s.gear}>
              <img src="https://oliya.com.ua/img/landing/icon1.png" className={s.gear_img} alt="" />
              <div className={s.gear_desc}>
                <h3>Подрібнення</h3>
                <hr />
                <p>розмелювання в мезгу пропусканням крізь вальці</p>
              </div>
            </div>

            <div className={s.gear}>
              <img src="https://oliya.com.ua/img/landing/icon2.png" className={s.gear_img} alt="" />
              <div className={s.gear_desc}>
                <h3>Екстрагування</h3>
                <hr />
                <p>сировину поміщають в НЕФРАС або екстракційний бензин</p>
              </div>
            </div>

            <div className={s.gear}>
              <img src="https://oliya.com.ua/img/landing/icon3.png" className={s.gear_img} alt="" />
              <div className={s.gear_desc}>
                <h3>Гідратація</h3>
                <hr />
                <p>гарячим розчином лимонної або фосфорної кислоти</p>
              </div>
            </div>

            <div className={s.gear}>
              <img src="https://oliya.com.ua/img/landing/icon4.png" className={s.gear_img} alt="" />
              <div className={s.gear_desc}>
                <h3>Нейтралізація</h3>
                <hr />
                <p>обробка олії лугом або силікатом натрію</p>
              </div>
            </div>

            <div className={s.gear}>
              <img src="https://oliya.com.ua/img/landing/icon5.png" className={s.gear_img} alt="" />
              <div className={s.gear_desc}>
                <h3>Відбілювання</h3>
                <hr />
                <p>з додаванням соляної або сірчаної кислоти</p>
              </div>
            </div>

            <div className={s.gear}>
              <img src="https://oliya.com.ua/img/landing/icon6.png" className={s.gear_img} alt="" />
              <div className={s.gear_desc}>
                <h3>Дезодорація</h3>
                <hr />
                <p>вплив перегрітим сухим паром 170-230°С</p>
              </div>
            </div>

            <div className={s.gear}>
              <img src="https://oliya.com.ua/img/landing/icon7.png" className={s.gear_img} alt="" />
              <div className={s.gear_desc}>
                <h3>Виморожування</h3>
                <hr />
                <p>охолодження з додаванням перлітового порошку</p>
              </div>
            </div>

            <div className={s.gear}>
              <img src="https://oliya.com.ua/img/landing/icon8.png" className={s.gear_img} alt="" />
              <div className={s.gear_desc}>
                <h3>Фільтрація</h3>
                <hr />
                <p>підігрів і пропускання через фільтри</p>
              </div>
            </div>

            <div className={s.gear2col}>
              <button hidden className={cn(s.big_button, s.bgwhite)}>Для чого вони це роблять?</button>
            </div>

          </div>

        </div>

        <h2>Сиродавлені олії не просто краще. Вони зовсім інши</h2>
        <p className={s.h2subtitle}>
          А ще, різні олії мають різні корисні властивості. Ось подивиться.
        </p>

        <div className={s.oils}>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil01.jpg"  alt="" />
            <div className={s.bar_desc}>
              <p>сиродавлена олія</p>
              <h3>чорного кмину</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>✿ Іммуномодулятор, онкопротектор, загальнозміцнюючий засіб</p>
                <p>✿ Інши назви: Nigella sativa, римський коріандр, калінджі</p>
                <p>✿ В мусульманських країнах його називають ліками від усіх хворіб, окрім смерті</p>
                <p>✿ Згадки рослини зустрічаються навіть в Біблії і Корані.</p>
              </div>
              <br />
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil02.jpg"  alt="" />
            <div className={s.bar_desc}>
              <p>сиродавлена олія</p>
              <h3>конопляна</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>✿ Єдина олія, що засвоюється організмом на 100%</p>
                <p>✿ Найцінніша олія по балансу Омега 6 - Омега 3 жирних кислот</p>
                <p>✿ До складу конопляної олії входять антиокси- данти, каротин, фітостероли, фосфоліпіди, так само як безліч інших корисних мінеральних речовин і вітамінів</p>
                <p></p>
              </div>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil03.jpg"  alt="" />
            <div className={s.bar_desc}>
              <p>сиродавлена олія</p>
              <h3>насіння гарбуза</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>✿ Благотворно впливає на роботу нервової, серцево-
                  судинної, ендокрин-
                  ної, сечостатевої та травної систем</p>
                <p>✿ Покращує роботу печінки, жовчного міхура, та передміхурової залози, нормалізує перистальтику кишківника</p>
                <p>✿ Містить вітаміни А, Е и F, селен</p>
              </div>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil04.jpg"  alt="" />
            <div className={s.bar_desc}>
              <p>сиродавлена олія</p>
              <h3>мигдалева</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>Використовується
                  в кулінарії, а також
                  дуже корисна для шкіри та волосся</p>
                <p>✿ Полінасичені жирні кислоти живлять шкіру та запобігають її обвисанню</p>
                <p>✿ Вітамін Е виводить з клітин шкіри шкідливі радикали, бореться зі зморшками</p>
              </div>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil05.jpg"  alt="" />
            <div className={s.bar_desc}>
              <p>сиродавлена олія</p>
              <h3>чорного кунжута</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>✿ Має всі корисні властивості кунжутного масла з білого насіння</p>
                <p>✿ відрізняється більш великою кількістю корисних мікроелементів</p>
                <p>✿ Містить вітаміни E, K, D</p>
                <p>✿ Джерело сезамоліна - антиоксиданта,
                  що омолоджуює клітини</p>
              </div>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil06.jpg"  alt="" />
            <div className={s.bar_desc}>
              <p>сиродавлена олія</p>
              <h3>волоського горіха</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>✿ Ця олія дуже корисна для судин</p>
                <p>✿ Відрізняється чудовим смаком і високим вмістом поживних речовин
                  і вітамінів.</p>
                <p>В її складі містяться такі вітаміни як B, Е, К</p>
                <p>✿ Має багатий набір мікро- елементів: Cu, I, Mg, Ca, Zn, Co, Fe</p>
              </div>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil07.jpg"  alt="" />
            <div className={s.bar_desc}>
              <p>сиродавлена олія</p>
              <h3>білого кунжута</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>✿ Містить сезамолін - антиоксидант,
                  що омолоджуює клітини, регулює кисневий обмін і шлункового соку
                  і жировий обмін</p>
                <p>✿ Нормалізує кислотність шлункового соку</p>
                <p>✿ Зволожує, живить і очищає шкіру, призупиняючи її старіння</p>
                <p></p>
              </div>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil08.jpg"  alt="" />
            <div className={s.bar_desc}>
              <p>сиродавлена олія</p>
              <h3>лляна</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>✿ Вміст Омега-3 перевершує навіть  риб'ячий жир. Має ідеально збалансо-
                ване співвідношення Омега-6 і Омега-3</p>
                <p>✿ Допомагає швидко виводити токсини з печінки</p>
                <p>✿ містить значну кількість токоферолів (вітамін Е)</p>
              </div>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil09.jpg"  alt="" />
            <div className={s.bar_desc}>
              <p>сиродавлена олія</p>
              <h3>соняшникова</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>✿ Найкраще джерело лецитину</p>
                <p>✿ Підтримує активність і ясність розуму</p>
                <p>✿ Допомагає відновити сили при анемії і стресах</p>
                <p>✿ Містить багато токоферолу (вітаміну Е) який є найважливішим антиоксидантом.</p>
              </div>
            </div>
          </div>

          <div className={cn(s.bar, s.placeholder)}>
            <img src="https://oliya.com.ua/img/landing/oilcoconut-bg.jpg"  alt="" />
            <div className={s.bar_desc}>
              <div className={cn(s.oil_txt, s.left)}>
              </div>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil10.jpg"  alt="" />
            <div className={s.bar_desc}>
              <p>сиродавлена олія</p>
              <h3>кокосова</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>✿ Підтримує роботу мозку і підвищує енергетичний потенціал</p>
                <p>✿ Дуже добре підходить для випічки і виготовлення кондитерських виробів</p>
                <p>✿ Застосовуючи масло кокоса зовнішньо згладжують зморшки, шкіра набуває еластичність</p>
              </div>
            </div>
          </div>

          <div className={cn(s.bar, s.placeholder)}>
            <img src="https://oliya.com.ua/img/landing/oil11.jpg"  alt="" />
            <div className={s.bar_desc}>
              <div className={cn(s.oil_txt, s.left)}>
              </div>
            </div>
          </div>

        </div>

        <h2>Дуже корисні олії. А як вони смакують?</h2>
        <p className={s.h2subtitle}>
          Смачні, без гіркоти, мають тонкий приємний аромат.<br />
          Не будемо багато казати, краще спробувати.<br />
          Ми можемо віжджати для вас навіть 100 мл олії,<br />
          щоб ви мали змогу особисто відчути її якості.
        </p>

        <div className={cn(s.banner, s.white)}>
          <div>
            <h1>Природний чистий смак</h1>
            <p className={s.subtitle}>відрізняється так, як смак джерельної води від кип'яченої </p>
            <br />
            <Link onClick={context.scroll} to="/shop" className={cn("button", s.big_button, s.bgbeige)}>Вибрати найкращу олію ►</Link>
          </div>
        </div>

        </main>

        <Footer />
    </>
  );
}

export default HomePage;
