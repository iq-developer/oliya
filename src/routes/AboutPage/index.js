import cartImg from "./../../assets/cart.png";
import Nav from "./../../components/Nav";
import Footer from "./../../components/Footer";
import { Link } from "react-router-dom";
import { TextContext } from "./../../context/textContext";
import { useContext } from "react";
import s from "./style.module.css";
import cn from "classnames";
import { Helmet } from 'react-helmet';

const AboutPageUa = () => {
  const context = useContext(TextContext);

  return (
    <>
      <Helmet>
        <title>Про нас. Сиродавлена олія. Львів. Їжа як ліки</title>
        <meta name="description" content="Наша олійна історія або, чому саме сиродавлена олія, та навіщо треба дубова бочка" />
        <meta name="theme-color" content="#efd8b4" />
      </Helmet>
      <main className="about page content">

        <div className={cn(s.banner, s.parallax, s.white)}>
          <div>
            <h1>Наша олійна історія</h1>
            <p className={s.subtitle}>
              <b>чому саме сиродавлена олія та дубова бочка</b>
            </p>
            <br />
            <a onClick={context.scroll} className={cn("button", s.big_button, s.bgbeige)} href="">Як це було ▼</a>
          </div>
        </div>

        <h2>З чого все починалося</h2>

        <div className="p50 tLeft">
          <p>
            <b>Кілька років тому нас пригостили лляною олією і вона нам дуже
            сподобалась.</b>
          </p>

          <p>
            Ми і раніше багато чули про її користь для здоров&#39;я, і ​​високий
            вміст Омега-3.
          </p>

          <p>Це було як маленьке відкриття для нас тоді.</p>
          <blockquote>
            <p> &laquo;Вау, нарешті ми знайшли чудовий продукт!&raquo;.</p>
          </blockquote>

          <p>
            Але одна річ в тому маслі трохи заважала - легкий присмак гіркоти.
          </p>

          <blockquote>
            <p>
              &laquo;Ну, це особливість лляної олії, воно повинно бути з
              гірчинкою&raquo;, - думали ми.
            </p>
          </blockquote>

          <p>Лляна олія куплена в аптеці взагалі була жахливо гіркою.</p>
          <blockquote>
            <p>&laquo;Вона є лікарська&raquo; - заспокоював себе я.</p>
          </blockquote>
          <p>Але одного разу хтось пригостив нас свіжовіджатою лляною олією.</p>

          <blockquote>
            <p>І, &laquo;О, диво!&raquo; - в неї не було гіркоти.</p>

            <p>Ми не могли повірити. &laquo;Це точно лляна олія?&raquo;</p>
          </blockquote>

          <p>
            Вона була зовсім іншою - з абсолютно чистим смаком і більш стриманим
            трав&#39;яним ароматом.
          </p>

          <p>
            Ми задалися питанням, чому всі відомі нам до того лляні олії -
            гірчать?
          </p>

          <p>
            Адже ми купували справжні, нерафіновані олії. Напевно, найкращі, які
            можна було знайти на той момент.
          </p>

          <p>
            Ми стали шукати причину. Ми провели ціле дослідження. І, нарешті,
            розібралися.
          </p>

        </div>

        <div className={cn(s.banner, s.parallax1, s.white)}>
          <div>
          <h4 className="banner_title">Що ми з'ясували</h4>
            <p className={s.subtitle}>
            результати нашого олійного дослідження
            </p>
          </div>
        </div>

        <h3 className="mTop0">Відкриття №1. Сиродавлену олію не можна довго зберігати</h3>

        <div className="p50 tLeft">

          <p>
            Якщо лляне олія коштує багато днів при кімнатній температурі в магазині
            або аптеці - воно повністю згіркле.
          </p>

          <p>
            Так, на неї далі написано &quot;холодний віджим, Extra Virgin, термін
            зберігання (багато) місяців&quot;. Але воно вже окислене.
          </p>

          <p>
            Для просочення дерева таке олія чудово підходить. Для вживання в їжу -
            не найкраща.
          </p>

        </div>

        <h3>Відкриття №2. Виробники нагрівають (підсмажують) зерно</h3>

        <div className="p50 tLeft">

          <p>
            Навіщо взагалі нагрівати льон, якщо це псує олію? Вони що, не знають що
            роблять?
          </p>

          <p>
            Знають :) З сильно нагрітого льону можна віджати в 2-3 рази більше oлії
            ніж з холодного насіння. Це велика різниця в ціні. Вони вміють рахувати
            гроші.
          </p>

        </div>

        <h3>Відкриття №3. Всі сиродавлені oлії швидко окислюються</h3>

        <div className="p50 tLeft">

        <p>
            Лляна окислюється швидше за всі. Але всі
            сиродавлені oлії потрібно зберігати в холодильнику і не більше місяця.
            Після цього терміну вони теж їстівні, але якість вже не та.
        </p>
        <p>
            При
            кімнатній температурі через місяць сиродавлені oлії (крім кокосової) вже
            гірчать.
        </p>
        <p>
            Саме тому, промислово виробляють <b>рафіновану</b> олію, яку
            можна зберігати аж 2 роки.
          </p>

        </div>

        <h3>
          Відкриття №4. Шнековий олійний прес нагріває зерно в процесі подрібнення
        </h3>

        <div className="p50 tLeft">
          <p>
            Після місяця вивчення всіх доступних моделей пресів в України, Китая,
            США та ближнього зарубіжжя, картина стала трохи прояснюватися.
          </p>
          <p>
            Всі автоматичні (електричні і паливні) преси вичавлюють олію за допомогою
            шнека, при цьому неминуче нагрівають зерно. Це - частина процесу їх роботи.
          </p>
        </div>

        <h3>Відкриття №5. Олія трохи окислюється від контакту з металом</h3>

        <div className="p50 tLeft">
          <p>
            Я був не впевнений в цьому, але знайшов таку науково-дослідницьку публикацію з цього питання.
          </p>
          <p>
            (Знайти та додати посилання на наукову публикацію)
          </p>
        </div>

        <h3>Відкриття №6. </h3>

        <div className="p50 tLeft">

          <p>Ми просто хотіли вживати здорову рослинну олію. Не щось особливо розкішне.</p>

          <p>
            Добру, чисту, натуральну, не окислену олію. Але виявилося, що нам навіть
            нема де її купити.
          </p>
          <p>
            Ми шукали надійного виробника, якому ми б могли
            довіряти, але не знайшли.
          </p>

          <blockquote>
            <p>
              &laquo;Раз ніде купити, то треба вичавити таку олію самостійно&raquo;
              - промовила моя дружина
            </p>
          </blockquote>

          <p>
            Боротися з дружиною вже не було сенсу. Тоді ми дружно замовили виготовлення
            дубового преса і я зібрав цю важку конструкцію у нас на кухні.
          </p>

        </div>

        <div className={cn(s.banner, s.parallax2, s.white)}>
          <div>
          <h4 className="banner_title">Ось так ми обрали прес "дубова бочка"</h4>
            <p className={s.subtitle}>
              Бо тільки в ньому насіння і не нагріваються і не контактують з металом
            </p>
          </div>
        </div>

        <h2>Тепер є де купити справжню олію :)</h2>

        <div className="p50 tLeft">

          <p>
            Вичавлювати на цьому пресі виявилося нелегко. Але олія дійсно виходила (і продовжує виходити) казково
            гарною.
          </p>

          <p>
            Нам так подобалась, що ми додавати цю олію всюди - в супи, в каші в
            салати (хіба що в чай ​​не наливали).
          </p>

          <p>Поступово почали пригощати родичів, друзів та знайомих...</p>

          <p>
            І, ось, через 2 роки, ми відкрили цей сайт, на якому ви можете замовити
            віджимання і відправку цеї самої сиродавленої oлії з дубової бочки.
          </p>

          <p>
            Щоб зберегти його унікальні якості, відразу після віджимання ми
            розливаємо його в темні скляні пляшки, ставимо в холодильник і висилаємо
            в той же день Новою Поштою.
          </p>

          <p>
            Якщо ви живете у Львові, також можемо привезти замовлення вам до Ашану (пр.
            В'ячеслава Чорновола, 16і).
          </p>

          <p>
            Ми щасливі, що у нас є можливість поділитися такой чудовой олією з вами. І просимо, щоб
            ви замовляли трохи заздалегідь, ми не такі великі, і нам потрібно хоча-б
            пару днів, щоб виконати навіть маленький замовлення.
          </p>

          <p>
            <em>З любов&#39;ю, Володимир та Лілія</em>
          </p>

        </div>
      </main>
    </>
  );
};


const AboutPageRu = () => {
  const context = useContext(TextContext);

  return (
    <>
      <Helmet>
        <title>Про нас. Сиродавленное масло. Львов. Еда как лекарство</title>
        <meta name="description" content="Наша масляная история или, почему именно сиродавленное масло, и зачем понадобилась дубовая бочка" />
        <meta name="theme-color" content="#efd8b4" />
      </Helmet>
      <main className="about page content">

        <div className={cn(s.banner, s.parallax, s.white)}>
          <div>
            <h1>Наша масляная история</h1>
            <p className={s.subtitle}>
              <b>почему именно сиродавленное масло и дубовая бочка</b>
            </p>
            <br />
            <a onClick={context.scroll} className={cn("button", s.big_button, s.bgbeige)} href="">Как это было ▼</a>
          </div>
        </div>

        <h2> С чего все начиналось </h2>

        <div className="p50 tLeft">
          <p>
            <b> Несколько лет назад нас угостили льняным маслом и оно нам очень
            понравилась. </b>
          </p>

          <p>
            Мы по-прежнему много слышали о его пользе для здоровья, и высоком
            содержании Омега-3.
          </p>

          <p> Это было как маленькое открытие для нас тогда. </p>
          <blockquote>
            <p> &laquo;Вау, наконец-то мы нашли замечательный продукт!&raquo;. </p>
          </blockquote>

          <p>
            Но одна вещь в том масле немного мешала - легкий привкус горечи.
          </p>

          <blockquote>
            <p>
              &laquo;Ну, это особенность льняного масла, оно должно быть с
              горчинкой&raquo;, - думали мы.
            </p>
          </blockquote>

          <p> Льняное масло купленное в аптеке вообще была ужасно горьким. </p>
          <blockquote>
            <p> &laquo;Оно лекарственнон&raquo; - успокаивал себя я. </p>
          </blockquote>
          <p> Но однажды кто-то угостил нас свежеотжатым льняным маслом. </p>

          <blockquote>
            <p> И, &laquo;О, чудо!&raquo; - у него не было горечи. </p>

            <p> Мы не могли поверить. &laquo;Это точно льняное масло?&raquo; </p>
          </blockquote>

          <p>
            Оно было совсем другим - с совершенно чистым вкусом и более сдержанным
            травяным ароматом.
          </p>

          <p>
            Мы задались вопросом, почему все известные нам до того льняные масла
            горчат?
          </p>

          <p>
            Ведь мы покупали настоящие, нерафинированные масла. Наверное, лучшие, которые
            можно было найти на тот момент.
          </p>

          <p>
            Мы стали искать причину. Мы провели целое исследование. И, наконец,
            разобрались.
          </p>

        </div>

        <div className={cn(s.banner, s.parallax1, s.white)}>
          <div>
            <h4 className="banner_title">Что мы выяснили</h4>
            <p className={s.subtitle}>
            результаты нашего маслянного исследования
            </p>
          </div>
        </div>

        <h3 className="mTop0"> Открытие №1. Сиродавленное масло нельзя долго хранить </h3>

        <div className="p50 tLeft">

          <p>
            Если льняное масло стоит много дней при комнатной температуре в магазине
            или аптеке - оно полностью прогоркшее.
          </p>

          <p>
            Да, на нем дальше написано &quot;холодный отжим, Extra Virgin, срок
            хранения (много) месяцев &quot;. Но оно уже окисленное.
          </p>

          <p>
            Для пропитки дерева такое масло прекрасно подходит. Для употребления в пищу -
            не самое лучшее.
          </p>

        </div>

        <h3> Открытие №2. Производители нагревают (поджаривают) зерно </h3>

        <div className="p50 tLeft">

          <p>
            Зачем вообще нагревать лен, если это портит масло? Они что, не знают что
            делают?
          </p>

          <p>
            Знают :) С сильно нагретого льна можно отжать в 2-3 раза больше масла
            чем из холодных семян. Это большая разница в цене. Они умеют считать
            деньги.
          </p>

        </div>

        <h3> Открытие №3. Все сиродавленные масла быстро окисляются </h3>

        <div className="p50 tLeft">

        <p>
            Льняное окисляется быстрее всех. Но вообще все
            сиродавленные масла нужно хранить в холодильнике и не более месяца.
            После этого срока они тоже съедобные, но качество уже совсем не то.
        </p>
        <p>
            Если хранить при комнатной температуре, то через месяц сиродавленные масла (кроме кокосового) уже начинают горчить.
        </p>
        <p>
            Именно поэтому, промышленно производят <b> рафинированное </b> масло, которое
            можно хранить аж до 2 лет.
          </p>

        </div>

        <h3>
          Открытие №4. Шнековый маслопресс нагревает зерно в процессе измельчения
        </h3>

        <div className="p50 tLeft">
          <p>
            После месяца изучения всех доступных моделей прессов в Украине, Китая,
            США и ближнего зарубежья, картина стала немного проясняться.
          </p>
          <p>
            Все автоматические (электрические и топливные) прессы выжимают масло с помощью
            шнека, при этом неизбежно нагревается зерно. Это - часть процесса их работы.
          </p>
        </div>

        <h3> Открытие №5. Масло немного окисляется и от контакта с металлом </h3>

        <div className="p50 tLeft">
          <p>
            Я был не уверен в этом, но нашел такую ​​научно-исследовательскую публикацию по этому вопросу.
          </p>
          <p>
            (Найти и добавить ссылку на научную публикацию)
          </p>
        </div>

        <h3> Открытие №6. Есть технология, которая позволяет сохранить всю пользу масла </h3>

        <div className="p50 tLeft">

          Про дубовую бочку

          <p> Мы просто хотели употреблять здоровую растительное масло. Не что-то особенно роскошное. </p>

          <p>
            Хорошее, чистое, натуральное, не окисленное масло. Но оказалось, что нам даже
            негде его купить.
          </p>
          <p>
            Мы искали надежного производителя, которому мы могли бы доверять, но не нашли.
          </p>

          <blockquote>
            <p>
              &laquo;Раз негде купить, то надо выжать такое масло самостоятельно&raquo;
              - сказала моя жена
            </p>
          </blockquote>

          <p>
            Бороться с женой уже не было смысла :) Тогда мы дружно заказали изготовление
            дубового пресса и я собрал эту тяжелую конструкцию у нас на кухне.
          </p>

        </div>

         <div className={cn(s.banner, s.parallax2, s.white)}>
          <div>
          <h4 className="banner_title">Так мы выбрали пресс "дубовая бочка"</h4>
            <p className={s.subtitle}>
              Так как только в нем семена не нагреваются и не контактируют с металлом
            </p>
          </div>
        </div>

        <h2> Теперь есть где купить настоящую масло:) </h2>

        <div className="p50 tLeft">

          <p>
            Выжимать на этом прессе оказалось нелегко. Но масло действительно выходило (и продолжает выходить) сказочно хорошее.
          </p>

          <p>
            Нам так нравилась, что мы добавлять это масло везде - в супы, в каши в
            салаты (разве что в чай ​​не наливали).
          </p>

          <p> Постепенно начали угощать родственников, друзей и знакомых ... </p>

          <p>
            И, вот, спустя 2 года, мы открыли этот сайт, на котором вы тоже можете заказать
            отжим и отправку этого самоого сиродавленои масла из дубовой бочки.
          </p>

          <p>
            Чтобы сохранить уникальные качества масла, сразу после отжима мы
            разливаем его в темные стеклянные бутылки, ставим в холодильник и высылаем
            в тот же день Новой Почтой.
          </p>

          <p>
            Если вы живете во Львове, можем привезти ваш заказ к Ашану (пр.
            Вячеслава Черновола, 16и).
          </p>

          <p>
            Мы счастливы, что у нас есть возможность поделиться таким замечательным маслом с вами. И просим, ​​чтобы вы заказывали немного заранее, мы не такие большие, и нам нужно хотя-бы
            пару дней, чтобы выполнить даже маленький заказ.
          </p>

          <p>
            <em> С любовью; Владимир и Лилия </em>
          </p>

         </div>
      </main>
    </>
  );
};




function AboutPage() {
  const context = useContext(TextContext);

  if (context.ua) {
    return (
      <>
        <Nav />
        <AboutPageUa />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Nav />
        <AboutPageRu />
        <Footer />
      </>
    );
  }
}

export default AboutPage;
