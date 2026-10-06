"use client";

import { useEffect, useRef, useState } from "react";

/* ---------- Contact details ---------- */
const PHONE_DISPLAY = "+27 82 416 7891";
const PHONE_TEL = "tel:+27824167891";
const ADDRESS = "99 Marine Drive, Lawrence Rocks, Margate, 4275";
const wa = (msg) => `https://wa.me/27824167891?text=${encodeURIComponent(msg)}`;
const GOOGLE_PROFILE = "https://share.google/RLwKPmKPM0NIcsvkV";
const GATE_ADDRESS = "6 Homestead Rd, Margate, 4275";
const MAPS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(GATE_ADDRESS)}`;

const NAV = [
  { id: "home", label: "Home" },
  { id: "accommodations", label: "Accommodations" },
  { id: "events", label: "Events" },
  { id: "amenities", label: "Amenities" },
  { id: "explore", label: "Explore" },
  { id: "contact", label: "Contact" },
];

/* ---------- Icons ---------- */
const ICONS = {
  snow: "M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9M9.5 4.5 12 7l2.5-2.5M9.5 19.5 12 17l2.5 2.5",
  microwave: "M3 6h18v12H3zM15 6v12M6 9.5h6v5H6zM18 10h.01M18 13h.01",
  fridge: "M6 3h12v18H6zM6 10h12M9 6v2M9 13v3",
  tv: "M3 6h18v11H3zM8 21h8M12 17v4",
  wifi: "M2 8.8a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01",
  pool: "M2 19c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5M2 14.5c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5M8 12.5V6a2 2 0 0 1 4 0M14 12.5V6a2 2 0 0 1 4 0M8 9h6",
  flame: "M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-4 2.5-5 .3 1.8 1.2 2.8 2.5 3 0-3-1-5.5 0-8Z",
  shield: "M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6l-8-3ZM10 16V9h2.5a2 2 0 0 1 0 4H10",
  cake: "M4 21h16M5 21v-7h14v7M5 17.5c1.5 0 1.5-1 3.5-1s2 1 3.5 1 2-1 3.5-1 2 1 3.5 1M12 14v-3M12 8.5A1.5 1.5 0 0 1 10.5 7C10.5 5.5 12 4 12 4s1.5 1.5 1.5 3A1.5 1.5 0 0 1 12 8.5Z",
  star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z",
  present: "M3 4h18M5 4v10h14V4M12 14v3M8 21l4-4 4 4M8.5 10.5l2.5-2.5 2 2 3-3",
  car: "M5 16h14M3 16v-3.5L5.5 7h13l2.5 5.5V16M3 16v2.5h3V16M18 16v2.5h3V16M7.5 12.5h.01M16.5 12.5h.01",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
  pin: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21ZM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  chat: "M4 20l1.3-3.9A8 8 0 1 1 8 19l-4 1ZM9 10.5h.01M12 10.5h.01M15 10.5h.01",
  bed: "M3 18V6M3 13h18v5M21 18v-2.5a3 3 0 0 0-3-3h-7V13M7 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  pot: "M4 10h16v3.5a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6V10ZM2 10h20M9 6.5c0-1 1-1 1-2.5M14 6.5c0-1 1-1 1-2.5",
  family: "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14.5 20c0-2.5 1.2-4.5 3-4.5s3.5 2 3.5 4.5",
  arrow: "M12 19V5M5 12l7-7 7 7",
  right: "M5 12h14M13 6l6 6-6 6",
  play: "M7 4.5 19 12 7 19.5v-15Z",
  pause: "M8 5v14M16 5v14",
  restart: "M3 12a9 9 0 1 0 3-6.7M3 4v5h5",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  users: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5M16 4.5a3.5 3.5 0 0 1 0 6.5M18 14c2.2.7 3.5 3 3.5 6",
  camera: "M4 7h3l2-3h6l2 3h3v12H4V7ZM12 16.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z",
  parking: "M6 3h7a5 5 0 0 1 0 10H9v8H6V3ZM9 6v4h4a2 2 0 0 0 0-4H9Z",
};

function Icon({ name, size = 22, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={style}>
      <path d={ICONS[name]} />
    </svg>
  );
}

function Badge({ size = 40, alt = "" }) {
  return <img src={LOGO_BADGE} width={size} height={size} alt={alt} className="badge" draggable="false" />;
}

/* Repeating wave line, 120 units per period */
const waveLine = (y) => `M-40 ${y}` + " c20-8 40-8 60 0s40 8 60 0".repeat(6);

/* =====================================================================
   Page
   ===================================================================== */
export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // reveal on scroll
    const revealIO = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            revealIO.unobserve(en.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealIO.observe(el));

    // active nav link
    const navIO = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && setActive(en.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) navIO.observe(el);
    });

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // ripple on buttons
    const onDown = (e) => {
      const b = e.target.closest && e.target.closest(".btn");
      if (!b) return;
      const r = b.getBoundingClientRect();
      const size = Math.max(r.width, r.height);
      const s = document.createElement("span");
      s.className = "ripple";
      s.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
      b.appendChild(s);
      setTimeout(() => s.remove(), 700);
    };
    document.addEventListener("pointerdown", onDown);

    return () => {
      revealIO.disconnect();
      navIO.disconnect();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <>
      <a className="skip" href="#accommodations">Skip to content</a>
      <div className="progress" aria-hidden="true" />

      {/* ---------- Navigation ---------- */}
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="wrap">
          <nav className="nav-inner" aria-label="Main">
            <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
              <Badge size={40} alt="" /> Oasis Lodge
            </a>
            <ul className={`nav-links${menuOpen ? " open" : ""}`} id="nav-links">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined} onClick={() => setMenuOpen(false)}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="nav-cta">
              <a className="btn btn-primary" href={wa("Hi Oasis Lodge, I'd like to book a stay.")} target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
              <button className="menu-btn" aria-expanded={menuOpen} aria-controls="nav-links" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((o) => !o)}>
                <Icon name={menuOpen ? "close" : "menu"} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* ---------- Hero ---------- */}
        <section className="hero" id="home">
          <div className="ambient" aria-hidden="true">
            <div className="blob b1" />
            <div className="blob b2" />
            <div className="blob b3" />
            <div className="blob b4" />
            <div className="mesh" />
          </div>

          <div className="wrap hero-grid">
            <div>
              <span className="hero-where rise d1">
                <Icon name="pin" size={18} /> Oasis Lodge, Lawrence Rocks, Margate
              </span>
              <h1 className="rise d2">Your Coastal Escape in Margate</h1>
              <p className="hero-sub rise d3">
                A relaxed lodge on Marine Drive with air-conditioned hotel rooms, three fully equipped apartments and a conference centre.
                Swim in the pool, light the braai and let the sea set the pace.
              </p>
              <div className="hero-actions rise d4">
                <a className="btn btn-primary" href={wa("Hi Oasis Lodge, I'd like to check availability.")} target="_blank" rel="noopener noreferrer">
                  Check availability
                </a>
                <a className="btn btn-ghost" href="#accommodations">View rooms</a>
              </div>
              <div className="quick rise d5">
                <a href={PHONE_TEL}>
                  <span className="qi"><Icon name="phone" size={19} /></span>
                  <span><small>Call us</small><strong>{PHONE_DISPLAY}</strong></span>
                </a>
                <a href={wa("Hi Oasis Lodge!")} target="_blank" rel="noopener noreferrer">
                  <span className="qi wa"><Icon name="chat" size={19} /></span>
                  <span><small>WhatsApp</small><strong>{PHONE_DISPLAY}</strong></span>
                </a>
              </div>
            </div>

            <div className="postcard-wrap rise d3">
              <figure className="postcard">
                <PostcardScene />
                <figcaption>
                  <span>
                    <strong>Lawrence Rocks, Margate</strong>
                    Right on Marine Drive
                  </span>
                  <span className="stamp" aria-hidden="true"><Badge size={34} /></span>
                </figcaption>
              </figure>
              <div className="float-chip">
                <span><Icon name="pool" size={18} /></span> Pool, braai areas and free Wi-Fi
              </div>
            </div>
          </div>

          <div className="hero-wall" aria-hidden="true">
            <div className="plants">
              <Agave style={{ left: "4%" }} tone="sage" />
              <Agave style={{ left: "19%", width: "clamp(52px,6vw,80px)" }} tone="bronze" />
              <Agave style={{ left: "71%", width: "clamp(56px,6vw,84px)" }} tone="bronze" />
              <Agave style={{ left: "86%" }} tone="sage" />
            </div>
            <div className="stone-band" />
          </div>
        </section>

        {/* ---------- Accommodations ---------- */}
        <section className="section accom" id="accommodations">
          <div className="wrap">
            <div className="section-head reveal">
              <h2>Hotel rooms and apartments</h2>
              <p>
                Accommodation in Margate for every kind of stay: eight hotel rooms for couples, friends and business travellers, and three apartments with full kitchens for families and
                longer stays. Mention the room or unit number when you book.
              </p>
            </div>

            <details className="drawer reveal">
              <summary>
                <span className="drawer-ico ai warm"><Icon name="bed" size={24} /></span>
                <span className="drawer-text">
                  <strong>Hotel rooms</strong>
                  <small>8 rooms in four bed layouts: rooms 1, 3, 4, 5, 6, 7, 8 and 17</small>
                </span>
                <span className="drawer-chev" aria-hidden="true"><Icon name="arrow" size={18} /></span>
              </summary>
              <div className="drawer-body">
            <div className="hotel-grid">
              {HOTEL_ROOMS.map((t, i) => (
                <article className="rtype" key={t.label}>
                  <BedRow beds={t.beds} />
                  <h4>{t.label}</h4>
                  <p>{t.note}</p>
                  <ul className="keys" aria-label="Room numbers">
                    {t.rooms.map((n) => (
                      <li key={n} className="key"><small>Room</small>{n}</li>
                    ))}
                  </ul>
                  <a
                    className="room-link"
                    href={wa(`Hi Oasis Lodge, I'd like to check availability for a hotel room with ${t.label.toLowerCase()} (room ${t.rooms.join(", ")}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check availability <Icon name="right" size={18} />
                  </a>
                </article>
              ))}
            </div>

            <div className="comforts">
              <h3>Room comforts</h3>
              {[
                ["snow", "Air-conditioning"],
                ["microwave", "Microwave"],
                ["fridge", "Bar fridge"],
                ["tv", "DStv-ready TV"],
                ["wifi", "Free Wi-Fi"],
              ].map(([ic, label]) => (
                <span className="comfort" key={label}>
                  <span><Icon name={ic} size={20} /></span> {label}
                </span>
              ))}
            </div>
              </div>
            </details>

            <details className="drawer reveal">
              <summary>
                <span className="drawer-ico ai deep"><Icon name="pot" size={24} /></span>
                <span className="drawer-text">
                  <strong>Apartments</strong>
                  <small>Units 10, 11 and 12, each with a full kitchen</small>
                </span>
                <span className="drawer-chev" aria-hidden="true"><Icon name="arrow" size={18} /></span>
              </summary>
              <div className="drawer-body">
            <div className="units">
              {UNITS.map((u, i) => (
                <article className={`unit u${u.no}`} key={u.no}>
                  <header className="unit-top">
                    <span className="unit-no"><small>Unit</small>{u.no}</span>
                    {u.tag && <span className="unit-tag">{u.tag}</span>}
                    <span className="unit-meta">{u.meta}</span>
                  </header>
                  <div className="unit-body">
                    <p>{u.summary}</p>
                    <ul className="bedrooms">
                      {u.bedrooms.map(([name, beds, note]) => (
                        <li key={name}>
                          <span className="br-name">{name}</span>
                          <span className="br-beds">
                            <BedRow beds={beds} small />
                            <span>{bedText(beds)}</span>
                            {note && <em>{note}</em>}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <ul className="tags">{u.features.map((f) => <li key={f}>{f}</li>)}</ul>
                    <a className="room-link" href={wa(`Hi Oasis Lodge, I'd like to check availability for Unit ${u.no}.`)} target="_blank" rel="noopener noreferrer">
                      Check Unit {u.no} <Icon name="right" size={18} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
              </div>
            </details>

            <div className="group-cta reveal">
              <span className="ai deep"><Icon name="family" size={26} /></span>
              <div>
                <h3>Travelling as a big group?</h3>
                <p>We host large holiday groups across our hotel rooms and apartments. Send us your dates and headcount and we’ll put together the right mix of rooms.</p>
              </div>
              <a className="btn btn-primary" href={wa("Hi Oasis Lodge, I'd like to book for a large group.")} target="_blank" rel="noopener noreferrer">
                Book for a group
              </a>
            </div>
          </div>
        </section>

        {/* ---------- Events ---------- */}
        <section className="section events" id="events">
          <div className="wrap events-grid">
            <div className="events-copy reveal">
              <h2>Conferences, meetings and celebrations</h2>
              <p>
                Book our conference centre for business meetings and training days, or host your celebration at the lodge. Send us your
                date, headcount and the meals you need, and we’ll put together a quote.
              </p>
              <div className="row">
                <a className="btn btn-primary" href={wa("Hi Oasis Lodge, I'd like a quote for a conference or event.")} target="_blank" rel="noopener noreferrer">
                  Get an event quote
                </a>
                <a className="btn btn-ghost" href={PHONE_TEL}>Call {PHONE_DISPLAY}</a>
              </div>
            </div>

            <ul className="event-list">
              {[
                ["present", "Conference centre", "A dedicated venue for business meetings, workshops, training days and presentations, with Wi-Fi."],
                ["users", "Business meetings", "From a small board meeting to a full-day session, with accommodation on-site for out-of-town delegates."],
                ["cake", "Parties and milestone events", "Birthdays, anniversaries, graduations, retirements and family reunions, with space for everyone."],
              ].map(([ic, t, d], i) => (
                <li className="event reveal" key={t} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <span className="ei"><Icon name={ic} size={24} /></span>
                  <div>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </li>
              ))}
              <li className="catering reveal" style={{ transitionDelay: ".3s" }}>
                <span className="ai warm"><Icon name="pot" size={24} /></span>
                <div>
                  <h3>Catering on request</h3>
                  <p>We can cater breakfast, lunch and/or supper for your meeting or event. Tell us which meals you need when you book. Catering is quoted and paid as an extra to your booking.</p>
                  <ul className="meals">
                    <li>Breakfast</li>
                    <li>Lunch</li>
                    <li>Supper</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* ---------- Amenities ---------- */}
        <section className="section amen" id="amenities">
          <div className="wrap">
            <div className="section-head reveal">
              <h2>Pool days, braai nights and easy parking</h2>
              <p>The basics are covered on-site, so you can spend your time at the beach instead of planning around it.</p>
            </div>

            <div className="amen-grid">
              <div className="stone-frame pool-frame reveal">
              <article className="pool">
                <div className="pool-water" aria-hidden="true">
                  <svg viewBox="0 0 480 440" preserveAspectRatio="none">
                    <g className="pc-waves" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round">
                      {[70, 140, 210, 280, 350].map((y) => <path key={y} d={waveLine(y)} />)}
                    </g>
                  </svg>
                </div>
                <span className="pool-badge"><Icon name="pool" size={30} /></span>
                <div>
                  <h3>Outdoor swimming pool</h3>
                  <p>Cool off between beach trips, or let the kids splash about while you soak up the South Coast sun.</p>
                </div>
              </article>
              </div>

              <div className="amen-list">
                <article className="amen-item reveal" style={{ transitionDelay: ".08s" }}>
                  <span className="ai warm"><Icon name="flame" size={24} /></span>
                  <div>
                    <h3>Braai areas</h3>
                    <p>Fire up the coals as the evening cools down. Bring the boerewors, we’ve got the spot.</p>
                  </div>
                </article>
                <article className="amen-item reveal" style={{ transitionDelay: ".16s" }}>
                  <span className="ai"><Icon name="wifi" size={24} /></span>
                  <div>
                    <h3>Free Wi-Fi</h3>
                    <p>Stay connected for streaming, work calls or sending beach photos home.</p>
                  </div>
                </article>
                <article className="amen-item reveal" style={{ transitionDelay: ".24s" }}>
                  <span className="ai deep"><Icon name="parking" size={24} /></span>
                  <div>
                    <h3>Safe, secure parking</h3>
                    <p>Your car stays on-site in secure parking while you’re out exploring Margate.</p>
                  </div>
                </article>
              </div>
            </div>

            <article className="carwash reveal">
              <div className="bubbles" aria-hidden="true">
                {[
                  [8, 14, 7, 0], [22, 9, 9, 2], [41, 18, 8, 4], [63, 11, 10, 1], [78, 16, 7, 3], [91, 10, 9, 5],
                ].map(([l, s, d, del], i) => (
                  <i key={i} style={{ left: `${l}%`, width: s, height: s, animationDuration: `${d}s`, animationDelay: `${del}s` }} />
                ))}
              </div>
              <span className="ai"><Icon name="car" size={32} /></span>
              <div>
                <h3>Oasis Rooftop Car Wash</h3>
                <p>Margate’s rooftop car wash, right here on the premises. Get the salt spray and beach sand washed off before the drive home.</p>
              </div>
              <a className="btn btn-light" href={wa("Hi, I'd like to ask about the Oasis Rooftop Car Wash.")} target="_blank" rel="noopener noreferrer">
                Ask about a wash
              </a>
            </article>
          </div>
        </section>

        {/* ---------- Explore the South Coast ---------- */}
        <Explore />

        {/* ---------- Location & contact ---------- */}
        <section className="section contact" id="contact">
          <div className="wrap">
            <div className="section-head reveal">
              <h2>Find us on Marine Drive</h2>
              <p>Drive in through our main gate at 6 Homestead Rd. On Marine Drive, staying guests can walk in and out through the guest gate with their key.</p>
            </div>

            <div className="contact-grid">
              <div className="contact-card reveal">
                <div className="c-row">
                  <span className="ai deep"><Icon name="parking" size={22} /></span>
                  <div>
                    <small>Car entrance (main gate)</small>
                    <strong>6 Homestead Rd, Margate, 4275</strong>
                    <span className="c-note">Use this address in your GPS. Secure parking for guests inside the gate.</span>
                  </div>
                </div>
                <div className="c-row">
                  <span className="ai"><Icon name="phone" size={22} /></span>
                  <div>
                    <small>Phone and WhatsApp</small>
                    <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
                  </div>
                </div>
                <div className="c-row">
                  <span className="ai"><Icon name="pin" size={22} /></span>
                  <div>
                    <small>Street address</small>
                    <strong>99 Marine Drive, Lawrence Rocks, Margate</strong>
                    <span className="c-note">Guest gate at the bottom of the property: entrance and exit on foot only, key required. Cars use the main gate on Homestead Rd.</span>
                  </div>
                </div>
                <div className="c-actions">
                  <a className="btn btn-primary" href={PHONE_TEL}><Icon name="phone" size={18} /> Call now</a>
                  <a className="btn btn-ghost" href={wa("Hi Oasis Lodge!")} target="_blank" rel="noopener noreferrer"><Icon name="chat" size={18} /> WhatsApp</a>
                </div>
              </div>

              <div className="stone-frame map-frame reveal" style={{ transitionDelay: ".1s" }}>
              <div className="map">
                <MapScene />
                <span className="map-note">Cars enter from Homestead Rd</span>
                <a className="btn btn-light" href={MAPS} target="_blank" rel="noopener noreferrer">
                  <Icon name="pin" size={18} /> Directions to the gate
                </a>
              </div>
              </div>
            </div>

            <div className="gallery-cta stone-frame reveal">
              <div className="gallery-inner">
                <span className="ai warm"><Icon name="camera" size={26} /></span>
                <div>
                  <h3>See the lodge before you arrive</h3>
                  <p>Browse photos of the rooms, apartments and grounds, read guest reviews and get directions on our Google Business profile.</p>
                </div>
                <a className="btn btn-sun" href={GOOGLE_PROFILE} target="_blank" rel="noopener noreferrer">
                  View photos on Google <Icon name="right" size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="stone-band" aria-hidden="true" />

        {/* ---------- Mini game ---------- */}
        <section className="section play" id="play" aria-labelledby="play-title">
          <div className="wrap">
            <details className="drawer drawer-dark reveal">
              <summary>
                <span className="drawer-ico ai warm" aria-hidden="true">🌴</span>
                <span className="drawer-text">
                  <strong id="play-title">Palm Dash</strong>
                  <small>Waiting on check-in? Collect every palm before the sea creatures catch you.</small>
                </span>
                <span className="drawer-play">Play</span>
                <span className="drawer-chev" aria-hidden="true"><Icon name="arrow" size={18} /></span>
              </summary>
              <div className="drawer-body">
            <div className="play-grid">
              <PalmDash />
              <aside className="how">
                <h3>How to play</h3>
                <ul>
                  <li><b aria-hidden="true">⌨️</b><span>Move with <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> or <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd>. On a phone, swipe the board or use the pad.</span></li>
                  <li><b aria-hidden="true">🌴</b><span>Each palm is 10 points. Clear the board to reach the next level.</span></li>
                  <li><b aria-hidden="true">🐚</b><span>Shells make the creatures shy for a few seconds. Catch them while they’re pale for bonus points.</span></li>
                  <li><b aria-hidden="true">⏸</b><span>Press <kbd>P</kbd> or <kbd>Esc</kbd> to pause.</span></li>
                </ul>
              </aside>
            </div>
              </div>
            </details>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="footer">
        <div className="stone-band" aria-hidden="true" />
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <a href="#home" className="footer-logo" aria-label="Oasis Hotels, Lodges & Resorts, Margate. Back to top">
                <img src={LOGO_FULL} width={451} height={492} alt="Oasis Hotels, Lodges and Resorts, Margate, three-star grading" />
              </a>
              <p>Coastal accommodation, events and conferencing at Lawrence Rocks, Margate.</p>
            </div>
            <ul>
              {NAV.map((n) => <li key={n.id}><a href={`#${n.id}`}>{n.label}</a></li>)}
            </ul>
            <ul>
              <li>{ADDRESS}</li>
              <li>Main gate: {GATE_ADDRESS}</li>
              <li><a href={PHONE_TEL}>{PHONE_DISPLAY}</a></li>
              <li><a href={wa("Hi Oasis Lodge!")} target="_blank" rel="noopener noreferrer">WhatsApp us</a></li>
            </ul>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Oasis Lodge. Margate, KwaZulu-Natal South Coast.</span>
            <a href="#home">Back to top</a>
          </div>
        </div>
      </footer>
    </>
  );
}

/* =====================================================================
   Illustrations
   ===================================================================== */
function Agave({ style, tone = "sage" }) {
  const pal = tone === "bronze" ? ["#9A4A33", "#7C3526", "#B8613F"] : ["#7E9B70", "#5C7E57", "#97B387"];
  const tips = [[-54, -30], [-30, -26], [-42, -52], [-22, -66], [0, -76], [22, -64], [42, -50], [30, -24], [56, -28]];
  return (
    <svg viewBox="0 0 120 80" style={style}>
      {tips.map(([tx, ty], i) => (
        <path
          key={i}
          d={`M53 80 Q${60 + tx * 0.35 - 7} ${80 + ty * 0.45} ${60 + tx} ${80 + ty} Q${60 + tx * 0.35 + 7} ${80 + ty * 0.45} 67 80Z`}
          fill={pal[i % 3]}
        />
      ))}
    </svg>
  );
}

function PostcardScene() {
  return (
    <svg viewBox="0 0 480 520" role="img" aria-label="Illustration of a sunset over the sea at Lawrence Rocks, with a palm tree and a sandstone garden wall">
      <defs>
        <linearGradient id="pcSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F4DE5A" />
          <stop offset=".65" stopColor="#FBE9B0" />
          <stop offset="1" stopColor="#F9D49A" />
        </linearGradient>
        <linearGradient id="pcSea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2A86A6" />
          <stop offset="1" stopColor="#1D5F7A" />
        </linearGradient>
        <radialGradient id="pcGlow">
          <stop offset="0" stopColor="#E2691F" stopOpacity=".55" />
          <stop offset="1" stopColor="#E2691F" stopOpacity="0" />
        </radialGradient>
        <pattern id="pcStone" width="96" height="36" patternUnits="userSpaceOnUse">
          <rect width="96" height="36" fill="#7A5038" />
          <rect x="2" y="2" width="44" height="15" rx="6" fill="#D49A6A" />
          <rect x="49" y="2" width="45" height="15" rx="6" fill="#B9764A" />
          <rect x="-22" y="20" width="40" height="14" rx="6" fill="#A9693F" />
          <rect x="21" y="20" width="50" height="14" rx="6" fill="#DDAE80" />
          <rect x="74" y="20" width="40" height="14" rx="6" fill="#A9693F" />
        </pattern>
      </defs>
      <rect width="480" height="520" fill="url(#pcSky)" />
      <circle className="pc-glow" cx="320" cy="250" r="130" fill="url(#pcGlow)" />
      <circle cx="320" cy="262" r="58" fill="#D63A24" />
      <g className="pc-clouds" fill="#FFF6DE" opacity=".85">
        <ellipse cx="96" cy="112" rx="50" ry="12" />
        <ellipse cx="116" cy="101" rx="26" ry="15" />
        <ellipse cx="372" cy="88" rx="42" ry="10" />
        <ellipse cx="386" cy="79" rx="20" ry="12" />
      </g>
      <path d="M200 160l8 5 8-5M224 144l6 4 6-4" stroke="#3B2416" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".55" />
      <rect y="266" width="480" height="254" fill="url(#pcSea)" />
      <rect y="266" width="480" height="7" fill="#D63A24" />
      <g fill="#F2A04A" opacity=".8">
        <rect x="282" y="282" width="76" height="4" rx="2" />
        <rect x="296" y="296" width="48" height="4" rx="2" />
        <rect x="306" y="310" width="28" height="3" rx="1.5" />
      </g>
      <path d="M372 306c6-18 18-26 30-24 10-12 26-10 34 2 12-2 22 8 24 22Z" fill="#4A2E1F" />
      <path d="M394 298c4-8 10-12 16-11" stroke="#8A5A3C" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M338 310c3-8 10-12 18-10 6 2 8 6 8 10Z" fill="#5A3A28" />
      <path d="M332 312h140" stroke="#FFF1D6" strokeWidth="3" strokeLinecap="round" opacity=".75" strokeDasharray="12 10" />
      <g className="pc-waves" stroke="#FFF1D6" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity=".45">
        <path d={waveLine(345)} />
        <path d={waveLine(395)} />
      </g>
      <g className="pc-waves slow" stroke="#FFF1D6" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".3">
        <path d={waveLine(370)} />
      </g>
      <path d="M0 412C80 396 170 404 250 410S400 398 480 404V452H0Z" fill="#5E8A4E" />
      <g fill="#7E9B70">
        <path d="M270 440l-18-30 22 22-2-36 10 38 14-30-6 36Z" />
        <path d="M400 440l-16-26 20 18 2-30 8 32 16-24-8 30Z" />
      </g>
      <g fill="#9A4A33">
        <path d="M330 440l-12-22 16 14 4-26 6 28 14-18-6 24Z" />
      </g>
      <rect y="436" width="480" height="12" rx="4" fill="#E5B98A" />
      <path d="M0 448h480" stroke="#7A5038" strokeWidth="2" />
      <rect y="448" width="480" height="72" fill="url(#pcStone)" />
      <g className="pc-palm">
        <path d="M112 470c-4-74 4-150 40-220" stroke="#1E120A" strokeWidth="16" fill="none" strokeLinecap="round" />
        <path d="M112 470c-4-74 4-150 40-220" stroke="#A47258" strokeWidth="11" fill="none" strokeLinecap="round" />
        <g transform="translate(152 250) scale(1.3) translate(-138 -284)" fill="#24583A" stroke="#1E120A" strokeWidth="2.5" strokeLinejoin="round">
          <path d="M138 284c-30-30-70-34-100-20 34 0 64 10 100 20Z" />
          <path d="M138 284c-14-40-44-62-80-64 30 14 54 36 80 64Z" />
          <path d="M138 284c36-18 76-14 102 8-34-8-66-10-102-8Z" />
          <path d="M138 284c-22 10-38 30-44 56 14-22 28-40 44-56Z" />
          <path d="M138 284c10-38 40-58 76-58-28 12-52 32-76 58Z" />
          <path d="M138 284c18 12 30 34 30 60-10-22-20-40-30-60Z" />
        </g>
      </g>
    </svg>
  );
}

/* Simple area map traced from Google Maps (screenshot coordinates, scaled into the 600x420 view). */
const MAP_ROADS = [
  // [path, width]
  ["M575 874 L640 640 L690 480 L740 320 L800 160 L835 40 L840 0", 26], // Marine Drive
  ["M360 874 L380 700 L400 610 L470 545 L545 465 L640 390 L700 335 L735 300", 17], // Homestead Rd
  ["M0 520 L120 430 L230 385 L330 360 L490 330 L600 360 L645 388", 17], // Erasmus Rd
  ["M0 830 L120 730 L260 680 L400 615", 14], // Ridge Rd
  ["M0 110 L120 60 L280 15 L420 25 L490 50 L560 25 L590 -10", 14], // Uplands Rd
  ["M1040 -10 L1050 250 L1080 380 L1100 450 L1060 500 L960 560 L930 620 L960 720 L1010 780 L1020 884", 14], // Finnis Rd
  ["M455 350 L500 420 L520 470", 10],
  ["M300 370 L330 450 L370 560 L400 610", 10],
  ["M490 50 L485 140 L510 190 L525 230 L510 330", 10],
  ["M470 150 L560 225 L660 280 L705 320", 12],
  ["M800 140 L1045 245", 10],
  ["M760 420 L1060 500", 10],
  ["M840 60 L940 100", 10],
  ["M640 680 L800 720 L870 700", 10],
  ["M700 790 L1000 874", 10],
];
const MAP_BLOCKS = [
  [40, 140, 60, 40, -20], [150, 200, 40, 30, 0], [230, 130, 40, 40, -30], [300, 250, 50, 40, 0], [60, 300, 50, 35, -25],
  [170, 270, 40, 30, 0], [260, 300, 40, 30, 10], [40, 560, 50, 40, -20], [150, 480, 45, 35, 0], [230, 440, 50, 40, 0],
  [250, 500, 40, 30, 0], [60, 640, 40, 30, -30], [200, 560, 60, 40, 0], [280, 560, 40, 40, 10], [150, 640, 40, 30, 0],
  [250, 620, 40, 30, 0], [190, 800, 50, 40, -20], [300, 760, 50, 40, 0], [420, 700, 40, 60, 0], [480, 760, 50, 40, 0],
  [500, 620, 40, 50, 0], [440, 660, 30, 30, 0], [530, 370, 40, 30, 0], [460, 420, 35, 30, 0], [330, 180, 60, 40, 0],
  [400, 100, 40, 30, 0], [340, 60, 40, 30, 0], [630, 30, 60, 40, 0], [700, 250, 50, 50, 0], [620, 290, 40, 30, 0],
  [860, 120, 80, 60, 10], [930, 10, 60, 80, 10], [970, 130, 50, 70, 10], [880, 260, 50, 40, 10], [950, 300, 40, 40, 10],
  [870, 350, 60, 40, 10], [940, 360, 50, 40, 10], [880, 470, 90, 28, 12], [760, 430, 70, 60, 10], [730, 540, 70, 40, 12],
  [810, 520, 40, 40, 10], [680, 600, 60, 80, 10], [760, 620, 60, 40, 10], [830, 640, 50, 50, 10], [690, 720, 40, 30, 10],
  [900, 790, 40, 30, 10], [740, 840, 50, 30, 10], [520, 540, 40, 30, 0], [600, 560, 30, 30, 0], [540, 600, 30, 40, 0],
  [620, 520, 30, 30, 0],
];
const COAST = "M1200 -10 L1150 150 L1110 280 L1150 330 L1100 420 L1080 520 L1050 600 L1010 680 L1000 760 L980 884";

function MapScene() {
  // Zoom in a little on small screens so the labels stay readable.
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const on = () => setNarrow(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  return (
    <svg
      viewBox={narrow ? "116 46 400 300" : "0 0 600 420"}
      preserveAspectRatio="xMidYMid meet"
      style={{ overflow: "visible" }}
      role="img"
      aria-label="Map of central Margate showing Oasis Lodge between Homestead Road and Marine Drive, near Shoprite Margate and Margate Pier. Cars enter through the main gate at 6 Homestead Road. Guests can enter and leave on foot through the guest gate on Marine Drive with a key."
    >
      <rect x="-400" y="-300" width="1400" height="1020" fill="#F6EEDF" />

      <g transform="translate(-72 0) scale(0.48)">
        {/* sea and beach */}
        <path d={`${COAST} L1500 884 L1500 -10Z`} fill="#8FD0DE" />
        <path d={`${COAST} L1500 884 L1500 -10Z`} fill="none" stroke="#FFF6E6" strokeWidth="6" />
        <path d="M1150 -10 L1100 150 L1060 280 L1095 330 L1045 420 L1025 520 L995 600 L960 680 L950 760 L935 884 L980 884 L1000 760 L1010 680 L1050 600 L1080 520 L1100 420 L1150 330 L1110 280 L1150 150 L1200 -10Z" fill="#F1DDB8" />

        {/* buildings */}
        <g fill="#EADCC6" stroke="#DCC7A6" strokeWidth="2">
          {MAP_BLOCKS.map(([x, y, w, h, r], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx="3" transform={`rotate(${r} ${x + w / 2} ${y + h / 2})`} />
          ))}
        </g>
        {/* Shoprite Margate */}
        <path d="M562 110 L780 106 L760 240 L560 186Z" fill="#E6D3B5" stroke="#D2B990" strokeWidth="2.5" />

        {/* roads */}
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {MAP_ROADS.map(([d, w], i) => (
            <path key={`e${i}`} d={d} stroke="#DCC9AA" strokeWidth={w + 4} />
          ))}
          {MAP_ROADS.map(([d, w], i) => (
            <path key={`r${i}`} d={d} stroke="#FFFFFF" strokeWidth={w} />
          ))}
        </g>

        {/* Margate Pier */}
        <path d="M1100 445 L1205 445" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" />
        <path d="M1100 445 L1205 445" stroke="#C9B08A" strokeWidth="2" strokeDasharray="4 8" />

        {/* Oasis Lodge property */}
        <path d="M548 463 L638 389 L712 408 L680 517Z" fill="rgba(226,105,31,.16)" stroke="#E2691F" strokeWidth="4" strokeDasharray="10 7" strokeLinejoin="round" />
      </g>

      {/* road and landmark labels */}
      <g fontWeight="700" fill="#8A7464">
        <text x="226" y="340" fontSize="9" transform="rotate(-73 226 340)">Marine Dr</text>
        <text x="116" y="330" fontSize="9" transform="rotate(-80 116 330)">Homestead Rd</text>
        <text x="70" y="186" fontSize="9" transform="rotate(-18 70 186)">Erasmus Rd</text>
        <text x="433" y="150" fontSize="9" transform="rotate(84 433 150)">Finnis Rd</text>
      </g>
      <g>
        <circle cx="236" cy="78" r="7" fill="#E2691F" />
        <path d="M233 76h6l-1 4h-4Z" fill="#FFF6E6" />
        <text x="247" y="82" fontSize="10.5" fontWeight="800" fill="#3B2416">Shoprite Margate</text>
      </g>
      <g>
        <circle cx="490" cy="200" r="7" fill="#1D5F7A" />
        <path d="M487 201h6M490 197v7" stroke="#FFF6E6" strokeWidth="1.6" strokeLinecap="round" />
        <text x="480" y="204" fontSize="10.5" fontWeight="800" fill="#0F4357" textAnchor="end">Margate Pier</text>
      </g>

      {/* main vehicle gate */}
      <circle className="pulse" cx="204" cy="209" r="10" fill="#E2691F" opacity=".55" />
      <circle cx="204" cy="209" r="6" fill="#F2C94C" stroke="#3B2416" strokeWidth="2" />
      <path d="M198 204 L176 160" stroke="#3B2416" strokeWidth="1.4" strokeDasharray="3 3" />
      <g transform={narrow ? "translate(122 118)" : "translate(40 104)"}>
        <rect width="150" height="56" rx="16" fill="#FFFBF4" stroke="#E2691F" strokeWidth="2" />
        <text x="14" y="21" fontSize="12.5" fontWeight="800" fill="#3B2416">Main gate</text>
        <text x="14" y="36" fontSize="11" fontWeight="700" fill="#B4501A">6 Homestead Rd</text>
        <text x="14" y="49" fontSize="9.5" fontWeight="600" fill="#7B5B48">Vehicle entrance</text>
      </g>

      {/* guest gate on Marine Drive */}
      <circle className="pulse" cx="256" cy="242" r="10" fill="#2A86A6" opacity=".5" />
      <circle cx="256" cy="242" r="6" fill="#7FD3A0" stroke="#1D5F7A" strokeWidth="2" />
      <path d="M262 247 L300 284" stroke="#1D5F7A" strokeWidth="1.4" strokeDasharray="3 3" />
      <g transform="translate(296 278)">
        <rect width="168" height="56" rx="16" fill="#FFFBF4" stroke="#2A86A6" strokeWidth="2" />
        <g transform="translate(20 28)" fill="none" stroke="#1D5F7A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="1" cy="-10" r="2.4" fill="#1D5F7A" stroke="none" />
          <path d="M0 -6 L-1 2 L-5 10M-1 2 L4 6 L5 11M-5 -2 L0 -5 L5 -1" />
        </g>
        <text x="36" y="20" fontSize="11.5" fontWeight="800" fill="#3B2416">Guest gate</text>
        <text x="36" y="34" fontSize="10" fontWeight="700" fill="#1D5F7A">99 Marine Dr, on foot only</text>
        <g transform="translate(36 41)">
          <circle cx="4" cy="4" r="3" fill="none" stroke="#B4501A" strokeWidth="1.5" />
          <path d="M7 4h7M12 4v3" stroke="#B4501A" strokeWidth="1.5" strokeLinecap="round" />
          <text x="18" y="8" fontSize="10" fontWeight="700" fill="#B4501A">Key required</text>
        </g>
      </g>

      <g transform={narrow ? "translate(138 326)" : "translate(30 392)"}>
        <circle r="15" fill="#FFFBF4" opacity=".95" />
        <path d="M0 -10 L4 0 L0 -2 L-4 0Z" fill="#D63A24" />
        <text y="10" fontSize="9" fontWeight="800" fill="#B4501A" textAnchor="middle">N</text>
      </g>
    </svg>
  );
}

/* =====================================================================
   Rooms and apartments
   ===================================================================== */
const HOTEL_ROOMS = [
  { label: "One double bed", beds: [["double", 1]], rooms: [1, 5, 6, 17], note: "Comfortable for couples and solo travellers." },
  { label: "Double bed and sleeper couch", beds: [["double", 1], ["couch", 1]], rooms: [7], note: "A double bed plus a sleeper couch for a third guest." },
  { label: "Two double beds", beds: [["double", 2]], rooms: [8], note: "Room for friends or a small family to share." },
  { label: "Two single beds", beds: [["single", 2]], rooms: [3, 4], note: "Twin beds, ideal for colleagues or friends." },
];

const UNITS = [
  {
    no: 10,
    meta: "2 bedrooms, 1 bathroom",
    summary: "A full kitchen, dining table and living room with access to a sectioned-off balcony.",
    bedrooms: [
      ["Bedroom 1", [["double", 1], ["single", 1]]],
      ["Bedroom 2", [["double", 2]]],
    ],
    features: ["Full kitchen", "Dining table", "Living room", "Sectioned-off balcony"],
  },
  {
    no: 11,
    tag: "Luxury",
    meta: "2 bedrooms, 1 bathroom",
    summary: "Our luxury unit, with the nicest finishes and décor. Full kitchen, dining table, leather couches in the living room and a balcony.",
    bedrooms: [
      ["Bedroom 1", [["double", 2]]],
      ["Bedroom 2", [["large", 1]]],
    ],
    features: ["Full kitchen", "Dining table", "Leather couches", "Balcony"],
  },
  {
    no: 12,
    tag: "Largest",
    meta: "4 bedrooms",
    summary: "Our biggest apartment, with a large kitchen and dining area, a couch and TV, and a small balcony for fresh air.",
    bedrooms: [
      ["Bedroom 1", [["single", 2]], "En-suite bathroom"],
      ["Bedroom 2", [["single", 2]]],
      ["Bedroom 3", [["single", 2]], "Street-facing window"],
      ["Bedroom 4", [["double", 1]], "Street-facing window"],
    ],
    features: ["Large kitchen", "Dining area", "Couch and TV", "Small balcony"],
  },
];

const BED_WORDS = { double: ["double bed", "double beds"], single: ["single bed", "single beds"], large: ["large double bed", "large double beds"], couch: ["sleeper couch", "sleeper couches"] };
const bedText = (beds) => beds.map(([k, n]) => `${n} ${BED_WORDS[k][n > 1 ? 1 : 0]}`).join(" + ");

const BED_PATHS = {
  double: "M3 18v-6h18v6M3 18v2M21 18v2M5 12V8h14v4M7 10h4M13 10h4",
  large: "M2 18v-6h20v6M2 18v2M22 18v2M4 12V7.5h16V12M6 10h5M13 10h5",
  single: "M6 18v-6h12v6M6 18v2M18 18v2M8 12V8h8v4M10 10h4",
  couch: "M4 18v-5a2 2 0 0 1 4 0v1h8v-1a2 2 0 0 1 4 0v5ZM6 11V8h12v3M5 18v2M19 18v2",
};

function BedRow({ beds, small }) {
  const size = small ? 18 : 26;
  const list = beds.flatMap(([k, n]) => Array.from({ length: n }, () => k));
  return (
    <span className={`bed-row${small ? " sm" : ""}`} aria-hidden="true">
      {list.map((k, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d={BED_PATHS[k]} />
        </svg>
      ))}
    </span>
  );
}

/* =====================================================================
   Explore the KZN South Coast
   Source: visitkznsouthcoast.co.za (checked October 2026)
   ===================================================================== */
const VISIT = "https://www.visitkznsouthcoast.co.za";
const SOUTH_COAST = {
  events: [
    {
      title: "Fishing Competition at The Pont",
      town: "Port Edward",
      when: "From 16 October 2026",
      end: "2026-10-18",
      text: "A weekend competition at The Pont Holiday & Watersport Resort with bank and boat fishing (catch and release), prizes, a flea market and wine tasting.",
      url: `${VISIT}/events/port-edward/fishing-competition-at-the-pont/`,
    },
    {
      title: "SA Women’s Masters 2026",
      town: "San Lameer, Wild Coast Sun and Southbroom",
      when: "23 to 25 November 2026",
      end: "2026-11-25",
      text: "A two-day Pro-Am golf package at San Lameer and the Wild Coast Sun, with an optional third round at Southbroom.",
      url: `${VISIT}/events/southbroom/sa-womens-masters-2026/`,
    },
  ],
  todo: [
    {
      title: "Butterfly Valley",
      town: "Ramsgate",
      text: "A butterfly farm just down the coast from Margate, an easy outing with children.",
      url: `${VISIT}/vic/ramsgate/butterfly-valley/`,
    },
    {
      title: "Beaver Creek Coffee Estate",
      town: "Port Edward",
      text: "The world’s southernmost coffee plantation. The Crop to Cup tour runs daily at 12:00 with bottomless coffee tasting (booking essential).",
      url: `${VISIT}/vic/port-edward/beaver-creek-coffee-estate/`,
    },
    {
      title: "Baywatch Cruises",
      town: "Shelly Beach",
      text: "Pleasure trips out on the ocean, with whales passing the coast from around the end of May.",
      url: `${VISIT}/vic/shelly-beach/baywatch-charters/`,
    },
    {
      title: "Oribi Gorge Nature Reserve",
      town: "Oribi Gorge",
      text: "Dramatic cliffs and forest inland of Port Shepstone. Baboon View is one of the reserve’s lookout points.",
      url: `${VISIT}/vic/port-edward/baboon-view/`,
    },
    {
      title: "Burry Stander Bike Park",
      town: "Umtentweni",
      text: "A 2 km cross-country track and 5 km farm track, with a kiddies zone and coffee shop.",
      url: `${VISIT}/vic/margate/burry-stander-bike-park/`,
    },
  ],
  food: [
    {
      title: "Blue Lagoon Restaurant & Cocktail Deck",
      town: "Ramsgate",
      text: "Right on Ramsgate’s Blue Flag beach. Open from breakfast, and known for seafood and generous portions.",
      url: `${VISIT}/vic/ramsgate/blue-lagoon-restaurant/`,
    },
    {
      title: "Authentic North Indian Food",
      town: "Margate",
      text: "Curries, breyani, tikka, naan, chow mein and fried rice on Albert Meyer Drive.",
      url: `${VISIT}/vic/margate/authentic-north-indian-food/`,
    },
    {
      title: "Aura On Margate Beach",
      town: "Margate",
      text: "In the Rendezvous Complex on William O’Connor Drive, Margate.",
      url: `${VISIT}/vic/margate/aura-on-margate-beach/`,
    },
    {
      title: "Breakers Restaurant",
      town: "Uvongo",
      text: "At the Grado Centre on Marine Drive, a few minutes north along the coast.",
      url: `${VISIT}/vic/uvongo/breakers-restaurant/`,
    },
    {
      title: "Chefs on Marine",
      town: "Ramsgate",
      text: "In the Lifestyle Village on Marine Drive, Ramsgate.",
      url: `${VISIT}/vic/ramsgate/chefs-on-marine/`,
    },
    {
      title: "C-Bali Restaurant",
      town: "St Michael’s-on-Sea",
      text: "On Bay Road at St Michael’s-on-Sea.",
      url: `${VISIT}/vic/st-michaels/c-bali-restaurant/`,
    },
  ],
};

const EXPLORE_TABS = [
  { id: "events", label: "What’s on", icon: "star" },
  { id: "todo", label: "Things to do", icon: "pin" },
  { id: "food", label: "Where to eat", icon: "pot" },
];

function Explore() {
  const [tab, setTab] = useState("events");
  const [today, setToday] = useState(null);
  const [live, setLive] = useState(null);
  useEffect(() => {
    setToday(new Date(Date.now() - 864e5).toISOString().slice(0, 10));
    // Fresh listings injected by the server (see layout.js); refreshed every 12 hours.
    try {
      const el = document.getElementById("south-coast-data");
      if (el) setLive(JSON.parse(el.textContent));
    } catch {}
  }, []);

  const source = live && live[tab] && live[tab].length ? live[tab] : SOUTH_COAST[tab];
  const items =
    tab === "events" && today ? source.filter((e) => !(e.end || e.date) || (e.end || e.date) >= today) : source;
  const checked = live && new Date(live.fetchedAt).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" });
  const more =
    tab === "events"
      ? { href: `${VISIT}/events/category/events/?etype=upcoming`, label: "See all upcoming events" }
      : tab === "food"
      ? { href: `${VISIT}/vic/category/restaurants/`, label: "See more restaurants" }
      : { href: `${VISIT}/vic/category/things-to-do/`, label: "See more things to do" };

  return (
    <section className="section explore" id="explore">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Around the South Coast</h2>
          <p>Events, outings and places to eat near Margate, from Visit KZN South Coast.</p>
        </div>

        <div className="tabs reveal" role="tablist" aria-label="South Coast guide">
          {EXPLORE_TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={tab === t.id}
              aria-controls="explore-panel"
              className={tab === t.id ? "on" : ""}
              onClick={() => setTab(t.id)}
            >
              <Icon name={t.icon} size={18} /> {t.label}
            </button>
          ))}
        </div>

        <div className="ex-grid" id="explore-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
          {items.length === 0 && (
            <div className="ex-card ex-empty">
              <h3>New events are added all the time</h3>
              <p>See what’s coming up on the KZN South Coast this month.</p>
            </div>
          )}
          {items.map((it) => (
            <a className="ex-card" key={it.url} href={it.url} target="_blank" rel="noopener noreferrer">
              <div className="ex-meta">
                {it.town && <span className="ex-town"><Icon name="pin" size={14} /> {it.town}</span>}
                {it.when && <span className="ex-when">{it.when}</span>}
              </div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
              <span className="ex-more">Read more <Icon name="right" size={16} /></span>
            </a>
          ))}
        </div>

        <div className="ex-foot reveal">
          <p>
            {checked
              ? `Updated automatically from Visit KZN South Coast. Last checked ${checked}.`
              : "Listings from Visit KZN South Coast."}{" "}
            Details can change, so confirm with the venue before you go.
          </p>
          <a className="btn btn-ghost" href={more.href} target="_blank" rel="noopener noreferrer">
            {more.label} <Icon name="right" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   Palm Dash: coastal Pac-Man style mini-game
   ===================================================================== */
const MAZE = [
  "###################",
  "#........#........#",
  "#o##.###.#.###.##o#",
  "#.................#",
  "#.##.#.#####.#.##.#",
  "#....#...#...#....#",
  "####.### # ###.####",
  "   #.#   G   #.#   ",
  "####.# ##-## #.####",
  "    .  #GGG#  .    ",
  "####.# ##### #.####",
  "   #.#       #.#   ",
  "####.# ##### #.####",
  "#........#........#",
  "#.##.###.#.###.##.#",
  "#o.#.....P.....#.o#",
  "##.#.#.#####.#.#.##",
  "#....#...#...#....#",
  "#.######.#.######.#",
  "#.................#",
  "###################",
];
const COLS = 19;
const ROWS = 21;
const T = 24;
const DIR = {
  up: { x: 0, y: -1, n: "up" },
  down: { x: 0, y: 1, n: "down" },
  left: { x: -1, y: 0, n: "left" },
  right: { x: 1, y: 0, n: "right" },
};
const DIR_LIST = [DIR.up, DIR.left, DIR.down, DIR.right];
const SCHEDULE = [7, 20, 7, 20, 5, 20, 5, Infinity];
const HI_KEY = "oasis-palm-dash-hi";
const KEYMAP = {
  ArrowUp: "up", KeyW: "up", ArrowDown: "down", KeyS: "down",
  ArrowLeft: "left", KeyA: "left", ArrowRight: "right", KeyD: "right",
};
const EMOJI_FONT = '"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji","Twemoji Mozilla",sans-serif';
const opposite = (a, b) => !!a && !!b && a.x === -b.x && a.y === -b.y;
const wrapX = (x) => ((x % COLS) + COLS) % COLS;

function rr(c, x, y, w, h, r) {
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}

function PalmDash() {
  const canvasRef = useRef(null);
  const screenRef = useRef(null);
  const apiRef = useRef(null);
  const [hud, setHud] = useState({ score: 0, hi: 0, lives: 3, level: 1, best: false });
  const [status, setStatus] = useState("ready");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const W = COLS * T;
    const H = ROWS * T;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    /* sprites */
    const makeSprite = (ch, size) => {
      const s = Math.ceil(size * 1.5);
      const c = document.createElement("canvas");
      c.width = s * dpr;
      c.height = s * dpr;
      const x = c.getContext("2d");
      x.scale(dpr, dpr);
      x.textAlign = "center";
      x.textBaseline = "middle";
      x.font = `${size}px ${EMOJI_FONT}`;
      x.fillText(ch, s / 2, s / 2 + size * 0.08);
      return { c, s };
    };
    const PALM = makeSprite("🌴", 14);
    const SHELL = makeSprite("🐚", 19);
    const CREATURES = [
      { e: "🦀", color: "rgba(255,107,107,.3)" },
      { e: "🐙", color: "rgba(199,125,255,.3)" },
      { e: "🐡", color: "rgba(255,184,76,.3)" },
      { e: "🦑", color: "rgba(255,143,171,.3)" },
    ].map((c) => ({ ...c, sp: makeSprite(c.e, 20) }));

    /* static maze layer */
    const layer = document.createElement("canvas");
    layer.width = W * dpr;
    layer.height = H * dpr;
    const lc = layer.getContext("2d");
    lc.scale(dpr, dpr);
    const bg = lc.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#3A2213");
    bg.addColorStop(1, "#1E120A");
    lc.fillStyle = bg;
    lc.fillRect(0, 0, W, H);
    const isWall = (x, y) => y >= 0 && y < ROWS && x >= 0 && x < COLS && MAZE[y][x] === "#";
    const paintWalls = (inset, color, r) => {
      lc.fillStyle = color;
      for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
          if (!isWall(x, y)) continue;
          const px = x * T, py = y * T;
          rr(lc, px + inset, py + inset, T - inset * 2, T - inset * 2, r);
          lc.fill();
          if (isWall(x + 1, y)) lc.fillRect(px + T / 2, py + inset, T, T - inset * 2);
          if (isWall(x, y + 1)) lc.fillRect(px + inset, py + T / 2, T - inset * 2, T);
          if (isWall(x + 1, y) && isWall(x, y + 1) && isWall(x + 1, y + 1)) lc.fillRect(px + T / 2, py + T / 2, T, T);
        }
      }
    };
    paintWalls(2, "#DDAE80", 8);
    paintWalls(4.5, "#A9693F", 6);
    paintWalls(7, "#8A5232", 4);
    for (let y = 0; y < ROWS; y++)
      for (let x = 0; x < COLS; x++)
        if (MAZE[y][x] === "-") {
          lc.fillStyle = "#F2C94C";
          lc.fillRect(x * T + 2, y * T + T / 2 - 2, T - 4, 4);
        }

    /* game state */
    const spawns = [];
    let pStart = { x: 9, y: 15 };
    MAZE.forEach((row, y) =>
      [...row].forEach((c, x) => {
        if (c === "G") spawns.push({ x, y });
        if (c === "P") pStart = { x, y };
      })
    );
    const DOOR_OUT = spawns[0];
    const HOME = spawns[2];
    const CORNERS = [
      { x: COLS - 2, y: -2 },
      { x: 1, y: -2 },
      { x: COLS - 1, y: ROWS + 1 },
      { x: 0, y: ROWS + 1 },
    ];

    const g = {
      dots: [], left: 0, score: 0, lives: 3, level: 1, hi: 0, best: false,
      status: "ready", timer: 0, fright: 0, chain: 0, mode: "scatter", modeIdx: 0, modeTime: 0,
      popups: [], player: null, ghosts: [], t: 0, inView: false, visible: false,
    };
    try {
      g.hi = parseInt(localStorage.getItem(HI_KEY) || "0", 10) || 0;
    } catch {}

    const sync = () =>
      setHud({ score: g.score, hi: Math.max(g.hi, g.score), lives: g.lives, level: g.level, best: g.best });
    const setS = (s) => {
      g.status = s;
      setStatus(s);
    };

    const fillDots = () => {
      g.dots = MAZE.map((r) => [...r].map((c) => (c === "." ? 1 : c === "o" ? 2 : 0)));
      g.left = g.dots.flat().filter(Boolean).length;
    };
    const placeActors = () => {
      g.player = { tx: pStart.x, ty: pStart.y, p: 0, dir: null, next: DIR.left, face: DIR.left, dead: 0 };
      const speedUp = 1 + (g.level - 1) * 0.25;
      g.ghosts = spawns.map((s, i) => ({
        i, tx: s.x, ty: s.y, p: 0,
        dir: i === 0 ? DIR.left : null,
        state: i === 0 ? "active" : "house",
        scared: false,
        release: [0, 1.5, 4, 7][i] / speedUp,
        bob: Math.random() * 6,
      }));
      g.fright = 0;
      g.chain = 0;
      g.mode = "scatter";
      g.modeIdx = 0;
      g.modeTime = 0;
      g.popups = [];
    };
    const newGame = () => {
      g.score = 0;
      g.lives = 3;
      g.level = 1;
      g.best = false;
      fillDots();
      placeActors();
      sync();
    };

    const cellAt = (x, y) => (y < 0 || y >= ROWS ? "#" : MAZE[y][wrapX(x)]);
    const canEnter = (x, y, e) => {
      const c = cellAt(x, y);
      if (c === "#") return false;
      if (c === "-") return !!e && (e.state === "leaving" || e.state === "eaten");
      return true;
    };
    const posOf = (e) => ({
      x: e.tx + (e.dir ? e.dir.x * e.p : 0),
      y: e.ty + (e.dir ? e.dir.y * e.p : 0),
    });
    const reverse = (e) => {
      if (!e.dir) return;
      const back = DIR_LIST.find((d) => opposite(d, e.dir));
      if (e.p > 0) {
        e.tx = wrapX(e.tx + e.dir.x);
        e.ty += e.dir.y;
        e.p = 1 - e.p;
      }
      e.dir = back;
    };
    const advance = (e, dist, choose, arrive) => {
      let guard = 0;
      while (dist > 1e-6 && guard++ < 8) {
        if (e.p === 0) {
          choose(e);
          if (!e.dir) return;
        }
        const need = 1 - e.p;
        if (dist >= need) {
          dist -= need;
          e.p = 0;
          e.tx = wrapX(e.tx + e.dir.x);
          e.ty += e.dir.y;
          if (arrive) arrive(e);
          if (g.status !== "playing") return;
        } else {
          e.p += dist;
          dist = 0;
        }
      }
    };

    /* player */
    const choosePlayer = (e) => {
      if (e.next && canEnter(e.tx + e.next.x, e.ty + e.next.y, null)) e.dir = e.next;
      if (e.dir && !canEnter(e.tx + e.dir.x, e.ty + e.dir.y, null)) e.dir = null;
      if (e.dir) e.face = e.dir;
    };
    const startFright = () => {
      g.fright = Math.max(3, 7 - (g.level - 1) * 0.8);
      g.chain = 0;
      g.ghosts.forEach((gh) => {
        if (gh.state === "active") {
          gh.scared = true;
          reverse(gh);
        }
      });
    };
    const eatAt = (e) => {
      const v = g.dots[e.ty] && g.dots[e.ty][e.tx];
      if (!v) return;
      g.dots[e.ty][e.tx] = 0;
      g.left--;
      if (v === 1) g.score += 10;
      else {
        g.score += 50;
        startFright();
      }
      sync();
      if (g.left <= 0) {
        setS("cleared");
        g.timer = 2;
      }
    };
    const setDir = (name) => {
      const d = DIR[name];
      const pl = g.player;
      if (!d || !pl) return;
      pl.next = d;
      if (pl.dir && pl.p > 0 && opposite(pl.dir, d)) {
        reverse(pl);
        pl.face = pl.dir;
      }
    };

    /* ghosts */
    const ghostTarget = (gh) => {
      const pl = g.player;
      if (gh.state === "leaving") return DOOR_OUT;
      if (gh.state === "eaten") return HOME;
      if (g.mode === "scatter") return CORNERS[gh.i];
      const f = pl.face || DIR.left;
      if (gh.i === 0) return { x: pl.tx, y: pl.ty };
      if (gh.i === 1) return { x: pl.tx + f.x * 4, y: pl.ty + f.y * 4 };
      if (gh.i === 2) {
        const b = g.ghosts[0];
        const ax = pl.tx + f.x * 2, ay = pl.ty + f.y * 2;
        return { x: ax * 2 - b.tx, y: ay * 2 - b.ty };
      }
      const dx = gh.tx - pl.tx, dy = gh.ty - pl.ty;
      return dx * dx + dy * dy > 64 ? { x: pl.tx, y: pl.ty } : CORNERS[3];
    };
    const chooseGhost = (gh) => {
      const opts = DIR_LIST.filter((d) => canEnter(gh.tx + d.x, gh.ty + d.y, gh));
      let cand = opts.filter((d) => !opposite(d, gh.dir));
      if (!cand.length) cand = opts;
      if (!cand.length) {
        gh.dir = null;
        return;
      }
      const wander = gh.state === "active" && (gh.scared || Math.random() < 0.08);
      if (wander) {
        gh.dir = cand[Math.floor(Math.random() * cand.length)];
        return;
      }
      const tgt = ghostTarget(gh);
      let best = cand[0], bd = Infinity;
      for (const d of cand) {
        const dx = gh.tx + d.x - tgt.x, dy = gh.ty + d.y - tgt.y;
        const dd = dx * dx + dy * dy;
        if (dd < bd) {
          bd = dd;
          best = d;
        }
      }
      gh.dir = best;
    };
    const arriveGhost = (gh) => {
      if (gh.state === "leaving" && gh.tx === DOOR_OUT.x && gh.ty === DOOR_OUT.y) {
        gh.state = "active";
        gh.scared = false;
      } else if (gh.state === "eaten" && gh.tx === HOME.x && gh.ty === HOME.y) {
        gh.state = "leaving";
      }
    };

    const loseLife = () => {
      g.lives--;
      sync();
      g.player.dead = 0;
      g.timer = 1.6;
      setS("dying");
    };
    const gameOver = () => {
      if (g.score > g.hi) {
        g.hi = g.score;
        g.best = true;
        try {
          localStorage.setItem(HI_KEY, String(g.hi));
        } catch {}
      }
      sync();
      setS("over");
    };
    const collide = () => {
      const pp = posOf(g.player);
      for (const gh of g.ghosts) {
        if (gh.state === "house" || gh.state === "eaten") continue;
        const gp = posOf(gh);
        let dx = Math.abs(pp.x - gp.x);
        dx = Math.min(dx, COLS - dx);
        const dy = Math.abs(pp.y - gp.y);
        if (dx * dx + dy * dy < 0.45) {
          if (gh.scared) {
            gh.scared = false;
            gh.state = "eaten";
            const pts = 200 * 2 ** g.chain;
            g.chain = Math.min(g.chain + 1, 3);
            g.score += pts;
            g.popups.push({ x: gp.x, y: gp.y, txt: String(pts), t: 1 });
            sync();
          } else {
            loseLife();
            return;
          }
        }
      }
    };

    /* update */
    const update = (dt) => {
      g.t += dt;
      g.popups.forEach((p) => (p.t -= dt));
      g.popups = g.popups.filter((p) => p.t > 0);

      if (g.status === "getready") {
        g.timer -= dt;
        if (g.timer <= 0) setS("playing");
        return;
      }
      if (g.status === "dying") {
        g.timer -= dt;
        g.player.dead = Math.min(1, g.player.dead + dt / 1.1);
        if (g.timer <= 0) {
          if (g.lives <= 0) gameOver();
          else {
            placeActors();
            g.timer = 1.2;
            setS("getready");
          }
        }
        return;
      }
      if (g.status === "cleared") {
        g.timer -= dt;
        if (g.timer <= 0) {
          g.level++;
          fillDots();
          placeActors();
          sync();
          g.timer = 1.4;
          setS("getready");
        }
        return;
      }
      if (g.status !== "playing") return;

      if (g.fright > 0) {
        g.fright -= dt;
        if (g.fright <= 0) {
          g.fright = 0;
          g.ghosts.forEach((gh) => (gh.scared = false));
        }
      } else {
        g.modeTime += dt;
        if (g.modeTime >= SCHEDULE[g.modeIdx]) {
          g.modeTime = 0;
          g.modeIdx++;
          g.mode = g.modeIdx % 2 === 0 ? "scatter" : "chase";
          g.ghosts.forEach((gh) => gh.state === "active" && reverse(gh));
        }
      }

      const lv = g.level;
      advance(g.player, Math.min(7.8, 6.6 + 0.15 * (lv - 1)) * dt, choosePlayer, eatAt);
      if (g.status !== "playing") return;

      for (const gh of g.ghosts) {
        if (gh.state === "house") {
          gh.release -= dt;
          if (gh.release <= 0) gh.state = "leaving";
          continue;
        }
        let sp =
          gh.state === "eaten" ? 13 :
          gh.state === "leaving" ? 4 :
          gh.scared ? 3.6 :
          Math.min(7.2, 5.6 + 0.35 * (lv - 1));
        if (gh.state === "active" && gh.ty === 9 && (gh.tx < 5 || gh.tx > 13)) sp *= 0.6;
        advance(gh, sp * dt, chooseGhost, arriveGhost);
      }
      collide();
    };

    /* draw */
    const blit = (sp, cx, cy, s = 1) => {
      const w = sp.s * s;
      ctx.drawImage(sp.c, cx - w / 2, cy - w / 2, w, w);
    };
    const circle = (cx, cy, r) => {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
    };
    const drawGhost = (gh) => {
      const gp = posOf(gh);
      const cx = (gp.x + 0.5) * T;
      let cy = (gp.y + 0.5) * T + Math.sin(g.t * 4 + gh.bob) * 1.5;
      if (gh.state === "house") cy += Math.sin(g.t * 5 + gh.bob) * 2.5;
      const cr = CREATURES[gh.i];
      if (gh.state === "eaten") {
        ctx.strokeStyle = "rgba(255,255,255,.75)";
        ctx.lineWidth = 1.5;
        circle(cx, cy, 7);
        ctx.stroke();
        ctx.fillStyle = "rgba(255,255,255,.8)";
        circle(cx - 2.5, cy - 2.5, 1.8);
        ctx.fill();
        return;
      }
      if (gh.scared) {
        const flash = g.fright < 2 && Math.floor(g.t * 8) % 2 === 0;
        ctx.fillStyle = flash ? "rgba(255,255,255,.9)" : "rgba(160,215,230,.85)";
        circle(cx, cy, 11);
        ctx.fill();
        ctx.globalAlpha = 0.55;
        blit(cr.sp, cx, cy, 0.8);
        ctx.globalAlpha = 1;
        return;
      }
      ctx.fillStyle = cr.color;
      circle(cx, cy, 12.5);
      ctx.fill();
      blit(cr.sp, cx, cy);
    };
    const drawPlayer = () => {
      const pl = g.player;
      const pp = posOf(pl);
      const cx = (pp.x + 0.5) * T;
      const cy = (pp.y + 0.5) * T;
      const r = T * 0.42;
      const ang = { right: 0, down: Math.PI / 2, left: Math.PI, up: -Math.PI / 2 }[pl.face.n];
      let open;
      if (g.status === "dying") open = Math.min(Math.PI, 0.25 + pl.dead * Math.PI);
      else if (pl.dir && g.status === "playing") open = 0.06 + 0.34 * Math.abs(Math.sin(g.t * 14));
      else open = 0.3;
      if (open >= Math.PI) return;
      const grad = ctx.createRadialGradient(cx - 3, cy - 3, 2, cx, cy, r);
      grad.addColorStop(0, "#FFE29A");
      grad.addColorStop(1, "#FFB627");
      ctx.save();
      ctx.shadowColor = "rgba(255,200,87,.7)";
      ctx.shadowBlur = 12;
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, ang + open, ang + Math.PI * 2 - open);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      if (g.status !== "dying") {
        let ex = r * 0.15, ey = -r * 0.5;
        if (pl.face.n === "left") ex = -ex;
        else {
          const c = Math.cos(ang), s = Math.sin(ang);
          [ex, ey] = [ex * c - ey * s, ex * s + ey * c];
        }
        ctx.fillStyle = "#3B2416";
        circle(cx + ex, cy + ey, 1.9);
        ctx.fill();
      }
    };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(layer, 0, 0, W, H);
      if (g.status === "cleared" && Math.floor(g.t * 6) % 2 === 0) {
        ctx.fillStyle = "rgba(255,255,255,.12)";
        ctx.fillRect(0, 0, W, H);
      }
      const pulse = 1 + 0.12 * Math.sin(g.t * 5);
      for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
          const v = g.dots[y][x];
          if (v === 1) blit(PALM, (x + 0.5) * T, (y + 0.5) * T);
          else if (v === 2) blit(SHELL, (x + 0.5) * T, (y + 0.5) * T, pulse);
        }
      }
      g.ghosts.forEach(drawGhost);
      drawPlayer();
      ctx.textAlign = "center";
      ctx.font = `800 12px ${getComputedStyle(document.body).fontFamily}`;
      g.popups.forEach((p) => {
        ctx.globalAlpha = Math.max(0, p.t);
        ctx.fillStyle = "#FFC857";
        ctx.fillText(p.txt, (p.x + 0.5) * T, (p.y + 0.5) * T - (1 - p.t) * 16);
      });
      ctx.globalAlpha = 1;
    };

    /* controls */
    const start = () => {
      if (g.status === "ready") {
        g.timer = 1;
        setS("getready");
      } else if (g.status === "paused") setS("playing");
      else if (g.status === "over") {
        newGame();
        g.timer = 1;
        setS("getready");
      }
    };
    const pause = () => {
      if (g.status === "playing" || g.status === "getready") setS("paused");
    };
    const toggle = () => {
      if (g.status === "playing" || g.status === "getready") pause();
      else start();
    };
    const restart = () => {
      newGame();
      g.timer = 1;
      setS("getready");
    };
    apiRef.current = {
      toggle,
      restart,
      press: (name) => {
        if (["ready", "paused", "over"].includes(g.status)) start();
        setDir(name);
      },
    };

    const onKey = (e) => {
      const tag = (e.target && e.target.tagName) || "";
      if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;
      const running = ["playing", "getready", "dying", "cleared"].includes(g.status);
      const d = KEYMAP[e.code];
      if (d) {
        if (running) {
          e.preventDefault();
          setDir(d);
        } else if (g.inView) {
          e.preventDefault();
          start();
          setDir(d);
        }
        return;
      }
      if ((e.code === "KeyP" || e.code === "Escape") && (running || g.status === "paused")) {
        e.preventDefault();
        toggle();
      }
      if (e.code === "Space" && g.inView && e.target === document.body) {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener("keydown", onKey);

    let touch = null;
    const onTouchStart = (e) => {
      const t0 = e.changedTouches[0];
      touch = { x: t0.clientX, y: t0.clientY };
    };
    const onTouchEnd = (e) => {
      if (!touch) return;
      const t1 = e.changedTouches[0];
      const dx = t1.clientX - touch.x, dy = t1.clientY - touch.y;
      touch = null;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 20) {
        if (!["playing", "getready", "dying", "cleared"].includes(g.status)) start();
        return;
      }
      const name = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : dy > 0 ? "down" : "up";
      if (["ready", "paused", "over"].includes(g.status)) start();
      setDir(name);
    };
    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    canvas.addEventListener("touchend", onTouchEnd, { passive: true });

    const io = new IntersectionObserver(
      ([en]) => {
        g.visible = en.isIntersecting;
        g.inView = en.intersectionRatio >= 0.3;
        if (en.intersectionRatio < 0.15) pause();
      },
      { threshold: [0, 0.15, 0.3, 0.6] }
    );
    io.observe(screenRef.current);
    const onVis = () => document.hidden && pause();
    document.addEventListener("visibilitychange", onVis);

    newGame();
    let raf;
    let last = performance.now();
    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (g.visible) {
        update(dt);
        draw();
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("visibilitychange", onVis);
      io.disconnect();
    };
  }, []);

  const overlay = {
    ready: { title: "Palm Dash", text: "Collect every palm tree. Grab a shell to turn the tables.", cta: "Start game" },
    getready: { title: "Ready?", text: `Level ${hud.level}` },
    paused: { title: "Paused", text: "Take a breather. The palms will wait.", cta: "Resume" },
    cleared: { title: "Level cleared", text: "The tide is turning. Next level coming up." },
    over: {
      title: "Game over",
      text: hud.best ? `New high score: ${hud.score}!` : `You scored ${hud.score}. Have another go?`,
      cta: "Play again",
    },
  }[status];

  const running = status === "playing" || status === "getready";
  const mainLabel = running ? "Pause" : status === "paused" ? "Resume" : status === "over" ? "Play again" : "Start";

  return (
    <div className="arcade stone-frame">
      <div className="arcade-inner">
      <div className="hud" aria-live="polite">
        <div><small>Score</small><strong>{hud.score}</strong></div>
        <div><small>Best</small><strong>{hud.hi}</strong></div>
        <div>
          <small>Lives</small>
          <span className="lives" aria-label={`${hud.lives} lives left`}>
            {[0, 1, 2].map((i) => <i key={i} className={i < hud.lives ? "" : "off"} />)}
          </span>
        </div>
        <div><small>Level</small><strong>{hud.level}</strong></div>
      </div>

      <div className="screen" ref={screenRef}>
        <canvas ref={canvasRef} role="img" aria-label="Palm Dash game board" />
        <div className={`overlay${overlay ? "" : " hide"}`}>
          {overlay && (
            <div>
              <h3>{overlay.title}</h3>
              <p>{overlay.text}</p>
              {overlay.cta && (
                <button className="btn btn-sun" onClick={() => apiRef.current && apiRef.current.toggle()}>
                  <Icon name="play" size={18} /> {overlay.cta}
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="controls">
        <button className="btn btn-sun" onClick={() => apiRef.current && apiRef.current.toggle()}>
          <Icon name={running ? "pause" : "play"} size={18} /> {mainLabel}
        </button>
        <button className="btn btn-glass" onClick={() => apiRef.current && apiRef.current.restart()}>
          <Icon name="restart" size={18} /> Restart
        </button>
      </div>

      <div className="dpad" aria-label="Direction pad">
        {[
          ["up", 0],
          ["left", -90],
          ["down", 180],
          ["right", 90],
        ].map(([n, rot]) => (
          <button
            key={n}
            className={n}
            aria-label={`Move ${n}`}
            onPointerDown={(e) => {
              e.preventDefault();
              apiRef.current && apiRef.current.press(n);
            }}
          >
            <Icon name="arrow" size={26} style={{ transform: `rotate(${rot}deg)` }} />
          </button>
        ))}
      </div>
      </div>
    </div>
  );
}

/* =====================================================================
   Logos (embedded so the project stays at three files)
   ===================================================================== */
const LOGO_BADGE = "data:image/webp;base64,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";
const LOGO_FULL = "data:image/webp;base64,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";
