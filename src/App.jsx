import { useEffect, useMemo, useState } from "react";

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

const installedHotels = [
  { name: "Oydin Plaza", city: "Namangan", rooms: 68, since: "2026" },
];

const CONTACT_STORAGE_KEY = "my-hotels-contact-form";

function App() {
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem(CONTACT_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore invalid saved data
    }

    return {
      fullName: "",
      phone: "",
      hotelName: "",
      note: "",
    };
  });
  const [submitHint, setSubmitHint] = useState("");

  useEffect(() => {
    localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const telegramText = useMemo(
    () =>
      [
        "Yangi so'rov (My-Hotels sayt):",
        `Ism: ${formData.fullName || "-"}`,
        `Telefon: ${formData.phone || "-"}`,
        `Mehmonxona: ${formData.hotelName || "-"}`,
        `Izoh: ${formData.note || "-"}`,
      ].join("\n"),
    [formData],
  );

  const telegramUrl = useMemo(
    () => `https://t.me/oydinplaza?text=${encodeURIComponent(telegramText)}`,
    [telegramText],
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.open(telegramUrl, "_blank", "noopener,noreferrer");
    setSubmitHint(
      "Telegram ochildi. Xabar matni avtomatik to'ldirildi, yuborishni tasdiqlang.",
    );
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <a href="#home" className="brand">
            My-Hotels
          </a>
          <nav className="topnav">
            <a href="#modules">Modullar</a>
            <a href="#cases">Natijalar</a>
            <a href="#clients">Hotellar</a>
            <a href="#contact">Aloqa</a>
          </nav>
          <a className="btn btn-solid" href="#contact">
            Demo so'rash
          </a>
        </div>
      </header>

      <div className="content-shell">
        <main>
          <section id="home" className="hero section">
            <div className="hero-copy reveal">
              <p className="eyebrow">
                MEHMONXONA BOSHQARUVI UCHUN ZAMONAVIY YECHIM
              </p>
              <h1>
                Mehmonxonangizni
                <span> tezroq, aniqroq, foydaliroq </span>
                boshqaring
              </h1>
              <p className="hero-text">
                My-Hotels dasturi yordamida bron, xona holati, to'lovlar,
                qarzdorlik va hisobotlar bitta joyda. Jamoa xatolarini
                kamaytiring, bandlikni oshiring.
              </p>
              <div className="hero-actions">
                <a className="btn btn-solid" href="#contact">
                  Aloqaga chiqish
                </a>
                <a className="btn btn-ghost" href="tel:+998939119572">
                  +998 93-911-95-72
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
                <p>
                  Daftar, excel, chat va qo'ng'iroqlar o'rniga yagona boshqaruv
                  paneli.
                </p>
              </article>
              <article className="ps-card reveal">
                <h3>Nazorat yetishmasligi</h3>
                <p>
                  Xona bandligi va to'lov oqimini bir qarashda ko'radigan bosh
                  sahifa.
                </p>
              </article>
              <article className="ps-card reveal">
                <h3>Kechikkan qarorlar</h3>
                <p>
                  Realtime signal va hisobotlar yordamida menejer tezroq qaror
                  qiladi.
                </p>
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

          <section id="clients" className="section clients">
            <div className="reveal">
              <p className="eyebrow">BIZNING MIJOZLAR</p>
              <h2>My-Hotels o'rnatilgan mehmonxonalar</h2>
              <p className="clients-text">
                Dastur ayni paytda quyidagi mehmonxonalarda faol ishlamoqda.
              </p>
            </div>
            <div className="clients-summary reveal">
              <div>
                <strong>{installedHotels.length} ta</strong>
                <span>faol mehmonxona</span>
              </div>
              <div>
                <strong>
                  {installedHotels.reduce((acc, hotel) => acc + hotel.rooms, 0)}{" "}
                  ta
                </strong>
                <span>nazoratdagi xona</span>
              </div>
              <div>
                <strong>1 ta</strong>
                <span>shahar bo'yicha</span>
              </div>
            </div>
            <div className="clients-grid">
              {installedHotels.map((hotel) => (
                <article
                  className="hotel-card reveal"
                  key={`${hotel.name}-${hotel.city}`}
                >
                  <div className="hotel-head">
                    <h3>{hotel.name}</h3>
                    <span className="hotel-badge">Faol</span>
                  </div>
                  <p>{hotel.city}</p>
                  <div className="hotel-meta">
                    <span>{hotel.rooms} ta xona</span>
                    <span>{hotel.since} yildan beri</span>
                  </div>
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
              <div className="contact-copy">
                <p className="eyebrow">ALOQA MARKAZI</p>
                <h2>My-Hotels bo'yicha tez bog'laning</h2>
                <p>
                  Savdo bo'limimiz siz bilan bog'lanib, dastur namoyishi va
                  joriy etish jarayonini birga rejalashtiradi.
                </p>
                <ul className="contact-benefits">
                  <li>15-20 daqiqalik bepul demo</li>
                  <li>Biznesingizga mos joriy etish rejasi</li>
                  <li>Texnik savollarga jonli javob</li>
                </ul>
                <div className="contact-channels">
                  <a className="btn btn-solid" href="tel:+998939119572">
                    Qo'ng'iroq qilish
                  </a>
                  <a
                    className="btn btn-ghost"
                    href="https://wa.me/998939119572"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                  <a
                    className="btn btn-ghost"
                    href="https://t.me/+998939119572"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Telegram
                  </a>
                </div>
              </div>

              <form className="lead-form" onSubmit={handleSubmit}>
                <label>
                  Ismingiz
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Ism Familiya"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Telefon raqamingiz
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+998 90 123 45 67"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Mehmonxona nomi
                  <input
                    type="text"
                    name="hotelName"
                    placeholder="Masalan, Oydin Plaza"
                    value={formData.hotelName}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Izoh
                  <input
                    type="text"
                    name="note"
                    placeholder="Qaysi modul sizni qiziqtiryapti?"
                    value={formData.note}
                    onChange={handleInputChange}
                  />
                </label>
                <button className="btn btn-solid" type="submit">
                  So'rovni yuborish
                </button>
                {submitHint ? (
                  <small className="form-hint">{submitHint}</small>
                ) : null}
              </form>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>
            © {new Date().getFullYear()} My-Hotels. Barcha huquqlar
            himoyalangan.
          </p>
          <div>
            <a href="tel:+998939119572">+998 93 911 95 72</a>
            <a href="mailto:abdulhayevbahromjon2002@gmail.com">
              abdulhayevbahromjon2002@gmail.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
