export type TopicArticle = {
  id: string;
  topicId: string;
  stageId: string;
  title: string;
  slug: string;
  content: string;
  relatedTools: string[];
  relatedBlogPosts: string[];
};

export const topicArticles: TopicArticle[] = [
  {
    id: 'how-conception-happens',
    topicId: 'basics',
    stageId: 'pregnancy-prep',
    title: 'Як відбувається зачаття',
    slug: 'yak-vidbuvaietsya-zachattya',
    // Paste the full HTML content here using backticks for multiline string
    content: `
      <article>
          <h2>Як відбувається зачаття: Дивовижна подорож нового життя</h2>

          <p>Зачаття – це одне з найбільших чудес природи, початок неймовірної подорожі, яка призводить до появи нового життя. Для майбутніх батьків розуміння цього процесу не лише розширює кругозір, а й допомагає краще планувати вагітність. На нашому порталі ми завжди прагнемо надати вам надійну та зрозумілу інформацію, тож давайте разом поринемо у світ зачаття.</p>

          <h3>Що таке зачаття?</h3>
          <p>Простими словами, <strong>зачаття</strong> (або запліднення) – це процес злиття чоловічої статевої клітини (сперматозоїда) з жіночою статевою клітиною (яйцеклітиною). Ця подія дає початок утворенню унікального організму з власним генетичним кодом.</p>

          <h3>Ключові гравці: Яйцеклітина та сперматозоїд</h3>
          <p>Щоб зачаття відбулося, потрібна ідеальна зустріч двох головних "героїв":</p>
          <ol>
              <li>
                  <strong>Яйцеклітина:</strong> Це найбільша клітина в організмі жінки, яка зберігає її генетичну інформацію. Зазвичай, під час кожного менструального циклу дозріває одна (рідше дві) яйцеклітина. Вона вивільняється з яєчника під час овуляції і живе приблизно <strong>12-24 години</strong>. Якщо протягом цього часу її не запліднить сперматозоїд, вона розчиняється.
              </li>
              <li>
                  <strong>Сперматозоїд:</strong> Це крихітна, рухлива клітина, що виробляється в чоловічому організмі. Сперматозоїди містять генетичний матеріал чоловіка і мають "хвіст", який дозволяє їм рухатися. Після еякуляції вони можуть виживати в жіночих статевих шляхах до <strong>3-5 днів</strong>, а іноді й довше, очікуючи на яйцеклітину.
              </li>
          </ol>

          <h3>Етапи зачаття: Крок за кроком до нового життя</h3>
          <p>Весь процес зачаття можна розділити на кілька важливих етапів:</p>

          <h4>1. Овуляція: Момент ікс для яйцеклітини</h4>
          <p>Все починається з <strong>овуляції</strong>. Це фаза менструального циклу, коли зріла яйцеклітина виходить з яєчника і потрапляє у фаллопієву трубу (маткову трубу). Зазвичай, овуляція відбувається приблизно в середині циклу, але це індивідуально для кожної жінки. Відстеження овуляції є ключовим для пар, які прагнуть завагітніти.</p>
          <ul>
              <li><strong>Порада:</strong> Використання <a href="/tools/ovulation-calculator">калькулятора овуляції</a> або тестів на овуляцію може значно підвищити ваші шанси на успішне зачаття.</li>
          </ul>

          <h4>2. Зустріч: Подорож сперматозоїдів</h4>
          <p>Після статевого акту мільйони сперматозоїдів починають свою непросту подорож жіночими статевими шляхами. Їхня мета – дістатися до фаллопієвої труби, де їх може чекати яйцеклітина. Це справжній "марафон", адже більшість сперматозоїдів гине на цьому шляху. Лише найсильніші та найспритніші досягають цілі.</p>

          <h4>3. Запліднення: Вирішальна мить</h4>
          <p>Коли сперматозоїди досягають яйцеклітини у фаллопієвій трубі, вони намагаються проникнути крізь її зовнішню оболонку. Хоча до яйцеклітини можуть дістатися сотні сперматозоїдів, лише <strong>один-єдиний</strong> найвдаліший зможе проникнути всередину. Як тільки один сперматозоїд успішно проникає, яйцеклітина змінює свою оболонку, блокуючи доступ іншим сперматозоїдам.</p>
          <p>У цей момент відбувається злиття генетичного матеріалу яйцеклітини та сперматозоїда. Утворюється одна-єдина клітина – <strong>зигота</strong>. Це і є початок нового життя!</p>

          <h4>4. Подорож та поділ: Від зиготи до бластоцисти</h4>
          <p>Після запліднення зигота починає ділитися, рухаючись фаллопієвою трубою до матки. Цей поділ відбувається дуже швидко:</p>
          <ul>
              <li>Спочатку одна клітина ділиться на дві.</li>
              <li>Потім дві – на чотири, і так далі.</li>
              <li>Через 3-4 дні після запліднення, коли ембріон вже складається з 16-32 клітин, він називається <strong>морулою</strong>.</li>
              <li>Приблизно на 5-6 день, морула перетворюється на <strong>бластоцисту</strong> – порожнисту кульку з сотень клітин, яка має внутрішню клітинну масу (майбутній ембріон) і зовнішній шар (майбутня плацента).</li>
          </ul>

          <h4>5. Імплантація: Заселення у матці</h4>
          <p>Бластоциста досягає матки і "прикріплюється" до її стінки – ендометрію. Цей процес називається <strong>імплантацією</strong>. Він зазвичай відбувається на 6-12 день після запліднення. Після успішної імплантації починає вироблятися гормон ХГЛ (хоріонічний гонадотропін людини), який і є "індикатором" вагітності, що виявляється тестами на вагітність.</p>
          <ul>
              <li><strong>Пам'ятайте:</strong> Саме успішна імплантація є критично важливою для подальшого розвитку вагітності.</li>
          </ul>

          <h3>Коли найкращий час для зачаття?</h3>
          <p>Враховуючи життєздатність яйцеклітини (12-24 години) та сперматозоїдів (до 5 днів), найвищі шанси на зачаття випадають на так зване "фертильне вікно". Це період, що включає <strong>день овуляції та 5 днів до неї</strong>. Регулярний статевий акт протягом цього періоду значно збільшує ймовірність зачаття.</p>

          <h3>Що впливає на зачаття?</h3>
          <p>На успішність зачаття можуть впливати багато факторів, як з боку жінки, так і чоловіка:</p>
          <ul>
              <li><strong>Вік:</strong> Фертильність знижується з віком обох партнерів.</li>
              <li><strong>Здоров'я:</strong> Хронічні захворювання, інфекції, гормональні порушення.</li>
              <li><strong>Спосіб життя:</strong> Стрес, неправильне харчування, шкідливі звички (куріння, алкоголь).</li>
              <li><strong>Вага:</strong> Надмірна або недостатня вага.</li>
              <li><strong>Частота статевих актів:</strong> Регулярність підвищує шанси.</li>
          </ul>

          <h3>Висновок</h3>
          <p>Процес зачаття – це складна, але водночас дивовижна біологічна подія, яка вимагає злагодженої роботи двох організмів. Розуміння цих етапів може допомогти вам відчувати себе більш впевнено та усвідомлено на шляху до батьківства. Якщо у вас виникають питання або труднощі із зачаттям, не соромтеся звернутися до фахівця – лікаря-гінеколога чи репродуктолога. Вони нададуть вам індивідуальні поради та підтримку.</p>
          <p>Бажаємо вам успіхів на вашому шляху до поповнення сім'ї!</p>
      </article>
    `,
    relatedTools: ['ovulation-calculator', 'pregnancy-test'],
    relatedBlogPosts: ['prepare-for-pregnancy'],
  },
  {
    id: 'when-and-how-to-get-pregnant',
    topicId: 'basics',
    stageId: 'pregnancy-prep',
    title: 'Коли і як найкраще завагітніти',
    slug: 'koly-i-yak-naykrashche-zavagitnity',
    content: '<p>Поради щодо вибору часу для зачаття, оптимальні дні циклу, здоровий спосіб життя для підвищення шансів.</p>',
    relatedTools: ['ovulation-calculator'],
    relatedBlogPosts: ['prepare-for-pregnancy'],
  },
  {
    id: 'how-to-get-pregnant-faster',
    topicId: 'basics',
    stageId: 'pregnancy-prep',
    title: 'Як швидше завагітніти',
    slug: 'yak-shvydshe-zavagitnity',
    content: '<p>Практичні поради для підвищення фертильності, здоровий спосіб життя, медичні рекомендації.</p>',
    relatedTools: ['ovulation-calculator'],
    relatedBlogPosts: ['prepare-for-pregnancy'],
  },
  {
    id: 'pregnancy-during-period',
    topicId: 'basics',
    stageId: 'pregnancy-prep',
    title: 'Чи можна завагітніти під час місячних?',
    slug: 'chy-mozhna-zavagitnity-pid-chas-misyachnykh',
    content: '<p>Міфи та реальність щодо ймовірності завагітніти під час менструації. Наукові факти та пояснення.</p>',
    relatedTools: ['ovulation-calculator'],
    relatedBlogPosts: ['prepare-for-pregnancy'],
  },
  // Овуляція та фертильність
  {
    id: 'how-ovulation-works',
    topicId: 'ovulation',
    stageId: 'pregnancy-prep',
    title: 'Як працює овуляція',
    slug: 'yak-pratsyue-ovulyatsiya',
    content: '<p>Опис процесу овуляції, як вона відбувається, біологія та фізіологія.</p>',
    relatedTools: ['ovulation-calculator'],
    relatedBlogPosts: [],
  },
  {
    id: 'ovulation-symptoms',
    topicId: 'ovulation',
    stageId: 'pregnancy-prep',
    title: 'Симптоми овуляції',
    slug: 'symptomy-ovulyatsiyi',
    content: '<p>Які симптоми вказують на овуляцію, як їх розпізнати.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'ovulation-tests',
    topicId: 'ovulation',
    stageId: 'pregnancy-prep',
    title: 'Тести на овуляцію',
    slug: 'testy-na-ovulyatsiyu',
    content: '<p>Огляд тестів на овуляцію, як ними користуватись.</p>',
    relatedTools: ['ovulation-calculator'],
    relatedBlogPosts: [],
  },
  {
    id: 'cycle-tracking',
    topicId: 'ovulation',
    stageId: 'pregnancy-prep',
    title: 'Трекінг циклу (в т.ч. калькулятор овуляції)',
    slug: 'treking-tsyklu',
    content: '<p>Як відстежувати цикл, використання калькулятора овуляції.</p>',
    relatedTools: ['ovulation-calculator'],
    relatedBlogPosts: [],
  },
  {
    id: 'irregular-cycle',
    topicId: 'ovulation',
    stageId: 'pregnancy-prep',
    title: 'Нерегулярний цикл і зачаття',
    slug: 'neregulyarnyy-tsykl-i-zachattya',
    content: '<p>Поради для жінок з нерегулярним циклом щодо зачаття.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'fertile-days',
    topicId: 'ovulation',
    stageId: 'pregnancy-prep',
    title: 'Фертильні дні: як визначити',
    slug: 'fertylni-dni-yak-vyznachyty',
    content: '<p>Як визначити фертильні дні для підвищення шансів на зачаття.</p>',
    relatedTools: ['ovulation-calculator'],
    relatedBlogPosts: [],
  },
  // Репродуктивне здоров'я
  {
    id: 'male-female-fertility',
    topicId: 'reproductive-health',
    stageId: 'pregnancy-prep',
    title: 'Фертильність: чоловіча та жіноча',
    slug: 'fertilnist-cholovicha-ta-zhinocha',
    content: '<p>Відмінності між чоловічою та жіночою фертильністю.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'age-and-fertility',
    topicId: 'reproductive-health',
    stageId: 'pregnancy-prep',
    title: 'Вік і фертильність (після 35)',
    slug: 'vik-i-fertilnist',
    content: '<p>Як вік впливає на фертильність, особливо після 35 років.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'identify-fertility-problems',
    topicId: 'reproductive-health',
    stageId: 'pregnancy-prep',
    title: 'Ідентифікація проблем із фертильністю',
    slug: 'identyfikatsiya-problem-fertilnosti',
    content: '<p>Як розпізнати проблеми з фертильністю.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'infertility-causes',
    topicId: 'reproductive-health',
    stageId: 'pregnancy-prep',
    title: 'Інфертильність: причини та симптоми',
    slug: 'infertilnist-prychyny-symptomy',
    content: '<p>Основні причини та симптоми безпліддя.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'infertility-treatment',
    topicId: 'reproductive-health',
    stageId: 'pregnancy-prep',
    title: 'Лікування безпліддя: медикаментозне / IVF / натуральне',
    slug: 'likuvannya-bezpliddya',
    content: '<p>Огляд методів лікування безпліддя: медикаментозне, ЕКО, натуральне.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  // Профілактика та обстеження
  {
    id: 'preconception-checkup',
    topicId: 'prevention',
    stageId: 'pregnancy-prep',
    title: 'Прегравідарна консультація (checkup перед вагітністю)',
    slug: 'pregravidarna-konsultatsiya',
    content: '<p>Що таке прегравідарна консультація і чому вона важлива.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'genetic-risks',
    topicId: 'prevention',
    stageId: 'pregnancy-prep',
    title: 'Генетичні ризики та скринінги',
    slug: 'genetichni-ryzyky-ta-skryningy',
    content: '<p>Які генетичні ризики існують і які скринінги варто пройти.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'contraception-stop',
    topicId: 'prevention',
    stageId: 'pregnancy-prep',
    title: 'Зупинка контрацепції: що потрібно знати',
    slug: 'zupynka-kontratseptsyi',
    content: '<p>Що відбувається після припинення контрацепції, як це впливає на зачаття.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  // Харчування та спосіб життя
  {
    id: 'nutrition-prep',
    topicId: 'nutrition',
    stageId: 'pregnancy-prep',
    title: 'Харчування при підготовці до вагітності',
    slug: 'kharchuvannya-pry-pidgotovtsi',
    content: '<p>Основи здорового харчування для майбутніх батьків.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'vitamins',
    topicId: 'nutrition',
    stageId: 'pregnancy-prep',
    title: 'Вітаміни (включно з фолієвою кислотою)',
    slug: 'vitaminy-foliyova-kyslota',
    content: '<p>Які вітаміни важливі при підготовці до вагітності.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'sport-activity',
    topicId: 'nutrition',
    stageId: 'pregnancy-prep',
    title: 'Спорт та фізична активність',
    slug: 'sport-ta-fizychna-aktyvnist',
    content: '<p>Роль спорту та фізичної активності у підготовці до вагітності.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'smoking-alcohol',
    topicId: 'nutrition',
    stageId: 'pregnancy-prep',
    title: 'Куріння, алкоголь і інші шкідливі звички',
    slug: 'kuryinnya-alkogol-shkidlyvi-zvychky',
    content: '<p>Вплив шкідливих звичок на фертильність і здоров’я.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'psychotropic-drugs',
    topicId: 'nutrition',
    stageId: 'pregnancy-prep',
    title: 'Психотропні засоби (антидепресанти тощо)',
    slug: 'psykhotropni-zasoby',
    content: '<p>Вплив психотропних засобів на зачаття і вагітність.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  // Психологічна підготовка
  {
    id: 'psychological-readiness',
    topicId: 'psychology',
    stageId: 'pregnancy-prep',
    title: 'Психологічна готовність до батьківства',
    slug: 'psykholohichna-hotovnist',
    content: '<p>Як зрозуміти, що ви психологічно готові до батьківства.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'partner-support',
    topicId: 'psychology',
    stageId: 'pregnancy-prep',
    title: 'Емоційна підтримка партнера',
    slug: 'emotsiyna-pidtrymka-partnera',
    content: '<p>Як підтримати партнера під час підготовки до вагітності.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'stress-management',
    topicId: 'psychology',
    stageId: 'pregnancy-prep',
    title: 'Як справлятись зі стресом',
    slug: 'yak-spravlyatys-zi-stresom',
    content: '<p>Поради щодо управління стресом у період планування вагітності.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'psychological-infertility',
    topicId: 'psychology',
    stageId: 'pregnancy-prep',
    title: 'Психологічні аспекти лікування безпліддя',
    slug: 'psykholohichni-aspekty-likuvannya-bezpliddya',
    content: '<p>Психологічна підтримка під час лікування безпліддя.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  // Планування сім’ї
  {
    id: 'when-to-start',
    topicId: 'family-planning',
    stageId: 'pregnancy-prep',
    title: 'Коли варто починати',
    slug: 'koly-varto-pochynaty',
    content: '<p>Коли найкраще починати планування сім’ї.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'budget-planning',
    topicId: 'family-planning',
    stageId: 'pregnancy-prep',
    title: 'Планування бюджету',
    slug: 'planuvannya-byudzhetu',
    content: '<p>Як планувати бюджет для майбутньої дитини.</p>',
    relatedTools: ['family-budget-planner'],
    relatedBlogPosts: [],
  },
  {
    id: 'boy-or-girl',
    topicId: 'family-planning',
    stageId: 'pregnancy-prep',
    title: 'Хлопчик чи дівчинка: міфи та реальність',
    slug: 'khlopchyk-chy-divchynka',
    content: '<p>Міфи та реальність щодо визначення статі дитини.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  // За триместрами
  {
    id: 'first-trimester',
    topicId: 'by-trimesters',
    stageId: 'pregnancy',
    title: 'Перший триместр (1–13 тиждень)',
    slug: 'pershyy-trymestr',
    content: '<p>Огляд першого триместру вагітності: основні зміни, поради, що очікувати.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'second-trimester',
    topicId: 'by-trimesters',
    stageId: 'pregnancy',
    title: 'Другий триместр (14–27 тиждень)',
    slug: 'druhyy-trymestr',
    content: '<p>Огляд другого триместру вагітності: розвиток, зміни, поради.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'third-trimester',
    topicId: 'by-trimesters',
    stageId: 'pregnancy',
    title: 'Третій триместр (28–40+ тиждень)',
    slug: 'tretij-trymestr',
    content: '<p>Огляд третього триместру вагітності: підготовка до пологів, зміни, поради.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  // Стан мами
  {
    id: 'physical-changes',
    topicId: 'mom-state',
    stageId: 'pregnancy',
    title: 'Фізичні зміни тіла',
    slug: 'fizychni-zminy-tila',
    content: '<p>Які фізичні зміни відбуваються з тілом майбутньої мами під час вагітності.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'symptoms',
    topicId: 'mom-state',
    stageId: 'pregnancy',
    title: 'Симптоми (нудота, втома, тощо)',
    slug: 'symptomy-vahitnosti',
    content: '<p>Поширені симптоми вагітності: нудота, втома, зміни настрою тощо.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'weight-gain',
    topicId: 'mom-state',
    stageId: 'pregnancy',
    title: 'Набір ваги',
    slug: 'nabir-vahy',
    content: '<p>Норми та рекомендації щодо набору ваги під час вагітності.</p>',
    relatedTools: ['pregnancy-weight-gain-calculator'],
    relatedBlogPosts: [],
  },
  {
    id: 'sleep',
    topicId: 'mom-state',
    stageId: 'pregnancy',
    title: 'Сон',
    slug: 'son-vahitnosti',
    content: '<p>Як змінюється сон під час вагітності та як покращити його якість.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'emotional-state',
    topicId: 'mom-state',
    stageId: 'pregnancy',
    title: 'Емоційний стан',
    slug: 'emotsiynyy-stan',
    content: '<p>Емоційні зміни, які можуть виникати під час вагітності, та як з ними впоратись.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'relationships-sex',
    topicId: 'mom-state',
    stageId: 'pregnancy',
    title: 'Стосунки та секс під час вагітності',
    slug: 'stosunky-ta-seks',
    content: '<p>Поради щодо стосунків і сексуального життя під час вагітності.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'work-career',
    topicId: 'mom-state',
    stageId: 'pregnancy',
    title: 'Робота та кар’єра',
    slug: 'robota-ta-kariera',
    content: '<p>Як поєднувати роботу, кар’єру та вагітність.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'beauty-care',
    topicId: 'mom-state',
    stageId: 'pregnancy',
    title: 'Краса догляд і стиль',
    slug: 'krasa-doglyad-i-styl',
    content: '<p>Догляд за собою, шкірою, волоссям, стиль під час вагітності.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  // Розвиток дитини
  {
    id: 'fetal-development',
    topicId: 'baby-development',
    stageId: 'pregnancy',
    title: 'Розвиток плода по тижнях',
    slug: 'rozvytok-ploda-po-tyzhniakh',
    content: '<p>Як розвивається плід по тижнях вагітності.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'multiple-pregnancy',
    topicId: 'baby-development',
    stageId: 'pregnancy',
    title: 'Багатоплідна вагітність (двійня, трійня)',
    slug: 'bahatoplidna-vahitnist',
    content: '<p>Особливості багатоплідної вагітності: двійня, трійня.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'zodiac-sign',
    topicId: 'baby-development',
    stageId: 'pregnancy',
    title: 'Знак зодіаку дитини (опційно, легкий контент)',
    slug: 'znak-zodiaku-dytyny',
    content: '<p>Який знак зодіаку може бути у дитини залежно від дати народження.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  // Здоров’я та безпека
  {
    id: 'prenatal-care',
    topicId: 'health-safety',
    stageId: 'pregnancy',
    title: 'Пренатальний догляд (візити, гінеколог)',
    slug: 'prenatalnyy-doglyad',
    content: '<p>Важливість регулярних візитів до гінеколога та пренатального догляду.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'tests-exams',
    topicId: 'health-safety',
    stageId: 'pregnancy',
    title: 'Аналізи та обстеження',
    slug: 'analizy-ta-obstezhennya',
    content: '<p>Які аналізи та обстеження проходять під час вагітності.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'screenings',
    topicId: 'health-safety',
    stageId: 'pregnancy',
    title: 'Скринінги',
    slug: 'skryningy',
    content: '<p>Які скринінги важливі під час вагітності.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'vaccination',
    topicId: 'health-safety',
    stageId: 'pregnancy',
    title: 'Вакцинація',
    slug: 'vaktsynatsiya',
    content: '<p>Які вакцини можна і потрібно робити під час вагітності.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'medications',
    topicId: 'health-safety',
    stageId: 'pregnancy',
    title: 'Ліки під час вагітності',
    slug: 'liky-pid-chas-vahitnosti',
    content: '<p>Які ліки дозволені, а які заборонені під час вагітності.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'complications',
    topicId: 'health-safety',
    stageId: 'pregnancy',
    title: 'Ускладнення та ризики',
    slug: 'uskladnennya-ta-ryzyky',
    content: '<p>Можливі ускладнення та ризики під час вагітності.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'high-risk-pregnancy',
    topicId: 'health-safety',
    stageId: 'pregnancy',
    title: 'Високоризикована вагітність',
    slug: 'vysokoryzykova-vahitnist',
    content: '<p>Що таке високоризикована вагітність і як за нею спостерігати.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'pregnancy-loss',
    topicId: 'health-safety',
    stageId: 'pregnancy',
    title: 'Переривання вагітності / викидень',
    slug: 'pereryvannya-vahitnosti',
    content: '<p>Причини, симптоми та підтримка при перериванні вагітності або викидні.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  // Харчування та активність
  {
    id: 'balanced-nutrition',
    topicId: 'nutrition-activity',
    stageId: 'pregnancy',
    title: 'Збалансоване харчування',
    slug: 'zbalansovane-kharchuvannya',
    content: '<p>Як організувати збалансоване харчування під час вагітності.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'foods-to-avoid',
    topicId: 'nutrition-activity',
    stageId: 'pregnancy',
    title: 'Продукти яких слід уникати',
    slug: 'produkty-yakyh-slid-unykaty',
    content: '<p>Яких продуктів слід уникати під час вагітності.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'vitamins-nutrients',
    topicId: 'nutrition-activity',
    stageId: 'pregnancy',
    title: 'Необхідні вітаміни та нутрієнти',
    slug: 'neobkhidni-vitaminy-ta-nutrienty',
    content: '<p>Які вітаміни та нутрієнти важливі для майбутньої мами.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'physical-activity',
    topicId: 'nutrition-activity',
    stageId: 'pregnancy',
    title: 'Фізична активність та вправи',
    slug: 'fizychna-aktyvnist-ta-vpravy',
    content: '<p>Які фізичні вправи та активність рекомендовані під час вагітності.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  // Підготовка до пологів
  {
    id: 'labor-signs',
    topicId: 'birth-prep',
    stageId: 'pregnancy',
    title: 'Ознаки початку пологів',
    slug: 'oznaky-pochatku-polohiv',
    content: '<p>Як розпізнати початок пологів.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'labor-stages',
    topicId: 'birth-prep',
    stageId: 'pregnancy',
    title: 'Етапи пологів',
    slug: 'etapy-polohiv',
    content: '<p>Які етапи проходить жінка під час пологів.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'types-of-labor',
    topicId: 'birth-prep',
    stageId: 'pregnancy',
    title: 'Типи пологів',
    slug: 'typy-polohiv',
    content: '<p>Які бувають типи пологів: природні, кесарів розтин тощо.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'pain-relief',
    topicId: 'birth-prep',
    stageId: 'pregnancy',
    title: 'Знеболення',
    slug: 'znebollennya',
    content: '<p>Які методи знеболення доступні під час пологів.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'birth-plan',
    topicId: 'birth-prep',
    stageId: 'pregnancy',
    title: 'План пологів',
    slug: 'plan-polohiv',
    content: '<p>Як скласти план пологів.</p>',
    relatedTools: ['birth-plan-worksheet'],
    relatedBlogPosts: [],
  },
  {
    id: 'partner-birth',
    topicId: 'birth-prep',
    stageId: 'pregnancy',
    title: 'Партнерські пологи',
    slug: 'partnerski-polohy',
    content: '<p>Що таке партнерські пологи і як до них підготуватись.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'hospital-bag',
    topicId: 'birth-prep',
    stageId: 'pregnancy',
    title: 'Збір сумки в пологовий',
    slug: 'zbir-sumky-v-polohovyy',
    content: '<p>Що взяти з собою в пологовий будинок.</p>',
    relatedTools: ['pregnancy-checklist'],
    relatedBlogPosts: [],
  },
  // Підготовка до дитини
  {
    id: 'home-prep',
    topicId: 'baby-prep',
    stageId: 'pregnancy',
    title: 'Підготовка дому та кімнати',
    slug: 'pidgotovka-domu-ta-kimnaty',
    content: '<p>Як підготувати дім і кімнату до народження дитини.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'shopping',
    topicId: 'baby-prep',
    stageId: 'pregnancy',
    title: 'Покупки до народження',
    slug: 'pokupky-do-narodzhennya',
    content: '<p>Що потрібно купити до народження дитини.</p>',
    relatedTools: ['pregnancy-checklist'],
    relatedBlogPosts: [],
  },
  {
    id: 'baby-shower',
    topicId: 'baby-prep',
    stageId: 'pregnancy',
    title: 'Baby shower ідеї',
    slug: 'baby-shower-ideyi',
    content: '<p>Ідеї для організації baby shower.</p>',
    relatedTools: [],
    relatedBlogPosts: [],
  },
  {
    id: 'financial-prep',
    topicId: 'baby-prep',
    stageId: 'pregnancy',
    title: 'Фінансова підготовка',
    slug: 'finansova-pidgotovka',
    content: '<p>Як фінансово підготуватись до появи дитини.</p>',
    relatedTools: ['family-budget-planner'],
    relatedBlogPosts: [],
  },
]; 