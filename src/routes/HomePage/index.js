import Nav from './../../components/Nav';
import Footer from './../../components/Footer';
import { Link } from 'react-router-dom';
import { TextContext } from './../../context/textContext';
import { useContext } from 'react';
import s from './style.module.css';
import cn from 'classnames';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// use this snippet for translation: {context.ua ? `` : ``}

function HomePage() {

  const context = useContext(TextContext);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{context.ua ? `Сиродавлена олія на дубовому пресі. Львів. Їжа як ліки` : `Сиродавлена масло на дубовой прессе. Львов. Еда как лекарство`}</title>
        <meta name="description" content={context.ua ? `Олія чорного кмину, конопляна, насіння гарбуза, мигдалева, чорного кунжута, волоського горіха, білого кунжуту, лляна, соняшникова, кокосова.` : `Масло черного тмина, конопляное, семена тыквы, миндальное, черного кунжута, грецкого ореха, белого кунжута, льняное, подсолнечное, кокосовое.`} />
        <meta name="theme-color" content="#efd8b4" />
      </Helmet>
      <Nav />
      <main className={s.home}>

        <div className={cn(s.banner, s.banner1, s.white)}>
          <div>
            <h1>{context.ua ? `Сиродавлена олія` : `Сыродавленное масло`}</h1>
            <p className={s.subtitle}>{context.ua ? `виробляємо під замовлення на дубовому пресі` : `выжимаем под заказ на дубовом маслопрессе`}</p>
            <br />
            <a onClick={context.scroll} className={cn("button", s.big_button, s.bgbeige)} href="/#">{context.ua ? `Що особливого? ▼` : `Что особенного? ▼`}</a>
            <Link className={cn("button", s.big_button, s.bgbeige)} to="/shop">{context.ua ? `Вибрати олію` : `Выбрать масло`} &#128722;</Link>
          </div>
        </div>




        <h2 id="special">{context.ua ? `Сиродавлена олія - особлива` : `Сыродавленное масло - особенное`}</h2>
        <p className={s.h2subtitle}>{context.ua ? `порівняння нашої сиродавленої олії та олії холодного віджиму промислового виробництва` : `сравнение нашего сыродавленноого масла и масла холодного отжима промышленного производства`}</p>

        <div className={s.comparison_bars}>

          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar1Desc, s.pLeftRight20)}>
            <h3 className={s.uppercase}>{context.ua ? `Наша сиродавлена олія` : `Наше сыродавленное масло`}</h3>
            <hr />
            <p>{context.ua ? `ТМ "Їжа як ліки"` : `ТМ "Еда как лекарство"`}</p>
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar2Desc, s.bgGray, s.pLeftRight20)}>
            <h3 className={s.uppercase}>{context.ua ? `Олія холодного віджиму` : `Масло холодного отжима`}</h3>
            <hr />
            <p>{context.ua ? `Звичайне промислове виробництво` : `Обычное промышленное производство`}</p>
          </div>

          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar3)}>
            <img src="https://oliya.com.ua/img/landing/comparison1.jpg" alt={context.ua ? `Олія завжди свіжа. Виробляємо тільки під замовлення.` : `Масло всегда свежеотжатое. Делаем его только под заказ.`} />
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar3Desc, s.pLeftRight20)}>
            <h3>{context.ua ? `Неокислена олія` : `Неокисленное масло`}</h3>
            <hr />
            <p>{context.ua ? `Олія завжди свіжовіджата. Робимо її тільки під замовлення.` : `Масло всегда свежеотжатое. Делаем его только под заказ.`}</p>
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar4)}>
            <img src="https://oliya.com.ua/img/landing/comparison11.jpg" alt={context.ua ? `Звичайні олії довго стоять на вітрині або на складі` : `Обычные растительные масла долго стоят на витрине или на складе`} />
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar4Desc, s.bgGray, s.pLeftRight20)}>
            <h3>{context.ua ? `Окислена олія` : `Окисленное масло`}</h3>
            <hr />
            <p>{context.ua ? `Чим довше зберігається, тим більше окислюється` : `Чем дольше хранится, тем сильнее окисляется`}</p>
          </div>

          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar5)}>
            <img src="https://oliya.com.ua/img/landing/comparison2.jpg" alt={context.ua ? `В процесі пресування насіння не нагрівається` : `В процессе отжатия зерно не нагревается`} />
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar5Desc, s.pLeftRight20)}>
            <h3>{context.ua ? `Холодне насіння` : `Холодные семена`}</h3>
            <hr />
            <p>{context.ua ? `В процесі пресування насіння не нагрівається` : `В процессе отжатия зерно не нагревается`}</p>
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar6)}>
            <img src="https://oliya.com.ua/img/landing/comparison12.jpg" alt={context.ua ? `Шнекові преси нагрівають насіння понад 50°C` : `Шнековые прессы нагревают семена более 50°C`} />
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar6Desc, s.bgGray, s.pLeftRight20)}>
            <h3>{context.ua ? `Нагрівання насіння` : `Нагрев семян`}</h3>
            <hr />
            <p>{context.ua ? `Шнекові преси неминуче нагрівають насіння понад 50°C` : `Шнековые прессы неизбежно нагревают семена более 50°C`}</p>
          </div>


          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar7)}>
            <img src="https://oliya.com.ua/img/landing/comparison3.jpg" alt={context.ua ? `Свіжовіджата олія - робимо тільки під замовлення` : `Свежевыжатое масло - делаем только под заказ`} />
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar7Desc, s.pLeftRight20)}>
            <h3>{context.ua ? `Ціле насіння` : `Целые семена`}</h3>
            <hr />
            <p>{context.ua ? `Насіння не розмелюються, тому олія не потребує фільтрації` : `Семена не размалываются, поэтому масло не нуждается в фильтрации`}</p>
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar8)}>
            <img src="https://oliya.com.ua/img/landing/comparison13.jpg" alt={context.ua ? `Насіння перетіраются в макуху` : `Семена перетираются в жмых`} />
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar8Desc, s.bgGray, s.pLeftRight20)}>
            <h3>{context.ua ? `Перетерте насіння` : `Перетертые семена`}</h3>
            <hr />
            <p>{context.ua ? `Насіння перетіраются в мезгу, потім масло фільтрується або відстоюється` : `Семена перетираются в мезгу, затем масло фильтруется или отстаивается`}</p>
          </div>

          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar9)}>
            <img src="https://oliya.com.ua/img/landing/comparison4.jpg" alt={context.ua ? `Дубова бочка - тільки дерево` : `Дубовая бочка - только дерево`} />
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar9Desc, s.pLeftRight20)}>
            <h3>{context.ua ? `Немає металу` : `Нет металла`}</h3>
            <hr />
            <p>{context.ua ? `Дубова бочка - тільки дерево` : `Дубовая бочка - только дерево`}</p>
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar10)}>
            <img src="https://oliya.com.ua/img/landing/comparison14.jpg" alt={context.ua ? `Контакт з металом посилює окислення` : `Контакт с металлом усиливает окисление`} />
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar10Desc, s.bgGray, s.pLeftRight20)}>
            <h3>{context.ua ? `Металевий шнек` : `Металлический шнек`}</h3>
            <hr />
            <p>{context.ua ? `Контакт з металом посилює окислення` : `Контакт с металлом усиливает окисление`}</p>
          </div>

          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar11)}>
            <img src="https://oliya.com.ua/img/landing/comparison5.jpg" alt={context.ua ? `Свіжовіджата олія - робимо тільки під замовлення` : `Свежевыжатое масло - делаем только под заказ`} />
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar11Desc, s.pLeftRight20)}>
            <h3>{context.ua ? `Чисте насіння` : `Чистые семена`}</h3>
            <hr />
            <p>{context.ua ? `Насіння ретельно миється і сушиться при 30°C` : `Семена тщательно моются и сушатся при 30°C`}</p>
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar12)}>
            <img src="https://oliya.com.ua/img/landing/comparison15.jpg" alt={context.ua ? `Звичайні олії довго стоять на вітрині або на складі` : `Обычные растительные масла долго стоят на витрине или на складе`} />
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar12Desc, s.bgGray, s.pLeftRight20)}>
            <h3>{context.ua ? `Немите насіння` : `Немытые семена`}</h3>
            <hr />
            <p>{context.ua ? `Може містити пил, пилок, труху` : `Могут содержать пыль, пыльцу, труху`}</p>
          </div>

          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar13)}>
            <img src="https://oliya.com.ua/img/landing/comparison6.jpg" alt={context.ua ? `Свіжовіджата олія - робимо тільки під замовлення` : `Свежевыжатое масло - делаем только под заказ`} />
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar13Desc, s.pLeftRight20)}>
            <h3>{context.ua ? `Вихід олії менше` : `Выход масла меньше`}</h3>
            <hr />
            <p>{context.ua ? `Вміст корисних речовин більше` : `Содержание полезных веществ больше`}</p>
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar14)}>
            <img src="https://oliya.com.ua/img/landing/comparison16.jpg" alt={context.ua ? `Звичайні олії довго стоять на вітрині або на складі` : `Обычные растительные масла долго стоят на витрине или на складе`} />
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar14Desc, s.bgGray, s.pLeftRight20)}>
            <h3>{context.ua ? `Вихід олії більше` : `Выход масла больше`}</h3>
            <hr />
            <p>{context.ua ? `Завдяки нагріванню та подрібненню` : `Из-за нагрева и измельчения`}</p>
          </div>

          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar15)}>
            <img src="https://oliya.com.ua/img/landing/comparison7.jpg" alt={context.ua ? `Свіжовіджата олія - робимо тільки під замовлення` : `Свежевыжатое масло - делаем только под заказ`} />
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar15Desc, s.pLeftRight20)}>
            <h3>{context.ua ? `Коштує дорожче` : `Стоит дороже`}</h3>
            <hr />
            <p>{context.ua ? `Вона того варта :)` : `Оно того стоит :)`}</p>
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar16)}>
            <img src="https://oliya.com.ua/img/landing/comparison17.jpg" alt={context.ua ? `Звичайні олії довго стоять на вітрині або на складі` : `Обычные растительные масла долго стоят на витрине или на складе`} />
          </div>
          <div className={cn(s.bar, s.comparison_bar, s.vCenter, s.bar16Desc, s.bgGray, s.pLeftRight20)}>
            <h3>{context.ua ? `Коштує дешевше` : `Стоит дешевле`}</h3>
            <hr />
            <p>{context.ua ? `Очевидно менш корисна` : `Явно менее полезное`}</p>
          </div>

        </div>


        <h2>{context.ua ? `Сиродавлені олії не просто краще. Вони зовсім інші` : `Сиродавленные масла не просто лучше. Они совсем другие`}</h2>
        <p className={s.h2subtitle}>
          {context.ua ? `А ще, різні олії мають різні корисні властивості. Ось подивіться` : `А еще, разные масла имеют различные полезные свойства. Вот посмотрите`}
        </p>

        <div className={s.oils}>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil01.jpg" alt={context.ua ? `сиродавлена олія чорного кмину` : `сыродавленное масло черного тмина`} />
            <div className={s.bar_desc}>
              <p><span>{context.ua ? `сиродавлена олія` : `сиродавленное масло`}</span></p>
              <h3>{context.ua ? `чорного кмину` : `черного тмина`}</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>{context.ua ? `✿ Імуномодулятор, онкопротектор, загальнозміцнюючий засіб` : `✿ иммуномодулятор, онкопротектор, общеукрепляющее средство`}</p>
                <p>{context.ua ? `✿ Інши назви:  калінджі, чернушка, сейдана (седана), римський коріандр` : `✿ Другие названия: калинджи, чернушка, сейдана (седана), римский кориандр`}</p>
                <p>{context.ua ? `✿ В мусульманських країнах його називають ліками від усіх хвороб, окрім смерті` : `✿ В мусульманских странах его называют лекарством от всех болезней, кроме смерти`}</p>
                <p>{context.ua ? `✿ Згадки рослини зустрічаються навіть в Біблії і Корані.` : `✿ Упоминания растения встречаются даже в Библии и Коране.`}</p>
              </div>
              <br />
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil02.jpg" alt={context.ua ? `сиродавлена олія конопляна` : `сыродавленное масло конопляное`} />
            <div className={s.bar_desc}>
              <p><span>{context.ua ? `сиродавлена олія` : `сиродавленное масло`}</span></p>
              <h3>{context.ua ? `конопляна` : `конопляное`}</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>{context.ua ? `✿ Єдина олія, що засвоюється організмом на 100%` : `✿ Единственное масло, которое усваивается организмом на 100%`}</p>
                <p>{context.ua ? `✿ Найцінніша олія по балансу Омега-6 / Омега-3 жирних кислот` : `✿ Самое ценное масло по балансу Омега-6 / Омега-3 жирных кислот`}</p>
                <p>{context.ua ? `✿ До складу конопляної олії входять антиоксиданти, каротин, фітостероли, фосфоліпіди, так само як безліч інших корисних мінеральних речовин і вітамінів` : `✿ В состав конопляного масла входят антиоксиданты, каротин, фитостеролы, фосфолипиды, а также множество других полезных минеральных веществ и витаминов`}</p>
                <p></p>
              </div>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil03.jpg" alt={context.ua ? `сиродавлена олія насіння гарбуза` : `сыродавленное масло семян тыквы`} />
            <div className={s.bar_desc}>
              <p><span>{context.ua ? `сиродавлена олія` : `сиродавленное масло`}</span></p>
              <h3>{context.ua ? `насіння гарбуза` : `семян тыквы`}</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>{context.ua ? `✿ Благотворно впливає на роботу нервової, серцево-
                  судинної, ендокринної, сечостатевої та травної систем` : `✿ Благотворно влияет на работу нервной, сердечно-сосудистой, эндокринной, мочеполовой и пищеварительной систем`}</p>
                <p>{context.ua ? `✿ Покращує роботу печінки, жовчного міхура, та передміхурової залози, нормалізує перистальтику кишківника` : `✿ Улучшает работу печени, желчного пузыря, и предстательной железы, нормализует перистальтику кишечника`}</p>
                <p>{context.ua ? `✿ Містить вітаміни А, Е и F, селен` : `✿ Содержит витамины А, Е и F, селен`}</p>
              </div>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil04.jpg" alt={context.ua ? `сиродавлена олія мигдалева` : `сыродавленное масло миндальное`} />
            <div className={s.bar_desc}>
              <p><span>{context.ua ? `сиродавлена олія` : `сиродавленное масло`}</span></p>
              <h3>{context.ua ? `мигдалева` : `миндальное`}</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>{context.ua ? `Використовується в кулінарії, а також дуже корисна для шкіри та волосся` : `Используется в кулинарии, а также очень полезна для кожи и волос`}</p>
                <p>{context.ua ? `✿ Полінасичені жирні кислоти живлять шкіру та запобігають її обвисанню` : `✿ полиненасыщенных жирные кислоты питают кожу и предотвращают ее обвисание`}</p>
                <p>{context.ua ? `✿ Вітамін Е виводить з клітин шкіри шкідливі радикали, бореться зі зморшками` : `✿ Витамин Е выводит из клеток кожи вредные радикалы, борется с морщинами`}</p>
              </div>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil05.jpg" alt={context.ua ? `сиродавлена олія чорного кунжуту` : `сыродавленное масло черного кунжута`} />
            <div className={s.bar_desc}>
              <p><span>{context.ua ? `сиродавлена олія` : `сиродавленное масло`}</span></p>
              <h3>{context.ua ? `чорного кунжуту` : `черного кунжута`}</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>{context.ua ? `✿ Має всі корисні властивості кунжутного масла з білого насіння` : `✿ Имеет все полезные свойства кунжутного масла из белого семян`}</p>
                <p>{context.ua ? `✿ відрізняється більш великою кількістю корисних речовин` : `✿ отличается более большим количеством полезных веществ`}</p>
                <p>{context.ua ? `✿ Містить вітаміни E, K, D` : `✿ Содержит витамины E, K, D`}</p>
                <p>{context.ua ? `✿ Джерело сезамоліна - антиоксиданту, що омолоджує клітини` : `✿ Источник сезамолина - антиоксиданта, что омолаживает клетки`}</p>
              </div>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil06.jpg" alt={context.ua ? `сиродавлена олія волоського горіха` : `сыродавленное масло грецкого горіха`} />
            <div className={s.bar_desc}>
              <p><span>{context.ua ? `сиродавлена олія` : `сиродавленное масло`}</span></p>
              <h3>{context.ua ? `волоського горіха` : `грецкого горіха`}</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>{context.ua ? `✿ Ця олія дуже корисна для судин` : `✿ Это масло очень полезно для сосудов`}</p>
                <p>{context.ua ? `✿ Відрізняється чудовим смаком і високим вмістом поживних речовин і вітамінів` : `✿ Отличается превосходным вкусом и высоким содержанием питательных веществ и витаминов`}</p>
                <p>{context.ua ? `✿ В її складі містяться такі вітаміни як B, Е, К` : `✿ В его составе содержатся такие витамины как B, Е, К`}</p>
                <p>{context.ua ? `✿ Має багатий набір мікроелементів: Cu, I, Mg, Ca, Zn, Co, Fe` : `✿ Имеет богатый набор микроэлементов: Cu, I, Mg, Ca, Zn, Co, Fe`}</p>
              </div>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil07.jpg" alt={context.ua ? `сиродавлена олія білого кунжуту` : `сыродавленное масло белого кунжута`} />
            <div className={s.bar_desc}>
              <p><span>{context.ua ? `сиродавлена олія` : `сиродавленное масло`}</span></p>
              <h3>{context.ua ? `білого кунжуту` : `белого кунжута`}</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>{context.ua ? `✿ Містить сезамолін - антиоксидант, що омолоджує клітини, регулює кисневий обмін і шлункового соку і жировий обмін` : `✿ Содержит сезамолин - антиоксидант, омолоджуюе клетки, регулирует кислородный обмен и желудочного сока и жировой обмен`}</p>
                <p>{context.ua ? `✿ Нормалізує кислотність шлункового соку` : `✿ Нормализует кислотность желудочного сока`}</p>
                <p>{context.ua ? `✿ Зволожує, живить і очищає шкіру, призупиняючи її старіння` : `✿ Увлажняет, питает и очищает кожу, приостанавливая ее старение`}</p>
              </div>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil08.jpg" alt={context.ua ? `сиродавлена олія лляна` : `сыродавленное масло льняное`} />
            <div className={s.bar_desc}>
              <p><span>{context.ua ? `сиродавлена олія` : `сиродавленное масло`}</span></p>
              <h3>{context.ua ? `лляна` : `льняное`}</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>{context.ua ? `✿ Вміст Омега-3 перевершує навіть  риб'ячий жир. Має ідеально збалансоване співвідношення Омега-6 і Омега-3` : `✿ Содержание Омега-3 превосходит даже рыбий жир. Имеет идеально сбалансированное соотношение Омега-6 и Омега-3`}</p>
                <p>{context.ua ? `✿ Допомагає швидко виводити токсини з печінки` : `✿ Помогает быстро выводить токсины из печени`}</p>
                <p>{context.ua ? `✿ містить значну кількість токоферолів (вітамін Е)` : `✿ содержит значительное количество токоферолов (витамин Е)`}</p>
              </div>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil09.jpg" alt={context.ua ? `сиродавлена олія соняшникова` : `сыродавленное масло подсолнечное`} />
            <div className={s.bar_desc}>
              <p><span>{context.ua ? `сиродавлена олія` : `сиродавленное масло`}</span></p>
              <h3>{context.ua ? `соняшникова` : `подсолнечное`}</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>{context.ua ? `✿ Відмінне джерело лецитину` : `✿ Отличный источник лецитина`}</p>
                <p>{context.ua ? `✿ Підтримує активність і ясність розуму` : `✿ Поддерживает активность и ясность ума`}</p>
                <p>{context.ua ? `✿ Допомагає відновити сили при анемії і стресах` : `✿ Помогает восстановить силы при анемии и стрессах`}</p>
                <p>{context.ua ? `✿ Містить багато токоферолу (вітаміну Е) який є найважливішим антиоксидантом.` : `✿ Содержит много токоферола (витамина Е), который является важнейшим антиоксидантом.`}</p>
              </div>
            </div>
          </div>

          <div className={cn(s.bar, s.placeholder)}>
            <img src="https://oliya.com.ua/img/landing/oil11.jpg" alt="placeholder" />
            <div className={s.bar_desc}>
              <div className={cn(s.oil_txt, s.left)}>
              </div>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/oil10.jpg" alt={context.ua ? `сиродавлена олія кокосова` : `сыродавленное масло кокосовое`} />
            <div className={s.bar_desc}>
              <p><span>{context.ua ? `сиродавлена олія` : `сыродавленное масло`}</span></p>
              <h3>{context.ua ? `кокосова` : `кокосовое`}</h3>
              <hr />
              <div className={cn(s.oil_txt, s.left)}>
                <p>{context.ua ? `✿ Підтримує роботу мозку і підвищує енергетичний потенціал` : `✿ Поддерживает работу мозга и повышает энергетический потенциал`}</p>
                <p>{context.ua ? `✿ Добре підходить для випічки і виготовлення кондитерських виробів` : `✿ Хорошо подходит для выпечки и изготовления кондитерских изделий`}</p>
                <p>{context.ua ? `✿ Застосовуючи масло кокоса зовнішньо згладжують зморшки, шкіра набуває еластичність` : `✿ Применяя масло кокоса внешне сглаживают морщины, кожа приобретает эластичность`}</p>
              </div>
            </div>
          </div>

          <div className={cn(s.bar, s.placeholder)}>
            <img src="https://oliya.com.ua/img/landing/oil11.jpg" alt="placeholder" />
            <div className={s.bar_desc}>
              <div className={cn(s.oil_txt, s.left)}>
              </div>
            </div>
          </div>

        </div>

        <h2>{context.ua ? `Дуже корисні олії. А як вони смакують?` : `Очень полезны масла. А как они на вкус?`}</h2>
        <p className={s.h2subtitle}>
          {context.ua ? `Смачні, без гіркоти, мають тонкий приємний аромат.
          Не будемо багато казати, краще спробувати.
          Ми можемо віджати для вас навіть 100 мл олії,
          щоб ви мали змогу особисто відчути її якості.` : `Вкусные, без горечи, имеют тонкий приятный аромат.
          Не будем много говорить, лучше попробовать.
          Мы можем отжать для вас даже 100 мл масла,
          чтобы вы имели возможность лично ощутить его качества.`}
        </p>

        <div className={cn(s.banner, s.banner2, s.white)}>
          <div>
            <h1>{context.ua ? `Природний чистий смак` : `Природный чистый вкус`}</h1>
            <p className={s.subtitle}>{context.ua ? `відрізняється так, як смак джерельної води від кип'яченої` : `отличается так, как вкус родниковой воды от кипяченой`} </p>
            <br />
            <Link to="/shop" className={cn("button", s.big_button, s.bgbeige)}>{context.ua ? `Вибрати найкращу олію` : `Выбрать лучшее масло`} &#128722;</Link> <Link className={cn("button", s.big_button, s.bgbeige)} to="/about">{context.ua ? `Або дізнатись більше` : `Или узнать больше`} ►</Link>
          </div>
        </div>


        <h2 id="special">{context.ua ? `Ми прагнемо зробити ідеальну олію` : `Мы стремимся сделать идеальное масло`}</h2>
        <p className={s.h2subtitle}>{context.ua ? `подивиться, як дбайливо ми її виготовляємо` : `посмотрите, как заботливо мы его изготавливаем`}</p>

        <div className={s.bars}>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar0.jpg" alt={context.ua ? `Тільки свіжий врожай` : `Только свежий урожай`} />
            <div className={s.bar_desc}>

              <h3>{context.ua ? `Тільки свіжий врожай` : `Только свежий урожай`}</h3>
              <hr />
              <p>{context.ua ? `це смачніше, ми перевірили` : `так вкуснее, мы проверили`}</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar1.jpg" alt={context.ua ? `Обираємо якісне насіння` : `Выбираем лучшие семена`} />
            <div className={s.bar_desc}>
              <h3>{context.ua ? `Обираємо якісне насіння` : `Выбираем лучшие семена`}</h3>
              <hr />
              <p>{context.ua ? `тому що ми фанати якості` : `потому что мы фанаты качества`}</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar2.jpg" alt={context.ua ? `Використовуємо цільне зерно` : `Используем цельное зерно`} />
            <div className={s.bar_desc}>
              <h3>{context.ua ? `Використовуємо цільне зерно` : `Используем цельное зерно`}</h3>
              <hr />
              <p>{context.ua ? `олія не потребує фільтрування` : `масло не нуждается в фильтрации`}</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar3.jpg" alt={context.ua ? `Миємо під проточною водою` : `Моем под проточной водой`} />
            <div className={s.bar_desc}>
              <h3>{context.ua ? `Миємо під проточною водою` : `Моем под проточной водой`}</h3>
              <hr />
              <p>{context.ua ? `особливо чистий смак` : `особо чистый вкус`}</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar4.jpg" alt={context.ua ? `Сушимо при температурі 30°C` : `Сушим при температуре 30°C`} />
            <div className={s.bar_desc}>
              <h3>{context.ua ? `Сушимо при температурі 30°C` : `Сушим при температуре 30°C`}</h3>
              <hr />
              <p>{context.ua ? `не смажимо та не перегріваємо` : `не жарим и не перегреваем`}</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar5.jpg" alt={context.ua ? `Віджимаємо на дубовому пресі` : `Выжимаем на дубовом прессе`} />
            <div className={s.bar_desc}>
              <h3>{context.ua ? `Віджимаємо на дубовому пресі` : `Выжимаем на дубовом прессе`}</h3>
              <hr />
              <p>{context.ua ? `без жодного контакту з металом` : `без контакта масла с металлом`}</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar8.jpg" alt={context.ua ? `Розливаємо в темні скляни пляшки` : `Разливаем в темные стеклянные бутылки`} />
            <div className={s.bar_desc}>
              <h3>{context.ua ? `Розливаємо в темні скляні пляшки` : `Разливаем в темные стеклянные бутылки`}</h3>
              <hr />
              <p>{context.ua ? `та обертаємо в паперову етикетку` : `и заворачиваем в бумажную этикетку`}</p>
            </div>
          </div>

          <div className={s.bar}>
            <img src="https://oliya.com.ua/img/landing/bar9.jpg" alt={context.ua ? `Відправляємо Новою Поштою` : `Отправляем Новой Почтой`} />
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

        <div className={cn(s.banner, s.banner3, s.white, s.long)}>

          <div className={s.gears}>

            <div className={s.gear2col}>
              <h2>{context.ua ? `А як же виробляється звичайна рафінована олія?` : `А как же производится обычное рафинированное масло?`} </h2>
              <p className={s.h2subtitle}>
                {context.ua ? `Ось 8 головних ступенів промислового виробництва та очищення рослинної олії` : `Вот 8 главных ступеней промышленного производства и очистки растительного масла`}
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
                <p>{context.ua ? `сырье помещают в НЕФРАС или экстракционный бензин` : `сировину розміщують В НЕФРАСі або за допомогою екстракційного бензину`}</p>
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

        <h2>{context.ua ? `Для чого вони це все роблять?` : `Для чего они это все делают?`}</h2>
        <p className={s.h2subtitle}>
          {context.ua ? `Це робиться для того, щоб олія не окислювалась і могла зберігатися дуже довго. Звичайно, корисних речовин при цьому залишається зовсім небагато. Ми вважаємо, що краще отримати менше олії, нехай вона буде дорожче і не зберігається довго. Але це буде справжня олія.` : `Это делается для того, чтобы масло не окислялось и могло храниться очень долго. Конечно, полезных веществ при этом остается совсем немного. Мы считаем, что лучше получить меньше масла, пусть оно будет дороже и не хранится долго. Но это будет настоящее масло.`}
          <br />
          <b>{context.ua ? `Ми обираємо справжнє` : `Мы выбираем настоящее`}</b>
        </p>

        <div className={cn(s.banner, s.banner4, s.white)}>
          <div>
            <h1>{context.ua ? `Ми не створюємо користь` : `Мы не создаем пользу`}</h1>
            <p className={s.subtitle}>{context.ua ? `ми лише дбайливо зберігаємо те, що було дано природою` : `мы лишь бережно сохраняем то, что было дано природой`} </p>
            <br />
            <Link to="/shop" className={cn("button", s.big_button, s.bgbeige)}>{context.ua ? `Та сама олія` : `То самое масло`} &#128722;</Link> <Link className={cn("button", s.big_button, s.bgbeige)} to="/about">{context.ua ? `Або дізнатись ще більше` : `Или узнать ещё больше`} ►</Link>
          </div>
        </div>

      </main>

      <Footer />
    </HelmetProvider>
  );
}

export default HomePage;
