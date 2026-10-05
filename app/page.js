"use client";

import { useEffect, useRef, useState } from "react";

/* ---------- Contact details ---------- */
const PHONE_DISPLAY = "+27 82 416 7891";
const PHONE_TEL = "tel:+27824167891";
const ADDRESS = "99 Marine Drive, Lawrence Rocks, Margate, 4275";
const wa = (msg) => `https://wa.me/27824167891?text=${encodeURIComponent(msg)}`;
const MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const NAV = [
  { id: "home", label: "Home" },
  { id: "amenities", label: "Amenities" },
  { id: "accommodations", label: "Accommodations" },
  { id: "events", label: "Events" },
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
      <a className="skip" href="#amenities">Skip to content</a>
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
                <Icon name="pin" size={18} /> Lawrence Rocks, Margate on the KZN South Coast
              </span>
              <h1 className="rise d2">Your Coastal Escape in Margate</h1>
              <p className="hero-sub rise d3">
                A relaxed lodge on Marine Drive with air-conditioned rooms, self-catering units and family suites. Swim in the pool,
                light the braai and let the sea set the pace.
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
                <p>Right here on the premises. Get the salt spray and beach sand washed off before the drive home.</p>
              </div>
              <a className="btn btn-light" href={wa("Hi, I'd like to ask about the Oasis Rooftop Car Wash.")} target="_blank" rel="noopener noreferrer">
                Ask about a wash
              </a>
            </article>
          </div>
        </section>

        {/* ---------- Accommodations ---------- */}
        <section className="section accom" id="accommodations">
          <div className="wrap">
            <div className="section-head reveal">
              <h2>Rooms for every kind of stay</h2>
              <p>From a quick weekend away to a two-week family holiday, choose the setup that suits you.</p>
            </div>

            <div className="rooms">
              {[
                {
                  cls: "a", icon: "bed", title: "Hotel rooms",
                  text: "Cool, air-conditioned rooms with a DStv-ready TV. Ideal for a weekend break or a stopover on the coast.",
                  tags: ["Air-conditioned", "DStv-ready TV", "Free Wi-Fi"],
                },
                {
                  cls: "b", icon: "pot", title: "Self-catering units",
                  text: "Cook on your own schedule with a microwave and bar fridge, and settle in for a longer stay.",
                  tags: ["Microwave", "Bar fridge", "Longer stays"],
                },
                {
                  cls: "c", icon: "family", title: "Family suites",
                  text: "Room for the whole crew, with the pool and braai areas close by so nobody wanders far.",
                  tags: ["Extra space", "Near the pool", "Family-friendly"],
                },
              ].map((r, i) => (
                <article className="room reveal" key={r.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className={`room-art ${r.cls}`}>
                    <span className="room-ico"><Icon name={r.icon} size={36} /></span>
                    <svg className="room-wave" viewBox="0 0 400 30" preserveAspectRatio="none" aria-hidden="true">
                      <path d="M0 16c50-14 100-14 150 0s100 14 150 0 70-10 100-4V30H0Z" fill="#FFFBF4" />
                    </svg>
                  </div>
                  <div className="room-body">
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                    <ul className="tags">{r.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                    <a className="room-link" href={wa(`Hi Oasis Lodge, I'd like to check availability for ${r.title.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer">
                      Check availability <Icon name="right" size={18} />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="comforts reveal">
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
        </section>

        {/* ---------- Events ---------- */}
        <section className="section events" id="events">
          <div className="wrap events-grid">
            <div className="events-copy reveal">
              <h2>Celebrate or meet by the sea</h2>
              <p>
                Host a birthday, mark a milestone or run your next workshop at Oasis Lodge. Send us your date and headcount and we’ll
                help you plan the day.
              </p>
              <div className="row">
                <a className="btn btn-primary" href={wa("Hi Oasis Lodge, I'd like to plan an event.")} target="_blank" rel="noopener noreferrer">
                  Plan an event on WhatsApp
                </a>
                <a className="btn btn-ghost" href={PHONE_TEL}>Call {PHONE_DISPLAY}</a>
              </div>
            </div>

            <ul className="event-list">
              {[
                ["cake", "Birthday parties", "Parties for kids and grown-ups alike, with the pool and braai areas close at hand."],
                ["star", "Milestone celebrations", "Anniversaries, graduations, retirements and family reunions, with room for everyone."],
                ["present", "Conferences and meetings", "High-tech conference facilities with Wi-Fi for workshops, training days and team meetings."],
              ].map(([ic, t, d], i) => (
                <li className="event reveal" key={t} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <span className="ei"><Icon name={ic} size={24} /></span>
                  <div>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Location & contact ---------- */}
        <section className="section contact" id="contact">
          <div className="wrap">
            <div className="section-head reveal">
              <h2>Find us on Marine Drive</h2>
              <p>We’re at Lawrence Rocks in Margate. Call or send a WhatsApp and we’ll confirm availability and directions.</p>
            </div>

            <div className="contact-grid">
              <div className="contact-card reveal">
                <div className="c-row">
                  <span className="ai"><Icon name="pin" size={22} /></span>
                  <div>
                    <small>Address</small>
                    <strong>99 Marine Drive, Lawrence Rocks,<br />Margate, 4275</strong>
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
                  <span className="ai deep"><Icon name="parking" size={22} /></span>
                  <div>
                    <small>Arriving by car</small>
                    <strong>Secure on-site parking for guests</strong>
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
                <span className="map-note">Lawrence Rocks, Margate</span>
                <a className="btn btn-light" href={MAPS} target="_blank" rel="noopener noreferrer">
                  <Icon name="pin" size={18} /> Get directions
                </a>
              </div>
              </div>
            </div>

            <div className="arrive reveal">
              <div>
                <h3>What to look for when you arrive</h3>
                <p>Sandstone walls, aloes and palms line the way in, and the walkway runs straight down towards the sea.</p>
              </div>
              <div className="photos">
                <figure className="photo stone-frame">
                  <img src={PHOTO_STEPS} width={294} height={220} alt="Sandstone steps and garden wall with aloes and palm trees at Oasis Lodge" loading="lazy" />
                  <figcaption>Stone steps through the garden</figcaption>
                </figure>
                <figure className="photo stone-frame">
                  <img src={PHOTO_WALK} width={294} height={220} alt="Walkway leading down past the lodge towards the ocean" loading="lazy" />
                  <figcaption>The walkway down to the sea</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <div className="stone-band" aria-hidden="true" />

        {/* ---------- Mini game ---------- */}
        <section className="section play" id="play" aria-labelledby="play-title">
          <div className="wrap">
            <div className="section-head reveal">
              <h2 id="play-title">Palm Dash</h2>
              <p>Waiting on check-in? Collect every palm tree before the sea creatures catch you.</p>
            </div>
            <div className="play-grid">
              <PalmDash />
              <aside className="how reveal">
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

function MapScene() {
  const drive = "M330 -10 C360 110 350 210 380 300 S420 380 430 420";
  const shore = "M410 -10 C440 110 430 200 460 290 S500 380 510 420";
  return (
    <svg viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Stylised map showing Oasis Lodge on Marine Drive beside Lawrence Rocks, Margate">
      <defs>
        <pattern id="mapGrid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="#E6CDA8" strokeWidth="1" />
        </pattern>
        <linearGradient id="mapOcean" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3A9DB4" />
          <stop offset="1" stopColor="#1D5F7A" />
        </linearGradient>
        <path id="mapDrive" d={drive} />
      </defs>
      <rect width="600" height="420" fill="#F3E1C4" />
      <rect width="600" height="420" fill="url(#mapGrid)" opacity=".8" />
      <rect x="60" y="64" width="96" height="62" rx="18" fill="#D3E0B5" />
      <rect x="178" y="262" width="112" height="70" rx="18" fill="#EBD3B0" />
      <g stroke="#FFFBF4" strokeWidth="7" strokeLinecap="round">
        <path d="M-10 150 L360 182" />
        <path d="M40 -10 L120 430" />
        <path d="M-10 305 L392 312" />
        <path d="M200 -10 L232 430" />
      </g>
      <path d={drive} stroke="#DDB283" strokeWidth="19" fill="none" />
      <path d={drive} stroke="#FFFBF4" strokeWidth="13" fill="none" />
      <text fontSize="11" fontWeight="700" fill="#7B5B48" dy="4">
        <textPath href="#mapDrive" startOffset="12%">Marine Drive</textPath>
      </text>
      <path d={`${shore} H610 V-10Z`} fill="url(#mapOcean)" />
      <path d={shore} stroke="#FFF1D6" strokeWidth="4" fill="none" opacity=".85" strokeDasharray="2 10" strokeLinecap="round" />
      <g stroke="#FFF1D6" strokeOpacity=".5" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M500 80c8-5 16-5 24 0s16 5 24 0" />
        <path d="M530 170c8-5 16-5 24 0s16 5 24 0" />
        <path d="M540 330c8-5 16-5 24 0s16 5 24 0" />
      </g>
      <g fill="#4A2E1F">
        <circle cx="470" cy="236" r="7" />
        <circle cx="482" cy="244" r="5" />
        <circle cx="475" cy="253" r="4" />
      </g>
      <text x="494" y="232" fontSize="12" fontWeight="700" fill="#FFF6E6">Lawrence Rocks</text>
      <circle className="pulse" cx="366" cy="226" r="14" fill="#E2691F" opacity=".55" />
      <path d="M366 226c-10-12-15-20-15-28a15 15 0 0 1 30 0c0 8-5 16-15 28Z" fill="#D63A24" />
      <circle cx="366" cy="198" r="5.5" fill="#FFF6E6" />
      <rect x="220" y="182" width="124" height="32" rx="16" fill="#FFFBF4" stroke="rgba(91,52,30,.18)" />
      <text x="282" y="203" fontSize="13" fontWeight="800" fill="#3B2416" textAnchor="middle">Oasis Lodge</text>
      <g transform="translate(40 374)">
        <circle r="18" fill="#FFFBF4" opacity=".92" />
        <text y="5" fontSize="13" fontWeight="800" fill="#B4501A" textAnchor="middle">N</text>
      </g>
    </svg>
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
    <div className="arcade stone-frame reveal">
      <div className="arcade-inner">
      <div className="hud" aria-live="polite">
        <div><small>Score</small><strong>{hud.score}</strong></div>
        <div><small>High score</small><strong>{hud.hi}</strong></div>
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
const PHOTO_STEPS = "data:image/webp;base64,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";
const PHOTO_WALK = "data:image/webp;base64,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";
