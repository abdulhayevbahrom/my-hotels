const stats = [
  { value: "24/7", label: "Realtime nazorat" },
  { value: "99.9%", label: "Uptime barqarorligi" },
  { value: "1 kun", label: "Ishga tushirish" },
  { value: "40%+", label: "Vaqt tejalishi" },
];

const modules = [
  {
    title: "Xonalar Nazorati",
    text: "Band, bo'sh, bron va remont holatlari jonli dashboardda ko'rinadi.",
  },
  {
    title: "Bron va Check-in",
    text: "Tez check-in, bron boshqaruvi va avtomatik vaqt nazorati.",
  },
  {
    title: "To'lovlar Markazi",
    text: "Naqd, karta, click va bank to'lovlari yagona oqimda yuritiladi.",
  },
  {
    title: "Qarzdorlik Tizimi",
    text: "Qarzlar, qisman to'lovlar va ogohlantirishlar aniq nazorat qilinadi.",
  },
  {
    title: "VIP Jarayon",
    text: "VIP so'rovlar admin tasdig'i orqali xavfsiz boshqariladi.",
  },
  {
    title: "Kuchli Hisobotlar",
    text: "Daromad, xarajat, bandlik va oylik dinamika bir necha klikda.",
  },
];

const plans = [
  {
    name: "Start",
    price: "490 000",
    badge: "Kichik Mehmonxona",
    features: [
      "1 filial",
      "Asosiy PMS modullar",
      "Kunlik hisobotlar",
      "Telegram support",
    ],
  },
  {
    name: "Pro",
    price: "890 000",
    badge: "Tavsiya etiladi",
    featured: true,
    features: [
      "3 tagacha filial",
      "VIP va qarzdorlik oqimi",
      "Kengaytirilgan analitika",
      "Ustuvor texnik yordam",
    ],
  },
  {
    name: "Enterprise",
    price: "Kelishiladi",
    badge: "Tarmoq Biznesi",
    features: [
      "Cheksiz filial",
      "Maxsus integratsiyalar",
      "Shaxsiy onboarding",
      "SLA va maxsus qo'llab-quvvatlash",
    ],
  },
];

const faqs = [
  {
    q: "Dastur qancha vaqtda ishga tushadi?",
    a: "Standart holatda 1 ish kuni ichida sozlab, jamoaga topshiramiz.",
  },
  {
    q: "Eski daftardagi ma'lumotlarni ko'chirish mumkinmi?",
    a: "Ha, mavjud ro'yxatlaringizni import qilib, tizimga moslab beramiz.",
  },
  {
    q: "Internet bo'lmasa nima bo'ladi?",
    a: "Internet qaytgach ma'lumotlar sinxron yuradi. Uptime yuqori darajada.",
  },
  {
    q: "Xodimlar uchun alohida ruxsat bo'ladimi?",
    a: "Ha, har bir rolga alohida bo'lim va amal ruxsatlarini beramiz.",
  },
];

const cases = [
  {
    title: "Bandlik nazorati",
    result: "Kunlik xatolar 60% ga kamaydi",
    note: "Xona holatlari real vaqtda boshqarilganidan keyin noto'g'ri joylashuvlar keskin tushdi.",
  },
  {
    title: "To'lov intizomi",
    result: "Qarzdorlik yopilishi 2x tezlashdi",
    note: "Qarzdorlar oqimi va eslatmalar sabab kechikkan to'lovlar ancha kamaydi.",
  },
  {
    title: "Menejer samaradorligi",
    result: "Kunlik operatsiya vaqti 35% tejaldi",
    note: "Bir nechta jadval o'rniga yagona dashboard ishlatilgani jarayonni tezlashtirdi.",
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a href="#home" className="brand">
          OydinPlaza
          <span>PMS</span>
        </a>
        <nav className="topnav">
          <a href="#modules">Modullar</a>
          <a href="#pricing">Narxlar</a>
          <a href="#cases">Natijalar</a>
          <a href="#contact">Aloqa</a>
        </nav>
        <a className="btn btn-solid" href="#contact">
          Demo so'rash
        </a>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <p className="eyebrow">MEHMONXONA BOSHQARUVI UCHUN ZAMONAVIY YECHIM</p>
            <h1>
              Mehmonxonangizni
              <span> tezroq, aniqroq, foydaliroq </span>
              boshqaring
            </h1>
            <p className="hero-text">
              OydinPlaza PMS yordamida bron, xona holati, to'lovlar, qarzdorlik va
              hisobotlar bitta joyda. Jamoa xatolarini kamaytiring, bandlikni oshiring.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="#pricing">
                Narxlarni ko'rish
              </a>
              <a className="btn btn-ghost" href="tel:+998901234567">
                +998 90 123 45 67
              </a>
            </div>
            <div className="hero-meta">
              {stats.map((item) => (
                <div className="meta-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="visual-panel">
              <h3>Bugungi nazorat</h3>
              <ul>
                <li>
                  <span>Band xonalar</span>
                  <b>32 ta</b>
                </li>
                <li>
                  <span>Bo'sh xonalar</span>
                  <b>14 ta</b>
                </li>
                <li>
                  <span>Bronlar</span>
                  <b>9 ta</b>
                </li>
                <li>
                  <span>Qarzdorlar</span>
                  <b>7 ta</b>
                </li>
              </ul>
            </div>
            <div className="floating-note">
              <small>Oylik daromad</small>
              <strong>318 mln so'm</strong>
              <span>O'tgan oyga nisbatan +12.1%</span>
            </div>
          </div>
        </section>

        <section className="section problem-solution">
          <div className="reveal">
            <p className="eyebrow">NIMA UCHUN OYDINPLAZA</p>
            <h2>Muammolarni daromadga aylantiradigan tizim</h2>
          </div>
          <div className="ps-grid">
            <article className="ps-card reveal">
              <h3>Tarqoq jarayonlar</h3>
              <p>Daftar, excel, chat va qo'ng'iroqlar o'rniga yagona boshqaruv paneli.</p>
            </article>
            <article className="ps-card reveal">
              <h3>Nazorat yetishmasligi</h3>
              <p>Xona bandligi va to'lov oqimini bir qarashda ko'radigan bosh sahifa.</p>
            </article>
            <article className="ps-card reveal">
              <h3>Kechikkan qarorlar</h3>
              <p>Realtime signal va hisobotlar yordamida menejer tezroq qaror qiladi.</p>
            </article>
          </div>
        </section>

        <section id="modules" className="section modules">
          <div className="reveal">
            <p className="eyebrow">ASOSIY IMKONIYATLAR</p>
            <h2>Mehmonxona biznesi uchun to'liq modul to'plami</h2>
          </div>
          <div className="modules-grid">
            {modules.map((item) => (
              <article className="module-card reveal" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="cases" className="section cases">
          <div className="reveal">
            <p className="eyebrow">AMALIY NATIJA</p>
            <h2>Joriy etilgandan keyingi o'zgarishlar</h2>
          </div>
          <div className="cases-grid">
            {cases.map((item) => (
              <article className="case-card reveal" key={item.title}>
                <h3>{item.title}</h3>
                <strong>{item.result}</strong>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="section pricing">
          <div className="reveal">
            <p className="eyebrow">TARIFLAR</p>
            <h2>Biznesingiz bosqichiga mos paketni tanlang</h2>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`price-card reveal ${plan.featured ? "featured" : ""}`}
              >
                <p className="plan-badge">{plan.badge}</p>
                <h3>{plan.name}</h3>
                <p className="plan-price">
                  {plan.price}
                  <span>{plan.price === "Kelishiladi" ? "" : " / oyiga"}</span>
                </p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className="btn btn-solid" href="#contact">
                  Tanlash
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section faq">
          <div className="reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Ko'p beriladigan savollar</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details className="faq-item reveal" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-card reveal">
            <div>
              <p className="eyebrow">BEPUL DEMO</p>
              <h2>Dastur haqida batafsil ko'rib chiqamiz</h2>
              <p>
                20 daqiqalik demo orqali sizga aynan qaysi modul qancha foyda berishini
                hisoblab ko'rsatamiz.
              </p>
            </div>

            <form className="lead-form">
              <label>
                Ismingiz
                <input type="text" placeholder="Ism Familiya" />
              </label>
              <label>
                Telefon raqamingiz
                <input type="tel" placeholder="+998 90 123 45 67" />
              </label>
              <label>
                Mehmonxona nomi
                <input type="text" placeholder="Masalan, Oydin Plaza" />
              </label>
              <a className="btn btn-solid" href="https://t.me/oydinplaza" target="_blank" rel="noreferrer">
                Telegram orqali yuborish
              </a>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} OydinPlaza PMS. Barcha huquqlar himoyalangan.</p>
        <div>
          <a href="tel:+998901234567">+998 90 123 45 67</a>
          <a href="mailto:sales@oydinplaza.uz">sales@oydinplaza.uz</a>
        </div>
      </footer>

      <a
        href="https://wa.me/998901234567"
        className="floating-cta"
        target="_blank"
        rel="noreferrer"
      >
        Sotib olish
      </a>
    </div>
  );
}

export default App;

