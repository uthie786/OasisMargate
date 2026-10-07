"use client";

import { useEffect, useRef, useState } from "react";

/* =====================================================================
   Hero beach toys
   Five little physics sprites that live in the hero. On desktop you can
   click, drag and throw them. On phones they roll around as you tilt the
   device (and get knocked about when you shake it). Purely decorative:
   the loop only runs while the hero is on screen and the toys are moving,
   and nothing here is needed to use the rest of the site.
   ===================================================================== */

const STORE_KEY = "oasis-toys-motion"; // "granted" | "declined"
const GRAVITY = 2200; // px/s² at full tilt
const STEP = 1 / 120;

const readStore = () => {
  try {
    return localStorage.getItem(STORE_KEY);
  } catch {
    return null;
  }
};
const writeStore = (v) => {
  try {
    localStorage.setItem(STORE_KEY, v);
  } catch {}
};

/* ---------- Sprites (viewBox 0 0 100 100, drawn around a circle) ---------- */
function BeachBall() {
  return (
    <svg viewBox="0 0 100 100">
      <defs>
        <clipPath id="ht-ball"><circle cx="50" cy="50" r="47" /></clipPath>
        <radialGradient id="ht-ball-shine" cx=".35" cy=".3" r=".75">
          <stop offset="0" stopColor="#fff" stopOpacity=".55" />
          <stop offset=".5" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#3B2416" stopOpacity=".22" />
        </radialGradient>
      </defs>
      <g clipPath="url(#ht-ball)">
        <rect width="100" height="100" fill="#FCF4E7" />
        <path d="M50 50 L50 -10 A60 60 0 0 1 102 20 Z" fill="#D63A24" />
        <path d="M50 50 L102 80 A60 60 0 0 1 50 110 Z" fill="#2A86A6" />
        <path d="M50 50 L-2 80 A60 60 0 0 1 -2 20 Z" fill="#F2C94C" />
        <rect width="100" height="100" fill="url(#ht-ball-shine)" />
      </g>
      <circle cx="50" cy="50" r="8" fill="#FCF4E7" stroke="#E2691F" strokeWidth="2" />
      <circle cx="50" cy="50" r="47" fill="none" stroke="rgba(59,36,22,.25)" strokeWidth="2" />
    </svg>
  );
}

function SwimRing() {
  return (
    <svg viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="36" fill="none" stroke="#FCF4E7" strokeWidth="22" />
      <circle cx="50" cy="50" r="36" fill="none" stroke="#E2691F" strokeWidth="22" strokeDasharray="28.27 28.27" />
      <circle cx="50" cy="50" r="47" fill="none" stroke="rgba(59,36,22,.25)" strokeWidth="2" />
      <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(59,36,22,.22)" strokeWidth="2" />
      <path d="M26 30 A32 32 0 0 1 44 19" fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function Starfish() {
  return (
    <svg viewBox="0 0 100 100">
      <path
        d="M50 4 C55 22 58 31 62 36 C68 38 79 37 96 38 C83 49 75 55 72 60 C73 67 77 77 82 94 C67 84 58 78 50 76 C42 78 33 84 18 94 C23 77 27 67 28 60 C25 55 17 49 4 38 C21 37 32 38 38 36 C42 31 45 22 50 4 Z"
        fill="#E2691F"
        stroke="#B4501A"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <g fill="#F4DE5A" opacity=".9">
        <circle cx="50" cy="52" r="4" />
        <circle cx="50" cy="30" r="2.6" /><circle cx="50" cy="19" r="2" />
        <circle cx="70" cy="45" r="2.6" /><circle cx="81" cy="41" r="2" />
        <circle cx="30" cy="45" r="2.6" /><circle cx="19" cy="41" r="2" />
        <circle cx="63" cy="67" r="2.6" /><circle cx="71" cy="80" r="2" />
        <circle cx="37" cy="67" r="2.6" /><circle cx="29" cy="80" r="2" />
      </g>
    </svg>
  );
}

function Shell() {
  return (
    <svg viewBox="0 0 100 100">
      <path d="M38 80 L50 92 L62 80 Z" fill="#DDAE80" stroke="#A9693F" strokeWidth="2.5" strokeLinejoin="round" />
      <path
        d="M50 82 C30 82 8 70 8 46 C8 24 28 8 50 8 C72 8 92 24 92 46 C92 70 70 82 50 82 Z"
        fill="#F6E5CC"
        stroke="#A9693F"
        strokeWidth="2.5"
      />
      <g fill="none" stroke="#C98B5E" strokeWidth="3" strokeLinecap="round">
        <path d="M50 80 L50 12" />
        <path d="M50 80 L30 15" /><path d="M50 80 L70 15" />
        <path d="M50 80 L15 30" /><path d="M50 80 L85 30" />
        <path d="M50 80 L10 52" /><path d="M50 80 L90 52" />
      </g>
    </svg>
  );
}

function Crab() {
  return (
    <svg viewBox="0 0 100 100">
      <g fill="none" stroke="#B4501A" strokeWidth="5" strokeLinecap="round">
        <path d="M24 62 L8 70" /><path d="M24 70 L10 82" /><path d="M76 62 L92 70" /><path d="M76 70 L90 82" />
        <path d="M26 50 C14 44 12 34 16 26" /><path d="M74 50 C86 44 88 34 84 26" />
      </g>
      <path d="M6 20 C6 10 16 6 22 12 L18 20 L26 22 C24 30 10 32 6 20 Z" fill="#D63A24" stroke="#B4501A" strokeWidth="2" />
      <path d="M94 20 C94 10 84 6 78 12 L82 20 L74 22 C76 30 90 32 94 20 Z" fill="#D63A24" stroke="#B4501A" strokeWidth="2" />
      <ellipse cx="50" cy="62" rx="30" ry="22" fill="#D63A24" stroke="#B4501A" strokeWidth="2.5" />
      <path d="M32 56 C40 50 60 50 68 56" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="4" strokeLinecap="round" />
      <path d="M42 44 L40 34 M58 44 L60 34" stroke="#B4501A" strokeWidth="3" strokeLinecap="round" />
      <circle cx="40" cy="32" r="5" fill="#fff" stroke="#3B2416" strokeWidth="1.5" /><circle cx="41" cy="33" r="2.2" fill="#3B2416" />
      <circle cx="60" cy="32" r="5" fill="#fff" stroke="#3B2416" strokeWidth="1.5" /><circle cx="61" cy="33" r="2.2" fill="#3B2416" />
      <path d="M44 70 C47 73 53 73 56 70" fill="none" stroke="#3B2416" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// r is the collision radius as a fraction of the base size; bounce is restitution.
const TOYS = [
  { key: "ball", Sprite: BeachBall, r: 1, bounce: 0.72, startX: 0.16 },
  { key: "ring", Sprite: SwimRing, r: 0.92, bounce: 0.5, startX: 0.82 },
  { key: "star", Sprite: Starfish, r: 0.78, bounce: 0.28, startX: 0.38 },
  { key: "shell", Sprite: Shell, r: 0.7, bounce: 0.3, startX: 0.62 },
  { key: "crab", Sprite: Crab, r: 0.8, bounce: 0.25, startX: 0.5 },
];

export default function HeroToys() {
  const layerRef = useRef(null);
  const toyRefs = useRef([]);
  const api = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [askMotion, setAskMotion] = useState(false);

  // Only mount on the client, and never for people who prefer reduced motion.
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const layer = layerRef.current;
    const hero = layer && layer.closest(".hero");
    if (!hero) return;
    const wall = hero.querySelector(".hero-wall");

    const touch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const hasMotion = touch && typeof window.DeviceMotionEvent !== "undefined";
    const needsPermission = hasMotion && typeof DeviceMotionEvent.requestPermission === "function";

    let W = 0, H = 0, floor = 0, base = 40;
    const bodies = TOYS.map((t, i) => ({ ...t, el: toyRefs.current[i], x: 0, y: 0, vx: 0, vy: 0, a: 0, w: 0, rad: 0, inv: 1 }));

    // gravity in screen space (unit = full tilt), smoothed target from sensors
    const g = { x: 0, y: 1 };
    const gTarget = { x: 0, y: 1 };
    let sensorSign = 0; // some browsers report accelerationIncludingGravity inverted; calibrated on first reading
    let motionOn = false;

    let visible = false, raf = 0, last = 0, acc = 0, still = 0;
    let drag = null;

    const measure = (first) => {
      const r = hero.getBoundingClientRect();
      W = r.width;
      H = r.height;
      const wallH = wall ? wall.getBoundingClientRect().height : 0;
      floor = H - wallH * 0.45;
      base = Math.max(24, Math.min(40, W * 0.045));
      bodies.forEach((b, i) => {
        b.rad = base * b.r;
        b.inv = 1 / (b.rad * b.rad);
        b.el.style.width = b.el.style.height = `${b.rad * 2}px`;
        b.el.style.marginLeft = b.el.style.marginTop = `${-b.rad}px`;
        if (first) {
          // drop in from the top, staggered so they tumble into each other
          b.x = W * b.startX;
          b.y = b.rad + i * base * 0.6;
          b.vx = (Math.random() - 0.5) * 120;
          b.a = Math.random() * 360;
        } else {
          b.x = Math.min(Math.max(b.x, b.rad), W - b.rad);
          b.y = Math.min(b.y, floor - b.rad);
        }
      });
    };

    const step = (dt) => {
      g.x += (gTarget.x - g.x) * 0.12;
      g.y += (gTarget.y - g.y) * 0.12;
      const gx = g.x * GRAVITY, gy = g.y * GRAVITY;

      for (const b of bodies) {
        if (b === drag?.body) continue;
        b.vx = (b.vx + gx * dt) * 0.9995;
        b.vy = (b.vy + gy * dt) * 0.9995;
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        b.a += b.w * dt;
        b.w *= 0.995;

        const r = b.rad, roll = 0.25;
        if (b.y + r > floor) {
          b.y = floor - r;
          if (b.vy > 0) b.vy = b.vy > 60 ? -b.vy * b.bounce : 0;
          b.vx *= 0.985;
          b.w += ((b.vx / r) * 57.3 - b.w) * roll;
        }
        if (b.y - r < 0) {
          b.y = r;
          if (b.vy < 0) b.vy = b.vy < -60 ? -b.vy * b.bounce : 0;
          b.vx *= 0.985;
          b.w += ((-b.vx / r) * 57.3 - b.w) * roll;
        }
        if (b.x - r < 0) {
          b.x = r;
          if (b.vx < 0) b.vx = b.vx < -60 ? -b.vx * b.bounce : 0;
          b.vy *= 0.985;
          b.w += ((-b.vy / r) * 57.3 - b.w) * roll;
        } else if (b.x + r > W) {
          b.x = W - r;
          if (b.vx > 0) b.vx = b.vx > 60 ? -b.vx * b.bounce : 0;
          b.vy *= 0.985;
          b.w += ((b.vy / r) * 57.3 - b.w) * roll;
        }
      }

      // circle vs circle
      for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
          const p = bodies[i], q = bodies[j];
          const ip = p === drag?.body ? 0 : p.inv, iq = q === drag?.body ? 0 : q.inv;
          if (!ip && !iq) continue;
          let dx = q.x - p.x, dy = q.y - p.y;
          const min = p.rad + q.rad, d2 = dx * dx + dy * dy;
          if (d2 >= min * min) continue;
          const d = Math.sqrt(d2) || 0.01;
          const nx = dx / d, ny = dy / d, overlap = min - d, sum = ip + iq;
          p.x -= nx * overlap * (ip / sum);
          p.y -= ny * overlap * (ip / sum);
          q.x += nx * overlap * (iq / sum);
          q.y += ny * overlap * (iq / sum);
          const vn = (q.vx - p.vx) * nx + (q.vy - p.vy) * ny;
          if (vn < 0) {
            const e = Math.min(p.bounce, q.bounce);
            const jImp = (-(1 + e) * vn) / sum;
            p.vx -= jImp * ip * nx;
            p.vy -= jImp * ip * ny;
            q.vx += jImp * iq * nx;
            q.vy += jImp * iq * ny;
            // a little spin from the glancing part of the hit
            const vt = (q.vx - p.vx) * -ny + (q.vy - p.vy) * nx;
            p.w -= vt * 0.15;
            q.w += vt * 0.15;
          }
        }
      }
    };

    const render = () => {
      for (const b of bodies) b.el.style.transform = `translate3d(${b.x}px,${b.y}px,0) rotate(${b.a}deg)`;
    };

    const tick = (now) => {
      raf = 0;
      const dt = Math.min((now - last) / 1000, 1 / 30);
      last = now;
      acc += dt;
      while (acc >= STEP) {
        step(STEP);
        acc -= STEP;
      }
      render();

      // fall asleep once everything has settled, to save battery
      const moving = drag || bodies.some((b) => Math.abs(b.vx) + Math.abs(b.vy) > 8 || Math.abs(b.w) > 4);
      const settling = Math.abs(gTarget.x - g.x) + Math.abs(gTarget.y - g.y) > 0.01;
      still = moving || settling ? 0 : still + 1;
      if (still < 45) raf = requestAnimationFrame(tick);
    };

    const wake = () => {
      still = 0;
      if (visible && !raf && !document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };
    const sleep = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    /* ---------- sensors ---------- */
    const onMotion = (e) => {
      const ag = e.accelerationIncludingGravity;
      if (!ag || ag.x == null) return;
      const angle = ((screen.orientation && screen.orientation.angle) ?? window.orientation ?? 0) * (Math.PI / 180);
      const c = Math.cos(angle), s = Math.sin(angle);
      // per spec: upright portrait reads y ≈ +9.8, which is gravity pointing down the screen
      const x0 = -ag.x / 9.81, y0 = ag.y / 9.81;
      let sx = c * x0 + s * y0, sy = -s * x0 + c * y0;
      if (!sensorSign) {
        // people hold their phone roughly upright to read, so the first strong reading tells us the sign
        if (Math.abs(sy) < 0.4) return;
        sensorSign = sy > 0 ? 1 : -1;
      }
      sx *= sensorSign;
      sy *= sensorSign;
      const len = Math.hypot(sx, sy);
      if (len > 1) {
        sx /= len;
        sy /= len;
      }
      const changed = Math.abs(sx - gTarget.x) + Math.abs(sy - gTarget.y) > 0.05;
      gTarget.x = sx;
      gTarget.y = sy;

      // shakes: toys lag behind the phone's motion
      const a = e.acceleration;
      let jolt = false;
      if (a && a.x != null && Math.hypot(a.x, a.y) > 3) {
        const ax = c * -a.x + s * a.y, ay = -s * -a.x + c * a.y;
        for (const b of bodies) {
          b.vx += ax * sensorSign * 8;
          b.vy += ay * sensorSign * 8;
        }
        jolt = true;
      }
      if (changed || jolt) wake();
    };
    const startMotion = () => {
      if (motionOn || !hasMotion) return;
      motionOn = true;
      window.addEventListener("devicemotion", onMotion);
    };
    const stopMotion = () => {
      if (!motionOn) return;
      motionOn = false;
      window.removeEventListener("devicemotion", onMotion);
    };
    let granted = hasMotion && !needsPermission;

    const requestMotion = () =>
      DeviceMotionEvent.requestPermission()
        .then((res) => {
          granted = res === "granted";
          writeStore(granted ? "granted" : "declined");
          if (granted && visible) startMotion();
        })
        .catch(() => {});

    /* ---------- pointer: drag on desktop, tap to flick on touch ---------- */
    const local = (e) => {
      const r = hero.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top, t: performance.now() };
    };
    const onDown = (e) => {
      const i = toyRefs.current.indexOf(e.currentTarget);
      const b = bodies[i];
      if (!b) return;

      if (e.pointerType !== "mouse") return; // touch is handled on pointerup, so scrolls that start on a toy are left alone

      e.preventDefault();
      const p = local(e);
      drag = { body: b, id: e.pointerId, ox: b.x - p.x, oy: b.y - p.y, last: p, vx: 0, vy: 0 };
      b.vx = b.vy = 0;
      e.currentTarget.setPointerCapture(e.pointerId);
      e.currentTarget.classList.add("grab");
      wake();
    };
    const onMove = (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const p = local(e);
      const b = drag.body;
      const nx = Math.min(Math.max(p.x + drag.ox, b.rad), W - b.rad);
      const ny = Math.min(Math.max(p.y + drag.oy, b.rad), floor - b.rad);
      const dt = Math.max((p.t - drag.last.t) / 1000, 1 / 240);
      drag.vx = drag.vx * 0.5 + ((nx - b.x) / dt) * 0.5;
      drag.vy = drag.vy * 0.5 + ((ny - b.y) / dt) * 0.5;
      // spin a bit with sideways drags
      b.w += (drag.vx / b.rad) * 0.5 - b.w * 0.2;
      b.x = nx;
      b.y = ny;
      drag.last = p;
      wake();
    };
    const onTap = (e) => {
      const b = bodies[toyRefs.current.indexOf(e.currentTarget)];
      if (!b) return;
      // give it a flick, and offer tilt controls on iOS
      b.vx += (Math.random() - 0.5) * 500;
      b.vy -= 650 + Math.random() * 250;
      b.w += (Math.random() - 0.5) * 900;
      wake();
      if (needsPermission && !granted) {
        const stored = readStore();
        // already said yes on an earlier visit: this tap is the gesture iOS needs to ask again (usually silently)
        if (stored === "granted") requestMotion();
        else if (stored !== "declined") setAskMotion(true);
      }
    };
    const onUp = (e) => {
      if (e.type === "pointerup" && e.pointerType !== "mouse") return onTap(e);
      if (!drag || e.pointerId !== drag.id) return;
      const b = drag.body;
      const stale = performance.now() - drag.last.t > 80; // held still before letting go
      const cap = 2600;
      b.vx = stale ? 0 : Math.max(-cap, Math.min(cap, drag.vx));
      b.vy = stale ? 0 : Math.max(-cap, Math.min(cap, drag.vy));
      b.el.classList.remove("grab");
      drag = null;
      wake();
    };
    bodies.forEach((b) => {
      b.el.addEventListener("pointerdown", onDown);
      b.el.addEventListener("pointermove", onMove);
      b.el.addEventListener("pointerup", onUp);
      b.el.addEventListener("pointercancel", onUp);
    });

    /* ---------- lifecycle: only run while the hero is on screen ---------- */
    measure(true);
    render();
    layer.classList.add("ready");

    const io = new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
      if (visible) {
        if (granted) startMotion();
        wake();
      } else {
        sleep();
        stopMotion();
        setAskMotion(false);
      }
    });
    io.observe(hero);

    const ro = new ResizeObserver(() => {
      measure(false);
      render();
      wake();
    });
    ro.observe(hero);

    const onVis = () => (document.hidden ? sleep() : wake());
    document.addEventListener("visibilitychange", onVis);

    api.current = {
      allow: () => {
        setAskMotion(false);
        requestMotion();
      },
      decline: () => {
        setAskMotion(false);
        writeStore("declined");
      },
    };

    return () => {
      sleep();
      stopMotion();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      bodies.forEach((b) => {
        b.el.removeEventListener("pointerdown", onDown);
        b.el.removeEventListener("pointermove", onMove);
        b.el.removeEventListener("pointerup", onUp);
        b.el.removeEventListener("pointercancel", onUp);
      });
      api.current = null;
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="toys" ref={layerRef}>
      {TOYS.map(({ key, Sprite }, i) => (
        <div key={key} className={`toy toy-${key}`} ref={(el) => (toyRefs.current[i] = el)} aria-hidden="true">
          <Sprite />
        </div>
      ))}
      {askMotion && (
        <div className="toy-ask" role="dialog" aria-label="Tilt to play">
          <strong>Tilt to play?</strong>
          <p>Let the beach toys roll around as you tilt your phone.</p>
          <div>
            <button type="button" className="toy-yes" onClick={() => api.current?.allow()}>Turn on</button>
            <button type="button" className="toy-no" onClick={() => api.current?.decline()}>Not now</button>
          </div>
        </div>
      )}
    </div>
  );
}
